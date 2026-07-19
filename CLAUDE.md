# CLAUDE.md — Franziskus-Schule

## 1. Projektübersicht

Website der **Franziskus-Schule**, der einzigen Waldorfförderschule im Rhein-Sieg-Kreis (Neunkirchen-Seelscheid, Klassen 1–12).

**Primäre Zielgruppe:** Eltern von Kindern mit Förderbedarf, die oft einen langen Suchweg hinter sich haben — Schulwechsel, Gutachten, Enttäuschungen. Diese Eltern brauchen keine Marketing-Botschaft, sondern das Gefühl, hier endlich angekommen zu sein.

## 2. Designsystem

**Farben** (definiert in `:root` in [index.html](index.html)):
- `--navy` `#3F4D7A` / `--navy-deep` `#2B365C` — Primärfarbe aus dem Logo-Schriftzug
- `--amber` `#D9813E` / `--amber-deep` `#B06620` / `--amber-soft` `#E8A468` — Akzentfarbe aus der Logo-Spirale
- `--sand` `#F5EFE6` / `--sand-deep` `#EBE3D3` / `--cream-warm` `#EFE6D6` — warme Papierhintergründe
- `--moss` `#E8DFD0` — Bildplatzhalter, weiche Flächen
- `--coral`, `--sky` — sehr sparsam einsetzen
- `--ink` / `--ink-soft` / `--ink-muted` — Textfarben

**Schriften:**
- **Fraunces** (`--font-display`) — Überschriften, Zitate, Adressen
- **Instrument Sans** (`--font-body`) — Fließtext, Navigation, Buttons

**Designprinzipien:**
- Wärme entsteht durch **Weißraum und Papierton**, nicht durch bunte Farben.
- **Eine** Akzentfarbe (Amber). Der Navy trägt, der Sand atmet.
- Ruhige Hand: lange Spacings (`--space-xl`, `--space-xxl`), große Typo, keine harten Schatten oder Effekte. Kursive Wendungen markieren das Bedeutsame.

## 3. Tonalität

- **Anrede: Sie-Form**, durchgängig. Passt zur Zielgruppe (Eltern in angespannter Lebenssituation), zur Schule (Kollegium, Gutachterverfahren, Elterngremien) und zum regionalen Milieu. "Du" wäre hier anbiedernd.
- **Leser-zentriert, nicht wir-zentriert** — die Perspektive bleibt beim Gegenüber. "Was Sie bei uns finden", nicht "Was wir bieten". "Ihr Kind", nicht "unsere Schüler".
- **Warm und klar.** Kurze Sätze. Konkrete Bilder.
- **Kein Behörden- oder Pädagogendeutsch.** Nicht "individualisierte Lernsettings", sondern "Zeit für das einzelne Kind".
- **Waldorf-Begriffe erklären, wenn sie nötig sind** (Epochenunterricht, Heileurythmie, Eurythmie, Tafelbild). Lieber einmal in einem Halbsatz auflösen, als voraussetzen.

## 4. Code-Konventionen

- **Semantisches HTML** (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<blockquote>`).
- **Barrierefreiheit ernst nehmen:** beschreibende `alt`-Texte (keine Marketing-Phrasen), `aria-label` bei reinen Icon-Links, ausreichende Farbkontraste (Navy/Amber auf Sand prüfen), Tastaturnavigation muss intakt bleiben.
- **Mobile-first:** Layout greift ab `max-width: 900px` und `600px`. Bei neuen Komponenten zuerst die Schmal-Variante denken.
- Animationen respektieren `prefers-reduced-motion`.
- Bilder: `object-fit: cover`, max. 1600px Breite, JPG ~80% (siehe [README.md](README.md)).

## 5. Schutzzonen — frag nach, bevor du änderst

- Die **Farbvariablen** in `:root` — sie sind aus Logo und Flyer abgeleitet.
- Die **Tonalität** in bestehenden Texten — sie wurde bewusst gesetzt (Annahme · Rhythmus · Zuhause; Hero-Claim; Stimmen).
- Das **Logo** (`images/logo.jpg`) und seine Darstellung im Header.
