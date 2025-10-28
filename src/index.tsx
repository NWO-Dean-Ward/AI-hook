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
import { downloadsRoute } from './routes/downloads'
import { apiRoute } from './routes/api'
import ueberUnsRoute from './routes/ueber-uns'

// Import service subpages
import { kuechenRoute } from './routes/leistungen/kuechen'
import { badmoebelRoute } from './routes/leistungen/badmoebel'
import { ladenbauRoute } from './routes/leistungen/ladenbau'
import { gastronomieRoute } from './routes/leistungen/gastronomie'
import { bueroRoute } from './routes/leistungen/buero'
import { outdoorRoute } from './routes/leistungen/outdoor'

// Import admin routes
import authRoute from './routes/admin/auth'
import projectsRoute from './routes/admin/projects'
import blogRoute from './routes/admin/blog'
import adminDashboardRoute from './routes/admin/dashboard'

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

// Mount service subpages FIRST (before general /leistungen route)
app.route('/leistungen/kuechen', kuechenRoute)
app.route('/leistungen/badmoebel', badmoebelRoute)
app.route('/leistungen/ladenbau', ladenbauRoute)
app.route('/leistungen/gastronomie', gastronomieRoute)
app.route('/leistungen/buero', bueroRoute)
app.route('/leistungen/outdoor', outdoorRoute)

// Mount general routes AFTER specific ones
app.route('/leistungen', leistungenRoute)
app.route('/projekte', projekteRoute)
app.route('/manufaktur', manufakturRoute)
app.route('/ueber-uns', ueberUnsRoute)
app.route('/kontakt', kontaktRoute)
app.route('/downloads', downloadsRoute)
app.route('/api', apiRoute)

// Mount admin routes
app.route('/admin', adminDashboardRoute)
app.route('/api/admin/auth', authRoute)
app.route('/api/admin/projects', projectsRoute)
app.route('/api/admin/blog', blogRoute)

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