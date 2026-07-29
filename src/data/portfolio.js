import photoAI from '../assets/images/portfolio_ai.png';
import photoB from '../assets/images/photoB.jpg';
import photoDesign from '../assets/images/photo_design.png';
import photoC from '../assets/images/photoC.jpg';
import photoApp from '../assets/images/photo_app.png';
import photoD from '../assets/images/photoD.jpg';
import photoBranding from '../assets/images/portfolio_branding.png';
import photoTeam from '../assets/images/team_photo.png';

export const portfolioItems = [
  {
    id: 1,
    title: 'TechVision AI Platform',
    category: 'development',
    tags: ['Web Development', 'AI/ML'],
    image: photoAI,
    size: 'large',
  },
  {
    id: 2,
    title: 'Harvest Brand Identity',
    category: 'branding',
    tags: ['Branding', 'Photography'],
    image: photoB,
    size: 'medium',
  },
  {
    id: 3,
    title: 'Lumino Design System',
    category: 'design',
    tags: ['Design', 'UI/UX'],
    image: photoDesign,
    size: 'medium',
  },
  {
    id: 4,
    title: 'FlowApp Mobile UI',
    category: 'development',
    tags: ['App Design', 'Development'],
    image: photoC,
    size: 'medium',
  },
  {
    id: 5,
    title: 'Spectrum Marketing Campaign',
    category: 'marketing',
    tags: ['Content', 'Marketing'],
    image: photoD,
    size: 'medium',
  },
  {
    id: 6,
    title: 'Vortex Brand Agency',
    category: 'branding',
    tags: ['Branding', 'Creative'],
    image: photoBranding,
    size: 'medium',
  },
  {
    id: 7,
    title: 'NextGen Mobile Experience',
    category: 'development',
    tags: ['App Design', 'React Native'],
    image: photoApp,
    size: 'medium',
  },
  {
    id: 8,
    title: 'Synergy Agency Culture',
    category: 'content',
    tags: ['Team', 'Creative'],
    image: photoTeam,
    size: 'medium',
  },
];

export const portfolioFilters = ['ALL', 'DESIGN', 'DEVELOPMENT', 'BRANDING', 'CONTENT', 'MARKETING', 'SEO'];

