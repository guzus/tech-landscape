# Tech Landscape Data Schema

## File Structure

After refactoring, data lives in `data.js` (loaded via `<script>` before `index.html`'s main script). The visualization code lives in `index.html`.

## Node Schema

```javascript
{
  id: "company-id",        // lowercase, no spaces, unique identifier
  name: "Display Name",    // full company name as shown in UI
  cluster: "AI",           // one of: AI, Cloud, Social, Hardware, Enterprise, Fintech, Transport, Consumer
  founded: 1998,           // founding year (integer)
  hq: "City, State/Country", // headquarters location
  ceo: "CEO Name",         // current CEO
  description: "One to two sentences about the company." // shown in tooltip and sidebar
}
```

### Valid Clusters

| Cluster    | Color   | Description                         |
|------------|---------|-------------------------------------|
| AI         | #7c4dff | AI labs and AI-first companies      |
| Cloud      | #00b0ff | Cloud infrastructure and data       |
| Social     | #f50057 | Social media platforms              |
| Hardware   | #ff6d00 | Chips, devices, semiconductors      |
| Enterprise | #00bfa5 | Enterprise software and SaaS        |
| Fintech    | #64dd17 | Financial technology                |
| Transport  | #ffd600 | Mobility, space, logistics          |
| Consumer   | #ff4081 | Consumer apps and entertainment     |

## Edge Schema

```javascript
{
  source: "company-id",    // id of source company (must exist in nodes)
  target: "company-id",    // id of target company (must exist in nodes)
  type: "rival",           // one of: ally, rival, investor, acquirer, lawsuit, frenemy
  strength: 4,             // 1-5 integer, intensity of relationship
  startYear: 2020,         // year relationship became notable
  endYear: null,           // null if ongoing, or year it ended/changed
  summary: "One to three sentences explaining the relationship.",
  events: [                // timeline of key events (2-6 entries recommended)
    { year: 2020, text: "What happened" },
    { year: 2024, text: "Latest development" }
  ]
}
```

### Relationship Types

| Type     | Color   | Description                                      |
|----------|---------|--------------------------------------------------|
| ally     | #00e676 | Strategic partnership, deep integration           |
| rival    | #ff1744 | Direct competition, public feuds                  |
| investor | #448aff | Funding, major investment                         |
| acquirer | #b388ff | Acquisition (absorbed or subsidiary)              |
| lawsuit  | #ff9100 | Legal battles, patent wars                        |
| frenemy  | #ffea00 | Complex: ally in some areas, rival in others      |

### Strength Scale

| Value | Meaning                                              |
|-------|------------------------------------------------------|
| 1     | Minor/peripheral relationship                        |
| 2     | Notable but not defining                             |
| 3     | Significant, well-known relationship                 |
| 4     | Major, industry-defining relationship                |
| 5     | Existential — one of the most important in tech      |

## Important Constraints

- Every `source` and `target` in edges MUST reference an existing node `id`
- Multiple edges between the same pair of companies are allowed (e.g., Uber-Waymo has both a lawsuit edge and an ally edge)
- `endYear: null` means the relationship is still active
- `startYear` must be <= current year (2026) for the edge to be visible at the default timeline position
- Node `id` values must be lowercase alphanumeric with optional hyphens
- After adding nodes, the `nodeMap` in `index.html` is auto-built from `DATA.nodes`

## Performance Notes

- The visualization handles 50-60 nodes and 100+ edges smoothly
- Beyond ~100 nodes, consider whether all companies are necessary
- Keep event arrays to 2-6 entries — more creates sidebar scroll fatigue
- Descriptions should be 1-2 sentences (shown in tooltip with limited space)
