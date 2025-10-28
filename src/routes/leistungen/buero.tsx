import { Hono } from 'hono'
import { createTranslator } from '../../lib/i18n'
import { mediaAssets } from '../../config/media-assets'

export const bueroRoute = new Hono()

bueroRoute.get('/', (c) => {
  const { lang, t } = createTranslator(c)
  
  return c.render(
    <>
      {/* Hero Section with Executive Office Image */}
      <section class="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src={mediaAssets.services.executiveOffice} 
            alt="Executive Office" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        <div class="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 class="font-display text-5xl md:text-7xl mb-6">
            {lang === 'en' ? 'Office & Workspaces' : 'Büro & Workspaces'}
          </h1>
          <p class="text-xl md:text-2xl opacity-90">
            {lang === 'en' 
              ? 'Creating productive and inspiring work environments'
              : 'Produktive und inspirierende Arbeitsumgebungen schaffen'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="font-display text-4xl mb-6">
                {lang === 'en' ? 'Modern Office Solutions' : 'Moderne Arbeitsräume für produktives Arbeiten'}
              </h2>
              <p class="text-lg text-gray-700 mb-4">
                {lang === 'en' 
                  ? 'Redesign your work environment. Our custom office furniture combines ergonomic design with highest functionality for optimal working conditions.'
                  : 'Gestalten Sie Ihre Arbeitsumgebung neu. Unsere maßgefertigten Büromöbel verbinden ergonomisches Design mit höchster Funktionalität für optimale Arbeitsbedingungen.'}
              </p>
              <p class="text-lg text-gray-700 mb-6">
                {lang === 'en'
                  ? 'From individual workplace design to complete office furnishing, we develop customized solutions that reflect your corporate culture and promote employee productivity.'
                  : 'Von der einzelnen Arbeitsplatzgestaltung bis zur kompletten Büroausstattung entwickeln wir individuelle Lösungen, die Ihre Unternehmenskultur widerspiegeln und die Produktivität Ihrer Mitarbeiter fördern.'}
              </p>
              
              <h3 class="text-2xl font-bold mb-4">
                {lang === 'en' ? 'Our Office Portfolio' : 'Unser Büro-Portfolio'}
              </h3>
              <ul class="space-y-2 mb-8">
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Ergonomic desks and workstations' : 'Ergonomische Schreibtische und Arbeitsplätze'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Conference tables and meeting rooms' : 'Konferenztische und Besprechungsräume'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Reception desks and counters' : 'Empfangstheken und Rezeptionen'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Room dividers and acoustic elements' : 'Raumteiler und Akustikelemente'}</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-black mr-3 mt-1"></i>
                  <span>{lang === 'en' ? 'Lounge and break room furniture' : 'Lounge- und Pausenraummöbel'}</span>
                </li>
              </ul>
              
              <a href={`/kontakt?lang=${lang}`} class="btn-primary">
                <i class="fas fa-calendar-alt mr-2"></i>
                {lang === 'en' ? 'Book Consultation' : 'Beratungstermin vereinbaren'}
              </a>
            </div>
            
            <div>
              <img 
                src={mediaAssets.services.office} 
                alt="Office Design" 
                class="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workspace Types Grid */}
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="font-display text-4xl text-center mb-12">
            {lang === 'en' ? 'Workplace Concepts' : 'Arbeitsplatzkonzepte'}
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-user text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Private Offices' : 'Einzelbüros'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Focused work environments for concentration and privacy.'
                  : 'Fokussierte Arbeitsumgebungen für Konzentration und Privatsphäre.'}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Open Spaces' : 'Open Spaces'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Collaborative environments for teamwork and communication.'
                  : 'Kollaborative Umgebungen für Teamarbeit und Kommunikation.'}
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-laptop text-white text-2xl"></i>
              </div>
              <h3 class="text-xl font-bold mb-2">{lang === 'en' ? 'Hybrid Solutions' : 'Hybride Lösungen'}</h3>
              <p class="text-gray-600">
                {lang === 'en'
                  ? 'Flexible spaces for modern work styles.'
                  : 'Flexible Räume für moderne Arbeitsstile.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Office Trends */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="font-display text-4xl text-center mb-12">
            {lang === 'en' ? 'Modern Office Trends' : 'Moderne Bürotrends'}
          </h2>
          
          <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center">
              <i class="fas fa-arrows-up-down text-4xl text-black mb-4"></i>
              <h3 class="text-lg font-bold mb-2">{lang === 'en' ? 'Height-Adjustable' : 'Höhenverstellbar'}</h3>
              <p class="text-sm text-gray-600">
                {lang === 'en'
                  ? 'Flexible work standing or sitting'
                  : 'Flexibles Arbeiten im Stehen oder Sitzen'}
              </p>
            </div>
            
            <div class="text-center">
              <i class="fas fa-plug text-4xl text-black mb-4"></i>
              <h3 class="text-lg font-bold mb-2">{lang === 'en' ? 'Cable Management' : 'Kabelmanagement'}</h3>
              <p class="text-sm text-gray-600">
                {lang === 'en'
                  ? 'Integrated solutions for tidy workplaces'
                  : 'Integrierte Lösungen für aufgeräumte Arbeitsplätze'}
              </p>
            </div>
            
            <div class="text-center">
              <i class="fas fa-volume-low text-4xl text-black mb-4"></i>
              <h3 class="text-lg font-bold mb-2">{lang === 'en' ? 'Acoustic Optimization' : 'Akustikoptimierung'}</h3>
              <p class="text-sm text-gray-600">
                {lang === 'en'
                  ? 'Sound-absorbing elements for quiet work'
                  : 'Schallabsorbierende Elemente für ruhiges Arbeiten'}
              </p>
            </div>
            
            <div class="text-center">
              <i class="fas fa-leaf text-4xl text-black mb-4"></i>
              <h3 class="text-lg font-bold mb-2">{lang === 'en' ? 'Biophilic Design' : 'Biophiles Design'}</h3>
              <p class="text-sm text-gray-600">
                {lang === 'en'
                  ? 'Integration of plants and natural elements'
                  : 'Integration von Pflanzen und natürlichen Elementen'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-brand-anthrazit text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="font-display text-4xl mb-6">
            {lang === 'en' ? 'Ready for Your Perfect Office?' : 'Bereit für Ihr perfektes Büro?'}
          </h2>
          <p class="text-xl mb-8 max-w-3xl mx-auto">
            {lang === 'en'
              ? 'Let\'s create a workspace that inspires your team and drives productivity.'
              : 'Lassen Sie uns einen Arbeitsraum schaffen, der Ihr Team inspiriert und die Produktivität steigert.'}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/kontakt?lang=${lang}`} class="btn-white-large">
              <i class="fas fa-calendar-alt mr-2"></i>
              {lang === 'en' ? 'Start Office Planning' : 'Büroplanung starten'}
            </a>
            <a href={`/projekte?lang=${lang}&filter=office`} class="btn-white-outline-large">
              <i class="fas fa-images mr-2"></i>
              {lang === 'en' ? 'View Office Projects' : 'Büro-Projekte ansehen'}
            </a>
          </div>
        </div>
      </section>
    </>,
    { 
      title: lang === 'en' 
        ? 'Office & Workspaces | Brandstifter Urban Manufactur' 
        : 'Büro & Workspaces | Brandstifter Urban Manufactur',
      description: lang === 'en'
        ? 'Modern office furniture and workspace solutions. Create productive work environments.'
        : 'Moderne Büromöbel und Workspace-Lösungen. Schaffen Sie produktive Arbeitsumgebungen.'
    }
  )
})