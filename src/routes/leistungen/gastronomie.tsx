import { Hono } from 'hono'
import { createTranslator } from '../../lib/i18n'
import { mediaAssets } from '../../config/media-assets'

export const gastronomieRoute = new Hono()

gastronomieRoute.get('/', (c) => {
  const { lang, t } = createTranslator(c)
  
  return c.render(
    <>
      {/* Hero Section with Restaurant Interior Image */}
      <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src={mediaAssets.services.restaurantInterior} 
            alt="Restaurant Interior" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        <div class="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 class="font-display text-5xl md:text-7xl mb-6">
            {lang === 'en' ? 'Gastronomy & Hospitality' : 'Gastronomie & Hospitality'}
          </h1>
          <p class="text-xl md:text-2xl opacity-90">
            {lang === 'en' 
              ? 'Creating unforgettable dining experiences'
              : 'Unvergessliche Gastronomie-Erlebnisse schaffen'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="font-display text-4xl mb-6">
                {lang === 'en' ? 'Restaurant Interiors with Character' : 'Gastronomieeinrichtungen mit Charakter'}
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                {lang === 'en' 
                  ? 'Create a unique atmosphere that delights your guests. Our custom restaurant furnishings combine functionality with exceptional design.'
                  : 'Schaffen Sie eine einzigartige Atmosphäre, die Ihre Gäste begeistert. Unsere maßgeschneiderten Gastronomieeinrichtungen verbinden Funktionalität mit außergewöhnlichem Design.'}
              </p>
              <p class="text-lg text-gray-700 mb-6">
                {lang === 'en'
                  ? 'Whether cozy café, elegant restaurant, or trendy bar – we develop individual interior concepts that perfectly implement your gastronomic vision.'
                  : 'Ob gemütliches Café, elegantes Restaurant oder trendige Bar – wir entwickeln individuelle Einrichtungskonzepte, die Ihre gastronomische Vision perfekt umsetzen.'}
              </p>
              
              <h3 class="text-2xl font-bold mb-4">
                {lang === 'en' ? 'Our Specialties' : 'Unsere Spezialgebiete'}
              </h3>
              <ul class="space-y-2 mb-8">
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Counters and bar furnishings' : 'Theken und Bareinrichtungen'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Seating benches and room dividers' : 'Sitzbänke und Raumtrenner'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Buffet systems and service stations' : 'Buffetanlagen und Servicestationen'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Wine racks and beverage displays' : 'Weinregale und Getränkepräsentation'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Acoustic solutions for optimal room acoustics' : 'Akustiklösungen für optimale Raumakustik'}</span>
                </li>
              </ul>
              
              <a href={`/kontakt?lang=${lang}`} class="btn-primary">
                <i class="fas fa-calendar-alt mr-2"></i>
                {lang === 'en' ? 'Book Consultation' : 'Beratungstermin vereinbaren'}
              </a>
            </div>
            
            <div>
              <img 
                src={mediaAssets.services.restaurant} 
                alt="Restaurant Design" 
                class="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Types Grid */}
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="font-display text-4xl text-center mb-12">
            {lang === 'en' ? 'Restaurant Types' : 'Gastronomietypen'}
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-coffee text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Cafés & Bistros' : 'Cafés & Bistros'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Cozy atmospheres for coffee and conversation.'
                  : 'Gemütliche Atmosphäre für Kaffee und Gespräche.'}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-wine-glass text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Fine Dining' : 'Fine Dining'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Elegant spaces for culinary excellence.'
                  : 'Elegante Räume für kulinarische Exzellenz.'}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-cocktail text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Bars & Lounges' : 'Bars & Lounges'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Stylish venues for evening entertainment.'
                  : 'Stilvolle Locations für abendliche Unterhaltung.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="font-display text-4xl text-center mb-12">
            {lang === 'en' ? 'Why Choose Our Gastronomy Solutions?' : 'Warum unsere Gastronomielösungen?'}
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-8 rounded-lg text-center">
              <i class="fas fa-clock text-4xl text-black mb-4"></i>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Efficient Operations' : 'Schnelle Abläufe'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Well-thought-out furnishings optimize your workflows.'
                  : 'Durchdachte Einrichtung optimiert Ihre Arbeitsabläufe.'}
              </p>
            </div>
            
            <div class="bg-gray-50 p-8 rounded-lg text-center">
              <i class="fas fa-heart text-4xl text-black mb-4"></i>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Guest Comfort' : 'Wohlfühlatmosphäre'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Inviting design increases your guests\' length of stay.'
                  : 'Einladende Gestaltung erhöht die Verweildauer Ihrer Gäste.'}
              </p>
            </div>
            
            <div class="bg-gray-50 p-8 rounded-lg text-center">
              <i class="fas fa-shield-alt text-4xl text-black mb-4"></i>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Durability' : 'Langlebigkeit'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Robust materials for intensive restaurant operations.'
                  : 'Robuste Materialien für den intensiven Gastronomiebetrieb.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-brand-anthrazit text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="font-display text-4xl mb-6">
            {lang === 'en' ? 'Ready to Transform Your Restaurant?' : 'Bereit für Ihre Gastronomie-Transformation?'}
          </h2>
          <p class="text-xl mb-8 max-w-3xl mx-auto">
            {lang === 'en'
              ? 'Let\'s create a dining space that delights guests and supports your culinary vision.'
              : 'Lassen Sie uns einen Gastraum schaffen, der Gäste begeistert und Ihre kulinarische Vision unterstützt.'}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/kontakt?lang=${lang}`} class="btn-white-large">
              <i class="fas fa-calendar-alt mr-2"></i>
              {lang === 'en' ? 'Schedule Consultation' : 'Beratung vereinbaren'}
            </a>
            <a href={`/projekte?lang=${lang}&filter=gastronomy`} class="btn-white-outline-large">
              <i class="fas fa-images mr-2"></i>
              {lang === 'en' ? 'View Restaurant Projects' : 'Gastronomie-Projekte ansehen'}
            </a>
          </div>
        </div>
      </section>
    </>,
    { 
      title: lang === 'en' 
        ? 'Gastronomy & Hospitality | Brandstifter Urban Manufactur' 
        : 'Gastronomie & Hospitality | Brandstifter Urban Manufactur',
      description: lang === 'en'
        ? 'Professional restaurant interiors. Create unforgettable dining experiences.'
        : 'Professionelle Gastronomieeinrichtungen. Schaffen Sie unvergessliche Gastronomie-Erlebnisse.'
    }
  )
})