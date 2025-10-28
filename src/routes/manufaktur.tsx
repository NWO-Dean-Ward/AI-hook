import { Hono } from 'hono'
import { createTranslator } from '../lib/i18n'
import { mediaAssets } from '../config/media-assets'

export const manufakturRoute = new Hono()

manufakturRoute.get('/', (c) => {
  const { lang, t } = createTranslator(c)
  
  return c.render(
    <>
      {/* Hero Section with Video */}
      <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <video 
            autoplay 
            muted 
            loop 
            playsinline 
            poster={mediaAssets.videos.manufakturPoster}
            class="w-full h-full object-cover"
          >
            <source src={mediaAssets.videos.manufaktur} type="video/mp4" />
            <img src={mediaAssets.videos.manufakturPoster} alt="Manufaktur" class="w-full h-full object-cover" />
          </video>
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        <div class="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 class="font-display text-5xl md:text-7xl mb-6">
            {lang === 'en' ? 'Our Manufactory' : 'Unsere Manufaktur'}
          </h1>
          <p class="text-xl md:text-2xl opacity-90">
            {lang === 'en' 
              ? '2,500m² of craftsmanship excellence in Ober-Mörlen'
              : '2.500m² Handwerkskunst in Ober-Mörlen'}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="font-display text-4xl mb-6">
                {lang === 'en' ? 'State-of-the-Art Technology' : 'Modernste Technologie'}
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                {lang === 'en' 
                  ? 'Our manufactory combines traditional craftsmanship with cutting-edge technology. With our modern CNC machines and experienced craftsmen, we realize even the most demanding projects.'
                  : 'Unsere Manufaktur vereint traditionelle Handwerkskunst mit modernster Technologie. Mit unseren modernen CNC-Maschinen und erfahrenen Handwerkern realisieren wir auch anspruchsvollste Projekte.'}
              </p>
              <p class="text-lg text-gray-700 mb-6">
                {lang === 'en'
                  ? 'From planning to production to assembly - everything comes from a single source. This ensures the highest quality and perfect coordination of all trades.'
                  : 'Von der Planung über die Produktion bis zur Montage – alles aus einer Hand. So garantieren wir höchste Qualität und perfekte Abstimmung aller Gewerke.'}
              </p>
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <div class="text-3xl font-bold text-black mb-2">2.500m²</div>
                  <p class="text-gray-600">{lang === 'en' ? 'Production Area' : 'Produktionsfläche'}</p>
                </div>
                <div>
                  <div class="text-3xl font-bold text-black mb-2">45</div>
                  <p class="text-gray-600">{lang === 'en' ? 'Specialists' : 'Spezialisten'}</p>
                </div>
                <div>
                  <div class="text-3xl font-bold text-black mb-2">100%</div>
                  <p class="text-gray-600">{lang === 'en' ? 'Made in Germany' : 'Made in Germany'}</p>
                </div>
                <div>
                  <div class="text-3xl font-bold text-black mb-2">15+</div>
                  <p class="text-gray-600">{lang === 'en' ? 'Years Experience' : 'Jahre Erfahrung'}</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={mediaAssets.services.workshop} 
                alt="Workshop" 
                class="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="font-display text-4xl text-center mb-12">
            {lang === 'en' ? 'Our Capabilities' : 'Unsere Kompetenzen'}
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <i class="fas fa-drafting-compass text-5xl text-black mb-4"></i>
              <h3 class="text-2xl font-bold mb-3">{lang === 'en' ? 'Planning' : 'Planung'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? '3D visualization and detailed planning with the latest CAD software'
                  : '3D-Visualisierung und detaillierte Planung mit modernster CAD-Software'}
              </p>
            </div>
            <div class="text-center">
              <i class="fas fa-industry text-5xl text-black mb-4"></i>
              <h3 class="text-2xl font-bold mb-3">{lang === 'en' ? 'Production' : 'Produktion'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Precise manufacturing with CNC technology and traditional craftsmanship'
                  : 'Präzise Fertigung mit CNC-Technologie und traditionellem Handwerk'}
              </p>
            </div>
            <div class="text-center">
              <i class="fas fa-tools text-5xl text-black mb-4"></i>
              <h3 class="text-2xl font-bold mb-3">{lang === 'en' ? 'Assembly' : 'Montage'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Professional installation by our experienced assembly teams'
                  : 'Professionelle Installation durch unsere erfahrenen Montageteams'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-brand-anthrazit text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="font-display text-4xl mb-6">
            {lang === 'en' ? 'Visit Our Showroom' : 'Besuchen Sie unseren Showroom'}
          </h2>
          <p class="text-xl mb-8 max-w-3xl mx-auto">
            {lang === 'en'
              ? 'Experience our quality and craftsmanship live. We look forward to your visit!'
              : 'Erleben Sie unsere Qualität und Handwerkskunst live. Wir freuen uns auf Ihren Besuch!'}
          </p>
          <a href={`/kontakt?lang=${lang}`} class="btn-white-large">
            <i class="fas fa-calendar-alt mr-2"></i>
            {lang === 'en' ? 'Book Appointment' : 'Termin vereinbaren'}
          </a>
        </div>
      </section>
    </>,
    { 
      title: lang === 'en' 
        ? 'Manufactory | Brandstifter Urban Manufactur' 
        : 'Manufaktur | Brandstifter Urban Manufactur',
      description: lang === 'en'
        ? '2,500m² of craftsmanship excellence. State-of-the-art technology meets traditional craftsmanship.'
        : '2.500m² Handwerkskunst. Modernste Technologie trifft traditionelles Handwerk.'
    }
  )
})