import { Award, ArrowUpRight } from 'lucide-react';
import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'aura-hospitality',
    client: 'Aura Luxury Hotel Group',
    industry: 'Hospitality & Dining',
    title: 'Transforming In-Person Guest Experience with NFC & Dynamic QR Portals',
    challenge:
      'Despite premium guest satisfaction, less than 2% of guests took the friction-heavy steps to write reviews on Google and TripAdvisor.',
    solution:
      'Engineered custom-engraved brushed aluminum NFC cards and dynamic tabletop QR stands linked to a real-time sentiment analytics gateway with automated Google Review prompts.',
    results: [
      { metric: '+380%', label: 'Increase in 5-Star Reviews' },
      { metric: '4.94 ★', label: 'Average CSAT Rating' },
      { metric: '< 45s', label: 'Escalation Response Time' },
    ],
    tags: ['NFC & QR Systems', 'Dynamic Edge Routing', 'Sentiment AI'],
  },
  {
    id: 'synthetix-fintech',
    client: 'Synthetix Capital',
    industry: 'FinTech & Asset Management',
    title: '3D WebGL Web Architecture Driving $42M in Enterprise Pipeline',
    challenge:
      'Outdated static corporate website failed to communicate institutional-grade security and advanced algorithmic trading features to tier-1 hedge funds.',
    solution:
      'Architected an ultra-fast Three.js/ThreeUI WebGL experience with reactive interactive financial telemetry, sub-second page loads, and programmatic SEO content clusters.',
    results: [
      { metric: '+64%', label: 'Qualified Demo Conversion' },
      { metric: '0.42s', label: 'Global LCP Speed' },
      { metric: '100/100', label: 'Lighthouse Performance' },
    ],
    tags: ['Website Design & Dev', 'ThreeUI WebGL', 'SEO / Digital Growth'],
  },
  {
    id: 'logicore-supply',
    client: 'LogiCore Logistics Global',
    industry: 'Supply Chain & Enterprise Operations',
    title: 'Autonomous Multi-Agent AI Automations Saving 1,800 Hours/Month',
    challenge:
      '14 full-time operators manually cross-referenced freight bills, customs documents, and dispatch manifests across legacy ERP systems.',
    solution:
      'Designed and deployed an end-to-end multi-modal AI agent pipeline utilizing Claude 3.7 & GPT-4o vision to auto-extract, validate, reconcile, and synchronize ERP manifests.',
    results: [
      { metric: '1,800 hrs', label: 'Monthly Labor Reclaimed' },
      { metric: '$410,000', label: 'Annual Overhead Saved' },
      { metric: '99.7%', label: 'Data Accuracy Rate' },
    ],
    tags: ['AI / Business Automation', 'Digital Consulting', 'Multi-Agent LLMs'],
  },
];

export const CaseStudiesSection = () => {
  return (
    <section
      id="case-studies"
      style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            marginBottom: '16px',
          }}
        >
          <Award size={14} color="#10b981" />
          <span
            style={{
              fontSize: '0.78rem',
              color: '#10b981',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            Proven Track Record
          </span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '18px',
          }}
        >
          Real Client Outcomes & <span className="gradient-text-purple">Enterprise Impact</span>
        </h2>
        <p
          style={{
            color: '#94a3b8',
            fontSize: '1.08rem',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          We build mission-critical technology that generates compounding value for our partners.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '28px',
        }}
      >
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="glass-panel"
            style={{
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'rgba(12, 16, 26, 0.8)',
              position: 'relative',
            }}
          >
            <div>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#00f0ff', fontWeight: 600 }}>
                    {study.industry.toUpperCase()}
                  </span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', marginTop: '2px' }}>
                    {study.client}
                  </div>
                </div>

                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArrowUpRight size={18} color="#00f0ff" />
                </div>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.4, marginBottom: '16px' }}>
                {study.title}
              </h3>

              <div style={{ marginBottom: '14px' }}>
                <span style={{ fontSize: '0.76rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
                  Challenge:
                </span>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5, marginTop: '2px' }}>
                  {study.challenge}
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '0.76rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
                  Engineering Solution:
                </span>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5, marginTop: '2px' }}>
                  {study.solution}
                </p>
              </div>
            </div>

            <div>
              {/* Metrics Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  marginBottom: '20px',
                }}
              >
                {study.results.map((res, rIdx) => (
                  <div key={rIdx}>
                    <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#00f0ff', fontFamily: 'Outfit, sans-serif' }}>
                      {res.metric}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px', lineHeight: 1.3 }}>
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#a855f7',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
