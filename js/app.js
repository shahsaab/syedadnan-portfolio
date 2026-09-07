/**
 * SYED ADNAN AHMED — PORTFOLIO CLIENT LOGIC
 * Interactive Systems Map, Inspection Drawer, Project Matrix & Interactions
 */

// Architectural Nodes Data
const SYSTEM_NODES = [
  {
    id: "NODE_01_RTGS",
    domain: "fintech",
    domainLabel: "Financial Rails",
    title: "RTGS & PRI Settlement Engine",
    client: "Bank Alfalah / State Bank of Pakistan",
    period: "2015 – 2018",
    featured: true,
    infographic: "assets/images/rtgs-infographic.jpg",
    summary: "Central bank compliant Real-Time Gross Settlement platform processing billions in daily interbank transfers under strict SBP mandate. Integrated PRI remittance channel near go-live.",
    tags: ["ASP.NET", "MSSQL Server", "Windows Services", "SWIFT MT102/103", "SAF Queuing", "Real-Time"],
    metrics: {
      stat1: { val: "₨ Billions", lbl: "Daily Settlement Value" },
      stat2: { val: "1st Live", lbl: "In Pakistan Banking" },
      stat3: { val: "100%", lbl: "SBP Compliance Pass" }
    },
    diagram: `[ Branch Terminals (Nationwide) ]
               │
               ▼
[ Dynamic Amount/SWIFT Rules Engine ]
               │
               ▼
[ Dual Treasury Back-Office Approvals ]
               │
               ▼
[ High-Reliability Windows Service ]
       │                      │
       ▼                      ▼
[ SWIFT MT102/103 ]    [ Store-and-Forward (SAF) Queue ]
       │                      │
       ▼                      ▼
[ SBP PRISM Central Bank ] ◄─── (Guaranteed Delivery)
               │
               ▼
[ Real-Time Interbank Settlement Finality ]`,
    problem: `The State Bank of Pakistan issued a strict regulatory mandate: commercial banks must deploy RTGS for high-value interbank transfers. Unlike traditional batch systems, RTGS requires immediate transaction finality with zero undo capability. The State Bank PRISM interface was intolerant to communication lag, and any unhandled glitch risked catastrophic financial disruption.`,
    decision: `Architected a multi-tier solution: a branch initiation portal with dynamic threshold routing, a dual-approval treasury workflow, and a background Windows Service with a Store-and-Forward (SAF) queue that prevents silent failures. Concurrently developed custom real-time monitoring WinForms tools. When an erroneous ₨200,000,000 (200 Million PKR) transaction was routed during pilot, these custom tools flagged it immediately to Treasury for reversal before permanent settlement.`,
    impact: `Bank Alfalah became the first commercial bank in Pakistan to go live. The system passed SBP compliance audits under extreme scrutiny. A major competitor bank subsequently sought direct architectural consultation after struggling with their own implementation.`
  },
  {
    id: "NODE_02_ERA",
    domain: "healthcare",
    domainLabel: "Healthcare & Distributed",
    title: "ERA Distributed Commerce Platform",
    client: "Aga Khan University Hospital (AKU) / LattLiv",
    period: "2018 – Present",
    featured: true,
    infographic: "assets/images/era-infographic.jpg",
    summary: "High-resilience distributed retail and hospital pharmacy infrastructure engineered to defeat persistent network outages ('Lie-Fi'). Powering 40+ business locations across AKU.",
    tags: [".NET", "WinUI3", "MSSQL Distributed Sync", "WinForms", "Azure SQL Sync", "REST APIs"],
    metrics: {
      stat1: { val: "40+ Nodes", lbl: "AKU Hospital Locations" },
      stat2: { val: "24/7/365", lbl: "Zero Cash-Desk Outages" },
      stat3: { val: "70+ Peak", lbl: "Retail Clients Deployed" }
    },
    diagram: `[ Cloud Master Core (Azure / VMs) ]
  └── Primary MSSQL Master Database
             ▲
             │ [ Bi-Directional Custom Sync Service ]
             │ (Stored Procedures, Journal Queue, Conflict Logic)
             ▼
[ Edge Nodes: AKU Hospital Pharmacies & Clinics ]
  ├── Local MSSQL DB (Instant Microsecond Local Commit)
  ├── Windows Sync Background Daemon (Autonomous Reconnect)
  └── WinForms / WinUI3 Terminal (Operates 100% Offline When Needed)`,
    problem: `Deploying commerce software across emerging markets revealed a crippling flaw: persistent network dropouts and 'Lie-Fi' (where connections degrade into zombie states, breaking browser service workers). For 24/7 hospital pharmacies and lifestyle chains, even a two-minute register downtime creates unmanageable patient queues and lost revenue.`,
    decision: `Abandoned brittle browser caching. Engineered a distributed database topology: full local MSSQL instance on edge stations with stored procedure journal queues and an autonomous Windows synchronization daemon communicating with cloud master. Created 'ERA Lite' in WinForms for low-spec hardware, training a 10th-grade apprentice who delivered the core client code.`,
    impact: `Earned the trust of South Asia's premier healthcare institution: Aga Khan University Hospital. Today powers 40+ hospital pharmacies and business units 24/7, maintaining seamless operational continuity across internet outages.`
  },
  {
    id: "NODE_03_COLGATE",
    domain: "enterprise",
    domainLabel: "Enterprise FMCG",
    title: "Colgate-Palmolive PSP Visibility Platform",
    client: "Colgate-Palmolive Pakistan (Delivered by Turf)",
    period: "2024 – Present",
    featured: true,
    infographic: "assets/images/colgate-infographic.jpg",
    summary: "Nationwide Permanent Sales Promotion (PSP) and merchandiser tracking platform with polygon geofencing, real-time telemetry, and Okta corporate SSO integration. Live since Nov 2024.",
    tags: ["ASP.NET", "MSSQL", "Realtime GPS", "Geofencing", "Okta SSO", "Enterprise RBAC"],
    metrics: {
      stat1: { val: "Nationwide", lbl: "FMCG Field Deployment" },
      stat2: { val: "Real-Time", lbl: "Geofenced Verification" },
      stat3: { val: "Nov 2024", lbl: "Production Go-Live" }
    },
    diagram: `[ Field Merchandisers / Promoters ]
               │ (Mobile GPS Check-in)
               ▼
[ Geofencing Verification Engine ] ──> [ Tamper / Spoofing Filter ]
               │
               ▼
[ Enterprise ASP.NET Platform ] ◄─── [ Corporate Okta SSO ]
               │
               ▼
[ Real-Time Campaign Allocation & Audit Analytics ]`,
    problem: `Colgate-Palmolive runs nationwide merchandising campaigns across thousands of retail stores. Traditional reporting suffered from attendance falsification, ghost visits, delayed audit trails, and isolated user authentication systems.`,
    decision: `Built an enterprise-grade platform combining mobile field capture with strict polygon geofencing to mathematically verify physical presence before logging promotional audits. Integrated Colgate's corporate Okta SSO for automated identity federation and role-based access control.`,
    impact: `Scoping began in late 2023, development commenced in 2024, and the system achieved production go-live in November 2024. Delivers 100% auditable promotional compliance across Pakistan, continuously upgraded and maintained with real-time GPS polygon geofencing and corporate Okta SSO.`
  },
  {
    id: "NODE_04_AMAX",
    domain: "cloud",
    domainLabel: "Cloud & Serverless AI",
    title: "Serverless AI Insurance Claim Pipeline",
    client: "AMAX Insurance (USA)",
    period: "2023 – 2024",
    featured: true,
    infographic: "assets/images/amax-infographic.jpg",
    summary: "Automated automotive claims modernization leveraging AWS Lambda serverless orchestration, Amazon Rekognition for damage triage, and Amazon Textract for policy OCR.",
    tags: ["AWS Lambda", "Amazon Rekognition", "Amazon Textract", "EventBridge", "DynamoDB", "S3"],
    metrics: {
      stat1: { val: "<30 sec", lbl: "Claim Triage Speed" },
      stat2: { val: "Serverless", lbl: "Zero Server Management" },
      stat3: { val: "100% AWS", lbl: "Cloud-Native Pipeline" }
    },
    diagram: `[ Customer Incident Upload (Photos + Documents) ]
                     │
                     ▼
             [ Amazon S3 Bucket ]
                     │ (S3 ObjectCreated Event)
                     ▼
          [ AWS Lambda Orchestrator ]
          ┌──────────┴──────────┐
          ▼                     ▼
[ Amazon Rekognition ]  [ Amazon Textract ]
(Body Damage Models)    (Police & Claim OCR)
          └──────────┬──────────┘
                     ▼
        [ AWS EventBridge Rules ]
    ┌────────────────┼────────────────┐
    ▼                ▼                ▼
[ Fast-Track ] [ Fraud Flag ] [ Senior Adjuster ]`,
    problem: `Manual triage of auto insurance claims involved adjusters cross-referencing vehicular damage photographs with multi-page police documents, resulting in multi-day claim latency and high operational costs.`,
    decision: `Architected a high-throughput event-driven pipeline on AWS. File uploads into S3 trigger decoupled Lambda microservices running computer vision inspection (Rekognition) alongside OCR extraction (Textract). EventBridge rules route claims automatically into fast-track settlement or human investigator workflows.`,
    impact: `Dramatically reduced triage latency from 48+ hours to under 30 seconds, improving settlement velocity and fraud detection accuracy.`
  },
  {
    id: "NODE_05_ROLLUP",
    domain: "products",
    domainLabel: "SaaS Product",
    title: "RollUp — Modern Micro-SaaS",
    client: "Personal Project (US Market)",
    period: "2026 – Present",
    featured: false,
    summary: "High-performance productivity and data aggregation micro-SaaS built for modern knowledge teams. Launched recently in 2026, tapping the US market.",
    tags: ["Next.js", "Edge Computing", "Supabase", "Stripe API", "Tailwind CSS"],
    metrics: {
      stat1: { val: "Live", lbl: "rollup.eraconnect.net" },
      stat2: { val: "<50ms", lbl: "Edge API Latency" },
      stat3: { val: "2026", lbl: "US Market Launch" }
    },
    diagram: `[ Web Client / Edge CDN ]
           │
           ▼
[ Next.js Server Actions & Edge Middleware ]
           │
     ┌─────┴─────┐
     ▼           ▼
[ Supabase DB ] [ Stripe Subscriptions ]
     │
     ▼
[ Instant Multi-Tenant Aggregation ]`,
    problem: `Knowledge teams waste countless hours manually consolidating reports, client metrics, and distributed operational spreadsheets across multiple siloed web tools.`,
    decision: `Designed a streamlined, edge-accelerated micro-SaaS with optimistic UI rendering, real-time PostgreSQL synchronization, and friction-free Stripe subscription onboarding.`,
    impact: `Successfully deployed live at rollup.eraconnect.net, actively acquiring users in the US market.`
  },
  {
    id: "NODE_06_FCMS",
    domain: "enterprise",
    domainLabel: "Academic Systems",
    title: "FCMS — Faculty & Course Management",
    client: "Axis Solutions (for Aptech)",
    period: "2014 – 2015",
    featured: false,
    summary: "Academic operations and course allocation engine built for Aptech, managing faculty scheduling, workload balancing, and multi-batch student records.",
    tags: ["C#", "WinForms", "MSSQL Server", "Stored Procedures", "Crystal Reports"],
    metrics: {
      stat1: { val: "Campus", lbl: "Academic Scale" },
      stat2: { val: "Zero Clash", lbl: "Automated Scheduling" },
      stat3: { val: "WinForms", lbl: "Desktop Engine" }
    },
    diagram: `[ Academic Coordinator Terminals ]
               │
               ▼
[ Faculty Scheduling & Workload Engine ]
               │
               ▼
[ Batch Course Allocation Controller ]
               │
               ▼
[ MSSQL Academic Database & Reports ]`,
    problem: `Managing multi-batch class allocations, teacher schedules, room capacities, and course prerequisites manually resulted in frequent timetable clashes and administrative delays.`,
    decision: `Engineered an automated conflict-detection and scheduling engine in C# WinForms with relational database constraints, parameterized stored procedures, and customized reporting.`,
    impact: `Successfully automated end-to-end academic scheduling and faculty workload management across Aptech education centers, eliminating timetable clashes.`
  },
  {
    id: "NODE_07_SECYOUR",
    domain: "products",
    domainLabel: "Cybersecurity",
    title: "SecYour — Cyber Hygiene Platform",
    client: "Proprietary Venture (Stealth)",
    period: "Architecture Phase",
    featured: false,
    summary: "Automated cybersecurity telemetry and vendor risk posture scoring system engineered for lightweight, friction-free continuous compliance.",
    tags: ["Cloud Native", "Agentless Scanners", "Graph Vulnerability DB", "Telemetry Engine"],
    metrics: {
      stat1: { val: "Stealth", lbl: "Architecture Phase" },
      stat2: { val: "Agentless", lbl: "Zero-Footprint Scan" },
      stat3: { val: "NIST/ISO", lbl: "Framework Mapped" }
    },
    diagram: `[ Public Attack Surface ] ──> [ Agentless Telemetry ]
                                     │
                                     ▼
                       [ Vulnerability Graph Engine ]
                                     │
                                     ▼
                    [ Hygiene Score & Threat Remediation ]`,
    problem: `SMBs and mid-market enterprises struggle with complex, expensive security suites and cannot continuously verify external security postures of their third-party supply chain.`,
    decision: `Architected an agentless, non-intrusive telemetry pipeline that evaluates external attack surfaces, DNS hygiene, SSL configs, and mail security to compute unified risk ratings.`,
    impact: `Founding architecture and threat matrix finalized; preparing for private alpha deployment.`
  },
  {
    id: "NODE_08_DEVOPS",
    domain: "cloud",
    domainLabel: "Cloud & DevOps",
    title: "Safety Grid DevOps & Cloud Automation",
    client: "Grid Safety (Australia) / Virtuosoft",
    period: "2021 – 2023",
    featured: false,
    summary: "Container orchestration, CI/CD pipeline modernization, and zero-downtime infrastructure for an Australian industrial safety IoT ecosystem.",
    tags: ["Docker", "Kubernetes", "AWS ECS", "GitHub Actions", "Terraform", "Linux"],
    metrics: {
      stat1: { val: "Zero Outage", lbl: "Blue/Green Deploys" },
      stat2: { val: "<8 min", lbl: "Automated Pipeline" },
      stat3: { val: "Australia", lbl: "Industrial IoT Client" }
    },
    diagram: `[ Code Push ] ──> [ GitHub Actions CI Pipeline ]
                               │
                               ▼
                   [ Docker Image Registry ]
                               │
                               ▼
                   [ AWS ECS Production Cluster ]
                               │
                               ▼
                 [ Blue/Green Traffic Cutover ]`,
    problem: `High-frequency IoT safety monitoring platform in Australia experienced deployment friction and manual configuration drift across cloud environments.`,
    decision: `Re-architected applications into immutable Docker containers with automated Terraform infrastructure-as-code and blue/green automated cutover pipelines.`,
    impact: `Achieved 100% automated continuous deployment with zero downtime during business hours and verified audit trail compliance.`
  }
];

