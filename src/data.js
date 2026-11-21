// All portfolio content lives here — edit this file to update the site's text.

import vamosdayShot from "./assets/projects/vamosday-full.jpg";
import shafisonsShot from "./assets/projects/shafisons-full.jpg";
import localcableShot from "./assets/projects/localcable-full.jpg";
import alboraShot from "./assets/projects/albora-full.jpg";
import certificateImg from "./assets/certs/wordpress-certificate.jpg";

export const profile = {
  name: "Muhammad Ansab",
  title: "AI Automation & Full Stack Developer",
  // Rotating words in the hero ("I build ___")
  roles: [
    "AI agents that reply to leads in seconds",
    "automations that kill manual work",
    "fast WordPress websites",
    "Laravel & React web apps",
  ],
  location: "Working with US, UK & EU clients",
  experience: "5+ Years",
  tagline:
    "I help businesses stop losing leads and hours. I build fast websites and web apps, then connect them to AI automations that reply, follow up, book and report on their own.",
};

// "Terminal" lines that type out in the hero, like an automation running live.
export const terminalRun = [
  { type: "cmd", text: "run lead-automation --client dental-clinic" },
  { type: "log", text: "› New lead captured from website form" },
  { type: "log", text: "› AI agent qualified lead: \"teeth whitening\"" },
  { type: "ok", text: "✓ SMS + email reply sent in 14s" },
  { type: "ok", text: "✓ Booking link sent · slot reserved Tue 10:30" },
  { type: "ok", text: "✓ Lead saved to CRM + Google Sheet" },
  { type: "muted", text: "// 0 minutes of manual work" },
];

export const services = [
  {
    icon: "bot",
    title: "AI Automation & Agents",
    text: "AI agents and workflows that answer new leads instantly, follow up, book appointments and update your CRM, 24/7.",
    points: [
      "Instant lead reply (form, missed call, DM)",
      "AI chat assistants for your website",
      "Follow-up & reminder sequences",
      "CRM, Google Sheets & email integrations",
    ],
  },
  {
    icon: "globe",
    title: "Websites that convert",
    text: "Fast, mobile-first WordPress websites built to turn visitors into calls, bookings and sales.",
    points: [
      "Custom WordPress themes & plugins",
      "WooCommerce stores",
      "Landing pages with lead capture",
      "Speed, security & SEO basics",
    ],
  },
  {
    icon: "code",
    title: "Custom Web Apps",
    text: "Laravel and React/Next.js applications built around how your business actually runs.",
    points: [
      "Dashboards & client portals",
      "Stripe subscriptions & payments",
      "REST APIs & third-party integrations",
      "Deployment on any hosting (cPanel, hPanel, VPS)",
    ],
  },
];

// The animated "how an automation works" flow.
export const flow = [
  { icon: "inbox", title: "Lead comes in", text: "Website form, missed call, Instagram or Facebook DM" },
  { icon: "bot", title: "AI qualifies", text: "Reads the message and understands what they need" },
  { icon: "send", title: "Instant reply", text: "Personal SMS or email in seconds, not hours" },
  { icon: "calendar", title: "Booked", text: "Booking link sent and the appointment lands in your calendar" },
  { icon: "chart", title: "Tracked", text: "Everything saved to your CRM or sheet, with follow-ups if they go quiet" },
];

export const industries = [
  { title: "Dental clinics", text: "Missed-call text-back, online booking, recall reminders and review requests." },
  { title: "Real estate agents", text: "Speed-to-lead replies, listing pages and open-house follow-ups." },
  { title: "Local service businesses", text: "Quote requests answered instantly and jobs booked without phone tag." },
];

export const about = {
  paragraphs: [
    "I'm a full stack developer with 5+ years of experience building websites and web applications for clients in the US and internationally. Today I focus on one thing: helping businesses get more from their website by connecting it to AI automation.",
    "On the web side I build custom WordPress themes, plugins and WooCommerce stores, and Laravel and React/Next.js applications: dashboards, Stripe subscriptions and REST APIs. On one production site I solved a major slowdown caused by 20,000+ unmanaged images with a custom cleanup plugin built from scratch.",
    "On the automation side I build AI agents and workflows that reply to leads, follow up, book appointments and keep records up to date, so owners spend their time on clients, not admin.",
  ],
};

