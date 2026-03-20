// ============================================================
// CONSTANTS
// ============================================================
var NODE_RADIUS_MIN = 14;
var NODE_RADIUS_MAX = 38;
var LINK_DISTANCE = 180;
var CHARGE_STRENGTH = -800;

// Scale valuation (in $B) to node radius using sqrt scale for area-proportional sizing
var valExtent = d3.extent(DATA.nodes, function(d) { return d.valuation || 1; });
var radiusScale = d3.scaleSqrt().domain([valExtent[0], valExtent[1]]).range([NODE_RADIUS_MIN, NODE_RADIUS_MAX]);
function nodeRadius(d) { return radiusScale(d.valuation || 1); }
var ZOOM_MIN = 0.1;
var ZOOM_MAX = 10;
var TOOLTIP_DELAY = 50;
var MIN_YEAR = 2000;
var MAX_YEAR = 2026;

var TYPE_COLORS = {
  ally: '#5cb87a',
  rival: '#d95757',
  investor: '#5b8bd4',
  acquirer: '#9b7ec8',
  lawsuit: '#d4935b',
  frenemy: '#c9b84e'
};

var TYPE_LABELS = {
  ally: 'Ally',
  rival: 'Rival',
  investor: 'Investor',
  acquirer: 'Acquirer',
  lawsuit: 'Lawsuit',
  frenemy: 'Frenemy'
};

var CLUSTER_COLORS = {
  AI: '#8b6cc1',
  Cloud: '#5a9fcf',
  Social: '#c75a8a',
  Hardware: '#c98a4b',
  Enterprise: '#5aab96',
  Fintech: '#7aab5a',
  Transport: '#b8a340',
  Consumer: '#cf6a7a'
};

// ============================================================
// STATE
// ============================================================
var currentYear = MAX_YEAR;
var activeTypes = new Set(Object.keys(TYPE_COLORS));
var activeClusters = new Set(Object.keys(CLUSTER_COLORS));
var searchQuery = '';
var searchQueryLower = '';
var simulation, svg, g, linkGroup, nodeGroup;
var tooltipTimer = null;

// Perf: cached selections updated in updateGraph, used in ticked
var cachedLinks = null;
var cachedHitareas = null;
var cachedNodeGroups = null;

// Perf: node lookup map for O(1) access instead of .find()
var nodeMap = {};
DATA.nodes.forEach(function(n) { nodeMap[n.id] = n; });

// ============================================================
// SAFE DOM HELPERS
// ============================================================
function el(tag, attrs, children) {
  var node = document.createElement(tag);
  if (attrs) {
    Object.keys(attrs).forEach(function(k) {
      if (k === 'style' && typeof attrs[k] === 'object') {
        Object.keys(attrs[k]).forEach(function(s) { node.style[s] = attrs[k][s]; });
      } else if (k.indexOf('on') === 0) {
        node.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
      } else {
        node.setAttribute(k, attrs[k]);
      }
    });
  }
  if (children) {
    if (typeof children === 'string') { node.textContent = children; }
    else if (Array.isArray(children)) { children.forEach(function(c) { if (c) node.appendChild(c); }); }
    else { node.appendChild(children); }
  }
  return node;
}

// ============================================================
// INITIALIZATION
// ============================================================
function init() {
  buildFilters();
  buildLegend();
  buildYearMarks();
  initGraph();
  applyHashState();
  bindEvents();
}

