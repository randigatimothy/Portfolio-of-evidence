/* ==========================================================================
   Journey Through my Postgraduate Studies — shared site behaviour
   ========================================================================== */

// ---- Mobile nav toggle -----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Highlight current page in nav
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const target = a.getAttribute('href').split('/').pop();
    if (target === here || (here === '' && target === 'index.html')) {
      a.classList.add('active');
    }
  });
});

// ---- One-time hero loader sequence ------------------------------------
// A single orchestrated "sequencing results" progress moment, echoing a
// lab readout, rather than scattered fade-ins on every section.
function runHeroLoader() {
  const loader = document.querySelector('.hero-loader');
  if (!loader) return;
  const fill = loader.querySelector('.loader-fill');
  const pct = loader.querySelector('.loader-pct');
  let n = 0;
  const words = ['sequencing', 'annotating', 'compiling', 'ready'];
  const label = loader.querySelector('.loader-label');
  const step = () => {
    n += Math.round(4 + Math.random() * 10);
    if (n >= 100) n = 100;
    if (fill) fill.style.clipPath = `inset(0 ${100 - n}% 0 0)`;
    if (pct) pct.textContent = n + '%';
    if (label) label.textContent = words[Math.min(3, Math.floor(n / 26))];
    if (n < 100) {
      requestAnimationFrame(() => setTimeout(step, 60));
    } else {
      setTimeout(() => loader.classList.add('done'), 250);
    }
  };
  step();
}
document.addEventListener('DOMContentLoaded', runHeroLoader);

// ---- Helpers for date formatting ---------------------------------------
function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ---- Generic JSON list loader -------------------------------------------
// Fetches a JSON index file and hands the array to a render callback.
// Falls back gracefully (with a note) if opened directly from disk,
// since `fetch` on file:// URLs is blocked by browsers.
async function loadIndex(path, onData, onEmpty) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error('bad response');
    const data = await res.json();
    if (!data.length) { onEmpty(); return; }
    onData(data);
  } catch (err) {
    onEmpty(true);
  }
}

// ---- Render: blog cards (used on index.html preview + blog.html) -------
function renderPostCards(container, posts, opts = {}) {
  const limit = opts.limit || posts.length;
  const linkPrefix = opts.linkPrefix || 'blog/';
  container.innerHTML = posts.slice(0, limit).map(p => `
    <a class="post-card" href="${linkPrefix}${p.slug}.html">
      <span class="post-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      <p class="post-excerpt">${p.excerpt}</p>
      <span class="post-meta">${formatDate(p.date)}</span>
    </a>
  `).join('');
}

// ---- Render: notes timeline (used on index.html preview + notes.html) --
function renderNotesTimeline(container, notes, opts = {}) {
  const limit = opts.limit || notes.length;
  const linkPrefix = opts.linkPrefix || 'notes/';
  container.innerHTML = notes.slice(0, limit).map((n, i) => `
    <div class="timeline-item">
      <div class="timeline-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="timeline-body">
        <h3>${n.title}</h3>
        <div class="timeline-meta">${n.module} &middot; ${formatDate(n.date)}</div>
        <p>${n.summary}</p>
        <a class="timeline-link" href="${linkPrefix}${n.slug}.html">Read the full note &rarr;</a>
      </div>
    </div>
  `).join('');
}

function renderEmpty(container, kind) {
  container.innerHTML = `<div class="empty-state">No ${kind} yet — this is where new entries will appear once added.</div>`;
}
