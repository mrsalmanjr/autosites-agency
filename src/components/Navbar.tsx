import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar = ({ onOpenConsultation }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Core Capabilities', href: '#services' },
    { name: 'Live Demos (NFC & AI)', href: '#demos' },
    { name: 'Client Impact', href: '#case-studies' },
    { name: 'Kage 3D World', href: '#kage-scene' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
    { name: 'Contact & Brief', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(7, 9, 15, 0.88)' : 'rgba(7, 9, 15, 0.4)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(0, 240, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(168, 85, 247, 0.2))',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.25)',
            }}
          >
            <Terminal size={22} color="#00f0ff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                NEXUS<span style={{ color: '#00f0ff' }}>.</span>DYNAMICS
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
              <span className="pulse-indicator" />
              <span
                style={{
                  fontSize: '0.68rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  color: '#94a3b8',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                Accepting 2026/2027 Retainers
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#cbd5e1',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00f0ff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={onOpenConsultation}
            className="btn-primary-glow"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.88rem',
              padding: '10px 22px',
            }}
            id="nav-consultation-btn"
          >
            <Sparkles size={16} />
            <span>Launch Consultation</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '8px',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle Navigation Menu"
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(6, 8, 14, 0.98)',
            borderBottom: '1px solid rgba(0, 240, 255, 0.2)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1.05rem',
                color: '#e2e8f0',
                textDecoration: 'none',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="btn-primary-glow"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              marginTop: '12px',
            }}
          >
            <Sparkles size={16} />
            <span>Launch Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Media query styling */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          #nav-consultation-btn { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};
