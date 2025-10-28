import { Hono } from 'hono'
import { createTranslator } from '../../lib/i18n'
import { mediaAssets } from '../../config/media-assets'

export const kuechenRoute = new Hono()

kuechenRoute.get('/', (c) => {
  const { lang, t } = createTranslator(c)
  
  return c.render(
    <>
      {/* Hero Section with Image */}
      <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src={mediaAssets.services.kitchenShowroom} 
            alt="Kitchen Showroom" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        <div class="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 class="font-display text-5xl md:text-7xl mb-6">
            {lang === 'en' ? 'Kitchens & Living Concepts' : 'Küchen & Wohnkonzepte'}
          </h1>
          <p class="text-xl md:text-2xl opacity-90">
            {lang === 'en' 
              ? 'The heart of your home, perfectly designed'
              : 'Der Mittelpunkt Ihres Zuhauses, perfekt gestaltet'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="font-display text-4xl mb-6">
                {lang === 'en' ? 'Premium Kitchens Tailored to You' : 'Premium-Küchen nach Maß'}
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                {lang === 'en' 
                  ? 'Your kitchen is more than just a place to cook – it\'s the heart of your home, a meeting place for family and friends, and an expression of your personal style.'
                  : 'Ihre Küche ist mehr als nur ein Ort zum Kochen – sie ist das Herz Ihres Zuhauses, ein Treffpunkt für Familie und Freunde und Ausdruck Ihres persönlichen Stils.'}
              </p>
              <p class="text-lg text-gray-700 mb-6">
                {lang === 'en'
                  ? 'With our custom-made kitchens, we create spaces that are not only aesthetically pleasing but also perfectly tailored to your needs and lifestyle.'
                  : 'Mit unseren maßgefertigten Küchen schaffen wir Räume, die nicht nur ästhetisch ansprechend sind, sondern auch perfekt auf Ihre Bedürfnisse und Ihren Lebensstil abgestimmt sind.'}
              </p>
              
              <h3 class="text-2xl font-bold mb-4">
                {lang === 'en' ? 'Our Services' : 'Unsere Leistungen'}
              </h3>
              <ul class="space-y-2 mb-8">
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Individual consultation and planning' : 'Individuelle Beratung und Planung'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? '3D visualization of your dream kitchen' : '3D-Visualisierung Ihrer Traumküche'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'High-quality materials and premium appliances' : 'Hochwertige Materialien und Premium-Geräte'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Smart home integration' : 'Smart-Home Integration'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Professional installation by our team' : 'Professionelle Montage durch unser Team'}</span>
                </li>
              </ul>
              
              <a href={`/kontakt?lang=${lang}`} class="btn-primary">
                <i class="fas fa-calendar-alt mr-2"></i>
                {lang === 'en' ? 'Book Consultation' : 'Beratungstermin vereinbaren'}
              </a>
            </div>
            
            <div>
              <img 
                src={mediaAssets.services.kitchen} 
                alt="Premium Kitchen" 
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
            {lang === 'en' ? 'Kitchen Styles' : 'Küchenstile'}
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-crown text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Classic Elegance' : 'Klassische Eleganz'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Timeless designs with traditional craftsmanship and premium materials.'
                  : 'Zeitlose Designs mit traditioneller Handwerkskunst und Premium-Materialien.'}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-cube text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Modern Minimalism' : 'Moderner Minimalismus'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Clean lines, handleless fronts, and innovative storage solutions.'
                  : 'Klare Linien, grifflose Fronten und innovative Stauraum-Lösungen.'}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-home text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Country House Charm' : 'Landhauscharme'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Warm, inviting kitchens with natural materials and cozy details.'
                  : 'Warme, einladende Küchen mit natürlichen Materialien und gemütlichen Details.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-brand-anthrazit text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="font-display text-4xl mb-6">
            {lang === 'en' ? 'Ready for Your Dream Kitchen?' : 'Bereit für Ihre Traumküche?'}
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
        ? 'Kitchens & Living Concepts | Brandstifter Urban Manufactur' 
        : 'Küchen & Wohnkonzepte | Brandstifter Urban Manufactur',
      description: lang === 'en'
        ? 'Premium custom kitchens. From planning to installation - everything from a single source.'
        : 'Premium Küchen nach Maß. Von der Planung bis zur Montage - alles aus einer Hand.'
    }
  )
})