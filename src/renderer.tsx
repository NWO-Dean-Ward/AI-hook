import { jsxRenderer } from 'hono/jsx-renderer'
import { MobileMenu } from './components/MobileMenu'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { createTranslator } from './lib/i18n'

export const renderer = jsxRenderer(({ children, title, description }, c) => {
  const { lang, t, switchUrl } = createTranslator(c)
  
  const defaultTitle = lang === 'en' 
    ? 'Brandstifter Urban Manufactur | Premium Room Concepts' 
    : 'Brandstifter Urban Manufactur | Premium Manufaktur für individuelle Raumkonzepte'
  const defaultDescription = lang === 'en'
    ? 'Premium manufactory for custom kitchens, bathroom furniture, shop fitting and gastronomy equipment. Made in Wetterau since 2008.'
    : 'Premium-Manufaktur für maßgefertigte Küchen, Badmöbel, Ladenbau und Gastronomie-Einrichtung. Made in Wetterau seit 2008.'
  
  return (
    <html lang={lang}>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Font Awesome Icons */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Custom Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Tailwind Config */}
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  'brand-anthrazit': '#2C2C2C',
                  'brand-oak': '#8B7355',
                  'brand-brass': '#B08D57',
                  'brand-greige': '#E8E4DF',
                },
                fontFamily: {
                  'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                  'display': ['Playfair Display', 'serif'],
                }
              }
            }
          }
        `}} />
      </head>
      <body>
        {/* Navigation */}
        <nav class="sticky top-0 z-50 bg-white border-b border-gray-100">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="/" class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-brand-anthrazit flex items-center justify-center">
                  <span class="text-white font-bold text-xl">B</span>
                </div>
                <div>
                  <div class="text-xl font-bold text-brand-anthrazit">BRANDSTIFTER</div>
                  <div class="text-xs text-gray-600 tracking-wider">URBAN MANUFACTUR</div>
                </div>
              </a>
              
              {/* Main Navigation */}
              <div class="hidden lg:flex items-center space-x-8">
                <a href={`/?lang=${lang}`} class="nav-link">{t('nav.home')}</a>
                
                <div class="relative group">
                  <a href={`/leistungen?lang=${lang}`} class="nav-link flex items-center">
                    {t('nav.services')} <i class="fas fa-chevron-down ml-1 text-xs"></i>
                  </a>
                  <div class="absolute top-full left-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                    <a href={`/leistungen/kuechen?lang=${lang}`} class="block px-4 py-3 hover:bg-brand-greige transition">{t('service.kitchen')}</a>
                    <a href={`/leistungen/badmoebel?lang=${lang}`} class="block px-4 py-3 hover:bg-brand-greige transition">{t('service.bathroom')}</a>
                    <a href={`/leistungen/ladenbau?lang=${lang}`} class="block px-4 py-3 hover:bg-brand-greige transition">{t('service.retail')}</a>
                    <a href={`/leistungen/gastronomie?lang=${lang}`} class="block px-4 py-3 hover:bg-brand-greige transition">{t('service.gastronomy')}</a>
                    <a href={`/leistungen/buero?lang=${lang}`} class="block px-4 py-3 hover:bg-brand-greige transition">{t('service.office')}</a>
                  </div>
                </div>
                
                <a href={`/projekte?lang=${lang}`} class="nav-link">{t('nav.projects')}</a>
                <a href={`/manufaktur?lang=${lang}`} class="nav-link">{t('nav.manufactory')}</a>
                
                <div class="relative group">
                  <a href={`/fuer-sie?lang=${lang}`} class="nav-link flex items-center">
                    {t('nav.for_you')} <i class="fas fa-chevron-down ml-1 text-xs"></i>
                  </a>
                  <div class="absolute top-full left-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                    <a href={`/privatkunden?lang=${lang}`} class="block px-4 py-3 hover:bg-brand-greige transition">{t('customer.private')}</a>
                    <a href={`/architekten?lang=${lang}`} class="block px-4 py-3 hover:bg-brand-greige transition">{t('customer.architects')}</a>
                    <a href={`/generalunternehmer?lang=${lang}`} class="block px-4 py-3 hover:bg-brand-greige transition">{t('customer.contractors')}</a>
                    <a href={`/b2b?lang=${lang}`} class="block px-4 py-3 hover:bg-brand-greige transition">{t('customer.b2b')}</a>
                  </div>
                </div>
                
                <a href={`/ueber-uns?lang=${lang}`} class="nav-link">{t('nav.about')}</a>
                <a href={`/kontakt?lang=${lang}`} class="nav-link">{t('nav.contact')}</a>
              </div>
              
              {/* Right Actions */}
              <div class="flex items-center space-x-4">
                {/* Language Switcher */}
                <LanguageSwitcher currentLang={lang} switchUrl={switchUrl} />
                
                {/* CTA Button */}
                <a href="/kontakt#termin" class="btn-primary hidden md:block">
                  <i class="fas fa-calendar-alt mr-2"></i>
                  Showroom Termin
                </a>
                
                {/* Mobile Menu Toggle */}
                <button class="lg:hidden text-2xl text-brand-anthrazit" id="mobile-menu-toggle">
                  <i class="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        <MobileMenu />
        
        {/* Main Content */}
        <main>{children}</main>
        
        {/* Footer */}
        <footer class="bg-brand-anthrazit text-white mt-20">
          <div class="container mx-auto px-4 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h3 class="text-xl font-bold mb-4">Brandstifter Urban Manufactur</h3>
                <p class="text-gray-400 mb-4">
                  {t('footer.company')}
                </p>
                <div class="flex space-x-4">
                  <a href="#" class="text-gray-400 hover:text-white transition">
                    <i class="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white transition">
                    <i class="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white transition">
                    <i class="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white transition">
                    <i class="fab fa-pinterest text-xl"></i>
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 class="font-semibold mb-4">{t('footer.services')}</h4>
                <ul class="space-y-2">
                  <li><a href="/leistungen/kuechen" class="text-gray-400 hover:text-white transition">Küchen</a></li>
                  <li><a href="/leistungen/badmoebel" class="text-gray-400 hover:text-white transition">Badmöbel</a></li>
                  <li><a href="/leistungen/ladenbau" class="text-gray-400 hover:text-white transition">Ladenbau</a></li>
                  <li><a href="/leistungen/gastronomie" class="text-gray-400 hover:text-white transition">Gastronomie</a></li>
                  <li><a href="/leistungen/buero" class="text-gray-400 hover:text-white transition">Büros</a></li>
                </ul>
              </div>
              
              {/* Service */}
              <div>
                <h4 class="font-semibold mb-4">Service</h4>
                <ul class="space-y-2">
                  <li><a href="/downloads" class="text-gray-400 hover:text-white transition">Downloads</a></li>
                  <li><a href="/magazin" class="text-gray-400 hover:text-white transition">Magazin</a></li>
                  <li><a href="/faq" class="text-gray-400 hover:text-white transition">FAQ</a></li>
                  <li><a href="/karriere" class="text-gray-400 hover:text-white transition">Karriere</a></li>
                  <li><a href="/partner" class="text-gray-400 hover:text-white transition">Partner</a></li>
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h4 class="font-semibold mb-4">Showroom</h4>
                <address class="text-gray-400 not-italic space-y-2">
                  <p>Dieselstraße 15</p>
                  <p>61239 Ober-Mörlen</p>
                  <p class="mt-4">
                    <a href="tel:+496002123456" class="hover:text-white transition">
                      <i class="fas fa-phone mr-2"></i>
                      +49 (0) 6002 123 456
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@brandstifter.online" class="hover:text-white transition">
                      <i class="fas fa-envelope mr-2"></i>
                      info@brandstifter.online
                    </a>
                  </p>
                </address>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div class="border-t border-gray-700 mt-12 pt-8">
              <div class="flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 text-sm">
                  © 2024 Brandstifter Urban Manufactur. {t('footer.rights')}
                </p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                  <a href={`/impressum?lang=${lang}`} class="text-gray-400 hover:text-white text-sm transition">{t('footer.imprint')}</a>
                  <a href={`/datenschutz?lang=${lang}`} class="text-gray-400 hover:text-white text-sm transition">{t('footer.privacy')}</a>
                  <a href={`/agb?lang=${lang}`} class="text-gray-400 hover:text-white text-sm transition">{t('footer.terms')}</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        
        {/* Scripts */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})