import { Hono } from 'hono'

export const leistungenRoute = new Hono()

// Service data
const services = [
  {
    id: 'kuechen',
    title: 'Küchen & Wohnkonzepte',
    subtitle: 'Der Mittelpunkt Ihres Zuhauses',
    description: 'Maßgefertigte Premium-Küchen, die Design und Funktion perfekt vereinen. Von der ersten Idee bis zur letzten Schublade.',
    icon: 'fa-utensils',
    features: ['Individuelle Planung', '3D-Visualisierung', 'Premium-Materialien', 'Smart-Home Integration'],
    priceRange: 'ab 25.000 €',
    duration: '6-10 Wochen',
    link: '/leistungen/kuechen'
  },
  {
    id: 'badmoebel',
    title: 'Badmöbel & Wellness',
    subtitle: 'Ihr privates Spa',
    description: 'Verwandeln Sie Ihr Bad in eine Wellness-Oase. Maßgeschneiderte Lösungen für jeden Raum und jeden Anspruch.',
    icon: 'fa-bath',
    features: ['Waschtisch-Systeme', 'Stauraum-Lösungen', 'Barrierefreiheit', 'Wellness-Features'],
    priceRange: 'ab 10.000 €',
    duration: '4-8 Wochen',
    link: '/leistungen/badmoebel'
  },
  {
    id: 'ladenbau',
    title: 'Ladenbau & Retail',
    subtitle: 'Räume, die verkaufen',
    description: 'Schaffen Sie unvergessliche Markenerlebnisse. Vom Boutique-Store bis zum Flagship – wir realisieren Ihre Vision.',
    icon: 'fa-store',
    features: ['Store-Konzepte', 'Visual Merchandising', 'Beleuchtungsdesign', 'Rollout-fähig'],
    priceRange: 'ab 50.000 €',
    duration: '8-12 Wochen',
    link: '/leistungen/ladenbau'
  },
  {
    id: 'gastronomie',
    title: 'Gastronomie & Hospitality',
    subtitle: 'Bühnen für Genuss',
    description: 'Komplettlösungen für Restaurants, Cafés und Hotels. Funktional, stilvoll und auf Ihren Erfolg ausgerichtet.',
    icon: 'fa-coffee',
    features: ['Raumkonzepte', 'Theken & Bars', 'Möblierung', 'Akustik-Lösungen'],
    priceRange: 'ab 75.000 €',
    duration: '10-16 Wochen',
    link: '/leistungen/gastronomie'
  },
  {
    id: 'buero',
    title: 'Büro & Workspaces',
    subtitle: 'Produktivität trifft Design',
    description: 'Moderne Arbeitsumgebungen, die Kreativität fördern und Effizienz steigern. New Work perfekt umgesetzt.',
    icon: 'fa-briefcase',
    features: ['Flexible Workspaces', 'Meeting-Räume', 'Akustik-Planung', 'Ergonomie-Konzepte'],
    priceRange: 'ab 30.000 €',
    duration: '6-10 Wochen',
    link: '/leistungen/buero'
  },
  {
    id: 'outdoor',
    title: 'Outdoor & Terrassen',
    subtitle: 'Leben unter freiem Himmel',
    description: 'Wetterfeste Outdoor-Küchen und Möbel für Ihre Terrasse. Genießen Sie das Leben im Freien in vollem Komfort.',
    icon: 'fa-tree',
    features: ['Outdoor-Küchen', 'Wetterfeste Materialien', 'Grill-Stationen', 'Lounge-Bereiche'],
    priceRange: 'ab 20.000 €',
    duration: '6-8 Wochen',
    link: '/leistungen/outdoor'
  }
]

