import { Hono } from 'hono'
import { Layout } from '../components/Layout'
import { createTranslator } from '../lib/i18n'
import { mediaAssets } from '../config/media-assets'

export const projekteRoute = new Hono()

projekteRoute.get('/', (c) => {
  const { lang, t } = createTranslator(c)
  
  // Updated projects data with real images
  const projects = [
    {
      id: 1,
      title: lang === 'en' ? 'Luxury Penthouse Kitchen' : 'Luxus Penthouse-Küche',
      category: 'kuechen',
      year: 2023,
      client: 'privat',
      image: mediaAssets.projects.penthouseKitchen,
      description: lang === 'en' 
        ? 'Ultra-modern kitchen with city skyline view'
        : 'Ultramoderne Küche mit Blick auf die Skyline'
    },
    {
      id: 2,
      title: lang === 'en' ? 'Premium Hotel Lobby' : 'Premium Hotel Lobby',
      category: 'gastronomie',
      year: 2023,
      client: 'b2b',
      image: mediaAssets.projects.hotelLobby,
      description: lang === 'en'
        ? 'Luxurious hotel reception with custom furniture'
        : 'Luxuriöse Hotelrezeption mit maßgefertigten Möbeln'
    },
    {
      id: 3,
      title: lang === 'en' ? 'Fashion Boutique Milano' : 'Fashion Boutique Milano',
      category: 'ladenbau',
      year: 2023,
      client: 'b2b',
      image: mediaAssets.projects.fashionBoutique,
      description: lang === 'en'
        ? 'Exclusive retail space with custom displays'
        : 'Exklusiver Verkaufsraum mit maßgefertigten Displays'
    },
    {
      id: 4,
      title: lang === 'en' ? 'Executive Office Suite' : 'Executive Büro Suite',
      category: 'buero',
      year: 2022,
      client: 'b2b',
      image: mediaAssets.services.office,
      description: lang === 'en'
        ? 'Modern workspace for corporate headquarters'
        : 'Moderner Arbeitsplatz für Firmenzentrale'
    },
    {
      id: 5,
      title: lang === 'en' ? 'Wellness Spa Resort' : 'Wellness Spa Resort',
      category: 'badmoebel',
      year: 2022,
      client: 'b2b',
      image: mediaAssets.services.bathroom,
      description: lang === 'en'
        ? 'Spa-like bathroom with luxury fixtures'
        : 'Spa-ähnliches Badezimmer mit Luxusausstattung'
    },
    {
      id: 6,
      title: lang === 'en' ? 'Fine Dining Restaurant' : 'Fine Dining Restaurant',
      category: 'gastronomie',
      year: 2022,
      client: 'b2b',
      image: mediaAssets.services.gastronomy,
      description: lang === 'en'
        ? 'Sophisticated restaurant with custom furniture'
        : 'Gehobenes Restaurant mit maßgefertigten Möbeln'
    }
  ]
  
  return c.render(
    <>
      {/* Hero Section */}
      <section class="relative h-[50vh] flex items-center justify-center overflow-hidden bg-brand-anthrazit">
        <div class="absolute inset-0 opacity-20">
          <img src={mediaAssets.projects.penthouseKitchen} alt="Projects" class="w-full h-full object-cover" />
        </div>
        <div class="relative z-10 text-center text-white">
          <h1 class="font-display text-5xl md:text-6xl mb-4">
            {t('projects.title')}
          </h1>
          <p class="text-xl opacity-90">
            {t('projects.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section class="py-6 bg-white border-b">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap gap-4 items-center justify-center">
            <label class="flex items-center gap-2">
              <span class="text-sm font-medium">{t('projects.filter.category')}:</span>
              <select id="categoryFilter" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                <option value="all">{t('projects.filter.all')}</option>
                <option value="kuechen">{t('service.kitchen')}</option>
                <option value="badmoebel">{t('service.bathroom')}</option>
                <option value="ladenbau">{t('service.retail')}</option>
                <option value="gastronomie">{t('service.gastronomy')}</option>
                <option value="buero">{t('service.office')}</option>
              </select>
            </label>
            
            <label class="flex items-center gap-2">
              <span class="text-sm font-medium">{t('projects.filter.year')}:</span>
              <select id="yearFilter" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                <option value="all">{t('projects.filter.all')}</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </label>
            
            <label class="flex items-center gap-2">
              <span class="text-sm font-medium">{t('projects.filter.client')}:</span>
              <select id="clientFilter" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                <option value="all">{t('projects.filter.all')}</option>
                <option value="privat">{t('customer.private')}</option>
                <option value="b2b">{t('customer.b2b')}</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projectsGrid">
            {projects.map(project => (
              <div 
                class="project-item bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                data-category={project.category}
                data-year={project.year}
                data-client={project.client}
              >
                <div class="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2">{project.title}</h3>
                  <p class="text-gray-600 mb-4">{project.description}</p>
                  <div class="flex gap-2">
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-xs">
                      {project.category === 'kuechen' && t('service.kitchen')}
                      {project.category === 'badmoebel' && t('service.bathroom')}
                      {project.category === 'ladenbau' && t('service.retail')}
                      {project.category === 'gastronomie' && t('service.gastronomy')}
                      {project.category === 'buero' && t('service.office')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-brand-anthrazit text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="font-display text-4xl mb-6">
            {lang === 'en' ? 'Start Your Project' : 'Starten Sie Ihr Projekt'}
          </h2>
          <p class="text-xl mb-8 max-w-3xl mx-auto">
            {lang === 'en'
              ? 'Let us bring your vision to life. Contact us for a free consultation.'
              : 'Lassen Sie uns Ihre Vision zum Leben erwecken. Kontaktieren Sie uns für eine kostenlose Beratung.'}
          </p>
          <a href={`/kontakt?lang=${lang}`} class="btn-white-large">
            <i class="fas fa-envelope mr-2"></i>
            {t('action.contact')}
          </a>
        </div>
      </section>

      {/* Project Filter Script */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          const categoryFilter = document.getElementById('categoryFilter');
          const yearFilter = document.getElementById('yearFilter');
          const clientFilter = document.getElementById('clientFilter');
          const projects = document.querySelectorAll('.project-item');
          
          function filterProjects() {
            const category = categoryFilter.value;
            const year = yearFilter.value;
            const client = clientFilter.value;
            
            projects.forEach(project => {
              let show = true;
              
              if (category !== 'all' && project.dataset.category !== category) show = false;
              if (year !== 'all' && project.dataset.year !== year) show = false;
              if (client !== 'all' && project.dataset.client !== client) show = false;
              
              project.style.display = show ? 'block' : 'none';
            });
          }
          
          categoryFilter?.addEventListener('change', filterProjects);
          yearFilter?.addEventListener('change', filterProjects);
          clientFilter?.addEventListener('change', filterProjects);
        });
      `}} />
    </>,
    { 
      title: lang === 'en' 
        ? 'Projects | Brandstifter Urban Manufactur' 
        : 'Projekte | Brandstifter Urban Manufactur',
      description: lang === 'en'
        ? 'Discover our completed projects. From private kitchens to large commercial projects.'
        : 'Entdecken Sie unsere realisierten Projekte. Von privaten Küchen bis zu großen Gewerbeprojekten.'
    }
  )
})