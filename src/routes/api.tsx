import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

export const apiRoute = new Hono()

// Contact form submission
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string(),
  message: z.string().min(10),
  type: z.enum(['beratung', 'showroom', 'projekt', 'general'])
})

apiRoute.post('/contact', zValidator('json', contactSchema), async (c) => {
  const data = c.req.valid('json')
  
  // TODO: Implement email sending or database storage
  console.log('Contact form submission:', data)
  
  return c.json({
    success: true,
    message: 'Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 48 Stunden bei Ihnen.'
  })
})

// Newsletter subscription
apiRoute.post('/newsletter', zValidator('json', z.object({
  email: z.string().email()
})), async (c) => {
  const { email } = c.req.valid('json')
  
  // TODO: Implement newsletter subscription
  console.log('Newsletter subscription:', email)
  
  return c.json({
    success: true,
    message: 'Erfolgreich für den Newsletter angemeldet!'
  })
})

// Download tracking
apiRoute.post('/download', zValidator('json', z.object({
  file: z.string(),
  email: z.string().email(),
  name: z.string().min(2)
})), async (c) => {
  const data = c.req.valid('json')
  
  // TODO: Track download and send email with download link
  console.log('Download request:', data)
  
  return c.json({
    success: true,
    downloadUrl: `/downloads/${data.file}`
  })
})