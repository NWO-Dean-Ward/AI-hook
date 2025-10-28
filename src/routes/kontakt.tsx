import { Hono } from 'hono'
import { Layout } from '../components/Layout'
import { createTranslator } from '../lib/i18n'
import { mediaAssets } from '../config/media-assets'

export const kontaktRoute = new Hono()

kontaktRoute.get('/', (c) => {
  const { lang, t } = createTranslator(c)
  
  return c.render(
    <>
      {/* Hero Section with Showroom Image */}
      <section class="relative h-64 flex items-center justify-center">
        <div class="absolute inset-0">
          <img src={mediaAssets.contact.showroom} alt="Showroom" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-br from-brand-anthrazit/80 to-gray-800/80"></div>
        </div>
        <div class="relative z-10 text-center text-white">
          <h1 class="font-display text-4xl md:text-6xl mb-4">{t('contact.title')}</h1>
          <p class="text-xl opacity-90">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 class="text-3xl font-bold mb-6">
                {lang === 'en' ? 'Send us a message' : 'Schreiben Sie uns'}
              </h2>
              <form action={`/api/contact?lang=${lang}`} method="POST" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition"
                      placeholder={lang === 'en' ? 'Your name' : 'Ihr Name'}
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition"
                      placeholder={lang === 'en' ? 'your@email.com' : 'ihre@email.de'}
                    />
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition"
                      placeholder={lang === 'en' ? '+49 123 456789' : '+49 123 456789'}
                    />
                  </div>
                  <div>
                    <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition"
                      placeholder={lang === 'en' ? 'Your company' : 'Ihre Firma'}
                    />
                  </div>
                </div>

                <div>
                  <label for="project" class="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.project')}
                  </label>
                  <select
                    id="project"
                    name="project"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition"
                  >
                    <option value="">{lang === 'en' ? 'Please select' : 'Bitte wählen'}</option>
                    <option value="kuechen">{t('service.kitchen')}</option>
                    <option value="badmoebel">{t('service.bathroom')}</option>
                    <option value="ladenbau">{t('service.retail')}</option>
                    <option value="gastronomie">{t('service.gastronomy')}</option>
                    <option value="buero">{t('service.office')}</option>
                    <option value="outdoor">{t('service.outdoor')}</option>
                    <option value="andere">{lang === 'en' ? 'Other' : 'Andere'}</option>
                  </select>
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.budget')}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition"
                    >
                      <option value="">{lang === 'en' ? 'Please select' : 'Bitte wählen'}</option>
                      <option value="< 10k">{lang === 'en' ? '< €10,000' : '< 10.000 €'}</option>
                      <option value="10k-25k">{lang === 'en' ? '€10,000 - €25,000' : '10.000 € - 25.000 €'}</option>
                      <option value="25k-50k">{lang === 'en' ? '€25,000 - €50,000' : '25.000 € - 50.000 €'}</option>
                      <option value="50k-100k">{lang === 'en' ? '€50,000 - €100,000' : '50.000 € - 100.000 €'}</option>
                      <option value="> 100k">{lang === 'en' ? '> €100,000' : '> 100.000 €'}</option>
                    </select>
                  </div>
                  <div>
                    <label for="timeline" class="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.timeline')}
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition"
                    >
                      <option value="">{lang === 'en' ? 'Please select' : 'Bitte wählen'}</option>
                      <option value="asap">{lang === 'en' ? 'As soon as possible' : 'Schnellstmöglich'}</option>
                      <option value="1-3m">{lang === 'en' ? '1-3 months' : '1-3 Monate'}</option>
                      <option value="3-6m">{lang === 'en' ? '3-6 months' : '3-6 Monate'}</option>
                      <option value="6-12m">{lang === 'en' ? '6-12 months' : '6-12 Monate'}</option>
                      <option value="> 12m">{lang === 'en' ? '> 12 months' : '> 12 Monate'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition"
                    placeholder={lang === 'en' 
                      ? 'Tell us about your project...' 
                      : 'Erzählen Sie uns von Ihrem Projekt...'}
                  ></textarea>
                </div>

                <div class="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    class="mt-1 h-4 w-4 text-gray-700 border-gray-300 rounded focus:ring-black"
                  />
                  <label for="privacy" class="ml-2 text-sm text-gray-600">
                    {t('contact.form.privacy')} *
                  </label>
                </div>

                <button
                  type="submit"
                  class="w-full bg-brand-anthrazit text-white py-4 px-8 rounded-lg font-semibold hover:bg-black transition-colors"
                >
                  <i class="fas fa-paper-plane mr-2"></i>
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div class="bg-gray-50 p-8 rounded-xl mb-8">
                <h3 class="text-2xl font-bold mb-6">{t('contact.showroom.title')}</h3>
                
                <div class="space-y-4">
                  <div class="flex items-start">
                    <i class="fas fa-map-marker-alt text-gray-700 mt-1 mr-4 w-5"></i>
                    <div>
                      <p class="font-semibold">{lang === 'en' ? 'Address' : 'Adresse'}</p>
                      <p class="text-gray-600">
                        Am Goldberg 2<br />
                        61239 Ober-Mörlen<br />
                        {lang === 'en' ? 'Germany' : 'Deutschland'}
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <i class="fas fa-phone text-gray-700 mt-1 mr-4 w-5"></i>
                    <div>
                      <p class="font-semibold">{lang === 'en' ? 'Phone' : 'Telefon'}</p>
                      <a href="tel:+496002920490" class="text-gray-600 hover:text-gray-700 transition">
                        +49 (0) 6002 920 490
                      </a>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <i class="fas fa-envelope text-gray-700 mt-1 mr-4 w-5"></i>
                    <div>
                      <p class="font-semibold">{lang === 'en' ? 'Email' : 'E-Mail'}</p>
                      <a href="mailto:info@brandstifter.de" class="text-gray-600 hover:text-gray-700 transition">
                        info@brandstifter.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gray-50 p-8 rounded-xl">
                <h3 class="text-2xl font-bold mb-6">{t('contact.showroom.hours')}</h3>
                
                <div class="space-y-3">
                  <div class="flex justify-between">
                    <span class="font-semibold">{t('contact.showroom.monday_friday')}</span>
                    <span class="text-gray-600">09:00 - 18:00</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-semibold">{t('contact.showroom.saturday')}</span>
                    <span class="text-gray-600">10:00 - 16:00</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-semibold">{lang === 'en' ? 'Sunday' : 'Sonntag'}</span>
                    <span class="text-gray-600">{lang === 'en' ? 'Closed' : 'Geschlossen'}</span>
                  </div>
                </div>

                <div class="mt-6 p-4 bg-gray-200 rounded-lg">
                  <p class="text-sm text-gray-700">
                    <i class="fas fa-info-circle mr-2 text-gray-700"></i>
                    {lang === 'en' 
                      ? 'Appointments outside opening hours available upon request.' 
                      : 'Termine außerhalb der Öffnungszeiten nach Vereinbarung möglich.'}
                  </p>
                </div>
              </div>

              {/* Map */}
              <div class="mt-8">
                <div class="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
                  <div class="text-center">
                    <i class="fas fa-map text-4xl text-gray-400 mb-2"></i>
                    <p class="text-gray-500">{lang === 'en' ? 'Interactive map' : 'Interaktive Karte'}</p>
                  </div>
                </div>
                
                <div class="mt-4 flex gap-4">
                  <a 
                    href="https://maps.google.com/?q=Am+Goldberg+2+61239+Ober-Mörlen" 
                    target="_blank"
                    class="flex-1 bg-brand-anthrazit text-white text-center py-3 rounded-lg hover:bg-black transition-colors"
                  >
                    <i class="fas fa-map-marked-alt mr-2"></i>
                    {lang === 'en' ? 'Open in Maps' : 'In Maps öffnen'}
                  </a>
                  <a 
                    href="#" 
                    class="flex-1 bg-gray-200 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    <i class="fas fa-directions mr-2"></i>
                    {lang === 'en' ? 'Get Directions' : 'Route planen'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-gradient-to-r from-gray-800 to-black text-white">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="font-display text-4xl mb-6">
            {lang === 'en' 
              ? 'Visit Our Showroom'
              : 'Besuchen Sie unseren Showroom'}
          </h2>
          <p class="text-xl mb-8 opacity-90">
            {lang === 'en'
              ? 'Experience our craftsmanship firsthand and get inspired for your project.'
              : 'Erleben Sie unsere Handwerkskunst hautnah und lassen Sie sich für Ihr Projekt inspirieren.'}
          </p>
          <a href="tel:+496002920490" class="inline-block bg-white text-brand-anthrazit px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            <i class="fas fa-phone mr-2"></i>
            {t('action.call_now')}: +49 (0) 6002 920 490
          </a>
        </div>
      </section>
    </>,
    { 
      title: lang === 'en'
        ? 'Contact | Brandstifter Urban Manufactur'
        : 'Kontakt | Brandstifter Urban Manufactur',
      description: lang === 'en'
        ? 'Get in touch with Brandstifter Urban Manufactur. Visit our showroom in Ober-Mörlen or send us a message.'
        : 'Kontaktieren Sie Brandstifter Urban Manufactur. Besuchen Sie unseren Showroom in Ober-Mörlen oder schreiben Sie uns.'
    }
  )
})