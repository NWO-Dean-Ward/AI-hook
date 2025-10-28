import { Hono } from 'hono'
import { createTranslator } from '../../lib/i18n'
import { mediaAssets } from '../../config/media-assets'

export const badmoebelRoute = new Hono()

badmoebelRoute.get('/', (c) => {
  const { lang, t } = createTranslator(c)
  
  return c.render(
    <>
      {/* Hero Section with Bathroom Showroom Image */}
      <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src={mediaAssets.services.bathroomShowroom} 
            alt="Bathroom Showroom" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        <div class="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 class="font-display text-5xl md:text-7xl mb-6">
            {lang === 'en' ? 'Bathroom Furniture & Wellness' : 'Badmöbel & Wellness'}
          </h1>
          <p class="text-xl md:text-2xl opacity-90">
            {lang === 'en' 
              ? 'Transform your bathroom into a private spa'
              : 'Verwandeln Sie Ihr Bad in eine private Wellness-Oase'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="font-display text-4xl mb-6">
                {lang === 'en' ? 'Luxury Bathroom Solutions' : 'Luxuriöse Badlösungen nach Maß'}
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                {lang === 'en' 
                  ? 'Your bathroom is more than just a functional space – it\'s your personal retreat, a place for relaxation and rejuvenation.'
                  : 'Ihr Badezimmer ist mehr als nur ein funktionaler Raum – es ist Ihr persönlicher Rückzugsort, ein Ort der Entspannung und Erholung.'}
              </p>
              <p class="text-lg text-gray-700 mb-6">
                {lang === 'en'
                  ? 'With our custom bathroom furniture, we create spaces that combine elegant design with practical functionality, perfectly tailored to your needs.'
                  : 'Mit unseren maßgefertigten Badmöbeln schaffen wir Räume, die elegantes Design mit praktischer Funktionalität vereinen, perfekt auf Ihre Bedürfnisse abgestimmt.'}
              </p>
              
              <h3 class="text-2xl font-bold mb-4">
                {lang === 'en' ? 'Our Services' : 'Unsere Leistungen'}
              </h3>
              <ul class="space-y-2 mb-8">
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Custom vanity units and washstands' : 'Maßgefertigte Waschtischunterschränke'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Mirror cabinets with LED lighting' : 'Spiegelschränke mit LED-Beleuchtung'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Tall cabinets and storage solutions' : 'Hochschränke und Stauraumlösungen'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Waterproof materials and coatings' : 'Wasserfeste Materialien und Beschichtungen'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Barrier-free bathroom solutions' : 'Barrierefreie Badlösungen'}</span>
                </li>
              </ul>
              
              <a href={`/kontakt?lang=${lang}`} class="btn-primary">
                <i class="fas fa-calendar-alt mr-2"></i>
                {lang === 'en' ? 'Book Consultation' : 'Beratungstermin vereinbaren'}
              </a>
            </div>
            
            <div>
              <img 
                src={mediaAssets.services.bathroom} 
                alt="Premium Bathroom" 
                class="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="font-display text-4xl text-center mb-12">
            {lang === 'en' ? 'Materials & Features' : 'Materialien & Ausstattung'}
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-tint text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Waterproof' : 'Wasserfest'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Special coatings and materials for humid environments.'
                  : 'Spezielle Beschichtungen und Materialien für Feuchträume.'}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Smart Lighting' : 'Intelligente Beleuchtung'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Integrated LED systems with dimming and color temperature control.'
                  : 'Integrierte LED-Systeme mit Dimm- und Farbtemperatur-Steuerung.'}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-spa text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Wellness Design' : 'Wellness-Design'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Creating a spa atmosphere in your own home.'
                  : 'Schaffen Sie eine Spa-Atmosphäre in Ihrem Zuhause.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-brand-anthrazit text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="font-display text-4xl mb-6">
            {lang === 'en' ? 'Ready for Your Dream Bathroom?' : 'Bereit für Ihr Traumbad?'}
          </h2>
          <p class="text-xl mb-8 max-w-3xl mx-auto">
            {lang === 'en'
              ? 'Visit our showroom and experience our quality firsthand. We look forward to your visit!'
              : 'Besuchen Sie unseren Showroom und erleben Sie unsere Qualität hautnah. Wir freuen uns auf Ihren Besuch!'}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/kontakt?lang=${lang}`} class="btn-white-large">
              <i class="fas fa-calendar-alt mr-2"></i>
              {lang === 'en' ? 'Book Appointment' : 'Termin vereinbaren'}
            </a>
            <a href={`/projekte?lang=${lang}`} class="btn-white-outline-large">
              <i class="fas fa-images mr-2"></i>
              {lang === 'en' ? 'View References' : 'Referenzen ansehen'}
            </a>
          </div>
        </div>
      </section>
    </>,
    { 
      title: lang === 'en' 
        ? 'Bathroom Furniture & Wellness | Brandstifter Urban Manufactur' 
        : 'Badmöbel & Wellness | Brandstifter Urban Manufactur',
      description: lang === 'en'
        ? 'Custom bathroom furniture. Transform your bathroom into a wellness oasis.'
        : 'Maßgefertigte Badmöbel. Verwandeln Sie Ihr Bad in eine Wellness-Oase.'
    }
  )
})