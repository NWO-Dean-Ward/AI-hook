import { Hono } from 'hono'

export const downloadsRoute = new Hono()

const downloads = [
  {
    id: 'kuechen-checkliste',
    title: 'Küchen-Planungs-Checkliste',
    description: '10 Schritte zur Traumküche - Von der Bestandsaufnahme bis zum perfekten Design',
    category: 'Privatkunden',
    pages: 10,
    format: 'PDF',
    size: '2.4 MB',
    icon: 'fa-utensils',
    highlights: [
      'Raumanalyse & Maße',
      'Stilfindung & Design',
      'Material & Oberflächen',
      'Geräteausstattung',
      'Budget-Planung'
    ]
  },
  {
    id: 'bad-konfigurator',
    title: 'Badmöbel-Konfigurator',
    description: 'Ihr Weg zum perfekten Badezimmer - Schritt für Schritt zum Wellness-Traum',
    category: 'Privatkunden',
    pages: 12,
    format: 'PDF',
    size: '3.1 MB',
    icon: 'fa-bath',
    highlights: [
      'Waschtisch-Konfiguration',
      'Material-Auswahl',
      'Beleuchtungskonzept',
      'Stauraum-Planung',
      'Barrierefreiheit'
    ]
  },
  {
    id: 'restaurant-guide',
    title: 'Restaurant & Gastronomie Guide',
    description: 'Professionelle Planung für Ihr Gastronomie-Projekt',
    category: 'B2B',
    pages: 25,
    format: 'PDF',
    size: '5.2 MB',
    icon: 'fa-coffee',
    highlights: [
      'Raumkonzept & Zonierung',
      'Küchen-Planung',
      'Möblierung & Design',
      'Compliance & Normen',
      'Budget & Timeline'
    ]
  },
  {
    id: 'showroom-konzept',
    title: 'Showroom & Retail Planer',
    description: 'Markenräume die verkaufen - Von der Idee zum erfolgreichen Store',
    category: 'B2B',
    pages: 20,
    format: 'PDF',
    size: '4.8 MB',
    icon: 'fa-store',
    highlights: [
      'Markenpositionierung',
      'Customer Journey',
      'Visual Merchandising',
      'Beleuchtung & Technik',
      'Rollout-Strategie'
    ]
  },
  {
    id: 'material-katalog',
    title: 'Material & Oberflächen Katalog',
    description: 'Umfassende Übersicht aller verfügbaren Materialien und Oberflächen',
    category: 'Alle',
    pages: 48,
    format: 'PDF',
    size: '12.3 MB',
    icon: 'fa-swatchbook',
    highlights: [
      'Hölzer & Furniere',
      'Arbeitsplatten',
      'Beschläge & Hardware',
      'Farben & Lackierungen',
      'Pflegehinweise'
    ]
  },
  {
    id: 'nachhaltigkeit-report',
    title: 'Nachhaltigkeit & Umwelt',
    description: 'Unser Engagement für nachhaltige Produktion und umweltfreundliche Materialien',
    category: 'Alle',
    pages: 16,
    format: 'PDF',
    size: '3.5 MB',
    icon: 'fa-leaf',
    highlights: [
      'FSC-Zertifizierung',
      'Lokale Produktion',
      'Recycling-Konzept',
      'CO₂-Bilanz',
      'Nachhaltige Materialien'
    ]
  }
]

