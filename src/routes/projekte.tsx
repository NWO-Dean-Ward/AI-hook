import { Hono } from 'hono'

export const projekteRoute = new Hono()

projekteRoute.get('/', (c) => {
  return c.render(
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-display text-brand-anthrazit mb-8">Unsere Projekte</h1>
      <p class="text-lg text-gray-700 mb-8">Entdecken Sie unsere realisierten Projekte...</p>
      {/* Project gallery will go here */}
    </div>,
    { title: 'Projekte | Brandstifter Urban Manufactur' }
  )
})