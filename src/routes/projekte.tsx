import { Hono } from 'hono'

export const projekteRoute = new Hono()

// Dummy project data (would come from database in production)
const projects = [
  {
    id: 1,
    title: 'Penthouse Küche Frankfurt',
    category: 'kueche',
    client: 'Privat',
    year: 2024,
    description: 'Luxuriöse Küche mit Skyline-Blick',
    features: ['Naturstein-Arbeitsplatte', 'Integrierte Beleuchtung', 'Maßgefertigte Schränke'],
    budget: '100.000+',
    duration: '8 Wochen'
  },
  {
    id: 2,
    title: 'Restaurant "Zum Goldenen Hirsch"',
    category: 'gastronomie',
    client: 'B2B',
    year: 2024,
    description: 'Komplette Gastronomie-Einrichtung für 120 Plätze',
    features: ['Offene Küche', 'Bar-Bereich', 'Terrassen-Möblierung'],
    budget: '250.000+',
    duration: '12 Wochen'
  },
  {
    id: 3,
    title: 'Wellness-Bad Taunus Villa',
    category: 'bad',
    client: 'Privat',
    year: 2023,
    description: 'Spa-inspiriertes Master-Badezimmer',
    features: ['Freistehende Badewanne', 'Regendusche', 'Doppelwaschtisch'],
    budget: '50.000-100.000',
    duration: '6 Wochen'
  },
  {
    id: 4,
    title: 'Tech-Startup Office Frankfurt',
    category: 'buero',
    client: 'B2B',
    year: 2024,
    description: 'Modernes Büro für 50 Mitarbeiter',
    features: ['Flexible Workspaces', 'Meeting-Pods', 'Küchen-Lounge'],
    budget: '150.000+',
    duration: '10 Wochen'
  },
  {
    id: 5,
    title: 'Fashion Boutique Wiesbaden',
    category: 'ladenbau',
    client: 'B2B',
    year: 2023,
    description: 'Premium Fashion Store auf 200m²',
    features: ['Flexible Display-Systeme', 'VIP-Bereich', 'Maßgefertigte Umkleiden'],
    budget: '100.000-150.000',
    duration: '8 Wochen'
  },
  {
    id: 6,
    title: 'Outdoor-Küche Kronberg',
    category: 'outdoor',
    client: 'Privat',
    year: 2024,
    description: 'Luxuriöse Terrassen-Küche mit Pool-Bar',
    features: ['Wetterfeste Materialien', 'BBQ-Station', 'Kühlsysteme'],
    budget: '50.000-100.000',
    duration: '6 Wochen'
  },
  {
    id: 7,
    title: 'Landhausküche Bad Homburg',
    category: 'kueche',
    client: 'Privat',
    year: 2023,
    description: 'Moderne Interpretation des Landhaus-Stils',
    features: ['Kochinsel', 'Weinkühlschrank', 'Pantry'],
    budget: '50.000-100.000',
    duration: '7 Wochen'
  },
  {
    id: 8,
    title: 'Café & Bäckerei Friedberg',
    category: 'gastronomie',
    client: 'B2B',
    year: 2024,
    description: 'Gemütliches Café mit Bäckerei-Verkauf',
    features: ['Theke mit Vitrine', 'Sitzbereich', 'To-Go Station'],
    budget: '75.000',
    duration: '5 Wochen'
  }
]

