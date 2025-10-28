# Brandstifter Urban Manufactur - Premium Website

## Projektübersicht
- **Name**: Brandstifter Urban Manufactur Website
- **Ziel**: Moderne, responsive Website für Premium-Manufaktur für individuelle Raumkonzepte
- **Tech-Stack**: Hono + TypeScript + Cloudflare Pages + TailwindCSS
- **Status**: ✅ In Entwicklung (60% abgeschlossen)

## Live URLs
- **Development**: https://3000-igt51bt1v9edusq27icyj-de59bda9.sandbox.novita.ai
- **Production**: [Noch nicht deployed]
- **GitHub**: [Repository noch nicht verknüpft]

## ✅ Implementierte Features (10 von 17 Tasks)

### Hauptseiten
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
- **Responsive Design** - Mobile-first mit Tailwind CSS
- **Mobile Menu** - Slide-in Navigation mit Submenu-Support
- **API-Endpunkte** - Form-Handling mit Zod-Validierung
- **Email-Service** - Abstraction Layer für Transactional Emails
- **SEO** - Meta-Tags für alle Seiten

## 📊 Projekt-Statistiken
- **Seiten**: 13 vollständige Seiten
- **Code**: 70,000+ Zeichen Content
- **Components**: 3 wiederverwendbare Komponenten
- **API Routes**: 3 Endpunkte (contact, newsletter, download)

## 🚀 Funktionale Entry-Points

### Navigationsstruktur
```
/                         # Homepage
/leistungen               # Services Übersicht
├── /kuechen             # Küchen-Details
├── /badmoebel           # Bad-Details  
├── /ladenbau            # Ladenbau-Details
├── /gastronomie         # Gastro-Details
├── /buero               # Büro-Details
└── /outdoor             # Outdoor-Details
/projekte                 # Portfolio (Filter: ?filter=kuechen&year=2023)
/ueber-uns               # About Us
/downloads               # Download-Center
/kontakt                 # Kontaktformular
```

### API-Endpunkte
```
POST /api/contact         # Kontaktformular
POST /api/newsletter      # Newsletter-Anmeldung
POST /api/download        # Download-Anfrage mit Lead-Capture
```

## 🔄 Nächste Schritte (7 Tasks ausstehend)

### Priorität Hoch
1. **Multi-Language Support** - DE/EN Umschaltung
2. **Impressum & Datenschutz** - Rechtliche Seiten

### Priorität Mittel  
3. **Cookie-Banner** - DSGVO-Konformität
4. **SEO-Optimierung** - Strukturierte Daten, Sitemap

### Priorität Niedrig
5. **404-Seite** - Custom Error Page
6. **Performance** - Lazy Loading für Bilder
7. **Sitemap** - Automatische Generierung

## 🛠 Technische Architektur

### Datenmodell
- **Projekte**: Kategorie, Jahr, Kunde, Bilder, Details
- **Downloads**: PDF-Ressourcen mit Lead-Capture
- **Kontakte**: Formular-Submissions (in-memory)
- **Newsletter**: Email-Subscriptions (in-memory)

### Storage Services
- **Aktuell**: In-Memory (Development)
- **Geplant**: Cloudflare D1 für Produktion

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
```

## 🎯 Deployment Status
- **Platform**: Cloudflare Pages (vorbereitet)
- **Build**: ✅ Erfolgreich
- **Tests**: ⚠️ Keine Tests implementiert
- **Docs**: ✅ README aktuell

## 📝 Changelog
- **v0.6.0** - Über Uns Seite mit Team und Geschichte
- **v0.5.0** - Alle Service-Detail-Seiten implementiert
- **v0.4.0** - Download-Center mit Lead-Generierung
- **v0.3.0** - Projekt-Galerie mit Filterung
- **v0.2.0** - Kontaktformular und API-Integration
- **v0.1.0** - Grundgerüst und Navigation

## 👥 Zielgruppen
1. **Privatkunden & Bauherren** - Individuelle Wohnkonzepte
2. **Architekten & Planer** - Professionelle Zusammenarbeit
3. **Generalunternehmer** - Großprojekte
4. **B2B** - Büros, Gastronomie, Retail

## 🌟 USPs
- Premium-Manufaktur seit 2008
- 45 Experten aus Handwerk & Design
- 3.500m² Produktionsstätte
- Klimaneutrale Produktion
- German Design Award Winner
- 2.500+ realisierte Projekte

---
*Letzte Aktualisierung: ${new Date().toISOString().split('T')[0]}*