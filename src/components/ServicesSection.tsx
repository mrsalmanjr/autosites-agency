import { useState } from 'react';
import { 
  Globe, 
  Cpu, 
  Nfc, 
  Compass, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Layers, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import type { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'web-design-dev',
    title: 'Website Design & Development',
    tagline: 'Immersive 3D, High-Velocity Architecture & Flawless UX',
    description:
      'We craft bespoke web experiences that merge sculptural 3D visuals, micro-interactions, and lightning-fast edge performance. Built to captivate users and convert high-ticket leads.',
    iconName: 'Globe',
    badge: 'Flagship Craft',
    color: '#00f0ff',
    gradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(14, 165, 233, 0.05) 100%)',
    deliverables: [
      'Interactive 3D WebGL / Three.js animations & shader styling',
      'Headless Next.js / Vite / React modern component architecture',
      'Design systems & UI/UX wireframes tailored to your brand identity',
      '100/100 Core Web Vitals, ultra-low latency & responsive layout',
      'Custom CMS integrations (Sanity, Strapi, Contentful)',
    ],
    techStack: ['React 19', 'Three.js / ThreeUI', 'TypeScript', 'Tailwind/CSS3', 'Next.js', 'Vite', 'WebGL'],
    metrics: { label: 'Lighthouse Performance Score', value: '99+' },
    architectureOverview:
      'Our web architecture utilizes micro-frontends with edge-side rendering and asset pre-caching. WebGL shaders are compiled asynchronously to prevent frame drops, while responsive vector layouts ensure flawless fidelity on mobile, desktop, and 4K displays.',
  },
  {
    id: 'ai-automation',
    title: 'AI / Business Automation',
    tagline: 'Autonomous AI Agents, Workflow Pipelines & Intelligent Data Loops',
    description:
      'Eliminate manual operational bottlenecks. We engineer autonomous AI agents, multi-modal LLM pipelines, and automated CRM integrations that work 24/7 without fatigue.',
    iconName: 'Cpu',
    badge: 'High Impact',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(99, 102, 241, 0.05) 100%)',
    deliverables: [
      'Multi-agent autonomous workflows (LangChain, n8n, custom python SDKs)',
      'Enterprise LLM fine-tuning & domain-specific RAG knowledge bases',
      'Automated CRM, invoice, email, and customer support triage bots',
      'Predictive analytics & intelligent anomaly detection systems',
      'ERP / accounting pipeline synchronizations (Salesforce, HubSpot, Zapier)',
    ],
    techStack: ['Claude 3.7 / GPT-4o', 'LangChain', 'n8n', 'Python', 'FastAPI', 'Pinecone / Vector DB', 'PostgreSQL'],
    metrics: { label: 'Operational Time Saved', value: '75%' },
    architectureOverview:
      'Event-driven asynchronous message queues trigger specialized autonomous agents. Each agent performs validation, retrieval-augmented verification against private enterprise knowledge, updates CRM records, and generates natural responses with human-in-the-loop safeguards.',
  },
  {
    id: 'nfc-qr-feedback',
    title: 'NFC & QR Feedback Systems',
    tagline: 'Contactless Physical-to-Digital Sentiment & Instant Review Boosters',
    description:
      'Bridge the physical customer experience with instant digital reviews. Custom branded NFC cards, tabletop smart discs, and dynamic QR portals that turn in-person visits into 5-star testimonials.',
    iconName: 'Nfc',
    badge: 'Proprietary Hardware + SaaS',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.05) 100%)',
    deliverables: [
      'Custom engraved smart NFC review cards & acrylic counter displays',
      'Dynamic QR codes with geo-fencing and deep-link routing',
      'Live customer feedback telemetry dashboard with sentiment analysis',
      'Automated negative-feedback resolution routing (alerts managers in <60s)',
      'Direct routing to Google Reviews, Trustpilot, TripAdvisor & Yelp',
    ],
    techStack: ['NTAG213/215 NFC Chips', 'Dynamic QR Engine', 'Real-time WebSockets', 'Sentiment AI', 'Geolocation APIs'],
    metrics: { label: 'Increase in 5-Star Reviews', value: '+340%' },
    architectureOverview:
      'When an NFC chip is tapped or dynamic QR is scanned, our edge gateway routes the user based on location, device, and past interaction history. Satisfied customers are directly funneled to public review portals, while critical remarks trigger instant manager SMS alerts.',
  },
  {
    id: 'digital-consulting',
    title: 'Digital Consulting',
    tagline: 'Strategic Technology Roadmaps, Cloud Audits & Modernization',
    description:
      'Unbiased senior technical leadership for executives navigating technological change. We evaluate your tech stack, mitigate technical debt, and build scalable roadmaps that accelerate growth.',
    iconName: 'Compass',
    badge: 'Executive Advisory',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.05) 100%)',
    deliverables: [
      'Comprehensive codebase & cloud infrastructure architectural audits',
      'Cost optimization across AWS, GCP, and SaaS subscription sprawl',
      'AI readiness assessments & implementation feasibility blueprints',
      'DevOps, CI/CD pipeline automation & cybersecurity hardening',
      'Fractional CTO & technical advisory sessions for leadership teams',
    ],
    techStack: ['AWS / GCP / Cloudflare', 'Docker & Kubernetes', 'Terraform', 'SOC2 / GDPR Standards', 'Zero Trust'],
    metrics: { label: 'Cloud Infrastructure Savings', value: '38%' },
    architectureOverview:
      'A structured 4-phase audit methodology: Discovery, Deep-Dive Telemetry Analysis, Gap Identification, and Phased Roadmap Delivery. We benchmark your infrastructure against modern industry standards and deliver actionable, prioritized implementation roadmaps.',
  },
  {
    id: 'seo-growth',
    title: 'SEO / Digital Growth Services',
    tagline: 'Algorithmic Search Dominance, Programmatic SEO & CRO Engines',
    description:
      'Organic traffic that translates directly into revenue. We engineer programmatic SEO architectures, optimize search entity graphs, and conduct rigorous conversion rate experiments.',
    iconName: 'TrendingUp',
    badge: 'Growth Engine',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(190, 24, 93, 0.05) 100%)',
    deliverables: [
      'Technical SEO audits, semantic schema graphs & crawl budget optimization',
      'Programmatic SEO landing page generators for long-tail search intent',
      'High-intent content strategy aligned with LLM search & Google AI Overviews',
      'Conversion Rate Optimization (CRO) with multivariate A/B testing',
      'Full-funnel attribution analytics & automated performance reporting',
    ],
    techStack: ['Google Search Console API', 'Next.js Programmatic Pages', 'Schema.org JSON-LD', 'PostHog', 'A/B Testing Tools'],
    metrics: { label: 'Avg Qualified Organic Traffic Growth', value: '+215%' },
    architectureOverview:
      'We build programmatic indexing pipelines that generate thousands of unique, search-intent-matched landing pages backed by semantic entity schemas. Continual user telemetry analysis feeds multivariate testing loops that incrementally lift checkout conversion rates.',
  },
];

