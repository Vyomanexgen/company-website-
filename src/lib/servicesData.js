// src/lib/servicesData.js

export const servicesDetailData = {
  // ... other services

  crm: {
    title: "CRM Development",
    subtitle: "Customer pipelines, tailored to your workflow",
    theme: "blue",
    icon: "Users",
    overview:
      "Custom CRM with contact management, automation, analytics, and permissions—your process, encoded.",
    features: [
      "Lead Tracking",
      "Sales Automation",
      "Dashboards",
      "Role-Based Access",
      "Custom Reports",
      "Workflow Automation",
      "Email Integration",
      "Mobile Access",
    ],
    benefits: [
      { title: "Increased User Engagement", text: "Tangible improvements in product adoption and retention." },
      { title: "Higher Conversion Rates", text: "Design decisions that drive business outcomes." },
      { title: "Reduced Development Costs", text: "Catch UX issues early with prototypes and testing." },
      { title: "Better Brand Recognition", text: "Consistent, memorable design systems." },
    ],
    process: [
      { step: 1, title: "Discovery", text: "Understand business goals and user needs." },
      { step: 2, title: "Research", text: "Analyze competitors and best practices." },
      { step: 3, title: "Design", text: "Create wireframes, mockups, and prototypes." },
      { step: 4, title: "Testing", text: "Validate with users and iterate." },
      { step: 5, title: "Delivery", text: "Hand-off assets and documentation." },
    ],
    
  },

  "web-mobile-designing": {
    title: "Web & Mobile Designing",
    subtitle: "Stunning, user-centric designs that captivate and convert",
    theme: "blue",
    icon: "LayoutDashboard",
    overview:
      "We craft modern, responsive designs for web and mobile—focused on clarity, speed, and brand impact.",
    features: [
      "Visual Design",
      "Responsive Layouts",
      "Mobile-First Approach",
      "Brand Identity Integration",
      "Design Tokens & Systems",
      "Accessibility (WCAG)",
      "Component Libraries",
      "Microinteractions",
    ],
    benefits: [
      { title: "Pixel-Perfect UI", text: "Looks great on any device and density." },
      { title: "Faster Time-to-Market", text: "Design systems speed up delivery." },
      { title: "Lower Bounce Rate", text: "Clear, usable flows keep users engaged." },
      { title: "Team Alignment", text: "Shared specs reduce rework." },
    ],
    process: [
      { step: 1, title: "Brief", text: "Goals, audience, success metrics." },
      { step: 2, title: "Concept", text: "Moodboards & art direction." },
      { step: 3, title: "Hi-Fi UI", text: "Componentized, scalable design." },
      { step: 4, title: "Spec", text: "Redlines, tokens, and states." },
      { step: 5, title: "Review", text: "QA and polish pre-launch." },
    ],
  },

  "web-development": {
    title: "Website Development",
    subtitle: "Fast, secure & scalable web apps",
    theme: "gradient",
    icon: "Code",
    overview:
      "We build robust, SEO-friendly websites and apps using Next.js, Node, and modern tooling.",
    features: [
      "Custom Next.js Frontends",
      "E-Commerce & Payments",
      "Headless CMS (Sanity/Strapi)",
      "API Integrations",
      "Performance & Security",
      "Progressive Web Apps (PWA)",
      "Serverless Functions",
    ],
    benefits: [
      { title: "Blazing Performance", text: "Optimized Core Web Vitals." },
      { title: "SEO-Ready", text: "Structured data and clean markup." },
      { title: "Scalable Architecture", text: "Built to grow with you." },
      { title: "Easy Publishing", text: "Headless CMS workflows." },
    ],
    process: [
      { step: 1, title: "Plan", text: "Scope, IA, and milestones." },
      { step: 2, title: "Build", text: "Components and APIs." },
      { step: 3, title: "Harden", text: "Perf, security, accessibility." },
      { step: 4, title: "Launch", text: "CI/CD and monitoring." },
      { step: 5, title: "Evolve", text: "Iterate based on analytics." },
    ],
  },

  "mobile-apps": {
    title: "Mobile App Development",
    subtitle: "Native & cross-platform apps users love",
    theme: "violet",
    icon: "Smartphone",
    overview:
      "From concept to store launch—Swift/Kotlin or cross-platform. Smooth UX, strong performance.",
    features: ["iOS (Swift/SwiftUI)", "Android (Kotlin)", "React Native", "App Store/Play Deploy", "Push Notifications", "App Performance Optimization"],
    benefits: [
      { title: "Native Feel", text: "Snappy, platform-consistent UI." },
      { title: "Multi-Platform", text: "One codebase where it fits." },
      { title: "Analytics-Driven", text: "Ship, learn, improve." },
      { title: "Secure", text: "Auth, encryption, secure storage." },
    ],
    process: [
      { step: 1, title: "Blueprint", text: "Flows and architecture." },
      { step: 2, title: "MVP", text: "Core features fast." },
      { step: 3, title: "Polish", text: "Animations and micro-interactions." },
      { step: 4, title: "Publish", text: "Review readiness & ASO." },
      { step: 5, title: "Scale", text: "Crash-free and growth." },
    ],
  },

  crm: {
    title: "CRM Development",
    subtitle: "Customer pipelines, tailored to your workflow",
    theme: "blue",
    icon: "Users",
    overview:
      "Custom CRM with contact management, automation, analytics, and permissions—your process, encoded.",
    features: ["Lead Management & Tracking",
      "Customer Database & Profile Management",

"Sales Pipeline & Deal Forecasting",

"Automated Follow-ups & Reminders",

"Email & WhatsApp Communication Integration",

"Task & Workflow Automation",

"Reports & Performance Analytics Dashboards",

"Role-Based Access & Secure Data Permissions",
      ],
    benefits: [
      { title: "Clear Pipeline", text: "Know what moves the needle." },
      { title: "Automation", text: "Less manual work, fewer errors." },
      { title: "Insights", text: "Actionable reporting." },
      { title: "Adoption", text: "Built for how teams actually work." },
    ],
    process: [
      { step: 1, title: "Map", text: "Your sales stages." },
      { step: 2, title: "Model", text: "Entities and permissions." },
      { step: 3, title: "Automate", text: "Workflows and alerts." },
      { step: 4, title: "Train", text: "Rollout and docs." },
      { step: 5, title: "Refine", text: "Improve from usage data." },
    ],
  },

  "ai-chatbots": {
    title: "AI Chatbots / WhatsApp Bots",
    subtitle: "24/7 conversational support that converts",
    theme: "green",
    icon: "MessageSquare",
    overview:
      "GPT-powered assistants for web and WhatsApp. Reduce response time, increase satisfaction.",
    features: ["Natural Language AI", "WhatsApp Integration", "Multi-Channel", "Knowledge Bases", "Sentiment Analysis", "Multilingual Support"],
    benefits: [
      { title: "Instant Support", text: "Lower wait times, higher CSAT." },
      { title: "Always On", text: "Serve global timezones." },
      { title: "Lower Cost", text: "Deflect repetitive tickets." },
      { title: "Consistent Replies", text: "On-brand, accurate information." },
    ],
    process: [
      { step: 1, title: "Use-Cases", text: "Define intents and flows." },
      { step: 2, title: "Train", text: "Seed knowledge and examples." },
      { step: 3, title: "Integrate", text: "WhatsApp / Web widget." },
      { step: 4, title: "Guardrails", text: "Fallbacks and escalation." },
      { step: 5, title: "Improve", text: "Monitor and re-train." },
    ],
  },

  "ai-sms-calling-agents": {
    title: "AI SMS & Calling Agents",
    subtitle: "Automated voice and SMS agents for proactive engagement",
    theme: "teal",
    icon: "PhoneCall",
    overview:
      "AI-driven SMS and voice agents that handle outreach, reminders, surveys, and conversational flows at scale—integrated with your systems and compliant with regulations.",
    features: [
      "Automated SMS Campaigns",
      "Interactive Voice Agents (IVR/Call Flows)",
      "Speech-to-Text & Text-to-Speech",
      "Two-way Conversational Flows",
      "Delivery & Compliance (Opt-out, TCPA)",
      "Analytics & Conversation Logs",
      "A/B Testing",
      "Webhook Integrations",
    ],
    benefits: [
      { title: "Higher Reach", text: "Engage users where they are—SMS and voice." },
      { title: "Lower Support Load", text: "Automate routine interactions and reminders." },
      { title: "Personalized Outreach", text: "Dynamic messaging based on customer data." },
      { title: "Audit-Ready", text: "Logs and consent tracking for compliance." },
    ],
    process: [
      { step: 1, title: "Plan", text: "Define intents, frequency, and compliance needs." },
      { step: 2, title: "Design", text: "Build SMS templates and call scripts." },
      { step: 3, title: "Train", text: "Tune NLU and voice prompts for clarity." },
      { step: 4, title: "Integrate", text: "Connect CRMs, webhooks, and telephony providers." },
      { step: 5, title: "Monitor", text: "Track delivery, response rates, and iterate." },
    ],
  },

  "billing-software": {
    title: "Billing & Invoicing Software",
    subtitle: "Automate billing, subscriptions, and payments",
    theme: "orange",
    icon: "CreditCard",
    overview:
      "Comprehensive billing solutions to manage one-time invoices, recurring subscriptions, taxes, and payment workflows—integrated with popular gateways and accounting systems.",
    features: [
      "Recurring Billing & Subscriptions",
      "One-off Invoicing & Receipts",
      "Tax Calculation & Compliance",
      "Payment Gateway Integrations (Stripe, PayPal, Razorpay)",
      "Proration & Dunning Management",
      "Exportable Reports & Accounting Sync",
      "Multi-currency Support",
      "Self-Service Portal",
    ],
    benefits: [
      { title: "Faster Payments", text: "Streamlined checkout and retry flows." },
      { title: "Reduced Churn", text: "Smart proration and dunning to keep customers active." },
      { title: "Accurate Accounting", text: "Automatic records and export-ready reports." },
      { title: "Developer-Friendly", text: "APIs and webhooks for custom workflows." },
    ],
    process: [
      { step: 1, title: "Configure", text: "Plans, taxes, and payment methods." },
      { step: 2, title: "Integrate", text: "Connect gateway and CRM/accounting." },
      { step: 3, title: "Automate", text: "Set up billing cycles, proration, and dunning." },
      { step: 4, title: "Reconcile", text: "Match payments and generate reports." },
      { step: 5, title: "Scale", text: "Optimize for internationalization and volume." },
    ],
  },
};