projekteRoute.get('/', (c) => {
  return c.render(
    <>
      {/* Hero Section */}
      <section class="bg-gradient-to-br from-brand-anthrazit to-gray-800 py-20 text-white">
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-display mb-4">Unsere Projekte</h1>
          <p class="text-xl text-gray-300 max-w-2xl">
            Entdecken Sie unsere realisierten Projekte und lassen Sie sich 
            von der Vielfalt und Qualität unserer Arbeit inspirieren.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section class="py-8 bg-gray-50 sticky top-20 z-40">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap gap-4 items-center">
            <span class="font-semibold text-gray-700">Filter:</span>
            
            {/* Category Filter */}
            <div class="flex flex-wrap gap-2">
              <button class="filter-btn active" data-filter="all">
                Alle Projekte
              </button>
              <button class="filter-btn" data-filter="kueche">
                <i class="fas fa-utensils mr-1"></i> Küchen
              </button>
              <button class="filter-btn" data-filter="bad">
                <i class="fas fa-bath mr-1"></i> Badmöbel
              </button>
              <button class="filter-btn" data-filter="ladenbau">
                <i class="fas fa-store mr-1"></i> Ladenbau
              </button>
              <button class="filter-btn" data-filter="gastronomie">
                <i class="fas fa-coffee mr-1"></i> Gastronomie
              </button>
              <button class="filter-btn" data-filter="buero">
                <i class="fas fa-briefcase mr-1"></i> Büros
              </button>
              <button class="filter-btn" data-filter="outdoor">
                <i class="fas fa-tree mr-1"></i> Outdoor
              </button>
            </div>

            {/* Year Filter */}
            <select class="form-input w-32" id="year-filter">
              <option value="all">Alle Jahre</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>

            {/* Client Type Filter */}
            <select class="form-input w-32" id="client-filter">
              <option value="all">Alle Kunden</option>
              <option value="privat">Privat</option>
              <option value="b2b">B2B</option>
            </select>

            {/* Results Count */}
            <span class="ml-auto text-gray-600">
              <span id="results-count">8</span> Projekte
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
            {projects.map((project) => (
              <div class="project-card" data-category={project.category} data-year={project.year} data-client={project.client.toLowerCase()}>
                <a href={`/projekte/${project.id}`} class="group block">
                  {/* Image Placeholder */}
                  <div class="relative overflow-hidden rounded-lg mb-4">
                    <div class="aspect-w-16 aspect-h-12 bg-gray-300">
                      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div class="absolute top-4 left-4">
                      <span class="bg-brand-brass text-white px-3 py-1 rounded-full text-sm">
                        {project.year}
                      </span>
                    </div>
                    <div class="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p class="text-sm">Zum Projekt →</p>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <div class="flex items-start justify-between mb-2">
                      <h3 class="text-xl font-bold text-brand-anthrazit group-hover:text-brand-brass transition">
                        {project.title}
                      </h3>
                      <span class="text-xs text-gray-500 uppercase tracking-wider">
                        {project.client}
                      </span>
                    </div>
                    
                    <p class="text-gray-600 mb-4">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div class="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature) => (
                        <span class="text-xs bg-brand-greige text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Project Meta */}
                    <div class="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                      <span>
                        <i class="fas fa-euro-sign mr-1"></i>
                        {project.budget}
                      </span>
                      <span>
                        <i class="fas fa-clock mr-1"></i>
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div class="text-center mt-12">
            <button class="btn-primary">
              <i class="fas fa-plus mr-2"></i>
              Weitere Projekte laden
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section class="py-16 bg-brand-greige">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-display text-brand-anthrazit text-center mb-12">
            Unsere Projekt-Bilanz
          </h2>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold text-brand-brass mb-2">500+</div>
              <div class="text-gray-600">Projekte realisiert</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-brand-brass mb-2">25</div>
              <div class="text-gray-600">Jahre Erfahrung</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-brand-brass mb-2">98%</div>
              <div class="text-gray-600">Kundenzufriedenheit</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-brand-brass mb-2">100%</div>
              <div class="text-gray-600">Termintreue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-display text-brand-anthrazit text-center mb-12">
            Unser Projekt-Prozess
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-brand-brass rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 class="font-semibold text-brand-anthrazit mb-2">Erstberatung</h3>
              <p class="text-sm text-gray-600">Wir verstehen Ihre Vision</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-brand-brass rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 class="font-semibold text-brand-anthrazit mb-2">Konzeption</h3>
              <p class="text-sm text-gray-600">Entwicklung der Ideen</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-brand-brass rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 class="font-semibold text-brand-anthrazit mb-2">Planung</h3>
              <p class="text-sm text-gray-600">Detaillierte Ausarbeitung</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-brand-brass rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 class="font-semibold text-brand-anthrazit mb-2">Produktion</h3>
              <p class="text-sm text-gray-600">Fertigung in der Manufaktur</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-brand-brass rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 class="font-semibold text-brand-anthrazit mb-2">Montage</h3>
              <p class="text-sm text-gray-600">Professionelle Installation</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-brand-brass rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                6
              </div>
              <h3 class="font-semibold text-brand-anthrazit mb-2">Nachbetreuung</h3>
              <p class="text-sm text-gray-600">Service & Wartung</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-gradient-to-r from-brand-anthrazit to-gray-800 text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-display mb-6">
            Ihr Projekt wartet auf Sie
          </h2>
          <p class="text-xl mb-10 max-w-2xl mx-auto text-gray-300">
            Lassen Sie uns gemeinsam Ihre Vision verwirklichen. 
            Von der ersten Idee bis zur perfekten Umsetzung.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt#projekt" class="btn-primary-large bg-white text-brand-anthrazit hover:bg-gray-100">
              <i class="fas fa-rocket mr-2"></i>
              Projekt starten
            </a>
            <a href="/downloads" class="btn-secondary-large">
              <i class="fas fa-download mr-2"></i>
              Planungshilfen
            </a>
          </div>
        </div>
      </section>

      {/* Add custom styles for filter buttons */}
      <style dangerouslySetInnerHTML={{__html: `
        .filter-btn {
          @apply px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-brand-brass hover:text-white hover:border-brand-brass transition-all;
        }
        .filter-btn.active {
          @apply bg-brand-brass text-white border-brand-brass;
        }
        .project-card {
          @apply transition-all duration-300;
        }
        .project-card.hidden {
          @apply hidden;
        }
      `}} />

      {/* Filter Script */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          const filterButtons = document.querySelectorAll('.filter-btn');
          const yearFilter = document.getElementById('year-filter');
          const clientFilter = document.getElementById('client-filter');
          const projectCards = document.querySelectorAll('.project-card');
          const resultsCount = document.getElementById('results-count');

          function applyFilters() {
            const activeCategory = document.querySelector('.filter-btn.active').dataset.filter;
            const selectedYear = yearFilter.value;
            const selectedClient = clientFilter.value;

            let visibleCount = 0;

            projectCards.forEach(card => {
              const category = card.dataset.category;
              const year = card.dataset.year;
              const client = card.dataset.client;

              let show = true;

              if (activeCategory !== 'all' && category !== activeCategory) {
                show = false;
              }
              if (selectedYear !== 'all' && year !== selectedYear) {
                show = false;
              }
              if (selectedClient !== 'all' && client !== selectedClient) {
                show = false;
              }

              if (show) {
                card.classList.remove('hidden');
                visibleCount++;
              } else {
                card.classList.add('hidden');
              }
            });

            resultsCount.textContent = visibleCount;
          }

          filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
              filterButtons.forEach(b => b.classList.remove('active'));
              this.classList.add('active');
              applyFilters();
            });
          });

          yearFilter.addEventListener('change', applyFilters);
          clientFilter.addEventListener('change', applyFilters);
        });
      `}} />
    </>,
    { 
      title: 'Projekte | Brandstifter Urban Manufactur',
      description: 'Entdecken Sie unsere realisierten Projekte. Küchen, Badmöbel, Ladenbau, Gastronomie-Einrichtung und mehr. 500+ erfolgreich umgesetzte Projekte.'
    }
  )
})