leistungenRoute.get('/', (c) => {
  return c.render(
    <>
      {/* Hero Section */}
      <section class="bg-gradient-to-br from-brand-anthrazit to-gray-800 py-20 text-white">
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-display mb-4">Unsere Leistungen</h1>
          <p class="text-xl text-gray-300 max-w-2xl">
            Von der Privatküche bis zum Flagship-Store – wir sind Ihr Partner für 
            außergewöhnliche Raumkonzepte und maßgeschneiderte Lösungen.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="bg-gradient-to-r from-brand-brass to-brand-oak p-6 text-white">
                  <i class={`fas ${service.icon} text-4xl mb-4`}></i>
                  <h2 class="text-2xl font-bold mb-2">{service.title}</h2>
                  <p class="text-sm opacity-90">{service.subtitle}</p>
                </div>
                
                <div class="p-6">
                  <p class="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  
                  <div class="space-y-4 mb-6">
                    <h3 class="font-semibold text-brand-anthrazit">Leistungen:</h3>
                    <ul class="space-y-2">
                      {service.features.map((feature) => (
                        <li class="flex items-start text-sm text-gray-600">
                          <i class="fas fa-check text-brand-brass mr-2 mt-0.5"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div class="flex justify-between text-sm text-gray-500 border-t pt-4 mb-6">
                    <span>
                      <i class="fas fa-euro-sign mr-1"></i>
                      {service.priceRange}
                    </span>
                    <span>
                      <i class="fas fa-clock mr-1"></i>
                      {service.duration}
                    </span>
                  </div>
                  
                  <a href={service.link} class="btn-primary w-full text-center">
                    Mehr erfahren
                    <i class="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-display text-brand-anthrazit text-center mb-12">
            Unser bewährter Prozess
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 class="font-semibold text-xl mb-2">Erstberatung</h3>
              <p class="text-gray-600">
                Kostenloses Erstgespräch in unserem Showroom oder bei Ihnen vor Ort.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 class="font-semibold text-xl mb-2">Konzeption</h3>
              <p class="text-gray-600">
                Entwicklung Ihres individuellen Konzepts mit 3D-Visualisierung.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 class="font-semibold text-xl mb-2">Detailplanung</h3>
              <p class="text-gray-600">
                Ausarbeitung aller Details, Material- und Farbauswahl.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 class="font-semibold text-xl mb-2">Produktion</h3>
              <p class="text-gray-600">
                Fertigung in unserer Manufaktur mit höchsten Qualitätsstandards.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 class="font-semibold text-xl mb-2">Montage</h3>
              <p class="text-gray-600">
                Professionelle Installation durch unser erfahrenes Montageteam.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                6
              </div>
              <h3 class="font-semibold text-xl mb-2">Service</h3>
              <p class="text-gray-600">
                Lebenslange Betreuung und Service für Ihre Zufriedenheit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-display text-brand-anthrazit text-center mb-12">
            Warum Brandstifter?
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <i class="fas fa-award text-4xl text-brand-brass mb-4"></i>
              <h3 class="font-semibold text-lg mb-2">25 Jahre Expertise</h3>
              <p class="text-gray-600 text-sm">
                Erfahrung aus über 500 erfolgreich realisierten Projekten.
              </p>
            </div>
            
            <div class="text-center">
              <i class="fas fa-handshake text-4xl text-brand-brass mb-4"></i>
              <h3 class="font-semibold text-lg mb-2">Alles aus einer Hand</h3>
              <p class="text-gray-600 text-sm">
                Von der Planung bis zur Montage – ein Ansprechpartner.
              </p>
            </div>
            
            <div class="text-center">
              <i class="fas fa-leaf text-4xl text-brand-brass mb-4"></i>
              <h3 class="font-semibold text-lg mb-2">Nachhaltig</h3>
              <p class="text-gray-600 text-sm">
                Regionale Produktion mit nachhaltigen Materialien.
              </p>
            </div>
            
            <div class="text-center">
              <i class="fas fa-shield-alt text-4xl text-brand-brass mb-4"></i>
              <h3 class="font-semibold text-lg mb-2">Garantie & Service</h3>
              <p class="text-gray-600 text-sm">
                5 Jahre Garantie und lebenslanger Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-gradient-to-r from-brand-brass to-brand-oak text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-display mb-6">
            Lassen Sie uns Ihr Projekt besprechen
          </h2>
          <p class="text-xl mb-8 max-w-2xl mx-auto">
            Egal welche Herausforderung – wir finden die perfekte Lösung für Sie.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" class="btn-white-large">
              <i class="fas fa-comments mr-2"></i>
              Beratung anfordern
            </a>
            <a href="/downloads" class="btn-white-outline-large">
              <i class="fas fa-download mr-2"></i>
              Planungshilfen
            </a>
          </div>
        </div>
      </section>
    </>,
    { 
      title: 'Leistungen | Brandstifter Urban Manufactur',
      description: 'Unsere Leistungen: Küchen, Badmöbel, Ladenbau, Gastronomie, Büros und Outdoor. Maßgeschneiderte Lösungen aus einer Hand.'
    }
  )
})

// Küchen detail page
leistungenRoute.get('/kuechen', (c) => {
  return c.render(
    <>
      {/* Hero Section */}
      <section class="relative h-96 flex items-center justify-center bg-gradient-to-br from-brand-anthrazit to-gray-800">
        <div class="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 class="text-5xl font-display mb-4">Küchen & Wohnkonzepte</h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Ihre Küche ist mehr als ein Raum – sie ist das Herz Ihres Zuhauses. 
            Wir gestalten Küchen, die perfekt zu Ihrem Leben passen.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-display text-brand-anthrazit mb-6">
                Maßgeschneiderte Perfektion
              </h2>
              <p class="text-lg text-gray-700 mb-6">
                Jede Küche, die unsere Manufaktur verlässt, ist ein Unikat. Entwickelt für Ihre 
                Bedürfnisse, gefertigt mit Leidenschaft und installiert mit Präzision.
              </p>
              <p class="text-gray-700 mb-8">
                Von der minimalistischen Design-Küche bis zur gemütlichen Landhausküche – 
                wir verwirklichen Ihre Vision mit höchster Handwerkskunst und modernster Technologie.
              </p>
              
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <div class="text-3xl font-bold text-brand-brass mb-2">150+</div>
                  <div class="text-gray-600">Küchen pro Jahr</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-brand-brass mb-2">98%</div>
                  <div class="text-gray-600">Kundenzufriedenheit</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-brand-brass mb-2">5</div>
                  <div class="text-gray-600">Jahre Garantie</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-brand-brass mb-2">∞</div>
                  <div class="text-gray-600">Gestaltungsmöglichkeiten</div>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-300 rounded-lg aspect-w-16 aspect-h-12">
              {/* Kitchen image placeholder */}
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Styles */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-display text-brand-anthrazit text-center mb-12">
            Stilrichtungen & Design
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="aspect-w-16 aspect-h-12 bg-gray-200"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Modern & Minimalistisch</h3>
                <p class="text-gray-600 text-sm">
                  Klare Linien, grifflose Fronten, hochwertige Materialien. Perfekt für Puristen.
                </p>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="aspect-w-16 aspect-h-12 bg-gray-200"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Industrial Chic</h3>
                <p class="text-gray-600 text-sm">
                  Rohes Design trifft auf Funktionalität. Metall, Beton und Holz im perfekten Mix.
                </p>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="aspect-w-16 aspect-h-12 bg-gray-200"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Klassisch Elegant</h3>
                <p class="text-gray-600 text-sm">
                  Zeitlose Eleganz mit hochwertigen Details. Für Liebhaber traditioneller Ästhetik.
                </p>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="aspect-w-16 aspect-h-12 bg-gray-200"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Skandinavisch</h3>
                <p class="text-gray-600 text-sm">
                  Hell, freundlich, funktional. Natürliche Materialien und clevere Lösungen.
                </p>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="aspect-w-16 aspect-h-12 bg-gray-200"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Landhaus Modern</h3>
                <p class="text-gray-600 text-sm">
                  Gemütlichkeit trifft auf moderne Technik. Der perfekte Mix aus Tradition und Innovation.
                </p>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="aspect-w-16 aspect-h-12 bg-gray-200"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Individuell</h3>
                <p class="text-gray-600 text-sm">
                  Ihre Vision, unser Handwerk. Wir realisieren auch ausgefallene Ideen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Equipment */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-display text-brand-anthrazit text-center mb-12">
            Ausstattung & Features
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 class="font-semibold text-lg mb-4 text-brand-anthrazit">
                <i class="fas fa-cube mr-2 text-brand-brass"></i>
                Materialien
              </h3>
              <ul class="space-y-2 text-gray-600">
                <li>• Massivholz & Echtholzfurnier</li>
                <li>• Hochglanz- & Mattlackierungen</li>
                <li>• Naturstein & Quarz-Komposit</li>
                <li>• Edelstahl & Metalle</li>
                <li>• Glas & Keramik</li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-semibold text-lg mb-4 text-brand-anthrazit">
                <i class="fas fa-cogs mr-2 text-brand-brass"></i>
                Technik
              </h3>
              <ul class="space-y-2 text-gray-600">
                <li>• Soft-Close Systeme</li>
                <li>• Push-to-Open</li>
                <li>• LED-Beleuchtung</li>
                <li>• Elektrische Auszüge</li>
                <li>• Smart-Home Integration</li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-semibold text-lg mb-4 text-brand-anthrazit">
                <i class="fas fa-blender mr-2 text-brand-brass"></i>
                Geräte
              </h3>
              <ul class="space-y-2 text-gray-600">
                <li>• Premium-Marken</li>
                <li>• Energieeffizienz A+++</li>
                <li>• Induktionskochfelder</li>
                <li>• Dampfgarer & Backöfen</li>
                <li>• Integrierte Kaffeesysteme</li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-semibold text-lg mb-4 text-brand-anthrazit">
                <i class="fas fa-magic mr-2 text-brand-brass"></i>
                Extras
              </h3>
              <ul class="space-y-2 text-gray-600">
                <li>• Kochinsel & Bar</li>
                <li>• Weinkühlschränke</li>
                <li>• Mülltrennsysteme</li>
                <li>• Gewürzschubladen</li>
                <li>• Hidden Storage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price Packages */}
      <section class="py-16 bg-brand-greige">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-display text-brand-anthrazit text-center mb-12">
            Transparente Preisgestaltung
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h3 class="text-xl font-bold mb-2">Starter</h3>
              <div class="text-3xl font-bold text-brand-brass mb-4">ab 25.000 €</div>
              <ul class="space-y-2 text-gray-600 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Basis-Ausstattung</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Qualitäts-Materialien</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Standard-Geräte</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>5 Jahre Garantie</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg p-8 relative">
              <div class="absolute -top-4 right-4 bg-brand-brass text-white px-3 py-1 rounded-full text-sm">
                Beliebt
              </div>
              <h3 class="text-xl font-bold mb-2">Premium</h3>
              <div class="text-3xl font-bold text-brand-brass mb-4">ab 50.000 €</div>
              <ul class="space-y-2 text-gray-600 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Premium-Materialien</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Marken-Geräte</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Individuelle Details</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Smart-Home Ready</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h3 class="text-xl font-bold mb-2">Luxury</h3>
              <div class="text-3xl font-bold text-brand-brass mb-4">ab 100.000 €</div>
              <ul class="space-y-2 text-gray-600 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Exklusive Materialien</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>High-End Geräte</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Vollausstattung</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>Concierge-Service</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p class="text-center text-gray-600 mt-8">
            * Alle Preise verstehen sich als Richtwerte inkl. Planung, Produktion und Montage. 
            Gerne erstellen wir Ihnen ein individuelles Angebot.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-gradient-to-r from-brand-anthrazit to-gray-800 text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-display mb-6">
            Bereit für Ihre Traumküche?
          </h2>
          <p class="text-xl mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre perfekte Küche planen. 
            Vereinbaren Sie jetzt einen unverbindlichen Beratungstermin.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" class="btn-primary-large bg-white text-brand-anthrazit hover:bg-gray-100">
              <i class="fas fa-calendar-alt mr-2"></i>
              Beratungstermin vereinbaren
            </a>
            <a href="/downloads/kuechen-checkliste" class="btn-secondary-large">
              <i class="fas fa-download mr-2"></i>
              Planungs-Checkliste
            </a>
          </div>
        </div>
      </section>
    </>,
    { 
      title: 'Küchen & Wohnkonzepte | Brandstifter Urban Manufactur',
      description: 'Maßgefertigte Premium-Küchen aus unserer Manufaktur. Individuelle Planung, hochwertige Materialien, perfekte Umsetzung. Jetzt beraten lassen!'
    }
  )
})

// Badmöbel detail page
leistungenRoute.get('/badmoebel', (c) => {
  return c.render(
      <>
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-blue-50 to-gray-100 py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-semibold mb-6">
                  <i class="fas fa-bath mr-2"></i>
                  Badmöbel & Wellness
                </div>
                <h1 class="font-display text-5xl md:text-6xl mb-6">
                  Ihr persönlicher <span class="text-blue-600">Wellness-Tempel</span>
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                  Verwandeln Sie Ihr Badezimmer in eine Oase der Entspannung. 
                  Mit maßgefertigten Badmöbeln, die Funktionalität und Design perfekt vereinen.
                </p>
                <div class="flex flex-wrap gap-4 mb-8">
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Wasserfeste Materialien</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>LED-Beleuchtung</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Soft-Close</span>
                  </div>
                </div>
                <div class="flex gap-4">
                  <a href="#konfigurator" class="btn-primary">
                    <i class="fas fa-cube mr-2"></i>
                    3D-Konfigurator starten
                  </a>
                  <a href="/kontakt?projekt=badmoebel" class="btn-secondary">
                    <i class="fas fa-calendar mr-2"></i>
                    Beratungstermin
                  </a>
                </div>
              </div>
              <div class="relative">
                <img src="/api/placeholder/600/500" alt="Luxus Badezimmer" class="rounded-2xl shadow-2xl" />
                <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div class="flex items-center gap-4">
                    <div class="text-center">
                      <div class="text-3xl font-bold text-blue-600">200+</div>
                      <div class="text-sm text-gray-600">Bäder/Jahr</div>
                    </div>
                    <div class="w-px h-12 bg-gray-300"></div>
                    <div class="text-center">
                      <div class="text-3xl font-bold text-blue-600">10J</div>
                      <div class="text-sm text-gray-600">Garantie</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stil-Varianten */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Badezimmer-Stile für jeden Geschmack</h2>
              <p class="text-xl text-gray-600">Von minimalistisch bis opulent – wir realisieren Ihre Vision</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Spa & Wellness" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Spa & Wellness</h3>
                  </div>
                </div>
                <p class="text-gray-600">Sauna-Integration, Whirlpool-Systeme, Aromatherapie-Duschen</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Minimalistisch" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Minimalistisch</h3>
                  </div>
                </div>
                <p class="text-gray-600">Klare Linien, fugenloses Design, versteckte Technik</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Natural Living" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Natural Living</h3>
                  </div>
                </div>
                <p class="text-gray-600">Echtholz, Naturstein, organische Formen, Pflanzenintegration</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Smart Bath" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Smart Bath</h3>
                  </div>
                </div>
                <p class="text-gray-600">Digitale Spiegel, App-Steuerung, automatische Beleuchtung</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Barrierefreies Bad" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Barrierefrei</h3>
                  </div>
                </div>
                <p class="text-gray-600">Bodengleiche Duschen, Haltegriffe, unterfahrbare Waschtische</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Vintage & Retro" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Vintage & Retro</h3>
                  </div>
                </div>
                <p class="text-gray-600">Freistehende Wannen, Messing-Armaturen, Metro-Fliesen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ausstattung & Features */}
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Premium-Ausstattung im Detail</h2>
              <p class="text-xl text-gray-600">Hochwertige Komponenten für langlebige Qualität</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-sink text-blue-600 mr-3"></i>
                  Waschtische & Becken
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Mineralguss-Becken fugenlos</li>
                  <li>• Doppelwaschtische</li>
                  <li>• Aufsatzwaschbecken</li>
                  <li>• Integrierte Handtuchhalter</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-box text-blue-600 mr-3"></i>
                  Stauraum-Lösungen
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Soft-Close Schubladen</li>
                  <li>• Inneneinteilung</li>
                  <li>• Apothekerauszüge</li>
                  <li>• Versteckte Steckdosen</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-lightbulb text-blue-600 mr-3"></i>
                  Beleuchtung
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• LED-Spiegelbeleuchtung</li>
                  <li>• Indirekte Beleuchtung</li>
                  <li>• Farbtemperatur einstellbar</li>
                  <li>• Bewegungssensoren</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-tint text-blue-600 mr-3"></i>
                  Materialien
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• HPL-Oberflächen</li>
                  <li>• Echtholz-Furniere</li>
                  <li>• Naturstein-Platten</li>
                  <li>• Antibakterielle Beschichtung</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Preispakete */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Investition in Ihr Wohlbefinden</h2>
              <p class="text-xl text-gray-600">Transparente Preispakete für jedes Budget</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Essential</h3>
                  <div class="text-4xl font-bold text-gray-800 mb-2">ab 8.000 €</div>
                  <p class="text-gray-600">Gästebad / kleines Bad</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Waschtischunterschrank mit Becken</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Spiegelschrank mit LED</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Hochschrank</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Standard-Armaturen</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>5 Jahre Garantie</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=badmoebel-essential" class="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Anfrage stellen
                </a>
              </div>
              
              <div class="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border-2 border-blue-500 relative">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  BELIEBT
                </div>
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Comfort</h3>
                  <div class="text-4xl font-bold text-blue-600 mb-2">ab 15.000 €</div>
                  <p class="text-gray-600">Familienbad</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Doppelwaschtisch-Anlage</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Beleuchteter Spiegel</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Zusätzliche Unterschränke</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Handtuchheizung</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Marken-Armaturen</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Soft-Close überall</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>7 Jahre Garantie</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=badmoebel-comfort" class="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Jetzt konfigurieren
                </a>
              </div>
              
              <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Luxury Spa</h3>
                  <div class="text-4xl font-bold text-gray-800 mb-2">ab 30.000 €</div>
                  <p class="text-gray-600">Wellness-Oase</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Maßanfertigung komplett</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Smart-Mirror System</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Integrierte Soundanlage</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Aromatherapie-System</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Premium-Materialien</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Freistehende Badewanne</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>10 Jahre Garantie</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=badmoebel-luxury" class="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Premium-Beratung
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Prozess */}
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Von der Idee zum Traumbad</h2>
              <p class="text-xl text-gray-600">Unser bewährter Prozess für Ihr perfektes Badezimmer</p>
            </div>
            
            <div class="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div class="text-center">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 class="font-bold mb-2">Beratung</h3>
                <p class="text-sm text-gray-600">Bedarfsanalyse vor Ort</p>
              </div>
              
              <div class="text-center">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 class="font-bold mb-2">3D-Planung</h3>
                <p class="text-sm text-gray-600">Visualisierung</p>
              </div>
              
              <div class="text-center">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 class="font-bold mb-2">Material</h3>
                <p class="text-sm text-gray-600">Auswahl & Bemusterung</p>
              </div>
              
              <div class="text-center">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 class="font-bold mb-2">Fertigung</h3>
                <p class="text-sm text-gray-600">In unserer Manufaktur</p>
              </div>
              
              <div class="text-center">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-blue-600">5</span>
                </div>
                <h3 class="font-bold mb-2">Montage</h3>
                <p class="text-sm text-gray-600">Professionell & sauber</p>
              </div>
              
              <div class="text-center">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold text-blue-600">6</span>
                </div>
                <h3 class="font-bold mb-2">Service</h3>
                <p class="text-sm text-gray-600">Wartung & Pflege</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="font-display text-4xl mb-6">Bereit für Ihr Traumbad?</h2>
            <p class="text-xl mb-8 opacity-90">
              Lassen Sie uns gemeinsam Ihre Wellness-Oase gestalten.
              Vereinbaren Sie jetzt einen unverbindlichen Beratungstermin.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt?projekt=badmoebel" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                <i class="fas fa-calendar-alt mr-2"></i>
                Termin vereinbaren
              </a>
              <a href="/downloads" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center">
                <i class="fas fa-download mr-2"></i>
                Bad-Planungsguide
              </a>
            </div>
          </div>
        </section>
      </>,
      { 
        title: 'Badmöbel & Wellness | Brandstifter Urban Manufactur',
        description: 'Maßgefertigte Badmöbel für Ihr persönliches Wellness-Paradies. Hochwertige Materialien, wasserfeste Verarbeitung, individuelle Planung.'
      }
    )
})

