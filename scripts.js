// Mobile-Menü: Hamburger → Slide-down-Panel unterhalb des Headers.
// Schließt auf Linkklick, Escape und Klick außerhalb. Keine Abhängigkeiten.

(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const toggle = header.querySelector('.mobile-toggle');
  const nav = header.querySelector('.main-nav');
  if (!toggle || !nav) return;

  // Ein paar a11y-Attribute nachrüsten, falls im Markup vergessen
  if (!nav.id) nav.id = 'main-nav';
  toggle.setAttribute('aria-controls', nav.id);
  toggle.setAttribute('aria-expanded', 'false');

  function setOpen(open) {
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    // Body-Scroll sperren, solange das Panel offen ist
    document.body.style.overflow = open ? 'hidden' : '';
  }

  toggle.addEventListener('click', function () {
    setOpen(!header.classList.contains('menu-open'));
  });

  // Auf Linkklick schließen — sinnvoll für Anker-Links auf derselben Seite
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      setOpen(false);
    });
  });

  // Escape schließt
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('menu-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Klick außerhalb des Headers schließt
  document.addEventListener('click', function (e) {
    if (!header.classList.contains('menu-open')) return;
    if (header.contains(e.target)) return;
    setOpen(false);
  });

  // Beim Wechsel auf Desktop-Breite Panel-State zurücksetzen
  const mq = window.matchMedia('(min-width: 901px)');
  function onBreakpoint(e) {
    if (e.matches) setOpen(false);
  }
  if (mq.addEventListener) mq.addEventListener('change', onBreakpoint);
  else if (mq.addListener) mq.addListener(onBreakpoint);
})();


// Karte: Zwei-Klick-Lösung.
// Die OpenStreetMap-Karte wird erst nach ausdrücklichem Klick geladen.
// Vorher geht keine Anfrage an openstreetmap.org — es werden also auch
// keine IP-Adressen der Besucher übertragen. Ohne JavaScript bleibt die
// Vorschau mit dem Routenlink stehen; die Adresse steht ohnehin daneben.

(function () {
  const karten = document.querySelectorAll('.karte[data-karte-src]');

  karten.forEach(function (karte) {
    const knopf = karte.querySelector('.karte-laden');
    if (!knopf) return;

    knopf.addEventListener('click', function () {
      const rahmen = document.createElement('iframe');
      rahmen.src = karte.dataset.karteSrc;
      rahmen.title = 'Karte: Lage der Franziskus-Schule, Breite Str. 44, Neunkirchen-Seelscheid';
      rahmen.loading = 'lazy';
      rahmen.setAttribute('referrerpolicy', 'no-referrer');
      rahmen.className = 'karte-rahmen';

      karte.textContent = '';
      karte.appendChild(rahmen);

      // Pflichtangabe nach der OpenStreetMap-Lizenz (ODbL)
      const quelle = document.createElement('p');
      quelle.className = 'karte-quelle';
      quelle.innerHTML = 'Kartendaten © <a href="https://www.openstreetmap.org/copyright" rel="noopener">OpenStreetMap</a>-Mitwirkende';
      karte.appendChild(quelle);

      karte.classList.add('karte-geladen');
    });
  });
})();
