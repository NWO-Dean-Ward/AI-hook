import { Hono } from 'hono'
import { authMiddleware } from './auth'

type Bindings = {
  DB: D1Database;
}

export const projectsRoute = new Hono<{ Bindings: Bindings }>()

// Apply auth middleware to all routes
projectsRoute.use('*', authMiddleware)

// Get all projects
projectsRoute.get('/', async (c) => {
  try {
    const page = parseInt(c.req.query('page') || '1')
    const limit = parseInt(c.req.query('limit') || '20')
    const offset = (page - 1) * limit
    const category = c.req.query('category')
    const isPublished = c.req.query('published')
    
    let query = 'SELECT * FROM projects WHERE 1=1'
    const params = []
    
    if (category) {
      query += ' AND category = ?'
      params.push(category)
    }
    
    if (isPublished !== undefined) {
      query += ' AND is_published = ?'
      params.push(isPublished === 'true' ? 1 : 0)
    }
    
    query += ' ORDER BY display_order ASC, created_at DESC LIMIT ? OFFSET ?'
    params.push(limit, offset)
    
    const { results } = await c.env.DB.prepare(query).bind(...params).all()
    
    // Get total count
    let countQuery = 'SELECT COUNT(*) as total FROM projects WHERE 1=1'
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
      projects: results,
      pagination: {
        page,
        limit,
        total: count?.total || 0,
        pages: Math.ceil((count?.total || 0) / limit)
      }
    })
  } catch (error) {
    console.error('Get projects error:', error)
    return c.json({ error: 'Failed to fetch projects' }, 500)
  }
})

// Get single project
projectsRoute.get('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    
    const project = await c.env.DB.prepare(
      'SELECT * FROM projects WHERE id = ? OR slug = ?'
    ).bind(id, id).first()
    
    if (!project) {
      return c.json({ error: 'Project not found' }, 404)
    }
    
    return c.json(project)
  } catch (error) {
    console.error('Get project error:', error)
    return c.json({ error: 'Failed to fetch project' }, 500)
  }
})

// Create project
projectsRoute.post('/', async (c) => {
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
    
    // Convert gallery_images array to JSON string
    if (data.gallery_images && Array.isArray(data.gallery_images)) {
      data.gallery_images = JSON.stringify(data.gallery_images)
    }
    
    const result = await c.env.DB.prepare(`
      INSERT INTO projects (
        title_de, title_en, slug, description_de, description_en,
        category, client_type, year, featured_image, gallery_images,
        content_de, content_en, is_featured, is_published, display_order,
        meta_title_de, meta_title_en, meta_description_de, meta_description_en,
        created_by
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      data.title_de, data.title_en, data.slug, data.description_de, data.description_en,
      data.category, data.client_type, data.year, data.featured_image, data.gallery_images,
      data.content_de, data.content_en, data.is_featured ? 1 : 0, data.is_published ? 1 : 0,
      data.display_order || 0, data.meta_title_de, data.meta_title_en,
      data.meta_description_de, data.meta_description_en, user.id
    ).run()
    
    return c.json({
      success: true,
      id: result.meta.last_row_id,
      message: 'Project created successfully'
    })
  } catch (error) {
    console.error('Create project error:', error)
    return c.json({ error: 'Failed to create project' }, 500)
  }
})

// Update project
projectsRoute.put('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const data = await c.req.json()
    
    // Convert gallery_images array to JSON string
    if (data.gallery_images && Array.isArray(data.gallery_images)) {
      data.gallery_images = JSON.stringify(data.gallery_images)
    }
    
    const result = await c.env.DB.prepare(`
      UPDATE projects SET
        title_de = ?, title_en = ?, slug = ?, description_de = ?, description_en = ?,
        category = ?, client_type = ?, year = ?, featured_image = ?, gallery_images = ?,
        content_de = ?, content_en = ?, is_featured = ?, is_published = ?, display_order = ?,
        meta_title_de = ?, meta_title_en = ?, meta_description_de = ?, meta_description_en = ?,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(
      data.title_de, data.title_en, data.slug, data.description_de, data.description_en,
      data.category, data.client_type, data.year, data.featured_image, data.gallery_images,
      data.content_de, data.content_en, data.is_featured ? 1 : 0, data.is_published ? 1 : 0,
      data.display_order || 0, data.meta_title_de, data.meta_title_en,
      data.meta_description_de, data.meta_description_en, id
    ).run()
    
    if (result.meta.changes === 0) {
      return c.json({ error: 'Project not found' }, 404)
    }
    
    return c.json({
      success: true,
      message: 'Project updated successfully'
    })
  } catch (error) {
    console.error('Update project error:', error)
    return c.json({ error: 'Failed to update project' }, 500)
  }
})

// Delete project
projectsRoute.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    
    const result = await c.env.DB.prepare(
      'DELETE FROM projects WHERE id = ?'
    ).bind(id).run()
    
    if (result.meta.changes === 0) {
      return c.json({ error: 'Project not found' }, 404)
    }
    
    return c.json({
      success: true,
      message: 'Project deleted successfully'
    })
  } catch (error) {
    console.error('Delete project error:', error)
    return c.json({ error: 'Failed to delete project' }, 500)
  }
})

export default projectsRoute