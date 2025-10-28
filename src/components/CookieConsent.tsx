/**
 * DSGVO-compliant Cookie Consent Banner
 * For Brandstifter Urban Manufactur
 */

import { useState, useEffect } from 'react'
import type { Language } from '../lib/i18n'

interface CookieConsentProps {
  lang?: Language
}

export const CookieConsent = ({ lang = 'de' }: CookieConsentProps) => {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    // Check if consent was already given
    const storedConsent = localStorage.getItem('cookieConsent')
    if (!storedConsent) {
      setShowBanner(true)
    } else {
      const parsed = JSON.parse(storedConsent)
      setConsent(parsed)
      // Apply consent settings
      applyConsent(parsed)
    }
  }, [])

  const applyConsent = (consentSettings: typeof consent) => {
    // Enable/disable analytics based on consent
    if (consentSettings.analytics && typeof window !== 'undefined') {
      // Enable Google Analytics
      (window as any).gtag?.('consent', 'update', {
        'analytics_storage': 'granted'
      })
    } else {
      // Disable Google Analytics
      (window as any).gtag?.('consent', 'update', {
        'analytics_storage': 'denied'
      })
    }

    // Enable/disable marketing cookies
    if (consentSettings.marketing) {
      (window as any).gtag?.('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      })
    } else {
      (window as any).gtag?.('consent', 'update', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      })
    }
  }

  const handleAcceptAll = () => {
    const fullConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setConsent(fullConsent)
    localStorage.setItem('cookieConsent', JSON.stringify(fullConsent))
    localStorage.setItem('consentDate', new Date().toISOString())
    applyConsent(fullConsent)
    setShowBanner(false)
  }

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    localStorage.setItem('consentDate', new Date().toISOString())
    applyConsent(consent)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setConsent(minimalConsent)
    localStorage.setItem('cookieConsent', JSON.stringify(minimalConsent))
    localStorage.setItem('consentDate', new Date().toISOString())
    applyConsent(minimalConsent)
    setShowBanner(false)
  }

  if (!showBanner) return null

  const texts = {
    de: {
      title: 'Cookie-Einstellungen',
      description: 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Einige Cookies sind essentiell für den Betrieb der Seite, während andere uns helfen, diese Website und die Nutzererfahrung zu verbessern.',
      necessary: 'Notwendige Cookies',
      necessaryDesc: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
      analytics: 'Analyse-Cookies',
      analyticsDesc: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren (Google Analytics).',
      marketing: 'Marketing-Cookies',
      marketingDesc: 'Diese Cookies werden verwendet, um Werbung relevanter für Sie und Ihre Interessen zu gestalten.',
      functional: 'Funktionale Cookies',
      functionalDesc: 'Diese Cookies ermöglichen erweiterte Funktionen wie personalisierte Inhalte.',
      acceptAll: 'Alle akzeptieren',
      acceptSelected: 'Auswahl bestätigen',
      rejectAll: 'Nur notwendige',
      details: 'Details anzeigen',
      hideDetails: 'Details verbergen',
      privacyPolicy: 'Datenschutzerklärung',
      imprint: 'Impressum'
    },
    en: {
      title: 'Cookie Settings',
      description: 'We use cookies to improve your experience on our website. Some cookies are essential for the operation of the site, while others help us improve this website and the user experience.',
      necessary: 'Necessary Cookies',
      necessaryDesc: 'These cookies are required for the basic functions of the website and cannot be disabled.',
      analytics: 'Analytics Cookies',
      analyticsDesc: 'These cookies help us understand how visitors interact with our website (Google Analytics).',
      marketing: 'Marketing Cookies',
      marketingDesc: 'These cookies are used to make advertising more relevant to you and your interests.',
      functional: 'Functional Cookies',
      functionalDesc: 'These cookies enable advanced features such as personalized content.',
      acceptAll: 'Accept All',
      acceptSelected: 'Confirm Selection',
      rejectAll: 'Only Necessary',
      details: 'Show Details',
      hideDetails: 'Hide Details',
      privacyPolicy: 'Privacy Policy',
      imprint: 'Imprint'
    }
  }

  const t = texts[lang]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t border-gray-200 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              🍪 {t.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t.description}
            </p>
            
            {showDetails && (
              <div className="space-y-3 mb-4">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium text-gray-900">
                        {t.necessary}
                      </label>
                      <p className="text-sm text-gray-600">{t.necessaryDesc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={consent.necessary}
                      disabled
                      className="w-5 h-5 text-black"
                    />
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium text-gray-900">
                        {t.analytics}
                      </label>
                      <p className="text-sm text-gray-600">{t.analyticsDesc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={(e) => setConsent({...consent, analytics: e.target.checked})}
                      className="w-5 h-5 text-black"
                    />
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium text-gray-900">
                        {t.marketing}
                      </label>
                      <p className="text-sm text-gray-600">{t.marketingDesc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={(e) => setConsent({...consent, marketing: e.target.checked})}
                      className="w-5 h-5 text-black"
                    />
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium text-gray-900">
                        {t.functional}
                      </label>
                      <p className="text-sm text-gray-600">{t.functionalDesc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={consent.functional}
                      onChange={(e) => setConsent({...consent, functional: e.target.checked})}
                      className="w-5 h-5 text-black"
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              {showDetails ? t.hideDetails : t.details}
            </button>
          </div>

          <div className="flex flex-col gap-2 lg:ml-8">
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium"
            >
              {t.acceptAll}
            </button>
            {showDetails && (
              <button
                onClick={handleAcceptSelected}
                className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition font-medium"
              >
                {t.acceptSelected}
              </button>
            )}
            <button
              onClick={handleRejectAll}
              className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              {t.rejectAll}
            </button>
            <div className="flex gap-4 justify-center text-xs">
              <a href="/datenschutz" className="text-gray-500 hover:text-gray-700 underline">
                {t.privacyPolicy}
              </a>
              <a href="/impressum" className="text-gray-500 hover:text-gray-700 underline">
                {t.imprint}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}