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
      cursor: pointer;
    }
    #idf-nav .nav-pill:hover      { color: #a8a6b4; background: #1a1a2a; }
    #idf-nav .nav-pill.is-active  { color: #e8734a; background: rgba(232,115,74,0.1); }
    #idf-nav .nav-pill.is-index   { color: #a8a6b4; }
    #idf-nav .nav-pill.is-index:hover { color: #f0ede8; background: #1a1a2a; }
    #idf-nav .nav-pill.is-index.is-active { color: #f0ede8; background: transparent; }

    #idf-nav .nav-latest {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    #idf-nav .nav-latest-badge {
      font-size: 9px;
      letter-spacing: 0.08em;
      color: #3a9e78;
      border: 1px solid rgba(58,158,120,0.3);
      border-radius: 3px;
      padding: 1px 5px;
      text-transform: uppercase;
    }

    /* ── Dropdown ── */
    #idf-nav .nav-dropdown {
      position: relative;
    }
    #idf-nav .nav-dropdown-toggle {
      display: flex;
      align-items: center;
      gap: 5px;
      user-select: none;
    }
    #idf-nav .nav-dropdown-toggle::after {
      content: '▾';
      font-size: 10px;
      color: #3a3a50;
      transition: color 0.15s;
    }
    #idf-nav .nav-dropdown.open .nav-dropdown-toggle::after { color: #6a6878; }

    #idf-nav .nav-dropdown-menu {
      display: none;
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      background: rgba(13, 13, 22, 0.98);
      border: 1px solid #2a2a3a;
      border-radius: 8px;
      padding: 6px;
      min-width: 170px;
      max-height: 60vh;
      overflow-y: auto;
      z-index: 1001;
      flex-direction: column;
      gap: 1px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    }
    #idf-nav .nav-dropdown.open .nav-dropdown-menu {
      display: flex;
    }
    #idf-nav .nav-dropdown-menu .nav-pill {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 7px 12px;
      gap: 12px;
    }
    #idf-nav .nav-dropdown-menu .nav-pill .pill-title {
      font-size: 10px;
      color: #3a3a50;
      letter-spacing: 0.04em;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100px;
    }
    #idf-nav .nav-dropdown-menu .nav-pill:hover .pill-title { color: #6a6878; }
    #idf-nav .nav-dropdown-menu .nav-pill.is-active .pill-title { color: #e8734a; }

    @media (max-width: 600px) {
      #idf-nav .nav-inner { padding: 0 16px; gap: 0; }
      #idf-nav .nav-brand { padding-right: 16px; margin-right: 12px; }
      #idf-nav .nav-brand .brand-sub { display: none; }
      #idf-nav .nav-latest-badge { display: none; }
      #idf-nav .nav-pill { padding: 4px 10px; font-size: 10px; }
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

  // ── Semantic version sort (handles 7.10 > 7.9 correctly) ──────────────────
  function cmpVersion(a, b) {
    const pa = a.version.split('.').map(Number);
    const pb = b.version.split('.').map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
      const diff = (pb[i] || 0) - (pa[i] || 0);
      if (diff !== 0) return diff;
    }
    return 0;
  }

  // ── Fetch versions and render ──────────────────────────────────────────────
  fetch(basePath + 'versions.json?nc=' + Date.now())
    .then(r => { if (!r.ok) throw new Error('versions.json not found'); return r.json(); })
    .then(versions => {
      const sorted = [...versions].sort(cmpVersion);
      const latest = sorted[0];
      const older  = sorted.slice(1);

      const isIndexActive = isIndex ? ' is-active' : '';
      const isLatestActive = currentFile === latest.file ? ' is-active' : '';
      const olderHasActive = older.some(v => currentFile === v.file);

      const olderPills = older.map(v => {
        const active = currentFile === v.file ? ' is-active' : '';
        return `<a href="${basePath}${v.file}" class="nav-pill${active}">
          v${v.version}
          <span class="pill-title">${v.title}</span>
        </a>`;
      }).join('');

      const olderActiveClass = olderHasActive ? ' is-active' : '';
      const isPlaybookActive = currentFile === 'playbook.html' ? ' is-active' : '';

      inner.innerHTML = `
        <a href="${basePath}index.html" class="nav-brand" title="Version index">
          <span class="brand-id">IDF</span>
          <span class="brand-sub">Intent Driven Flow</span>
        </a>
        <div class="nav-versions">
          <a href="${basePath}index.html" class="nav-pill is-index${isIndexActive}">All versions</a>
          <a href="${basePath}${latest.file}" class="nav-pill${isLatestActive}">
            <span class="nav-latest">
              v${latest.version}
              <span class="nav-latest-badge">latest</span>
            </span>
          </a>
          <div class="nav-dropdown">
            <span class="nav-pill nav-dropdown-toggle${olderActiveClass}">Older</span>
            <div class="nav-dropdown-menu">${olderPills}</div>
          </div>
          <a href="${basePath}playbook.html" class="nav-pill${isPlaybookActive}" style="margin-left:8px;border-left:1px solid #2a2a3a;padding-left:16px;">Playbook</a>
        </div>`;
      // Click-to-open dropdown — stable against mouse-leave
      const dropdown = inner.querySelector('.nav-dropdown');
      if (dropdown) {
        dropdown.querySelector('.nav-dropdown-toggle').addEventListener('click', e => {
          e.stopPropagation();
          dropdown.classList.toggle('open');
        });
        document.addEventListener('click', () => dropdown.classList.remove('open'));
      }
    })
    .catch(() => {
      inner.innerHTML = `
        <a href="${basePath}index.html" class="nav-brand">
          <span class="brand-id">IDF</span>
        </a>`;
    })
    .finally(() => {
      if (!isIndex) {
        const ns = document.createElement('script');
        ns.src = basePath + 'notes.js?nc=' + Date.now();
        document.body.appendChild(ns);
      }
    });
})();
