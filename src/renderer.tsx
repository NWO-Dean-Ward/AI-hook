import { jsxRenderer } from 'hono/jsx-renderer'
import { MobileMenu } from './components/MobileMenu'

export const renderer = jsxRenderer(({ children, title, description }) => {
  return (
    <html lang="de">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'Brandstifter Urban Manufactur | Premium Manufaktur für individuelle Raumkonzepte'}</title>
        <meta name="description" content={description || 'Premium-Manufaktur für maßgefertigte Küchen, Badmöbel, Ladenbau und Gastronomie-Einrichtung. Made in Wetterau seit 1999.'} />
        
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
                <a href="/" class="nav-link">Home</a>
                
                <div class="relative group">
                  <a href="/leistungen" class="nav-link flex items-center">
                    Leistungen <i class="fas fa-chevron-down ml-1 text-xs"></i>
                  </a>
                  <div class="absolute top-full left-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                    <a href="/leistungen/kuechen" class="block px-4 py-3 hover:bg-brand-greige transition">Küchen & Wohnkonzepte</a>
                    <a href="/leistungen/badmoebel" class="block px-4 py-3 hover:bg-brand-greige transition">Badmöbel & Wellness</a>
                    <a href="/leistungen/ladenbau" class="block px-4 py-3 hover:bg-brand-greige transition">Ladenbau & Retail</a>
                    <a href="/leistungen/gastronomie" class="block px-4 py-3 hover:bg-brand-greige transition">Gastronomie & Hospitality</a>
                    <a href="/leistungen/buero" class="block px-4 py-3 hover:bg-brand-greige transition">Büro & Workspaces</a>
                  </div>
                </div>
                
                <a href="/projekte" class="nav-link">Projekte</a>
                <a href="/manufaktur" class="nav-link">Manufaktur</a>
                
                <div class="relative group">
                  <a href="/fuer-sie" class="nav-link flex items-center">
                    Für Sie <i class="fas fa-chevron-down ml-1 text-xs"></i>
                  </a>
                  <div class="absolute top-full left-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                    <a href="/privatkunden" class="block px-4 py-3 hover:bg-brand-greige transition">Privatkunden & Bauherren</a>
                    <a href="/architekten" class="block px-4 py-3 hover:bg-brand-greige transition">Architekten & Planer</a>
                    <a href="/generalunternehmer" class="block px-4 py-3 hover:bg-brand-greige transition">Generalunternehmer</a>
                    <a href="/b2b" class="block px-4 py-3 hover:bg-brand-greige transition">Business & Corporate</a>
                  </div>
                </div>
                
                <a href="/ueber-uns" class="nav-link">Über uns</a>
                <a href="/kontakt" class="nav-link">Kontakt</a>
              </div>
              
              {/* Right Actions */}
              <div class="flex items-center space-x-4">
                {/* Language Switcher */}
                <div class="flex items-center space-x-2 text-sm">
                  <button class="font-semibold text-brand-anthrazit">DE</button>
                  <span class="text-gray-300">|</span>
                  <button class="text-gray-500 hover:text-brand-anthrazit transition">EN</button>
                </div>
                
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
                  Premium-Manufaktur für individuelle Raumkonzepte. 
                  Made in Wetterau seit 1999.
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
                <h4 class="font-semibold mb-4">Leistungen</h4>
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
                  © 2024 Brandstifter Urban Manufactur. Alle Rechte vorbehalten.
                </p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                  <a href="/impressum" class="text-gray-400 hover:text-white text-sm transition">Impressum</a>
                  <a href="/datenschutz" class="text-gray-400 hover:text-white text-sm transition">Datenschutz</a>
                  <a href="/agb" class="text-gray-400 hover:text-white text-sm transition">AGB</a>
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