export const skills = [
  {
    category: "AI Automation",
    icon: "bot",
    items: [
      "AI Agents & Chatbots",
      "Workflow Automation",
      "OpenAI / Claude APIs",
      "Lead Follow-up Systems",
      "Webhooks & API Integrations",
      "CRM & Google Sheets",
    ],
  },
  {
    category: "WordPress",
    icon: "globe",
    items: [
      "Custom Themes & Plugins",
      "WooCommerce",
      "Elementor",
      "Performance & Security",
      "Migrations & Bug Fixing",
    ],
  },
  {
    category: "Backend",
    icon: "server",
    items: ["Laravel", "PHP", "Node.js", "MySQL", "REST APIs", "HubSpot"],
  },
  {
    category: "Frontend",
    icon: "code",
    items: ["JavaScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  },
];

export const experience = [
  {
    role: "WordPress Developer",
    company: "Dream Warrior Group",
    meta: "US digital agency · Remote",
    period: "2026 — Present",
    current: true,
    points: [
      "Build, maintain and QA WordPress sites for US arts and performing-arts organizations, many hosted on WP Engine.",
      "Fixed a major slowdown on a site with 20,000+ images by building a custom cleanup plugin that keeps featured images safe.",
      "Handle PHP and WordPress upgrades on staging first, then live, with zero downtime for the client.",
    ],
  },
  {
    role: "Full Stack Developer (Laravel, WordPress & HubSpot)",
    company: "Coduko",
    meta: "Remote",
    period: "Mar 2024 — Dec 2025",
    points: [
      "Built and deployed a 3D room-design platform in Laravel where users design a virtual room and place 3D furniture models.",
      "Delivered major development work on a finance-focused web application.",
      "Worked across Laravel, WordPress and HubSpot projects for international clients.",
    ],
  },
  {
    role: "Laravel & WordPress Developer",
    company: "Trisage Solutions",
    meta: "US company · On-site",
    period: "2021 — Feb 2024",
    points: [
      "Built and deployed a complete web solution for a Nevada-based client, including a responsive Laravel UI.",
      "Optimized backend performance and database queries.",
      "Handled full WordPress and Laravel builds for the company's clients.",
    ],
  },
];

// "Why work with me" badges shown in the Experience section.
export const promises = [
  { title: "On-time delivery", text: "We agree on clear deadlines before we start, and I deliver on them. No chasing, no surprises." },
  { title: "Clear communication", text: "Regular updates in plain English, so you always know what's done and what's next." },
  { title: "Tested before launch", text: "Every page is checked on desktop, tablet and mobile before it goes live." },
  { title: "Support after launch", text: "Once your site is live I'm still here for fixes, changes and improvements." },
];

export const otherExperience = {
  title: "Freelance & personal projects",
  description:
    "Business websites for US small businesses, the Available Traders platform (Laravel, Stripe subscriptions, role-based dashboards), a \"Wanted\" Chrome extension for saving e-commerce products, and an advent-calendar game in JavaScript + Laravel.",
};

// aspectRatio = image height / image width — used to drive the hover-scroll preview.
export const projects = [
  {
    name: "VamosDay",
    type: "WordPress Booking Website",
    url: "https://vamosday.com/",
    description:
      "City tour and activity booking platform: search-and-book flow with filters, multi-city destination pages, dynamic pricing and testimonials.",
    tags: ["WordPress", "Booking Flow", "Multi-city"],
    image: vamosdayShot,
    aspectRatio: 3.356,
  },
  {
    name: "Shafi Sons Electronics",
    type: "WooCommerce Store",
    url: "https://shafisonselectronics.pk/",
    description:
      "E-commerce store built from scratch for an electronics retailer: full catalog across categories, discounts and a trending / top-sellers section.",
    tags: ["WooCommerce", "E-commerce", "PHP"],
    image: shafisonsShot,
    aspectRatio: 3.521,
  },
  {
    name: "Local Cable Provider",
    type: "Lead-Generation Website",
    url: "https://localcableprovider.com/",
    description:
      "Lead-gen site for a US internet & cable comparison service, with a ZIP-code availability checker, provider comparisons and lead-capture forms.",
    tags: ["Lead Gen", "WordPress", "US Market"],
    image: localcableShot,
    aspectRatio: 6.042,
  },
  {
    name: "Albora Finance",
    type: "Financial Services Website",
    url: "https://alborafinance.com/",
    description:
      "Site for a Spanish real-estate-backed lender, with a multi-step loan inquiry form, comparison tables and a bilingual Spanish/English structure.",
    tags: ["Bilingual", "FinTech", "WordPress"],
    image: alboraShot,
    aspectRatio: 5.593,
  },
];

export const certifications = [
  {
    name: "WordPress Expert Certification",
    issuer: "SkillCertify",
    date: "Issued January 2026",
    detail: "100% score — 10/10 questions correct, Hard difficulty",
    image: certificateImg,
  },
];

export const education = [
  {
    degree: "Bachelor of Science (BS), Computer Science",
    school: "Virtual University of Pakistan",
    period: "2021 — 2024",
  },
];

export const contact = {
  heading: "Let's automate the busywork.",
  body: "Need a website that brings in leads, or an AI automation that handles them for you? Tell me what you're working on and I'll reply within 24 hours.",
  email: "muhammadansab210@gmail.com",
  upwork: "https://www.upwork.com/freelancers/~01fddff895bc6d814a?viewMode=1",
  linkedin: "https://www.linkedin.com/in/muhammad-ansab-022120312/",
  // Web3Forms key — submissions land in the email above.
  web3formsAccessKey: "baf4148d-218e-4e5f-baa4-637147118960",
};
