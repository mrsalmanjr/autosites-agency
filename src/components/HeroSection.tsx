import { useState } from 'react';
import { ArrowRight, Bot, Cpu, Sparkles, Layers, ShieldCheck, Play } from 'lucide-react';
import { ParticleNetwork, FluidFieldBackground } from '@designcodeio/threeui';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection = ({ onOpenConsultation }: HeroSectionProps) => {
  const [activeShader, setActiveShader] = useState<'particles' | 'fluid'>('particles');

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      {/* 3D WebGL ThreeUI Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: 0.65,
          pointerEvents: 'none',
        }}
      >
        {activeShader === 'particles' ? (
          <ParticleNetwork
            mode="dark"
            speed={0.8}
            density={1.2}
            strokeWidth={1}
            opacity={0.85}
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <FluidFieldBackground
            mode="dark"
            hue={190}
            saturation={1.2}
            brightness={0.9}
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>

      {/* Cyber gradient overlay to blend into black canvas */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'radial-gradient(circle at 50% 40%, rgba(6, 7, 12, 0.4) 0%, rgba(6, 7, 12, 0.85) 75%, #06070c 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Top Cyber Badge with 3D Toggle */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: 'rgba(0, 240, 255, 0.08)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            backdropFilter: 'blur(12px)',
            marginBottom: '28px',
          }}
        >
          <Sparkles size={16} color="#00f0ff" />
          <span
            style={{
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: '#00f0ff',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            Powered by ThreeUI & Next-Gen Automation
          </span>
          <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
          <button
            onClick={() => setActiveShader(activeShader === 'particles' ? 'fluid' : 'particles')}
            style={{
              background: 'none',
              border: 'none',
              color: '#cbd5e1',
              fontSize: '0.78rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              textDecoration: 'underline',
              fontFamily: 'JetBrains Mono, monospace',
            }}
            title="Toggle Three.js WebGL Shader"
          >
            Switch Shader ({activeShader === 'particles' ? 'Fluid FX' : 'Particle Grid'})
          </button>
        </div>

        {/* Main Hero Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.6rem)',
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
            maxWidth: '1050px',
            marginBottom: '24px',
          }}
        >
          Architecting Modern <span className="gradient-text-cyan">Web Systems</span>,{' '}
          <span className="gradient-text-purple">Autonomous AI</span> & Smart Contactless Tech.
        </h1>

        {/* Hero Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.28rem)',
            color: '#94a3b8',
            maxWidth: '820px',
            lineHeight: 1.6,
            marginBottom: '40px',
            fontWeight: 400,
          }}
        >
          We are a full-cycle digital technology agency. We design ultra-modern 3D websites, engineer
          intelligent business automation pipelines, deploy physical NFC & QR feedback ecosystems, and
          accelerate organic digital growth for industry leaders.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '64px',
          }}
        >
          <button
            onClick={onOpenConsultation}
            className="btn-primary-glow"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '1rem',
              padding: '14px 34px',
            }}
            id="hero-start-project-btn"
          >
            <span>Start Your Project</span>
            <ArrowRight size={18} />
          </button>

          <a
            href="#demos"
            className="btn-secondary-glass"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.98rem',
              padding: '14px 28px',
              textDecoration: 'none',
            }}
            id="hero-live-demos-btn"
          >
            <Play size={16} color="#00f0ff" />
            <span>Interactive Live Demos</span>
          </a>

          <a
            href="#services"
            className="btn-secondary-glass"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.98rem',
              padding: '14px 28px',
              textDecoration: 'none',
            }}
          >
            <Layers size={16} />
            <span>View 5 Core Capabilities</span>
          </a>
        </div>

        {/* Key Metrics Strip */}
        <div
          style={{
            width: '100%',
            maxWidth: '1100px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}
        >
          {[
            {
              value: '99.98%',
              label: 'Enterprise Web Reliability',
              sub: 'Zero cold-start edge architecture',
              icon: ShieldCheck,
              accent: '#00f0ff',
            },
            {
              value: '4.2x',
              label: 'Average Client ROI',
              sub: 'Driven by automation & CRO',
              icon: Cpu,
              accent: '#a855f7',
            },
            {
              value: '850K+',
              label: 'Automated Operations / Mo',
              sub: 'AI agent workflow pipelines',
              icon: Bot,
              accent: '#10b981',
            },
            {
              value: '4.98 / 5',
              label: 'Customer Sentiment Rating',
              sub: 'Across 140K+ NFC & QR taps',
              icon: Sparkles,
              accent: '#f59e0b',
            },
          ].map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div
                key={i}
                className="glass-panel"
                style={{
                  padding: '20px 24px',
                  textAlign: 'left',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '80px',
                    height: '80px',
                    background: `radial-gradient(circle, ${metric.accent}22 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontSize: '1.9rem',
                      fontWeight: 800,
                      fontFamily: 'Outfit, sans-serif',
                      color: metric.accent,
                    }}
                  >
                    {metric.value}
                  </span>
                  <div
                    style={{
                      padding: '8px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${metric.accent}33`,
                    }}
                  >
                    <Icon size={18} color={metric.accent} />
                  </div>
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '2px' }}>
                  {metric.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}>
                  {metric.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
