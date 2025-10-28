import { Hono } from 'hono'
import { Layout } from '../components/Layout'

const ueberUnsRoute = new Hono()

ueberUnsRoute.get('/', (c) => {
  return c.render(
    <>
      {/* Hero Section */}
      <section class="relative h-[70vh] flex items-center justify-center">
        <div class="absolute inset-0">
          <img src="/api/placeholder/1920/800" alt="Brandstifter Manufaktur" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 class="font-display text-5xl md:text-7xl mb-6 animate-fade-in">
            Wo Tradition auf Innovation trifft
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Seit 2008 gestalten wir Räume, die begeistern
          </p>
          <div class="flex gap-8 justify-center">
            <div class="text-center">
              <div class="text-4xl font-bold text-gray-700">15+</div>
              <div class="text-sm uppercase tracking-wider">Jahre Erfahrung</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-gray-700">2.500+</div>
              <div class="text-sm uppercase tracking-wider">Projekte</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-gray-700">45</div>
              <div class="text-sm uppercase tracking-wider">Mitarbeiter</div>
            </div>
          </div>
        </div>
      </section>

      {/* Geschichte Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="font-display text-4xl mb-6">Unsere Geschichte</h2>
              <div class="space-y-6 text-gray-600">
                <p class="text-lg">
                  <span class="font-bold text-brand-anthrazit">2008</span> gründete Michael Brandstifter 
                  in einer kleinen Werkstatt in Ober-Mörlen das Unternehmen mit der Vision, 
                  traditionelles Handwerk mit modernem Design zu verbinden.
                </p>
                <p>
                  Was als Ein-Mann-Betrieb begann, entwickelte sich schnell zu einer der 
                  gefragtesten Manufakturen für individuelle Raumkonzepte in der Rhein-Main-Region. 
                  Die Kombination aus handwerklicher Perfektion, innovativem Design und 
                  persönlicher Beratung überzeugte von Anfang an.
                </p>
                <p>
                  <span class="font-bold text-brand-anthrazit">2015</span> erfolgte der Umzug in unsere 
                  moderne 3.500m² Produktionsstätte mit integriertem Showroom. Hier vereinen wir 
                  traditionelle Handwerkskunst mit modernster CNC-Technologie.
                </p>
                <p>
                  <span class="font-bold text-brand-anthrazit">Heute</span> sind wir mit 45 Mitarbeitern, 
                  darunter Schreiner, Designer, Architekten und Projektmanager, Ihr Partner für 
                  anspruchsvolle Projekte – vom privaten Wohnraum bis zum Großprojekt.
                </p>
              </div>
              <div class="mt-8">
                <a href="/projekte" class="btn-primary">
                  <i class="fas fa-images mr-2"></i>
                  Unsere Referenzen ansehen
                </a>
              </div>
            </div>
            <div class="relative">
              <img src="/api/placeholder/600/400" alt="Michael Brandstifter in der Werkstatt" class="rounded-lg shadow-xl" />
              <div class="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-lg">
                <blockquote class="italic">
                  "Jeder Raum erzählt eine Geschichte. Wir helfen Ihnen, Ihre zu schreiben."
                </blockquote>
                <cite class="block mt-2 font-semibold not-italic">
                  – Michael Brandstifter, Gründer
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="font-display text-4xl text-center mb-16">Meilensteine unserer Entwicklung</h2>
          
          <div class="relative">
            {/* Timeline Line */}
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-black hidden md:block"></div>
            
            <div class="space-y-12">
              {/* 2008 */}
              <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 md:pr-12 md:text-right">
                  <h3 class="text-2xl font-bold text-brand-anthrazit mb-2">2008</h3>
                  <h4 class="text-xl font-semibold mb-2">Gründung</h4>
                  <p class="text-gray-600">
                    Start in kleiner Werkstatt in Ober-Mörlen. Erste Projekte für private Bauherren.
                  </p>
                </div>
                <div class="hidden md:block w-4 h-4 bg-black rounded-full relative z-10"></div>
                <div class="md:w-1/2 md:pl-12">
                  <img src="/api/placeholder/400/250" alt="2008 Gründung" class="rounded-lg shadow-lg" />
                </div>
              </div>

              {/* 2010 */}
              <div class="flex flex-col md:flex-row-reverse items-center">
                <div class="md:w-1/2 md:pl-12">
                  <h3 class="text-2xl font-bold text-brand-anthrazit mb-2">2010</h3>
                  <h4 class="text-xl font-semibold mb-2">Erste Großprojekte</h4>
                  <p class="text-gray-600">
                    Ausstattung der ersten Restaurants und Hotels. Team wächst auf 8 Mitarbeiter.
                  </p>
                </div>
                <div class="hidden md:block w-4 h-4 bg-black rounded-full relative z-10"></div>
                <div class="md:w-1/2 md:pr-12">
                  <img src="/api/placeholder/400/250" alt="2010 Wachstum" class="rounded-lg shadow-lg" />
                </div>
              </div>

              {/* 2015 */}
              <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 md:pr-12 md:text-right">
                  <h3 class="text-2xl font-bold text-brand-anthrazit mb-2">2015</h3>
                  <h4 class="text-xl font-semibold mb-2">Neue Manufaktur</h4>
                  <p class="text-gray-600">
                    Umzug in 3.500m² Produktionsstätte mit Showroom. Investition in modernste CNC-Technik.
                  </p>
                </div>
                <div class="hidden md:block w-4 h-4 bg-black rounded-full relative z-10"></div>
                <div class="md:w-1/2 md:pl-12">
                  <img src="/api/placeholder/400/250" alt="2015 Neue Manufaktur" class="rounded-lg shadow-lg" />
                </div>
              </div>

              {/* 2018 */}
              <div class="flex flex-col md:flex-row-reverse items-center">
                <div class="md:w-1/2 md:pl-12">
                  <h3 class="text-2xl font-bold text-brand-anthrazit mb-2">2018</h3>
                  <h4 class="text-xl font-semibold mb-2">Expansion</h4>
                  <p class="text-gray-600">
                    Projekte in ganz Deutschland. Partnerschaften mit renommierten Architekten und Designern.
                  </p>
                </div>
                <div class="hidden md:block w-4 h-4 bg-black rounded-full relative z-10"></div>
                <div class="md:w-1/2 md:pr-12">
                  <img src="/api/placeholder/400/250" alt="2018 Expansion" class="rounded-lg shadow-lg" />
                </div>
              </div>

              {/* 2023 */}
              <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 md:pr-12 md:text-right">
                  <h3 class="text-2xl font-bold text-brand-anthrazit mb-2">2023</h3>
                  <h4 class="text-xl font-semibold mb-2">Nachhaltigkeit</h4>
                  <p class="text-gray-600">
                    Zertifizierung als klimaneutraler Betrieb. Fokus auf nachhaltige Materialien und Kreislaufwirtschaft.
                  </p>
                </div>
                <div class="hidden md:block w-4 h-4 bg-black rounded-full relative z-10"></div>
                <div class="md:w-1/2 md:pl-12">
                  <img src="/api/placeholder/400/250" alt="2023 Nachhaltigkeit" class="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-4xl mb-4">Unser Team</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              45 Experten aus Handwerk, Design und Projektmanagement arbeiten Hand in Hand für Ihren Erfolg
            </p>
          </div>

          {/* Führungsteam */}
          <h3 class="text-2xl font-bold mb-8 text-center">Führungsteam</h3>
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <div class="text-center">
              <div class="relative mb-6 inline-block">
                <img src="/api/placeholder/300/300" alt="Michael Brandstifter" class="rounded-full w-48 h-48 mx-auto object-cover" />
                <div class="absolute -bottom-2 -right-2 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <i class="fab fa-linkedin"></i>
                </div>
              </div>
              <h4 class="text-xl font-bold mb-1">Michael Brandstifter</h4>
              <p class="text-gray-700 font-semibold mb-3">Gründer & Geschäftsführer</p>
              <p class="text-gray-600 text-sm">
                Schreinermeister mit Leidenschaft für außergewöhnliche Projekte. 
                25 Jahre Erfahrung in Premium-Innenausbau.
              </p>
            </div>

            <div class="text-center">
              <div class="relative mb-6 inline-block">
                <img src="/api/placeholder/300/300" alt="Sarah Weber" class="rounded-full w-48 h-48 mx-auto object-cover" />
                <div class="absolute -bottom-2 -right-2 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <i class="fab fa-linkedin"></i>
                </div>
              </div>
              <h4 class="text-xl font-bold mb-1">Sarah Weber</h4>
              <p class="text-gray-700 font-semibold mb-3">Creative Director</p>
              <p class="text-gray-600 text-sm">
                Diplom-Designerin mit Fokus auf nachhaltige Raumkonzepte. 
                Gewinnerin mehrerer Design-Awards.
              </p>
            </div>

            <div class="text-center">
              <div class="relative mb-6 inline-block">
                <img src="/api/placeholder/300/300" alt="Thomas Klein" class="rounded-full w-48 h-48 mx-auto object-cover" />
                <div class="absolute -bottom-2 -right-2 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <i class="fab fa-linkedin"></i>
                </div>
              </div>
              <h4 class="text-xl font-bold mb-1">Thomas Klein</h4>
              <p class="text-gray-700 font-semibold mb-3">Technischer Leiter</p>
              <p class="text-gray-600 text-sm">
                Ingenieur für Holztechnik. Verantwortlich für Produktion und 
                Implementierung modernster Fertigungstechnologien.
              </p>
            </div>
          </div>

          {/* Abteilungen */}
          <h3 class="text-2xl font-bold mb-8 text-center">Unsere Abteilungen</h3>
          <div class="grid md:grid-cols-4 gap-6">
            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <i class="fas fa-pencil-ruler text-4xl text-gray-700 mb-4"></i>
              <h4 class="font-bold mb-2">Design & Planung</h4>
              <p class="text-3xl font-bold text-brand-anthrazit mb-2">8</p>
              <p class="text-sm text-gray-600">Designer & Architekten</p>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <i class="fas fa-hammer text-4xl text-gray-700 mb-4"></i>
              <h4 class="font-bold mb-2">Produktion</h4>
              <p class="text-3xl font-bold text-brand-anthrazit mb-2">22</p>
              <p class="text-sm text-gray-600">Schreiner & Techniker</p>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <i class="fas fa-truck text-4xl text-gray-700 mb-4"></i>
              <h4 class="font-bold mb-2">Montage</h4>
              <p class="text-3xl font-bold text-brand-anthrazit mb-2">10</p>
              <p class="text-sm text-gray-600">Monteure & Logistik</p>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <i class="fas fa-headset text-4xl text-gray-700 mb-4"></i>
              <h4 class="font-bold mb-2">Service</h4>
              <p class="text-3xl font-bold text-brand-anthrazit mb-2">5</p>
              <p class="text-sm text-gray-600">Projektmanager & Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Werte & Philosophie */}
      <section class="py-20 bg-gradient-to-br from-brand-anthrazit to-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-4xl mb-4">Unsere Werte</h2>
            <p class="text-xl opacity-90 max-w-3xl mx-auto">
              Diese Prinzipien leiten uns bei jedem Projekt und prägen unsere Unternehmenskultur
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-gem text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Qualität</h3>
              <p class="opacity-80">
                Kompromisslose Qualität in Material und Verarbeitung. 
                Jedes Stück ein Unikat, gefertigt für Generationen.
              </p>
            </div>

            <div class="text-center">
              <div class="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-lightbulb text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Innovation</h3>
              <p class="opacity-80">
                Moderne Technologien treffen auf traditionelle Handwerkskunst. 
                Wir denken Räume neu und setzen Trends.
              </p>
            </div>

            <div class="text-center">
              <div class="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-leaf text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Nachhaltigkeit</h3>
              <p class="opacity-80">
                Verantwortungsvoller Umgang mit Ressourcen. 
                Klimaneutrale Produktion und regionale Partner.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-handshake text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Vertrauen</h3>
              <p class="opacity-80">
                Transparente Kommunikation und verlässliche Partnerschaften. 
                Ihr Projekt in sicheren Händen.
              </p>
            </div>

            <div class="text-center">
              <div class="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-users text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Teamwork</h3>
              <p class="opacity-80">
                Interdisziplinäre Zusammenarbeit für beste Ergebnisse. 
                Gemeinsam schaffen wir Außergewöhnliches.
              </p>
            </div>

            <div class="text-center">
              <div class="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-heart text-4xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Leidenschaft</h3>
              <p class="opacity-80">
                Begeisterung für jedes Detail. 
                Wir leben und lieben, was wir tun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zertifikate & Auszeichnungen */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-4xl mb-4">Auszeichnungen & Zertifikate</h2>
            <p class="text-xl text-gray-600">Anerkannte Qualität und Nachhaltigkeit</p>
          </div>

          <div class="grid md:grid-cols-4 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-award text-5xl text-gray-700 mb-4"></i>
              <h4 class="font-bold mb-2">German Design Award</h4>
              <p class="text-sm text-gray-600">2022 Winner</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-certificate text-5xl text-green-600 mb-4"></i>
              <h4 class="font-bold mb-2">ISO 9001:2015</h4>
              <p class="text-sm text-gray-600">Qualitätsmanagement</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-leaf text-5xl text-green-600 mb-4"></i>
              <h4 class="font-bold mb-2">Klimaneutral</h4>
              <p class="text-sm text-gray-600">Seit 2023</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <i class="fas fa-shield-alt text-5xl text-blue-600 mb-4"></i>
              <h4 class="font-bold mb-2">Meisterbetrieb</h4>
              <p class="text-sm text-gray-600">Handwerkskammer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produktion & Showroom */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-4xl mb-4">Produktion & Showroom</h2>
            <p class="text-xl text-gray-600">3.500m² für Ihre Träume</p>
          </div>

          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <img src="/api/placeholder/600/400" alt="Produktionshalle" class="rounded-lg shadow-xl mb-6" />
              <h3 class="text-2xl font-bold mb-4">Moderne Manufaktur</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>2.500m² Produktionsfläche mit modernster CNC-Technik</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>Eigene Lackiererei mit umweltfreundlichen Wasserlacken</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>Materiallager mit über 200 verschiedenen Hölzern und Oberflächen</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>Qualitätskontrolle in jedem Produktionsschritt</span>
                </li>
              </ul>
            </div>

            <div>
              <img src="/api/placeholder/600/400" alt="Showroom" class="rounded-lg shadow-xl mb-6" />
              <h3 class="text-2xl font-bold mb-4">Inspirierender Showroom</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>1.000m² Ausstellungsfläche auf zwei Etagen</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>Komplette Küchen, Bäder und Wohnkonzepte live erleben</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>Material- und Farbmusterwand mit über 500 Samples</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                  <span>Beratungslounge mit 3D-Planungsstation</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-12 bg-brand-anthrazit text-white p-8 rounded-lg">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl font-bold mb-4">Besuchen Sie uns</h3>
                <p class="mb-4">
                  Erleben Sie unsere Handwerkskunst hautnah in unserem Showroom 
                  und lassen Sie sich von unseren Experten beraten.
                </p>
                <div class="space-y-2">
                  <p><i class="fas fa-map-marker-alt mr-2"></i> Am Goldberg 2, 61239 Ober-Mörlen</p>
                  <p><i class="fas fa-clock mr-2"></i> Mo-Fr: 9-18 Uhr, Sa: 10-16 Uhr</p>
                  <p><i class="fas fa-phone mr-2"></i> 06002 / 920 490</p>
                </div>
              </div>
              <div class="text-center">
                <a href="/kontakt" class="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors inline-block">
                  <i class="fas fa-calendar-alt mr-2"></i>
                  Termin vereinbaren
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner & Netzwerk */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-4xl mb-4">Partner & Netzwerk</h2>
            <p class="text-xl text-gray-600">Starke Partnerschaften für beste Ergebnisse</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div class="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24">
              <img src="/api/placeholder/120/60" alt="Partner Logo" class="max-h-12" />
            </div>
            <div class="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24">
              <img src="/api/placeholder/120/60" alt="Partner Logo" class="max-h-12" />
            </div>
            <div class="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24">
              <img src="/api/placeholder/120/60" alt="Partner Logo" class="max-h-12" />
            </div>
            <div class="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24">
              <img src="/api/placeholder/120/60" alt="Partner Logo" class="max-h-12" />
            </div>
            <div class="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24">
              <img src="/api/placeholder/120/60" alt="Partner Logo" class="max-h-12" />
            </div>
            <div class="bg-white p-4 rounded-lg shadow flex items-center justify-center h-24">
              <img src="/api/placeholder/120/60" alt="Partner Logo" class="max-h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-gradient-to-r from-gray-800 to-black text-white">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="font-display text-4xl mb-6">
            Werden Sie Teil unserer Erfolgsgeschichte
          </h2>
          <p class="text-xl mb-8 opacity-90">
            Ob als Kunde, Partner oder Mitarbeiter – lassen Sie uns gemeinsam Großartiges schaffen.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" class="bg-white text-brand-anthrazit px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              <i class="fas fa-comments mr-2"></i>
              Projekt besprechen
            </a>
            <a href="/karriere" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block">
              <i class="fas fa-users mr-2"></i>
              Karriere bei uns
            </a>
          </div>
        </div>
      </section>
    </>,
    { 
      title: 'Über Uns | Brandstifter Urban Manufactur',
      description: 'Erfahren Sie mehr über Brandstifter Urban Manufactur. Seit 2008 Ihr Partner für individuelle Raumkonzepte. 45 Experten, 2.500+ Projekte, nachhaltige Produktion.'
    }
  )
})

export default ueberUnsRoute