// Career Project Inventory (Authentic 20 Projects Matrix)
const PROJECT_INVENTORY = [
  { id: "P20", name: "RollUp — Modern Micro-SaaS", client: "Personal Project (US Market)", year: "2026–Present", domain: "Micro-SaaS / Edge", role: "Founder & Architect", stack: "Next.js, Edge Runtime, Supabase, Stripe" },
  { id: "P19", name: "SecYour — Cyber Hygiene Platform", client: "Proprietary Venture (Stealth)", year: "Architecture Phase", domain: "Cybersecurity / SaaS", role: "Founder & Architect", stack: "Cloud Native, Agentless Telemetry, Graph DB" },
  { id: "P18", name: "Colgate-Palmolive PSP Visibility Platform", client: "Colgate-Palmolive Pakistan (Turf)", year: "2024–Present", domain: "Enterprise / FMCG", role: "Principal Solutions Architect", stack: "ASP.NET Core, MSSQL, GPS Geofencing, Okta SSO" },
  { id: "P17", name: "AMAX Insurance Serverless AI Claims", client: "AMAX Insurance (USA) / Virtuosoft", year: "2023–2024", domain: "Cloud & Serverless AI", role: "Solutions Architect", stack: "AWS Lambda, Rekognition, Textract, EventBridge, S3" },
  { id: "P16", name: "Grid Safety Industrial IoT DevOps", client: "Grid Safety (Australia) / Virtuosoft", year: "2021–2023", domain: "Cloud & DevOps", role: "Solutions Architect & DevOps Lead", stack: "Docker, AWS ECS, GitHub Actions, Linux" },
  { id: "P15", name: "SD Foods Supply Chain & Logistics", client: "SD Foods (France) / Virtuosoft", year: "2022", domain: "Supply Chain", role: "Solutions Architect", stack: ".NET Core, MSSQL, Resilient Sync" },
  { id: "P14", name: "Neogies Energy Management Platform", client: "Neogies (France) / Virtuosoft", year: "2022", domain: "Energy & Utility", role: "Solutions Architect", stack: ".NET, Cloud APIs, Dynamic Pricing Engine" },
  { id: "P13", name: "Colgate-Palmolive Gifts & POSM Management", client: "Colgate-Palmolive Pakistan (Turf)", year: "2022", domain: "Trade Marketing", role: "Solutions Architect", stack: "ASP.NET, MSSQL, Inventory Tracking Reports" },
  { id: "P12", name: "QMS (Campus Queue Management System)", client: "Bahria University", year: "2021", domain: "Campus Systems", role: "Solutions Architect", stack: "C#, WinForms, Socket Communications, MSSQL" },
  { id: "P11", name: "Demand-Based Replenishment (DBR)", client: "English Biscuits Manufacturers (EBM)", year: "2019–2020", domain: "FMCG / Supply Chain", role: "Solutions Architect (Consultant)", stack: "C#, ASP.NET, SAP BAPI/RFC, MSSQL" },
  { id: "P10", name: "ERA Lite POS & Retail Client", client: "Turf (Mentored Junior Developer)", year: "2019", domain: "Retail / POS", role: "Architect & Engineering Mentor", stack: "C#, WinForms, Local SQLite/MSSQL, Serial SDKs" },
  { id: "P09", name: "ERA Enterprise Healthcare & Distributed Platform", client: "Aga Khan University Hospital (AKU) & Turf", year: "2018–Present", domain: "Healthcare / Distributed", role: "Co-Founder & Chief Solutions Architect", stack: ".NET, WinUI3, MSSQL Distributed Sync, Azure SQL" },
  { id: "P08", name: "Distributor Claim Management System", client: "Engro Corporation", year: "2018–2019", domain: "FMCG / Finance", role: "Technical Lead (Consultant)", stack: "ASP.NET, MSSQL, Financial Stored Procedures" },
  { id: "P07", name: "Pakistan Remittance Initiative (PRI)", client: "Bank Alfalah / State Bank of Pakistan", year: "2017–2018", domain: "Banking / Remittance", role: "Software Engineer (.NET)", stack: "ASP.NET, SWIFT MT102/103, MSSQL" },
  { id: "P06", name: "Alfalah Payment Gateway", client: "Bank Alfalah", year: "2016–2018", domain: "Banking / Payments", role: "Software Engineer (.NET)", stack: "ASP.NET, Web Services, HSM Tokenization, Mastercard APIs" },
  { id: "P05", name: "Alfalah Orbit Loyalty & Rewards Platform", client: "Bank Alfalah (with Mastercard)", year: "2016–2018", domain: "Banking / Loyalty", role: "Software Engineer (.NET)", stack: "ASP.NET, REST APIs, Mastercard Loyalty Engine, SSO" },
  { id: "P04", name: "Real-Time Gross Settlement (RTGS)", client: "Bank Alfalah & State Bank of Pakistan", year: "2015–2018", domain: "Banking / Central Banking", role: "Software Engineer (.NET)", stack: "ASP.NET, MSSQL, Windows Services, Store-and-Forward (SAF)" },
  { id: "P03", name: "FCMS (Faculty & Course Management System)", client: "Aptech Learning Pakistan (via Axis Solutions)", year: "2014–2015", domain: "Education / Operations", role: "Software Engineer", stack: "C#, WinForms, MSSQL, Stored Procedures, Crystal Reports" },
  { id: "P02", name: "Technical Faculty & Software Trainer", client: "Aptech Computer Education", year: "2013–2014", domain: "Technical Education", role: "Faculty & Technical Trainer", stack: "C#, OOP, SQL Server, Software Architecture" },
  { id: "P01", name: "RMS (Retail Management System)", client: "Freelance (UK Client)", year: "2013", domain: "Retail Systems", role: "Freelance Software Developer", stack: "C# WinForms, MSSQL, Custom UI Engine" }
];

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderSystemsGrid();
  renderProjectMatrix(PROJECT_INVENTORY);
  initSystemsMapFilters();
  initSearch();
  initInspectionDrawer();
  initCircuitCanvas();
  initContactActions();
  initMobileNav();
  initNavDropdown();
  initInfographicLightbox();
  initScrollSpy();
});

