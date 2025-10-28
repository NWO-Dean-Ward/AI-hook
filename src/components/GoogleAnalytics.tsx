/**
 * Google Analytics 4 & Tag Manager Integration
 * For Brandstifter Urban Manufactur
 */

export const GoogleAnalytics = ({ measurementId = 'G-XXXXXXXXXX' }: { measurementId?: string }) => {
  return (
    <>
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXX');
          `
        }}
      />
      
      {/* Google Analytics 4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure'
            });
            
            // Custom events for Brandstifter
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname,
              send_to: '${measurementId}'
            });
          `
        }}
      />
      
      {/* Structured Data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Brandstifter Urban Manufactur",
          "alternateName": "Amp & Brandstifter GmbH",
          "url": "https://brandstifter.online",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://brandstifter.online/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </>
  )
}

// Event tracking helper functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      ...parameters,
      send_to: 'G-XXXXXXXXXX'
    })
  }
}

// Common tracking events for Brandstifter
export const trackingEvents = {
  // Contact events
  contactFormSubmit: (formType: string) => 
    trackEvent('generate_lead', { 
      currency: 'EUR',
      value: 1000,
      form_type: formType 
    }),
  
  phoneClick: () => 
    trackEvent('click_to_call', { 
      phone_number: '+49 6002 939350' 
    }),
  
  emailClick: () => 
    trackEvent('email_click', { 
      email: 'info@brandstifter.online' 
    }),
  
  // Navigation events
  serviceClick: (serviceName: string) => 
    trackEvent('view_item', { 
      currency: 'EUR',
      value: 100,
      items: [{
        item_id: serviceName,
        item_name: serviceName,
        item_category: 'Services',
        item_brand: 'Brandstifter'
      }]
    }),
  
  projectView: (projectName: string) => 
    trackEvent('view_item', {
      currency: 'EUR',
      value: 50,
      items: [{
        item_id: projectName,
        item_name: projectName,
        item_category: 'Projects',
        item_brand: 'Brandstifter'
      }]
    }),
  
  // Download events
  downloadCatalog: (catalogName: string) => 
    trackEvent('download', { 
      file_name: catalogName,
      file_type: 'pdf'
    }),
  
  // Social media events
  socialClick: (platform: string) => 
    trackEvent('social_click', { 
      platform: platform,
      outbound: true
    }),
  
  // Conversion events
  appointmentBooked: () => 
    trackEvent('purchase', {
      currency: 'EUR',
      value: 2000,
      transaction_id: Date.now().toString(),
      items: [{
        item_name: 'Beratungstermin',
        item_category: 'Consultation',
        price: 0,
        quantity: 1
      }]
    }),
  
  newsletterSignup: () => 
    trackEvent('sign_up', {
      method: 'Newsletter'
    })
}