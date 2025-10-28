/**
 * SEO Meta Tag Generator for Brandstifter Urban Manufactur
 * Generates optimized meta tags for each page
 */

import { seoConfig } from '../config/seo-config'
import type { Language } from '../lib/i18n'

interface MetaTagsProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  lang?: Language
  noindex?: boolean
  structuredData?: any
}

export function generateMetaTags({
  title,
  description,
  keywords = [],
  image,
  url = 'https://brandstifter.online',
  type = 'website',
  lang = 'de',
  noindex = false,
  structuredData
}: MetaTagsProps): string {
  const { company, meta, openGraph } = seoConfig

  // Prepare final values
  const finalTitle = title 
    ? `${title} | ${company.brand}` 
    : meta.defaultTitle[lang]
  
  const finalDescription = description || meta.defaultDescription[lang]
  const finalImage = image || openGraph.image
  const finalKeywords = [...keywords, ...seoConfig.keywords.global].join(', ')

  // Generate meta tags HTML
  return `
    <!-- Primary Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${finalTitle}</title>
    <meta name="title" content="${finalTitle}">
    <meta name="description" content="${finalDescription}">
    <meta name="keywords" content="${finalKeywords}">
    <meta name="author" content="${company.name}">
    <meta name="publisher" content="${company.brand}">
    <meta name="copyright" content="${company.name}">
    <meta name="robots" content="${noindex ? 'noindex, nofollow' : 'index, follow'}">
    <meta name="language" content="${lang === 'de' ? 'German' : 'English'}">
    <meta name="revisit-after" content="7 days">
    <meta name="distribution" content="global">
    <meta name="rating" content="general">
    
    <!-- Geo Tags for Local SEO -->
    <meta name="geo.region" content="DE-HE">
    <meta name="geo.placename" content="Ober-Mörlen">
    <meta name="geo.position" content="${seoConfig.contact.coordinates.latitude};${seoConfig.contact.coordinates.longitude}">
    <meta name="ICBM" content="${seoConfig.contact.coordinates.latitude}, ${seoConfig.contact.coordinates.longitude}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${type}">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${finalTitle}">
    <meta property="og:description" content="${finalDescription}">
    <meta property="og:image" content="${finalImage}">
    <meta property="og:image:width" content="${openGraph.imageWidth}">
    <meta property="og:image:height" content="${openGraph.imageHeight}">
    <meta property="og:locale" content="${lang === 'de' ? 'de_DE' : 'en_US'}">
    <meta property="og:site_name" content="${openGraph.siteName}">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${url}">
    <meta property="twitter:title" content="${finalTitle}">
    <meta property="twitter:description" content="${finalDescription}">
    <meta property="twitter:image" content="${finalImage}">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${url}">
    
    <!-- Language Alternates -->
    <link rel="alternate" hreflang="de" href="${url.replace('?lang=en', '?lang=de')}">
    <link rel="alternate" hreflang="en" href="${url.replace('?lang=de', '?lang=en')}">
    <link rel="alternate" hreflang="x-default" href="${url.split('?')[0]}">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    
    <!-- Structured Data -->
    ${structuredData ? `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>` : ''}
  `.trim()
}

