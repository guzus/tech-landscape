---
name: update-landscape
description: >
  This skill should be used when the user asks to "add a company", "add a relationship",
  "update an edge", "remove a node", "add more companies", "update the data",
  "add startups", "add X companies", or any request to modify the tech landscape
  graph data (nodes or edges). Also triggers on "who's missing", "what relationships
  are missing", or "update company info".
---

# Update Tech Landscape

Manage companies (nodes) and relationships (edges) in the Silicon Valley tech landscape
visualization. Data lives in `data.js`, loaded by `index.html`.

## Data Location

- **Data file:** `data.js` — contains the `DATA` object with `nodes` and `edges` arrays
- **Visualization:** `index.html` — reads `DATA` from `data.js`, renders D3 force graph
- **Schema reference:** `references/schema.md` — full field definitions, valid types, constraints

## Workflow: Adding Companies

1. Read `data.js` to see existing nodes and avoid duplicates
2. Read `references/schema.md` for the node schema
3. For each new company, determine:
   - `id`: lowercase, unique, no spaces (e.g., `"databricks"`)
   - `cluster`: one of AI, Cloud, Social, Hardware, Enterprise, Fintech, Transport, Consumer
   - All required fields: name, founded, hq, ceo, description
4. Insert new node objects into the `DATA.nodes` array in `data.js`
5. Identify relationships between the new company and existing companies
6. Add corresponding edges (see below)

## Workflow: Adding Relationships

1. Read `data.js` to verify both source and target node IDs exist
2. Read `references/schema.md` for the edge schema and valid types
3. For each relationship, determine:
   - `type`: ally, rival, investor, acquirer, lawsuit, or frenemy
   - `strength`: 1-5 scale (see schema for calibration)
   - `startYear` / `endYear`: when the relationship started and ended (null if ongoing)
   - `summary`: 1-3 factual sentences explaining the relationship
   - `events`: 2-6 timeline entries with year and description
4. Insert new edge objects into the `DATA.edges` array in `data.js`

## Workflow: Updating Existing Data

1. Read `data.js` and locate the node or edge to update
2. Apply changes directly — update CEO names, descriptions, add new events to edges, etc.
3. When updating a company's cluster, verify no edges assume the old cluster for filtering

## Workflow: Removing Data

1. When removing a node, also remove ALL edges that reference it as source or target
2. When removing an edge, no other cleanup is needed

## Validation Rules

Before finalizing any data change, verify:

- [ ] Every edge `source` and `target` references an existing node `id`
- [ ] No duplicate node `id` values
- [ ] All required fields are present on every node and edge
- [ ] `strength` values are integers 1-5
- [ ] `startYear` <= 2026 for edges that should be visible by default
- [ ] `type` is one of the 6 valid relationship types
- [ ] `cluster` is one of the 8 valid industry clusters
- [ ] Event years are within the `startYear`-`endYear` range (or startYear-2026 if endYear is null)
- [ ] Descriptions and summaries use factual, verifiable information

## Research Guidelines

When adding companies or relationships based on user requests:

- Use factual, well-known public information only
- Dates should be accurate (founding years, lawsuit dates, acquisition dates)
- CEO names should be current
- Relationship summaries should be neutral and factual, not opinionated
- When uncertain about a fact, note it and ask the user rather than guessing
- Prefer well-documented, notable relationships over obscure ones

## Quick Reference

### Add a company
```
Edit data.js → DATA.nodes array → insert { id, name, cluster, founded, hq, ceo, description }
```

### Add a relationship
```
Edit data.js → DATA.edges array → insert { source, target, type, strength, startYear, endYear, summary, events }
```

### Valid clusters
AI, Cloud, Social, Hardware, Enterprise, Fintech, Transport, Consumer

### Valid relationship types
ally, rival, investor, acquirer, lawsuit, frenemy

## Additional Resources

### Reference Files
- **`references/schema.md`** — Complete field definitions, valid values, constraints, and performance notes
