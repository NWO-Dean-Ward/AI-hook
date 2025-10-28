import { Hono } from 'hono'

export const homeRoute = new Hono()

homeRoute.get('/', (c) => {
  return c.render(
    <>
      {/* Hero Section */}
      <section class="relative h-screen flex items-center justify-center bg-gradient-to-br from-brand-anthrazit to-gray-900">
        {/* Background Image Overlay */}
        <div class="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Hero Content */}
        <div class="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 class="font-display text-5xl md:text-7xl mb-6 animate-fade-in">
            Wo Handwerk auf Vision trifft
          </h1>
          <p class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premium-Manufaktur für individuelle Raumkonzepte – 
            von der Idee bis zur perfekten Umsetzung
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt#termin" class="btn-primary-large">
              <i class="fas fa-calendar-alt mr-2"></i>
              Showroom-Termin buchen
            </a>
            <a href="/projekte" class="btn-secondary-large">
              <i class="fas fa-images mr-2"></i>
              Projekte entdecken
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i class="fas fa-chevron-down text-2xl"></i>
        </div>
      </section>
      
      {/* Trust Bar */}
      <section class="bg-brand-greige py-8">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-3xl font-bold text-brand-anthrazit">25</div>
              <div class="text-sm text-gray-600 mt-1">Jahre Expertise</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-brand-anthrazit">500+</div>
              <div class="text-sm text-gray-600 mt-1">Projekte realisiert</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-brand-anthrazit">100%</div>
              <div class="text-sm text-gray-600 mt-1">Made in Germany</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-brand-anthrazit">48h</div>
              <div class="text-sm text-gray-600 mt-1">Reaktionszeit</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-display text-brand-anthrazit mb-4">
              Unsere Leistungen
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Von der Planung bis zur Umsetzung – wir sind Ihr Partner für außergewöhnliche Raumkonzepte
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Küchen */}
            <a href="/leistungen/kuechen" class="group">
              <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <div class="aspect-w-16 aspect-h-12 bg-gray-200">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 class="text-2xl font-bold mb-2">Küchen</h3>
                  <p class="text-sm opacity-90">Premium Konzepte für Ihren Lebensmittelpunkt</p>
                </div>
              </div>
            </a>
            
            {/* Badmöbel */}
            <a href="/leistungen/badmoebel" class="group">
              <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <div class="aspect-w-16 aspect-h-12 bg-gray-200">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 class="text-2xl font-bold mb-2">Badmöbel</h3>
                  <p class="text-sm opacity-90">Wellness zuhause erleben</p>
                </div>
              </div>
            </a>
            
            {/* Ladenbau */}
            <a href="/leistungen/ladenbau" class="group">
              <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <div class="aspect-w-16 aspect-h-12 bg-gray-200">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 class="text-2xl font-bold mb-2">Ladenbau</h3>
                  <p class="text-sm opacity-90">Markenerlebnisse schaffen</p>
                </div>
              </div>
            </a>
            
            {/* Gastronomie */}
            <a href="/leistungen/gastronomie" class="group">
              <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <div class="aspect-w-16 aspect-h-12 bg-gray-200">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 class="text-2xl font-bold mb-2">Gastronomie</h3>
                  <p class="text-sm opacity-90">Die perfekte Bühne für Genuss</p>
                </div>
              </div>
            </a>
            
            {/* Büros */}
            <a href="/leistungen/buero" class="group">
              <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <div class="aspect-w-16 aspect-h-12 bg-gray-200">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 class="text-2xl font-bold mb-2">Büros</h3>
                  <p class="text-sm opacity-90">Produktive Räume gestalten</p>
                </div>
              </div>
            </a>
            
            {/* Outdoor */}
            <a href="/leistungen/outdoor" class="group">
              <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <div class="aspect-w-16 aspect-h-12 bg-gray-200">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 class="text-2xl font-bold mb-2">Outdoor</h3>
                  <p class="text-sm opacity-90">Leben im Freien genießen</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      {/* Manufaktur Teaser */}
      <section class="bg-brand-greige py-20">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl font-display text-brand-anthrazit mb-6">
                Echte Handwerkskunst aus der Wetterau
              </h2>
              <p class="text-lg text-gray-700 mb-8">
                In unserer 2.500m² großen Manufaktur in Ober-Mörlen verbinden wir traditionelle 
                Handwerkskunst mit modernster Technologie. 25 Spezialisten arbeiten täglich daran, 
                Ihre Visionen Wirklichkeit werden zu lassen.
              </p>
              
              <div class="grid grid-cols-2 gap-6 mb-8">
                <div class="flex items-start">
                  <i class="fas fa-warehouse text-brand-brass text-2xl mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-brand-anthrazit">2.500m²</div>
                    <div class="text-sm text-gray-600">Produktionsfläche</div>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-users text-brand-brass text-2xl mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-brand-anthrazit">25 Experten</div>
                    <div class="text-sm text-gray-600">Handwerker & Spezialisten</div>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-cogs text-brand-brass text-2xl mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-brand-anthrazit">CNC-Technologie</div>
                    <div class="text-sm text-gray-600">Präzision auf höchstem Niveau</div>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-award text-brand-brass text-2xl mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-brand-anthrazit">100% Qualität</div>
                    <div class="text-sm text-gray-600">Made in Germany</div>
                  </div>
                </div>
              </div>
              
              <a href="/manufaktur" class="btn-primary">
                <i class="fas fa-arrow-right mr-2"></i>
                Werkstatt entdecken
              </a>
            </div>
            
            <div class="relative">
              <div class="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-2xl bg-gray-200">
                {/* Placeholder for manufactory image */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Target Groups */}
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-display text-brand-anthrazit mb-4">
              Für wen wir arbeiten
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Ob Privatperson, Architekt oder Unternehmen – wir haben die passende Lösung für Sie
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Privatkunden */}
            <a href="/privatkunden" class="group">
              <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center mx-auto mb-6">
                  <i class="fas fa-home text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-brand-anthrazit mb-3">Privatkunden</h3>
                <p class="text-gray-600 mb-6">
                  Verwirklichen Sie Ihre Wohnträume mit unserer Expertise und Leidenschaft
                </p>
                <span class="text-brand-brass font-semibold group-hover:underline">
                  Ihre Vision entdecken →
                </span>
              </div>
            </a>
            
            {/* Architekten */}
            <a href="/architekten" class="group">
              <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center mx-auto mb-6">
                  <i class="fas fa-drafting-compass text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-brand-anthrazit mb-3">Architekten</h3>
                <p class="text-gray-600 mb-6">
                  Ihr verlässlicher Partner für anspruchsvolle Projekte und kreative Lösungen
                </p>
                <span class="text-brand-brass font-semibold group-hover:underline">
                  Partner werden →
                </span>
              </div>
            </a>
            
            {/* B2B */}
            <a href="/b2b" class="group">
              <div class="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center mx-auto mb-6">
                  <i class="fas fa-building text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-brand-anthrazit mb-3">Business</h3>
                <p class="text-gray-600 mb-6">
                  Räume, die Ihre Marke stärken und Ihren Erfolg unterstützen
                </p>
                <span class="text-brand-brass font-semibold group-hover:underline">
                  Erfolg gestalten →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section class="bg-gray-50 py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-display text-brand-anthrazit text-center mb-12">
            Was unsere Kunden sagen
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <i class="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p class="text-gray-700 mb-6 italic">
                "Brandstifter hat unsere Traumküche Wirklichkeit werden lassen. 
                Die Qualität und Detailliebe sind außergewöhnlich."
              </p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div class="font-semibold text-brand-anthrazit">Familie Schmidt</div>
                  <div class="text-sm text-gray-500">Privatkunde, Frankfurt</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <i class="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p class="text-gray-700 mb-6 italic">
                "Als Architekt schätze ich die technische Präzision und kreative Flexibilität. 
                Ein verlässlicher Partner."
              </p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div class="font-semibold text-brand-anthrazit">Büro Müller & Partner</div>
                  <div class="text-sm text-gray-500">Architekturbüro</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <i class="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p class="text-gray-700 mb-6 italic">
                "Für unsere Flagship-Stores der perfekte Partner. Termintreu, 
                budgetsicher und qualitativ erstklassig."
              </p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div class="font-semibold text-brand-anthrazit">StartUp GmbH</div>
                  <div class="text-sm text-gray-500">CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Download CTA */}
      <section class="py-20 bg-brand-anthrazit text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-display mb-6">
            Kostenlose Planungshilfen
          </h2>
          <p class="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
            Laden Sie unsere Checklisten herunter und starten Sie perfekt vorbereitet in Ihr Projekt
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
            <a href="/downloads/kuechen-checkliste" class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition">
              <i class="fas fa-utensils text-3xl mb-3 text-brand-brass"></i>
              <h3 class="font-semibold mb-2">Küchen-Checkliste</h3>
              <p class="text-sm text-gray-300">10 Schritte zur Traumküche</p>
            </a>
            
            <a href="/downloads/bad-planer" class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition">
              <i class="fas fa-bath text-3xl mb-3 text-brand-brass"></i>
              <h3 class="font-semibold mb-2">Bad-Planer</h3>
              <p class="text-sm text-gray-300">Wellness perfekt geplant</p>
            </a>
            
            <a href="/downloads/restaurant-guide" class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition">
              <i class="fas fa-store text-3xl mb-3 text-brand-brass"></i>
              <h3 class="font-semibold mb-2">Restaurant-Guide</h3>
              <p class="text-sm text-gray-300">B2B Projekt-Checkliste</p>
            </a>
            
            <a href="/downloads/showroom-konzept" class="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition">
              <i class="fas fa-palette text-3xl mb-3 text-brand-brass"></i>
              <h3 class="font-semibold mb-2">Showroom-Konzept</h3>
              <p class="text-sm text-gray-300">Markenräume gestalten</p>
            </a>
          </div>
          
          <a href="/downloads" class="btn-secondary-large">
            <i class="fas fa-download mr-2"></i>
            Alle Downloads ansehen
          </a>
        </div>
      </section>
      
      {/* CTA Section */}
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="bg-gradient-to-r from-brand-brass to-brand-oak rounded-2xl p-12 text-center text-white">
            <h2 class="text-4xl font-display mb-6">
              Bereit für Ihr Projekt?
            </h2>
            <p class="text-xl mb-10 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Vision verwirklichen. 
              Wir freuen uns auf Ihre Anfrage!
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt#showroom" class="btn-white-large">
                <i class="fas fa-map-marker-alt mr-2"></i>
                Showroom besuchen
              </a>
              <a href="/kontakt#beratung" class="btn-white-outline-large">
                <i class="fas fa-comments mr-2"></i>
                Beratung anfordern
              </a>
              <a href="/kontakt#projekt" class="btn-white-outline-large">
                <i class="fas fa-rocket mr-2"></i>
                Projekt starten
              </a>
            </div>
          </div>
        </div>
      </section>
    </>,
    { 
      title: 'Brandstifter Urban Manufactur | Premium Manufaktur für individuelle Raumkonzepte',
      description: 'Premium-Manufaktur für maßgefertigte Küchen, Badmöbel, Ladenbau und Gastronomie-Einrichtung. Made in Wetterau seit 1999. Jetzt Showroom-Termin buchen!'
    }
  )
})