function buildFilters() {
  var typeContainer = document.getElementById('type-filters');
  Object.keys(TYPE_COLORS).forEach(function(type) {
    var color = TYPE_COLORS[type];
    var label = document.createElement('label');
    label.className = 'filter-item';
    var cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = true;
    cb.dataset.type = type;
    var box = document.createElement('span');
    box.className = 'filter-checkbox';
    box.style.color = color;
    var line = document.createElement('span');
    line.className = 'legend-line';
    line.style.background = color;
    var lbl = document.createElement('span');
    lbl.className = 'filter-label';
    lbl.textContent = TYPE_LABELS[type];
    label.appendChild(cb);
    label.appendChild(box);
    label.appendChild(line);
    label.appendChild(lbl);
    typeContainer.appendChild(label);
  });

  var clusterContainer = document.getElementById('cluster-filters');
  Object.keys(CLUSTER_COLORS).forEach(function(cluster) {
    var color = CLUSTER_COLORS[cluster];
    var label = document.createElement('label');
    label.className = 'filter-item';
    var cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = true;
    cb.dataset.cluster = cluster;
    var box = document.createElement('span');
    box.className = 'filter-checkbox';
    box.style.color = color;
    var dot = document.createElement('span');
    dot.className = 'filter-dot';
    dot.style.background = color;
    var lbl = document.createElement('span');
    lbl.className = 'filter-label';
    lbl.textContent = cluster;
    label.appendChild(cb);
    label.appendChild(box);
    label.appendChild(dot);
    label.appendChild(lbl);
    clusterContainer.appendChild(label);
  });
}

function buildLegend() {
  var legend = document.getElementById('legend');
  var item1 = document.createElement('div');
  item1.style.cssText = 'margin-bottom:6px;color:var(--text-muted);font-size:11px;';
  item1.textContent = 'Edge thickness = strength';
  var item2 = document.createElement('div');
  item2.style.cssText = 'color:var(--text-muted);font-size:11px;';
  item2.textContent = 'Node color = industry';
  legend.appendChild(item1);
  legend.appendChild(item2);
}

function buildYearMarks() {
  var container = document.getElementById('year-marks');
  for (var y = MIN_YEAR; y <= MAX_YEAR; y += 2) {
    var span = document.createElement('span');
    span.textContent = y;
    container.appendChild(span);
  }
}

// ============================================================
// GRAPH
// ============================================================
function initGraph() {
  var container = document.getElementById('graph-container');
  var width = container.clientWidth;
  var height = container.clientHeight;

  svg = d3.select('#graph-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  var zoom = d3.zoom()
    .scaleExtent([ZOOM_MIN, ZOOM_MAX])
    .on('zoom', function(event) {
      g.attr('transform', event.transform);
    });

  svg.call(zoom);

  g = svg.append('g');
  linkGroup = g.append('g').attr('class', 'links');
  nodeGroup = g.append('g').attr('class', 'nodes');

  var initialTransform = d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8);
  svg.call(zoom.transform, initialTransform);

  simulation = d3.forceSimulation(DATA.nodes)
    .force('link', d3.forceLink().id(function(d) { return d.id; }).distance(LINK_DISTANCE))
    .force('charge', d3.forceManyBody().strength(CHARGE_STRENGTH).theta(0.9))
    .force('center', d3.forceCenter(0, 0))
    .force('collision', d3.forceCollide().radius(function(d) { return nodeRadius(d) + 8; }).iterations(1))
    .force('cluster', clusterForce(0.3))
    .alphaDecay(0.03)
    .velocityDecay(0.4)
    .on('tick', ticked);

  updateGraph();
}

function clusterForce(strength) {
  var nodes;
  function force(alpha) {
    var counts = {}, sums = {};
    nodes.forEach(function(d) {
      var c = d.cluster;
      if (!counts[c]) { counts[c] = 0; sums[c] = { x: 0, y: 0 }; }
      counts[c]++;
      sums[c].x += d.x;
      sums[c].y += d.y;
    });
    var centers = {};
    Object.keys(counts).forEach(function(c) {
      centers[c] = { x: sums[c].x / counts[c], y: sums[c].y / counts[c] };
    });
    nodes.forEach(function(d) {
      var center = centers[d.cluster];
      if (center) {
        d.vx += (center.x - d.x) * strength * alpha;
        d.vy += (center.y - d.y) * strength * alpha;
      }
    });
  }
  force.initialize = function(_) { nodes = _; };
  return force;
}

function getVisibleEdges() {
  return DATA.edges.filter(function(e) {
    if (!activeTypes.has(e.type)) return false;
    if (e.startYear > currentYear) return false;
    if (e.endYear !== null && e.endYear < currentYear) return false;
    var srcId = e.source.id || e.source;
    var tgtId = e.target.id || e.target;
    var srcNode = nodeMap[srcId];
    var tgtNode = nodeMap[tgtId];
    if (srcNode && !activeClusters.has(srcNode.cluster)) return false;
    if (tgtNode && !activeClusters.has(tgtNode.cluster)) return false;
    return true;
  });
}

