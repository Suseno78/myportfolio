export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  link?: string;
  liveUrl?: string; // If set, "View Detail" redirects here instead of opening modal
  github?: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const siteConfig = {
  name: 'Cak Senz',
  fullName: 'Wahyu Hari Suseno',
  subtitle: 'Simple Name, Limitless Impact',
  bio: "Hey! I'm Wahyu Hari Suseno, but just call me Senz. I'm an 18-year-old developer who loves keeping things chill and simple. I'm passionate about coding, design, and building projects that actually matter. My vibe? Productive without the stress.",
  email: 'hello@caksenz.dev',
  location: 'Indonesia',
};

export const techStack: TechItem[] = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'PHP', icon: '🐘' },
  { name: 'Laravel', icon: '🔺' },
  { name: 'Next.js', icon: '▲' },
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Supabase', icon: '⚡' },
  { name: 'Git', icon: '📦' },
  { name: 'GitHub', icon: '🐱' },
  { name: 'Figma', icon: '🎯' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'SenzStore',
    description: 'Premium game top-up platform with cinematic animations, real-time transactions, and a seamless user experience.',
    image: '/projects/senzstore.png',
    tags: ['Next.js', 'GSAP', 'Tailwind', 'TypeScript'],
    features: [
      'Real-time transaction processing',
      'Multiple payment methods',
      'User-friendly dashboard',
      'Transaction history',
      'Responsive design',
    ],
    github: 'https://github.com/caksenz',
  },
  {
    id: 2,
    title: 'Kapribaden',
    description: 'Interactive digital aspiration platform with AI-powered chatbot integration.',
    image: '/projects/kapribaden.png',
    tags: ['Laravel', 'AI', 'Tailwind', 'MySQL'],
    features: [
      'AI-powered chatbot integration',
      'Digital aspiration tracking',
      'Interactive dashboard',
      'User management system',
      'Real-time notifications',
    ],
    liveUrl: 'https://kapribaden.vercel.app',
    github: 'https://github.com/caksenz',
  },
  {
    id: 3,
    title: 'Chatbot Konseling',
    description: 'AI-driven counseling chatbot for student mental health support and guidance.',
    image: '/projects/chatbot-konseling.png',
    tags: ['Laravel', 'Puter.js', 'AI'],
    features: [
      'AI-powered counseling responses',
      'Mental health assessment tools',
      'Session history tracking',
      'Anonymous mode support',
      'Emergency contact integration',
    ],
    github: 'https://github.com/caksenz',
  },
  {
    id: 4,
    title: 'Medicare',
    description: 'Healthcare management system with appointment scheduling and patient records.',
    image: '/projects/medicare.png',
    tags: ['Laravel', 'PHP', 'MySQL'],
    features: [
      'Appointment scheduling system',
      'Patient records management',
      'Doctor availability tracking',
      'Medical history storage',
      'Prescription management',
    ],
    liveUrl: 'https://medicare2.vercel.app/',
    github: 'https://github.com/Suseno78/medicare2.git',
  },
  {
    id: 5,
    title: 'Hotel Management',
    description: 'Complete hotel booking and management system with room, customer and booking handling.',
    image: '/projects/hotel-management.png',
    tags: ['Laravel', 'PHP', 'MySQL'],
    features: [
      'Room availability management',
      'Booking reservation system',
      'Customer database',
      'Payment processing',
      'Reporting dashboard',
    ],
    github: 'https://github.com/caksenz',
  },
  {
    id: 6,
    title: 'LifeHub',
    description: 'All-in-one productivity dashboard for daily task management and habit tracking.',
    image: '/projects/lifehub.png',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    features: [
      'Daily task management',
      'Habit tracking system',
      'Progress analytics',
      'Calendar integration',
      'Customizable dashboard',
    ],
    liveUrl: '#',
    github: 'https://github.com/caksenz',
  },
  {
    id: 7,
    title: 'Food Recipe App',
    description: 'Recipe discovery app with search, save, and personalized recipe recommendations.',
    image: '/projects/food-recipe.png',
    tags: ['React', 'API', 'Tailwind'],
    features: [
      'Recipe search engine',
      'Save favorite recipes',
      'Personalized recommendations',
      'Nutritional information',
      'Step-by-step instructions',
    ],
    github: 'https://github.com/caksenz',
  },
  {
    id: 8,
    title: 'Personal Portfolio',
    description: 'This very website — built with cutting-edge animations and premium design.',
    image: '/projects/portfolio.png',
    tags: ['Next.js', 'GSAP', 'Framer Motion'],
    features: [
      'Cutting-edge animations',
      'Interactive UI components',
      'Dark mode support',
      'Responsive design',
      'Performance optimized',
    ],
    github: 'https://github.com/caksenz',
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'Email', url: 'mailto:hello@caksenz.dev', icon: 'email' },
  { name: 'GitHub', url: 'https://github.com/caksenz', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/caksenz', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/caksenz', icon: 'instagram' },
];
