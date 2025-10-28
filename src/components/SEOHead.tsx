/**
 * SEO Head Component
 * Comprehensive SEO integration for Brandstifter Urban Manufactur
 */

import { seoConfig } from '../config/seo-config'
import type { Language } from '../lib/i18n'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  lang?: Language
  noindex?: boolean
  page?: string
}

export function SEOHead({
  title,
  description,
  keywords = [],
  image,
  url = 'https://brandstifter.online',
  type = 'website',
  lang = 'de',
  noindex = false,
  page
}: SEOHeadProps) {
  const { company, contact, meta, openGraph } = seoConfig

  // Get page-specific keywords if page is specified
  let pageKeywords = keywords
  if (page && seoConfig.keywords[page]) {
    pageKeywords = [...keywords, ...(seoConfig.keywords[page][lang] || [])]
  }

  // Prepare final values
  const finalTitle = title 
    ? `${title} | ${company.brand}` 
    : meta.defaultTitle[lang]
  
  const finalDescription = description || meta.defaultDescription[lang]
  const finalImage = image || 'https://brandstifter.online/og-image.jpg'
  const finalKeywords = [...pageKeywords, ...seoConfig.keywords.global]
  
  // Generate structured data
  const structuredData = {
    ...seoConfig.structuredData.organization,
    ...seoConfig.structuredData.localBusiness,
    // Add breadcrumbs
    ...(page && {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': lang === 'de' ? 'Startseite' : 'Home',
          'item': 'https://brandstifter.online'
        },
        ...(page !== 'home' ? [{
          '@type': 'ListItem',
          'position': 2,
          'name': finalTitle.split(' | ')[0],
          'item': url
        }] : [])
      ]
    })
  }

  return (
    <>
      {/* Primary Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      <meta name="author" content={company.name} />
      <meta name="publisher" content={company.brand} />
      <meta name="copyright" content={company.name} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      <meta name="language" content={lang === 'de' ? 'German' : 'English'} />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="DE-HE" />
      <meta name="geo.placename" content="Ober-Mörlen" />
      <meta name="geo.position" content={`${contact.coordinates.latitude};${contact.coordinates.longitude}`} />
      <meta name="ICBM" content={`${contact.coordinates.latitude}, ${contact.coordinates.longitude}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={company.brand} />
      <meta property="og:locale" content={lang === 'de' ? 'de_DE' : 'en_US'} />
      <meta property="og:locale:alternate" content={lang === 'de' ? 'en_US' : 'de_DE'} />
      <meta property="og:site_name" content={openGraph.siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalImage} />
      <meta property="twitter:site" content="@brandstifter" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="de" href={url.replace('?lang=en', '?lang=de')} />
      <link rel="alternate" hrefLang="en" href={url.replace('?lang=de', '?lang=en')} />
      <link rel="alternate" hrefLang="x-default" href={url.split('?')[0]} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      <link rel="dns-prefetch" href="https://cdn.tailwindcss.com" />
      
      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Additional Business Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": finalTitle,
            "description": finalDescription,
            "url": url,
            "inLanguage": lang === 'de' ? 'de-DE' : 'en-US',
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://brandstifter.online/#website",
              "name": company.brand,
              "url": "https://brandstifter.online"
            },
            "about": {
              "@type": "Thing",
              "name": "Interior Design and Custom Furniture"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": finalImage
            },
            "datePublished": "2008-01-01",
            "dateModified": new Date().toISOString()
          })
        }}
      />
    </>
  )
}