export const translations = {
  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      projects: 'Projekte',
      blog: 'Blog',
      contact: 'Kontakt',
      about: 'Über Uns',
      manufactory: 'Manufaktur',
      downloads: 'Downloads'
    },
    services: {
      kitchen: {
        title: 'Küchenmöbel',
        description: 'Maßgeschneiderte Küchen für Ihr Zuhause'
      },
      bathroom: {
        title: 'Badmöbel',
        description: 'Individuelle Badezimmerlösungen'
      },
      retail: {
        title: 'Ladenbau',
        description: 'Professionelle Ladeneinrichtungen'
      },
      restaurant: {
        title: 'Gastronomie',
        description: 'Einrichtungen für Restaurants und Cafés'
      },
      office: {
        title: 'Büromöbel',
        description: 'Ergonomische Arbeitsplatzlösungen'
      },
      outdoor: {
        title: 'Outdoor',
        description: 'Wetterfeste Terrassenmöbel'
      }
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      privacy: 'Datenschutz',
      imprint: 'Impressum'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
      about: 'About Us',
      manufactory: 'Manufactory',
      downloads: 'Downloads'
    },
    services: {
      kitchen: {
        title: 'Kitchen Furniture',
        description: 'Custom kitchens for your home'
      },
      bathroom: {
        title: 'Bathroom Furniture',
        description: 'Individual bathroom solutions'
      },
      retail: {
        title: 'Shop Fitting',
        description: 'Professional store furnishings'
      },
      restaurant: {
        title: 'Gastronomy',
        description: 'Furnishings for restaurants and cafés'
      },
      office: {
        title: 'Office Furniture',
        description: 'Ergonomic workplace solutions'
      },
      outdoor: {
        title: 'Outdoor',
        description: 'Weather-resistant patio furniture'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      imprint: 'Imprint'
    }
  }
}

export function getI18n(lang: 'de' | 'en' = 'de') {
  return translations[lang]
}

export function detectLanguage(acceptLanguage?: string): 'de' | 'en' {
  if (!acceptLanguage) return 'de'
  
  const languages = acceptLanguage.split(',').map(lang => {
    const parts = lang.split(';')
    return parts[0].trim().toLowerCase()
  })
  
  for (const lang of languages) {
    if (lang.startsWith('en')) return 'en'
    if (lang.startsWith('de')) return 'de'
  }
  
  return 'de'
}