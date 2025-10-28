import { Hono } from 'hono'
import { createTranslator } from '../../lib/i18n'
import { mediaAssets } from '../../config/media-assets'

export const ladenbauRoute = new Hono()

ladenbauRoute.get('/', (c) => {
  const { lang, t } = createTranslator(c)
  
  return c.render(
    <>
      {/* Hero Section with High-Tech Showroom Image */}
      <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src={mediaAssets.services.highTechShowroom} 
            alt="High-Tech Showroom" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        <div class="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 class="font-display text-5xl md:text-7xl mb-6">
            {lang === 'en' ? 'Shop Fitting & Retail' : 'Ladenbau & Retail'}
          </h1>
          <p class="text-xl md:text-2xl opacity-90">
            {lang === 'en' 
              ? 'Create retail spaces that inspire and sell'
              : 'Schaffen Sie Verkaufsräume, die begeistern und verkaufen'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="font-display text-4xl mb-6">
                {lang === 'en' ? 'Professional Shop Design' : 'Professioneller Ladenbau für Ihren Erfolg'}
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                {lang === 'en' 
                  ? 'Your store is your business card. We design retail spaces that perfectly present your brand and delight customers.'
                  : 'Ihr Geschäft ist Ihre Visitenkarte. Wir gestalten Verkaufsräume, die Ihre Marke perfekt präsentieren und Kunden begeistern.'}
              </p>
              <p class="text-lg text-gray-700 mb-6">
                {lang === 'en'
                  ? 'From the initial idea to the finished installation, we accompany you through all phases of your shop fitting project.'
                  : 'Von der ersten Idee bis zur fertigen Einrichtung begleiten wir Sie durch alle Phasen Ihres Ladenbau-Projekts.'}
              </p>
              
              <h3 class="text-2xl font-bold mb-4">
                {lang === 'en' ? 'Our Expertise' : 'Unser Leistungsspektrum'}
              </h3>
              <ul class="space-y-2 mb-8">
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Sales counters and checkout areas' : 'Verkaufstheken und Kassenbereich'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Product shelves and display systems' : 'Warenregale und Präsentationssysteme'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Shop window design' : 'Schaufenstergestaltung'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Lighting concepts' : 'Beleuchtungskonzepte'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Corporate Design integration' : 'Corporate Design Integration'}</span>
                </li>
              </ul>
              
              <a href={`/kontakt?lang=${lang}`} class="btn-primary">
                <i class="fas fa-calendar-alt mr-2"></i>
                {lang === 'en' ? 'Book Consultation' : 'Beratungstermin vereinbaren'}
              </a>
            </div>
            
            <div>
              <img 
                src={mediaAssets.services.retail} 
                alt="Retail Construction" 
                class="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="font-display text-4xl text-center mb-12">
            {lang === 'en' ? 'Industries We Serve' : 'Branchen'}
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-tshirt text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Fashion & Textiles' : 'Mode & Textil'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Boutiques, flagship stores, and fashion retail spaces.'
                  : 'Boutiquen, Flagship-Stores und Fashion-Retail-Flächen.'}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-gem text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Jewelry & Watches' : 'Schmuck & Uhren'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Exclusive showcases and security solutions.'
                  : 'Exklusive Vitrinen und Sicherheitslösungen.'}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-laptop text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Electronics' : 'Elektronik'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Modern tech stores with interactive displays.'
                  : 'Moderne Tech-Stores mit interaktiven Displays.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="font-display text-4xl text-center mb-12">
            {lang === 'en' ? 'Your Benefits' : 'Ihre Vorteile'}
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-8 rounded-lg text-center">
              <i class="fas fa-chart-line text-4xl text-black mb-4"></i>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Sales Increase' : 'Umsatzsteigerung'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Well-thought-out store design demonstrably leads to higher sales.'
                  : 'Durchdachte Ladengestaltung führt nachweislich zu höheren Umsätzen.'}
              </p>
            </div>
            
            <div class="bg-gray-50 p-8 rounded-lg text-center">
              <i class="fas fa-users text-4xl text-black mb-4"></i>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Customer Retention' : 'Kundenbindung'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Create an atmosphere where your customers feel comfortable.'
                  : 'Schaffen Sie eine Atmosphäre, in der sich Ihre Kunden wohlfühlen.'}
              </p>
            </div>
            
            <div class="bg-gray-50 p-8 rounded-lg text-center">
              <i class="fas fa-award text-4xl text-black mb-4"></i>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Brand Identity' : 'Markenidentität'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Strengthen your brand through consistent design.'
                  : 'Stärken Sie Ihre Marke durch einheitliches Design.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-brand-anthrazit text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="font-display text-4xl mb-6">
            {lang === 'en' ? 'Ready for Your Store Transformation?' : 'Bereit für Ihre Store-Transformation?'}
          </h2>
          <p class="text-xl mb-8 max-w-3xl mx-auto">
            {lang === 'en'
              ? 'Let\'s create a retail space that showcases your brand and drives sales.'
              : 'Lassen Sie uns einen Verkaufsraum schaffen, der Ihre Marke präsentiert und Umsätze steigert.'}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/kontakt?lang=${lang}`} class="btn-white-large">
              <i class="fas fa-calendar-alt mr-2"></i>
              {lang === 'en' ? 'Book Consultation' : 'Beratung vereinbaren'}
            </a>
            <a href={`/projekte?lang=${lang}&filter=retail`} class="btn-white-outline-large">
              <i class="fas fa-images mr-2"></i>
              {lang === 'en' ? 'View Retail Projects' : 'Retail-Projekte ansehen'}
            </a>
          </div>
        </div>
      </section>
    </>,
    { 
      title: lang === 'en' 
        ? 'Shop Fitting & Retail | Brandstifter Urban Manufactur' 
        : 'Ladenbau & Retail | Brandstifter Urban Manufactur',
      description: lang === 'en'
        ? 'Professional shop fitting and retail design. Create spaces that inspire and sell.'
        : 'Professioneller Ladenbau und Retail-Design. Schaffen Sie Räume, die begeistern und verkaufen.'
    }
  )
})