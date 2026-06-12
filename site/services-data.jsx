// Shared services list — single source of truth for the homepage teaser
// (home.jsx) and the full Services page (services.jsx).
// `title` and `desc` are rendered on both pages; `tags` and `out` are
// only used by the detailed Services page.

const SERVICES = [
  {
    id: 'strategy', n: '01',
    title: 'Product Strategy',
    desc: 'Roadmap design, monetization architecture, and platform vision tied to revenue outcomes you can measure.',
    tags: ['Roadmaps', 'Monetization', 'Platform vision', 'OKRs', 'Investment cases'],
    out: ['12-month roadmap with sequenced bets', 'Objective tree mapped to revenue', 'Quarterly review cadence', 'Hiring plan to back the plan'],
  },
  {
    id: 'system', n: '02',
    title: 'System Design',
    desc: 'Ad serving, auction, targeting, measurement — designed to scale and survive the next three platform shifts.',
    tags: ['Auction', 'Targeting', 'Serving', 'Measurement', 'Privacy'],
    out: ['System reference architecture', 'Capacity & cost models', 'Migration playbook', 'Latency & reliability budgets'],
  },
  {
    id: 'engineering', n: '03',
    title: 'Engineering',
    desc: 'Implementation partners. Prototype to production. We write code, ship features, and stay accountable.',
    tags: ['Prototyping', 'Production hardening', 'Code review', 'Tech leadership'],
    out: ['Working production systems', 'Test & deploy harness', 'Operational runbooks', 'Knowledge transfer to your team'],
  },
  {
    id: 'data', n: '04',
    title: 'Data Science',
    desc: 'Auction design, predictive modeling, and rigorous experimentation — the part most teams underinvest in.',
    tags: ['Ranking', 'Pacing', 'Attribution', 'Causal inference', 'A/B'],
    out: ['Modeling pipelines', 'Experiment platform review', 'Attribution methodology', 'Inference & drift monitoring'],
  },
];
