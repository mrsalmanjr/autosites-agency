import { useState } from 'react';
import { Terminal, Shield, ArrowRight, Check } from 'lucide-react';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#04050a',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Column 1: Brand & Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(0, 240, 255, 0.15)',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Terminal size={18} color="#00f0ff" />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif' }}>
                NEXUS<span style={{ color: '#00f0ff' }}>.</span>DYNAMICS
              </span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Pioneering modern digital agency engineering high-performance WebGL web applications,
              autonomous AI business automations, and contactless NFC & dynamic QR feedback hardware.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-indicator" />
              <span style={{ fontSize: '0.78rem', color: '#10b981', fontFamily: 'JetBrains Mono, monospace' }}>
                All Global Edge Nodes Operational (18ms avg)
              </span>
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#f1f5f9', marginBottom: '18px' }}>
              5 Core Capabilities
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Website Design & Development', href: '#services' },
                { name: 'AI / Business Automation', href: '#services' },
                { name: 'NFC & QR Feedback Systems', href: '#services' },
                { name: 'Digital Consulting', href: '#services' },
                { name: 'SEO & Digital Growth Services', href: '#services' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    style={{
                      color: '#94a3b8',
                      fontSize: '0.88rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Global Hubs */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#f1f5f9', marginBottom: '18px' }}>
              Global Engineering Hubs
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: '#94a3b8' }}>
              <div>
                <strong style={{ color: '#e2e8f0', display: 'block' }}>San Francisco (HQ)</strong>
                <span>Market St, Suite 840, CA</span>
              </div>
              <div>
                <strong style={{ color: '#e2e8f0', display: 'block' }}>London</strong>
                <span>Finsbury Square, Tech City</span>
              </div>
              <div>
                <strong style={{ color: '#e2e8f0', display: 'block' }}>Singapore & Dubai</strong>
                <span>Marina Bay Financial Centre</span>
              </div>
            </div>
          </div>

          {/* Column 4: Technology Intelligence Dispatch */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#f1f5f9', marginBottom: '18px' }}>
              Intelligence Dispatch
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '14px' }}>
              Quarterly executive briefing on AI automations, WebGL breakthroughs, and contactless customer systems.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                required
                placeholder="architect@domain.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  color: '#fff',
                  fontSize: '0.85rem',
                  outline: 'none',
                  flex: 1,
                }}
              />
              <button
                type="submit"
                style={{
                  background: '#00f0ff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  color: '#05070e',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {subscribed ? <Check size={16} /> : <ArrowRight size={16} />}
              </button>
            </form>
            {subscribed && (
              <span style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '6px', display: 'block' }}>
                ✓ Subscribed to Quarterly Dispatch.
              </span>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.8rem',
            color: '#64748b',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>© 2026 NEXUS DYNAMICS LLC. All rights reserved.</span>
            <span>• Built with React, Three.js & @designcodeio/threeui</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Shield size={13} color="#10b981" /> SOC2 Type II Certified
            </span>
            <span>ISO/IEC 27001</span>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
