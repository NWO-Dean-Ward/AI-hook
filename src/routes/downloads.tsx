import { Hono } from 'hono'
import { Layout } from '../components/Layout'
import { createTranslator } from '../lib/i18n'

export const downloadsRoute = new Hono()

downloadsRoute.get('/', (c) => {
  const { lang, t } = createTranslator(c)
  
  const downloads = [
    {
      id: 'kitchen-guide',
      title: lang === 'en' ? 'Kitchen Planning Guide' : 'Küchenplanungs-Guide',
      description: lang === 'en' 
        ? 'Everything you need to know for your dream kitchen'
        : 'Alles was Sie für Ihre Traumküche wissen müssen',
      fileSize: '2.4 MB',
      format: 'PDF',
      icon: 'fa-kitchen-set',
      category: lang === 'en' ? 'Planning Guides' : 'Planungshilfen'
    },
    {
      id: 'bathroom-checklist',
      title: lang === 'en' ? 'Bathroom Checklist' : 'Bad-Checkliste',
      description: lang === 'en'
        ? 'Step-by-step to your wellness oasis'
        : 'Schritt für Schritt zu Ihrer Wellness-Oase',
      fileSize: '1.8 MB',
      format: 'PDF',
      icon: 'fa-bath',
      category: lang === 'en' ? 'Planning Guides' : 'Planungshilfen'
    },
    {
      id: 'material-catalog',
      title: lang === 'en' ? 'Material Catalog 2024' : 'Materialkatalog 2024',
      description: lang === 'en'
        ? 'Our complete collection of surfaces and materials'
        : 'Unsere komplette Kollektion an Oberflächen und Materialien',
      fileSize: '15.3 MB',
      format: 'PDF',
      icon: 'fa-swatchbook',
      category: lang === 'en' ? 'Catalogs' : 'Kataloge'
    },
    {
      id: 'gastro-guide',
      title: lang === 'en' ? 'Gastronomy Planning' : 'Gastronomie-Planung',
      description: lang === 'en'
        ? 'Professional guide for restaurant and café furnishing'
        : 'Professioneller Leitfaden für Restaurant- und Café-Ausstattung',
      fileSize: '3.2 MB',
      format: 'PDF',
      icon: 'fa-utensils',
      category: lang === 'en' ? 'Professional' : 'Professional'
    },
    {
      id: 'sustainability-report',
      title: lang === 'en' ? 'Sustainability Report' : 'Nachhaltigkeitsbericht',
      description: lang === 'en'
        ? 'Our commitment to environment and future'
        : 'Unser Engagement für Umwelt und Zukunft',
      fileSize: '1.1 MB',
      format: 'PDF',
      icon: 'fa-leaf',
      category: lang === 'en' ? 'Company' : 'Unternehmen'
    },
    {
      id: 'price-list',
      title: lang === 'en' ? 'Price Guide 2024' : 'Preisübersicht 2024',
      description: lang === 'en'
        ? 'Transparent pricing information for all services'
        : 'Transparente Preisinformationen für alle Leistungen',
      fileSize: '800 KB',
      format: 'PDF',
      icon: 'fa-euro-sign',
      category: lang === 'en' ? 'Pricing' : 'Preise'
    }
  ]

  return c.render(
    <>
      {/* Hero Section */}
      <section class="relative h-64 bg-gradient-to-br from-brand-anthrazit to-gray-800 flex items-center justify-center">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative z-10 text-center text-white">
          <h1 class="font-display text-4xl md:text-6xl mb-4">{t('nav.downloads')}</h1>
          <p class="text-xl opacity-90">
            {lang === 'en'
              ? 'Helpful resources for your project'
              : 'Hilfreiche Ressourcen für Ihr Projekt'}
          </p>
        </div>
      </section>

      {/* Downloads Grid */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl mb-4">
              {lang === 'en'
                ? 'Free Downloads'
                : 'Kostenlose Downloads'}
            </h2>
            <p class="text-xl text-gray-600">
              {lang === 'en'
                ? 'Get valuable information and planning aids for your project.'
                : 'Erhalten Sie wertvolle Informationen und Planungshilfen für Ihr Projekt.'}
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map(download => (
              <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mr-4">
                    <i class={`fas ${download.icon}`}></i>
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-lg mb-1">{download.title}</h3>
                    <p class="text-sm text-gray-500">{download.category}</p>
                  </div>
                </div>
                
                <p class="text-gray-600 mb-4">{download.description}</p>
                
                <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span><i class="fas fa-file-pdf mr-1"></i> {download.format}</span>
                  <span><i class="fas fa-download mr-1"></i> {download.fileSize}</span>
                </div>
                
                <button 
                  class="download-btn w-full bg-brand-anthrazit text-white py-3 rounded-lg hover:bg-black transition-colors"
                  data-download={download.id}
                  data-title={download.title}
                >
                  <i class="fas fa-download mr-2"></i>
                  {t('action.download')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4">
          <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div class="text-center mb-8">
              <i class="fas fa-envelope text-5xl text-gray-700 mb-4"></i>
              <h2 class="font-display text-3xl mb-4">
                {lang === 'en'
                  ? 'Stay Updated'
                  : 'Bleiben Sie informiert'}
              </h2>
              <p class="text-xl text-gray-600">
                {lang === 'en'
                  ? 'Subscribe to our newsletter and receive exclusive insights and offers.'
                  : 'Abonnieren Sie unseren Newsletter und erhalten Sie exklusive Einblicke und Angebote.'}
              </p>
            </div>
            
            <form action={`/api/newsletter?lang=${lang}`} method="POST" class="max-w-md mx-auto">
              <div class="flex gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder={lang === 'en' ? 'Your email address' : 'Ihre E-Mail-Adresse'}
                  required
                  class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <button
                  type="submit"
                  class="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  {t('action.subscribe')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      <div id="downloadModal" class="fixed inset-0 bg-black/50 hidden items-center justify-center z-50">
        <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
          <h3 class="text-2xl font-bold mb-4">
            {lang === 'en'
              ? 'One more step...'
              : 'Noch ein Schritt...'}
          </h3>
          <p class="text-gray-600 mb-6">
            {lang === 'en'
              ? 'Please provide your contact information to download:'
              : 'Bitte geben Sie Ihre Kontaktdaten für den Download an:'}
          </p>
          <p class="font-semibold mb-6" id="downloadTitle"></p>
          
          <form action={`/api/download?lang=${lang}`} method="POST" id="downloadForm">
            <input type="hidden" name="resource" id="downloadResource" />
            
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.name')} *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.company')}
                </label>
                <input
                  type="text"
                  name="company"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <div class="flex items-start">
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsletterConsent"
                  class="mt-1 h-4 w-4 text-gray-700 border-gray-300 rounded focus:ring-black"
                />
                <label for="newsletterConsent" class="ml-2 text-sm text-gray-600">
                  {lang === 'en'
                    ? 'Yes, I would like to receive the newsletter'
                    : 'Ja, ich möchte den Newsletter erhalten'}
                </label>
              </div>
              
              <div class="flex items-start">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  class="mt-1 h-4 w-4 text-gray-700 border-gray-300 rounded focus:ring-black"
                />
                <label class="ml-2 text-sm text-gray-600">
                  {t('contact.form.privacy')} *
                </label>
              </div>
            </div>
            
            <div class="flex gap-4 mt-6">
              <button
                type="button"
                id="cancelDownload"
                class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                {lang === 'en' ? 'Cancel' : 'Abbrechen'}
              </button>
              <button
                type="submit"
                class="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <i class="fas fa-download mr-2"></i>
                {t('action.download')}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Download Modal Script */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          const modal = document.getElementById('downloadModal');
          const downloadBtns = document.querySelectorAll('.download-btn');
          const cancelBtn = document.getElementById('cancelDownload');
          const downloadTitle = document.getElementById('downloadTitle');
          const downloadResource = document.getElementById('downloadResource');
          const downloadForm = document.getElementById('downloadForm');

          downloadBtns.forEach(btn => {
            btn.addEventListener('click', function() {
              const resource = this.dataset.download;
              const title = this.dataset.title;
              
              downloadTitle.textContent = title;
              downloadResource.value = resource;
              
              modal.classList.remove('hidden');
              modal.classList.add('flex');
            });
          });

          cancelBtn.addEventListener('click', function() {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
          });

          modal.addEventListener('click', function(e) {
            if (e.target === modal) {
              modal.classList.add('hidden');
              modal.classList.remove('flex');
            }
          });

          downloadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate download
            alert('Download wird gestartet... (In Produktion würde hier die echte Datei heruntergeladen)');
            
            // Close modal
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            
            // Reset form
            downloadForm.reset();
          });
        });
      `}} />
    </>,
    { 
      title: lang === 'en'
        ? 'Downloads | Brandstifter Urban Manufactur'
        : 'Downloads | Brandstifter Urban Manufactur',
      description: lang === 'en'
        ? 'Download free planning guides, catalogs, and resources for your project.'
        : 'Laden Sie kostenlose Planungshilfen, Kataloge und Ressourcen für Ihr Projekt herunter.'
    }
  )
})