import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { sendContactFormEmails, sendDownloadEmail, sendEmail } from '../lib/emailService'

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
  
  // Send emails
  const emailSent = await sendContactFormEmails({
    ...data,
    company: data.phone || undefined,
    newsletter: true
  })
  
  if (!emailSent) {
    return c.json({
      success: false,
      message: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
    }, 500)
  }
  
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
  
  // Send welcome email
  const emailSent = await sendEmail({
    to: email,
    subject: 'Willkommen beim Brandstifter Newsletter',
    html: `
      <h2>Willkommen beim Brandstifter Newsletter!</h2>
      <p>Vielen Dank für Ihre Anmeldung. Sie erhalten ab sofort unsere neuesten Updates, Projekte und Inspirationen.</p>
      <p>Mit freundlichen Grüßen<br>Ihr Brandstifter Team</p>
    `
  })
  
  return c.json({
    success: emailSent,
    message: emailSent ? 'Erfolgreich für den Newsletter angemeldet!' : 'Fehler bei der Anmeldung.'
  })
})

// Download tracking
apiRoute.post('/download', zValidator('json', z.object({
  file: z.string(),
  email: z.string().email(),
  name: z.string().min(2),
  company: z.string().optional(),
  type: z.string().optional()
})), async (c) => {
  const data = c.req.valid('json')
  
  // Send download email
  const emailSent = await sendDownloadEmail(data)
  
  if (!emailSent) {
    return c.json({
      success: false,
      message: 'Fehler beim Versenden des Download-Links.'
    }, 500)
  }
  
  return c.json({
    success: true,
    downloadUrl: `/downloads/${data.file}.pdf`,
    message: 'Der Download-Link wurde an Ihre E-Mail-Adresse gesendet.'
  })
})