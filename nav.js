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
    #idf-nav .nav-brand:hover .brand-sub { color: #8a8898; }

    #idf-nav .nav-links {
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
      color: #8a8898;
      transition: color 0.15s, background 0.15s;
      white-space: nowrap;
      cursor: pointer;
    }
    #idf-nav .nav-pill:hover     { color: #a8a6b4; background: #1a1a2a; }
    #idf-nav .nav-pill.is-active { color: #e8734a; background: rgba(232,115,74,0.1); }

    #idf-presence-balls {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0 0 0 16px;
      flex-shrink: 0;
      min-width: 16px;
    }
    #idf-presence-balls .p-ball {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
      opacity: 0.85;
      transition: opacity 0.3s;
    }
    #idf-presence-balls .p-ball.p-me {
      opacity: 1;
      box-shadow: 0 0 0 1.5px rgba(255,255,255,0.18);
    }
    #idf-presence-balls .p-overflow {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 9px;
      color: #8a8898;
      letter-spacing: 0.04em;
      line-height: 1;
    }

    @media (max-width: 600px) {
      #idf-nav .nav-inner { padding: 0 16px; }
      #idf-nav .nav-brand { padding-right: 16px; margin-right: 12px; }
      #idf-nav .nav-brand .brand-sub { display: none; }
      #idf-nav .nav-pill { padding: 4px 10px; font-size: 10px; }
      #idf-presence-balls { padding-left: 8px; gap: 4px; }
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

  // ── Resolve base path so nav works in subdirectories too ──────────────────
  const basePath = window.location.pathname.replace(/[^/]*$/, '');

  // ── Render nav ─────────────────────────────────────────────────────────────
  const pages = [
    { file: 'index.html',          label: 'Overview' },
    { file: 'idf.html',            label: 'Framework' },
    { file: 'idf-corporate.html',  label: 'Corporate' },
  ];

  const pills = pages.map(p => {
    const active = (currentFile === p.file || (currentFile === '' && p.file === 'index.html'))
      ? ' is-active' : '';
    return `<a href="${basePath}${p.file}" class="nav-pill${active}">${p.label}</a>`;
  }).join('');

  inner.innerHTML = `
    <a href="${basePath}index.html" class="nav-brand" title="IDF — Intent Driven Flow">
      <span class="brand-id">IDF</span>
      <span class="brand-sub">Intent Driven Flow</span>
    </a>
    <div class="nav-links">${pills}</div>
    <div id="idf-presence-balls"></div>`;

  // ── Presence ───────────────────────────────────────────────────────────────
  const FIREBASE_CONFIG = {
    apiKey:            'AIzaSyDtn4tCHxvx-rPbS8fddg23i5QHSQVbXWQ',
    authDomain:        'testedobeto.firebaseapp.com',
    databaseURL:       'https://testedobeto-default-rtdb.firebaseio.com',
    projectId:         'testedobeto',
    storageBucket:     'testedobeto.firebasestorage.app',
    messagingSenderId: '384725958571',
    appId:             '1:384725958571:web:b016e048e769b675e29cee'
  };

  const PRESENCE_COLORS = [
    '#e8734a','#7c5cbf','#3a9e78','#4a7abf','#bf8f3a',
    '#d45b8a','#5bbf95','#9b7fd4','#4aabba','#c4a24a',
    '#7abf4a','#e84a7a','#4ae8bf','#a87cd4','#e8c24a'
  ];

  // Session ID — one per tab, persists across page navigations within the tab
  var SID = sessionStorage.getItem('idf-sid');
  if (!SID) {
    SID = Math.random().toString(36).slice(2, 10);
    sessionStorage.setItem('idf-sid', SID);
  }

  function sidColor(id) {
    var h = 0;
    for (var i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
    return PRESENCE_COLORS[h % PRESENCE_COLORS.length];
  }

  // Validate color to prevent XSS via tampered Firebase data
  function safeColor(c) {
    return (typeof c === 'string' && /^#[0-9a-fA-F]{6}$/.test(c)) ? c : '#8a8898';
  }

  var MY_COLOR = sidColor(SID);

  function renderBalls(sessions) {
    var container = document.getElementById('idf-presence-balls');
    if (!container) return;
    var ids = Object.keys(sessions || {});
    var count = ids.length;
    var visible = ids.slice(0, 10);
    var html = '';
    visible.forEach(function(id) {
      var color = safeColor(sessions[id].color);
      var isMe = id === SID ? ' p-me' : '';
      html += '<span class="p-ball' + isMe + '" style="background:' + color + ';" title="Active session"></span>';
    });
    if (count > 10) {
      html += '<span class="p-overflow">+' + (count - 10) + '</span>';
    }
    container.innerHTML = html;
  }

  function initPresence() {
    if (!window.firebase) return;
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    var db = firebase.database();
    var myRef = db.ref('idf-presence/' + SID);
    myRef.onDisconnect().remove();
    myRef.set({ color: MY_COLOR });
    db.ref('idf-presence').on('value', function(snap) {
      renderBalls(snap.val());
    });
  }

  function loadScript(src, cb) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = cb;
    document.head.appendChild(s);
  }

  var FB = 'https://www.gstatic.com/firebasejs/10.7.0/';
  loadScript(FB + 'firebase-app-compat.js', function() {
    loadScript(FB + 'firebase-database-compat.js', initPresence);
  });

})();
