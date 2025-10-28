/**
 * SEO Configuration for Amp & Brandstifter GmbH
 * Premium Urban Manufactory - Brandstifter.online
 */

export const seoConfig = {
  // Company Information
  company: {
    name: 'Amp & Brandstifter GmbH',
    legalName: 'Amp & Brandstifter GmbH',
    brand: 'Brandstifter Urban Manufactur',
    tagline: {
      de: 'Deine Träume sind nicht zu groß. Nur zu wenig gebaut.',
      en: 'Unleash your brand\'s potential'
    },
    description: {
      de: 'Premium-Manufaktur für individuelle Raumkonzepte. Integration von Architektur, Handwerk und Projektmanagement für einzigartige Innenausbau-Lösungen.',
      en: 'Premium urban manufactory for individual room concepts. Integration of architecture, craftsmanship and project management for unique interior solutions.'
    }
  },

  // Contact & Location
  contact: {
    phone: '+49 6002 939350',
    email: 'info@brandstifter.online',
    address: {
      street: 'Dieselstraße 15',
      postalCode: '61239',
      city: 'Ober-Mörlen',
      region: 'Hessen',
      country: 'Deutschland',
      countryCode: 'DE'
    },
    coordinates: {
      latitude: 50.3681,
      longitude: 8.6944
    },
    serviceArea: [
      'Wetteraukreis',
      'Frankfurt am Main',
      'Rhein-Main-Gebiet',
      'Hessen',
      'Deutschland',
      'International'
    ]
  },

  // Business Hours
  businessHours: {
    monday: { open: '09:00', close: '18:00' },
    tuesday: { open: '09:00', close: '18:00' },
    wednesday: { open: '09:00', close: '18:00' },
    thursday: { open: '09:00', close: '18:00' },
    friday: { open: '09:00', close: '18:00' },
    saturday: null,
    sunday: null
  },

  // Social Media
  social: {
    instagram: 'https://www.instagram.com/dieschreinerei/',
    facebook: 'https://www.facebook.com/brandstifter',
    linkedin: 'https://www.linkedin.com/company/brandstifter',
    pinterest: 'https://www.pinterest.de/brandstifter'
  },

  // Keywords by Page
  keywords: {
    global: [
      'Brandstifter Urban Manufactur',
      'Amp & Brandstifter GmbH',
      'Innenausbau Hessen',
      'Manufaktur Ober-Mörlen',
      'Premium Raumkonzepte',
      'Generalunternehmer Innenausbau'
    ],
    home: {
      de: [
        'Brandstifter Urban Manufactur',
        'Innenausbau Wetterau',
        'Raumkonzepte Frankfurt',
        'Manufaktur Ober-Mörlen',
        'Premium Innenarchitektur Hessen'
      ],
      en: [
        'Brandstifter Urban Manufactory',
        'Interior Design Germany',
        'Custom Furniture Frankfurt',
        'Premium Interiors Hessen'
      ]
    },
    kitchen: {
      de: [
        'Küchen nach Maß Ober-Mörlen',
        'Maßküchen Wetterau',
        'Premium Küchen Frankfurt',
        'Küchenmanufaktur Hessen',
        'Designer Küchen Rhein-Main'
      ],
      en: [
        'Custom Kitchens Germany',
        'Bespoke Kitchen Frankfurt',
        'Premium Kitchen Design',
        'Kitchen Manufactory Hessen'
      ]
    },
    retail: {
      de: [
        'Ladenbau Hessen',
        'Shop Design Frankfurt',
        'Retail Innenausbau',
        'Ladeneinrichtung Wetterau',
        'Store Design Rhein-Main'
      ],
      en: [
        'Shop Fitting Germany',
        'Retail Design Frankfurt',
        'Store Interior Design',
        'Commercial Interiors Hessen'
      ]
    },
    gastronomy: {
      de: [
        'Gastronomie Einrichtung',
        'Restaurant Design Frankfurt',
        'Bar Innenausbau Hessen',
        'Café Einrichtung Wetterau',
        'Hospitality Design'
      ],
      en: [
        'Restaurant Interior Design',
        'Hospitality Furniture Germany',
        'Bar Design Frankfurt',
        'Café Interiors'
      ]
    },
    office: {
      de: [
        'Büroeinrichtung Frankfurt',
        'Office Design Hessen',
        'Büromöbel nach Maß',
        'Workspace Design Wetterau',
        'Corporate Interiors'
      ],
      en: [
        'Office Design Germany',
        'Corporate Interiors Frankfurt',
        'Custom Office Furniture',
        'Workspace Solutions'
      ]
    }
  },

  // Meta Tags Templates
  meta: {
    titleTemplate: {
      de: '%s | Brandstifter Urban Manufactur - Premium Innenausbau',
      en: '%s | Brandstifter Urban Manufactory - Premium Interiors'
    },
    defaultTitle: {
      de: 'Brandstifter Urban Manufactur | Premium Innenausbau & Raumkonzepte',
      en: 'Brandstifter Urban Manufactory | Premium Interior Design & Concepts'
    },
    defaultDescription: {
      de: 'Premium-Manufaktur für individuelle Raumkonzepte in Ober-Mörlen. ✓ Küchen ✓ Ladenbau ✓ Gastronomie ✓ Büro. Terminsicher & budgettreu seit 2008.',
      en: 'Premium manufactory for individual room concepts in Germany. ✓ Kitchens ✓ Retail ✓ Hospitality ✓ Office. On-time & on-budget since 2008.'
    }
  },

  // Open Graph & Twitter Cards
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'en_US',
    siteName: 'Brandstifter Urban Manufactur',
    image: '/images/og-image.jpg',
    imageWidth: 1200,
    imageHeight: 630
  },

  // Structured Data Templates
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Corporation',
      name: 'Amp & Brandstifter GmbH',
      alternateName: 'Brandstifter Urban Manufactur',
      url: 'https://brandstifter.online',
      logo: 'https://brandstifter.online/logo.png',
      sameAs: [
        'https://www.instagram.com/dieschreinerei/',
        'https://www.facebook.com/brandstifter',
        'https://www.linkedin.com/company/brandstifter'
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dieselstraße 15',
        addressLocality: 'Ober-Mörlen',
        addressRegion: 'Hessen',
        postalCode: '61239',
        addressCountry: 'DE'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+49-6002-939350',
        contactType: 'sales',
        availableLanguage: ['German', 'English']
      },
      areaServed: [
        {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 50.3681,
            longitude: 8.6944
          },
          geoRadius: '100km'
        },
        {
          '@type': 'Country',
          name: 'Germany'
        }
      ]
    },
    localBusiness: {
      '@context': 'https://schema.org',
      '@type': 'InteriorDesignBusiness',
      name: 'Brandstifter Urban Manufactur',
      image: 'https://brandstifter.online/showroom.jpg',
      '@id': 'https://brandstifter.online',
      url: 'https://brandstifter.online',
      telephone: '+49-6002-939350',
      priceRange: '€€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dieselstraße 15',
        addressLocality: 'Ober-Mörlen',
        addressRegion: 'Hessen',
        postalCode: '61239',
        addressCountry: 'DE'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 50.3681,
        longitude: 8.6944
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Interior Design Services',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Küchen & Wohnkonzepte',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Küchenplanung' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maßküchen' } }
            ]
          },
          {
            '@type': 'OfferCatalog',
            name: 'Ladenbau & Retail',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shop Design' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ladeneinrichtung' } }
            ]
          },
          {
            '@type': 'OfferCatalog',
            name: 'Gastronomie & Hospitality',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restaurant Design' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bar Einrichtung' } }
            ]
          }
        ]
      }
    }
  },

  // Competitor Keywords to Target
  competitorKeywords: [
    'Alternative zu Reimer Raumausstattung',
    'Premium Innenausbau Wetterau',
    'Hochwertige Polsterei Hessen',
    'Maßmöbel Frankfurt Umgebung',
    'Designer Möbel Wetteraukreis'
  ],

  // USP Keywords
  uspKeywords: {
    de: [
      'Terminsicherheit Innenausbau',
      'Budgettreue Raumkonzepte',
      'In-House Manufaktur',
      'Ganzheitliche Projektbetreuung',
      'Brand Storytelling Raumdesign'
    ],
    en: [
      'On-time interior delivery',
      'Budget-conscious design',
      'In-house manufacturing',
      'Complete project management',
      'Brand storytelling spaces'
    ]
  }
}