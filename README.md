# Journey Through my Postgraduate Studies

A personal portfolio-of-evidence website for Randiga Harnes' MPhil in Cancer
Science at Stellenbosch University — built as a plain HTML/CSS/JS site with
no build tools, so it can be hosted for free and edited easily over time.

## What's in here

```
index.html          Homepage (hero, about, research preview, notes preview, blog preview)
blog.html            Full list of blog posts
notes.html           Full list of class notes
research.html        The detailed research/thesis page
data/posts.json       The index that drives the blog list — one entry per post
data/notes.json       The index that drives the notes list — one entry per note
blog/*.html           One HTML file per blog post
notes/*.html          One HTML file per class note
assets/css/style.css  All styling
assets/js/main.js     Navigation, the homepage loader animation, and list rendering
```

Three starter blog posts and four starter notes are included so the site
isn't empty — read through them and edit or delete anything that isn't
accurate. They're written in your voice as a starting point, not as
placeholder lorem ipsum.

## Previewing the site on your computer

Because the homepage loads `data/posts.json` and `data/notes.json` with
JavaScript, opening `index.html` by double-clicking it won't load those
lists (browsers block that kind of file loading for security reasons).
To preview properly:

- **Easiest:** open the folder in VS Code, install the "Live Server"
  extension, right-click `index.html`, and choose "Open with Live Server".
- **No install:** if you have Python installed, open a terminal in the
  site folder and run `python3 -m http.server`, then visit
  `http://localhost:8000` in your browser.

Once it's hosted on GitHub Pages (below), this isn't an issue at all —
it only affects previewing directly from your hard drive.

## How to add content later (with Claude's help)

Come back to a chat with Claude (with the site files uploaded, or open in
Claude Code) and just ask in plain language. Some examples that work well:

- "Add a new blog post titled '...' about ..."
- "Add a class note for my [module name] class covering ..."
- "Update the research page — my working title is now ..."
- "I want to reorder the nav" / "change the accent color to ..."

Claude will create the new HTML file in `blog/` or `notes/`, add a matching
entry to `data/posts.json` or `data/notes.json`, and you just need to
re-upload/push the changed files. You don't need to touch the JSON or the
HTML template structure yourself unless you want to.

### Doing it yourself (optional)

If you want to add a post without Claude:

1. Copy an existing file in `blog/` (for a post) or `notes/` (for a note)
   and rename it to a short slug, e.g. `blog/first-conference.html`.
2. Edit the title, tag/module, date, and body text inside it.
3. Add a matching entry to `data/posts.json` (or `data/notes.json`) with
   the same slug, title, tag/module, date, and a one-sentence excerpt/summary.
4. Save, commit, and push — the new entry appears in the list automatically.

## Hosting it on GitHub Pages (free)

1. **Create a GitHub account** at github.com if you don't have one.
2. **Create a new repository** — click the "+" in the top right → "New
   repository". Name it something like `postgrad-journey`. Keep it Public.
   Don't add a README (you already have one).
3. **Upload the site files** — on the new repository's page, click
   "uploading an existing file" and drag in everything from this folder
   (keeping the folder structure: `assets/`, `blog/`, `notes/`, `data/`,
   and the `.html`/`.md` files at the top level). Commit the changes.
4. **Turn on Pages** — go to the repository's *Settings* tab → *Pages* in
   the left sidebar. Under "Build and deployment", set Source to
   "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
5. **Wait a minute or two**, then refresh that Pages settings page — it
   will show your live URL, something like:
   `https://yourusername.github.io/postgrad-journey/`
6. **Updating later:** any time you (or Claude, if you're working in
   Claude Code with the repo cloned) change a file, upload the changed
   file again through the GitHub website (or `git push` if you're
   comfortable with git), and the live site updates within a minute or two.

### Optional: a custom domain

If you'd like something like `randigaharnes.com` instead of the
`github.io` address, buy a domain from any registrar (Namecheap, Google
Domains successor, etc. — a `.com` is typically $10–15/year), then follow
GitHub's guide for "Configuring a custom domain for your GitHub Pages
site" — Claude can walk you through the exact DNS records when you're
ready for that step.

## About section — writing your own bio

The About section on the homepage has a dashed box labelled **"Your bio —
replace this text"**. That's a deliberate placeholder: open `index.html`,
find `<div class="text-slot">`, and replace the two/three placeholder
paragraphs inside it with your own writing. Once you've written your own
text, the italic/dashed placeholder styling can stay (it's just a visual
treatment) or you can ask Claude to plain it up.

Two photos are already wired in:
- `assets/img/portrait-formal.jpg` — used in the About section
- `assets/img/portrait-campus.jpg` — used as the large hero image

To swap either photo later, just replace the file at that path (keep the
same filename) or update the `src` attribute in `index.html`.

## Notes on the content already in the site

- The **About** section and contact email are placeholders using your
  name and degree — update the email address in `index.html` and the
  footer of every page.
- The **Research** page frames a working research direction based on our
  conversation (oncology pharmacy adherence + cancer epidemiology) — this
  is meant to evolve. Update it as your proposal firms up with your
  supervisor.
- The **socials** links in the footer (LinkedIn, Google Scholar) point to
  generic URLs — replace them with your actual profile links.