// Ladenbau detail page
leistungenRoute.get('/ladenbau', (c) => {
  return c.render(
      <>
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-purple-50 to-gray-100 py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-semibold mb-6">
                  <i class="fas fa-store mr-2"></i>
                  Ladenbau & Retail Design
                </div>
                <h1 class="font-display text-5xl md:text-6xl mb-6">
                  Ihre Marke zum <span class="text-purple-600">Erlebnis</span> machen
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                  Schaffen Sie unvergessliche Shopping-Erlebnisse mit durchdachtem Store-Design. 
                  Von der ersten Skizze bis zur schlüsselfertigen Übergabe.
                </p>
                <div class="flex flex-wrap gap-4 mb-8">
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Markengerecht</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Modular & flexibel</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Nachhaltig</span>
                  </div>
                </div>
                <div class="flex gap-4">
                  <a href="/projekte?filter=ladenbau" class="btn-primary">
                    <i class="fas fa-images mr-2"></i>
                    Referenzen ansehen
                  </a>
                  <a href="/kontakt?projekt=ladenbau" class="btn-secondary">
                    <i class="fas fa-phone mr-2"></i>
                    Beratung anfordern
                  </a>
                </div>
              </div>
              <div class="relative">
                <img src="/api/placeholder/600/500" alt="Moderner Ladenbau" class="rounded-2xl shadow-2xl" />
                <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div class="flex items-center gap-4">
                    <div class="text-center">
                      <div class="text-3xl font-bold text-purple-600">500+</div>
                      <div class="text-sm text-gray-600">Stores</div>
                    </div>
                    <div class="w-px h-12 bg-gray-300"></div>
                    <div class="text-center">
                      <div class="text-3xl font-bold text-purple-600">15</div>
                      <div class="text-sm text-gray-600">Branchen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branchen & Konzepte */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Branchenlösungen mit Expertise</h2>
              <p class="text-xl text-gray-600">Maßgeschneiderte Konzepte für jeden Retail-Bereich</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Fashion & Mode" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Fashion & Mode</h3>
                  </div>
                </div>
                <p class="text-gray-600">Boutiquen, Flagship-Stores, Pop-up Shops, Showrooms</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Kosmetik & Beauty" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Kosmetik & Beauty</h3>
                  </div>
                </div>
                <p class="text-gray-600">Parfümerien, Kosmetikstudios, Friseursalons, Spa-Bereiche</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Schmuck & Uhren" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Schmuck & Uhren</h3>
                  </div>
                </div>
                <p class="text-gray-600">Juweliere, Uhrengeschäfte, Goldschmiede, Vitrinen-Systeme</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Elektronik" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Elektronik & Tech</h3>
                  </div>
                </div>
                <p class="text-gray-600">Smartphone-Stores, Computer-Shops, Gaming-Bereiche</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Lebensmittel" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Food & Gourmet</h3>
                  </div>
                </div>
                <p class="text-gray-600">Feinkostläden, Bäckereien, Weinhandlungen, Confiserien</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Sport & Freizeit" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Sport & Outdoor</h3>
                  </div>
                </div>
                <p class="text-gray-600">Sportgeschäfte, Outdoor-Shops, Fitness-Studios, Bike-Stores</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leistungsspektrum */}
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Komplettlösungen aus einer Hand</h2>
              <p class="text-xl text-gray-600">Von der Konzeption bis zur Eröffnung</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-drafting-compass text-purple-600 mr-3"></i>
                  Konzeption & Design
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Store-Konzepte</li>
                  <li>• 3D-Visualisierung</li>
                  <li>• Flächenoptimierung</li>
                  <li>• Customer Journey</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-cubes text-purple-600 mr-3"></i>
                  Möbel & Systeme
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Verkaufstheken</li>
                  <li>• Regalsysteme</li>
                  <li>• Präsentationsmöbel</li>
                  <li>• Kassenbereiche</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-plug text-purple-600 mr-3"></i>
                  Technik & Licht
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• LED-Beleuchtung</li>
                  <li>• Digital Signage</li>
                  <li>• Sound-Systeme</li>
                  <li>• Sicherheitstechnik</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-truck text-purple-600 mr-3"></i>
                  Service
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Projektmanagement</li>
                  <li>• Montage & Installation</li>
                  <li>• Rollout-Management</li>
                  <li>• After-Sales-Service</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Investment-Pakete */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Investment-Pakete für Ihren Erfolg</h2>
              <p class="text-xl text-gray-600">Skalierbare Lösungen für jede Unternehmensgröße</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Start-up Store</h3>
                  <div class="text-4xl font-bold text-gray-800 mb-2">ab 25.000 €</div>
                  <p class="text-gray-600">30-60 m² Fläche</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Basis-Shopkonzept</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Modulare Möbelsysteme</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Standard-Beleuchtung</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Kassenbereich</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>4 Wochen Umsetzung</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=ladenbau-startup" class="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Anfrage stellen
                </a>
              </div>
              
              <div class="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-xl border-2 border-purple-500 relative">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  BELIEBT
                </div>
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Professional</h3>
                  <div class="text-4xl font-bold text-purple-600 mb-2">ab 75.000 €</div>
                  <p class="text-gray-600">60-150 m² Fläche</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Individual-Konzept</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Maßgefertigte Möbel</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>LED-Lichtkonzept</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Digital Signage</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Umkleidebereiche</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>6-8 Wochen Umsetzung</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=ladenbau-professional" class="block text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Jetzt planen
                </a>
              </div>
              
              <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Flagship</h3>
                  <div class="text-4xl font-bold text-gray-800 mb-2">ab 200.000 €</div>
                  <p class="text-gray-600">150+ m² Fläche</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Premium-Konzept</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Exklusive Materialien</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Interaktive Elemente</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Experience-Zones</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>VIP-Bereiche</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>10-12 Wochen</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=ladenbau-flagship" class="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Premium-Beratung
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section class="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="font-display text-4xl mb-6">Lassen Sie uns Ihre Marke inszenieren</h2>
            <p class="text-xl mb-8 opacity-90">
              Gemeinsam schaffen wir Räume, die verkaufen und begeistern.
              Starten Sie jetzt mit Ihrem Store-Projekt.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt?projekt=ladenbau" class="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                <i class="fas fa-rocket mr-2"></i>
                Projekt starten
              </a>
              <a href="/projekte?filter=ladenbau" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center">
                <i class="fas fa-images mr-2"></i>
                Referenzen ansehen
              </a>
            </div>
          </div>
        </section>
      </>,
      { 
        title: 'Ladenbau & Store Design | Brandstifter Urban Manufactur',
        description: 'Professioneller Ladenbau für Retail, Fashion & mehr. Vom Konzept bis zur Eröffnung - wir schaffen Verkaufsräume, die begeistern.'
      }
    )
})

