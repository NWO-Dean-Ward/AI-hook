import { Hono } from 'hono'
import { Layout } from '../components/Layout'
import { createTranslator } from '../lib/i18n'

export const projekteRoute = new Hono()

projekteRoute.get('/', (c) => {
  const { lang, t } = createTranslator(c)
  
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: lang === 'en' ? 'Modern Kitchen Villa Weber' : 'Moderne Küche Villa Weber',
      category: 'kuechen',
      year: 2023,
      client: 'privat',
      image: '/api/placeholder/600/400',
      description: lang === 'en' 
        ? 'Complete kitchen renovation with high-end appliances'
        : 'Komplette Küchensanierung mit High-End-Geräten'
    },
    {
      id: 2,
      title: lang === 'en' ? 'Restaurant Golden Deer' : 'Restaurant Goldener Hirsch',
      category: 'gastronomie',
      year: 2023,
      client: 'b2b',
      image: '/api/placeholder/600/400',
      description: lang === 'en'
        ? 'Complete gastronomy furnishing for 120 seats'
        : 'Komplettausstattung Gastronomie für 120 Plätze'
    },
    {
      id: 3,
      title: lang === 'en' ? 'Boutique Fashion & More' : 'Boutique Fashion & More',
      category: 'ladenbau',
      year: 2023,
      client: 'b2b',
      image: '/api/placeholder/600/400',
      description: lang === 'en'
        ? 'Shop fitting on 200m² with lighting concept'
        : 'Ladenbau auf 200m² mit Lichtkonzept'
    },
    {
      id: 4,
      title: lang === 'en' ? 'Wellness Bathroom Private Spa' : 'Wellness-Bad Private Spa',
      category: 'badmoebel',
      year: 2022,
      client: 'privat',
      image: '/api/placeholder/600/400',
      description: lang === 'en'
        ? 'Luxury bathroom with sauna integration'
        : 'Luxusbad mit Sauna-Integration'
    },
    {
      id: 5,
      title: lang === 'en' ? 'Start-up Office TechHub' : 'Start-up Büro TechHub',
      category: 'buero',
      year: 2022,
      client: 'b2b',
      image: '/api/placeholder/600/400',
      description: lang === 'en'
        ? 'Modern office concept for 50 workstations'
        : 'Modernes Office-Konzept für 50 Arbeitsplätze'
    },
    {
      id: 6,
      title: lang === 'en' ? 'Rooftop Terrace Penthouse' : 'Dachterrasse Penthouse',
      category: 'outdoor',
      year: 2022,
      client: 'privat',
      image: '/api/placeholder/600/400',
      description: lang === 'en'
        ? 'Outdoor kitchen with lounge area'
        : 'Outdoor-Küche mit Lounge-Bereich'
    },
    {
      id: 7,
      title: lang === 'en' ? 'Hotel Frankfurt City' : 'Hotel Frankfurt City',
      category: 'gastronomie',
      year: 2021,
      client: 'b2b',
      image: '/api/placeholder/600/400',
      description: lang === 'en'
        ? 'Lobby bar and breakfast area'
        : 'Lobby-Bar und Frühstücksbereich'
    },
    {
      id: 8,
      title: lang === 'en' ? 'Country House Kitchen' : 'Landhausküche Familie Schmidt',
      category: 'kuechen',
      year: 2021,
      client: 'privat',
      image: '/api/placeholder/600/400',
      description: lang === 'en'
        ? 'Traditional kitchen with modern technology'
        : 'Traditionelle Küche mit moderner Technik'
    }
  ]

  return c.render(
    <>
      {/* Hero Section */}
      <section class="relative h-64 bg-gradient-to-br from-brand-anthrazit to-gray-800 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative z-10 text-center text-white">
          <h1 class="font-display text-4xl md:text-6xl mb-4">{t('projects.title')}</h1>
          <p class="text-xl opacity-90">{t('projects.subtitle')}</p>
        </div>
      </section>

      {/* Filter Section */}
      <section class="py-8 bg-white border-b">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-wrap gap-4 items-center justify-center">
            <div class="flex items-center gap-2">
              <label class="text-sm font-medium text-gray-700">{t('projects.filter.category')}:</label>
              <select id="categoryFilter" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-brass focus:border-transparent">
                <option value="all">{t('projects.filter.all')}</option>
                <option value="kuechen">{t('service.kitchen')}</option>
                <option value="badmoebel">{t('service.bathroom')}</option>
                <option value="ladenbau">{t('service.retail')}</option>
                <option value="gastronomie">{t('service.gastronomy')}</option>
                <option value="buero">{t('service.office')}</option>
                <option value="outdoor">{t('service.outdoor')}</option>
              </select>
            </div>

            <div class="flex items-center gap-2">
              <label class="text-sm font-medium text-gray-700">{t('projects.filter.year')}:</label>
              <select id="yearFilter" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-brass focus:border-transparent">
                <option value="all">{t('projects.filter.all')}</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>

            <div class="flex items-center gap-2">
              <label class="text-sm font-medium text-gray-700">{t('projects.filter.client')}:</label>
              <select id="clientFilter" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-brass focus:border-transparent">
                <option value="all">{t('projects.filter.all')}</option>
                <option value="privat">{lang === 'en' ? 'Private' : 'Privat'}</option>
                <option value="b2b">Business</option>
                <option value="architekten">{lang === 'en' ? 'Architects' : 'Architekten'}</option>
              </select>
            </div>

            <button id="resetFilters" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
              <i class="fas fa-undo mr-2"></i>
              {lang === 'en' ? 'Reset' : 'Zurücksetzen'}
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div id="projectsGrid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div 
                class="project-item group cursor-pointer"
                data-category={project.category}
                data-year={project.year}
                data-client={project.client}
              >
                <div class="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div class="flex items-center gap-2 mb-2 text-sm">
                      <span class="px-2 py-1 bg-white/20 rounded">{project.year}</span>
                      <span class="px-2 py-1 bg-white/20 rounded">
                        {project.category === 'kuechen' && t('service.kitchen')}
                        {project.category === 'badmoebel' && t('service.bathroom')}
                        {project.category === 'ladenbau' && t('service.retail')}
                        {project.category === 'gastronomie' && t('service.gastronomy')}
                        {project.category === 'buero' && t('service.office')}
                        {project.category === 'outdoor' && t('service.outdoor')}
                      </span>
                    </div>
                    <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                    <p class="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
                <div class="mt-4">
                  <h3 class="font-bold text-lg mb-1">{project.title}</h3>
                  <p class="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          <div id="noResults" class="hidden text-center py-12">
            <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
            <p class="text-xl text-gray-500">
              {lang === 'en' 
                ? 'No projects found with the selected filters.'
                : 'Keine Projekte mit den gewählten Filtern gefunden.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-gradient-to-r from-brand-anthrazit to-gray-900 text-white">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="font-display text-4xl mb-6">
            {lang === 'en'
              ? 'Ready to Start Your Project?'
              : 'Bereit für Ihr Projekt?'}
          </h2>
          <p class="text-xl mb-8 opacity-90">
            {lang === 'en'
              ? "Let's create something extraordinary together."
              : 'Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen.'}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/kontakt?lang=${lang}`} class="btn-white-large">
              <i class="fas fa-comments mr-2"></i>
              {t('action.request_consultation')}
            </a>
            <a href={`/downloads?lang=${lang}`} class="btn-white-outline-large">
              <i class="fas fa-download mr-2"></i>
              {lang === 'en' ? 'Download Brochure' : 'Broschüre herunterladen'}
            </a>
          </div>
        </div>
      </section>

      {/* Filter Script */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          const categoryFilter = document.getElementById('categoryFilter');
          const yearFilter = document.getElementById('yearFilter');
          const clientFilter = document.getElementById('clientFilter');
          const resetButton = document.getElementById('resetFilters');
          const projectsGrid = document.getElementById('projectsGrid');
          const noResults = document.getElementById('noResults');
          const projectItems = document.querySelectorAll('.project-item');

          function filterProjects() {
            const category = categoryFilter.value;
            const year = yearFilter.value;
            const client = clientFilter.value;
            
            let visibleCount = 0;

            projectItems.forEach(item => {
              const itemCategory = item.dataset.category;
              const itemYear = item.dataset.year;
              const itemClient = item.dataset.client;

              const categoryMatch = category === 'all' || itemCategory === category;
              const yearMatch = year === 'all' || itemYear === year;
              const clientMatch = client === 'all' || itemClient === client;

              if (categoryMatch && yearMatch && clientMatch) {
                item.style.display = '';
                visibleCount++;
              } else {
                item.style.display = 'none';
              }
            });

            if (visibleCount === 0) {
              noResults.classList.remove('hidden');
            } else {
              noResults.classList.add('hidden');
            }
          }

          categoryFilter.addEventListener('change', filterProjects);
          yearFilter.addEventListener('change', filterProjects);
          clientFilter.addEventListener('change', filterProjects);

          resetButton.addEventListener('click', function() {
            categoryFilter.value = 'all';
            yearFilter.value = 'all';
            clientFilter.value = 'all';
            filterProjects();
          });
        });
      `}} />
    </>,
    { 
      title: lang === 'en'
        ? 'Projects | Brandstifter Urban Manufactur'
        : 'Projekte | Brandstifter Urban Manufactur',
      description: lang === 'en'
        ? 'Explore our portfolio of custom kitchens, bathrooms, retail spaces, and more. Get inspired for your project.'
        : 'Entdecken Sie unser Portfolio von maßgefertigten Küchen, Bädern, Ladenbau und mehr. Lassen Sie sich inspirieren.'
    }
  )
})