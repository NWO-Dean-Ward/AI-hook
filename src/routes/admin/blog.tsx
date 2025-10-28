import { Hono } from 'hono'
import { authMiddleware } from './auth'

type Bindings = {
  DB: D1Database;
}

export const blogRoute = new Hono<{ Bindings: Bindings }>()

// Apply auth middleware to all routes
blogRoute.use('*', authMiddleware)

// Get all blog posts
blogRoute.get('/', async (c) => {
  try {
    const page = parseInt(c.req.query('page') || '1')
    const limit = parseInt(c.req.query('limit') || '20')
    const offset = (page - 1) * limit
    const category = c.req.query('category')
    const isPublished = c.req.query('published')
    
    let query = 'SELECT * FROM blog_posts WHERE 1=1'
    const params = []
    
    if (category) {
      query += ' AND category = ?'
      params.push(category)
    }
    
    if (isPublished !== undefined) {
      query += ' AND is_published = ?'
      params.push(isPublished === 'true' ? 1 : 0)
    }
    
    query += ' ORDER BY published_at DESC, created_at DESC LIMIT ? OFFSET ?'
    params.push(limit, offset)
    
    const { results } = await c.env.DB.prepare(query).bind(...params).all()
    
    // Get total count
    let countQuery = 'SELECT COUNT(*) as total FROM blog_posts WHERE 1=1'
    const countParams = []
    
    if (category) {
      countQuery += ' AND category = ?'
      countParams.push(category)
    }
    
    if (isPublished !== undefined) {
      countQuery += ' AND is_published = ?'
      countParams.push(isPublished === 'true' ? 1 : 0)
    }
    
    const count = await c.env.DB.prepare(countQuery).bind(...countParams).first()
    
    return c.json({
      posts: results,
      pagination: {
        page,
        limit,
        total: count?.total || 0,
        pages: Math.ceil((count?.total || 0) / limit)
      }
    })
  } catch (error) {
    console.error('Get blog posts error:', error)
    return c.json({ error: 'Failed to fetch blog posts' }, 500)
  }
})

// Get single blog post
blogRoute.get('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    
    const post = await c.env.DB.prepare(
      'SELECT * FROM blog_posts WHERE id = ? OR slug = ?'
    ).bind(id, id).first()
    
    if (!post) {
      return c.json({ error: 'Blog post not found' }, 404)
    }
    
    // Increment view count
    await c.env.DB.prepare(
      'UPDATE blog_posts SET view_count = view_count + 1 WHERE id = ?'
    ).bind(post.id).run()
    
    return c.json(post)
  } catch (error) {
    console.error('Get blog post error:', error)
    return c.json({ error: 'Failed to fetch blog post' }, 500)
  }
})

// Create blog post
blogRoute.post('/', async (c) => {
  try {
    const user = c.get('user')
    const data = await c.req.json()
    
    // Generate slug if not provided
    if (!data.slug) {
      data.slug = data.title_de.toLowerCase()
        .replace(/[äöü]/g, (match: string) => {
          const map: {[key: string]: string} = { 'ä': 'ae', 'ö': 'oe', 'ü': 'ue' }
          return map[match] || match
        })
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    }
    
    // Convert tags array to JSON string
    if (data.tags && Array.isArray(data.tags)) {
      data.tags = JSON.stringify(data.tags)
    }
    
    // Set published_at if publishing
    if (data.is_published && !data.published_at) {
      data.published_at = new Date().toISOString()
    }
    
    const result = await c.env.DB.prepare(`
      INSERT INTO blog_posts (
        title_de, title_en, slug, excerpt_de, excerpt_en,
        content_de, content_en, featured_image, category, tags,
        author_id, is_published, published_at,
        meta_title_de, meta_title_en, meta_description_de, meta_description_en
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      data.title_de, data.title_en, data.slug, data.excerpt_de, data.excerpt_en,
      data.content_de, data.content_en, data.featured_image, data.category, data.tags,
      user.id, data.is_published ? 1 : 0, data.published_at,
      data.meta_title_de, data.meta_title_en,
      data.meta_description_de, data.meta_description_en
    ).run()
    
    return c.json({
      success: true,
      id: result.meta.last_row_id,
      message: 'Blog post created successfully'
    })
  } catch (error) {
    console.error('Create blog post error:', error)
    return c.json({ error: 'Failed to create blog post' }, 500)
  }
})

// Update blog post
blogRoute.put('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const data = await c.req.json()
    
    // Convert tags array to JSON string
    if (data.tags && Array.isArray(data.tags)) {
      data.tags = JSON.stringify(data.tags)
    }
    
    // Set published_at if publishing for the first time
    if (data.is_published && !data.published_at) {
      data.published_at = new Date().toISOString()
    }
    
    const result = await c.env.DB.prepare(`
      UPDATE blog_posts SET
        title_de = ?, title_en = ?, slug = ?, excerpt_de = ?, excerpt_en = ?,
        content_de = ?, content_en = ?, featured_image = ?, category = ?, tags = ?,
        is_published = ?, published_at = ?,
        meta_title_de = ?, meta_title_en = ?, meta_description_de = ?, meta_description_en = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(
      data.title_de, data.title_en, data.slug, data.excerpt_de, data.excerpt_en,
      data.content_de, data.content_en, data.featured_image, data.category, data.tags,
      data.is_published ? 1 : 0, data.published_at,
      data.meta_title_de, data.meta_title_en,
      data.meta_description_de, data.meta_description_en, id
    ).run()
    
    if (result.meta.changes === 0) {
      return c.json({ error: 'Blog post not found' }, 404)
    }
    
    return c.json({
      success: true,
      message: 'Blog post updated successfully'
    })
  } catch (error) {
    console.error('Update blog post error:', error)
    return c.json({ error: 'Failed to update blog post' }, 500)
  }
})

// Delete blog post
blogRoute.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    
    const result = await c.env.DB.prepare(
      'DELETE FROM blog_posts WHERE id = ?'
    ).bind(id).run()
    
    if (result.meta.changes === 0) {
      return c.json({ error: 'Blog post not found' }, 404)
    }
    
    return c.json({
      success: true,
      message: 'Blog post deleted successfully'
    })
  } catch (error) {
    console.error('Delete blog post error:', error)
    return c.json({ error: 'Failed to delete blog post' }, 500)
  }
})

export default blogRoute