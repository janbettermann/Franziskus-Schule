# Franziskus-Schule – Website

Redesign der Startseite der Franziskus-Schule, Freie Waldorfförderschule im Rhein-Sieg-Kreis.

## Projektstruktur

```
franziskus-schule/
├── index.html          ← Die Startseite (Markup)
├── styles.css          ← Komplettes Styling (Farben, Layout, Responsive)
├── pages/              ← Unterseiten (noch leer)
├── images/
│   ├── logo.jpg        ← Schullogo (bereits eingebunden)
│   └── ...             ← Hier kommen die neuen Fotos rein
├── CLAUDE.md           ← Leitfaden für die Arbeit mit Claude
└── README.md           ← Diese Datei
```

## Lokale Vorschau in VS Code

1. **Live Server Extension installieren**: `Extensions` → suchen nach „Live Server" (von Ritwick Dey) → installieren
2. `index.html` öffnen
3. Rechtsklick im Editor → **„Open with Live Server"** – die Seite lädt im Browser und aktualisiert sich automatisch beim Speichern (auch bei Änderungen an `styles.css`).

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

Die nötigen Bildstyles sind bereits in `styles.css` hinterlegt (Sektion `BILDER`). `.hero-image img`, `.station-image img`, `.feature-image img`, `.tafelbild img` und `.anfahrt-map img` bekommen automatisch `width: 100%`, `height: 100%`, `object-fit: cover` und `display: block` – das Bild füllt den Platzhalter sauber und ohne Verzerrung aus.

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

Eine ausführliche Leitlinie zu Design, Tonalität und Schutzzonen findest du in [CLAUDE.md](CLAUDE.md).

## Farbsystem (zum schnellen Anpassen)

Alle Farben sind in `styles.css` ganz oben in der `:root`-Sektion definiert. Wenn du sie änderst, ziehen sie sich durch die ganze Seite:

```css
--navy: #3F4D7A;       /* Primärfarbe (aus dem Logo) */
--amber: #D9813E;      /* Akzentfarbe (aus der Logo-Spirale) */
--sand: #F5EFE6;       /* Hintergrundfarbe */
```

> **Hinweis:** Die Farbvariablen, die Tonalität in Texten und das Logo sind Schutzzonen. Bitte erst Rücksprache halten, bevor du sie änderst (siehe [CLAUDE.md](CLAUDE.md)).
