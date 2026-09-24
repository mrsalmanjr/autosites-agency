import { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Clock, TrendingUp, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onApplyCalculations: (metrics: { monthlySavings: number; revenueLift: number; hoursSaved: number }) => void;
}

export const RoiCalculator = ({ onApplyCalculations }: RoiCalculatorProps) => {
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(35000);
  const [manualHoursWeekly, setManualHoursWeekly] = useState<number>(45);
  const [dealValue, setDealValue] = useState<number>(1200);

  // Calculations
  // Labor savings assuming $55/hr blend cost
  const monthlyLaborHoursSaved = Math.round(manualHoursWeekly * 4 * 0.72); // 72% reduction via AI automation
  const monthlyLaborCostSaved = monthlyLaborHoursSaved * 55;

  // Web conversion lift: baseline 1.5% lifted to 2.8% via modern UX & SEO
  const baselineConversions = (monthlyVisitors * 0.015);
  const liftedConversions = (monthlyVisitors * 0.026);
  const incrementalDealsMonthly = Math.round(liftedConversions - baselineConversions);
  const projectedRevenueLiftMonthly = Math.round(incrementalDealsMonthly * (dealValue * 0.15)); // conservative 15% margin
  const totalAnnualValue = (monthlyLaborCostSaved + projectedRevenueLiftMonthly) * 12;

  return (
    <section
      id="roi-calculator"
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
          <Calculator size={14} color="#00f0ff" />
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
            Predictive Business Economics
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
          Calculate Your <span className="gradient-text-cyan">Agency ROI</span> & Automation Impact
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
          Adjust the variables to model how combining high-conversion web development, autonomous AI workflows,
          and NFC feedback systems transforms your profitability.
        </p>
      </div>

      <div
        className="glass-panel"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '40px',
          padding: '40px',
          border: '1px solid rgba(0, 240, 255, 0.25)',
          background: 'rgba(11, 15, 26, 0.85)',
          borderRadius: '24px',
          boxShadow: '0 20px 60px -20px rgba(0, 240, 255, 0.15)',
        }}
      >
        {/* Left: Interactive Input Sliders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="#00f0ff" />
            <span>Company Parameters</span>
          </h3>

          {/* Slider 1 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 500 }}>
                Monthly Website Visitors:
              </label>
              <span style={{ fontSize: '1rem', fontWeight: 800, color: '#00f0ff', fontFamily: 'JetBrains Mono, monospace' }}>
                {monthlyVisitors.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="2000"
              max="250000"
              step="1000"
              value={monthlyVisitors}
              onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#00f0ff',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginTop: '4px' }}>
              <span>2,000 / mo</span>
              <span>250,000+ / mo</span>
            </div>
          </div>

          {/* Slider 2 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 500 }}>
                Weekly Hours Lost to Repetitive Manual Work:
              </label>
              <span style={{ fontSize: '1rem', fontWeight: 800, color: '#a855f7', fontFamily: 'JetBrains Mono, monospace' }}>
                {manualHoursWeekly} hrs / week
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="160"
              step="5"
              value={manualHoursWeekly}
              onChange={(e) => setManualHoursWeekly(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#a855f7',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginTop: '4px' }}>
              <span>5 hrs</span>
              <span>160 hrs (Team-wide)</span>
            </div>
          </div>

          {/* Slider 3 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 500 }}>
                Average Customer Value (LTV / Deal Size):
              </label>
              <span style={{ fontSize: '1rem', fontWeight: 800, color: '#10b981', fontFamily: 'JetBrains Mono, monospace' }}>
                ${dealValue.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="15000"
              step="100"
              value={dealValue}
              onChange={(e) => setDealValue(Number(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#10b981',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginTop: '4px' }}>
              <span>$100</span>
              <span>$15,000+</span>
            </div>
          </div>
        </div>

        {/* Right: Projected Yield Card */}
        <div
          style={{
            background: 'linear-gradient(145deg, rgba(16, 22, 40, 0.9) 0%, rgba(8, 11, 20, 0.95) 100%)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div>
            <div style={{ fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace', color: '#00f0ff', letterSpacing: '0.06em', marginBottom: '6px' }}>
              ESTIMATED ANNUAL VALUE CREATED
            </div>
            <div
              style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.4rem)',
                fontWeight: 900,
                color: '#ffffff',
                fontFamily: 'Outfit, sans-serif',
                marginBottom: '20px',
              }}
            >
              <span style={{ color: '#00f0ff' }}>${totalAnnualValue.toLocaleString()}</span>
              <span style={{ fontSize: '1.2rem', color: '#94a3b8', fontWeight: 400 }}> / yr</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                  <Clock size={20} color="#a855f7" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Operational Labor Saved</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc' }}>
                    {monthlyLaborHoursSaved} hrs / mo (~${(monthlyLaborCostSaved * 12).toLocaleString()} / yr)
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <TrendingUp size={20} color="#10b981" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>New Inbound Revenue Lift</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc' }}>
                    +${(projectedRevenueLiftMonthly * 12).toLocaleString()} / yr (CRO & WebGL UX)
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(0, 240, 255, 0.15)', border: '1px solid rgba(0, 240, 255, 0.3)' }}>
                  <DollarSign size={20} color="#00f0ff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Expected Agency ROI Multiple</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc' }}>
                    4.4x to 6.2x Capital Payback in &lt; 90 Days
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              onApplyCalculations({
                monthlySavings: monthlyLaborCostSaved,
                revenueLift: projectedRevenueLiftMonthly,
                hoursSaved: monthlyLaborHoursSaved,
              })
            }
            className="btn-primary-glow"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '14px',
            }}
            id="apply-roi-brief-btn"
          >
            <span>Lock In These Metrics in Project Brief</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
