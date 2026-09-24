import { useState } from 'react';
import { 
  Nfc, 
  QrCode, 
  Sparkles, 
  Play, 
  CheckCircle, 
  Clock, 
  Star, 
  RefreshCw,
  Send,
  Zap,
  Activity
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { FeedbackReview } from '../types';

export const InteractiveDemos = () => {
  const [activeTab, setActiveTab] = useState<'nfc' | 'automation'>('nfc');

  // NFC & QR Demo State
  const [activeChannel, setActiveChannel] = useState<'NFC Card Tap' | 'Dynamic QR Scan'>('NFC Card Tap');
  const [starRating, setStarRating] = useState(5);
  const [reviewText, setReviewText] = useState('Flawless digital experience and incredible service! Truly next level.');
  const [authorName, setAuthorName] = useState('Alex Rivers');
  const [companyName, setCompanyName] = useState('Vanguard Retail Group');
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Live Telemetry Feed
  const [reviewsFeed, setReviewsFeed] = useState<FeedbackReview[]>([
    {
      id: 'rev-01',
      author: 'Marcus Vance',
      company: 'Aura Luxury Resorts',
      rating: 5,
      sentiment: 'positive',
      channel: 'NFC Card Tap',
      comment: 'The contactless NFC stand on the counter was so seamless. 5 stars on Google instantly!',
      timestamp: '2 mins ago',
      aiActionTaken: 'Auto-routed to Google Reviews; Sentiment +0.96; Loyalty badge awarded',
    },
    {
      id: 'rev-02',
      author: 'Elena Rostova',
      company: 'Nordic Bistro Group',
      rating: 5,
      sentiment: 'positive',
      channel: 'Dynamic QR Scan',
      comment: 'Dynamic QR code updated our menu and asked for feedback right when bill arrived. Genius.',
      timestamp: '8 mins ago',
      aiActionTaken: 'Sync to TripAdvisor; Auto-generated thank you email sent',
    },
  ]);

  // AI Automation Demo State
  const [pipelineRunning, setPipelineRunning] = useState(false);
  const [activePipelineStep, setActivePipelineStep] = useState<number>(-1);
  const [pipelineLogs, setPipelineLogs] = useState<string[]>([
    '[SYSTEM READY] Waiting for event trigger...',
  ]);

  const pipelineSteps = [
    {
      id: 0,
      title: '1. Event Trigger',
      desc: 'Inbound high-value enterprise inquiry received via web/NFC',
      tech: 'Webhook / WebSocket Edge',
      color: '#00f0ff',
    },
    {
      id: 1,
      title: '2. Multi-Modal AI Analysis',
      desc: 'Agent parses intent, extracts budget ($50k+), determines urgency',
      tech: 'Claude 3.7 / GPT-4o Agent',
      color: '#a855f7',
    },
    {
      id: 2,
      title: '3. Intelligent Routing Gate',
      desc: 'Classified as Tier-1 Opportunity; assigns principal consultant',
      tech: 'Dynamic Rule Logic',
      color: '#ec4899',
    },
    {
      id: 3,
      title: '4. CRM & Database Sync',
      desc: 'Records created in Salesforce & PostgreSQL with enriched data',
      tech: 'PostgreSQL + REST API',
      color: '#10b981',
    },
    {
      id: 4,
      title: '5. Instant Client Dispatch',
      desc: 'Personalized AI briefing sent to Slack channel & calendar invite generated',
      tech: 'Slack API + Google Calendar',
      color: '#f59e0b',
    },
  ];

  const triggerNfcReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingReview(true);

    setTimeout(() => {
      setIsSubmittingReview(false);
      setSubmittedSuccess(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#a855f7', '#10b981'],
        });
      } catch (err) {
        console.log(err);
      }

      // Add to live telemetry
      const newReview: FeedbackReview = {
        id: `rev-${Date.now()}`,
        author: authorName || 'Anonymous Guest',
        company: companyName || 'Independent Client',
        rating: starRating,
        sentiment: starRating >= 4 ? 'positive' : starRating === 3 ? 'neutral' : 'critical',
        channel: activeChannel,
        comment: reviewText,
        timestamp: 'Just now',
        aiActionTaken:
          starRating >= 4
            ? 'Sentiment Analyzed (Positive 99%); Funneled to Google Reviews; Review Boost Triggered'
            : 'Immediate Manager Escalation SMS sent; Root-cause classification initiated',
      };

      setReviewsFeed((prev) => [newReview, ...prev]);

      setTimeout(() => setSubmittedSuccess(false), 4000);
    }, 800);
  };

  const runAutomationPipeline = () => {
    if (pipelineRunning) return;
    setPipelineRunning(true);
    setPipelineLogs([]);

    const logMessages = [
      '[00.1s] Webhook payload ingested: Enterprise Lead from NYC.',
      '[00.8s] AI Model extracting requirements: Website redesign + AI Automation pipeline.',
      '[01.5s] Intent Score: 98.4%. Budget Tier: High ($65,000+). Priority: Urgent.',
      '[02.2s] Salesforce account provisioned; automated lead scoring applied.',
      '[02.9s] Slack dispatch triggered: #executive-leads notified. Calendly link generated.',
    ];

    let step = 0;
    setActivePipelineStep(0);
    setPipelineLogs([logMessages[0]]);

    const interval = setInterval(() => {
      step++;
      if (step < pipelineSteps.length) {
        setActivePipelineStep(step);
        setPipelineLogs((prev) => [...prev, logMessages[step]]);
      } else {
        clearInterval(interval);
        setPipelineRunning(false);
        setActivePipelineStep(pipelineSteps.length);
        setPipelineLogs((prev) => [
          ...prev,
          '[03.4s] [SUCCESS] Pipeline execution finalized in 3.42s (Saved ~45 mins manual labor).',
        ]);
      }
    }, 700);
  };

  return (
    <section
      id="demos"
      style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(168, 85, 247, 0.08)',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            marginBottom: '16px',
          }}
        >
          <Sparkles size={14} color="#a855f7" />
          <span
            style={{
              fontSize: '0.78rem',
              color: '#c084fc',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            Real-Time Interactive Sandboxes
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
          Experience Our <span className="gradient-text-glow">Technology Firsthand</span>
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
          Test our contactless NFC review engine and watch autonomous AI business automation pipelines
          execute live in real-time.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '40px',
        }}
      >
        <button
          onClick={() => setActiveTab('nfc')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 24px',
            borderRadius: '9999px',
            fontWeight: 700,
            fontSize: '0.92rem',
            cursor: 'pointer',
            border: activeTab === 'nfc' ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
            background: activeTab === 'nfc' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.04)',
            color: activeTab === 'nfc' ? '#10b981' : '#94a3b8',
            boxShadow: activeTab === 'nfc' ? '0 0 25px rgba(16, 185, 129, 0.25)' : 'none',
            transition: 'all 0.25s ease',
          }}
          id="demo-tab-nfc"
        >
          <Nfc size={18} />
          <span>NFC & QR Feedback Simulator</span>
        </button>

        <button
          onClick={() => setActiveTab('automation')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 24px',
            borderRadius: '9999px',
            fontWeight: 700,
            fontSize: '0.92rem',
            cursor: 'pointer',
            border: activeTab === 'automation' ? '1px solid #a855f7' : '1px solid rgba(255, 255, 255, 0.1)',
            background: activeTab === 'automation' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255, 255, 255, 0.04)',
            color: activeTab === 'automation' ? '#c084fc' : '#94a3b8',
            boxShadow: activeTab === 'automation' ? '0 0 25px rgba(168, 85, 247, 0.25)' : 'none',
            transition: 'all 0.25s ease',
          }}
          id="demo-tab-automation"
        >
          <Zap size={18} />
          <span>AI Workflow Automation Pipeline</span>
        </button>
      </div>

      {/* Tab 1: NFC & QR Feedback System Simulator */}
      {activeTab === 'nfc' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* Left: Interactive Simulated Customer Device */}
          <div
            className="glass-panel"
            style={{
              padding: '32px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              background: 'rgba(11, 17, 22, 0.85)',
            }}
          >
            {/* Simulation Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="pulse-indicator" style={{ backgroundColor: '#10b981' }} />
                <span style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#10b981', fontWeight: 700 }}>
                  LIVE HARDWARE SIMULATOR
                </span>
              </div>

              {/* Toggle Channel */}
              <div style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '8px', padding: '3px' }}>
                <button
                  type="button"
                  onClick={() => setActiveChannel('NFC Card Tap')}
                  style={{
                    background: activeChannel === 'NFC Card Tap' ? '#10b981' : 'transparent',
                    color: activeChannel === 'NFC Card Tap' ? '#04160e' : '#94a3b8',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '5px 12px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Nfc size={13} />
                  <span>NFC Tap</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveChannel('Dynamic QR Scan')}
                  style={{
                    background: activeChannel === 'Dynamic QR Scan' ? '#10b981' : 'transparent',
                    color: activeChannel === 'Dynamic QR Scan' ? '#04160e' : '#94a3b8',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '5px 12px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <QrCode size={13} />
                  <span>QR Scan</span>
                </button>
              </div>
            </div>

            {/* Smart Hardware Card Graphic */}
            <div
              style={{
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #13241b 0%, #0d1712 100%)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                padding: '24px',
                marginBottom: '24px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '0.7rem', color: '#10b981', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em' }}>
                  NEXUS SMART TOUCHPOINT // MODEL-X
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', marginTop: '4px' }}>
                  {activeChannel === 'NFC Card Tap' ? 'Tap Phone to Review' : 'Scan Dynamic QR Code'}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#6ee7b7', marginTop: '4px' }}>
                  Zero app required. Opens in &lt;300ms.
                </div>
              </div>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
                }}
              >
                {activeChannel === 'NFC Card Tap' ? <Nfc size={28} color="#10b981" /> : <QrCode size={28} color="#10b981" />}
              </div>
            </div>

            {/* Interactive Feedback Form */}
            <form onSubmit={triggerNfcReviewSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginBottom: '8px' }}>
                  Select Customer Rating:
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setStarRating(star)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        transform: starRating >= star ? 'scale(1.15)' : 'scale(1)',
                        transition: 'transform 0.15s ease',
                      }}
                      aria-label={`${star} Stars`}
                    >
                      <Star
                        size={28}
                        color={starRating >= star ? '#f59e0b' : '#334155'}
                        fill={starRating >= star ? '#f59e0b' : 'none'}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                  Customer Name:
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                  Company / Organization:
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
                  Customer Feedback Review:
                </label>
                <textarea
                  rows={3}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmittingReview}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '14px',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: isSubmittingReview ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)',
                }}
                id="submit-feedback-demo-btn"
              >
                {isSubmittingReview ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    <span>Processing Ingestion...</span>
                  </>
                ) : submittedSuccess ? (
                  <>
                    <CheckCircle size={18} />
                    <span>Feedback Ingested & Telemetry Updated!</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Simulate {activeChannel} Submission</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Live Admin Analytics & AI Telemetry Console */}
          <div
            className="glass-panel"
            style={{
              padding: '32px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(10, 13, 22, 0.9)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace', color: '#00f0ff', fontWeight: 600 }}>
                  TELEMETRY DASHBOARD
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '2px' }}>
                  Live Sentiment Ingestion Feed
                </h3>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(0, 240, 255, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid rgba(0, 240, 255, 0.25)',
                }}
              >
                <Activity size={14} color="#00f0ff" />
                <span style={{ fontSize: '0.72rem', color: '#00f0ff', fontFamily: 'JetBrains Mono, monospace' }}>
                  99.98% Healthy
                </span>
              </div>
            </div>

            {/* Quick KPI Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>CSAT Score</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#10b981' }}>4.98 / 5</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Total Reviews</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#00f0ff' }}>14,280+</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px' }}>
                <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Negative Alert</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#f59e0b' }}>&lt; 60s SMS</div>
              </div>
            </div>

            {/* Real-time Review Ingestion Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '420px', overflowY: 'auto' }}>
              {reviewsFeed.map((review) => (
                <div
                  key={review.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '12px',
                    padding: '16px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.92rem', color: '#f8fafc' }}>
                        {review.author}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: '#64748b' }}>• {review.company}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={14} color="#f59e0b" fill="#f59e0b" />
                      ))}
                    </div>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '10px' }}>
                    "{review.comment}"
                  </p>

                  <div
                    style={{
                      background: 'rgba(0, 240, 255, 0.04)',
                      border: '1px solid rgba(0, 240, 255, 0.15)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Zap size={12} color="#00f0ff" />
                      <span style={{ fontSize: '0.72rem', color: '#00f0ff', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>
                        AI AUTOMATION ROUTING ACTION
                      </span>
                    </div>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>
                      {review.aiActionTaken}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.7rem', color: '#475569' }}>
                    <span>Source: {review.channel}</span>
                    <span>{review.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: AI Workflow Automation Pipeline Simulator */}
      {activeTab === 'automation' && (
        <div
          className="glass-panel"
          style={{
            padding: '36px',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            background: 'rgba(12, 14, 25, 0.88)',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#a855f7', fontWeight: 700 }}>
                EVENT-DRIVEN AUTONOMOUS AGENT ORCHESTRATION
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '4px' }}>
                End-to-End Enterprise Lead & Operations Pipeline
              </h3>
            </div>

            <button
              onClick={runAutomationPipeline}
              disabled={pipelineRunning}
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '9999px',
                padding: '12px 28px',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: pipelineRunning ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)',
              }}
              id="execute-pipeline-demo-btn"
            >
              <Play size={16} />
              <span>{pipelineRunning ? 'Executing Nodes...' : 'Execute Live Pipeline'}</span>
            </button>
          </div>

          {/* Pipeline Nodes Graphic */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '36px',
              position: 'relative',
            }}
          >
            {pipelineSteps.map((step) => {
              const isActive = activePipelineStep === step.id;
              const isCompleted = activePipelineStep > step.id;

              return (
                <div
                  key={step.id}
                  style={{
                    background: isActive
                      ? 'rgba(168, 85, 247, 0.15)'
                      : isCompleted
                      ? 'rgba(16, 185, 129, 0.08)'
                      : 'rgba(255, 255, 255, 0.03)',
                    border: isActive
                      ? `2px solid ${step.color}`
                      : isCompleted
                      ? '1px solid #10b981'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '20px',
                    boxShadow: isActive ? `0 0 25px ${step.color}40` : 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: step.color, fontFamily: 'Outfit, sans-serif' }}>
                      {step.title}
                    </span>
                    {isCompleted ? (
                      <CheckCircle size={18} color="#10b981" />
                    ) : isActive ? (
                      <RefreshCw size={16} color={step.color} className="animate-spin" />
                    ) : (
                      <Clock size={16} color="#475569" />
                    )}
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.4, marginBottom: '12px' }}>
                    {step.desc}
                  </p>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#94a3b8',
                      display: 'inline-block',
                    }}
                  >
                    {step.tech}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Terminal Logs Window */}
          <div
            style={{
              background: '#040508',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '20px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.82rem',
              color: '#38bdf8',
              maxHeight: '180px',
              overflowY: 'auto',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: '#64748b' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#eab308' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ marginLeft: '6px', fontSize: '0.75rem' }}>ai-orchestrator@nexus-node-cluster-01</span>
            </div>
            {pipelineLogs.map((log, idx) => (
              <div key={idx} style={{ marginBottom: '4px', color: log.includes('SUCCESS') ? '#4ade80' : '#e2e8f0' }}>
                {log}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
