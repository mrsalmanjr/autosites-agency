export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  color: string;
  gradient: string;
  deliverables: string[];
  techStack: string[];
  metrics: { label: string; value: string };
  architectureOverview: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  tags: string[];
}

export interface FeedbackReview {
  id: string;
  author: string;
  company: string;
  rating: number;
  sentiment: 'positive' | 'neutral' | 'critical';
  channel: 'NFC Card Tap' | 'Dynamic QR Scan';
  comment: string;
  timestamp: string;
  aiActionTaken: string;
}

export interface AutomationStep {
  id: number;
  title: string;
  type: 'trigger' | 'ai' | 'decision' | 'sync' | 'notify';
  detail: string;
  status: 'idle' | 'processing' | 'completed';
}
