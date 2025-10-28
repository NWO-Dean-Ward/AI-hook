# Krause Schreinerei - Premium Handwerk Website

## Projektübersicht
- **Name**: Krause Schreinerei Website
- **Ziel**: Professionelle Website für eine Premium-Schreinerei mit CMS-Backend
- **Features**: Multi-Language Support (DE/EN), Admin CMS, Projekt-Galerie, Blog-System

## URLs
- **Lokale Entwicklung**: https://3000-igt51bt1v9edusq27icyj-de59bda9.sandbox.novita.ai
- **GitHub**: Noch nicht verbunden (Benutzer muss GitHub-Autorisierung abschließen)
- **Cloudflare Pages**: Bereit für Deployment

## Fertiggestellte Features ✅

### 1. Design-Überarbeitung
- ✅ Alle goldenen/messingfarbenen Elemente durch schwarz/weiß/grau ersetzt
- ✅ Professionelles, modernes Design mit Tailwind CSS
- ✅ Responsive Layout für alle Bildschirmgrößen

### 2. Medien-Assets
- ✅ Hochwertige Bilder für alle Service-Kategorien erstellt:
  - Küchen-Showroom
  - Badezimmer-Showroom  
  - High-Tech Showroom (Ladenbau)
  - Restaurant-Innenraum
  - Executive Büro
  - Outdoor-Terrasse
- ✅ Cross-Fade Video für Homepage-Hero erstellt
- ✅ Alle Bilder in media-assets.ts zentralisiert

### 3. Backend CMS System
- ✅ Vollständiges Datenbankschema (Cloudflare D1 SQLite)
- ✅ JWT-Authentifizierung für Admin-Bereich
- ✅ API-Endpunkte für Projekte und Blog-Posts
- ✅ Admin-Dashboard UI implementiert

### 4. Service-Unterseiten
- ✅ Küchen-Seite mit vollständigem Content und Bildern
- ⏳ Weitere Service-Seiten vorbereitet (Struktur angelegt)

## Funktionale Entry-URIs

### Hauptseiten
- `/` - Homepage mit Hero-Video und Service-Übersicht
- `/leistungen` - Service-Übersicht mit allen Kategorien
- `/leistungen/kuechen` - Detailseite für Küchen & Wohnkonzepte
- `/projekte` - Projekt-Galerie
- `/manufaktur` - Über die Manufaktur
- `/ueber-uns` - Über uns Seite
- `/kontakt` - Kontaktseite mit Formular
- `/downloads` - Download-Bereich

### Admin-Bereich
- `/admin` - Admin Dashboard (JWT-geschützt)
- `/api/admin/auth/login` - Admin Login (POST)
- `/api/admin/projects` - Projekt-Verwaltung API
- `/api/admin/blog` - Blog-Verwaltung API

### API-Endpunkte
- `/api/contact` - Kontaktformular-Submission (POST)
- `/api/newsletter` - Newsletter-Anmeldung (POST)

## Noch zu implementieren 🚧

### 1. Service-Unterseiten vervollständigen
- [ ] Badmöbel-Seite mit Content
- [ ] Ladenbau-Seite mit Content
- [ ] Gastronomie-Seite mit Content
- [ ] Büromöbel-Seite mit Content
- [ ] Outdoor-Seite mit Content

### 2. GitHub Integration
- [ ] GitHub-Repository verbinden (Autorisierung ausstehend)
- [ ] Automatisches Deployment einrichten

### 3. Media Upload
- [ ] Datei-Upload für Admin-Panel implementieren
- [ ] Cloudflare R2 Storage konfigurieren

### 4. Weitere Features
- [ ] Blog-System Frontend
- [ ] Projekt-Filter und Suche
- [ ] SEO-Optimierung
- [ ] Analytics-Integration

## Empfohlene nächste Schritte

1. **GitHub-Autorisierung abschließen**:
   - Gehen Sie zum #github Tab in der Sandbox
   - Autorisieren Sie die GitHub-Integration
   - Danach kann das Repository verbunden werden

2. **Service-Unterseiten vervollständigen**:
   - Content für restliche Service-Kategorien hinzufügen
   - Bilder sind bereits vorbereitet und integriert

3. **Cloudflare Deployment**:
   - API-Key in Deploy-Tab konfigurieren
   - Projekt mit `npm run deploy` veröffentlichen

4. **CMS testen**:
   - Admin-Account erstellen
   - Projekte und Blog-Posts hinzufügen

## Technologie-Stack
- **Frontend**: Hono + TypeScript + Tailwind CSS
- **Backend**: Cloudflare Workers/Pages
- **Datenbank**: Cloudflare D1 (SQLite)
- **Storage**: Cloudflare R2 (geplant)
- **Deployment**: Cloudflare Pages
- **Package Manager**: NPM
- **Process Manager**: PM2

## Entwicklungsbefehle

```bash
# Entwicklungsserver starten
npm run dev:sandbox

# Projekt bauen
npm run build

# Datenbank-Migrationen
npm run db:migrate:local  # Lokal
npm run db:migrate:prod   # Produktion

# Git-Befehle
npm run git:init    # Repository initialisieren
npm run git:commit  # Änderungen committen
npm run git:status  # Status anzeigen

# Deployment
npm run deploy      # Zu Cloudflare Pages deployen
```

## Datenarchitektur

### Datenmodelle
- **admin_users**: Admin-Benutzer mit JWT-Auth
- **projects**: Portfolio-Projekte mit Bildern
- **blog_posts**: Blog-Artikel mit SEO-Metadaten
- **media**: Media-Asset-Verwaltung
- **contact_submissions**: Kontaktformular-Einträge

### Storage-Services
- **Cloudflare D1**: Relationale Datenbank (SQLite)
- **Cloudflare KV**: Key-Value Storage (geplant)
- **Cloudflare R2**: Object Storage für Medien (geplant)

## Benutzerhandbuch

### Für Website-Besucher
1. Navigieren Sie durch die Service-Kategorien
2. Schauen Sie sich die Projekt-Galerie an
3. Kontaktieren Sie uns über das Kontaktformular
4. Abonnieren Sie den Newsletter für Updates

### Für Administratoren
1. Melden Sie sich unter `/admin` an
2. Verwalten Sie Projekte und Blog-Posts
3. Prüfen Sie Kontaktanfragen
4. Laden Sie neue Medien hoch (in Entwicklung)

## Deployment-Status
- **Platform**: Cloudflare Pages
- **Status**: ⏳ Bereit für Deployment (API-Key benötigt)
- **Letztes Update**: 2025-01-28

## Hinweise
- Website läuft im Cloudflare Workers Environment (keine Node.js APIs)
- Alle Medien-Assets sind optimiert für schnelle Ladezeiten
- Multi-Language Support vollständig implementiert (DE/EN)
- JWT-basierte Authentifizierung für Admin-Bereich