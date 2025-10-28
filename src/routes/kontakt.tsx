import { Hono } from 'hono'

export const kontaktRoute = new Hono()

kontaktRoute.get('/', (c) => {
  return c.render(
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-display text-brand-anthrazit mb-8">Kontakt</h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 class="text-2xl font-bold mb-4">Showroom Ober-Mörlen</h2>
          <address class="not-italic text-gray-700">
            <p>Dieselstraße 15</p>
            <p>61239 Ober-Mörlen</p>
            <p class="mt-4">Tel: +49 (0) 6002 123 456</p>
            <p>Email: info@brandstifter.online</p>
          </address>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Terminbuchung</h2>
          {/* Contact form will go here */}
        </div>
      </div>
    </div>,
    { title: 'Kontakt | Brandstifter Urban Manufactur' }
  )
})