function getVisibleNodes() {
  return DATA.nodes.filter(function(n) { return activeClusters.has(n.cluster); });
}

function isNodeHighlighted(node) {
  if (!searchQueryLower) return true;
  return node.name.toLowerCase().indexOf(searchQueryLower) >= 0 ||
         node.id.indexOf(searchQueryLower) >= 0;
}

function isEdgeHighlighted(d) {
  var srcId = d.source.id || d.source;
  var tgtId = d.target.id || d.target;
  var srcNode = nodeMap[srcId];
  var tgtNode = nodeMap[tgtId];
  return (srcNode && isNodeHighlighted(srcNode)) || (tgtNode && isNodeHighlighted(tgtNode));
}

function updateGraph() {
  var visibleEdges = getVisibleEdges();
  var visibleNodes = getVisibleNodes();

  document.getElementById('timeline-stats').textContent =
    visibleNodes.length + ' companies, ' + visibleEdges.length + ' relationships';

  var overlay = document.getElementById('message-overlay');
  if (visibleNodes.length === 0) {
    overlay.textContent = 'No companies match your filters';
    overlay.style.display = 'block';
  } else if (visibleEdges.length === 0) {
    overlay.textContent = 'No relationships visible in ' + currentYear;
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }

  // Links
  var linkData = linkGroup.selectAll('.link-group')
    .data(visibleEdges, function(d) { return (d.source.id || d.source) + '-' + (d.target.id || d.target) + '-' + d.type; });

  linkData.exit().remove();

  var linkEnter = linkData.enter().append('g').attr('class', 'link-group');

  linkEnter.append('line')
    .attr('class', 'link-hitarea')
    .on('click', function(event, d) { showEdgeDetail(d); });

  linkEnter.append('line')
    .attr('class', 'link')
    .on('click', function(event, d) { showEdgeDetail(d); });

  linkGroup.selectAll('.link')
    .attr('stroke', function(d) { return TYPE_COLORS[d.type]; })
    .attr('stroke-width', function(d) { return d.strength * 1.5; })
    .attr('stroke-opacity', function(d) {
      if (searchQueryLower && !isEdgeHighlighted(d)) return 0.05;
      return 0.3 + d.strength * 0.12;
    });

  // Nodes
  var nodeData = nodeGroup.selectAll('.node-group')
    .data(visibleNodes, function(d) { return d.id; });

  nodeData.exit().remove();

  var nodeEnter = nodeData.enter().append('g')
    .attr('class', 'node-group')
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended))
    .on('mouseenter', function(event, d) { showTooltip(event, d); })
    .on('mouseleave', hideTooltip)
    .on('click', function(event, d) { showCompanyDetail(d); });

  nodeEnter.append('circle')
    .attr('class', 'node-circle')
    .attr('r', function(d) { return nodeRadius(d); })
    .attr('fill', function(d) { return d3.color(CLUSTER_COLORS[d.cluster]).darker(2); })
    .attr('stroke', function(d) { return d3.color(CLUSTER_COLORS[d.cluster]).brighter(0.3); })
    .attr('stroke-width', 1.5);

  nodeEnter.append('text')
    .attr('class', 'node-label')
    .attr('dy', 1)
    .text(function(d) {
      var name = d.name.split(/[/(]/)[0].trim();
      return name.length > 10 ? name.slice(0, 9) + '\u2026' : name;
    });

  nodeEnter.append('text')
    .attr('class', 'node-cluster-label')
    .attr('dy', function(d) { return nodeRadius(d) + 12; })
    .text(function(d) { return d.cluster; });

  nodeGroup.selectAll('.node-group').transition().duration(200)
    .attr('opacity', function(d) { return isNodeHighlighted(d) ? 1 : 0.15; });

  // Cache selections for ticked() hot path
  cachedLinks = linkGroup.selectAll('.link');
  cachedHitareas = linkGroup.selectAll('.link-hitarea');
  cachedNodeGroups = nodeGroup.selectAll('.node-group');

  simulation.nodes(visibleNodes);
  simulation.force('link').links(visibleEdges);
  simulation.alpha(0.3).restart();
}