export const ServicesSection = ({ onSelectService }: ServicesSectionProps) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Globe': return <Globe size={28} color={color} />;
      case 'Cpu': return <Cpu size={28} color={color} />;
      case 'Nfc': return <Nfc size={28} color={color} />;
      case 'Compass': return <Compass size={28} color={color} />;
      case 'TrendingUp': return <TrendingUp size={28} color={color} />;
      default: return <Sparkles size={28} color={color} />;
    }
  };

  return (
    <section
      id="services"
      style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(0, 240, 255, 0.06)',
            border: '1px solid rgba(0, 240, 255, 0.2)',
            marginBottom: '16px',
          }}
        >
          <Layers size={14} color="#00f0ff" />
          <span
            style={{
              fontSize: '0.78rem',
              color: '#00f0ff',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            End-To-End Modern Technology Solutions
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
          Engineered for <span className="gradient-text-cyan">Speed</span>,{' '}
          <span className="gradient-text-purple">Automation</span> & Measurable Growth
        </h2>
        <p
          style={{
            color: '#94a3b8',
            fontSize: '1.1rem',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          From cutting-edge WebGL web applications to autonomous AI workflows and physical NFC review systems,
          we provide the complete technology ecosystem to scale your enterprise.
        </p>
      </div>

      {/* Services Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
        }}
      >
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className="glass-panel"
            style={{
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              background: 'rgba(12, 16, 28, 0.8)',
            }}
          >
            {/* Top decorative gradient glow */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: service.color,
                boxShadow: `0 0 15px ${service.color}`,
              }}
            />

            <div>
              {/* Header row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '22px',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: service.gradient,
                    border: `1px solid ${service.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 0 20px ${service.color}20`,
                  }}
                >
                  {getIcon(service.iconName, service.color)}
                </div>

                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: service.color,
                    fontWeight: 600,
                  }}
                >
                  {service.badge}
                </span>
              </div>

              {/* Title & Tagline */}
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'JetBrains Mono, monospace', marginBottom: '4px' }}>
                0{index + 1} // CAPABILITY
              </div>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  color: '#f8fafc',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: '0.94rem',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                }}
              >
                {service.description}
              </p>

              {/* Deliverable Highlights */}
              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#cbd5e1',
                    fontWeight: 600,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Key Deliverables</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {service.deliverables.slice(0, 3).map((item, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.88rem',
                        color: '#cbd5e1',
                        lineHeight: 1.4,
                      }}
                    >
                      <CheckCircle2 size={16} color={service.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                {service.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      color: '#94a3b8',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Row */}
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                paddingTop: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block', textTransform: 'uppercase' }}>
                  {service.metrics.label}
                </span>
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: service.color,
                    fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  {service.metrics.value}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setActiveModalService(service)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#f8fafc',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    padding: '8px 14px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = service.color;
                    e.currentTarget.style.color = service.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.color = '#f8fafc';
                  }}
                >
                  <span>Deep Dive</span>
                  <ExternalLink size={13} />
                </button>

                <button
                  onClick={() => onSelectService(service.title)}
                  style={{
                    background: `linear-gradient(135deg, ${service.color}22, ${service.color}44)`,
                    border: `1px solid ${service.color}66`,
                    color: '#ffffff',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    padding: '8px 14px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Select</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* In-Depth Service Detail Modal */}
      {activeModalService && (
        <div
          className="modal-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setActiveModalService(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '720px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#0c0f1a',
              border: `1px solid ${activeModalService.color}55`,
              borderRadius: '20px',
              padding: '36px',
              boxShadow: `0 20px 60px -10px ${activeModalService.color}30`,
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalService(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
              }}
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: activeModalService.gradient,
                  border: `1px solid ${activeModalService.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {getIcon(activeModalService.iconName, activeModalService.color)}
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    color: activeModalService.color,
                    fontWeight: 600,
                  }}
                >
                  TECHNICAL SPECIFICATION
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{activeModalService.title}</h3>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {activeModalService.description}
            </p>

            {/* Architecture breakdown */}
            <div
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  color: activeModalService.color,
                  marginBottom: '8px',
                  fontWeight: 600,
                }}
              >
                // SYSTEM ARCHITECTURE BLUEPRINT
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>
                {activeModalService.architectureOverview}
              </p>
            </div>

            {/* All Deliverables */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '12px', color: '#f1f5f9' }}>
                Complete Scope of Deliverables:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeModalService.deliverables.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={16} color={activeModalService.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Tech Stack */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '10px', color: '#94a3b8' }}>
                Technologies & Frameworks Utilized:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {activeModalService.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#f8fafc',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action CTA */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setActiveModalService(null)}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceName = activeModalService.title;
                  setActiveModalService(null);
                  onSelectService(serviceName);
                }}
                className="btn-primary-glow"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 24px',
                }}
              >
                <span>Add to Project Inquiry</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
