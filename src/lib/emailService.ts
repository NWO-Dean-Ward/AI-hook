// Email Service using Resend API (or fallback to console.log in development)
// In production, you would use environment variables for API keys

interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
  replyTo?: string
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  type: string
  company?: string
  projectType?: string
  timeline?: string
  budget?: string
  newsletter?: boolean
}

interface DownloadData {
  name: string
  email: string
  file: string
  company?: string
  type?: string
}

// Email templates
export const emailTemplates = {
  // Contact form submission email to admin
  contactFormAdmin: (data: ContactFormData) => {
    return {
      subject: `Neue Kontaktanfrage: ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2C2C2C; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 3px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Neue Kontaktanfrage über die Website</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Art der Anfrage:</div>
                <div class="value">${data.type}</div>
              </div>
              
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <div class="label">E-Mail:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              
              ${data.phone ? `
              <div class="field">
                <div class="label">Telefon:</div>
                <div class="value">${data.phone}</div>
              </div>
              ` : ''}
              
              ${data.company ? `
              <div class="field">
                <div class="label">Firma:</div>
                <div class="value">${data.company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Betreff:</div>
                <div class="value">${data.subject}</div>
              </div>
              
              <div class="field">
                <div class="label">Nachricht:</div>
                <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
              
              ${data.projectType ? `
              <div class="field">
                <div class="label">Projekt-Typ:</div>
                <div class="value">${data.projectType}</div>
              </div>
              ` : ''}
              
              ${data.timeline ? `
              <div class="field">
                <div class="label">Zeitrahmen:</div>
                <div class="value">${data.timeline}</div>
              </div>
              ` : ''}
              
              ${data.budget ? `
              <div class="field">
                <div class="label">Budget:</div>
                <div class="value">${data.budget}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Newsletter:</div>
                <div class="value">${data.newsletter ? 'Ja' : 'Nein'}</div>
              </div>
              
              <div class="footer">
                <p>Diese E-Mail wurde automatisch von der Brandstifter Website generiert.</p>
                <p>Zeitstempel: ${new Date().toLocaleString('de-DE')}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    }
  },

  // Auto-reply to customer
  contactFormCustomer: (data: ContactFormData) => {
    return {
      subject: 'Ihre Anfrage bei Brandstifter Urban Manufactur',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Georgia, serif; line-height: 1.8; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; padding: 30px 0; border-bottom: 2px solid #B08D57; }
            .logo { font-size: 24px; font-weight: bold; color: #2C2C2C; }
            .content { padding: 30px 0; }
            .signature { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; }
            .footer { margin-top: 40px; padding: 20px; background: #f5f5f5; text-align: center; font-size: 12px; }
            a { color: #B08D57; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">BRANDSTIFTER</div>
              <div style="font-size: 12px; color: #666; letter-spacing: 2px;">URBAN MANUFACTUR</div>
            </div>
            
            <div class="content">
              <p>Sehr geehrte/r ${data.name},</p>
              
              <p>vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 48 Stunden bei Ihnen melden.</p>
              
              <p><strong>Ihre Anfrage im Überblick:</strong></p>
              <div style="background: #f9f9f9; padding: 20px; margin: 20px 0; border-left: 3px solid #B08D57;">
                <p><strong>Betreff:</strong> ${data.subject}</p>
                <p><strong>Nachricht:</strong><br>${data.message}</p>
              </div>
              
              <p>In der Zwischenzeit möchten wir Sie einladen, sich auf unserer Website umzusehen:</p>
              <ul>
                <li><a href="https://brandstifter.online/projekte">Unsere Projekte ansehen</a></li>
                <li><a href="https://brandstifter.online/manufaktur">Die Manufaktur entdecken</a></li>
                <li><a href="https://brandstifter.online/downloads">Planungshilfen herunterladen</a></li>
              </ul>
              
              <div class="signature">
                <p>Mit freundlichen Grüßen</p>
                <p><strong>Ihr Brandstifter Team</strong></p>
                <p style="color: #666; font-size: 14px;">
                  Dieselstraße 15<br>
                  61239 Ober-Mörlen<br>
                  Tel: +49 (0) 6002 123 456<br>
                  <a href="mailto:info@brandstifter.online">info@brandstifter.online</a>
                </p>
              </div>
            </div>
            
            <div class="footer">
              <p>© ${new Date().getFullYear()} Brandstifter Urban Manufactur. Alle Rechte vorbehalten.</p>
              <p>
                <a href="https://brandstifter.online/impressum">Impressum</a> | 
                <a href="https://brandstifter.online/datenschutz">Datenschutz</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    }
  },

  // Download link email
  downloadLink: (data: DownloadData, downloadUrl: string) => {
    return {
      subject: `Ihr Download: ${data.file}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Georgia, serif; line-height: 1.8; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; padding: 30px 0; border-bottom: 2px solid #B08D57; }
            .download-button { 
              display: inline-block; 
              padding: 15px 30px; 
              background: #B08D57; 
              color: white; 
              text-decoration: none; 
              border-radius: 5px; 
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div style="font-size: 24px; font-weight: bold; color: #2C2C2C;">BRANDSTIFTER</div>
            </div>
            
            <div style="padding: 30px 0;">
              <p>Hallo ${data.name},</p>
              
              <p>vielen Dank für Ihr Interesse an unseren Planungshilfen.</p>
              
              <p>Klicken Sie auf den Button unten, um Ihren Download zu starten:</p>
              
              <div style="text-align: center;">
                <a href="${downloadUrl}" class="download-button">Download starten</a>
              </div>
              
              <p style="font-size: 14px; color: #666;">
                Der Download-Link ist 7 Tage gültig. Falls Sie Probleme beim Download haben, 
                kontaktieren Sie uns bitte unter info@brandstifter.online.
              </p>
              
              <p>Wir wünschen Ihnen viel Erfolg bei Ihrer Planung!</p>
              
              <p>Mit freundlichen Grüßen<br>
              Ihr Brandstifter Team</p>
            </div>
          </div>
        </body>
        </html>
      `
    }
  }
}

// Main email sending function
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  // In production, you would use an actual email service like Resend, SendGrid, etc.
  // For now, we'll log to console and return success
  
  console.log('📧 Email would be sent:', {
    to: options.to,
    subject: options.subject,
    from: options.from || 'info@brandstifter.online',
    replyTo: options.replyTo
  })
  
  // In development, log the email content
  if (process.env.NODE_ENV === 'development') {
    console.log('Email HTML:', options.html)
  }
  
  // TODO: Implement actual email sending with service like:
  // - Resend (https://resend.com)
  // - SendGrid (https://sendgrid.com)
  // - AWS SES
  // - Mailgun
  
  // Example with Resend (when API key is available):
  /*
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: options.from || 'Brandstifter <info@brandstifter.online>',
        to: options.to,
        subject: options.subject,
        html: options.html,
        reply_to: options.replyTo
      })
    })
    
    return response.ok
  } catch (error) {
    console.error('Email send error:', error)
    return false
  }
  */
  
  return true // Simulated success
}

// Helper functions for specific email types
export async function sendContactFormEmails(data: ContactFormData): Promise<boolean> {
  try {
    // Send admin notification
    const adminEmail = emailTemplates.contactFormAdmin(data)
    await sendEmail({
      to: 'info@brandstifter.online', // Admin email
      subject: adminEmail.subject,
      html: adminEmail.html,
      replyTo: data.email
    })
    
    // Send customer confirmation
    const customerEmail = emailTemplates.contactFormCustomer(data)
    await sendEmail({
      to: data.email,
      subject: customerEmail.subject,
      html: customerEmail.html
    })
    
    return true
  } catch (error) {
    console.error('Error sending contact form emails:', error)
    return false
  }
}

export async function sendDownloadEmail(data: DownloadData): Promise<boolean> {
  try {
    const downloadUrl = `https://brandstifter.online/downloads/${data.file}.pdf`
    const email = emailTemplates.downloadLink(data, downloadUrl)
    
    await sendEmail({
      to: data.email,
      subject: email.subject,
      html: email.html
    })
    
    return true
  } catch (error) {
    console.error('Error sending download email:', error)
    return false
  }
}