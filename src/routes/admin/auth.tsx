import { Hono } from 'hono'
import { sign, verify } from 'hono/jwt'
import bcrypt from 'bcryptjs'

type Bindings = {
  DB: D1Database;
  JWT_SECRET: string;
}

export const authRoute = new Hono<{ Bindings: Bindings }>()

// Login endpoint
authRoute.post('/login', async (c) => {
  try {
    const { username, password } = await c.req.json()
    
    if (!username || !password) {
      return c.json({ error: 'Username and password required' }, 400)
    }

    // Get user from database
    const user = await c.env.DB.prepare(
      'SELECT * FROM admin_users WHERE username = ? OR email = ? AND is_active = 1'
    ).bind(username, username).first()

    if (!user) {
      return c.json({ error: 'Invalid credentials' }, 401)
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password_hash as string)
    if (!isValid) {
      return c.json({ error: 'Invalid credentials' }, 401)
    }

    // Generate JWT token
    const token = await sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7) // 7 days
      },
      c.env.JWT_SECRET || 'your-secret-key-change-in-production'
    )

    return c.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Verify token middleware
export async function authMiddleware(c: any, next: any) {
  const authHeader = c.req.header('Authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return c.json({ error: 'Unauthorized' }, 401)
  }

  const token = authHeader.substring(7)
  
  try {
    const payload = await verify(
      token,
      c.env.JWT_SECRET || 'your-secret-key-change-in-production'
    )
    c.set('user', payload)
    await next()
  } catch (error) {
    return c.json({ error: 'Invalid token' }, 401)
  }
}

// Change password
authRoute.post('/change-password', authMiddleware, async (c) => {
  try {
    const { currentPassword, newPassword } = await c.req.json()
    const user = c.get('user')
    
    // Get current user
    const dbUser = await c.env.DB.prepare(
      'SELECT password_hash FROM admin_users WHERE id = ?'
    ).bind(user.id).first()
    
    // Verify current password
    const isValid = await bcrypt.compare(currentPassword, dbUser.password_hash as string)
    if (!isValid) {
      return c.json({ error: 'Current password is incorrect' }, 400)
    }
    
    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10)
    
    // Update password
    await c.env.DB.prepare(
      'UPDATE admin_users SET password_hash = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
    ).bind(hashedPassword, user.id).run()
    
    return c.json({ success: true, message: 'Password changed successfully' })
  } catch (error) {
    console.error('Password change error:', error)
    return c.json({ error: 'Failed to change password' }, 500)
  }
})

export default authRoute