// All portfolio content lives here — edit this file to update the site's text.

import vamosdayShot from "./assets/projects/vamosday-full.jpg";
import shafisonsShot from "./assets/projects/shafisons-full.jpg";
import localcableShot from "./assets/projects/localcable-full.jpg";
import alboraShot from "./assets/projects/albora-full.jpg";
import certificateImg from "./assets/certs/wordpress-certificate.jpg";

export const profile = {
  name: "Muhammad Ansab",
  title: "Expert WordPress & Laravel Developer",
  subtitle: "Turning ideas into fast, secure, revenue-ready products",
  location: "Pakistan",
  experience: "5+ Years",
  tagline:
    "I build WordPress sites and Laravel applications that survive contact with real traffic, real content, and real deadlines.",
};

export const about = {
  paragraphs: [
    "I'm a WordPress and Laravel developer with 5+ years of experience building custom, high-performance websites and web applications for clients across the US and internationally.",
    "On WordPress, I go past basic customization. I build custom themes, plugins, and WooCommerce stores, and fix the performance and security problems that actually threaten a live site on one project, I resolved a major slowdown caused by 20,000+ unmanaged images by engineering a custom cleanup solution from scratch.",
    "On Laravel, I build web applications from the ground up: dashboards, Stripe-powered subscriptions, REST APIs, and custom platforms built around how a specific business actually operates.",
  ],
};

export const skills = [
  {
    category: "WordPress",
    items: [
      "Custom WordPress Themes",
      "WordPress Plugin Development",
      "WooCommerce",
      "Elementor",
      "WordPress Security",
      "WordPress Performance Optimization",
      "WordPress Migration",
      "WordPress Bug Fixing",
    ],
  },
  {
    category: "Backend",
    items: ["Laravel", "PHP", "MySQL", "REST APIs", "Node.js"],
  },
  {
    category: "Frontend",
    items: ["JavaScript", "React", "Next.js", "Vue.js"],
  },
];

export const experience = [
  {
    role: "Laravel & WordPress Developer",
    company: "Coduko",
    period: "March 2025 — April 2026",
    points: [
      "Worked remotely across both Laravel and WordPress projects.",
      "Built and deployed a 3D room-design platform allowing users to build a virtual room and upload/place 3D furniture models to design their space interactively.",
      "Delivered substantial development work on a finance-focused web application.",
    ],
  },
  {
    role: "WordPress Developer",
    company: "Dream Warrior Group",
    period: "December 2023 — March 2025",
    points: [
      "Diagnosed and fixed a major performance issue on a site carrying 20,000+ images.",
      "Built a custom plugin to safely clean up unused post images without breaking images used elsewhere as featured images.",
      "Built custom WordPress themes and plugins tailored to specific site requirements.",
    ],
  },
  {
    role: "Laravel & WordPress Developer",
    company: "Trisage Solutions",
    period: "October 2021 — November 2023",
    points: [
      "Worked on Laravel and WordPress projects for this US-based company, handling full web solutions for clients.",
      "Built and deployed a complete web solution for a Nevada-based client, including a responsive UI in Laravel.",
      "Optimized backend performance and database queries.",
    ],
  },
];

export const otherExperience = {
  title: "MERN Stack & Vue.js Development",
  description:
    "Alongside my main WordPress and Laravel work, I have also worked with the MERN stack (MongoDB, Express, React, Node.js) on select projects, and done hands-on work with Vue.js building dynamic frontend components.",
};

// aspectRatio = image height / image width — used to drive the hover-scroll preview.
export const projects = [
  {
    name: "VamosDay",
    type: "WordPress Booking Website",
    url: "https://vamosday.com/",
    description:
      "A complete WordPress build for a city tour and activity booking platform: a search-and-book flow with activity/duration filters, multi-city destination pages, dynamic pricing display, and testimonial sections.",
    tags: ["WordPress", "Booking Flow", "Multi-city"],
    image: vamosdayShot,
    aspectRatio: 3.356,
  },
  {
    name: "Shafi Sons Electronics",
    type: "WordPress WooCommerce Store",
    url: "https://shafisonselectronics.pk/",
    description:
      "A WooCommerce store built from scratch for an electronics retailer, with full product catalog management across multiple categories, category-based navigation, pricing/discount display, and a trending/top-sellers section.",
    tags: ["WooCommerce", "E-commerce", "PHP"],
    image: shafisonsShot,
    aspectRatio: 3.521,
  },
  {
    name: "Local Cable Provider",
    type: "WordPress Lead-Gen Website",
    url: "https://localcableprovider.com/",
    description:
      "A lead-generation site for a US-based internet & cable comparison service, featuring a ZIP code-based service availability checker, provider comparison sections, and lead-capture forms.",
    tags: ["Lead Gen", "WordPress", "US Market"],
    image: localcableShot,
    aspectRatio: 6.042,
  },
  {
    name: "Albora Finance",
    type: "WordPress Website — Spanish Financial Services",
    url: "https://alborafinance.com/",
    description:
      "A site for a Spanish real-estate-backed financing company, with a multi-step loan inquiry form, detailed conditions/comparison tables, and a bilingual Spanish/English structure.",
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
  heading: "Let's build something reliable.",
  body: "Open to WordPress and Laravel projects — from custom theme builds to full web applications. Tell me what you're working on and I'll get back to you.",
  email: "muhammadansab210@gmail.com",
  upwork: "https://www.upwork.com/freelancers/~01fddff895bc6d814a?viewMode=1",
  fiverr: "https://www.fiverr.com/muhammadansab02?public_mode=true",
  // Get a free access key at https://web3forms.com (takes 10 seconds, no signup —
  // just enter your email and they send you the key). Paste it below.
  // Submissions then land straight in muhammadansab210@gmail.com with no
  // database or backend involved.
  web3formsAccessKey: "baf4148d-218e-4e5f-baa4-637147118960",
};
