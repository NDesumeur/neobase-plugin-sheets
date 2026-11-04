// NeoSheets : ton appli d'origine (HTML et code inchangés), livrée en plugin.
// Ses données sont dans le dossier du plugin, que NeoBase sauvegarde (synchro cloud et sauvegardes) ; à la première ouverture elle reprend ce que tu avais dans NeoBase.
// Elle tourne dans le bac à sable de NeoBase, avec ses outils d'interface (ctx.host) et seulement les autorisations de son plugin.json.
const HTML = "";
/*CSS-MOVED*/ const CSS = `.ofMenu .tbtn{justify-content:flex-start;font:14px var(--text);letter-spacing:0}
.ofDropM .tbtn{justify-content:flex-start;font:14px var(--text);letter-spacing:0}
.ofApp{display:flex;background:var(--bg0)}
.ofSide{width:260px;flex:none;display:flex;flex-direction:column;gap:10px;padding:18px 14px;border-right:3px solid var(--line);background:rgba(var(--d8),.6);overflow:hidden}
.ofSide .row{gap:8px}
.ofSide .btn{flex:1;padding:8px 6px;font-size:9px}
.ofSearch{padding:7px 10px;font-size:14px}
.ofList{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:2px;margin:0 -6px;padding:0 6px}
.ofItem{all:unset;cursor:var(--cp,pointer);display:flex;flex-direction:column;gap:2px;padding:8px 10px;color:var(--lilac)}
.ofItem .n{color:#fff;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ofItem .hint{font-size:12px}
.ofItem:hover{background:rgba(255,255,255,.04)}
.ofItem.on{background:rgba(var(--mgr),.18);box-shadow:inset 3px 0 0 var(--magenta)}
.ofBody{flex:1;min-width:0;display:flex;flex-direction:column}
.ofEmpty{flex:1;display:grid;place-items:center;padding:30px}
.ofEmptyIn{max-width:520px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:14px}
.ofEmptyIn img{width:96px;height:96px;image-rendering:pixelated}
.ofEmptyIn h2{font:16px var(--title);color:#fff;margin:0}
.ofEmptyIn p{font-size:16px;line-height:1.5;margin:0}
.ofMain{flex:1;min-height:0;display:flex;flex-direction:column}
.f.ofTitle{margin:12px 16px 0;width:auto;align-self:stretch;font-size:18px;padding:8px 12px;background:transparent;box-shadow:none}
.ofTitle:focus{background:var(--field)}
.ofBar{display:flex;flex-wrap:wrap;gap:3px;align-items:center;padding:8px 14px;border-bottom:3px solid var(--line)}
.ofTb{all:unset;cursor:var(--cp,pointer);min-width:30px;height:30px;padding:0 7px;display:grid;place-items:center;color:var(--lilac);font-size:15px;background:var(--btn)}
.ofTb:hover{background:var(--btnh);color:#fff}
.ofTb.on{background:rgba(var(--mgr),.4);color:#fff}
.ofTb.b{font-weight:bold}
.ofTb.i{font-style:italic}
.ofTb.u{text-decoration:underline}
.ofTb.s{text-decoration:line-through}
.ofSep{width:2px;height:22px;background:var(--line);margin:0 4px}
.ofSel{height:30px;padding:0 6px;font-size:14px}
.ofColor{width:30px;height:30px;padding:0;border:0;background:none;cursor:var(--cp,pointer)}
.ofDrop{position:relative}
.ofDrop .ofTb{font-size:14px}
.ofDropM{position:absolute;top:34px;left:0;z-index:20;--fill:var(--win);--c:var(--line2);display:none;flex-direction:column;min-width:210px;padding:6px;filter:drop-shadow(0 4px 0 var(--out))}
.ofDrop.on .ofDropM{display:flex}
.ofDropM .tbtn{padding:8px 10px}
.ofDropM .tbtn:hover{background:rgba(var(--mgr),.16);color:#fff}
.ofStatus{padding:6px 16px;font-size:13px;color:var(--muted);border-top:3px solid var(--line)}
.shFx{display:flex;align-items:center;gap:8px;padding:6px 14px;border-bottom:3px solid var(--line)}
.shName{min-width:80px;font:11px var(--title);color:var(--lilac)}
.shFxL{font-style:italic;color:var(--muted)}
.shInput{flex:1;padding:6px 10px;font:14px Consolas,monospace}
.shGridW{flex:1;overflow:auto;position:relative;background:#fff;outline:none}
/* ---- l'allure d'un tableur ---- */
.shX{background:#fff;color:#202124;font-family:'Segoe UI',Arial,sans-serif}
.shX .f.ofTitle{margin:0;padding:10px 16px 6px;font:600 18px 'Segoe UI',Arial,sans-serif;color:#202124;background:#fff;box-shadow:none;border-radius:0}
.shX .ofTitle:focus{background:#f1f3f4}
.shX .ofBar{background:#f1f3f4;border-bottom:1px solid #dadce0;padding:4px 10px;gap:2px}
.shX .ofTb{background:transparent;color:#3c4043;border-radius:4px;min-width:28px;height:28px;font:15px 'Segoe UI',Arial,sans-serif}
.shX .ofTb:hover{background:#e3e6e8;color:#202124}.shX .ofTb.on{background:#d3e3fd;color:#041e49}
.shX .ofSep{background:#c7cacd;width:1px;margin:0 6px}
.shX .ofSel{height:28px;background:#fff;color:#202124;border:1px solid #dadce0;border-radius:4px;font:13px 'Segoe UI',Arial,sans-serif;box-shadow:none}
.shX .ofColor{height:28px;width:28px}
.shX .ofDrop .ofTb{padding:0 10px;font-size:13px}
.shX .ofDropM{background:#fff;--fill:#fff;border:1px solid #dadce0;border-radius:6px;box-shadow:0 6px 18px rgba(0,0,0,.25);filter:none;top:32px}
.shX .ofDropM .tbtn{color:#202124;font:13px 'Segoe UI',Arial,sans-serif;border-radius:4px}.shX .ofDropM .tbtn:hover{background:#f1f3f4;color:#202124}
.shX .shFx{background:#fff;border-bottom:1px solid #dadce0;padding:4px 8px;gap:0}
.shX .shName{min-width:84px;text-align:center;font:13px 'Segoe UI',Arial,sans-serif;color:#202124;padding:5px 8px;border:1px solid #dadce0;border-radius:4px 0 0 4px;background:#fff}
.shX .shFxL{padding:5px 12px;font:italic 700 15px 'Times New Roman',serif;color:#80868b;border-top:1px solid #dadce0;border-bottom:1px solid #dadce0;background:#fff}
.shX .shInput{background:#fff;color:#202124;font:13px 'Segoe UI',Arial,sans-serif;border:1px solid #dadce0;border-radius:0 4px 4px 0;box-shadow:none;padding:5px 10px}
.shX .shInput:focus{border-color:#1a73e8;outline:none}
.shX .shGridW{background:#fff}
.shTbl{border-collapse:separate;border-spacing:0;table-layout:fixed;font:13px Arial,'Segoe UI',sans-serif;color:#202124;user-select:none}
.shTbl th{position:sticky;background:#f8f9fa;color:#5f6368;font:12px 'Segoe UI',Arial,sans-serif;font-weight:400;text-align:center;height:22px;padding:0 4px;z-index:1;border-right:1px solid #c7c7c7;border-bottom:1px solid #c7c7c7;overflow:visible}
.shTbl tr:first-child th{top:0;cursor:default}
.shTbl th.on{background:#e8eaed;color:#202124;font-weight:600}
.shTbl tr:first-child th.on{box-shadow:inset 0 -3px 0 #1a73e8}.shTbl th.shRh.on{box-shadow:inset -3px 0 0 #1a73e8}
.shTbl th.shRh{left:0;width:46px;z-index:2;cursor:default}
.shTbl th.shCorner{top:0;left:0;z-index:3;width:46px;background:#f8f9fa linear-gradient(135deg,transparent 60%,#bdc1c6 60%) no-repeat right 4px bottom 4px/12px 12px}
.shTbl th.shCh::after{content:'';position:absolute;right:-3px;top:0;bottom:0;width:6px;cursor:col-resize;z-index:2}
.shTbl th.shCh:hover{background:#eceff1}
.shTbl td{border-right:1px solid #e1e3e6;border-bottom:1px solid #e1e3e6;height:22px;padding:0 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:cell;background:#fff}
.shTbl td.err{color:#d93025}.shTbl td.num{text-align:right}
.shTbl td.sel{background-color:#e8f0fe!important}.shTbl td.cur{outline:2px solid #1a73e8;outline-offset:-2px;background-color:#fff!important}
.shEdit{border:2px solid #1a73e8;font:13px Arial,'Segoe UI',sans-serif;box-shadow:0 2px 6px rgba(0,0,0,.25)}
.shX .shTabs{background:#f1f3f4;border-top:1px solid #dadce0;padding:0 8px;gap:0}
.shX .shTab{background:transparent;color:#3c4043;border-radius:0 0 4px 4px;padding:7px 18px;font:13px 'Segoe UI',Arial,sans-serif}
.shX .shTab:hover{background:#e3e6e8}.shX .shTab.on{background:#fff;color:#188038;font-weight:600;box-shadow:inset 0 -3px 0 #188038,0 1px 3px rgba(0,0,0,.2)}
.shX .shTab.add{font:700 16px 'Segoe UI',Arial,sans-serif;padding:4px 14px}
.shX .ofStatus{background:#f8f9fa;color:#5f6368;border-top:1px solid #dadce0;text-align:right;font:12px 'Segoe UI',Arial,sans-serif;padding:5px 14px}
.shEdit{position:absolute;z-index:5;padding:0 4px;outline:none;color:#111;background:#fff;box-sizing:border-box}
.shTab{all:unset;cursor:var(--cp,pointer);padding:6px 14px;color:var(--lilac);font-size:14px;background:var(--btn)}
.shTab.on{background:rgba(var(--mgr),.35);color:#fff}
.shTab.add{font:12px var(--title)}
`;  // le style de ce plugin (il utilise les variables du thème de NeoBase)
export default async function (ctx) {
  const view = ctx.view;
  if (!ctx.host) { view.textContent = "Ce plugin doit être approuvé par NeoBase pour s'ouvrir."; return; }
  const host = ctx.host, { el, toast, sfx, ask, newTab, pixIcon, PIX, WX } = host;
  const nbConfirm = host.confirm;  // la boîte de confirmation de NeoBase, à la place de celle de Windows
  const folder = ctx.folder, legacy = ctx.legacy || {};
  ctx.host.addStyle(CSS);
  view.innerHTML = HTML;
  const $ = id => id === "sheetsApp" ? view : (view.querySelector('#' + id) || document.getElementById(id));  // les identifiants de ta vue d'abord, puis ceux de la page (fenêtres, menus)
  const doc = async n => { try { return await folder.read(n); } catch { return null; } };
  const __icon = () => ctx.icon;  // l'icône de ce plugin
  const __picks = { "office": d => ({...d, files: (d.files || []).filter(f => f.kind === 'sheet')}) };
  const __storeGet = async n => {
    let d = await doc(n);
    if (d == null) { try { d = await neo.storeGet(n); } catch { d = null; } if (d && __picks[n]) d = __picks[n](d); if (d != null) await folder.write(n, d); }  // première ouverture : tu retrouves ce que tu avais
    return d;
  };
  const __storeSet = async (n, d) => { await folder.write(n, d); return true; };
  // ---- ton code d'origine ----
/* Office suite (NeoDocs, NeoSheets, NeoSlides): every file lives in office.json = {files: [{id, kind: 'doc' | 'sheet' | 'slides', name, created, t, data}]},
   synced between PCs and in the backups like the other data (more-main.js). This file holds what the three apps share:
   the store, and the page of each app (list of its files on the left: new, open a Word / Excel file, rename, duplicate, delete). */
let office = null, officeTimer = null;
const ofId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const officeReady = () => office ? Promise.resolve(office) : __storeGet('office').then(d => office = Array.isArray(d?.files) ? d : {files: []});
function officeSave() {
  clearTimeout(officeTimer);
  officeTimer = setTimeout(() => { officeTimer = null; __storeSet('office', office).catch(e => toast('Sauvegarde impossible : ' + e.message, true)); }, 600);
}
const officeFlush = () => { if (officeTimer) { clearTimeout(officeTimer); officeTimer = null; return __storeSet('office', office); } };
addEventListener('pagehide', () => { if (officeTimer) __storeSet('office', office); });
const OF_KIND = {};  // kind -> app ({key, name, newData(), open(file), close(), ui})
// another PC changed office.json: take it (unless a save of this PC is waiting), the file on screen is reopened
window.neo?.onDataChanged(async name => {
  if (name !== 'office' || officeTimer) return;
  const d = await __storeGet('office');
  if (!Array.isArray(d?.files) || JSON.stringify(d) === JSON.stringify(office)) return;
  office = d;
  for (const k of Object.values(OF_KIND)) if (k.ui) { ofList(k); const f = office.files.find(f => f.id === k.cur?.id); if (f && f.t !== k.cur.t) k.open(f); else if (!f && k.cur) ofPick(k, null); }
  toast('Mis à jour depuis un autre PC');
});
const ofWhen = t => { const d = new Date(t), now = new Date(); return d.toDateString() === now.toDateString() ? d.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'}) : d.toLocaleDateString('fr-FR', {day: 'numeric', month: 'short', year: d.getFullYear() === now.getFullYear() ? undefined : 'numeric'}); };
const ofFiles = k => office.files.filter(f => f.kind === k.kind).sort((a, b) => b.t - a.t);
function ofTouch(k, file) { file.t = Date.now(); officeSave(); ofList(k); }
function ofList(k) {
  const q = k.ui.search.value.trim().toLowerCase(), list = ofFiles(k).filter(f => !q || f.name.toLowerCase().includes(q));
  k.ui.list.replaceChildren(...(list.length ? list.map(f => {
    const b = el('button', 'ofItem' + (f.id === k.cur?.id ? ' on' : ''));
    b.append(el('span', 'n', f.name), el('span', 'hint', ofWhen(f.t)));
    b.onclick = () => ofPick(k, f);
    b.oncontextmenu = e => { e.preventDefault(); ofPick(k, f); ofMenu(k, f, e); };
    return b;
  }) : [el('div', 'hint', q ? 'Aucun fichier ne correspond.' : 'Aucun fichier pour l\'instant. Crée-en un ou ouvre un fichier de ton PC.')]));
}
function ofPick(k, f) {
  k.cur = f; ofList(k);
  k.ui.empty.style.display = f ? 'none' : ''; k.ui.main.style.display = f ? '' : 'none';
  if (f) k.open(f); else k.close?.();
}
async function ofNew(k, name, data) {
  await officeReady();
  const f = {id: ofId(), kind: k.kind, name: name || k.newName + ' ' + (ofFiles(k).length + 1), created: Date.now(), t: Date.now(), data: data ?? k.newData()};
  office.files.push(f); officeSave(); ofPick(k, f); sfx('open');
  return f;
}
async function ofImport(k, test) {
  try {
    const r = await window.neo.officeImport(k.kind, test); if (!r) return null;
    const f = await ofNew(k, r.name, k.fromImport(r)); toast('« ' + r.name + ' » ouvert dans ' + k.name); return f;
  } catch (e) { toast('Ouverture impossible : ' + e.message.replace(/^.*Error: /, ''), true); return null; }
}
async function ofExport(k, format, test) {
  const f = k.cur; if (!f) return '';
  try {
    const p = await window.neo.officeExport({kind: k.kind, name: f.name, format, ...k.toExport(f, format)}, test);
    if (p) toast('Exporté : ' + p.split(/[\\/]/).pop());
    return p;
  } catch (e) { toast('Export impossible : ' + e.message.replace(/^.*Error: /, ''), true); return ''; }
}
function ofMenu(k, f, e) {
  document.querySelector('.ofMenu')?.remove();
  const m = el('div', 'tbPop ofMenu px on'), item = (label, fn) => { const b = el('button', 'tbtn tbFull', label); b.onclick = () => { m.remove(); fn(); }; m.append(b); };
  item('Renommer', async () => { const n = await ask('Nouveau nom', f.name); if (n?.trim()) { f.name = n.trim(); ofTouch(k, f); k.ui.title && (k.ui.title.value = f.name); } });
  item('Dupliquer', () => ofNew(k, f.name + ' (copie)', structuredClone(f.data)));
  item('Supprimer', async () => { if (!await nbConfirm('Supprimer « ' + f.name + ' » ? Ce sera aussi le cas sur tes autres PC synchronisés.')) return; office.files = office.files.filter(x => x !== f); officeSave(); ofPick(k, null); });
  m.style.left = Math.min(e.clientX, innerWidth - 240) + 'px'; m.style.top = Math.min(e.clientY, document.body.clientHeight - 160) + 'px'; m.style.right = 'auto';
  document.body.append(m);
  setTimeout(() => document.addEventListener('pointerdown', function off(ev) { if (!m.contains(ev.target)) { m.remove(); document.removeEventListener('pointerdown', off, true); } }, true));
}
// the page of an app: k = {key, kind, name, newName, newData, open, mount(main), fromImport, toExport, exports: [[format, label]]}
function ofRegister(k) {
  OF_KIND[k.kind] = k;
  const v = $(k.view), side = el('div', 'ofSide'), head = el('div', 'agHead'), newB = el('button', 'btn main px', '+ NOUVEAU'), openB = el('button', 'btn px', 'OUVRIR…');
  const search = el('input', 'f ofSearch'), list = el('div', 'ofList'), body = el('div', 'ofBody'), empty = el('div', 'ofEmpty'), main = el('div', 'ofMain');
  search.placeholder = 'Rechercher'; openB.title = k.openHint; newB.title = 'Nouveau fichier (enregistré tout seul et synchronisé)';
  head.append(el('span', 'label', k.name));
  const btns = el('div', 'row'); btns.append(newB, openB);
  side.append(head, btns, search, list);
  const big = el('div', 'ofEmptyIn');
  big.append(Object.assign(el('img'), {src: k.icon}), el('h2', '', k.name), el('p', 'hint', k.intro));
  const b2 = el('div', 'row'); const n2 = el('button', 'btn main px', '+ NOUVEAU'), o2 = el('button', 'btn px', 'OUVRIR UN FICHIER…'); b2.append(n2, o2); big.append(b2); empty.append(big);
  main.style.display = 'none';
  body.append(empty, main); v.replaceChildren(side, body); v.classList.add('ofApp');
  k.ui = {search, list, empty, main};
  newB.onclick = n2.onclick = () => ofNew(k);
  openB.onclick = o2.onclick = () => ofImport(k);
  search.oninput = () => ofList(k);
  k.mount(main);
}
async function ofOpen(kind) {
  const k = OF_KIND[kind]; await officeReady();
  ofList(k);
  if (!k.cur) { const f = ofFiles(k)[0]; if (f) ofPick(k, f); else ofPick(k, null); }
}
// a drop-down of buttons (used by the toolbars): [label, f] items
function ofDrop(label, items, title) {
  const w = el('div', 'ofDrop'), b = el('button', 'ofTb', label + ' ▾'), m = el('div', 'ofDropM px');
  b.title = title || '';
  for (const [l, f] of items) { const i = el('button', 'tbtn tbFull', l); i.onmousedown = e => e.preventDefault(); i.onclick = () => { w.classList.remove('on'); f(); }; m.append(i); }
  b.onmousedown = e => e.preventDefault();
  b.onclick = () => { const on = !w.classList.contains('on'); document.querySelectorAll('.ofDrop.on').forEach(d => d.classList.remove('on')); w.classList.toggle('on', on); };
  w.append(b, m); return w;
}
document.addEventListener('pointerdown', e => { if (!e.target.closest('.ofDrop')) document.querySelectorAll('.ofDrop.on').forEach(d => d.classList.remove('on')); }, true);
const ofBtn = (label, title, f, cls = '') => { const b = el('button', 'ofTb ' + cls, label); b.title = title; b.onmousedown = e => e.preventDefault(); b.onclick = f; return b; };  // mousedown: the text selection stays
const ofEsc = s => String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'})[c]);

/* NeoSheets, the spreadsheet of the office suite: sheets of cells with formulas (=SOMME(A1:A10), =SI(B2>10;"oui";"non"), French or English names,
   ";" or "," between arguments), number formats, bold / colours / alignment, rows and columns inserted or deleted (formulas follow), sort, fill down,
   copy / paste with Excel (tab-separated text), charts, several sheets. Opens .xlsx / .xls / .ods / .csv, exports .xlsx, .csv and PDF.
   A workbook is {sheets: [{name, cells: {A1: {raw, s: {b, i, c, bg, al, nf}}}, cw: {A: width}}], cur} in office.json (office.js). */
const shColName = n => { let s = ''; for (n++; n > 0; n = (n - 1) / 26 | 0) s = String.fromCharCode(65 + (n - 1) % 26) + s; return s; };
const shColNum = s => [...s].reduce((a, ch) => a * 26 + ch.charCodeAt(0) - 64, 0) - 1;
const shAddr = (c, r) => shColName(c) + (r + 1);
const shCell = a => { const m = /^\$?([A-Z]{1,3})\$?(\d+)$/.exec(a); return m ? {c: shColNum(m[1]), r: +m[2] - 1} : null; };
console.assert(shColName(0) === 'A' && shColName(25) === 'Z' && shColName(26) === 'AA' && shColNum('AB') === 27 && shCell('$C$12').r === 11, 'sheet addresses');

/* ---------- formulas: tokens, then a small precedence parser into a tree, then evaluation ---------- */
const SH_ERR = e => ({err: e}), isErr = v => v && typeof v === 'object' && 'err' in v;
function shTokens(src) {
  const semi = src.includes(';'), out = [], re = semi
    ? /\s*(?:(\d+(?:[.,]\d+)?(?:[eE][+-]?\d+)?)|("(?:[^"]|"")*")|((?:'[^']+'|[A-Za-zÀ-ÿ_][\wÀ-ÿ.]*)!)?(\$?[A-Z]{1,3}\$?\d+)(?::(\$?[A-Z]{1,3}\$?\d+))?(?![\w(])|([A-Za-zÀ-ÿ_][\wÀ-ÿ.]*)(?=\s*\()|(TRUE|FALSE|VRAI|FAUX)\b|(<=|>=|<>|[-+*/^&=<>%(),;]))/y
    : /\s*(?:(\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|("(?:[^"]|"")*")|((?:'[^']+'|[A-Za-zÀ-ÿ_][\wÀ-ÿ.]*)!)?(\$?[A-Z]{1,3}\$?\d+)(?::(\$?[A-Z]{1,3}\$?\d+))?(?![\w(])|([A-Za-zÀ-ÿ_][\wÀ-ÿ.]*)(?=\s*\()|(TRUE|FALSE|VRAI|FAUX)\b|(<=|>=|<>|[-+*/^&=<>%(),;]))/y;
  let i = 0;
  while (i < src.length) {
    if (/^\s+$/.test(src.slice(i))) break;
    re.lastIndex = i; const m = re.exec(src);
    if (!m) throw 0;
    i = re.lastIndex;
    if (m[1]) out.push({t: 'n', v: +m[1].replace(',', '.')});
    else if (m[2]) out.push({t: 's', v: m[2].slice(1, -1).replace(/""/g, '"')});
    else if (m[4]) out.push({t: 'ref', sheet: m[3] ? m[3].slice(0, -1).replace(/^'|'$/g, '') : null, a: m[4], b: m[5] || null});
    else if (m[6]) out.push({t: 'f', v: m[6].toUpperCase()});
    else if (m[7]) out.push({t: 'b', v: /TRUE|VRAI/.test(m[7])});
    else out.push({t: 'op', v: m[8] === ';' ? ',' : m[8]});
  }
  return out;
}
function shParse(src) {
  const tk = shTokens(src); let p = 0;
  const peek = () => tk[p], eat = v => { if (tk[p]?.t === 'op' && tk[p].v === v) { p++; return true; } return false; };
  const bin = (next, ops) => () => { let a = next(); for (let o; (o = peek()) && o.t === 'op' && ops.includes(o.v);) { p++; a = {op: o.v, a, b: next()}; } return a; };
  const primary = () => {
    const t = tk[p++]; if (!t) throw 0;
    if (t.t === 'n' || t.t === 's' || t.t === 'b') return {lit: t.v};
    if (t.t === 'ref') return {ref: t};
    if (t.t === 'f') { if (!eat('(')) throw 0; const args = []; if (!eat(')')) { do args.push(cmp()); while (eat(',')); if (!eat(')')) throw 0; } return {fn: t.v, args}; }
    if (t.t === 'op' && t.v === '(') { const e = cmp(); if (!eat(')')) throw 0; return e; }
    if (t.t === 'op' && (t.v === '-' || t.v === '+')) { const e = power(); return t.v === '-' ? {op: 'neg', a: e} : e; }
    throw 0;
  };
  const postfix = () => { let e = primary(); while (eat('%')) e = {op: '%', a: e}; return e; };
  const power = bin(postfix, ['^']), term = bin(power, ['*', '/']), add = bin(term, ['+', '-']), cat = bin(add, ['&']), cmp = bin(cat, ['=', '<>', '<', '>', '<=', '>=']);
  const e = cmp(); if (p < tk.length) throw 0;
  return e;
}
const shNum = v => isErr(v) ? v : v === '' || v == null ? 0 : typeof v === 'boolean' ? +v : typeof v === 'number' ? v : (s => /^-?\d+([.,]\d+)?$/.test(s) ? +s.replace(',', '.') : SH_ERR('#VALEUR!'))(String(v).trim());
const shStr = v => v == null ? '' : typeof v === 'boolean' ? (v ? 'VRAI' : 'FAUX') : typeof v === 'number' ? String(+v.toPrecision(15)).replace('.', ',') : String(v);
const shFlat = a => a.flatMap(x => x?.range ? x.rows.flat() : [x]);
const shNums = a => shFlat(a).filter(v => typeof v === 'number');
function shCrit(c) {  // ">5", "<>x", "abc", 3 -> test
  if (typeof c === 'number') return v => v === c;
  const m = /^(<=|>=|<>|<|>|=)?(.*)$/.exec(String(c)), op = m[1] || '=', n = shNum(m[2]), x = isErr(n) ? m[2].toLowerCase() : n;
  return v => { const w = typeof x === 'number' ? (typeof v === 'number' ? v : NaN) : String(v ?? '').toLowerCase();
    return op === '=' ? w === x : op === '<>' ? w !== x : op === '<' ? w < x : op === '>' ? w > x : op === '<=' ? w <= x : w >= x; };
}
const SH_ALIAS = {SOMME: 'SUM', MOYENNE: 'AVERAGE', NB: 'COUNT', NBVAL: 'COUNTA', SI: 'IF', ET: 'AND', OU: 'OR', NON: 'NOT', ARRONDI: 'ROUND', 'ARRONDI.SUP': 'ROUNDUP', 'ARRONDI.INF': 'ROUNDDOWN',
  RACINE: 'SQRT', PUISSANCE: 'POWER', ENT: 'INT', CONCATENER: 'CONCAT', CONCATENATE: 'CONCAT', NBCAR: 'LEN', MAJUSCULE: 'UPPER', MINUSCULE: 'LOWER', SUPPRESPACE: 'TRIM', GAUCHE: 'LEFT', DROITE: 'RIGHT',
  STXT: 'MID', AUJOURDHUI: 'TODAY', MAINTENANT: 'NOW', 'SOMME.SI': 'SUMIF', 'NB.SI': 'COUNTIF', 'MOYENNE.SI': 'AVERAGEIF', RECHERCHEV: 'VLOOKUP', MEDIANE: 'MEDIAN', ALEA: 'RAND', SIERREUR: 'IFERROR', PRODUIT: 'PRODUCT'};
const SH_FN = {
  SUM: a => shNums(a).reduce((s, v) => s + v, 0), PRODUCT: a => shNums(a).reduce((s, v) => s * v, 1),
  AVERAGE: a => { const n = shNums(a); return n.length ? n.reduce((s, v) => s + v, 0) / n.length : SH_ERR('#DIV/0!'); },
  MIN: a => { const n = shNums(a); return n.length ? Math.min(...n) : 0; }, MAX: a => { const n = shNums(a); return n.length ? Math.max(...n) : 0; },
  MEDIAN: a => { const n = shNums(a).sort((x, y) => x - y); return n.length ? (n[n.length - 1 >> 1] + n[n.length >> 1]) / 2 : SH_ERR('#NOMBRE!'); },
  COUNT: a => shNums(a).length, COUNTA: a => shFlat(a).filter(v => v !== '' && v != null).length,
  IF: (a, lazy) => { const c = lazy(0); if (isErr(c)) return c; return (typeof c === 'string' ? c !== '' : !!shNum(c)) ? lazy(1) ?? true : a.length > 2 ? lazy(2) : false; },
  IFERROR: (a, lazy) => { const v = lazy(0); return isErr(v) ? lazy(1) : v; },
  AND: a => shFlat(a).every(v => !!shNum(v)), OR: a => shFlat(a).some(v => !!shNum(v)), NOT: a => !shNum(a[0]),
  ROUND: a => { const k = 10 ** (shNum(a[1] ?? 0) || 0); return Math.round(shNum(a[0]) * k) / k; }, ROUNDUP: a => { const k = 10 ** (shNum(a[1] ?? 0) || 0); return Math.ceil(shNum(a[0]) * k) / k; },
  ROUNDDOWN: a => { const k = 10 ** (shNum(a[1] ?? 0) || 0); return Math.floor(shNum(a[0]) * k) / k; },
  ABS: a => Math.abs(shNum(a[0])), SQRT: a => { const v = shNum(a[0]); return v < 0 ? SH_ERR('#NOMBRE!') : Math.sqrt(v); }, POWER: a => shNum(a[0]) ** shNum(a[1]),
  MOD: a => { const d = shNum(a[1]); return d ? shNum(a[0]) - d * Math.floor(shNum(a[0]) / d) : SH_ERR('#DIV/0!'); }, INT: a => Math.floor(shNum(a[0])), PI: () => Math.PI, RAND: () => Math.random(),
  CONCAT: a => shFlat(a).map(shStr).join(''), LEN: a => shStr(a[0]).length, UPPER: a => shStr(a[0]).toUpperCase(), LOWER: a => shStr(a[0]).toLowerCase(), TRIM: a => shStr(a[0]).trim().replace(/\s+/g, ' '),
  LEFT: a => shStr(a[0]).slice(0, a.length > 1 ? shNum(a[1]) : 1), RIGHT: a => { const s = shStr(a[0]), n = a.length > 1 ? shNum(a[1]) : 1; return n ? s.slice(-n) : ''; }, MID: a => shStr(a[0]).substr(shNum(a[1]) - 1, shNum(a[2])),
  TODAY: () => new Date().toLocaleDateString('fr-FR'), NOW: () => new Date().toLocaleString('fr-FR', {dateStyle: 'short', timeStyle: 'short'}),
  SUMIF: a => { const r = shFlat([a[0]]), s = a[2] ? shFlat([a[2]]) : r, t = shCrit(a[1]); return r.reduce((x, v, i) => x + (t(v) && typeof s[i] === 'number' ? s[i] : 0), 0); },
  COUNTIF: a => { const t = shCrit(a[1]); return shFlat([a[0]]).filter(t).length; },
  AVERAGEIF: a => { const r = shFlat([a[0]]), s = a[2] ? shFlat([a[2]]) : r, t = shCrit(a[1]), n = r.map((v, i) => t(v) ? s[i] : null).filter(v => typeof v === 'number'); return n.length ? n.reduce((x, v) => x + v, 0) / n.length : SH_ERR('#DIV/0!'); },
  VLOOKUP: a => {
    const rows = a[1]?.rows; if (!rows) return SH_ERR('#VALEUR!');
    const col = shNum(a[2]) - 1, exact = a.length > 3 ? !shNum(a[3]) : false, k = a[0];
    if (col < 0 || col >= (rows[0]?.length || 0)) return SH_ERR('#REF!');
    if (exact) { const r = rows.find(r => String(r[0]).toLowerCase() === String(k).toLowerCase() || r[0] === k); return r ? r[col] : SH_ERR('#N/A'); }
    let hit = null; for (const r of rows) { if (typeof r[0] === 'number' && typeof k === 'number' ? r[0] <= k : String(r[0]) <= String(k)) hit = r; else break; }
    return hit ? hit[col] : SH_ERR('#N/A');
  },
};
// value of every cell of a workbook: literals parsed, formulas evaluated (cycles give #CYCLE!)
function shCompute(book) {
  const cache = new Map(), busy = new Set();
  const sheetIdx = name => name == null ? -1 : book.sheets.findIndex(s => s.name.toLowerCase() === name.toLowerCase());
  const lit = raw => { const s = raw.trim(); if (s === '') return ''; if (/^-?[\d\s ]+([.,]\d+)?$/.test(s)) return +s.replace(/[\s ]/g, '').replace(',', '.');
    if (/^-?[\d\s ]+([.,]\d+)?\s?%$/.test(s)) return +s.replace(/[\s %]/g, '').replace(',', '.') / 100; if (/^-?[\d\s ]+([.,]\d+)?\s?€$/.test(s)) return +s.replace(/[\s €]/g, '').replace(',', '.');
    if (/^(vrai|true)$/i.test(s)) return true; if (/^(faux|false)$/i.test(s)) return false; return raw; };
  function value(si, a) {
    const k = si + '!' + a;
    if (cache.has(k)) return cache.get(k);
    const raw = book.sheets[si]?.cells[a]?.raw ?? '';
    if (!raw.startsWith('=') || raw.length < 2) { const v = lit(raw); cache.set(k, v); return v; }
    if (busy.has(k)) return SH_ERR('#CYCLE!');
    busy.add(k);
    let v; try { v = ev(shParse(raw.slice(1)), si); } catch { v = SH_ERR('#NOM?'); }
    busy.delete(k);
    if (v == null) v = '';
    if (typeof v === 'number' && !isFinite(v)) v = SH_ERR('#NOMBRE!');
    cache.set(k, v); return v;
  }
  function ev(n, si) {
    if ('lit' in n) return n.lit;
    if (n.ref) {
      const s = n.ref.sheet == null ? si : sheetIdx(n.ref.sheet); if (s < 0) return SH_ERR('#REF!');
      const p = shCell(n.ref.a); if (!n.ref.b) return value(s, shAddr(p.c, p.r));
      const q = shCell(n.ref.b), rows = [];
      for (let r = Math.min(p.r, q.r); r <= Math.max(p.r, q.r); r++) { const row = []; for (let c = Math.min(p.c, q.c); c <= Math.max(p.c, q.c); c++) row.push(value(s, shAddr(c, r))); rows.push(row); }
      return {range: true, rows};
    }
    if (n.fn) {
      const f = SH_FN[SH_ALIAS[n.fn] || n.fn]; if (!f) return SH_ERR('#NOM?');
      const lazy = i => { const v = n.args[i] ? ev(n.args[i], si) : undefined; return v?.range ? v.rows[0][0] : v; };  // IF and IFERROR only evaluate the branch they return
      if (n.fn === 'IF' || n.fn === 'SI' || n.fn === 'IFERROR' || n.fn === 'SIERREUR') return f(n.args, lazy);
      const args = n.args.map(a => ev(a, si)), soft = ['VLOOKUP', 'RECHERCHEV', 'COUNTIF', 'NB.SI', 'SUMIF', 'SOMME.SI', 'AVERAGEIF', 'MOYENNE.SI', 'COUNTA', 'NBVAL', 'COUNT', 'NB'].includes(n.fn);
      const err = args.find(isErr) || (!soft && shFlat(args).find(isErr));  // an error inside a looked-up range only matters when it is the result
      if (err) return err;
      return f(args);
    }
    if (n.op === 'neg') { const v = shNum(one(ev(n.a, si))); return isErr(v) ? v : -v; }
    if (n.op === '%') { const v = shNum(one(ev(n.a, si))); return isErr(v) ? v : v / 100; }
    const a = one(ev(n.a, si)), b = one(ev(n.b, si));
    if (isErr(a)) return a; if (isErr(b)) return b;
    if (n.op === '&') return shStr(a) + shStr(b);
    if (['=', '<>', '<', '>', '<=', '>='].includes(n.op)) {
      const [x, y] = typeof a === 'number' && typeof b === 'number' ? [a, b] : [shStr(a).toLowerCase(), shStr(b).toLowerCase()];
      return n.op === '=' ? x === y : n.op === '<>' ? x !== y : n.op === '<' ? x < y : n.op === '>' ? x > y : n.op === '<=' ? x <= y : x >= y;
    }
    const x = shNum(a), y = shNum(b); if (isErr(x)) return x; if (isErr(y)) return y;
    return n.op === '+' ? x + y : n.op === '-' ? x - y : n.op === '*' ? x * y : n.op === '^' ? x ** y : y === 0 ? SH_ERR('#DIV/0!') : x / y;
  }
  const one = v => v?.range ? v.rows[0]?.[0] ?? '' : v;
  return {value, lit};
}
{  // self-check of the formula engine
  const b = {sheets: [{name: 'F1', cells: {A1: {raw: '2'}, A2: {raw: '3,5'}, A3: {raw: '=SOMME(A1:A2)*2'}, B1: {raw: '=SI(A3>10;"grand";"petit")'}, B2: {raw: '=B2+1'}, B3: {raw: '=NB.SI(A1:A3;">3")'},
    C1: {raw: '=RECHERCHEV(2;A1:B3;2;FAUX)'}, C2: {raw: '=F2!A1*10'}, C3: {raw: '=1/0'}, D1: {raw: '="x"&A1'}, D2: {raw: '=ARRONDI(2/3;2)'}, D3: {raw: '=SUM(A1,A2)'}}}, {name: 'F2', cells: {A1: {raw: '4'}}}]};
  const v = a => shCompute(b).value(0, a);
  console.assert(v('A3') === 11 && v('B1') === 'grand' && isErr(v('B2')) && v('B3') === 2 && v('C1') === 'grand' && v('C2') === 40 && v('C3').err === '#DIV/0!' && v('D1') === 'x2' && v('D2') === .67 && v('D3') === 5.5, 'sheet formulas');
}
// references of a formula moved: f(c, r, absC, absR) -> {c, r} or null (#REF!); used by copy / paste, fill and row / column insertions
function shMoveRefs(raw, f, onlySheet) {
  if (!raw?.startsWith('=')) return raw;
  return '=' + raw.slice(1).replace(/("(?:[^"]|"")*")|((?:'[^']+'|[A-Za-zÀ-ÿ_][\wÀ-ÿ.]*)!)?(\$?)([A-Z]{1,3})(\$?)(\d+)(?![\w(])/g, (m, str, sheet, dc, col, dr, row) => {
    if (str || (onlySheet && sheet)) return m;
    const p = f(shColNum(col), +row - 1, !!dc, !!dr); if (!p || p.c < 0 || p.r < 0) return '#REF!';
    return (sheet || '') + dc + shColName(p.c) + dr + (p.r + 1);
  });
}
console.assert(shMoveRefs('=A1+$B$2+"A1"', (c, r, ac, ar) => ({c: ac ? c : c + 1, r: ar ? r : r + 2})) === '=B3+$B$2+"A1"', 'shMoveRefs');

/* ---------- the app ---------- */
const SH_NF = {auto: 'Automatique', n0: 'Nombre entier', n2: 'Nombre (2 décimales)', pct: 'Pourcentage', eur: 'Euros', text: 'Texte'};
const nsh = {kind: 'sheet', key: 'neodyme:sheets', view: 'sheetsApp', name: 'NeoSheets', newName: 'Classeur', openHint: 'Ouvrir un fichier Excel (.xlsx, .xls), OpenDocument (.ods) ou CSV',
  intro: 'Tableur : formules (SOMME, MOYENNE, SI, RECHERCHEV, NB.SI…), mises en forme, tri, graphiques, plusieurs feuilles. Copie-colle avec Excel. Tes classeurs sont enregistrés tout seuls et synchronisés entre tes PC.',
  newData: () => ({sheets: [{name: 'Feuille 1', cells: {}, cw: {}}], cur: 0}),
  fromImport: r => ({sheets: r.sheets.map(s => ({name: s.name, cells: Object.fromEntries(Object.entries(s.cells).filter(([, v]) => v !== '').map(([a, v]) => [a, {raw: v}])),
    cw: Object.fromEntries(s.cols.map((w, i) => [shColName(i), w]).filter(([, w]) => w))})), cur: 0}),
  toExport(f, format) {
    const calc = shCompute(f.data);
    if (format === 'pdf') return {html: shHtml(f, calc)};
    return {sheets: f.data.sheets.map((s, si) => ({name: s.name, cells: Object.fromEntries(Object.entries(s.cells).filter(([, c]) => c.raw !== '').map(([a, c]) => { const v = calc.value(si, a); return [a, {raw: c.raw, value: isErr(v) ? v.err : v}]; }))}))};
  },
  sel: {c: 0, r: 0, c2: 0, r2: 0}, undo: [], redo: [],
};
const shSheet = () => nsh.cur.data.sheets[nsh.cur.data.cur] || nsh.cur.data.sheets[0];
const shBox = () => { const s = nsh.sel; return {c1: Math.min(s.c, s.c2), c2: Math.max(s.c, s.c2), r1: Math.min(s.r, s.r2), r2: Math.max(s.r, s.r2)}; };
function shFmt(v, s) {
  if (isErr(v)) return v.err;
  if (typeof v === 'boolean') return v ? 'VRAI' : 'FAUX';
  if (typeof v !== 'number') return v;
  const nf = s?.nf || 'auto';
  if (nf === 'pct') return (v * 100).toLocaleString('fr-FR', {maximumFractionDigits: 2}) + ' %';
  if (nf === 'eur') return v.toLocaleString('fr-FR', {style: 'currency', currency: 'EUR'});
  if (nf === 'n0') return Math.round(v).toLocaleString('fr-FR');
  if (nf === 'n2') return v.toLocaleString('fr-FR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  return v.toLocaleString('fr-FR', {maximumFractionDigits: 10, useGrouping: Math.abs(v) >= 10000});
}
function shHtml(f, calc) {  // printable tables of every sheet
  const body = f.data.sheets.map((s, si) => {
    const keys = Object.keys(s.cells).map(shCell).filter(Boolean), mc = Math.max(0, ...keys.map(k => k.c)), mr = Math.max(0, ...keys.map(k => k.r));
    let t = '<h2>' + ofEsc(s.name) + '</h2><table>';
    for (let r = 0; r <= mr; r++) { t += '<tr>'; for (let c = 0; c <= mc; c++) { const a = shAddr(c, r), st = s.cells[a]?.s, v = s.cells[a] ? shFmt(calc.value(si, a), st) : '';
      t += `<td style="${st?.b ? 'font-weight:bold;' : ''}${st?.i ? 'font-style:italic;' : ''}${st?.c ? 'color:' + st.c + ';' : ''}${st?.bg ? 'background:' + st.bg + ';' : ''}text-align:${st?.al || (typeof calc.value(si, a) === 'number' ? 'right' : 'left')}">${ofEsc(v)}</td>`; } t += '</tr>'; }
    return t + '</table>';
  }).join('<div style="page-break-after:always"></div>');
  return `<!doctype html><html><head><meta charset="utf-8"><style>body{font:10pt Calibri,Arial,sans-serif}table{border-collapse:collapse}td{border:1px solid #bbb;padding:3px 6px;white-space:nowrap}h2{font-size:13pt}</style></head><body>${body}</body></html>`;
}
nsh.mount = main => {
  const title = el('input', 'f ofTitle'), bar = el('div', 'ofBar'), fx = el('div', 'shFx'), name = el('span', 'shName'), input = el('input', 'f shInput'), gridW = el('div', 'shGridW'), grid = el('table', 'shTbl');
  const tabsBar = el('div', 'shTabs'), status = el('div', 'ofStatus'), edit = el('input', 'shEdit');
  title.spellcheck = input.spellcheck = edit.spellcheck = false; title.placeholder = 'Nom du classeur'; input.placeholder = 'Valeur ou formule (=SOMME(A1:A5))';
  gridW.tabIndex = 0; edit.style.display = 'none'; main.classList.add('shX');
  const style = (k, v) => () => shStyle(k, v);
  const color = Object.assign(el('input', 'ofColor'), {type: 'color', value: '#1d1d1f', title: 'Couleur du texte'}), bg = Object.assign(el('input', 'ofColor'), {type: 'color', value: '#fff3a8', title: 'Couleur de fond'});
  color.oninput = () => shStyle('c', color.value); bg.oninput = () => shStyle('bg', bg.value);
  const nf = el('select', 'ofSel'); nf.title = 'Format des nombres'; nf.append(...Object.entries(SH_NF).map(([k, l]) => Object.assign(el('option', '', l), {value: k}))); nf.onchange = () => shStyle('nf', nf.value);
  const fnList = ['SOMME', 'MOYENNE', 'MIN', 'MAX', 'NB', 'SI', 'SOMME.SI', 'NB.SI', 'RECHERCHEV', 'ARRONDI', 'CONCATENER', 'AUJOURDHUI'];
  bar.append(ofBtn('↶', 'Annuler (Ctrl+Z)', shUndo), ofBtn('↷', 'Rétablir (Ctrl+Y)', shRedo), el('i', 'ofSep'),
    ofBtn('G', 'Gras (Ctrl+B)', style('b'), 'b'), ofBtn('I', 'Italique (Ctrl+I)', style('i'), 'i'), color, bg, ofBtn('⌀', 'Sans couleur de fond', style('bg', null)),
    ofDrop('Aligner', [['À gauche', style('al', 'left')], ['Centré', style('al', 'center')], ['À droite', style('al', 'right')]]), nf, el('i', 'ofSep'),
    ofDrop('Lignes', [['Insérer une ligne au-dessus', () => shInsert('r', 0)], ['Insérer une ligne en dessous', () => shInsert('r', 1)], ['Supprimer la ligne', () => shDelete('r')],
      ['Insérer une colonne à gauche', () => shInsert('c', 0)], ['Insérer une colonne à droite', () => shInsert('c', 1)], ['Supprimer la colonne', () => shDelete('c')]], 'Lignes et colonnes'),
    ofDrop('Trier', [['Colonne de A à Z', () => shSort(1)], ['Colonne de Z à A', () => shSort(-1)]], 'Trier les lignes selon la colonne sélectionnée'),
    ofBtn('⇩', 'Recopier vers le bas (Ctrl+D)', shFillDown), ofDrop('Fonction', fnList.map(f => [f + '(…)', () => shStartEdit('=' + f + '(')]), 'Insérer une fonction'),
    ofBtn('📊', 'Graphique de la sélection', shChart), el('i', 'ofSep'),
    ofDrop('Exporter', [['Excel (.xlsx)…', () => ofExport(nsh, 'xlsx')], ['OpenDocument (.ods)…', () => ofExport(nsh, 'ods')], ['CSV (.csv)…', () => ofExport(nsh, 'csv')], ['PDF…', () => ofExport(nsh, 'pdf')]]));
  fx.append(name, el('span', 'shFxL', 'fx'), input);
  gridW.append(grid, edit);
  main.append(title, bar, fx, gridW, tabsBar, status);
  Object.assign(nsh, {title, input, name, grid, gridW, tabsBar, status, edit, nf});
  title.oninput = () => { if (nsh.cur) { nsh.cur.name = title.value.trim() || 'Sans titre'; ofTouch(nsh, nsh.cur); } };
  input.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); shSet(nsh.sel.c, nsh.sel.r, input.value); shMove(0, 1); gridW.focus(); } if (e.key === 'Escape') { shSelShow(); gridW.focus(); } };
  // the grid: click / drag selects, double click edits, the header borders resize the columns
  grid.onpointerdown = e => {
    const td = e.target.closest('td[data-c]'), th = e.target.closest('th');
    if (th?.dataset.col != null && e.offsetX > th.offsetWidth - 6) return shResize(e, th);
    if (nsh.editing && nsh.edit.value.startsWith('=') && td) { e.preventDefault(); shRefInsert(+td.dataset.c, +td.dataset.r); return; }  // building a formula: the cell clicked is added to it
    if (nsh.editing) shCommit();
    if (th?.dataset.col != null) { const c = +th.dataset.col; nsh.sel = {c, r: 0, c2: c, r2: nsh.rows - 1}; shSelShow(); return; }
    if (th?.dataset.row != null) { const r = +th.dataset.row; nsh.sel = {c: 0, r, c2: nsh.cols - 1, r2: r}; shSelShow(); return; }
    if (!td) return;
    const c = +td.dataset.c, r = +td.dataset.r;
    if (e.shiftKey) { nsh.sel.c2 = c; nsh.sel.r2 = r; } else nsh.sel = {c, r, c2: c, r2: r};
    shSelShow(); gridW.focus();
    grid.onpointermove = m => { const t = m.target.closest?.('td[data-c]'); if (t) { nsh.sel.c2 = +t.dataset.c; nsh.sel.r2 = +t.dataset.r; shSelShow(); } };
    addEventListener('pointerup', () => grid.onpointermove = null, {once: true});
  };
  grid.ondblclick = e => { if (e.target.closest('td[data-c]')) shStartEdit(); };
  gridW.onkeydown = shKey;
  gridW.addEventListener('copy', e => shCopy(e, false)); gridW.addEventListener('cut', e => shCopy(e, true)); gridW.addEventListener('paste', shPaste);
  edit.onkeydown = e => {
    e.stopPropagation();  // the editor is inside the grid: its keys must not move the selection a second time
    if (e.key === 'Enter') { e.preventDefault(); shCommit(); shMove(0, e.shiftKey ? -1 : 1); gridW.focus(); }
    else if (e.key === 'Tab') { e.preventDefault(); shCommit(); shMove(e.shiftKey ? -1 : 1, 0); gridW.focus(); }
    else if (e.key === 'Escape') { nsh.editing = false; edit.style.display = 'none'; gridW.focus(); }
  };
  edit.oninput = () => { input.value = edit.value; };
};
function shSnapshot() { nsh.undo.push(JSON.stringify(nsh.cur.data)); if (nsh.undo.length > 80) nsh.undo.shift(); nsh.redo = []; }
function shUndo() { if (!nsh.undo.length) return; nsh.redo.push(JSON.stringify(nsh.cur.data)); nsh.cur.data = JSON.parse(nsh.undo.pop()); shSaved(true); }
function shRedo() { if (!nsh.redo.length) return; nsh.undo.push(JSON.stringify(nsh.cur.data)); nsh.cur.data = JSON.parse(nsh.redo.pop()); shSaved(true); }
function shSaved(rebuild) { ofTouch(nsh, nsh.cur); rebuild ? shBuild() : shRefresh(); }
function shSet(c, r, raw, snap = true) {
  const s = shSheet(), a = shAddr(c, r), old = s.cells[a];
  if ((old?.raw ?? '') === raw) return;
  if (snap) shSnapshot();
  if (raw === '' && !old?.s) delete s.cells[a]; else s.cells[a] = {...old, raw};
  shSaved();
}
function shStyle(k, v) {
  const b = shBox(), s = shSheet(); shSnapshot();
  const first = s.cells[shAddr(b.c1, b.r1)]?.s?.[k], val = v === undefined ? !first : v;  // bold / italic: toggled from the first cell
  for (let r = b.r1; r <= b.r2; r++) for (let c = b.c1; c <= b.c2; c++) {
    const a = shAddr(c, r), cell = s.cells[a] ||= {raw: ''}; cell.s = {...cell.s, [k]: val};
    if (val == null || val === false || val === 'auto') delete cell.s[k];
    if (!Object.keys(cell.s).length) delete cell.s;
    if (!cell.raw && !cell.s) delete s.cells[a];
  }
  shSaved();
}
// size of the grid shown: what is used, plus room around it
function shSize() {
  const keys = Object.keys(shSheet().cells).map(shCell).filter(Boolean);
  nsh.cols = Math.max(26, ...keys.map(k => k.c + 4), nsh.sel.c2 + 3); nsh.rows = Math.max(100, ...keys.map(k => k.r + 20), nsh.sel.r2 + 10);
}
function shBuild() {
  if (!nsh.cur) return;
  shSize();
  const s = shSheet(), head = el('tr'), rows = [head], corner = el('th', 'shCorner');
  head.append(corner);
  for (let c = 0; c < nsh.cols; c++) { const th = el('th', 'shCh', shColName(c)); th.dataset.col = c; th.style.width = (s.cw?.[shColName(c)] || 100) + 'px'; head.append(th); }
  for (let r = 0; r < nsh.rows; r++) {
    const tr = el('tr'), th = el('th', 'shRh', String(r + 1)); th.dataset.row = r; tr.append(th);
    for (let c = 0; c < nsh.cols; c++) { const td = el('td'); td.dataset.c = c; td.dataset.r = r; tr.append(td); }
    rows.push(tr);
  }
  nsh.grid.replaceChildren(...rows);
  nsh.title.value = nsh.cur.name;
  nsh.tabsBar.replaceChildren(...nsh.cur.data.sheets.map((t, i) => {
    const b = el('button', 'shTab' + (i === nsh.cur.data.cur ? ' on' : ''), t.name);
    b.onclick = () => { if (nsh.editing) shCommit(); nsh.cur.data.cur = i; nsh.sel = {c: 0, r: 0, c2: 0, r2: 0}; officeSave(); shBuild(); };
    b.ondblclick = async () => { const n = await ask('Nom de la feuille', t.name); if (n?.trim() && !nsh.cur.data.sheets.some(x => x !== t && x.name === n.trim())) { t.name = n.trim(); shSaved(true); } };
    b.oncontextmenu = async e => { e.preventDefault(); if (nsh.cur.data.sheets.length > 1 && await nbConfirm('Supprimer la feuille « ' + t.name + ' » ?')) { shSnapshot(); nsh.cur.data.sheets.splice(i, 1); nsh.cur.data.cur = 0; shSaved(true); } };
    b.title = 'Double-clic : renommer · clic droit : supprimer';
    return b;
  }), (() => { const b = el('button', 'shTab add', '+'); b.title = 'Nouvelle feuille'; b.onclick = () => { shSnapshot(); const d = nsh.cur.data; let n = d.sheets.length + 1; while (d.sheets.some(x => x.name === 'Feuille ' + n)) n++; d.sheets.push({name: 'Feuille ' + n, cells: {}, cw: {}}); d.cur = d.sheets.length - 1; shSaved(true); }; return b; })());
  shRefresh();
}
function shRefresh() {
  if (!nsh.cur) return;
  const s = shSheet(), si = nsh.cur.data.sheets.indexOf(s), calc = shCompute(nsh.cur.data); nsh.calc = calc;
  const keys = Object.keys(s.cells).map(shCell).filter(Boolean);
  if (keys.some(k => k.c >= nsh.cols || k.r >= nsh.rows)) return shBuild();
  for (const td of nsh.grid.querySelectorAll('td[data-c]')) {
    const a = shAddr(+td.dataset.c, +td.dataset.r), cell = s.cells[a];
    if (!cell) { if (td.textContent || td.style.cssText) { td.textContent = ''; td.style.cssText = ''; td.className = ''; } continue; }
    const v = cell.raw ? calc.value(si, a) : '', st = cell.s || {};
    td.textContent = st.nf === 'text' ? cell.raw : shFmt(v, st);
    td.className = (isErr(v) ? 'err ' : '') + (typeof v === 'number' ? 'num' : '');
    td.style.cssText = (st.b ? 'font-weight:bold;' : '') + (st.i ? 'font-style:italic;' : '') + (st.c ? 'color:' + st.c + ';' : '') + (st.bg ? 'background:' + st.bg + ';' : '') + (st.al ? 'text-align:' + st.al + ';' : '');
  }
  shSelShow();
}
function shSelShow() {
  const b = shBox(), s = shSheet();
  nsh.grid.querySelectorAll('.sel,.cur').forEach(t => t.classList.remove('sel', 'cur'));
  nsh.grid.querySelectorAll('th.on').forEach(t => t.classList.remove('on'));
  for (let r = b.r1; r <= b.r2 && r < nsh.rows; r++) for (let c = b.c1; c <= b.c2 && c < nsh.cols; c++) nsh.grid.rows[r + 1]?.cells[c + 1]?.classList.add('sel');
  for (let c = b.c1; c <= b.c2; c++) nsh.grid.rows[0].cells[c + 1]?.classList.add('on');
  for (let r = b.r1; r <= b.r2; r++) nsh.grid.rows[r + 1]?.cells[0].classList.add('on');
  const cur = nsh.grid.rows[nsh.sel.r + 1]?.cells[nsh.sel.c + 1]; cur?.classList.add('cur');
  const a = shAddr(nsh.sel.c, nsh.sel.r);
  nsh.name.textContent = b.c1 === b.c2 && b.r1 === b.r2 ? a : shAddr(b.c1, b.r1) + ':' + shAddr(b.c2, b.r2);
  if (!nsh.editing) nsh.input.value = s.cells[a]?.raw ?? '';
  nsh.nf.value = s.cells[a]?.s?.nf || 'auto';
  for (const k of ['b', 'i']) nsh.ui.main.querySelector('.ofTb.' + k)?.classList.toggle('on', !!s.cells[a]?.s?.[k]);
  // sum / average / count of the selection, like Excel's status bar
  const si = nsh.cur.data.sheets.indexOf(s), nums = [];
  let filled = 0;
  for (let r = b.r1; r <= b.r2; r++) for (let c = b.c1; c <= b.c2; c++) { const k = shAddr(c, r); if (s.cells[k]?.raw) { filled++; const v = nsh.calc?.value(si, k); if (typeof v === 'number') nums.push(v); } }
  nsh.status.textContent = filled > 1 ? (nums.length ? 'Somme : ' + shFmt(nums.reduce((x, y) => x + y, 0)) + ' · Moyenne : ' + shFmt(nums.reduce((x, y) => x + y, 0) / nums.length) + ' · ' : '') + 'Nombre : ' + filled : 'Enregistré · ' + Object.keys(s.cells).length + ' cellules remplies';
  cur?.scrollIntoView({block: 'nearest', inline: 'nearest'});
}
function shMove(dc, dr, extend) {
  const s = nsh.sel;
  if (extend) { s.c2 = Math.max(0, s.c2 + dc); s.r2 = Math.max(0, s.r2 + dr); }
  else { s.c = Math.max(0, s.c + dc); s.r = Math.max(0, s.r + dr); s.c2 = s.c; s.r2 = s.r; }
  if (s.c2 >= nsh.cols - 2 || s.r2 >= nsh.rows - 5 || s.c >= nsh.cols - 2 || s.r >= nsh.rows - 5) shBuild(); else shSelShow();
}
function shStartEdit(text) {
  const td = nsh.grid.rows[nsh.sel.r + 1]?.cells[nsh.sel.c + 1]; if (!td) return;
  const e = nsh.edit;
  nsh.editing = true;
  e.value = text ?? shSheet().cells[shAddr(nsh.sel.c, nsh.sel.r)]?.raw ?? '';
  e.style.display = ''; e.style.left = td.offsetLeft + 'px'; e.style.top = td.offsetTop + 'px'; e.style.width = Math.max(td.offsetWidth, 120) + 'px'; e.style.height = td.offsetHeight + 'px';
  nsh.input.value = e.value; e.focus(); e.setSelectionRange(e.value.length, e.value.length);
}
function shCommit() { if (!nsh.editing) return; nsh.editing = false; nsh.edit.style.display = 'none'; shSet(nsh.sel.c, nsh.sel.r, nsh.edit.value); }
function shRefInsert(c, r) {
  const e = nsh.edit, p = e.selectionStart, a = shAddr(c, r);
  e.value = e.value.slice(0, p) + a + e.value.slice(e.selectionEnd); e.focus(); e.setSelectionRange(p + a.length, p + a.length); nsh.input.value = e.value;
}
function shKey(e) {
  if (nsh.editing) return;
  const k = e.key, ctrl = e.ctrlKey || e.metaKey;
  const moves = {ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0], Enter: [0, e.shiftKey ? -1 : 1], Tab: [e.shiftKey ? -1 : 1, 0]};
  if (moves[k]) { e.preventDefault(); shMove(...moves[k], e.shiftKey && k.startsWith('Arrow')); return; }
  if (ctrl && k.toLowerCase() === 'z') { e.preventDefault(); shUndo(); return; }
  if (ctrl && k.toLowerCase() === 'y') { e.preventDefault(); shRedo(); return; }
  if (ctrl && k.toLowerCase() === 'b') { e.preventDefault(); shStyle('b'); return; }
  if (ctrl && k.toLowerCase() === 'i') { e.preventDefault(); shStyle('i'); return; }
  if (ctrl && k.toLowerCase() === 'd') { e.preventDefault(); shFillDown(); return; }
  if (ctrl && k.toLowerCase() === 'a') { e.preventDefault(); nsh.sel = {c: 0, r: 0, c2: nsh.cols - 1, r2: nsh.rows - 1}; shSelShow(); return; }
  if (k === 'Delete' || k === 'Backspace') {
    e.preventDefault(); const b = shBox(), s = shSheet(); shSnapshot();
    for (let r = b.r1; r <= b.r2; r++) for (let c = b.c1; c <= b.c2; c++) { const a = shAddr(c, r); if (s.cells[a]) { s.cells[a].raw = ''; if (!s.cells[a].s) delete s.cells[a]; } }
    shSaved(); return;
  }
  if (k === 'F2') { e.preventDefault(); shStartEdit(); return; }
  if (k.length === 1 && !ctrl && !e.altKey) shStartEdit('');  // the editor gets the focus now: the character typed lands in it (accents and capitals included)
}
// copy / paste: tab-separated text (what Excel and Google Sheets use); formulas pasted from NeoSheets keep their relative references
function shCopy(e, cut) {
  if (nsh.editing) return;
  e.preventDefault();
  const b = shBox(), s = shSheet(), si = nsh.cur.data.sheets.indexOf(s), lines = [];
  for (let r = b.r1; r <= b.r2; r++) { const row = []; for (let c = b.c1; c <= b.c2; c++) { const a = shAddr(c, r); row.push(s.cells[a]?.raw ? shFmt(nsh.calc.value(si, a), s.cells[a].s) : ''); } lines.push(row.join('\t')); }
  const text = lines.join('\n');
  nsh.clip = {text, b, cells: Object.fromEntries([...Array(b.r2 - b.r1 + 1)].flatMap((_, dr) => [...Array(b.c2 - b.c1 + 1)].map((_, dc) => [dc + ',' + dr, structuredClone(s.cells[shAddr(b.c1 + dc, b.r1 + dr)] || null)])))};
  e.clipboardData.setData('text/plain', text);
  if (cut) { shSnapshot(); for (let r = b.r1; r <= b.r2; r++) for (let c = b.c1; c <= b.c2; c++) delete s.cells[shAddr(c, r)]; shSaved(); }
}
function shPaste(e) {
  if (nsh.editing) return;
  e.preventDefault();
  const text = e.clipboardData.getData('text/plain'), s = shSheet(), c0 = nsh.sel.c, r0 = nsh.sel.r;
  shSnapshot();
  if (nsh.clip && nsh.clip.text === text) {  // from NeoSheets itself: formulas and styles, references moved
    const {b, cells} = nsh.clip, dc = c0 - b.c1, dr = r0 - b.r1;
    for (const [k, cell] of Object.entries(cells)) {
      const [x, y] = k.split(',').map(Number), a = shAddr(c0 + x, r0 + y);
      if (!cell) { delete s.cells[a]; continue; }
      s.cells[a] = {...cell, raw: shMoveRefs(cell.raw, (c, r, ac, ar) => ({c: ac ? c : c + dc, r: ar ? r : r + dr}))};
    }
    nsh.sel = {c: c0, r: r0, c2: c0 + b.c2 - b.c1, r2: r0 + b.r2 - b.r1};
  } else {
    const rows = text.replace(/\r/g, '').replace(/\n$/, '').split('\n').map(l => l.split('\t'));
    rows.forEach((row, y) => row.forEach((v, x) => { const a = shAddr(c0 + x, r0 + y); if (v === '') delete s.cells[a]; else s.cells[a] = {...s.cells[a], raw: v}; }));
    nsh.sel = {c: c0, r: r0, c2: c0 + Math.max(...rows.map(r => r.length)) - 1, r2: r0 + rows.length - 1};
  }
  shSaved();
}
function shFillDown() {
  const b = shBox(), s = shSheet(); if (b.r2 === b.r1) return toast('Sélectionne la cellule à recopier et les cellules en dessous', true);
  shSnapshot();
  for (let c = b.c1; c <= b.c2; c++) {
    const src = s.cells[shAddr(c, b.r1)];
    for (let r = b.r1 + 1; r <= b.r2; r++) { const a = shAddr(c, r); if (!src) { delete s.cells[a]; continue; } s.cells[a] = {...structuredClone(src), raw: shMoveRefs(src.raw, (cc, rr, ac, ar) => ({c: cc, r: ar ? rr : rr + r - b.r1}))}; }
  }
  shSaved();
}
// a row / column inserted or deleted: cells move and the formulas of the sheet follow
function shShift(kind, at, d) {
  const s = shSheet(), out = {}, mv = p => kind === 'r' ? (d < 0 && p.r === at ? null : {c: p.c, r: p.r >= at ? p.r + d : p.r}) : (d < 0 && p.c === at ? null : {c: p.c >= at ? p.c + d : p.c, r: p.r});
  for (const [a, cell] of Object.entries(s.cells)) {
    const p = mv(shCell(a)); if (!p) continue;
    out[shAddr(p.c, p.r)] = {...cell, raw: shMoveRefs(cell.raw, (c, r) => mv({c, r}), true)};  // shortcut: formulas of other sheets pointing here are not moved, enough for one-sheet workbooks
  }
  s.cells = out;
  if (kind === 'c') { const cw = {}; for (const [k, w] of Object.entries(s.cw || {})) { const c = shColNum(k), n = d < 0 && c === at ? null : c >= at ? c + d : c; if (n != null) cw[shColName(n)] = w; } s.cw = cw; }
}
function shInsert(kind, after) { shSnapshot(); shShift(kind, (kind === 'r' ? shBox().r1 : shBox().c1) + (after ? (kind === 'r' ? shBox().r2 - shBox().r1 + 1 : shBox().c2 - shBox().c1 + 1) : 0), 1); shSaved(true); }
function shDelete(kind) { shSnapshot(); const b = shBox(); for (let i = kind === 'r' ? b.r2 : b.c2; i >= (kind === 'r' ? b.r1 : b.c1); i--) shShift(kind, i, -1); shSaved(true); }
function shSort(dir) {
  const s = shSheet(), si = nsh.cur.data.sheets.indexOf(s), keys = Object.keys(s.cells).map(shCell).filter(Boolean);
  // one cell selected: the block of filled rows around it, like Excel's current region
  const b = shBox(), multi = b.r2 > b.r1, used = new Set(keys.filter(k => s.cells[shAddr(k.c, k.r)].raw !== '').map(k => k.r)), col = nsh.sel.c;
  let r1 = b.r1, r2 = b.r2;
  if (!multi) { while (r1 > 0 && used.has(r1 - 1)) r1--; while (used.has(r2 + 1)) r2++; }
  const c1 = multi ? b.c1 : 0, c2 = multi ? b.c2 : Math.max(0, ...keys.map(k => k.c));
  // a first row of titles stays on top
  const head = r2 > r1 && typeof nsh.calc.value(si, shAddr(col, r1)) === 'string' && typeof nsh.calc.value(si, shAddr(col, r1 + 1)) === 'number' ? 1 : 0;
  shSnapshot();
  const rows = [];
  for (let r = r1 + head; r <= r2; r++) rows.push({v: nsh.calc.value(si, shAddr(col, r)), cells: [...Array(c2 - c1 + 1)].map((_, i) => s.cells[shAddr(c1 + i, r)] || null)});
  rows.sort((x, y) => { const a = x.v, b2 = y.v; if (a === '' || a == null) return 1; if (b2 === '' || b2 == null) return -1;
    return dir * (typeof a === 'number' && typeof b2 === 'number' ? a - b2 : String(a).localeCompare(String(b2), 'fr', {numeric: true})); });
  rows.forEach((row, i) => row.cells.forEach((cell, j) => { const a = shAddr(c1 + j, r1 + head + i); if (cell) s.cells[a] = cell; else delete s.cells[a]; }));
  shSaved();
}
function shResize(e, th) {
  e.preventDefault();
  const x0 = e.clientX, w0 = th.offsetWidth, col = shColName(+th.dataset.col), s = shSheet();
  const move = m => { const w = Math.max(36, w0 + m.clientX - x0); th.style.width = w + 'px'; (s.cw ||= {})[col] = w; };
  addEventListener('pointermove', move);
  addEventListener('pointerup', () => { removeEventListener('pointermove', move); officeSave(); }, {once: true});
}
// chart of the selection: first column = labels when it holds text, the other columns = series
function shChart() {
  const b = shBox(), s = shSheet(), si = nsh.cur.data.sheets.indexOf(s), val = (c, r) => nsh.calc.value(si, shAddr(c, r));
  if (b.r1 === b.r2 && b.c1 === b.c2) return toast('Sélectionne d\'abord les données du graphique (avec leurs titres)', true);
  const hasLabels = typeof val(b.c1, b.r1 + 1) === 'string' || typeof val(b.c1, b.r2) === 'string', hasHead = typeof val(b.c2, b.r1) === 'string';
  const labels = [], series = [];
  for (let c = b.c1 + (hasLabels ? 1 : 0); c <= b.c2; c++) series.push({name: hasHead ? shStr(val(c, b.r1)) : shColName(c), v: []});
  for (let r = b.r1 + (hasHead ? 1 : 0); r <= b.r2; r++) {
    labels.push(hasLabels ? shStr(val(b.c1, r)) : String(r + 1));
    series.forEach((se, i) => { const v = val(b.c1 + (hasLabels ? 1 : 0) + i, r); se.v.push(typeof v === 'number' ? v : 0); });
  }
  const m = el('div', 'ofModal'), win = el('div', 'win px'), cv = el('canvas'), type = el('select', 'ofSel'), foot = el('div', 'row');
  type.append(...[['bar', 'Barres'], ['line', 'Courbes'], ['pie', 'Camembert']].map(([v, l]) => Object.assign(el('option', '', l), {value: v})));
  cv.width = 900; cv.height = 480;
  const draw = () => ofChart(cv, type.value, labels, series);
  type.onchange = draw;
  const copy = el('button', 'btn px', 'COPIER L\'IMAGE'), x = el('button', 'btn main px', 'FERMER');
  copy.onclick = () => window.neo.clipImageData(cv.toDataURL()).then(() => toast('Graphique copié : colle-le dans NeoDocs, NeoSlides ou ailleurs'));
  x.onclick = () => m.remove(); m.onclick = e => { if (e.target === m) m.remove(); };
  const head = el('div', 'winHead'); head.append(el('h2', '', 'GRAPHIQUE'));
  foot.append(type, copy, x); win.append(head, cv, foot); win.style.width = 'min(960px,94vw)'; m.append(win); document.body.append(m);
  draw();
}
function ofChart(cv, type, labels, series) {  // shared with NeoSlides: bars, lines or pie on a light background
  const g = cv.getContext('2d'), W = cv.width, H = cv.height, pal = ['#8a5cf0', '#e01ec8', '#2f9fd0', '#f0a030', '#3fbf7f', '#e04848', '#6a6ad8', '#c0a020'];
  g.fillStyle = '#fff'; g.fillRect(0, 0, W, H); g.font = '15px Segoe UI, Arial'; g.textBaseline = 'middle';
  if (type === 'pie') {
    const v = series[0]?.v || [], tot = v.reduce((a, b) => a + Math.max(0, b), 0) || 1, cx = W * .36, cy = H / 2, R = H * .4; let a = -Math.PI / 2;
    v.forEach((x, i) => { const d = Math.max(0, x) / tot * Math.PI * 2; g.fillStyle = pal[i % pal.length]; g.beginPath(); g.moveTo(cx, cy); g.arc(cx, cy, R, a, a + d); g.fill(); a += d;
      g.fillRect(W * .68, 40 + i * 28, 16, 16); g.fillStyle = '#222'; g.fillText((labels[i] || '') + ' : ' + shFmt(x) + ' (' + Math.round(Math.max(0, x) / tot * 100) + ' %)', W * .68 + 24, 48 + i * 28); });
    return;
  }
  const all = series.flatMap(s => s.v), mx = Math.max(0, ...all), mn = Math.min(0, ...all), L = 70, B = H - 60, T = 30, R = W - 20 - (series.length > 1 ? 160 : 0), sy = v => B - (v - mn) / ((mx - mn) || 1) * (B - T);
  g.strokeStyle = '#ddd'; g.fillStyle = '#555'; g.textAlign = 'right';
  for (let i = 0; i <= 5; i++) { const v = mn + (mx - mn) * i / 5, y = sy(v); g.beginPath(); g.moveTo(L, y); g.lineTo(R, y); g.stroke(); g.fillText(shFmt(+v.toPrecision(3)), L - 8, y); }
  const n = labels.length, slot = (R - L) / Math.max(1, n);
  g.textAlign = 'center'; labels.forEach((l, i) => g.fillText(l.length > 14 ? l.slice(0, 13) + '…' : l, L + slot * (i + .5), B + 18));
  series.forEach((s, k) => {
    g.fillStyle = g.strokeStyle = pal[k % pal.length]; g.lineWidth = 3;
    if (type === 'bar') { const bw = slot * .8 / series.length; s.v.forEach((v, i) => { const x = L + slot * i + slot * .1 + bw * k; g.fillRect(x, Math.min(sy(v), sy(0)), bw - 2, Math.abs(sy(v) - sy(0))); }); }
    else { g.beginPath(); s.v.forEach((v, i) => { const x = L + slot * (i + .5); i ? g.lineTo(x, sy(v)) : g.moveTo(x, sy(v)); }); g.stroke(); s.v.forEach((v, i) => { g.beginPath(); g.arc(L + slot * (i + .5), sy(v), 4, 0, 7); g.fill(); }); }
    if (series.length > 1) { g.fillRect(R + 20, T + k * 26, 14, 14); g.fillStyle = '#222'; g.textAlign = 'left'; g.fillText(s.name, R + 40, T + 7 + k * 26); g.textAlign = 'center'; }
  });
}
nsh.open = f => { nsh.cur = f; nsh.undo = []; nsh.redo = []; nsh.editing = false; nsh.edit.style.display = 'none'; f.data.cur = Math.min(f.data.cur || 0, f.data.sheets.length - 1); nsh.sel = {c: 0, r: 0, c2: 0, r2: 0}; shBuild(); setTimeout(() => nsh.gridW.focus(), 30); };
nsh.close = () => { nsh.cur = null; };
nsh.icon = __icon('sheets'); ofRegister(nsh);  // (non indenté : les textes sur plusieurs lignes restent exactement les tiens)
  // ---- fin ----
  ctx.onOpen(() => { ofOpen('sheet'); });
}
