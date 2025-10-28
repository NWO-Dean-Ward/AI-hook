# Brandstifter Urban Manufactur - Premium Website

## Projektübersicht
- **Name**: Brandstifter Urban Manufactur Website
- **Ziel**: Moderne, responsive, mehrsprachige Website für Premium-Manufaktur
- **Tech-Stack**: Hono + TypeScript + Cloudflare Pages + TailwindCSS
- **Status**: ✅ In Entwicklung (65% abgeschlossen)

## Live URLs
- **Development**: https://3000-igt51bt1v9edusq27icyj-de59bda9.sandbox.novita.ai
- **Production**: [Noch nicht deployed]
- **GitHub**: [Repository noch nicht verknüpft]

## ✅ Implementierte Features (11 von 17 Tasks)

### Hauptseiten (Alle zweisprachig DE/EN)
- **Homepage** (`/`) - Hero, Services Grid, Testimonials, Trust Bar
- **Leistungen** (`/leistungen`) - Übersicht aller Services
  - Küchen & Wohnkonzepte (`/leistungen/kuechen`)
  - Badmöbel & Wellness (`/leistungen/badmoebel`)
  - Ladenbau & Retail (`/leistungen/ladenbau`)
  - Gastronomie & Hospitality (`/leistungen/gastronomie`)
  - Büro & Office (`/leistungen/buero`)
  - Outdoor & Terrassen (`/leistungen/outdoor`)
- **Projekte** (`/projekte`) - Galerie mit Filterung (Jahr, Kategorie, Kunde)
- **Über Uns** (`/ueber-uns`) - Firmengeschichte, Team, Werte, Auszeichnungen
- **Downloads** (`/downloads`) - Lead-Generierung mit Modal-Forms
- **Kontakt** (`/kontakt`) - Umfangreiches Formular, Showroom-Info, Öffnungszeiten

### Technische Features
- **🌐 Multi-Language Support** - Vollständige DE/EN Übersetzung
  - Cookie-basierte Sprachspeicherung (1 Jahr)
  - URL-Parameter Support (`?lang=en`)
  - Browser-Language Detection
  - Language Switcher mit Flaggen
- **Responsive Design** - Mobile-first mit Tailwind CSS
- **Mobile Menu** - Slide-in Navigation mit Submenu-Support
- **API-Endpunkte** - Form-Handling mit Zod-Validierung
- **Email-Service** - Abstraction Layer für Transactional Emails
- **SEO** - Meta-Tags für alle Seiten in beiden Sprachen

## 🌍 Sprachunterstützung

### Verfügbare Sprachen
- 🇩🇪 **Deutsch** (Standard)
- 🇬🇧 **English**

### Übersetzte Bereiche
- Navigation & Footer
- Alle Hauptseiten-Inhalte
- Formulare und Validierung
- Call-to-Action Buttons
- Meta-Descriptions & Titles

## 📊 Projekt-Statistiken
- **Seiten**: 13 vollständige Seiten (alle zweisprachig)
- **Übersetzungen**: 200+ Strings in 2 Sprachen
- **Code**: 80,000+ Zeichen Content
- **Components**: 4 wiederverwendbare Komponenten
- **API Routes**: 3 Endpunkte

## 🚀 Funktionale Entry-Points

### Navigationsstruktur
```
/?lang=de|en              # Homepage
/leistungen?lang=de|en    # Services Übersicht
├── /kuechen             # Küchen-Details
├── /badmoebel           # Bad-Details  
├── /ladenbau            # Ladenbau-Details
├── /gastronomie         # Gastro-Details
├── /buero               # Büro-Details
└── /outdoor             # Outdoor-Details
/projekte?lang=de|en      # Portfolio mit Filtern
/ueber-uns?lang=de|en     # About Us
/downloads?lang=de|en     # Download-Center
/kontakt?lang=de|en       # Kontaktformular
```

### API-Endpunkte
```
POST /api/contact         # Kontaktformular
POST /api/newsletter      # Newsletter-Anmeldung
POST /api/download        # Download-Anfrage mit Lead-Capture
```

## 🔄 Nächste Schritte (6 Tasks ausstehend)

### Priorität Hoch
1. **Impressum & Datenschutz** - Rechtliche Seiten (DE/EN)

### Priorität Mittel  
2. **Cookie-Banner** - DSGVO-Konformität mit Sprachunterstützung
3. **SEO-Optimierung** - Strukturierte Daten, hreflang-Tags

### Priorität Niedrig
4. **404-Seite** - Custom Error Page (zweisprachig)
5. **Performance** - Lazy Loading für Bilder
6. **Sitemap** - Automatische Generierung mit Sprach-URLs

## 🛠 Technische Architektur

### i18n System
- **Translation Keys**: Zentral in `src/lib/i18n.ts`
- **Language Detection**: Cookie > URL > Browser > Default
- **Components**: `LanguageSwitcher` für UI
- **Persistence**: Cookie (1 Jahr Gültigkeit)

### Datenmodell
- **Projekte**: Kategorie, Jahr, Kunde, Bilder, Details
- **Downloads**: PDF-Ressourcen mit Lead-Capture
- **Kontakte**: Formular-Submissions (in-memory)
- **Newsletter**: Email-Subscriptions (in-memory)

## 📦 Installation & Development

```bash
# Installation
npm install

# Development
npm run build
pm2 start ecosystem.config.cjs

# Production Build
npm run build
npm run deploy

# Test Sprachen
curl http://localhost:3000/?lang=de
curl http://localhost:3000/?lang=en
```

## 🎯 Deployment Status
- **Platform**: Cloudflare Pages (vorbereitet)
- **Build**: ✅ Erfolgreich
- **Multi-Language**: ✅ Vollständig implementiert
- **Tests**: ⚠️ Keine automatisierten Tests
- **Docs**: ✅ README aktuell

## 📝 Changelog
- **v0.7.0** - Multi-Language Support (DE/EN) vollständig
- **v0.6.0** - Über Uns Seite mit Team und Geschichte
- **v0.5.0** - Alle Service-Detail-Seiten implementiert
- **v0.4.0** - Download-Center mit Lead-Generierung
- **v0.3.0** - Projekt-Galerie mit Filterung
- **v0.2.0** - Kontaktformular und API-Integration
- **v0.1.0** - Grundgerüst und Navigation

## 👥 Zielgruppen (International)
1. **Privatkunden & Bauherren** - DE/EN Support
2. **Architekten & Planer** - Internationale Projekte
3. **Generalunternehmer** - Großprojekte
4. **B2B** - Global agierende Unternehmen

## 🌟 USPs
- **Zweisprachig** - Vollständige DE/EN Unterstützung
- Premium-Manufaktur seit 2008
- 45 Experten aus Handwerk & Design
- 3.500m² Produktionsstätte
- Klimaneutrale Produktion
- German Design Award Winner
- 2.500+ realisierte Projekte

---
*Letzte Aktualisierung: ${new Date().toISOString().split('T')[0]}*