// Gastronomie detail page
leistungenRoute.get('/gastronomie', (c) => {
  return c.render(
      <>
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-orange-50 to-gray-100 py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-semibold mb-6">
                  <i class="fas fa-utensils mr-2"></i>
                  Gastronomie & Hospitality
                </div>
                <h1 class="font-display text-5xl md:text-6xl mb-6">
                  Räume die <span class="text-orange-600">Genuss</span> schaffen
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                  Kreieren Sie unvergessliche Gastro-Erlebnisse mit durchdachtem Interior Design. 
                  Von der Bar bis zum Sterne-Restaurant - wir verwirklichen Ihre Vision.
                </p>
                <div class="flex flex-wrap gap-4 mb-8">
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>HACCP-konform</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Ergonomisch</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Pflegeleicht</span>
                  </div>
                </div>
                <div class="flex gap-4">
                  <a href="/downloads/gastro-guide" class="btn-primary">
                    <i class="fas fa-book mr-2"></i>
                    Gastro-Guide laden
                  </a>
                  <a href="/kontakt?projekt=gastronomie" class="btn-secondary">
                    <i class="fas fa-comments mr-2"></i>
                    Erstberatung
                  </a>
                </div>
              </div>
              <div class="relative">
                <img src="/api/placeholder/600/500" alt="Restaurant Design" class="rounded-2xl shadow-2xl" />
                <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div class="flex items-center gap-4">
                    <div class="text-center">
                      <div class="text-3xl font-bold text-orange-600">300+</div>
                      <div class="text-sm text-gray-600">Projekte</div>
                    </div>
                    <div class="w-px h-12 bg-gray-300"></div>
                    <div class="text-center">
                      <div class="text-3xl font-bold text-orange-600">24h</div>
                      <div class="text-sm text-gray-600">Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gastro-Konzepte */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Für jedes Gastro-Konzept die richtige Lösung</h2>
              <p class="text-xl text-gray-600">Vom Café bis zum Fine Dining - wir kennen die Anforderungen</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Restaurant" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Restaurants</h3>
                  </div>
                </div>
                <p class="text-gray-600">Fine Dining, Bistros, Brasserie, Sterne-Küche</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Café & Bar" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Café & Bar</h3>
                  </div>
                </div>
                <p class="text-gray-600">Coffee Shops, Cocktailbars, Weinbars, Lounges</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Hotel" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Hotel & Resort</h3>
                  </div>
                </div>
                <p class="text-gray-600">Frühstücksräume, Hotelrestaurants, Lobby-Bars</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Fast Casual" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Fast Casual</h3>
                  </div>
                </div>
                <p class="text-gray-600">Burger-Läden, Pizza, Sushi-Bars, Food Courts</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Kantine" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Betriebsgastronomie</h3>
                  </div>
                </div>
                <p class="text-gray-600">Kantinen, Mensen, Mitarbeiter-Restaurants</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Event" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Event & Catering</h3>
                  </div>
                </div>
                <p class="text-gray-600">Eventlocations, Catering-Küchen, Bankett-Säle</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leistungen */}
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Alles aus einer Hand</h2>
              <p class="text-xl text-gray-600">Komplettausstattung für Ihre Gastronomie</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-chair text-orange-600 mr-3"></i>
                  Möblierung
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Tische & Bestuhlung</li>
                  <li>• Bänke & Loungemöbel</li>
                  <li>• Barhocker</li>
                  <li>• Outdoor-Möbel</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-glass-martini text-orange-600 mr-3"></i>
                  Bar & Theke
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Bartheken</li>
                  <li>• Kühltechnik</li>
                  <li>• Zapfanlagen</li>
                  <li>• Arbeitsplatten</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-door-open text-orange-600 mr-3"></i>
                  Raumteiler
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Trennwände</li>
                  <li>• Akustik-Elemente</li>
                  <li>• Pflanzkübel</li>
                  <li>• Sichtschutz</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-briefcase text-orange-600 mr-3"></i>
                  Service
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Servicestationen</li>
                  <li>• Kassenbereiche</li>
                  <li>• Garderoben</li>
                  <li>• Sanitärausstattung</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Preismodelle */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Investition in Ihren Erfolg</h2>
              <p class="text-xl text-gray-600">Flexible Pakete für jeden Gastronomiebetrieb</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Café/Bistro</h3>
                  <div class="text-4xl font-bold text-gray-800 mb-2">ab 35.000 €</div>
                  <p class="text-gray-600">50-80 m²</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>30-40 Sitzplätze</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Theke mit Unterbau</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Basis-Möblierung</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Kaffee-Station</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>6 Wochen Lieferzeit</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=gastro-cafe" class="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Anfrage stellen
                </a>
              </div>
              
              <div class="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-xl border-2 border-orange-500 relative">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  BELIEBT
                </div>
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Restaurant</h3>
                  <div class="text-4xl font-bold text-orange-600 mb-2">ab 85.000 €</div>
                  <p class="text-gray-600">100-200 m²</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>60-100 Sitzplätze</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Bar-Bereich</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Premium-Möbel</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Lichtkonzept</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Akustik-Lösungen</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>8-10 Wochen</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=gastro-restaurant" class="block text-center bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
                  Jetzt planen
                </a>
              </div>
              
              <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Fine Dining</h3>
                  <div class="text-4xl font-bold text-gray-800 mb-2">ab 200.000 €</div>
                  <p class="text-gray-600">200+ m²</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>100+ Sitzplätze</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Separée-Bereiche</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Maßanfertigung</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Weinklimaschrank</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Chef's Table</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>12-16 Wochen</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=gastro-finedining" class="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Premium-Beratung
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section class="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
          <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="font-display text-4xl mb-6">Bereit für Ihr Gastro-Projekt?</h2>
            <p class="text-xl mb-8 opacity-90">
              Von der ersten Idee bis zur Eröffnung - wir begleiten Sie auf dem Weg zu Ihrem Traumlokal.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt?projekt=gastronomie" class="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                <i class="fas fa-phone mr-2"></i>
                Beratung vereinbaren
              </a>
              <a href="/downloads/gastro-guide" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center">
                <i class="fas fa-download mr-2"></i>
                Gastro-Guide
              </a>
            </div>
          </div>
        </section>
      </>,
      { 
        title: 'Gastronomie & Restaurant Design | Brandstifter Urban Manufactur',
        description: 'Professionelle Gastronomieeinrichtung vom Café bis zum Sterne-Restaurant. Komplettausstattung, HACCP-konform, individuelles Design.'
      }
    )
})

