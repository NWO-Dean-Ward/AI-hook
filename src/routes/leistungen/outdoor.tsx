import { Hono } from 'hono'
import { createTranslator } from '../../lib/i18n'
import { mediaAssets } from '../../config/media-assets'

export const outdoorRoute = new Hono()

outdoorRoute.get('/', (c) => {
  const { lang, t } = createTranslator(c)
  
  return c.render(
    <>
      {/* Hero Section with Outdoor Terrace Image */}
      <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src={mediaAssets.services.outdoorTerrace} 
            alt="Outdoor Terrace" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        <div class="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 class="font-display text-5xl md:text-7xl mb-6">
            {lang === 'en' ? 'Outdoor & Terraces' : 'Outdoor & Terrassen'}
          </h1>
          <p class="text-xl md:text-2xl opacity-90">
            {lang === 'en' 
              ? 'Extend your living space into nature'
              : 'Erweitern Sie Ihren Wohnraum in die Natur'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="font-display text-4xl mb-6">
                {lang === 'en' ? 'Exclusive Outdoor Furniture' : 'Exklusive Outdoor-Möbel für Ihr Paradies'}
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                {lang === 'en' 
                  ? 'Extend your living space outdoors. Our high-quality outdoor furniture is perfectly matched to your terrace or garden and withstands all weather conditions.'
                  : 'Erweitern Sie Ihren Wohnraum ins Freie. Unsere hochwertigen Outdoor-Möbel sind perfekt auf Ihre Terrasse oder Ihren Garten abgestimmt und trotzen allen Witterungsbedingungen.'}
              </p>
              <p class="text-lg text-gray-700 mb-6">
                {lang === 'en'
                  ? 'With specially treated woods and weather-resistant materials, we create durable outdoor solutions that combine comfort and aesthetics. Enjoy your outdoor areas all year round.'
                  : 'Mit speziell behandelten Hölzern und wetterbeständigen Materialien schaffen wir langlebige Outdoor-Lösungen, die Komfort und Ästhetik vereinen. Genießen Sie Ihre Außenbereiche das ganze Jahr über.'}
              </p>
              
              <h3 class="text-2xl font-bold mb-4">
                {lang === 'en' ? 'Our Outdoor Range' : 'Unser Outdoor-Sortiment'}
              </h3>
              <ul class="space-y-2 mb-8">
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Patio furniture and lounge sets' : 'Terrassenmöbel und Loungegruppen'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Outdoor kitchens and grill stations' : 'Outdoor-Küchen und Grillstationen'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Pergolas and canopies' : 'Pergolen und Überdachungen'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Planters and raised beds' : 'Pflanzgefäße und Hochbeete'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Privacy screens and fence elements' : 'Sichtschutz und Zaunelemente'}</span>
                </li>
              </ul>
              
              <a href={`/kontakt?lang=${lang}`} class="btn-primary">
                <i class="fas fa-calendar-alt mr-2"></i>
                {lang === 'en' ? 'Book Consultation' : 'Beratungstermin vereinbaren'}
              </a>
            </div>
            
            <div>
              <img 
                src={mediaAssets.services.outdoor} 
                alt="Outdoor Furniture" 
                class="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="font-display text-4xl text-center mb-12">
            {lang === 'en' ? 'Weather-Resistant Materials' : 'Wetterfeste Materialien'}
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-tree text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Teak Wood' : 'Teakholz'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Naturally weather-resistant and durable premium wood.'
                  : 'Natürlich wetterbeständiges und langlebiges Premium-Holz.'}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Thermowood' : 'Thermoholz'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Heat-treated wood with exceptional durability.'
                  : 'Wärmebehandeltes Holz mit außergewöhnlicher Haltbarkeit.'}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-water text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'HPL Panels' : 'HPL-Platten'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'High-pressure laminates for extreme weather conditions.'
                  : 'Hochdrucklaminate für extreme Witterungsbedingungen.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="font-display text-4xl text-center mb-12">
            {lang === 'en' ? 'Product Categories' : 'Produktkategorien'}
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-8 rounded-lg">
              <i class="fas fa-chair text-4xl text-black mb-4"></i>
              <h3 class="text-xl font-bold mb-3">{lang === 'en' ? 'Seating' : 'Sitzmöbel'}</h3>
              <ul class="text-gray-600 space-y-1">
                <li>• {lang === 'en' ? 'Lounge chairs' : 'Loungesessel'}</li>
                <li>• {lang === 'en' ? 'Garden benches' : 'Gartenbänke'}</li>
                <li>• {lang === 'en' ? 'Rocking chairs' : 'Schaukelstühle'}</li>
                <li>• {lang === 'en' ? 'Stools' : 'Hocker'}</li>
              </ul>
            </div>
            
            <div class="bg-gray-50 p-8 rounded-lg">
              <i class="fas fa-table text-4xl text-black mb-4"></i>
              <h3 class="text-xl font-bold mb-3">{lang === 'en' ? 'Tables' : 'Tische'}</h3>
              <ul class="text-gray-600 space-y-1">
                <li>• {lang === 'en' ? 'Dining tables' : 'Esstische'}</li>
                <li>• {lang === 'en' ? 'Side tables' : 'Beistelltische'}</li>
                <li>• {lang === 'en' ? 'Bar tables' : 'Bartische'}</li>
                <li>• {lang === 'en' ? 'Folding tables' : 'Klapptische'}</li>
              </ul>
            </div>
            
            <div class="bg-gray-50 p-8 rounded-lg">
              <i class="fas fa-umbrella-beach text-4xl text-black mb-4"></i>
              <h3 class="text-xl font-bold mb-3">{lang === 'en' ? 'Sun Protection' : 'Sonnenschutz'}</h3>
              <ul class="text-gray-600 space-y-1">
                <li>• {lang === 'en' ? 'Pergolas' : 'Pergolen'}</li>
                <li>• {lang === 'en' ? 'Louvered roofs' : 'Lamellendächer'}</li>
                <li>• {lang === 'en' ? 'Sun sails' : 'Sonnensegel'}</li>
                <li>• {lang === 'en' ? 'Pavilions' : 'Pavillons'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-brand-anthrazit text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="font-display text-4xl mb-6">
            {lang === 'en' ? 'Ready for Your Outdoor Paradise?' : 'Bereit für Ihr Outdoor-Paradies?'}
          </h2>
          <p class="text-xl mb-8 max-w-3xl mx-auto">
            {lang === 'en'
              ? 'Let\'s create an outdoor space that becomes your favorite place to relax and entertain.'
              : 'Lassen Sie uns einen Außenbereich schaffen, der zu Ihrem Lieblingsplatz zum Entspannen und Feiern wird.'}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/kontakt?lang=${lang}`} class="btn-white-large">
              <i class="fas fa-calendar-alt mr-2"></i>
              {lang === 'en' ? 'Request Outdoor Consultation' : 'Outdoor-Beratung anfragen'}
            </a>
            <a href={`/projekte?lang=${lang}&filter=outdoor`} class="btn-white-outline-large">
              <i class="fas fa-images mr-2"></i>
              {lang === 'en' ? 'View Outdoor Projects' : 'Outdoor-Projekte ansehen'}
            </a>
          </div>
        </div>
      </section>
    </>,
    { 
      title: lang === 'en' 
        ? 'Outdoor & Terraces | Brandstifter Urban Manufactur' 
        : 'Outdoor & Terrassen | Brandstifter Urban Manufactur',
      description: lang === 'en'
        ? 'High-quality outdoor furniture and terrace solutions. Weather-resistant and elegant.'
        : 'Hochwertige Outdoor-Möbel und Terrassenlösungen. Wetterbeständig und elegant.'
    }
  )
})