function ticked() {
  if (!cachedLinks) return;
  cachedLinks
    .attr('x1', function(d) { return d.source.x; })
    .attr('y1', function(d) { return d.source.y; })
    .attr('x2', function(d) { return d.target.x; })
    .attr('y2', function(d) { return d.target.y; });

  cachedHitareas
    .attr('x1', function(d) { return d.source.x; })
    .attr('y1', function(d) { return d.source.y; })
    .attr('x2', function(d) { return d.target.x; })
    .attr('y2', function(d) { return d.target.y; });

  cachedNodeGroups
    .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });
}

function dragstarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
  hideTooltip();
}

function dragged(event, d) {
  d.fx = event.x;
  d.fy = event.y;
}

function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

// ============================================================
// TOOLTIP (Company Card)
// ============================================================
function showTooltip(event, d) {
  clearTimeout(tooltipTimer);
  tooltipTimer = setTimeout(function() {
    var tooltip = document.getElementById('tooltip');
    var clusterColor = CLUSTER_COLORS[d.cluster];

    // Build tooltip with safe DOM methods
    tooltip.textContent = '';
    var nameDiv = el('div', { class: 'tt-name', style: { color: clusterColor } }, d.name);
    var indDiv = el('div', { class: 'tt-industry', style: { color: clusterColor } }, d.cluster);
    var valText = d.valuation ? (d.valuation >= 1000 ? '$' + (d.valuation / 1000).toFixed(1) + 'T' : '$' + d.valuation + 'B') : 'N/A';
    var metaDiv = el('div', { class: 'tt-meta' }, [
      el('div', null, [document.createTextNode('Valuation: '), el('span', null, valText)]),
      el('div', null, [document.createTextNode('CEO: '), el('span', null, d.ceo)]),
      el('div', null, [document.createTextNode('Founded: '), el('span', null, String(d.founded))]),
      el('div', null, [document.createTextNode('HQ: '), el('span', null, d.hq)])
    ]);
    var descDiv = el('div', { class: 'tt-desc' }, d.description);
    tooltip.appendChild(nameDiv);
    tooltip.appendChild(indDiv);
    tooltip.appendChild(metaDiv);
    tooltip.appendChild(descDiv);

    var isMobile = window.innerWidth <= 900;
    if (isMobile) {
      // Fixed bottom sheet on mobile
      tooltip.style.left = '';
      tooltip.style.top = '';
      tooltip.style.right = '';
      tooltip.style.bottom = '';
    } else {
      var container = document.getElementById('graph-container');
      var rect = container.getBoundingClientRect();
      var x = event.clientX - rect.left + 15;
      var y = event.clientY - rect.top + 15;

      if (x + 260 > rect.width) x = x - 260 - 30;
      if (y + 200 > rect.height) y = rect.height - 200 - 10;

      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
    }
    tooltip.style.display = 'block';
  }, TOOLTIP_DELAY);
}

function hideTooltip() {
  clearTimeout(tooltipTimer);
  document.getElementById('tooltip').style.display = 'none';
}