// Büro & Office detail page
leistungenRoute.get('/buero', (c) => {
  return c.render(
      <>
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-green-50 to-gray-100 py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-semibold mb-6">
                  <i class="fas fa-building mr-2"></i>
                  Büro & Office Design
                </div>
                <h1 class="font-display text-5xl md:text-6xl mb-6">
                  Arbeitsräume die <span class="text-green-600">inspirieren</span>
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                  Steigern Sie Produktivität und Wohlbefinden mit durchdachten Bürokonzepten. 
                  New Work trifft auf erstklassiges Design und Funktionalität.
                </p>
                <div class="flex flex-wrap gap-4 mb-8">
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Ergonomisch</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Akustik-optimiert</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Nachhaltig</span>
                  </div>
                </div>
                <div class="flex gap-4">
                  <a href="/downloads/buero-trends" class="btn-primary">
                    <i class="fas fa-chart-line mr-2"></i>
                    Office-Trends 2024
                  </a>
                  <a href="/kontakt?projekt=buero" class="btn-secondary">
                    <i class="fas fa-user-tie mr-2"></i>
                    Beratung buchen
                  </a>
                </div>
              </div>
              <div class="relative">
                <img src="/api/placeholder/600/500" alt="Modernes Büro" class="rounded-2xl shadow-2xl" />
                <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div class="flex items-center gap-4">
                    <div class="text-center">
                      <div class="text-3xl font-bold text-green-600">50k+</div>
                      <div class="text-sm text-gray-600">m² gestaltet</div>
                    </div>
                    <div class="w-px h-12 bg-gray-300"></div>
                    <div class="text-center">
                      <div class="text-3xl font-bold text-green-600">95%</div>
                      <div class="text-sm text-gray-600">Zufriedenheit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Arbeitswelten */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">New Work Arbeitswelten</h2>
              <p class="text-xl text-gray-600">Flexible Konzepte für moderne Arbeitsformen</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Open Space" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Open Space</h3>
                  </div>
                </div>
                <p class="text-gray-600">Großraumbüros, Teamzonen, Collaboration Areas</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Think Tanks" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Think Tanks</h3>
                  </div>
                </div>
                <p class="text-gray-600">Rückzugsorte, Focus-Rooms, Phone-Booths</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Meeting" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Meeting Spaces</h3>
                  </div>
                </div>
                <p class="text-gray-600">Konferenzräume, Huddle-Rooms, Boardrooms</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Coworking" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Coworking</h3>
                  </div>
                </div>
                <p class="text-gray-600">Shared Desks, Hot Desking, Community Areas</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Lounge" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Social Spaces</h3>
                  </div>
                </div>
                <p class="text-gray-600">Lounges, Kaffeebars, Dachterrassen, Spielbereiche</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Home Office" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Home Office</h3>
                  </div>
                </div>
                <p class="text-gray-600">Arbeitszimmer, Kompaktlösungen, Hybrid-Konzepte</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Ausstattung */}
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Durchdachte Büroausstattung</h2>
              <p class="text-xl text-gray-600">Alles für produktives und gesundes Arbeiten</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-chair text-green-600 mr-3"></i>
                  Arbeitsplätze
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Höhenverstellbare Schreibtische</li>
                  <li>• Ergonomische Bürostühle</li>
                  <li>• Steh-Sitz-Arbeitsplätze</li>
                  <li>• Kabelmanagement</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-volume-down text-green-600 mr-3"></i>
                  Akustik
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Schallschutzwände</li>
                  <li>• Akustikdecken</li>
                  <li>• Telefonboxen</li>
                  <li>• Teppichböden</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-archive text-green-600 mr-3"></i>
                  Stauraum
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Aktenschränke</li>
                  <li>• Sideboards</li>
                  <li>• Rollcontainer</li>
                  <li>• Schließfächer</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-wifi text-green-600 mr-3"></i>
                  Technik
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Medientechnik</li>
                  <li>• Videokonferenz</li>
                  <li>• Digital Signage</li>
                  <li>• Smart Office</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Investment-Pakete */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Büro-Pakete für jedes Budget</h2>
              <p class="text-xl text-gray-600">Vom Start-up bis zum Konzern</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Start-up</h3>
                  <div class="text-4xl font-bold text-gray-800 mb-2">ab 500 €</div>
                  <p class="text-gray-600">pro Arbeitsplatz</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Basis-Schreibtisch</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Bürostuhl Standard</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Rollcontainer</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>2 Wochen Lieferzeit</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=buero-startup" class="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Anfrage stellen
                </a>
              </div>
              
              <div class="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-xl border-2 border-green-500 relative">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  EMPFOHLEN
                </div>
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Professional</h3>
                  <div class="text-4xl font-bold text-green-600 mb-2">ab 1.500 €</div>
                  <p class="text-gray-600">pro Arbeitsplatz</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Höhenverstellbarer Tisch</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Ergonomischer Stuhl</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Stauraum-Lösung</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Akustik-Elemente</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>LED-Arbeitsleuchte</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>4 Wochen Lieferzeit</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=buero-professional" class="block text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Jetzt konfigurieren
                </a>
              </div>
              
              <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Executive</h3>
                  <div class="text-4xl font-bold text-gray-800 mb-2">ab 3.500 €</div>
                  <p class="text-gray-600">pro Arbeitsplatz</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Designer-Schreibtisch</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Premium-Chefsessel</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Sideboard & Schränke</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Besprechungstisch</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Lounge-Bereich</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>6-8 Wochen</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=buero-executive" class="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Premium-Beratung
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section class="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
          <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="font-display text-4xl mb-6">Gestalten Sie Ihre Arbeitswelt neu</h2>
            <p class="text-xl mb-8 opacity-90">
              Schaffen Sie Arbeitsräume, in denen Ihre Teams gerne arbeiten und Bestleistungen erbringen.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt?projekt=buero" class="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                <i class="fas fa-drafting-compass mr-2"></i>
                Büroplanung starten
              </a>
              <a href="/downloads/buero-trends" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center">
                <i class="fas fa-book mr-2"></i>
                Office-Guide 2024
              </a>
            </div>
          </div>
        </section>
      </>,
      { 
        title: 'Büro & Office Design | Brandstifter Urban Manufactur',
        description: 'Moderne Bürokonzepte für New Work. Ergonomische Arbeitsplätze, flexible Raumkonzepte, nachhaltige Büromöbel. Jetzt beraten lassen!'
      }
    )
})

