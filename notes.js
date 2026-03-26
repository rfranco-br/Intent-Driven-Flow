/**
 * IDF Notes System
 * ─────────────────────────────────────────────────────────────────────────────
 * SETUP — 5 minutes:
 *
 *  1. Go to https://console.firebase.google.com
 *  2. Create a project → Add Realtime Database → "Start in test mode"
 *  3. Project Settings → "Your apps" → Add web app (</>) → copy firebaseConfig
 *  4. Paste the values below, replacing every REPLACE_… placeholder
 *  5. Commit notes.js — everyone who opens the page shares the same notes
 *
 * Database rules (Realtime Database → Rules tab):
 *  { "rules": { ".read": true, ".write": true } }
 */

(function () {
  'use strict';

  // ── FIREBASE CONFIG ────────────────────────────────────────────────────────
  // Replace every REPLACE_… value with your project's config.
  const FIREBASE_CONFIG = {
    apiKey:            'AIzaSyDtn4tCHxvx-rPbS8fddg23i5QHSQVbXWQ',
    authDomain:        'testedobeto.firebaseapp.com',
    databaseURL:       'https://testedobeto-default-rtdb.firebaseio.com',
    projectId:         'testedobeto',
    storageBucket:     'testedobeto.firebasestorage.app',
    messagingSenderId: '384725958571',
    appId:             '1:384725958571:web:b016e048e769b675e29cee'
  };

  const DB_ROOT = 'idf-notes';

  // ── USER IDENTITY ──────────────────────────────────────────────────────────
  const PALETTE   = ['#e8734a','#7c5cbf','#3a9e78','#4a7abf','#bf8f3a','#d45b8a','#5bbf95','#9b7fd4','#c4674a','#4aabba'];
  const ADJS      = ['Amber','Azure','Bold','Calm','Coral','Deep','Emerald','Gold','Iron','Jade','Keen','Lapis','Mauve','Navy','Ochre','Pine','Rose','Sage','Teal','Vivid','Warm','Zinc'];
  const NOUNS     = ['Badger','Bear','Crane','Deer','Eagle','Falcon','Fox','Hawk','Ibis','Lynx','Mole','Orca','Panda','Raven','Seal','Tiger','Viper','Wolf','Bison','Heron'];

  function getUser() {
    let id    = localStorage.getItem('idf-n-id');
    let name  = localStorage.getItem('idf-n-name');
    let color = localStorage.getItem('idf-n-color');
    if (!id) {
      id    = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      name  = ADJS[Math.random() * ADJS.length | 0] + ' ' + NOUNS[Math.random() * NOUNS.length | 0];
      color = PALETTE[Math.random() * PALETTE.length | 0];
      localStorage.setItem('idf-n-id',    id);
      localStorage.setItem('idf-n-name',  name);
      localStorage.setItem('idf-n-color', color);
    }
    return { id, name, color };
  }

  const ME      = getUser();
  const PAGE_ID = (location.pathname.split('/').pop() || 'index').replace('.html', '').replace(/\./g, '-') || 'index';

  // ── ADMIN ──────────────────────────────────────────────────────────────────
  const ADMIN_KEY = '310220';

  function isAdmin() { return localStorage.getItem('idf-n-admin') === '1'; }

  function promptAdmin() {
    if (isAdmin()) {
      if (confirm('Deactivate admin mode?')) {
        localStorage.removeItem('idf-n-admin');
        syncAdminBtn();
        render(allNotes);
      }
      return;
    }
    const k = prompt('Enter admin key:');
    if (k === null) return;
    if (k === ADMIN_KEY) {
      localStorage.setItem('idf-n-admin', '1');
      syncAdminBtn();
      render(allNotes);
    } else {
      alert('Incorrect key.');
    }
  }

  function syncAdminBtn() {
    const b = document.getElementById('idf-n-admin-btn');
    if (!b) return;
    b.className = isAdmin() ? 'active' : '';
    b.textContent = isAdmin() ? 'Admin ✓' : 'Admin';
    b.title = isAdmin() ? 'Admin mode ON — click to deactivate' : 'Enter admin key to delete any note';
  }

  // ── STATE ──────────────────────────────────────────────────────────────────
  let db           = null;
  let allNotes     = {};          // { [noteId]: noteData }
  let pendingEl    = null;        // element staged for annotation
  let pendingCtx   = '';          // selected text that triggered the dialog
  let editingId    = null;        // note being edited

  // ── CSS ────────────────────────────────────────────────────────────────────
  const STYLES = `
    /* ── Floating "Add note" button on text selection ── */
    #idf-n-sel-btn {
      position:fixed; display:none;
      align-items:center; gap:5px;
      padding:5px 12px;
      background:#1a1a2a; border:1px solid #3a3a50; border-radius:6px;
      font-family:'IBM Plex Mono',monospace; font-size:11px;
      color:#f0ede8; cursor:pointer; z-index:400;
      box-shadow:0 4px 16px rgba(0,0,0,.45);
      transition:background .12s;
      letter-spacing:.04em;
    }
    #idf-n-sel-btn:hover { background:#2a2a3a; }
    #idf-n-sel-btn .ico { font-size:12px; }

    /* ── Dialog ── */
    #idf-n-dlg {
      position:fixed; inset:0; z-index:600; display:none;
      align-items:center; justify-content:center;
      background:rgba(12,12,20,.72); backdrop-filter:blur(4px);
    }
    #idf-n-dlg.open { display:flex; }
    #idf-n-dlg-box {
      background:#13131e; border:1px solid #3a3a50; border-radius:12px;
      padding:24px; width:420px; max-width:90vw;
      box-shadow:0 24px 80px rgba(0,0,0,.65);
    }
    #idf-n-dlg-lbl {
      font-family:'IBM Plex Mono',monospace; font-size:11px;
      letter-spacing:.1em; text-transform:uppercase;
      color:#6a6878; margin-bottom:12px;
    }
    #idf-n-dlg-ctx {
      font-size:12px; color:#6a6878; font-style:italic;
      background:rgba(255,255,255,.03); border-left:2px solid #3a3a50;
      border-radius:4px; padding:8px 12px; margin-bottom:12px;
      line-height:1.4; overflow:hidden; display:-webkit-box;
      -webkit-line-clamp:3; -webkit-box-orient:vertical;
    }
    #idf-n-dlg-ta {
      width:100%; min-height:96px;
      background:#0c0c14; border:1px solid #3a3a50; border-radius:6px;
      padding:10px 12px;
      font-family:'IBM Plex Sans',sans-serif; font-size:13px;
      color:#f0ede8; line-height:1.5; resize:vertical; outline:none;
    }
    #idf-n-dlg-ta:focus { border-color:#6a6878; }
    #idf-n-dlg-who {
      display:flex; align-items:center; gap:7px;
      margin:10px 0 0;
      font-family:'IBM Plex Mono',monospace; font-size:11px; color:#6a6878;
    }
    #idf-n-dlg-who .dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
    #idf-n-dlg-hint {
      font-size:10px; color:#3a3a50; margin-left:auto; letter-spacing:.03em;
    }
    #idf-n-dlg-acts {
      display:flex; justify-content:flex-end; gap:8px; margin-top:16px;
    }
    .idf-n-dlg-btn {
      font-family:'IBM Plex Mono',monospace; font-size:11px;
      padding:7px 16px; border-radius:6px; cursor:pointer;
      letter-spacing:.04em; transition:background .12s;
    }
    .idf-n-dlg-btn.cancel {
      background:transparent; border:1px solid #3a3a50; color:#6a6878;
    }
    .idf-n-dlg-btn.cancel:hover { background:#1a1a2a; color:#a8a6b4; }
    .idf-n-dlg-btn.save {
      background:rgba(232,115,74,.14); border:1px solid rgba(232,115,74,.4); color:#e8734a;
    }
    .idf-n-dlg-btn.save:hover { background:rgba(232,115,74,.24); }

    /* ── Notes panel ── */
    #idf-n-panel {
      position:fixed; right:0; top:48px; bottom:0; width:300px;
      background:#13131e; border-left:1px solid #2a2a3a;
      z-index:300; display:flex; flex-direction:column;
      transform:translateX(100%); transition:transform .2s ease;
      box-shadow:-8px 0 32px rgba(0,0,0,.3);
    }
    #idf-n-panel.open { transform:translateX(0); }
    #idf-n-panel-hdr {
      padding:14px 16px; border-bottom:1px solid #2a2a3a;
      display:flex; align-items:center; justify-content:space-between;
      font-family:'IBM Plex Mono',monospace; font-size:11px;
      letter-spacing:.1em; text-transform:uppercase; color:#6a6878;
      flex-shrink:0;
    }
    #idf-n-panel-hdr button {
      background:transparent; border:none; color:#6a6878;
      font-size:14px; cursor:pointer; padding:0 2px; line-height:1;
    }
    #idf-n-panel-hdr button:hover { color:#f0ede8; }
    #idf-n-panel-list {
      overflow-y:auto; flex:1; padding:10px;
      display:flex; flex-direction:column; gap:6px;
    }
    .idf-n-card {
      background:#1a1a2a; border:1px solid #2a2a3a;
      border-radius:8px; padding:12px; cursor:pointer;
      transition:border-color .12s;
    }
    .idf-n-card:hover { border-color:#3a3a50; }
    .idf-n-card-hdr {
      display:flex; align-items:center; gap:6px; margin-bottom:6px;
    }
    .idf-n-card-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
    .idf-n-card-name { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#a8a6b4; }
    .idf-n-card-time { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#6a6878; margin-left:auto; }
    .idf-n-card-txt  { font-size:12px; color:#f0ede8; line-height:1.4; margin-bottom:4px; }
    .idf-n-card-ctx  { font-size:11px; color:#6a6878; font-style:italic; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    #idf-n-panel-empty { padding:32px 16px; text-align:center; font-family:'IBM Plex Mono',monospace; font-size:11px; color:#3a3a50; line-height:1.8; }

    /* ── Nav button ── */
    #idf-n-nav-btn {
      font-family:'IBM Plex Mono',monospace; font-size:11px;
      padding:4px 12px; border-radius:5px;
      border:1px solid #3a3a50; background:transparent; color:#6a6878;
      cursor:pointer; letter-spacing:.04em;
      transition:color .15s, background .15s, border-color .15s;
      white-space:nowrap; display:flex; align-items:center; gap:6px;
      margin-left:auto; flex-shrink:0;
    }
    #idf-n-nav-btn:hover { color:#a8a6b4; background:#1a1a2a; }
    #idf-n-nav-btn.on {
      color:#e8734a; border-color:rgba(232,115,74,.4);
      background:rgba(232,115,74,.08);
    }
    #idf-n-nav-badge {
      background:rgba(232,115,74,.18); color:#e8734a;
      border-radius:100px; padding:0 6px;
      font-size:10px; min-width:16px; text-align:center;
    }
    #idf-n-nav-btn.on #idf-n-badge { background: rgba(232,115,74,.25); }

    /* ── Alt-click hint ── */
    #idf-n-alt-hint {
      position:fixed; bottom:20px; left:50%; transform:translateX(-50%);
      background:#1a1a2a; border:1px solid #3a3a50; border-radius:6px;
      padding:7px 16px; font-family:'IBM Plex Mono',monospace; font-size:11px;
      color:#6a6878; z-index:200; pointer-events:none;
      opacity:0; transition:opacity .3s;
    }
    #idf-n-alt-hint.show { opacity:1; }

    /* ── Panel hint bar ── */
    #idf-n-hint {
      padding:10px 16px 8px; border-bottom:1px solid #2a2a3a;
      display:flex; flex-direction:column; gap:4px;
      background:rgba(255,255,255,.015); flex-shrink:0;
    }
    .idf-n-hint-row {
      display:flex; align-items:center; gap:8px;
      font-family:'IBM Plex Mono',monospace; font-size:10px;
      color:#6a6878; line-height:1.5; letter-spacing:.03em;
    }
    .idf-n-hint-row .k {
      color:#a8a6b4; flex-shrink:0; min-width:14px; text-align:center;
    }

    /* ── Admin button in panel header ── */
    #idf-n-admin-btn {
      background:transparent;
      border:1px solid #3a3a50;
      border-radius:4px;
      color:#6a6878; font-size:10px; cursor:pointer;
      padding:3px 8px; line-height:1;
      font-family:'IBM Plex Mono',monospace; letter-spacing:.04em;
      transition:color .15s, border-color .15s; flex-shrink:0;
    }
    #idf-n-admin-btn:hover { color:#a8a6b4; border-color:#6a6878; }
    #idf-n-admin-btn.active { color:#e8734a; border-color:rgba(232,115,74,.5); }

    /* ── Delete button inside panel card ── */
    .idf-n-card-del {
      background:transparent; border:none;
      color:#3a3a50; font-size:11px; cursor:pointer;
      padding:0 2px; margin-left:auto;
      font-family:'IBM Plex Mono',monospace;
      transition:color .12s; flex-shrink:0; line-height:1;
    }
    .idf-n-card-del:hover { color:#e8734a; }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = STYLES;
  document.head.appendChild(styleEl);

  // ── FIREBASE LOADER ────────────────────────────────────────────────────────
  function isConfigured() {
    return !FIREBASE_CONFIG.apiKey.startsWith('REPLACE_');
  }

  function loadFirebase(cb) {
    if (!isConfigured()) {
      console.warn('[IDF Notes] Firebase not configured — see setup instructions at top of notes.js');
      cb(null); return;
    }
    const load = (src, next) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = next;
      s.onerror = () => { console.error('[IDF Notes] Failed to load Firebase:', src); cb(null); };
      document.head.appendChild(s);
    };
    const v = 'https://www.gstatic.com/firebasejs/10.7.0/';
    load(v + 'firebase-app-compat.js', () =>
      load(v + 'firebase-database-compat.js', () => {
        try {
          if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
          db = firebase.database();
          cb(db);
        } catch (e) { console.error('[IDF Notes] Init error:', e); cb(null); }
      })
    );
  }

  // ── DATABASE OPS ───────────────────────────────────────────────────────────
  function pageRef() { return db && db.ref(DB_ROOT + '/' + PAGE_ID); }

  function dbSave(data) {
    if (!db) { alert('Firebase not configured. See notes.js setup instructions.'); return Promise.reject(); }
    return pageRef().push(data);
  }

  function dbUpdate(id, patch) { db && pageRef().child(id).update(patch); }
  function dbDelete(id)        { db && pageRef().child(id).remove(); }

  function dbSubscribe(cb) {
    if (!db) return;
    pageRef().on('value', snap => cb(snap.val() || {}));
  }

  // ── SELECTOR HELPERS ───────────────────────────────────────────────────────
  // Build a stable path selector. Prefer ID-rooted paths.
  function buildSelector(el) {
    if (!el || el === document.body) return 'body';
    const parts = [];
    let cur = el;
    while (cur && cur !== document.body) {
      let seg = cur.tagName.toLowerCase();
      if (cur.id) { parts.unshift(seg + '#' + cur.id); break; }
      const sibs = cur.parentNode
        ? [...cur.parentNode.children].filter(s => s.tagName === cur.tagName)
        : [];
      if (sibs.length > 1) seg += ':nth-of-type(' + (sibs.indexOf(cur) + 1) + ')';
      parts.unshift(seg);
      cur = cur.parentNode;
    }
    return parts.join(' > ');
  }

  // Walk up to the nearest "block" element we want to annotate
  const ANNOTATABLE = [
    'section', 'h2', 'h3', 'p', 'li',
    '.axiom', '.role-card', '.principle-card', '.artifact-card',
    '.ritual-row', '.comm-card', '.flow-cell', '.layer-cell', '.comm-payload'
  ];

  function nearestBlock(el) {
    let cur = el;
    while (cur && cur !== document.body) {
      if (cur.matches && ANNOTATABLE.some(s => cur.matches(s))) return cur;
      cur = cur.parentElement;
    }
    return (el.closest ? el.closest('section') : null) || document.body;
  }

  // ── RENDER ─────────────────────────────────────────────────────────────────
  function render(notes) {
    allNotes = notes;
    updateBadge(Object.keys(notes).length);
    renderPanel(notes);
  }

  // ── DIALOG ─────────────────────────────────────────────────────────────────
  const dlg = document.createElement('div');
  dlg.id = 'idf-n-dlg';
  dlg.innerHTML = `
    <div id="idf-n-dlg-box">
      <div id="idf-n-dlg-lbl">Add note</div>
      <div id="idf-n-dlg-ctx"></div>
      <textarea id="idf-n-dlg-ta" placeholder="Type your note… (Ctrl+Enter to save)"></textarea>
      <div id="idf-n-dlg-who">
        <div class="dot" style="background:${ME.color}"></div>
        <span>${esc(ME.name)}</span>
        <span id="idf-n-dlg-hint">anonymous · this device only</span>
      </div>
      <div id="idf-n-dlg-acts">
        <button class="idf-n-dlg-btn cancel" id="idf-n-dlg-x">Cancel</button>
        <button class="idf-n-dlg-btn save"   id="idf-n-dlg-ok">Save note</button>
      </div>
    </div>`;
  document.body.appendChild(dlg);

  function openDlg(el, ctx, noteId, existing) {
    pendingEl   = el  || null;
    pendingCtx  = ctx || '';
    editingId   = noteId || null;
    const ctxEl = document.getElementById('idf-n-dlg-ctx');
    const ta    = document.getElementById('idf-n-dlg-ta');
    const lbl   = document.getElementById('idf-n-dlg-lbl');
    ctxEl.textContent  = ctx ? '\u201c' + ctx.slice(0, 200) + '\u201d' : '';
    ctxEl.style.display = ctx ? 'block' : 'none';
    ta.value = existing || '';
    lbl.textContent = noteId ? 'Edit note' : 'Add note';
    dlg.classList.add('open');
    setTimeout(() => ta.focus(), 40);
  }

  function closeDlg() {
    dlg.classList.remove('open');
    pendingEl = null; pendingCtx = ''; editingId = null;
  }

  document.getElementById('idf-n-dlg-x').onclick  = closeDlg;
  dlg.addEventListener('click', e => { if (e.target === dlg) closeDlg(); });

  document.getElementById('idf-n-dlg-ok').onclick = () => {
    const text = document.getElementById('idf-n-dlg-ta').value.trim();
    if (!text) return;
    if (editingId) {
      dbUpdate(editingId, { note: text, updatedAt: new Date().toISOString() });
    } else {
      dbSave({
        selector:  buildSelector(pendingEl || document.body),
        context:   pendingCtx.slice(0, 200),
        note:      text,
        userId:    ME.id,
        userName:  ME.name,
        userColor: ME.color,
        createdAt: new Date().toISOString()
      });
    }
    closeDlg();
  };

  document.getElementById('idf-n-dlg-ta').addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') document.getElementById('idf-n-dlg-ok').click();
    if (e.key === 'Escape') closeDlg();
  });

  // ── TEXT SELECTION → FLOATING BUTTON ───────────────────────────────────────
  const selBtn = document.createElement('button');
  selBtn.id = 'idf-n-sel-btn';
  selBtn.innerHTML = '<span class="ico">✏</span> Add note';
  document.body.appendChild(selBtn);

  let selEl = null, selTxt = '';

  document.addEventListener('mouseup', e => {
    if (e.target.closest('#idf-n-panel,#idf-n-dlg,#idf-n-sel-btn,#idf-nav')) return;
    setTimeout(() => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) { selBtn.style.display = 'none'; return; }
      const txt = sel.toString().trim();
      if (txt.length < 3) { selBtn.style.display = 'none'; return; }

      const range = sel.getRangeAt(0);
      const rect  = range.getBoundingClientRect();
      const node  = range.commonAncestorContainer;
      selEl  = nearestBlock(node.nodeType === 3 ? node.parentNode : node);
      selTxt = txt;

      selBtn.style.display = 'flex';
      selBtn.style.left = Math.max(8, rect.left + rect.width / 2 - 44) + 'px';
      selBtn.style.top  = (rect.top - 42) + 'px';
    }, 10);
  });

  document.addEventListener('mousedown', e => {
    if (e.target !== selBtn) setTimeout(() => {
      if (!window.getSelection || window.getSelection().isCollapsed) selBtn.style.display = 'none';
    }, 120);
  });

  selBtn.addEventListener('click', () => {
    selBtn.style.display = 'none';
    window.getSelection().removeAllRanges();
    openDlg(selEl, selTxt);
  });

  // ── ALT+CLICK TO ANNOTATE ELEMENT ─────────────────────────────────────────
  const hint = document.createElement('div');
  hint.id = 'idf-n-alt-hint';
  hint.textContent = 'Alt + click any block to add a note';
  document.body.appendChild(hint);

  let hintTimer = null;
  document.addEventListener('keydown', e => {
    if (e.key === 'Alt') {
      clearTimeout(hintTimer);
      hint.classList.add('show');
      hintTimer = setTimeout(() => hint.classList.remove('show'), 2200);
    }
  });

  document.addEventListener('click', e => {
    if (!e.altKey) return;
    if (e.target.closest('#idf-n-panel,#idf-n-dlg,#idf-n-sel-btn,#idf-nav')) return;
    e.preventDefault();
    const el = nearestBlock(e.target);
    if (el) openDlg(el, el.textContent.trim().slice(0, 200));
  });

  // ── SIDE PANEL ─────────────────────────────────────────────────────────────
  const panel = document.createElement('div');
  panel.id = 'idf-n-panel';
  panel.innerHTML = `
    <div id="idf-n-panel-hdr">
      <span>Notes</span>
      <button id="idf-n-admin-btn" title="Enter admin key to delete any note">Admin</button>
      <button title="Close" id="idf-n-panel-x">✕</button>
    </div>
    <div id="idf-n-hint">
      <div class="idf-n-hint-row"><span class="k">✏</span> Select any text, then click <strong style="color:#6a6878">Add note</strong></div>
      <div class="idf-n-hint-row"><span class="k">⌥</span> Alt + click any section or card</div>
      <div class="idf-n-hint-row"><span class="k">↩</span> Click a note here to scroll to it</div>
    </div>
    <div id="idf-n-panel-list">
      <div id="idf-n-panel-empty">No notes yet.</div>
    </div>`;
  document.body.appendChild(panel);

  document.getElementById('idf-n-panel-x').onclick     = () => panel.classList.remove('open');
  document.getElementById('idf-n-admin-btn').onclick   = promptAdmin;
  syncAdminBtn();

  function renderPanel(notes) {
    const list  = document.getElementById('idf-n-panel-list');
    const empty = document.getElementById('idf-n-panel-empty');
    const entries = Object.entries(notes).sort(([, a], [, b]) => new Date(b.createdAt) - new Date(a.createdAt));

    if (!entries.length) {
      list.innerHTML = `<div id="idf-n-panel-empty">No notes yet.<br>Select text or Alt+click a block to add one.</div>`;
      return;
    }

    list.innerHTML = entries.map(([id, n]) => {
      const canDel = n.userId === ME.id || isAdmin();
      return `
        <div class="idf-n-card" data-sel="${esc(n.selector)}">
          <div class="idf-n-card-hdr">
            <div class="idf-n-card-dot" style="background:${n.userColor}"></div>
            <span class="idf-n-card-name">${esc(n.userName)}</span>
            <span class="idf-n-card-time">${relTime(n.createdAt)}</span>
            ${canDel ? `<button class="idf-n-card-del" data-id="${esc(id)}" title="Delete note">✕</button>` : ''}
          </div>
          <div class="idf-n-card-txt">${esc(n.note)}</div>
          ${n.context ? `<div class="idf-n-card-ctx">"${esc(n.context)}"</div>` : ''}
        </div>`;
    }).join('');

    list.querySelectorAll('.idf-n-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.classList.contains('idf-n-card-del')) return; // handled below
        let el; try { el = document.querySelector(card.dataset.sel); } catch (_) {}
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.style.outline = '2px solid rgba(232,115,74,.5)';
          setTimeout(() => { el.style.outline = ''; }, 1600);
        }
      });
    });

    list.querySelectorAll('.idf-n-card-del').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        if (confirm('Delete this note?')) dbDelete(btn.dataset.id);
      });
    });
  }

  // ── NAV BUTTON ─────────────────────────────────────────────────────────────
  function tryInjectNav() {
    if (document.getElementById('idf-n-nav-btn')) return;
    const inner = document.querySelector('#idf-nav .nav-inner');
    // Wait until nav.js has finished rendering (brand link is the signal)
    if (!inner || !inner.querySelector('.nav-brand')) { setTimeout(tryInjectNav, 80); return; }

    const btn = document.createElement('button');
    btn.id = 'idf-n-nav-btn';
    btn.className = 'on'; // panel starts open
    btn.title = 'Toggle notes panel';
    btn.innerHTML = 'Notes <span id="idf-n-badge" class="idf-n-nav-badge">0</span>';
    btn.addEventListener('click', toggleNotes);
    inner.appendChild(btn);
  }

  function updateBadge(count) {
    const badge = document.getElementById('idf-n-badge');
    if (badge) badge.textContent = count;
  }

  function toggleNotes() {
    const isOpen = panel.classList.toggle('open');
    const btn = document.getElementById('idf-n-nav-btn');
    if (btn) {
      btn.className = isOpen ? 'on' : '';
      const count = Object.keys(allNotes).length;
      btn.innerHTML = `Notes <span id="idf-n-badge" class="idf-n-nav-badge">${count}</span>`;
      btn.addEventListener('click', toggleNotes);
    }
  }

  // ── UTILS ──────────────────────────────────────────────────────────────────
  function esc(s) {
    return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function relTime(iso) {
    if (!iso) return '';
    const d = new Date(iso), ms = Date.now() - d;
    if (ms < 55000)     return 'just now';
    if (ms < 3600000)   return (ms / 60000 | 0) + 'm ago';
    if (ms < 86400000)  return (ms / 3600000 | 0) + 'h ago';
    if (ms < 604800000) return (ms / 86400000 | 0) + 'd ago';
    return d.toLocaleDateString();
  }

  // ── BOOT ───────────────────────────────────────────────────────────────────
  tryInjectNav();
  panel.classList.add('open');
  loadFirebase(database => {
    if (!database) return;
    dbSubscribe(notes => render(notes));
  });

})();
