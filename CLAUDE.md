# Tech Landscape

Interactive tech industry relationship visualization built with D3.js force-directed graph. No build tools — static HTML/CSS/JS served directly.

**Live:** https://landscape.guzus.xyz
**Repo:** https://github.com/guzus/tech-landscape

## Commands

```bash
# Run locally (separate .js files require a server — file:// won't work due to CORS)
npx serve .
# or
python3 -m http.server

# Deploy to Netlify
netlify deploy --prod --dir=.
```

## Architecture

```
index.html   — HTML shell, loads external CSS/JS
style.css    — All styles (dark constellation theme, layout, components)
app.js       — D3 visualization logic (graph, filters, sidebar, timeline, URL hash)
data.js      — Company nodes and relationship edges (DATA global variable)
```

`data.js` is loaded first via `<script src>`, making `DATA` available to `app.js`.

## Data Schema

Nodes (companies):
```
{ id, name, cluster, founded, hq, ceo, description }
```
- Clusters: AI, Cloud, Social, Hardware, Enterprise, Fintech, Transport, Consumer

Edges (relationships):
```
{ source, target, type, strength, startYear, endYear, summary, events[] }
```
- Types: ally, rival, investor, acquirer, lawsuit, frenemy
- Strength: 1-5 (controls edge thickness)
- `endYear: null` means ongoing

## Editing Data

Edit `data.js` directly. The `update-landscape` skill in `.claude/skills/` has full schema docs and validation rules. Every edge `source`/`target` must match an existing node `id`.

## Key Implementation Details

- `nodeMap` (object keyed by id) provides O(1) node lookups — avoid `.find()` on DATA.nodes
- D3 selections are cached after `updateGraph()` and reused in `ticked()` for performance
- URL hash state (`#year=2020&q=google`) enables shareable deep links — params are sanitized to alphanumeric only
- Cluster force is a custom D3 force that pulls nodes toward their cluster centroid
- SVG glow filters were removed for performance — edge thickness and color carry visual weight instead