// Outdoor detail page
leistungenRoute.get('/outdoor', (c) => {
  return c.render(
      <>
        {/* Hero Section */}
        <section class="relative bg-gradient-to-br from-amber-50 to-gray-100 py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-semibold mb-6">
                  <i class="fas fa-tree mr-2"></i>
                  Outdoor & Terrassen
                </div>
                <h1 class="font-display text-5xl md:text-6xl mb-6">
                  Leben im <span class="text-amber-600">Freien</span> genießen
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                  Erweitern Sie Ihren Wohnraum nach draußen. Mit wetterfesten Outdoor-Küchen, 
                  stilvollen Loungemöbeln und durchdachten Terrassenkonzepten.
                </p>
                <div class="flex flex-wrap gap-4 mb-8">
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Wetterfest</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>UV-beständig</span>
                  </div>
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span>Pflegeleicht</span>
                  </div>
                </div>
                <div class="flex gap-4">
                  <a href="/downloads/outdoor-katalog" class="btn-primary">
                    <i class="fas fa-sun mr-2"></i>
                    Outdoor-Katalog
                  </a>
                  <a href="/kontakt?projekt=outdoor" class="btn-secondary">
                    <i class="fas fa-home mr-2"></i>
                    Vor-Ort-Beratung
                  </a>
                </div>
              </div>
              <div class="relative">
                <img src="/api/placeholder/600/500" alt="Outdoor Terrasse" class="rounded-2xl shadow-2xl" />
                <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div class="flex items-center gap-4">
                    <div class="text-center">
                      <div class="text-3xl font-bold text-amber-600">400+</div>
                      <div class="text-sm text-gray-600">Terrassen</div>
                    </div>
                    <div class="w-px h-12 bg-gray-300"></div>
                    <div class="text-center">
                      <div class="text-3xl font-bold text-amber-600">15J</div>
                      <div class="text-sm text-gray-600">Garantie</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outdoor-Bereiche */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Outdoor-Living Konzepte</h2>
              <p class="text-xl text-gray-600">Für jeden Außenbereich die passende Lösung</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Outdoor Küche" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Outdoor-Küchen</h3>
                  </div>
                </div>
                <p class="text-gray-600">Grillstationen, Kochinseln, Pizza-Öfen, Kühlsysteme</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Lounge Bereich" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Lounge-Bereiche</h3>
                  </div>
                </div>
                <p class="text-gray-600">Sofagruppen, Daybeds, Hängematten, Sonnensegel</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Dining" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Dining-Bereiche</h3>
                  </div>
                </div>
                <p class="text-gray-600">Esstische, Stühle, Bänke, Sonnenschirme</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Pool & Spa" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Pool & Spa</h3>
                  </div>
                </div>
                <p class="text-gray-600">Poolmöbel, Liegen, Cabanas, Outdoor-Duschen</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Wintergarten" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Wintergärten</h3>
                  </div>
                </div>
                <p class="text-gray-600">Ganzjahres-Möbel, Heizstrahler, Verglasung</p>
              </div>
              
              <div class="group cursor-pointer">
                <div class="relative overflow-hidden rounded-xl mb-4">
                  <img src="/api/placeholder/400/300" alt="Balkon" class="w-full group-hover:scale-110 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 class="text-white text-2xl font-bold">Balkon & Loggia</h3>
                  </div>
                </div>
                <p class="text-gray-600">Kompaktmöbel, Vertikalgärten, Sichtschutz</p>
              </div>
            </div>
          </div>
        </section>

        {/* Materialien & Features */}
        <section class="py-20 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Premium-Materialien für draußen</h2>
              <p class="text-xl text-gray-600">Langlebig, nachhaltig und stilvoll</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-tree text-amber-600 mr-3"></i>
                  Holzarten
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Teak (FSC-zertifiziert)</li>
                  <li>• Eukalyptus</li>
                  <li>• Akazie</li>
                  <li>• Thermoholz</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-industry text-amber-600 mr-3"></i>
                  Metalle
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Edelstahl 316</li>
                  <li>• Pulverbeschichtetes Aluminium</li>
                  <li>• Corten-Stahl</li>
                  <li>• Verzinkter Stahl</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-couch text-amber-600 mr-3"></i>
                  Polster
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Sunbrella-Stoffe</li>
                  <li>• Quick-Dry Schaum</li>
                  <li>• Anti-Schimmel</li>
                  <li>• Fleckenabweisend</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-bold text-lg mb-4 flex items-center">
                  <i class="fas fa-cube text-amber-600 mr-3"></i>
                  Extras
                </h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• HPL-Platten</li>
                  <li>• Keramik-Tischplatten</li>
                  <li>• Batyline-Bespannung</li>
                  <li>• LED-Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Preispakete */}
        <section class="py-20">
          <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="font-display text-4xl mb-4">Outdoor-Pakete für jeden Anspruch</h2>
              <p class="text-xl text-gray-600">Vom Balkon bis zur Villa-Terrasse</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Balkon-Set</h3>
                  <div class="text-4xl font-bold text-gray-800 mb-2">ab 2.500 €</div>
                  <p class="text-gray-600">10-20 m²</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Klapp-Tisch & 2 Stühle</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Auflagenbox</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Pflanzgefäße</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Sonnenschutz</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>3 Wochen Lieferzeit</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=outdoor-balkon" class="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Anfrage stellen
                </a>
              </div>
              
              <div class="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-xl border-2 border-amber-500 relative">
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  BESTSELLER
                </div>
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Terrassen-Lounge</h3>
                  <div class="text-4xl font-bold text-amber-600 mb-2">ab 8.500 €</div>
                  <p class="text-gray-600">30-60 m²</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Lounge-Gruppe 6 Personen</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Esstisch & 6 Stühle</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Sonnenschirm 3m</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Outdoor-Teppich</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>LED-Beleuchtung</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>4-6 Wochen</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=outdoor-terrasse" class="block text-center bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors">
                  Jetzt gestalten
                </a>
              </div>
              
              <div class="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative">
                <div class="text-center mb-6">
                  <h3 class="text-2xl font-bold mb-2">Outdoor-Kitchen</h3>
                  <div class="text-4xl font-bold text-gray-800 mb-2">ab 25.000 €</div>
                  <p class="text-gray-600">Komplettausstattung</p>
                </div>
                <ul class="space-y-3 mb-8">
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Kochinsel mit Grill</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Kühlschrank & Spüle</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Arbeitsflächen Granit</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Bar mit 4 Hockern</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>Überdachung</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check text-green-500 mr-3 mt-1"></i>
                    <span>8-10 Wochen</span>
                  </li>
                </ul>
                <a href="/kontakt?paket=outdoor-kitchen" class="block text-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                  Premium-Planung
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section class="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
          <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="font-display text-4xl mb-6">Erweitern Sie Ihren Lebensraum</h2>
            <p class="text-xl mb-8 opacity-90">
              Schaffen Sie eine nahtlose Verbindung zwischen Innen und Außen.
              Lassen Sie uns Ihre Outdoor-Oase gemeinsam planen.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt?projekt=outdoor" class="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                <i class="fas fa-sun mr-2"></i>
                Terrassenplanung starten
              </a>
              <a href="/downloads/outdoor-katalog" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center">
                <i class="fas fa-download mr-2"></i>
                Outdoor-Katalog 2024
              </a>
            </div>
          </div>
        </section>
      </>,
      { 
        title: 'Outdoor & Terrassen | Brandstifter Urban Manufactur',
        description: 'Premium Outdoor-Möbel und Terrassengestaltung. Outdoor-Küchen, Loungemöbel, wetterfeste Materialien. Erweitern Sie Ihren Wohnraum!'
      }
    )
})

export default leistungenRoute