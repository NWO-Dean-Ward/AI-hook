import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-pages'
import { renderer } from './renderer'

// Import routes
import { homeRoute } from './routes/home'
import { leistungenRoute } from './routes/leistungen'
import { projekteRoute } from './routes/projekte'
import { manufakturRoute } from './routes/manufaktur'
import { kontaktRoute } from './routes/kontakt'
import { apiRoute } from './routes/api'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Use renderer middleware
app.use('*', renderer)

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/images/*', serveStatic({ root: './public' }))
app.use('/downloads/*', serveStatic({ root: './public' }))

// Mount routes
app.route('/', homeRoute)
app.route('/leistungen', leistungenRoute)
app.route('/projekte', projekteRoute)
app.route('/manufaktur', manufakturRoute)
app.route('/kontakt', kontaktRoute)
app.route('/api', apiRoute)

// 404 handler
app.notFound((c) => {
  return c.render(
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p class="text-xl text-gray-600 mb-8">Seite nicht gefunden</p>
        <a href="/" class="btn-primary">Zur Startseite</a>
      </div>
    </div>,
    { title: '404 - Nicht gefunden | Brandstifter Urban Manufactur' }
  )
})

export default app