import { useState, useEffect } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  preselectedService?: string;
  appliedMetrics?: { monthlySavings: number; revenueLift: number; hoursSaved: number } | null;
}

export const ContactSection = ({ preselectedService, appliedMetrics }: ContactSectionProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState<string>('$25k - $60k (Standard Full Suite)');
  const [timeline, setTimeline] = useState<string>('1 - 2 Months');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableServices = [
    'Website Design & Development',
    'AI / Business Automation',
    'NFC & QR Feedback Systems',
    'Digital Consulting',
    'SEO / Digital Growth Services',
  ];

  useEffect(() => {
    if (preselectedService && !selectedServices.includes(preselectedService)) {
      setSelectedServices((prev) => [...prev, preselectedService]);
    }
  }, [preselectedService]);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#a855f7', '#10b981'],
        });
      } catch (err) {
        console.log(err);
      }
    }, 900);
  };

  return (
    <section
      id="contact"
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
            background: 'rgba(0, 240, 255, 0.08)',
            border: '1px solid rgba(0, 240, 255, 0.25)',
            marginBottom: '16px',
          }}
        >
          <Sparkles size={14} color="#00f0ff" />
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
            Start An Engagement
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
          Let’s Build Something <span className="gradient-text-cyan">Extraordinary</span>
        </h2>
        <p
          style={{
            color: '#94a3b8',
            fontSize: '1.08rem',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Tell us about your technical goals. We respond to all qualified enterprise inquiries within 4 business hours.
        </p>
      </div>

      <div
        className="glass-panel"
        style={{
          maxWidth: '920px',
          margin: '0 auto',
          padding: '44px',
          background: 'rgba(11, 15, 27, 0.92)',
          border: '1px solid rgba(0, 240, 255, 0.2)',
          borderRadius: '24px',
          boxShadow: '0 25px 70px -15px rgba(0, 240, 255, 0.15)',
        }}
      >
        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
              }}
            >
              <CheckCircle2 size={38} color="#10b981" />
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', marginBottom: '12px' }}>
              Project Brief Received!
            </h3>
            <p style={{ color: '#94a3b8', maxWidth: '520px', margin: '0 auto 28px auto', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#00f0ff' }}>{fullName || 'there'}</strong>. Our engineering leads
              have been notified and are reviewing your brief for {company || 'your team'}. You will receive a personalized
              architecture recommendation and invite shortly.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setIsSubmitted(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '12px 24px',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Services */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
                1. Select the capabilities you need:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {availableServices.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      style={{
                        background: isSelected ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: isSelected ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: isSelected ? '#00f0ff' : '#94a3b8',
                        padding: '10px 18px',
                        borderRadius: '10px',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {isSelected ? '✓ ' : '+ '}
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Display Applied ROI Metrics if populated from calculator */}
            {appliedMetrics && (
              <div
                style={{
                  background: 'rgba(0, 240, 255, 0.06)',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  marginBottom: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Sparkles size={18} color="#00f0ff" />
                <div style={{ fontSize: '0.84rem', color: '#cbd5e1' }}>
                  <strong style={{ color: '#00f0ff' }}>Calculated Targets Attached:</strong> Aiming to save{' '}
                  <strong>{appliedMetrics.hoursSaved} hrs/mo</strong> and unlock{' '}
                  <strong>+${appliedMetrics.revenueLift.toLocaleString()}/mo</strong> in lift.
                </div>
              </div>
            )}

            {/* Step 2: Budget & Timeline */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
                marginBottom: '32px',
              }}
            >
              <div>
                <label style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                  2. Anticipated Investment Tier:
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#f8fafc',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  <option value="$10k - $25k (Pilot / Single System)" style={{ background: '#0e1220' }}>
                    $10,000 - $25,000 (Targeted Build / MVP)
                  </option>
                  <option value="$25k - $60k (Standard Full Suite)" style={{ background: '#0e1220' }}>
                    $25,000 - $60,000 (Standard Full Suite)
                  </option>
                  <option value="$60k - $150k+ (Enterprise Ecosystem)" style={{ background: '#0e1220' }}>
                    $60,000 - $150,000+ (Multi-System Enterprise Ecosystem)
                  </option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                  3. Target Launch Timeline:
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#f8fafc',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  <option value="Rapid Deployment (< 4 weeks)" style={{ background: '#0e1220' }}>
                    Rapid Sprint (&lt; 4 weeks)
                  </option>
                  <option value="1 - 2 Months" style={{ background: '#0e1220' }}>
                    Standard Execution (1 - 2 Months)
                  </option>
                  <option value="Q3/Q4 2026 Strategic Plan" style={{ background: '#0e1220' }}>
                    Strategic Phased Roadmap
                  </option>
                </select>
              </div>
            </div>

            {/* Step 3: Contact Inputs */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '20px',
                marginBottom: '24px',
              }}
            >
              <div>
                <label style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Hayes"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#f8fafc',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                  id="contact-name-input"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#f8fafc',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                  id="contact-email-input"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="Acme Technologies"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                    color: '#f8fafc',
                    fontSize: '0.92rem',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            {/* Step 4: Brief description */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                Key Technical Goals & Requirements:
              </label>
              <textarea
                rows={4}
                placeholder="Share any context about your current website, automation friction, NFC feedback deployment ideas, or growth goals..."
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: '#f8fafc',
                  fontSize: '0.92rem',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary-glow"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '16px',
                fontSize: '1.05rem',
              }}
              id="submit-consultation-btn"
            >
              {isSubmitting ? (
                <span>Routing to Senior Technical Architect...</span>
              ) : (
                <>
                  <Send size={18} />
                  <span>Submit Project Brief for Architecture Review</span>
                </>
              )}
            </button>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '20px', color: '#64748b', fontSize: '0.78rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={13} color="#10b981" /> Strict NDA Guaranteed
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={13} color="#10b981" /> No Obligation Technical Scope
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
