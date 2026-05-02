# Franziskus-Schule – Website

Redesign der Startseite der Franziskus-Schule, Freie Waldorfförderschule im Rhein-Sieg-Kreis.

## Projektstruktur

```
franziskus-schule/
├── index.html          ← Die Startseite
├── styles.css          ← Alle Styles (ausgelagert aus index.html)
├── pages/              ← Unterseiten (aufnahme.html, ueber-uns.html, …)
├── images/
│   ├── logo.jpg        ← Schullogo (bereits eingebunden)
│   └── ...             ← Hier kommen die neuen Fotos rein
└── README.md           ← Diese Datei
```

## Lokale Vorschau in VS Code

1. **Live Server Extension installieren**: `Extensions` → suchen nach „Live Server" (von Ritwick Dey) → installieren
2. `index.html` öffnen
3. Rechtsklick im Editor → **„Open with Live Server"** – die Seite lädt im Browser und aktualisiert sich automatisch beim Speichern.

## Neue Unterseite anlegen (z. B. „Aufnahme")

1. Neue Datei `pages/aufnahme.html` anlegen
2. Diese Grundstruktur verwenden – sie bindet das gemeinsame Stylesheet ein und hält Header/Footer konsistent:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aufnahme – Franziskus-Schule</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../styles.css">
</head>
<body>
  <!-- Header aus index.html kopieren, Logo-Pfad anpassen: src="../images/logo.jpg" -->
  <header class="site-header"> … </header>

  <main>
    <!-- Seiten-Inhalt hier -->
  </main>

  <!-- Footer aus index.html kopieren -->
  <footer class="site-footer"> … </footer>
</body>
</html>
```

**Wichtig bei Unterseiten**: Alle Pfade sind relativ zur Unterseite.
- Stylesheet: `../styles.css`
- Logo: `../images/logo.jpg`
- Bilder: `../images/dateiname.jpg`

3. In der Navigation von `index.html` und allen anderen Seiten den Link aktualisieren:
   ```html
   <a href="pages/aufnahme.html">Aufnahme</a>
   ```

## Fotos einfügen – Anleitung

Überall, wo aktuell ein grauer Platzhalter zu sehen ist, steht im HTML ein Block wie dieser:

```html
<div class="hero-image">
  <div class="placeholder">
    <div class="placeholder-label">Hero-Bild</div>
    <div class="placeholder-description">…</div>
  </div>
</div>
```

**So tauschst du einen Platzhalter gegen ein Foto:**

```html
<div class="hero-image">
  <img src="images/hero-tafelbild.jpg" alt="Tafelbild der 5. Klasse, Herbstepoche">
</div>
```

Die Bild-Styles (`.hero-image img`, `.station-image img` usw.) sind bereits in `styles.css` hinterlegt – eingefügte Fotos füllen den Rahmen automatisch korrekt aus (`object-fit: cover`).

## Liste der Bildplatzhalter

| Position | CSS-Klasse | Format | Empfehlung |
|---|---|---|---|
| Hero (rechts) | `.hero-image` | 4:5 hoch | Starkes Tafelbild oder Schultag-Foto |
| Schultag 01 | `.station-image` (1.) | 4:3 quer | Morgenkreis |
| Schultag 02 | `.station-image` (2.) | 4:3 quer | Epochenunterricht |
| Schultag 03 | `.station-image` (3.) | 4:3 quer | Handwerk / Kinderhände |
| Schultag 04 | `.station-image` (4.) | 4:3 quer | Mittagessen |
| Schultag 05 | `.station-image` (5.) | 4:3 quer | Therapie |
| Schultag 06 | `.station-image` (6.) | 4:3 quer | Ausklang |
| Besonderheit 1 | `.feature-image` (1.) | 1:1 quadr. | Therapie |
| Besonderheit 2 | `.feature-image` (2.) | 1:1 quadr. | Schülerfirma |
| Besonderheit 3 | `.feature-image` (3.) | 1:1 quadr. | Jahresfest |
| Besonderheit 4 | `.feature-image` (4.) | 1:1 quadr. | Kollegium / Gemeinschaft |
| Tafelbild groß | `.tafelbild-1` | quer | Leitmotiv |
| Tafelbild 2-5 | `.tafelbild-2` … `.tafelbild-5` | flexibel | Vier kleinere Tafelbilder |
| Anfahrt | `.anfahrt-map` | 5:4 quer | Karte (Google Maps Embed o. Foto) |

**Tipp zur Bildoptimierung**: Fotos vor dem Einbinden auf max. 1600 px Breite skalieren und als JPG mit ~80 % Qualität exportieren. Das hält die Seite schnell.

## Mit Claude weiterarbeiten in VS Code

Zwei gute Optionen:

1. **Claude Code (Terminal-Tool)**: In VS Code das integrierte Terminal öffnen (`Ctrl+ö` bzw. `Cmd+ö`) und Claude Code starten. Claude kann dann direkt Dateien lesen und ändern. Installation: <https://docs.claude.com/en/docs/claude-code>

2. **Weiter im Web-Chat**: Du kannst auch einfach den HTML-Code per Copy/Paste hin und her geben. Mehr Aufwand, dafür kein Setup nötig.

## Farbsystem (zum schnellen Anpassen)

Alle Farben sind oben in der `:root`-Sektion von `styles.css` definiert. Wenn du sie änderst, ziehen sie sich durch die ganze Seite:

```css
--navy: #3F4D7A;       /* Primärfarbe (aus dem Logo) */
--amber: #D9813E;      /* Akzentfarbe (aus der Logo-Spirale) */
--sand: #F5EFE6;       /* Hintergrundfarbe */
```