// ============================================================
// SIDEBAR
// ============================================================
function showEdgeDetail(d) {
  var sidebar = document.getElementById('sidebar');
  var content = document.getElementById('sidebar-content');
  var color = TYPE_COLORS[d.type];
  var srcName = (d.source.name) || d.source;
  var tgtName = (d.target.name) || d.target;

  content.textContent = '';

  // Header
  var header = el('div', { class: 'sb-header' }, [
    el('span', { class: 'sb-companies' }, srcName + ' \u2194 ' + tgtName)
  ]);
  content.appendChild(header);

  // Badge
  var badge = el('span', { class: 'sb-badge', style: { background: color + '20', color: color } }, TYPE_LABELS[d.type]);
  content.appendChild(badge);

  // Strength
  var strengthDiv = el('div', { class: 'sb-strength', style: { color: color } });
  strengthDiv.appendChild(document.createTextNode('Intensity '));
  var dotsSpan = el('span', { class: 'sb-dots' });
  for (var i = 1; i <= 5; i++) {
    var dot = el('span', { class: 'sb-dot' });
    if (i <= d.strength) {
      dot.classList.add('active');
      dot.style.background = color;
    }
    dotsSpan.appendChild(dot);
  }
  strengthDiv.appendChild(dotsSpan);
  content.appendChild(strengthDiv);

  // Story
  content.appendChild(el('div', { class: 'sb-story' }, d.summary));

  // Timeline
  if (d.events && d.events.length) {
    var tlDiv = el('div', { class: 'sb-timeline' }, [
      el('h4', null, 'Timeline')
    ]);
    d.events.forEach(function(evt) {
      tlDiv.appendChild(el('div', { class: 'sb-tl-item' }, [
        el('span', { class: 'sb-tl-year' }, String(evt.year)),
        el('span', { class: 'sb-tl-event' }, evt.text)
      ]));
    });
    content.appendChild(tlDiv);
  }

  sidebar.classList.add('open');
  updateHash();
}

function showCompanyDetail(d) {
  var sidebar = document.getElementById('sidebar');
  var content = document.getElementById('sidebar-content');
  var color = CLUSTER_COLORS[d.cluster];

  content.textContent = '';

  // Header
  content.appendChild(el('div', { class: 'sb-header' }, [
    el('span', { class: 'sb-companies', style: { color: color } }, d.name)
  ]));

  // Badge
  content.appendChild(el('span', { class: 'sb-badge', style: { background: color + '20', color: color } }, d.cluster));

  // Meta
  var meta = el('div', { style: { marginBottom: '12px' } }, [
    el('div', { class: 'sb-meta-row' }, [document.createTextNode('CEO: '), el('span', null, d.ceo)]),
    el('div', { class: 'sb-meta-row' }, [document.createTextNode('Founded: '), el('span', null, String(d.founded))]),
    el('div', { class: 'sb-meta-row' }, [document.createTextNode('HQ: '), el('span', null, d.hq)])
  ]);
  content.appendChild(meta);

  // Description
  content.appendChild(el('div', { class: 'sb-story' }, d.description));

  // Relationships
  var relationships = DATA.edges.filter(function(e) {
    var srcId = e.source.id || e.source;
    var tgtId = e.target.id || e.target;
    return srcId === d.id || tgtId === d.id;
  }).filter(function(e) {
    if (e.startYear > currentYear) return false;
    if (e.endYear !== null && e.endYear < currentYear) return false;
    return true;
  });

  var tlDiv = el('div', { class: 'sb-timeline' }, [
    el('h4', null, 'Relationships (' + relationships.length + ')')
  ]);

  relationships.forEach(function(e) {
    var srcId = e.source.id || e.source;
    var tgtId = e.target.id || e.target;
    var otherId = srcId === d.id ? tgtId : srcId;
    var other = nodeMap[otherId];
    var relColor = TYPE_COLORS[e.type];
    var row = el('div', { class: 'sb-rel-item', onclick: function() { showEdgeDetail(e); } }, [
      el('span', { class: 'sb-badge', style: { background: relColor + '20', color: relColor, fontSize: '10px', padding: '2px 6px', marginBottom: '0' } }, TYPE_LABELS[e.type]),
      el('span', { style: { fontSize: '12px', color: 'var(--text-secondary)' } }, other ? other.name : otherId)
    ]);
    tlDiv.appendChild(row);
  });

  if (relationships.length === 0) {
    tlDiv.appendChild(el('div', { style: { color: 'var(--text-muted)', fontSize: '12px' } }, 'No relationships at this time'));
  }

  content.appendChild(tlDiv);

  sidebar.classList.add('open');
  updateHash();
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  updateHash();
}