// Render the Systems Map Node Cards
function renderSystemsGrid(filterDomain = "all", searchQuery = "") {
  const grid = document.getElementById("nodes-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtered = SYSTEM_NODES.filter(node => {
    const matchesDomain = filterDomain === "all" || node.domain === filterDomain;
    const matchesSearch = !searchQuery || 
      node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      node.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      node.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--text-muted);">
        <p class="mono" style="font-size: 14px;">// NO_NODES_FOUND matching current criteria</p>
        <button class="btn btn-secondary btn-sm" style="margin-top: 16px;" onclick="resetFilters()">Reset Filter Criteria</button>
      </div>
    `;
    return;
  }

  filtered.forEach(node => {
    const card = document.createElement("div");
    card.className = `node-card domain-${node.domain} ${node.featured ? 'featured-node' : ''}`;
    card.dataset.id = node.id;
    card.onclick = () => openInspectionDrawer(node.id);

    const tagsHtml = node.tags.slice(0, 4).map(tag => `<span class="tech-tag">${tag}</span>`).join("");

    card.innerHTML = `
      <div class="node-header">
        <span class="node-id">${node.id}</span>
        <span class="node-domain-badge">${node.domainLabel}</span>
      </div>
      <h3 class="node-title">${node.title}</h3>
      <div class="node-client">
        <span class="client-tag">${node.client}</span>
      </div>
      <p class="node-summary">${node.summary}</p>
      <div class="node-tags">
        ${tagsHtml}
      </div>
      <div class="node-footer">
        <span class="node-period">${node.period}</span>
        <span class="node-inspect-cta">Inspect Spec →</span>
      </div>
    `;

    grid.appendChild(card);
  });

  // Update status metrics
  const activeCountEl = document.getElementById("active-node-count");
  if (activeCountEl) activeCountEl.textContent = `${filtered.length} / ${SYSTEM_NODES.length} Subsystems`;
}

// Render Project Inventory Matrix
function renderProjectMatrix(projects) {
  const tbody = document.getElementById("matrix-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";

  projects.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="mono" style="color: var(--enterprise); font-weight: 700;">${p.id}</td>
      <td>
        <div class="matrix-project-title">${p.name}</div>
        <div class="matrix-client">${p.client}</div>
      </td>
      <td class="mono">${p.year}</td>
      <td><span class="tech-tag" style="background: rgba(255,255,255,0.04);">${p.domain}</span></td>
      <td>${p.role}</td>
      <td class="mono" style="font-size: 12px; color: var(--text-muted);">${p.stack}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Filter Systems Map Nodes
function initSystemsMapFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const domain = btn.dataset.domain || "all";
      const searchInput = document.getElementById("node-search");
      const query = searchInput ? searchInput.value.trim() : "";
      renderSystemsGrid(domain, query);
    });
  });
}

// Search across Systems Nodes and Matrix
function initSearch() {
  const searchInput = document.getElementById("node-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeBtn = document.querySelector(".filter-btn.active");
      const domain = activeBtn ? (activeBtn.dataset.domain || "all") : "all";
      renderSystemsGrid(domain, e.target.value.trim());
    });
  }

  const matrixSearch = document.getElementById("matrix-search");
  if (matrixSearch) {
    matrixSearch.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = PROJECT_INVENTORY.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.domain.toLowerCase().includes(q) ||
        p.stack.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q)
      );
      renderProjectMatrix(filtered);
    });
  }
}

function resetFilters() {
  const allBtn = document.querySelector('.filter-btn[data-domain="all"]');
  if (allBtn) allBtn.click();
  const searchInput = document.getElementById("node-search");
  if (searchInput) searchInput.value = "";
  renderSystemsGrid("all", "");
}

// Inspection Drawer / Modal Logic
function initInspectionDrawer() {
  const backdrop = document.getElementById("inspection-modal");
  const closeBtn = document.getElementById("drawer-close-btn");
  if (closeBtn && backdrop) {
    closeBtn.addEventListener("click", () => {
      backdrop.classList.remove("active");
    });
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) backdrop.classList.remove("active");
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && backdrop && backdrop.classList.contains("active")) {
      backdrop.classList.remove("active");
    }
  });
}

function openInspectionDrawer(nodeId) {
  const node = SYSTEM_NODES.find(n => n.id === nodeId);
  if (!node) return;

  const backdrop = document.getElementById("inspection-modal");
  const content = document.getElementById("drawer-body-content");
  if (!backdrop || !content) return;

  content.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
      <span class="mono" style="font-size: 12px; color: var(--enterprise); font-weight: 700;">${node.id}</span>
      <span class="node-domain-badge" style="border: 1px solid var(--border-medium);">${node.domainLabel}</span>
      <span class="mono" style="font-size: 12px; color: var(--text-muted); margin-left: auto;">${node.period}</span>
    </div>
    
    <h2 style="font-size: 26px; margin-bottom: 4px;">${node.title}</h2>
    <div style="font-size: 14px; color: var(--enterprise); font-weight: 600; margin-bottom: 24px;">
      Client / Scope: ${node.client}
    </div>

    <!-- Quick Stats -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 24px;">
      <div class="metric-mini">
        <div class="metric-mini-val" style="font-size: 17px; color: var(--enterprise);">${node.metrics.stat1.val}</div>
        <div class="metric-mini-lbl">${node.metrics.stat1.lbl}</div>
      </div>
      <div class="metric-mini">
        <div class="metric-mini-val" style="font-size: 17px; color: var(--enterprise);">${node.metrics.stat2.val}</div>
        <div class="metric-mini-lbl">${node.metrics.stat2.lbl}</div>
      </div>
      <div class="metric-mini">
        <div class="metric-mini-val" style="font-size: 17px; color: var(--enterprise);">${node.metrics.stat3.val}</div>
        <div class="metric-mini-lbl">${node.metrics.stat3.lbl}</div>
      </div>
    </div>

    <!-- Architecture Topology -->
    <div>
      <div class="case-section-heading">
        <span>⬡ Architecture Topology & Dataflow</span>
      </div>
      ${node.infographic ? `
        <div class="case-study-infographic-card" style="margin-bottom: 14px;">
          <div class="infographic-top-bar">
            <span class="infographic-tag">⬡ ARCHITECTURAL BLUEPRINT</span>
            <span class="expand-hint mono">CLICK TO EXPAND 🔍</span>
          </div>
          <a href="${node.infographic}" class="infographic-img-link" onclick="openInfographicLightbox('${node.infographic}', '${escapeHtml(node.title)} Infographic'); return false;">
            <img src="${node.infographic}" alt="${escapeHtml(node.title)} Infographic" class="case-study-infographic-img" loading="lazy" />
            <div class="infographic-hover-overlay">
              <span>🔍 Expand Blueprint</span>
            </div>
          </a>
        </div>
      ` : ''}
      <details class="arch-spec-details" ${node.infographic ? '' : 'open'} style="margin-bottom: 18px;">
        <summary class="mono" style="font-size: 12px; color: var(--text-muted); cursor: pointer; padding: 4px 0; user-select: none;">
          <span>${node.infographic ? '▸ View Raw ASCII Dataflow Topology' : '▾ Architecture Dataflow Diagram'}</span>
        </summary>
        <div class="arch-diagram-box" style="margin-top: 8px;">${escapeHtml(node.diagram)}</div>
      </details>
    </div>

    <!-- Problem & Context -->
    <div class="case-box">
      <div class="case-section-heading" style="color: #f87171;">
        <span>⚠ Critical Engineering Problem & Constraints</span>
      </div>
      <p style="font-size: 14px; line-height: 1.6;">${node.problem}</p>
    </div>

    <!-- Architectural Decision -->
    <div class="case-box crucible">
      <div class="case-section-heading" style="color: #fbbf24;">
        <span>⚡ Architectural Decision & Fail-Safe Strategy</span>
      </div>
      <p style="font-size: 14px; line-height: 1.6;">${node.decision}</p>
    </div>

    <!-- Production Impact -->
    <div class="case-box impact">
      <div class="case-section-heading" style="color: #34d399;">
        <span>✓ Production Impact & Regulatory Verification</span>
      </div>
      <p style="font-size: 14px; line-height: 1.6;">${node.impact}</p>
    </div>

    <!-- Technology Stack Specification -->
    <div>
      <div class="case-section-heading">
        <span>⚙ Technology Specifications</span>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${node.tags.map(t => `<span class="tech-tag" style="padding: 4px 10px; font-size: 12px; background: rgba(56, 189, 248, 0.08); color: #bae6fd; border-color: rgba(56, 189, 248, 0.2);">${t}</span>`).join("")}
      </div>
    </div>

    <div style="margin-top: 16px; padding-top: 20px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
      <span class="mono" style="font-size: 12px; color: var(--text-muted);">Verified Production Deployment</span>
      <a href="cv.html" target="_blank" class="btn btn-outline btn-sm">View in Full CV →</a>
    </div>
  `;

  backdrop.classList.add("active");
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Background Circuit Canvas (Subtle Interactive Pulse)
function initCircuitCanvas() {
  const canvas = document.getElementById("circuit-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Subtle ambient particle tracks
  const tracks = [];
  for (let i = 0; i < 15; i++) {
    tracks.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      color: i % 3 === 0 ? "rgba(56, 189, 248, 0.25)" : "rgba(168, 85, 247, 0.2)"
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw subtle grid points
    tracks.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
}

// Contact Actions & Copy to Clipboard
function initContactActions() {
  const copyElements = document.querySelectorAll("[data-copy]");
  copyElements.forEach(el => {
    el.addEventListener("click", () => {
      const text = el.dataset.copy;
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied to clipboard: ${text}`);
      }).catch(() => {
        showToast(text);
      });
    });
  });
}

function showToast(msg) {
  let toast = document.getElementById("toast-msg");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-msg";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Mobile Nav Menu
function initMobileNav() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("mobile-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
    const links = nav.querySelectorAll(".mobile-nav-link");
    links.forEach(l => {
      l.addEventListener("click", () => nav.classList.remove("open"));
    });
  }
}

// Architecture Index Dropdown Logic
function initNavDropdown() {
  const trigger = document.getElementById("nav-dropdown-trigger");
  const menu = document.getElementById("nav-dropdown-menu");
  if (!trigger || !menu) return;

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.contains("open");
    menu.classList.toggle("open", !isOpen);
    trigger.classList.toggle("active", !isOpen);
    trigger.setAttribute("aria-expanded", String(!isOpen));
  });

  // Close when clicking an item
  menu.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", () => {
      menu.classList.remove("open");
      trigger.classList.remove("active");
      trigger.setAttribute("aria-expanded", "false");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!trigger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("open");
      trigger.classList.remove("active");
      trigger.setAttribute("aria-expanded", "false");
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      menu.classList.remove("open");
      trigger.classList.remove("active");
      trigger.setAttribute("aria-expanded", "false");
    }
  });
}

// Scroll Spy for Nav Header & Floating Timeline Dock
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const dockLinks = document.querySelectorAll(".dock-link");
  const timelineDock = document.getElementById("timeline-dock");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 120;

    // Show/hide floating timeline dock after passing hero
    if (timelineDock) {
      if (window.scrollY > 350) {
        timelineDock.classList.add("visible");
      } else {
        timelineDock.classList.remove("visible");
      }
    }

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute("id");
      }
    });

    dockLinks.forEach(link => {
      link.classList.remove("active");
      if (link.dataset.section === current || link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Infographic Lightbox Handlers
function initInfographicLightbox() {
  const lightbox = document.getElementById("infographic-lightbox");
  const closeBtn = document.getElementById("lightbox-close-btn");
  if (!lightbox) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => closeInfographicLightbox());
  }

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeInfographicLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeInfographicLightbox();
    }
  });
}

function openInfographicLightbox(imgSrc, title) {
  const lightbox = document.getElementById("infographic-lightbox");
  const img = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const rawLink = document.getElementById("lightbox-raw-link");
  if (!lightbox || !img) return;

  img.src = imgSrc;
  if (titleEl) titleEl.textContent = title || "Architecture Infographic";
  if (rawLink) rawLink.href = imgSrc;

  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeInfographicLightbox() {
  const lightbox = document.getElementById("infographic-lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
}
