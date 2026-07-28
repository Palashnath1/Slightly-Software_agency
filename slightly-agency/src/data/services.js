import { Code, Search, Palette, PenTool, Share2, BarChart2, Globe } from 'lucide-react'

export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortTitle: 'Development',
    icon: Code,
    color: '#e91e8c',
    description: 'We build fast, scalable, and beautiful web applications using modern technologies like React, Next.js, and Node.js.',
    longDescription: `Our web development team crafts high-performance digital experiences that drive business results. From complex SaaS platforms to polished landing pages, we deliver code that scales.`,
    features: ['React / Next.js', 'Node.js APIs', 'Database Architecture', 'Cloud Deployment', 'Performance Optimization', 'PWA Development'],
    stats: { projects: 120, clients: 85, satisfaction: 98 },
    caseStudies: [
      { title: 'TechVision Platform', result: '3x faster load time, 40% more conversions' },
      { title: 'E-commerce Rebuild', result: '$2M additional revenue in first quarter' },
    ],
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    shortTitle: 'SEO',
    icon: Search,
    color: '#7b2d9e',
    description: 'Data-driven SEO strategies that drive organic growth, improve rankings, and build lasting authority in your niche.',
    longDescription: `Our SEO specialists combine technical expertise with content strategy to improve your search visibility and drive qualified organic traffic that converts.`,
    features: ['Technical SEO Audit', 'Keyword Research', 'On-Page Optimization', 'Link Building', 'Local SEO', 'Analytics & Reporting'],
    stats: { projects: 95, clients: 70, satisfaction: 96 },
    caseStudies: [
      { title: 'E-commerce SEO', result: '280% organic traffic increase in 6 months' },
      { title: 'Local Business SEO', result: '#1 ranking for 50+ local keywords' },
    ],
  },
  {
    id: 'branding',
    title: 'Brand Strategy',
    shortTitle: 'Branding',
    icon: Palette,
    color: '#c2185b',
    description: 'Comprehensive brand identity design that creates memorable, distinctive, and emotionally resonant brand experiences.',
    longDescription: `We create brand identities that stand the test of time. From logo design to full brand systems, we help businesses communicate their values visually and verbally.`,
    features: ['Logo Design', 'Visual Identity System', 'Brand Guidelines', 'Color & Typography', 'Brand Voice', 'Packaging Design'],
    stats: { projects: 150, clients: 110, satisfaction: 99 },
    caseStudies: [
      { title: 'Harvest Brand Rebrand', result: '45% increase in brand recognition' },
      { title: 'Luxury Product Launch', result: 'Sold out in 48 hours post-launch' },
    ],
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    shortTitle: 'Content',
    icon: PenTool,
    color: '#ffd700',
    description: 'Strategic content that attracts, engages, and converts your target audience across every digital touchpoint.',
    longDescription: `Our content team creates compelling narratives that position your brand as an industry leader. From blog content to video scripts, we craft content that resonates.`,
    features: ['Content Strategy', 'Blog Writing', 'Video Scripts', 'Email Campaigns', 'Infographics', 'Content Calendar'],
    stats: { projects: 200, clients: 130, satisfaction: 97 },
    caseStudies: [
      { title: 'B2B Content Campaign', result: '5x lead generation increase' },
      { title: 'YouTube Channel Growth', result: '500K subscribers in 12 months' },
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media',
    shortTitle: 'Social',
    icon: Share2,
    color: '#e91e8c',
    description: 'Engaging social media strategies and content that build communities and drive measurable business growth.',
    longDescription: `We manage your social media presence across all platforms, creating content that sparks conversations and builds loyal brand communities.`,
    features: ['Social Strategy', 'Content Creation', 'Community Management', 'Paid Social Ads', 'Influencer Partnerships', 'Analytics'],
    stats: { projects: 180, clients: 120, satisfaction: 95 },
    caseStudies: [
      { title: 'Fashion Brand Launch', result: '100K Instagram followers in 90 days' },
      { title: 'B2B LinkedIn Campaign', result: '300% increase in lead quality' },
    ],
  },
]

export const serviceFeatures = [
  {
    icon: '🎨',
    title: 'Creative Approach',
    percentage: 95,
    description: 'We blend creative excellence with strategic thinking to deliver solutions that look stunning and perform brilliantly.',
    color: '#e91e8c',
  },
  {
    icon: '👥',
    title: 'Team-Based Success',
    percentage: 92,
    description: 'Our cross-functional teams collaborate closely with your stakeholders to ensure every deliverable exceeds expectations.',
    color: '#7b2d9e',
  },
  {
    icon: '📊',
    title: 'Brand Strategy',
    percentage: 88,
    description: 'We develop comprehensive brand strategies grounded in market research and competitive analysis for lasting impact.',
    color: '#ffd700',
  },
]