// ============================================================
// EVENTS
// ============================================================
function bindEvents() {
  document.getElementById('search').addEventListener('input', function(e) {
    searchQuery = e.target.value;
    searchQueryLower = searchQuery.toLowerCase();
    updateGraph();
    updateHash();
  });

  document.getElementById('type-filters').addEventListener('change', function(e) {
    var type = e.target.dataset.type;
    if (type) {
      if (e.target.checked) activeTypes.add(type);
      else activeTypes.delete(type);
      updateGraph();
      updateHash();
    }
  });

  document.getElementById('cluster-filters').addEventListener('change', function(e) {
    var cluster = e.target.dataset.cluster;
    if (cluster) {
      if (e.target.checked) activeClusters.add(cluster);
      else activeClusters.delete(cluster);
      updateGraph();
      updateHash();
    }
  });

  // Filter toggle for mobile
  var filterToggle = document.getElementById('filter-toggle');
  var filtersPanel = document.getElementById('filters');
  filterToggle.addEventListener('click', function() {
    filtersPanel.classList.toggle('open');
  });
  // Close filters when clicking outside on mobile
  document.addEventListener('click', function(e) {
    if (filtersPanel.classList.contains('open') &&
        !filtersPanel.contains(e.target) &&
        e.target !== filterToggle) {
      filtersPanel.classList.remove('open');
    }
  });

  var sliderThrottle = null;
  document.getElementById('year-slider').addEventListener('input', function(e) {
    currentYear = parseInt(e.target.value);
    document.getElementById('timeline-year').textContent = currentYear;
    if (sliderThrottle) clearTimeout(sliderThrottle);
    sliderThrottle = setTimeout(function() {
      updateGraph();
      updateHash();
    }, 80);
  });

  document.getElementById('sidebar-close').addEventListener('click', closeSidebar);

  // Click graph background to close sidebar
  svg.on('click', function(event) {
    if (event.target.tagName === 'svg' || event.target === g.node()) {
      closeSidebar();
    }
  });

  // Escape key to close sidebar
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeSidebar();
  });

  window.addEventListener('hashchange', applyHashState);

  var resizeTimer = null;
  window.addEventListener('resize', function() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      var container = document.getElementById('graph-container');
      svg.attr('width', container.clientWidth).attr('height', container.clientHeight);
    }, 150);
  });
}

// ============================================================
// URL HASH (Deep Links)
// ============================================================
function sanitizeParam(str) {
  return str.replace(/[^a-zA-Z0-9\-_.,]/g, '');
}

function updateHash() {
  var params = [];
  if (currentYear !== MAX_YEAR) params.push('year=' + currentYear);
  if (searchQuery) params.push('q=' + encodeURIComponent(searchQuery));
  if (activeTypes.size !== Object.keys(TYPE_COLORS).length) {
    params.push('types=' + Array.from(activeTypes).join(','));
  }
  if (activeClusters.size !== Object.keys(CLUSTER_COLORS).length) {
    params.push('clusters=' + Array.from(activeClusters).join(','));
  }
  var hash = params.length ? '#' + params.join('&') : '';
  if (window.location.hash !== hash) {
    history.replaceState(null, '', hash || window.location.pathname);
  }
}

function applyHashState() {
  var hash = window.location.hash.slice(1);
  if (!hash) return;

  var params = {};
  hash.split('&').forEach(function(pair) {
    var eqIdx = pair.indexOf('=');
    if (eqIdx > 0) params[sanitizeParam(pair.slice(0, eqIdx))] = decodeURIComponent(pair.slice(eqIdx + 1));
  });

  if (params.year) {
    var y = parseInt(params.year);
    if (y >= MIN_YEAR && y <= MAX_YEAR) {
      currentYear = y;
      document.getElementById('year-slider').value = y;
      document.getElementById('timeline-year').textContent = y;
    }
  }

  if (params.q) {
    searchQuery = params.q;
    searchQueryLower = searchQuery.toLowerCase();
    document.getElementById('search').value = searchQuery;
  }

  if (params.types) {
    activeTypes = new Set(params.types.split(',').filter(function(t) { return TYPE_COLORS[t]; }));
    document.querySelectorAll('#type-filters input').forEach(function(cb) {
      cb.checked = activeTypes.has(cb.dataset.type);
    });
  }

  if (params.clusters) {
    activeClusters = new Set(params.clusters.split(',').filter(function(c) { return CLUSTER_COLORS[c]; }));
    document.querySelectorAll('#cluster-filters input').forEach(function(cb) {
      cb.checked = activeClusters.has(cb.dataset.cluster);
    });
  }

  updateGraph();
}

