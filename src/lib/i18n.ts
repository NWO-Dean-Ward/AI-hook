// i18n - Internationalization System for Multi-Language Support
import type { Context } from 'hono'

// Available languages
export const languages = ['de', 'en'] as const
export type Language = typeof languages[number]

// Default language
export const defaultLanguage: Language = 'de'

// Get language from various sources
export function getLanguage(c: Context): Language {
  // 1. Check URL parameter (?lang=en)
  const urlLang = c.req.query('lang')
  if (urlLang && languages.includes(urlLang as Language)) {
    return urlLang as Language
  }

  // 2. Check cookie
  const cookieLang = c.req.cookie('language')
  if (cookieLang && languages.includes(cookieLang as Language)) {
    return cookieLang as Language
  }

  // 3. Check Accept-Language header
  const acceptLanguage = c.req.header('Accept-Language')
  if (acceptLanguage) {
    const browserLang = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()
    if (languages.includes(browserLang as Language)) {
      return browserLang as Language
    }
  }

  // 4. Return default
  return defaultLanguage
}

// Translation type
export type TranslationKey = keyof typeof translations.de

// Translations object
export const translations = {
  de: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Leistungen',
    'nav.projects': 'Projekte',
    'nav.manufactory': 'Manufaktur',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.downloads': 'Downloads',
    'nav.for_you': 'Für Sie',
    
    // Service Categories
    'service.kitchen': 'Küchen & Wohnkonzepte',
    'service.bathroom': 'Badmöbel & Wellness',
    'service.retail': 'Ladenbau & Retail',
    'service.gastronomy': 'Gastronomie & Hospitality',
    'service.office': 'Büro & Workspaces',
    'service.outdoor': 'Outdoor & Terrassen',
    
    // Customer Types
    'customer.private': 'Privatkunden & Bauherren',
    'customer.architects': 'Architekten & Planer',
    'customer.contractors': 'Generalunternehmer',
    'customer.b2b': 'Business & Corporate',
    
    // Common Actions
    'action.learn_more': 'Mehr erfahren',
    'action.contact': 'Kontakt aufnehmen',
    'action.request_consultation': 'Beratung anfordern',
    'action.download': 'Herunterladen',
    'action.view_projects': 'Projekte ansehen',
    'action.book_appointment': 'Termin vereinbaren',
    'action.request_quote': 'Angebot anfordern',
    'action.call_now': 'Jetzt anrufen',
    'action.send_message': 'Nachricht senden',
    'action.subscribe': 'Abonnieren',
    
    // Homepage
    'home.hero.title': 'Wo Handwerk auf Design trifft',
    'home.hero.subtitle': 'Premium-Manufaktur für individuelle Raumkonzepte',
    'home.hero.cta1': 'Projekte entdecken',
    'home.hero.cta2': 'Kostenlose Beratung',
    'home.trust.years': 'Jahre Erfahrung',
    'home.trust.projects': 'Projekte',
    'home.trust.employees': 'Mitarbeiter',
    'home.trust.satisfaction': 'Zufriedenheit',
    
    // Services Overview
    'services.title': 'Unsere Leistungen',
    'services.subtitle': 'Maßgeschneiderte Lösungen für jeden Raum',
    'services.process.title': 'Unser Prozess',
    'services.process.consultation': 'Erstberatung',
    'services.process.consultation.desc': 'Kostenloses Erstgespräch in unserem Showroom oder bei Ihnen vor Ort.',
    'services.process.concept': 'Konzeption',
    'services.process.concept.desc': 'Entwicklung Ihres individuellen Konzepts mit 3D-Visualisierung.',
    'services.process.production': 'Produktion',
    'services.process.production.desc': 'Präzise Fertigung in unserer hauseigenen Manufaktur.',
    'services.process.installation': 'Montage',
    'services.process.installation.desc': 'Professionelle Installation durch unser erfahrenes Team.',
    
    // About Us
    'about.hero.title': 'Wo Tradition auf Innovation trifft',
    'about.hero.subtitle': 'Seit 2008 gestalten wir Räume, die begeistern',
    'about.history.title': 'Unsere Geschichte',
    'about.team.title': 'Unser Team',
    'about.team.subtitle': '45 Experten aus Handwerk, Design und Projektmanagement arbeiten Hand in Hand für Ihren Erfolg',
    'about.values.title': 'Unsere Werte',
    'about.values.quality': 'Qualität',
    'about.values.innovation': 'Innovation',
    'about.values.sustainability': 'Nachhaltigkeit',
    'about.values.trust': 'Vertrauen',
    'about.values.teamwork': 'Teamwork',
    'about.values.passion': 'Leidenschaft',
    
    // Contact
    'contact.title': 'Kontakt aufnehmen',
    'contact.subtitle': 'Wir freuen uns auf Ihr Projekt',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.phone': 'Telefon',
    'contact.form.company': 'Firma',
    'contact.form.project': 'Projektart',
    'contact.form.budget': 'Budget',
    'contact.form.timeline': 'Zeitrahmen',
    'contact.form.message': 'Nachricht',
    'contact.form.privacy': 'Ich habe die Datenschutzerklärung gelesen und akzeptiert.',
    'contact.form.submit': 'Anfrage senden',
    'contact.showroom.title': 'Showroom & Werkstatt',
    'contact.showroom.address': 'Am Goldberg 2, 61239 Ober-Mörlen',
    'contact.showroom.hours': 'Öffnungszeiten',
    'contact.showroom.monday_friday': 'Montag - Freitag',
    'contact.showroom.saturday': 'Samstag',
    'contact.showroom.sunday': 'Sonntag: Geschlossen',
    
    // Projects
    'projects.title': 'Unsere Projekte',
    'projects.subtitle': 'Lassen Sie sich inspirieren',
    'projects.filter.all': 'Alle',
    'projects.filter.year': 'Jahr',
    'projects.filter.category': 'Kategorie',
    'projects.filter.client': 'Kundentyp',
    
    // Footer
    'footer.company': 'Premium-Manufaktur für individuelle Raumkonzepte. Made in Wetterau seit 2008.',
    'footer.services': 'Leistungen',
    'footer.company.title': 'Unternehmen',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.rights': 'Alle Rechte vorbehalten.',
    
    // Language Switcher
    'language.german': 'Deutsch',
    'language.english': 'English',
    'language.switch': 'Sprache wechseln',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.manufactory': 'Manufactory',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.downloads': 'Downloads',
    'nav.for_you': 'For You',
    
    // Service Categories
    'service.kitchen': 'Kitchens & Living Concepts',
    'service.bathroom': 'Bathroom Furniture & Wellness',
    'service.retail': 'Shop Fitting & Retail',
    'service.gastronomy': 'Gastronomy & Hospitality',
    'service.office': 'Office & Workspaces',
    'service.outdoor': 'Outdoor & Terraces',
    
    // Customer Types
    'customer.private': 'Private Clients & Builders',
    'customer.architects': 'Architects & Planners',
    'customer.contractors': 'General Contractors',
    'customer.b2b': 'Business & Corporate',
    
    // Common Actions
    'action.learn_more': 'Learn More',
    'action.contact': 'Get in Touch',
    'action.request_consultation': 'Request Consultation',
    'action.download': 'Download',
    'action.view_projects': 'View Projects',
    'action.book_appointment': 'Book Appointment',
    'action.request_quote': 'Request Quote',
    'action.call_now': 'Call Now',
    'action.send_message': 'Send Message',
    'action.subscribe': 'Subscribe',
    
    // Homepage
    'home.hero.title': 'Where Craftsmanship Meets Design',
    'home.hero.subtitle': 'Premium manufactory for individual room concepts',
    'home.hero.cta1': 'Explore Projects',
    'home.hero.cta2': 'Free Consultation',
    'home.trust.years': 'Years Experience',
    'home.trust.projects': 'Projects',
    'home.trust.employees': 'Employees',
    'home.trust.satisfaction': 'Satisfaction',
    
    // Services Overview
    'services.title': 'Our Services',
    'services.subtitle': 'Tailored solutions for every space',
    'services.process.title': 'Our Process',
    'services.process.consultation': 'Initial Consultation',
    'services.process.consultation.desc': 'Free initial consultation in our showroom or at your location.',
    'services.process.concept': 'Concept Design',
    'services.process.concept.desc': 'Development of your individual concept with 3D visualization.',
    'services.process.production': 'Production',
    'services.process.production.desc': 'Precise manufacturing in our in-house factory.',
    'services.process.installation': 'Installation',
    'services.process.installation.desc': 'Professional installation by our experienced team.',
    
    // About Us
    'about.hero.title': 'Where Tradition Meets Innovation',
    'about.hero.subtitle': 'Creating inspiring spaces since 2008',
    'about.history.title': 'Our Story',
    'about.team.title': 'Our Team',
    'about.team.subtitle': '45 experts from crafts, design and project management work hand in hand for your success',
    'about.values.title': 'Our Values',
    'about.values.quality': 'Quality',
    'about.values.innovation': 'Innovation',
    'about.values.sustainability': 'Sustainability',
    'about.values.trust': 'Trust',
    'about.values.teamwork': 'Teamwork',
    'about.values.passion': 'Passion',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We look forward to your project',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.company': 'Company',
    'contact.form.project': 'Project Type',
    'contact.form.budget': 'Budget',
    'contact.form.timeline': 'Timeline',
    'contact.form.message': 'Message',
    'contact.form.privacy': 'I have read and accept the privacy policy.',
    'contact.form.submit': 'Send Request',
    'contact.showroom.title': 'Showroom & Workshop',
    'contact.showroom.address': 'Am Goldberg 2, 61239 Ober-Mörlen, Germany',
    'contact.showroom.hours': 'Opening Hours',
    'contact.showroom.monday_friday': 'Monday - Friday',
    'contact.showroom.saturday': 'Saturday',
    'contact.showroom.sunday': 'Sunday: Closed',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Get inspired',
    'projects.filter.all': 'All',
    'projects.filter.year': 'Year',
    'projects.filter.category': 'Category',
    'projects.filter.client': 'Client Type',
    
    // Footer
    'footer.company': 'Premium manufactory for individual room concepts. Made in Wetterau since 2008.',
    'footer.services': 'Services',
    'footer.company.title': 'Company',
    'footer.legal': 'Legal',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.rights': 'All rights reserved.',
    
    // Language Switcher
    'language.german': 'Deutsch',
    'language.english': 'English',
    'language.switch': 'Switch Language',
  }
}

// Translation function
export function t(key: TranslationKey, lang: Language = defaultLanguage): string {
  return translations[lang][key] || translations[defaultLanguage][key] || key
}

// Helper function to create translated component
export function createTranslator(c: Context) {
  const lang = getLanguage(c)
  
  return {
    lang,
    t: (key: TranslationKey) => t(key, lang),
    switchUrl: (targetLang: Language) => {
      const url = new URL(c.req.url)
      url.searchParams.set('lang', targetLang)
      return url.toString()
    }
  }
}

// Middleware to set language cookie
export function setLanguageCookie(c: Context, lang: Language) {
  c.cookie('language', lang, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: false,
    sameSite: 'Lax'
  })
}