downloadsRoute.get('/', (c) => {
  return c.render(
    <>
      {/* Hero Section */}
      <section class="bg-gradient-to-br from-brand-anthrazit to-gray-800 py-20 text-white">
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-display mb-4">Download-Center</h1>
          <p class="text-xl text-gray-300 max-w-2xl">
            Kostenlose Planungshilfen, Checklisten und Kataloge für Ihr Projekt. 
            Perfekt vorbereitet zum Erfolg.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section class="py-12 bg-brand-greige">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="flex items-center">
              <i class="fas fa-download text-brand-brass text-2xl mr-4"></i>
              <div>
                <p class="font-semibold text-brand-anthrazit">Sofort verfügbar</p>
                <p class="text-sm text-gray-600">Nach Registrierung</p>
              </div>
            </div>
            <div class="flex items-center">
              <i class="fas fa-file-pdf text-brand-brass text-2xl mr-4"></i>
              <div>
                <p class="font-semibold text-brand-anthrazit">PDF-Format</p>
                <p class="text-sm text-gray-600">Optimal zum Drucken</p>
              </div>
            </div>
            <div class="flex items-center">
              <i class="fas fa-euro-sign text-brand-brass text-2xl mr-4"></i>
              <div>
                <p class="font-semibold text-brand-anthrazit">100% Kostenlos</p>
                <p class="text-sm text-gray-600">Keine versteckten Kosten</p>
              </div>
            </div>
            <div class="flex items-center">
              <i class="fas fa-shield-alt text-brand-brass text-2xl mr-4"></i>
              <div>
                <p class="font-semibold text-brand-anthrazit">Datenschutz</p>
                <p class="text-sm text-gray-600">DSGVO-konform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          {/* Filter Tabs */}
          <div class="flex flex-wrap gap-2 mb-12 justify-center">
            <button class="download-tab active" data-category="all">
              Alle Downloads
            </button>
            <button class="download-tab" data-category="privatkunden">
              Privatkunden
            </button>
            <button class="download-tab" data-category="b2b">
              B2B & Business
            </button>
            <button class="download-tab" data-category="alle">
              Allgemein
            </button>
          </div>

          {/* Downloads Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((download) => (
              <div class="download-card bg-white rounded-lg shadow-lg overflow-hidden" data-category={download.category.toLowerCase()}>
                {/* Card Header */}
                <div class="bg-gradient-to-r from-brand-brass to-brand-oak p-6 text-white">
                  <div class="flex items-center justify-between mb-4">
                    <i class={`fas ${download.icon} text-4xl`}></i>
                    <span class="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {download.category}
                    </span>
                  </div>
                  <h3 class="text-xl font-bold mb-2">{download.title}</h3>
                  <p class="text-sm opacity-90">{download.description}</p>
                </div>

                {/* Card Body */}
                <div class="p-6">
                  {/* Highlights */}
                  <div class="mb-6">
                    <h4 class="font-semibold text-brand-anthrazit mb-3">Inhalt:</h4>
                    <ul class="space-y-2">
                      {download.highlights.map((highlight) => (
                        <li class="flex items-start text-sm text-gray-600">
                          <i class="fas fa-check text-brand-brass mr-2 mt-0.5"></i>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meta Info */}
                  <div class="flex items-center justify-between text-sm text-gray-500 border-t pt-4 mb-6">
                    <span>
                      <i class="fas fa-file mr-1"></i>
                      {download.pages} Seiten
                    </span>
                    <span>
                      <i class="fas fa-database mr-1"></i>
                      {download.size}
                    </span>
                    <span>
                      <i class="fas fa-file-pdf mr-1"></i>
                      {download.format}
                    </span>
                  </div>

                  {/* Download Button */}
                  <button 
                    class="w-full btn-primary download-trigger" 
                    data-download={download.id}
                    data-title={download.title}
                  >
                    <i class="fas fa-download mr-2"></i>
                    Jetzt herunterladen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-display text-brand-anthrazit text-center mb-12">
            So funktioniert's
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                <i class="fas fa-mouse-pointer"></i>
              </div>
              <h3 class="font-semibold text-brand-anthrazit mb-2">1. Auswählen</h3>
              <p class="text-sm text-gray-600">Wählen Sie die gewünschten Downloads aus</p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                <i class="fas fa-user-edit"></i>
              </div>
              <h3 class="font-semibold text-brand-anthrazit mb-2">2. Registrieren</h3>
              <p class="text-sm text-gray-600">Kurze Registrierung mit E-Mail</p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                <i class="fas fa-envelope-open"></i>
              </div>
              <h3 class="font-semibold text-brand-anthrazit mb-2">3. Erhalten</h3>
              <p class="text-sm text-gray-600">Download-Link per E-Mail</p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-brand-brass rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                <i class="fas fa-clipboard-check"></i>
              </div>
              <h3 class="font-semibold text-brand-anthrazit mb-2">4. Durchstarten</h3>
              <p class="text-sm text-gray-600">Mit der Planung beginnen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section class="py-16 bg-gradient-to-r from-brand-brass to-brand-oak text-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-display mb-4">
              Bleiben Sie auf dem Laufenden
            </h2>
            <p class="text-xl mb-8">
              Erhalten Sie exklusive Einblicke, neue Downloads und Projekt-Inspirationen 
              direkt in Ihr Postfach.
            </p>
            
            <form id="newsletter-form" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                class="flex-1 px-4 py-3 rounded-lg text-gray-800"
                required
              />
              <button type="submit" class="btn-white-large">
                <i class="fas fa-paper-plane mr-2"></i>
                Anmelden
              </button>
            </form>
            
            <p class="text-sm mt-4 opacity-90">
              Kostenlos und jederzeit kündbar. Kein Spam, versprochen.
            </p>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      <div id="download-modal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 hidden">
        <div class="bg-white rounded-lg max-w-md w-full mx-4">
          <div class="p-6 border-b">
            <h3 class="text-2xl font-display text-brand-anthrazit" id="modal-title">
              Download anfordern
            </h3>
          </div>
          
          <form id="download-form" class="p-6">
            <input type="hidden" id="download-id" name="file" />
            
            <div class="space-y-4">
              <div>
                <label class="form-label">Vorname *</label>
                <input type="text" name="firstname" class="form-input" required />
              </div>
              
              <div>
                <label class="form-label">Nachname *</label>
                <input type="text" name="lastname" class="form-input" required />
              </div>
              
              <div>
                <label class="form-label">E-Mail *</label>
                <input type="email" name="email" class="form-input" required />
              </div>
              
              <div>
                <label class="form-label">Firma (optional)</label>
                <input type="text" name="company" class="form-input" />
              </div>
              
              <div>
                <label class="form-label">Ich bin...</label>
                <select name="type" class="form-input">
                  <option value="privat">Privatkunde</option>
                  <option value="architekt">Architekt/Planer</option>
                  <option value="unternehmer">Unternehmer</option>
                  <option value="handwerker">Handwerker</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>
              
              <div class="flex items-start">
                <input type="checkbox" name="newsletter" id="download-newsletter" class="mt-1 mr-3" checked />
                <label for="download-newsletter" class="text-sm text-gray-600">
                  Ja, ich möchte weitere hilfreiche Tipps und Neuigkeiten per E-Mail erhalten.
                </label>
              </div>
              
              <div class="flex items-start">
                <input type="checkbox" name="privacy" id="download-privacy" class="mt-1 mr-3" required />
                <label for="download-privacy" class="text-sm text-gray-600">
                  Ich akzeptiere die <a href="/datenschutz" class="text-brand-brass hover:underline">Datenschutzerklärung</a> *
                </label>
              </div>
            </div>
            
            <div class="flex gap-4 mt-6">
              <button type="submit" class="btn-primary flex-1">
                <i class="fas fa-download mr-2"></i>
                Download starten
              </button>
              <button type="button" id="modal-close" class="btn-secondary">
                Abbrechen
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .download-tab {
          @apply px-6 py-2 rounded-full border-2 border-gray-300 bg-white text-gray-700 hover:bg-brand-brass hover:text-white hover:border-brand-brass transition-all font-semibold;
        }
        .download-tab.active {
          @apply bg-brand-brass text-white border-brand-brass;
        }
        .download-card {
          @apply transition-all duration-300;
        }
        .download-card.hidden {
          @apply hidden;
        }
      `}} />

      {/* Download Scripts */}
      <script dangerouslySetInnerHTML={{__html: `
        document.addEventListener('DOMContentLoaded', function() {
          // Tab filtering
          const tabs = document.querySelectorAll('.download-tab');
          const cards = document.querySelectorAll('.download-card');
          
          tabs.forEach(tab => {
            tab.addEventListener('click', function() {
              tabs.forEach(t => t.classList.remove('active'));
              this.classList.add('active');
              
              const category = this.dataset.category;
              
              cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                  card.classList.remove('hidden');
                } else {
                  card.classList.add('hidden');
                }
              });
            });
          });

          // Download modal
          const modal = document.getElementById('download-modal');
          const modalTitle = document.getElementById('modal-title');
          const downloadId = document.getElementById('download-id');
          const modalClose = document.getElementById('modal-close');
          const downloadTriggers = document.querySelectorAll('.download-trigger');
          const downloadForm = document.getElementById('download-form');

          downloadTriggers.forEach(trigger => {
            trigger.addEventListener('click', function() {
              const id = this.dataset.download;
              const title = this.dataset.title;
              
              downloadId.value = id;
              modalTitle.textContent = title;
              modal.classList.remove('hidden');
            });
          });

          modalClose.addEventListener('click', function() {
            modal.classList.add('hidden');
          });

          modal.addEventListener('click', function(e) {
            if (e.target === modal) {
              modal.classList.add('hidden');
            }
          });

          downloadForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(downloadForm);
            const data = {
              file: formData.get('file'),
              email: formData.get('email'),
              name: formData.get('firstname') + ' ' + formData.get('lastname')
            };
            
            try {
              const response = await fetch('/api/download', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
              });
              
              const result = await response.json();
              if (result.success) {
                alert('Vielen Dank! Der Download-Link wurde an Ihre E-Mail-Adresse gesendet.');
                modal.classList.add('hidden');
                downloadForm.reset();
                
                // Simulate download
                window.open(result.downloadUrl, '_blank');
              }
            } catch (error) {
              console.error('Error:', error);
              alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
            }
          });
        });
      `}} />
    </>,
    { 
      title: 'Download-Center | Brandstifter Urban Manufactur',
      description: 'Kostenlose Planungshilfen, Checklisten und Kataloge. Küchen-Planer, Bad-Konfigurator, Restaurant-Guide und mehr zum Download.'
    }
  )
})