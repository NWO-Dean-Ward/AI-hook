import { Hono } from 'hono'

export const manufakturRoute = new Hono()

manufakturRoute.get('/', (c) => {
  return c.render(
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-display text-brand-anthrazit mb-8">Unsere Manufaktur</h1>
      <p class="text-lg text-gray-700 mb-8">2.500m² Handwerkskunst in Ober-Mörlen...</p>
      {/* Manufactory content will go here */}
    </div>,
    { title: 'Manufaktur | Brandstifter Urban Manufactur' }
  )
})