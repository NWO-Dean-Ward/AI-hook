import { Hono } from 'hono'

export const kontaktRoute = new Hono()

kontaktRoute.get('/', (c) => {
  return c.render(
    <>
      {/* Hero Section */}
      <section class="bg-gradient-to-br from-brand-anthrazit to-gray-800 py-20 text-white">
        <div class="container mx-auto px-4">
          <h1 class="text-5xl font-display mb-4">Kontakt</h1>
          <p class="text-xl text-gray-300 max-w-2xl">
            Lassen Sie uns gemeinsam Ihre Vision verwirklichen. 
            Besuchen Sie unseren Showroom oder kontaktieren Sie uns für eine unverbindliche Beratung.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 class="text-3xl font-display text-brand-anthrazit mb-6">Ihre Anfrage</h2>
              <p class="text-gray-600 mb-8">
                Erzählen Sie uns von Ihrem Projekt. Wir melden uns innerhalb von 48 Stunden bei Ihnen.
              </p>
              
              <form id="contact-form" class="space-y-6">
                {/* Type Selection */}
                <div>
                  <label class="form-label">Art der Anfrage *</label>
                  <select name="type" class="form-input" required>
                    <option value="">Bitte wählen...</option>
                    <option value="beratung">Beratungsgespräch</option>
                    <option value="showroom">Showroom-Termin</option>
                    <option value="projekt">Projekt-Anfrage</option>
                    <option value="general">Allgemeine Anfrage</option>
                  </select>
                </div>

                {/* Name */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="form-label">Vorname *</label>
                    <input type="text" name="firstname" class="form-input" required />
                  </div>
                  <div>
                    <label class="form-label">Nachname *</label>
                    <input type="text" name="lastname" class="form-input" required />
                  </div>
                </div>

                {/* Contact Details */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="form-label">E-Mail *</label>
                    <input type="email" name="email" class="form-input" required />
                  </div>
                  <div>
                    <label class="form-label">Telefon</label>
                    <input type="tel" name="phone" class="form-input" placeholder="+49" />
                  </div>
                </div>

                {/* Company (optional) */}
                <div>
                  <label class="form-label">Firma (optional)</label>
                  <input type="text" name="company" class="form-input" />
                </div>

                {/* Subject */}
                <div>
                  <label class="form-label">Betreff *</label>
                  <input type="text" name="subject" class="form-input" required />
                </div>

                {/* Message */}
                <div>
                  <label class="form-label">Ihre Nachricht *</label>
                  <textarea name="message" rows="6" class="form-input" required 
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."></textarea>
                </div>

                {/* Project Details */}
                <div class="border-t pt-6">
                  <h3 class="font-semibold text-brand-anthrazit mb-4">Projekt-Details (optional)</h3>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label class="form-label">Projekt-Typ</label>
                      <select name="projectType" class="form-input">
                        <option value="">Bitte wählen...</option>
                        <option value="kueche">Küche</option>
                        <option value="bad">Badmöbel</option>
                        <option value="ladenbau">Ladenbau</option>
                        <option value="gastronomie">Gastronomie</option>
                        <option value="buero">Büro</option>
                        <option value="outdoor">Outdoor</option>
                      </select>
                    </div>
                    
                    <div>
                      <label class="form-label">Zeitrahmen</label>
                      <select name="timeline" class="form-input">
                        <option value="">Bitte wählen...</option>
                        <option value="sofort">Sofort</option>
                        <option value="1-3">1-3 Monate</option>
                        <option value="3-6">3-6 Monate</option>
                        <option value="6-12">6-12 Monate</option>
                        <option value="12+">Über 12 Monate</option>
                      </select>
                    </div>
                  </div>

                  <div class="mt-6">
                    <label class="form-label">Budget-Rahmen</label>
                    <select name="budget" class="form-input">
                      <option value="">Bitte wählen...</option>
                      <option value="25-50">25.000 - 50.000 €</option>
                      <option value="50-100">50.000 - 100.000 €</option>
                      <option value="100-250">100.000 - 250.000 €</option>
                      <option value="250+">Über 250.000 €</option>
                    </select>
                  </div>
                </div>

                {/* Newsletter */}
                <div class="flex items-start">
                  <input type="checkbox" name="newsletter" id="newsletter" class="mt-1 mr-3" />
                  <label for="newsletter" class="text-sm text-gray-600">
                    Ich möchte den Brandstifter Newsletter erhalten und über Neuigkeiten 
                    und Projekte informiert werden.
                  </label>
                </div>

                {/* Privacy */}
                <div class="flex items-start">
                  <input type="checkbox" name="privacy" id="privacy" class="mt-1 mr-3" required />
                  <label for="privacy" class="text-sm text-gray-600">
                    Ich habe die <a href="/datenschutz" class="text-brand-brass hover:underline">Datenschutzerklärung</a> 
                    gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *
                  </label>
                </div>

                {/* Submit */}
                <div class="flex gap-4">
                  <button type="submit" class="btn-primary">
                    <i class="fas fa-paper-plane mr-2"></i>
                    Anfrage senden
                  </button>
                  <button type="reset" class="btn-secondary">
                    <i class="fas fa-redo mr-2"></i>
                    Zurücksetzen
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              {/* Showroom */}
              <div class="bg-brand-greige rounded-lg p-8 mb-8">
                <h2 class="text-3xl font-display text-brand-anthrazit mb-6">Showroom Ober-Mörlen</h2>
                
                <div class="space-y-4">
                  <div class="flex items-start">
                    <i class="fas fa-map-marker-alt text-brand-brass mt-1 mr-4 text-xl"></i>
                    <div>
                      <p class="font-semibold text-brand-anthrazit">Adresse</p>
                      <address class="not-italic text-gray-700">
                        Dieselstraße 15<br />
                        61239 Ober-Mörlen<br />
                        Deutschland
                      </address>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <i class="fas fa-clock text-brand-brass mt-1 mr-4 text-xl"></i>
                    <div>
                      <p class="font-semibold text-brand-anthrazit">Öffnungszeiten</p>
                      <p class="text-gray-700">
                        Mo-Fr: 09:00 - 18:00 Uhr<br />
                        Sa: 10:00 - 16:00 Uhr<br />
                        So: Geschlossen
                      </p>
                      <p class="text-sm text-gray-600 mt-2">
                        Termine außerhalb der Öffnungszeiten nach Vereinbarung
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <i class="fas fa-phone text-brand-brass mt-1 mr-4 text-xl"></i>
                    <div>
                      <p class="font-semibold text-brand-anthrazit">Telefon</p>
                      <a href="tel:+496002123456" class="text-brand-brass hover:underline">
                        +49 (0) 6002 123 456
                      </a>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <i class="fas fa-envelope text-brand-brass mt-1 mr-4 text-xl"></i>
                    <div>
                      <p class="font-semibold text-brand-anthrazit">E-Mail</p>
                      <a href="mailto:info@brandstifter.online" class="text-brand-brass hover:underline">
                        info@brandstifter.online
                      </a>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <i class="fas fa-parking text-brand-brass mt-1 mr-4 text-xl"></i>
                    <div>
                      <p class="font-semibold text-brand-anthrazit">Parken</p>
                      <p class="text-gray-700">
                        Kostenlose Parkplätze direkt vor dem Showroom
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-8">
                  <a href="#termin" class="btn-primary w-full text-center">
                    <i class="fas fa-calendar-alt mr-2"></i>
                    Showroom-Termin vereinbaren
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div class="bg-white border-2 border-brand-brass rounded-lg p-8">
                <h3 class="text-xl font-bold text-brand-anthrazit mb-4">Direkter Kontakt</h3>
                
                <div class="space-y-4">
                  <div>
                    <p class="text-sm text-gray-600 mb-2">Vertrieb & Beratung</p>
                    <a href="tel:+496002123457" class="flex items-center text-brand-anthrazit hover:text-brand-brass">
                      <i class="fas fa-phone mr-2"></i>
                      +49 (0) 6002 123 457
                    </a>
                  </div>

                  <div>
                    <p class="text-sm text-gray-600 mb-2">Projektanfragen</p>
                    <a href="mailto:projekte@brandstifter.online" class="flex items-center text-brand-anthrazit hover:text-brand-brass">
                      <i class="fas fa-envelope mr-2"></i>
                      projekte@brandstifter.online
                    </a>
                  </div>

                  <div>
                    <p class="text-sm text-gray-600 mb-2">Architekten & Planer</p>
                    <a href="mailto:architekten@brandstifter.online" class="flex items-center text-brand-anthrazit hover:text-brand-brass">
                      <i class="fas fa-envelope mr-2"></i>
                      architekten@brandstifter.online
                    </a>
                  </div>

                  <div>
                    <p class="text-sm text-gray-600 mb-2">B2B & Corporate</p>
                    <a href="mailto:b2b@brandstifter.online" class="flex items-center text-brand-anthrazit hover:text-brand-brass">
                      <i class="fas fa-envelope mr-2"></i>
                      b2b@brandstifter.online
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div class="mt-8 text-center">
                <h3 class="text-lg font-semibold text-brand-anthrazit mb-4">Folgen Sie uns</h3>
                <div class="flex justify-center space-x-4">
                  <a href="#" class="w-12 h-12 bg-brand-anthrazit text-white rounded-full flex items-center justify-center hover:bg-brand-brass transition">
                    <i class="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" class="w-12 h-12 bg-brand-anthrazit text-white rounded-full flex items-center justify-center hover:bg-brand-brass transition">
                    <i class="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a href="#" class="w-12 h-12 bg-brand-anthrazit text-white rounded-full flex items-center justify-center hover:bg-brand-brass transition">
                    <i class="fab fa-linkedin-in text-xl"></i>
                  </a>
                  <a href="#" class="w-12 h-12 bg-brand-anthrazit text-white rounded-full flex items-center justify-center hover:bg-brand-brass transition">
                    <i class="fab fa-pinterest-p text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-display text-brand-anthrazit mb-8 text-center">Anfahrt</h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div class="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div class="text-center">
                <i class="fas fa-map-marked-alt text-6xl text-gray-400 mb-4"></i>
                <p class="text-gray-600">Interaktive Karte</p>
                <a href="https://maps.google.com/?q=Dieselstraße+15,+61239+Ober-Mörlen" 
                   target="_blank" 
                   class="text-brand-brass hover:underline mt-2 inline-block">
                  In Google Maps öffnen →
                </a>
              </div>
            </div>

            {/* Directions */}
            <div>
              <h3 class="text-2xl font-bold text-brand-anthrazit mb-6">So finden Sie uns</h3>
              
              <div class="space-y-6">
                <div>
                  <h4 class="font-semibold text-brand-anthrazit mb-2">
                    <i class="fas fa-car mr-2 text-brand-brass"></i>
                    Mit dem Auto
                  </h4>
                  <p class="text-gray-700">
                    Über die A5: Ausfahrt Bad Nauheim, dann B3 Richtung Butzbach, 
                    Abfahrt Ober-Mörlen. Im Industriegebiet der Dieselstraße folgen.
                  </p>
                </div>

                <div>
                  <h4 class="font-semibold text-brand-anthrazit mb-2">
                    <i class="fas fa-train mr-2 text-brand-brass"></i>
                    Mit der Bahn
                  </h4>
                  <p class="text-gray-700">
                    S-Bahn S6 bis Bad Vilbel, dann Regionalbahn nach Butzbach, 
                    Ausstieg Ober-Mörlen. Vom Bahnhof 10 Minuten Fußweg oder Taxi.
                  </p>
                </div>

                <div>
                  <h4 class="font-semibold text-brand-anthrazit mb-2">
                    <i class="fas fa-plane mr-2 text-brand-brass"></i>
                    Vom Flughafen Frankfurt
                  </h4>
                  <p class="text-gray-700">
                    Ca. 35 Minuten mit dem Auto über A5 Richtung Kassel. 
                    Oder S-Bahn zum Hauptbahnhof, dann weiter mit Regionalbahn.
                  </p>
                </div>
              </div>

              <div class="mt-8 p-6 bg-brand-greige rounded-lg">
                <p class="font-semibold text-brand-anthrazit mb-2">Tipp für Ihre Anreise:</p>
                <p class="text-gray-700">
                  Vereinbaren Sie vorab einen Termin, damit wir uns ausreichend Zeit 
                  für Ihre Beratung nehmen können. Kostenlose Parkplätze sind direkt 
                  vor dem Showroom verfügbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-gradient-to-r from-brand-brass to-brand-oak text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-display mb-6">Lassen Sie uns über Ihr Projekt sprechen</h2>
          <p class="text-xl mb-8 max-w-2xl mx-auto">
            Egal ob Küche, Bad, Ladenbau oder Gastronomie – wir haben die Expertise 
            und Leidenschaft, Ihre Vision zu verwirklichen.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+496002123456" class="btn-white-large">
              <i class="fas fa-phone mr-2"></i>
              Jetzt anrufen
            </a>
            <a href="#contact-form" class="btn-white-outline-large">
              <i class="fas fa-envelope mr-2"></i>
              Nachricht senden
            </a>
          </div>
        </div>
      </section>
    </>,
    { 
      title: 'Kontakt | Brandstifter Urban Manufactur',
      description: 'Kontaktieren Sie Brandstifter Urban Manufactur. Showroom in Ober-Mörlen, Wetterau. Beratungstermine für Küchen, Badmöbel, Ladenbau und mehr.'
    }
  )
})