export function generatePageMetaTags(page: string, lang: Language = 'de'): string {
  const { keywords, structuredData } = seoConfig
  
  const pageConfigs: Record<string, MetaTagsProps> = {
    home: {
      title: lang === 'de' 
        ? 'Premium Innenausbau & Raumkonzepte' 
        : 'Premium Interior Design & Concepts',
      description: lang === 'de'
        ? 'Brandstifter Urban Manufactur - Ihre Premium-Manufaktur für individuelle Raumkonzepte in Ober-Mörlen. Küchen, Ladenbau, Gastronomie & mehr. ✓ Terminsicher ✓ Budgettreu'
        : 'Brandstifter Urban Manufactory - Your premium manufactory for individual room concepts in Germany. Kitchens, retail, hospitality & more. ✓ On-time ✓ On-budget',
      keywords: keywords.home[lang],
      structuredData: {
        ...structuredData.organization,
        ...structuredData.localBusiness
      }
    },
    kitchen: {
      title: lang === 'de'
        ? 'Küchen nach Maß - Premium Küchenmanufaktur'
        : 'Custom Kitchens - Premium Kitchen Manufactory',
      description: lang === 'de'
        ? 'Maßgefertigte Premium-Küchen von Brandstifter. ✓ Individuelle Planung ✓ In-House Fertigung ✓ Hochwertige Materialien. Jetzt Beratungstermin in Ober-Mörlen vereinbaren!'
        : 'Custom-made premium kitchens by Brandstifter. ✓ Individual planning ✓ In-house production ✓ High-quality materials. Book your consultation in Germany now!',
      keywords: keywords.kitchen[lang],
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: lang === 'de' ? 'Maßküchen' : 'Custom Kitchens',
        brand: 'Brandstifter Urban Manufactur',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          priceRange: '€€€',
          availability: 'https://schema.org/InStock',
          seller: structuredData.organization
        }
      }
    },
    retail: {
      title: lang === 'de'
        ? 'Ladenbau & Shop Design - Retail Innenausbau'
        : 'Shop Fitting & Store Design - Retail Interiors',
      description: lang === 'de'
        ? 'Professioneller Ladenbau von Brandstifter. ✓ Shop Design ✓ Ladeneinrichtung ✓ Visual Merchandising. Für Retail, Fashion & mehr in Frankfurt und Hessen.'
        : 'Professional shop fitting by Brandstifter. ✓ Store design ✓ Shop interiors ✓ Visual merchandising. For retail, fashion & more in Frankfurt and Hessen.',
      keywords: keywords.retail[lang]
    },
    gastronomy: {
      title: lang === 'de'
        ? 'Gastronomie Einrichtung - Restaurant & Bar Design'
        : 'Hospitality Interiors - Restaurant & Bar Design',
      description: lang === 'de'
        ? 'Einzigartige Gastronomie-Konzepte von Brandstifter. ✓ Restaurant Design ✓ Bar Einrichtung ✓ Café Interiors. Schaffen Sie unvergessliche Gästeerlebnisse!'
        : 'Unique hospitality concepts by Brandstifter. ✓ Restaurant design ✓ Bar interiors ✓ Café fitouts. Create unforgettable guest experiences!',
      keywords: keywords.gastronomy[lang]
    },
    office: {
      title: lang === 'de'
        ? 'Büroeinrichtung - Office Design & Workspace'
        : 'Office Furniture - Office Design & Workspace',
      description: lang === 'de'
        ? 'Moderne Bürokonzepte von Brandstifter. ✓ Office Design ✓ Workspace Solutions ✓ Corporate Interiors. Für produktives Arbeiten in Frankfurt und Umgebung.'
        : 'Modern office concepts by Brandstifter. ✓ Office design ✓ Workspace solutions ✓ Corporate interiors. For productive work in Frankfurt and surroundings.',
      keywords: keywords.office[lang]
    },
    about: {
      title: lang === 'de'
        ? 'Über Uns - Urban Manufaktur seit 2008'
        : 'About Us - Urban Manufactory since 2008',
      description: lang === 'de'
        ? 'Amp & Brandstifter GmbH - Ihre Urban Manufaktur für Premium Innenausbau. Integration von Architektur, Handwerk & Projektmanagement. Erfahren Sie mehr über uns!'
        : 'Amp & Brandstifter GmbH - Your urban manufactory for premium interiors. Integration of architecture, craftsmanship & project management. Learn more about us!',
      keywords: [...keywords.global, 'Team Brandstifter', 'Urban Manufaktur Geschichte']
    },
    contact: {
      title: lang === 'de'
        ? 'Kontakt - Beratungstermin vereinbaren'
        : 'Contact - Book Your Consultation',
      description: lang === 'de'
        ? 'Kontaktieren Sie Brandstifter Urban Manufactur. ✆ +49 6002 939350 ✉ info@brandstifter.online 📍 Dieselstraße 15, 61239 Ober-Mörlen. Jetzt Termin vereinbaren!'
        : 'Contact Brandstifter Urban Manufactory. ✆ +49 6002 939350 ✉ info@brandstifter.online 📍 Dieselstraße 15, 61239 Ober-Mörlen, Germany. Book now!',
      keywords: ['Kontakt Brandstifter', 'Beratungstermin', 'Showroom Ober-Mörlen']
    }
  }

  return generateMetaTags(pageConfigs[page] || {})
}

// Helper function for React components
export function MetaTags({ page, lang = 'de' }: { page: string; lang?: Language }) {
  const metaHTML = generatePageMetaTags(page, lang)
  return <div dangerouslySetInnerHTML={{ __html: metaHTML }} />
}