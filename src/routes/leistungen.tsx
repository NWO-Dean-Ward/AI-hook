import { Hono } from 'hono'

export const leistungenRoute = new Hono()

leistungenRoute.get('/', (c) => {
  return c.render(
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-display text-brand-anthrazit mb-8">Unsere Leistungen</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service cards will go here */}
      </div>
    </div>,
    { title: 'Leistungen | Brandstifter Urban Manufactur' }
  )
})

leistungenRoute.get('/kuechen', (c) => {
  return c.render(
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-display text-brand-anthrazit mb-8">Küchen & Wohnkonzepte</h1>
      <p class="text-lg text-gray-700">Maßgefertigte Premium-Küchen aus unserer Manufaktur...</p>
    </div>,
    { title: 'Küchen & Wohnkonzepte | Brandstifter Urban Manufactur' }
  )
})