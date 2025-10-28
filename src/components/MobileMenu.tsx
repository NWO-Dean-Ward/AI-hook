export const MobileMenu = () => (
  <>
    {/* Mobile Menu Overlay */}
    <div id="mobile-menu-overlay" class="fixed inset-0 bg-black/50 z-50 hidden lg:hidden">
      <div id="mobile-menu" class="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform translate-x-0 transition-transform duration-300">
        {/* Mobile Menu Header */}
        <div class="flex items-center justify-between p-6 border-b">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-brand-anthrazit flex items-center justify-center">
              <span class="text-white font-bold text-lg">B</span>
            </div>
            <div>
              <div class="text-lg font-bold text-brand-anthrazit">BRANDSTIFTER</div>
              <div class="text-xs text-gray-600">URBAN MANUFACTUR</div>
            </div>
          </div>
          <button id="mobile-menu-close" class="text-2xl text-gray-600 hover:text-brand-anthrazit">
            <i class="fas fa-times"></i>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div class="overflow-y-auto h-full pb-20">
          <nav class="p-6">
            {/* Main Links */}
            <ul class="space-y-4">
              <li>
                <a href="/" class="block text-lg font-medium text-gray-800 hover:text-brand-brass transition">
                  <i class="fas fa-home mr-3 text-brand-brass w-5"></i>
                  Home
                </a>
              </li>
              
              {/* Leistungen with Submenu */}
              <li>
                <button class="mobile-submenu-toggle w-full text-left text-lg font-medium text-gray-800 hover:text-brand-brass transition flex items-center justify-between" data-submenu="leistungen">
                  <span>
                    <i class="fas fa-tools mr-3 text-brand-brass w-5"></i>
                    Leistungen
                  </span>
                  <i class="fas fa-chevron-down text-xs"></i>
                </button>
                <ul id="submenu-leistungen" class="hidden mt-3 ml-8 space-y-2">
                  <li><a href="/leistungen/kuechen" class="block py-2 text-gray-600 hover:text-brand-brass">Küchen & Wohnkonzepte</a></li>
                  <li><a href="/leistungen/badmoebel" class="block py-2 text-gray-600 hover:text-brand-brass">Badmöbel & Wellness</a></li>
                  <li><a href="/leistungen/ladenbau" class="block py-2 text-gray-600 hover:text-brand-brass">Ladenbau & Retail</a></li>
                  <li><a href="/leistungen/gastronomie" class="block py-2 text-gray-600 hover:text-brand-brass">Gastronomie & Hospitality</a></li>
                  <li><a href="/leistungen/buero" class="block py-2 text-gray-600 hover:text-brand-brass">Büro & Workspaces</a></li>
                  <li><a href="/leistungen/outdoor" class="block py-2 text-gray-600 hover:text-brand-brass">Outdoor</a></li>
                </ul>
              </li>
              
              <li>
                <a href="/projekte" class="block text-lg font-medium text-gray-800 hover:text-brand-brass transition">
                  <i class="fas fa-images mr-3 text-brand-brass w-5"></i>
                  Projekte
                </a>
              </li>
              
              <li>
                <a href="/manufaktur" class="block text-lg font-medium text-gray-800 hover:text-brand-brass transition">
                  <i class="fas fa-industry mr-3 text-brand-brass w-5"></i>
                  Manufaktur
                </a>
              </li>
              
              {/* Für Sie with Submenu */}
              <li>
                <button class="mobile-submenu-toggle w-full text-left text-lg font-medium text-gray-800 hover:text-brand-brass transition flex items-center justify-between" data-submenu="fuer-sie">
                  <span>
                    <i class="fas fa-users mr-3 text-brand-brass w-5"></i>
                    Für Sie
                  </span>
                  <i class="fas fa-chevron-down text-xs"></i>
                </button>
                <ul id="submenu-fuer-sie" class="hidden mt-3 ml-8 space-y-2">
                  <li><a href="/privatkunden" class="block py-2 text-gray-600 hover:text-brand-brass">Privatkunden & Bauherren</a></li>
                  <li><a href="/architekten" class="block py-2 text-gray-600 hover:text-brand-brass">Architekten & Planer</a></li>
                  <li><a href="/generalunternehmer" class="block py-2 text-gray-600 hover:text-brand-brass">Generalunternehmer</a></li>
                  <li><a href="/b2b" class="block py-2 text-gray-600 hover:text-brand-brass">Business & Corporate</a></li>
                </ul>
              </li>
              
              <li>
                <a href="/ueber-uns" class="block text-lg font-medium text-gray-800 hover:text-brand-brass transition">
                  <i class="fas fa-info-circle mr-3 text-brand-brass w-5"></i>
                  Über uns
                </a>
              </li>
              
              <li>
                <a href="/downloads" class="block text-lg font-medium text-gray-800 hover:text-brand-brass transition">
                  <i class="fas fa-download mr-3 text-brand-brass w-5"></i>
                  Downloads
                </a>
              </li>
              
              <li>
                <a href="/kontakt" class="block text-lg font-medium text-gray-800 hover:text-brand-brass transition">
                  <i class="fas fa-envelope mr-3 text-brand-brass w-5"></i>
                  Kontakt
                </a>
              </li>
            </ul>

            {/* Language Switcher */}
            <div class="mt-8 pt-8 border-t">
              <p class="text-sm font-semibold text-gray-600 mb-4">Sprache</p>
              <div class="flex space-x-4">
                <button class="px-4 py-2 bg-brand-anthrazit text-white rounded-lg">Deutsch</button>
                <button class="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg">English</button>
              </div>
            </div>

            {/* Contact Info */}
            <div class="mt-8 pt-8 border-t">
              <p class="text-sm font-semibold text-gray-600 mb-4">Kontakt</p>
              <div class="space-y-3">
                <a href="tel:+496002123456" class="flex items-center text-gray-700 hover:text-brand-brass">
                  <i class="fas fa-phone mr-3 text-brand-brass"></i>
                  +49 (0) 6002 123 456
                </a>
                <a href="mailto:info@brandstifter.online" class="flex items-center text-gray-700 hover:text-brand-brass text-sm">
                  <i class="fas fa-envelope mr-3 text-brand-brass"></i>
                  info@brandstifter.online
                </a>
                <a href="/kontakt#showroom" class="flex items-center text-gray-700 hover:text-brand-brass">
                  <i class="fas fa-map-marker-alt mr-3 text-brand-brass"></i>
                  Showroom Ober-Mörlen
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div class="mt-8 pt-8 border-t">
              <p class="text-sm font-semibold text-gray-600 mb-4">Folgen Sie uns</p>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-brand-anthrazit text-white rounded-full flex items-center justify-center hover:bg-brand-brass transition">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-brand-anthrazit text-white rounded-full flex items-center justify-center hover:bg-brand-brass transition">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-brand-anthrazit text-white rounded-full flex items-center justify-center hover:bg-brand-brass transition">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-brand-anthrazit text-white rounded-full flex items-center justify-center hover:bg-brand-brass transition">
                  <i class="fab fa-pinterest-p"></i>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div class="mt-8">
              <a href="/kontakt#termin" class="btn-primary w-full text-center">
                <i class="fas fa-calendar-alt mr-2"></i>
                Showroom-Termin buchen
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>

    {/* Mobile Menu Script */}
    <script dangerouslySetInnerHTML={{__html: `
      document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const mobileMenu = document.getElementById('mobile-menu');
        const submenuToggles = document.querySelectorAll('.mobile-submenu-toggle');

        // Open mobile menu
        if (mobileMenuToggle) {
          mobileMenuToggle.addEventListener('click', function() {
            mobileMenuOverlay.classList.remove('hidden');
            setTimeout(() => {
              mobileMenu.classList.add('translate-x-0');
            }, 10);
          });
        }

        // Close mobile menu
        function closeMobileMenu() {
          mobileMenu.classList.remove('translate-x-0');
          setTimeout(() => {
            mobileMenuOverlay.classList.add('hidden');
          }, 300);
        }

        if (mobileMenuClose) {
          mobileMenuClose.addEventListener('click', closeMobileMenu);
        }

        if (mobileMenuOverlay) {
          mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
              closeMobileMenu();
            }
          });
        }

        // Submenu toggles
        submenuToggles.forEach(toggle => {
          toggle.addEventListener('click', function() {
            const submenuId = 'submenu-' + this.dataset.submenu;
            const submenu = document.getElementById(submenuId);
            const chevron = this.querySelector('.fa-chevron-down');
            
            if (submenu.classList.contains('hidden')) {
              submenu.classList.remove('hidden');
              chevron.classList.add('rotate-180');
            } else {
              submenu.classList.add('hidden');
              chevron.classList.remove('rotate-180');
            }
          });
        });
      });
    `}} />
  </>
)