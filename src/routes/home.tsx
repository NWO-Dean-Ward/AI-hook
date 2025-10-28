import { Hono } from 'hono'
import { Layout } from '../components/Layout'
import { createTranslator } from '../lib/i18n'
import { mediaAssets } from '../config/media-assets'

export const homeRoute = new Hono()

homeRoute.get('/', (c) => {
  const { lang, t } = createTranslator(c)
  
  return c.render(
    <>
      {/* Hero Section with Video */}
      <section class="relative h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <video 
            autoplay 
            muted 
            loop 
            playsinline 
            poster={mediaAssets.videos.heroMorphingPoster}
            class="w-full h-full object-cover"
          >
            <source src={mediaAssets.videos.heroMorphing} type="video/mp4" />
            <img src={mediaAssets.videos.heroMorphingPoster} alt="Premium Manufaktur" class="w-full h-full object-cover" />
          </video>
          <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>
        
        <div class="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 class="font-display text-5xl md:text-7xl mb-6 animate-fade-in">
            {t('home.hero.title')}
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in animation-delay-200">
            {t('home.hero.subtitle')}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <a href={`/projekte?lang=${lang}`} class="btn-primary-large">
              <i class="fas fa-images mr-2"></i>
              {t('home.hero.cta1')}
            </a>
            <a href={`/kontakt?lang=${lang}`} class="btn-secondary-large">
              <i class="fas fa-comments mr-2"></i>
              {t('home.hero.cta2')}
            </a>
          </div>
        </div>
        
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i class="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </section>

      {/* Trust Bar */}
      <section class="py-8 bg-brand-anthrazit text-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-3xl font-bold mb-1">15+</div>
              <div class="text-sm uppercase tracking-wider opacity-80">{t('home.trust.years')}</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-1">2.500+</div>
              <div class="text-sm uppercase tracking-wider opacity-80">{t('home.trust.projects')}</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-1">45</div>
              <div class="text-sm uppercase tracking-wider opacity-80">{t('home.trust.employees')}</div>
            </div>
            <div>
              <div class="text-3xl font-bold mb-1">98%</div>
              <div class="text-sm uppercase tracking-wider opacity-80">{t('home.trust.satisfaction')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-4xl md:text-5xl mb-4">
              {t('services.title')}
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href={`/leistungen/kuechen?lang=${lang}`} class="group">
              <div class="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={mediaAssets.services.kitchen} alt={t('service.kitchen')} class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div class="text-white">
                    <h3 class="text-2xl font-bold mb-2">{t('service.kitchen')}</h3>
                    <p class="opacity-90">{lang === 'en' ? 'Custom kitchens and living concepts' : 'Maßgefertigte Küchen nach Ihren Wünschen'}</p>
                  </div>
                </div>
              </div>
            </a>
            
            <a href={`/leistungen/badmoebel?lang=${lang}`} class="group">
              <div class="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={mediaAssets.services.bathroom} alt={t('service.bathroom')} class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div class="text-white">
                    <h3 class="text-2xl font-bold mb-2">{t('service.bathroom')}</h3>
                    <p class="opacity-90">{lang === 'en' ? 'Wellness oases for your home' : 'Wellness-Oasen für Ihr Zuhause'}</p>
                  </div>
                </div>
              </div>
            </a>
            
            <a href={`/leistungen/ladenbau?lang=${lang}`} class="group">
              <div class="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={mediaAssets.services.retail} alt={t('service.retail')} class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div class="text-white">
                    <h3 class="text-2xl font-bold mb-2">{t('service.retail')}</h3>
                    <p class="opacity-90">{lang === 'en' ? 'Retail spaces that sell' : 'Verkaufsräume, die begeistern'}</p>
                  </div>
                </div>
              </div>
            </a>
            
            <a href={`/leistungen/gastronomie?lang=${lang}`} class="group">
              <div class="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={mediaAssets.services.gastronomy} alt={t('service.gastronomy')} class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div class="text-white">
                    <h3 class="text-2xl font-bold mb-2">{t('service.gastronomy')}</h3>
                    <p class="opacity-90">{lang === 'en' ? 'Professional gastronomy equipment' : 'Professionelle Gastro-Ausstattung'}</p>
                  </div>
                </div>
              </div>
            </a>
            
            <a href={`/leistungen/buero?lang=${lang}`} class="group">
              <div class="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={mediaAssets.services.office} alt={t('service.office')} class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div class="text-white">
                    <h3 class="text-2xl font-bold mb-2">{t('service.office')}</h3>
                    <p class="opacity-90">{lang === 'en' ? 'Modern work environments' : 'Moderne Arbeitswelten'}</p>
                  </div>
                </div>
              </div>
            </a>
            
            <a href={`/leistungen/outdoor?lang=${lang}`} class="group">
              <div class="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={mediaAssets.services.workshop} alt={t('service.outdoor')} class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div class="text-white">
                    <h3 class="text-2xl font-bold mb-2">{t('service.outdoor')}</h3>
                    <p class="opacity-90">{lang === 'en' ? 'Outdoor living at its finest' : 'Leben im Freien genießen'}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-4xl md:text-5xl mb-4">
              {t('services.process.title')}
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'en' 
                ? 'From the first idea to perfect implementation - we accompany you at every step'
                : 'Von der ersten Idee bis zur perfekten Umsetzung – wir begleiten Sie bei jedem Schritt'
              }
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 class="font-semibold text-xl mb-2">{t('services.process.consultation')}</h3>
              <p class="text-gray-600">
                {t('services.process.consultation.desc')}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 class="font-semibold text-xl mb-2">{t('services.process.concept')}</h3>
              <p class="text-gray-600">
                {t('services.process.concept.desc')}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 class="font-semibold text-xl mb-2">{t('services.process.production')}</h3>
              <p class="text-gray-600">
                {t('services.process.production.desc')}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 class="font-semibold text-xl mb-2">{t('services.process.installation')}</h3>
              <p class="text-gray-600">
                {t('services.process.installation.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-4xl md:text-5xl mb-4">
              {lang === 'en' ? 'What Our Clients Say' : 'Was unsere Kunden sagen'}
            </h2>
            <p class="text-xl text-gray-600">
              {lang === 'en' ? 'Satisfied customers are our best reference' : 'Zufriedene Kunden sind unsere beste Referenz'}
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-50 p-8 rounded-lg">
              <div class="flex mb-4">
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
              </div>
              <p class="text-gray-600 mb-6 italic">
                {lang === 'en' 
                  ? "Absolutely thrilled with our new kitchen! The team at Brandstifter understood our vision perfectly and the execution exceeded all expectations."
                  : "Absolut begeistert von unserer neuen Küche! Das Team von Brandstifter hat unsere Vision perfekt verstanden und die Umsetzung übertraf alle Erwartungen."
                }
              </p>
              <div class="flex items-center">
                <img src="/api/placeholder/50/50" alt="Kunde" class="rounded-full mr-4" />
                <div>
                  <div class="font-semibold">Familie Weber</div>
                  <div class="text-sm text-gray-500">Bad Homburg</div>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 p-8 rounded-lg">
              <div class="flex mb-4">
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
              </div>
              <p class="text-gray-600 mb-6 italic">
                {lang === 'en'
                  ? "Professional from consultation to installation. The quality is outstanding and the service impeccable. Highly recommended!"
                  : "Professionell von der Beratung bis zur Montage. Die Qualität ist herausragend und der Service tadellos. Absolut empfehlenswert!"
                }
              </p>
              <div class="flex items-center">
                <img src="/api/placeholder/50/50" alt="Kunde" class="rounded-full mr-4" />
                <div>
                  <div class="font-semibold">Restaurant Goldener Hirsch</div>
                  <div class="text-sm text-gray-500">Frankfurt</div>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 p-8 rounded-lg">
              <div class="flex mb-4">
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
                <i class="fas fa-star text-yellow-400"></i>
              </div>
              <p class="text-gray-600 mb-6 italic">
                {lang === 'en'
                  ? "After three projects together, I can only say: Brandstifter delivers what they promise. Quality, deadlines, budget - everything perfect."
                  : "Nach drei gemeinsamen Projekten kann ich nur sagen: Brandstifter hält, was sie versprechen. Qualität, Termine, Budget – alles perfekt."
                }
              </p>
              <div class="flex items-center">
                <img src="/api/placeholder/50/50" alt="Kunde" class="rounded-full mr-4" />
                <div>
                  <div class="font-semibold">Architekturbüro Schneider</div>
                  <div class="text-sm text-gray-500">Wiesbaden</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-gradient-to-r from-brand-anthrazit to-gray-900 text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="font-display text-4xl md:text-5xl mb-6">
            {lang === 'en' 
              ? 'Ready to Start Your Project?'
              : 'Bereit für Ihr Projekt?'
            }
          </h2>
          <p class="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            {lang === 'en'
              ? 'Let us bring your vision to life. Contact us today for a free consultation.'
              : 'Lassen Sie uns Ihre Vision verwirklichen. Kontaktieren Sie uns noch heute für eine kostenlose Beratung.'
            }
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/kontakt?lang=${lang}`} class="btn-white-large">
              <i class="fas fa-calendar-alt mr-2"></i>
              {t('action.book_appointment')}
            </a>
            <a href="tel:+496002920490" class="btn-white-outline-large">
              <i class="fas fa-phone mr-2"></i>
              {t('action.call_now')}
            </a>
          </div>
        </div>
      </section>
    </>,
    { 
      title: lang === 'en' 
        ? 'Brandstifter Urban Manufactur | Premium Room Concepts'
        : 'Brandstifter Urban Manufactur | Premium Raumkonzepte',
      description: lang === 'en'
        ? 'Premium manufactory for custom room concepts. Kitchens, bathrooms, shop fitting, gastronomy. Visit our showroom in Ober-Mörlen.'
        : 'Premium-Manufaktur für individuelle Raumkonzepte. Küchen, Bäder, Ladenbau, Gastronomie. Besuchen Sie unseren Showroom in Ober-Mörlen.'
    }
  )
})