// ============================================================
// INTRO ANIMATION
// ============================================================
function runIntro() {
  var intro = document.getElementById('intro');
  if (!intro) { startApp(); return; }

  var skyline = document.getElementById('intro-skyline');
  var companiesEl = document.getElementById('intro-companies');

  // Generate buildings (like the SV show skyline)
  var buildingCount = Math.floor(window.innerWidth / 14);
  for (var i = 0; i < buildingCount; i++) {
    var b = document.createElement('div');
    b.className = 'building';
    var w = 4 + Math.floor(Math.random() * 16);
    var h = 30 + Math.floor(Math.random() * 250);
    // Taller in center, shorter at edges
    var centerFactor = 1 - Math.abs(i - buildingCount / 2) / (buildingCount / 2);
    h = Math.floor(h * (0.3 + centerFactor * 0.7));
    b.style.width = w + 'px';
    b.style.height = h + 'px';
    b.style.animationDelay = (0.05 + Math.random() * 0.6) + 's';
    if (Math.random() > 0.6) b.classList.add('lit');
    skyline.appendChild(b);
  }

  // Float company names (like logos on buildings in the show)
  var featured = [
    { name: 'GOOGLE', color: '#8b6cc1' },
    { name: 'APPLE', color: '#cf6a7a' },
    { name: 'MICROSOFT', color: '#5a9fcf' },
    { name: 'OPENAI', color: '#8b6cc1' },
    { name: 'META', color: '#c75a8a' },
    { name: 'NVIDIA', color: '#c98a4b' },
    { name: 'AMAZON', color: '#5a9fcf' },
    { name: 'TESLA', color: '#b8a340' },
    { name: 'ANTHROPIC', color: '#8b6cc1' },
    { name: 'STRIPE', color: '#7aab5a' },
    { name: 'ORACLE', color: '#5aab96' },
    { name: 'NETFLIX', color: '#cf6a7a' },
    { name: 'CURSOR', color: '#8b6cc1' },
    { name: 'SPACEX', color: '#b8a340' },
    { name: 'TIKTOK', color: '#c75a8a' },
    { name: 'SALESFORCE', color: '#5aab96' },
    { name: 'DEEPMIND', color: '#8b6cc1' },
    { name: 'UBER', color: '#b8a340' },
    { name: 'AIRBNB', color: '#cf6a7a' },
    { name: 'AMD', color: '#c98a4b' },
    { name: 'TSMC', color: '#c98a4b' },
    { name: 'PALANTIR', color: '#5aab96' },
    { name: 'DISCORD', color: '#c75a8a' },
    { name: 'FIGMA', color: '#5aab96' },
    { name: 'BAIDU', color: '#8b6cc1' }
  ];

  featured.forEach(function(c, i) {
    var nameEl = document.createElement('div');
    nameEl.className = 'intro-company';
    nameEl.textContent = c.name;
    nameEl.style.color = c.color;
    nameEl.style.left = (5 + Math.random() * 85) + '%';
    nameEl.style.top = (15 + Math.random() * 55) + '%';
    nameEl.style.animationDelay = (0.3 + i * 0.09) + 's';
    nameEl.style.fontSize = (9 + Math.floor(Math.random() * 6)) + 'px';
    companiesEl.appendChild(nameEl);
  });

  // After animation, transition to the app
  setTimeout(function() {
    intro.classList.add('fade-out');
    var app = document.getElementById('app');
    app.style.transition = 'opacity 0.6s ease';
    app.style.opacity = '1';
    startApp();
    setTimeout(function() {
      intro.remove();
    }, 1000);
  }, 3000);
}

function startApp() {
  init();
}

// ============================================================
// START
// ============================================================
document.addEventListener('DOMContentLoaded', runIntro);
