(function () {
  // ── Styles ─────────────────────────────────────────────────────────────────
  const css = `
    #idf-nav {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(12, 12, 20, 0.94);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid #2a2a3a;
      font-family: 'IBM Plex Mono', monospace;
    }
    #idf-nav .nav-inner {
      display: flex;
      align-items: center;
      padding: 0 48px;
      height: 48px;
      gap: 0;
    }
    #idf-nav .nav-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      padding-right: 24px;
      margin-right: 20px;
      height: 100%;
      border-right: 1px solid #2a2a3a;
      flex-shrink: 0;
    }
    #idf-nav .nav-brand .brand-id  { font-size: 13px; font-weight: 500; color: #e8734a; letter-spacing: 0.04em; }
    #idf-nav .nav-brand .brand-sub { font-size: 11px; color: #3a3a50; letter-spacing: 0.06em; }
    #idf-nav .nav-brand:hover .brand-sub { color: #6a6878; }
    #idf-nav .nav-versions {
      display: flex;
      align-items: center;
      gap: 2px;
      flex: 1;
    }
    #idf-nav .nav-pill {
      font-size: 11px;
      letter-spacing: 0.06em;
      padding: 5px 13px;
      border-radius: 5px;
      text-decoration: none;
      color: #6a6878;
      transition: color 0.15s, background 0.15s;
      white-space: nowrap;
    }
    #idf-nav .nav-pill:hover      { color: #a8a6b4; background: #1a1a2a; }
    #idf-nav .nav-pill.is-active  { color: #e8734a; background: rgba(232,115,74,0.1); }
    #idf-nav .nav-pill.is-index   { color: #a8a6b4; }
    #idf-nav .nav-pill.is-index.is-active { color: #f0ede8; background: transparent; }

    @media (max-width: 600px) {
      #idf-nav .nav-inner { padding: 0 20px; }
      #idf-nav .nav-brand .brand-sub { display: none; }
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── Insert nav shell at top of body ────────────────────────────────────────
  const nav = document.createElement('nav');
  nav.id = 'idf-nav';
  nav.innerHTML = '<div class="nav-inner"></div>';
  document.body.insertBefore(nav, document.body.firstChild);

  const inner = nav.querySelector('.nav-inner');

  // ── Detect current page ────────────────────────────────────────────────────
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const isIndex = currentFile === 'index.html' || currentFile === '';

  // ── Resolve base path so nav works in subdirectories too ──────────────────
  const basePath = window.location.pathname.replace(/[^/]*$/, '');

  // ── Fetch versions and render ──────────────────────────────────────────────
  fetch(basePath + 'versions.json?nc=' + Date.now())
    .then(r => { if (!r.ok) throw new Error('versions.json not found'); return r.json(); })
    .then(versions => {
      const sorted = [...versions].sort((a, b) =>
        parseFloat(b.version) - parseFloat(a.version)
      );

      const pills = sorted.map(v => {
        const active = currentFile === v.file ? ' is-active' : '';
        return `<a href="${basePath}${v.file}" class="nav-pill${active}" title="${v.title}">v${v.version}</a>`;
      }).join('');

      const indexActive = isIndex ? ' is-active' : '';

      inner.innerHTML = `
        <a href="${basePath}index.html" class="nav-brand" title="Version index">
          <span class="brand-id">IDF</span>
          <span class="brand-sub">Intent Driven Flow</span>
        </a>
        <div class="nav-versions">
          <a href="${basePath}index.html" class="nav-pill is-index${indexActive}">All versions</a>
          ${pills}
        </div>`;
    })
    .catch(() => {
      // Minimal fallback if versions.json is unavailable
      inner.innerHTML = `
        <a href="${basePath}index.html" class="nav-brand">
          <span class="brand-id">IDF</span>
        </a>`;
    })
    .finally(() => {
      // Load notes system on version pages (not the index)
      if (!isIndex) {
        const ns = document.createElement('script');
        ns.src = basePath + 'notes.js';
        document.body.appendChild(ns);
      }
    });
})();
