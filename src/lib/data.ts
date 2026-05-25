export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  link?: string; // Used for the "Demo" button
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
  email: 'wharisuseno2007@gmail.com',
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
    description: 'A premium and dynamic game top-up platform built with a robust Laravel backend and a fast Next.js frontend. It features seamless GSAP animations, offering users a cinematic and highly interactive transaction experience.',
    image: '/projects/store.png',
    tags: ['Laravel', 'TypeScript', 'Next.js', 'Tailwind', 'GSAP'],
    features: [
      'Real-time transaction processing',
      'Multiple payment methods',
      'User-friendly dashboard',
      'Transaction history',
      'Responsive design',
    ],
    github: 'https://github.com/Suseno78/store.git',
  },
  {
    id: 2,
    title: 'Kapribaden',
    description: 'A professional, tailor-made digital aspiration platform developed exclusively for a client. Powered by Next.js and TypeScript, it features a sleek and responsive interface built with Tailwind CSS to handle user feedback and aspirations interactively.',
    image: '/projects/kapribadenn.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    features: [
      'AI-powered chatbot integration',
      'Digital aspiration tracking',
      'Interactive dashboard',
      'User management system',
      'Real-time notifications',
    ],
    link: 'https://kapribaden.vercel.app',
    github: 'https://github.com/Suseno78/kapribaden.git',
  },
  {
    id: 3,
    title: 'Chatbot Konseling',
    description: 'A special project developed specifically for a school festival. This AI-driven counseling chatbot provides mental health support and guidance for students, integrating the Telegram API and n8n workflows with a solid Laravel backend.',
    image: '/projects/n8n.png',
    tags: ['MySQL', 'Laravel', 'n8n', 'Telegram API', 'AI', 'Blade'],
    features: [
      'AI-powered counseling responses',
      'Mental health assessment tools',
      'Session history tracking',
      'Anonymous mode support',
      'Emergency contact integration',
    ],
    github: 'https://github.com/Suseno78/chatbot-n8n.git',
  },
  {
    id: 4,
    title: 'Medicare',
    description: 'A comprehensive healthcare management system designed for appointment scheduling and patient record keeping. It was built from scratch using raw HTML, CSS, JavaScript, and Bootstrap to ensure a responsive and accessible interface.',
    image: '/projects/medicaree.png',
    tags: ['JSON', 'JavaScript', 'HTML', 'Bootstrap', 'CSS'],
    features: [
      'Appointment scheduling system',
      'Patient records management',
      'Doctor availability tracking',
      'Medical history storage',
      'Prescription management',
    ],
    link: 'https://medicare2.vercel.app/',
    github: 'https://github.com/Suseno78/medicare2.git',
  },
  {
    id: 5,
    title: 'Hotel Management',
    description: 'A dynamic, full-featured hotel booking and management application. Developed entirely with PHP Native and a MySQL database, it efficiently handles room availability, reservations, and customer data administration.',
    image: '/projects/hotel.png',
    tags: ['MySQL', 'PHP Native', 'JavaScript', 'Bootstrap', 'CSS'],
    features: [
      'Room availability management',
      'Booking reservation system',
      'Customer database',
      'Payment processing',
      'Reporting dashboard',
    ],
    github: 'https://github.com/Suseno78/hotel.git',
  },
  {
    id: 6,
    title: 'LifeHub',
    description: 'An all-in-one productivity dashboard tailored for daily task management and habit tracking. Built with HTML, CSS, and Bootstrap, it provides a clean, responsive interface to help users stay organized and focused.',
    image: '/projects/lifehubb.png',
    tags: ['JSON', 'JavaScript', 'HTML', 'Bootstrap', 'CSS'],
    features: [
      'Daily task management',
      'Habit tracking system',
      'Progress analytics',
      'Calendar integration',
      'Customizable dashboard',
    ],
    link: '',
  },
  {
    id: 7,
    title: 'Food Recipe App',
    description: 'A dynamic recipe discovery application that allows users to search, explore, and save their favorite culinary creations. It is powered by PHP Native and MySQL, offering a smooth data-driven experience.',
    image: '/projects/resep.png',
    tags: ['MySQL', 'PHP Native', 'JavaScript', 'Bootstrap', 'CSS'],
    features: [
      'Recipe search engine',
      'Save favorite recipes',
      'Personalized recommendations',
      'Nutritional information',
      'Step-by-step instructions',
    ],
    github: 'https://github.com/Suseno78/resep_makanan.git',
  },
  {
    id: 8,
    title: 'Personal Portfolio',
    description: 'This very portfolio website, showcasing premium design aesthetics and highly interactive user interfaces. It is crafted with Next.js, TypeScript, and cutting-edge animation libraries like Framer Motion to deliver a stunning visual experience.',
    image: '/projects/portfolioo.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'GSAP'],
    features: [
      'Cutting-edge animations',
      'Interactive UI components',
      'Dark mode support',
      'Responsive design',
      'Performance optimized',
    ],
    github: 'https://github.com/Suseno78/myportfolio.git',
  },

  {
    id: 9,
    title: 'Aspirasi Siswa',
    description: 'A secure and efficient student aspiration and feedback platform. It leverages the Laravel ecosystem, including Blade templating and JavaScript, to provide a seamless submission and tracking workflow for students and administrators.',
    image: '/projects/aspirasi.png',
    tags: ['MySQL', 'Laravel', 'Javascript', 'Blade'],
    features: [
      'Aspiration submission form',
      'Real-time status tracking',
      'Admin dashboard for management',
      'User authentication',
      'Email notifications',
    ],
    github: 'https://github.com/Suseno78/aspirasi.git',
  },
];

export const socialLinks: SocialLink[] = [
  { name: 'Email', url: 'mailto:wharisuseno2007@gmail.com', icon: 'email' },
  { name: 'GitHub', url: 'https://github.com/Suseno78', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/caksenz', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/cak_senzzz', icon: 'instagram' },
];

// Journey Timeline
export interface JourneyItem {
  year: string;
  grade: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  icon: string;
}

export const journeyTimeline: JourneyItem[] = [
  {
    year: '2023',
    grade: 'Grade 10',
    title: 'First Steps Into Programming',
    description:
      'Started my programming journey by learning the fundamentals of web development. I built simple web pages and explored how websites work behind the scenes.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Built my first static websites',
      'Learned responsive layouts',
      'Understood web fundamentals',
      'Developed logical thinking through coding',
    ],
    icon: '🚀',
  },
  {
    year: '2024',
    grade: 'Grade 11',
    title: 'Exploring Backend Development',
    description:
      'Expanded my skills into backend development and modern development workflows. Learned how databases, version control systems, and utility-first CSS frameworks improve real-world applications.',
    technologies: ['PHP', 'MySQL', 'Git', 'GitHub', 'Tailwind CSS'],
    highlights: [
      'Built dynamic web applications',
      'Designed relational databases',
      'Managed projects using Git and GitHub',
      'Improved UI development using Tailwind CSS',
    ],
    icon: '⚡',
  },
  {
    year: '2024',
    grade: 'Internship',
    title: 'Professional Internship Experience',
    description:
      'Completed a six-month internship program across two government institutions in Tuban, gaining practical experience in web development, administration, and digital data management.',
    technologies: ['PHP', 'MySQL', 'Microsoft Office'],
    highlights: [
      'Worked on real-world projects',
      'Improved communication and teamwork skills',
      'Learned professional workflows',
      'Applied technical skills in practical environments',
    ],
    icon: '💼',
  },
  {
    year: '2025',
    grade: 'Grade 12',
    title: 'Building Modern Applications',
    description:
      'Focused on modern frontend and full-stack development technologies. Learned component-based architecture, UI/UX design principles, automation workflows, and scalable web application development.',
    technologies: ['React', 'TypeScript', 'Laravel', 'Supabase', 'Figma', 'Next.js', 'n8n'],
    highlights: [
      'Developed interactive web applications',
      'Improved TypeScript proficiency',
      'Built full-stack projects using modern tools',
      'Designed interfaces using Figma',
      'Explored workflow automation with n8n',
    ],
    icon: '✨',
  },
];

// Internship Experience
export interface InternshipItem {
  institution: string;
  position: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  icon: string;
  certification?: {
    title: string;
    description: string;
    image: string;
  };
}

export const internshipExperience: InternshipItem[] = [
  {
    institution: 'DISKOMINFO Tuban',
    position: 'Web Developer Intern',
    duration: '3 Months',
    description:
      'Contributed to web development projects at the Communication and Information Agency of Tuban, building functional web applications from scratch.',
    responsibilities: [
      'Developed websites using native PHP',
      'Worked on Hotel Management System development',
      'Worked on Food Recipe Website development',
      'Implemented CRUD functionality',
      'Designed database structures',
      'Built user interface components',
      'Assisted in testing and implementation',
    ],
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    icon: '🏛️',
    certification: {
      title: 'Internship Completion Certificate',
      description: 'Successfully completed a three-month internship program at Diskominfo Tuban as a Web Developer Intern, contributing to website development projects and gaining practical experience in software development workflows.',
      image: '/Sertifikat.jpg'
    }
  },
  {
    institution: 'DISKOPUMDAG Tuban',
    position: 'Data Entry & Administrative Support Intern',
    duration: '3 Months',
    description:
      'Supported administrative operations at the Trade and Industry Agency of Tuban, handling structured data entry and document management.',
    responsibilities: [
      'Performed data entry using Microsoft Word and Excel',
      'Organized administrative records',
      'Updated data accurately',
      'Managed documentation',
      'Assisted administrative workflows',
      'Supported daily office operations',
    ],
    technologies: ['Microsoft Word', 'Microsoft Excel', 'Data Management', 'Administrative Documentation'],
    icon: '📊',
  },
];
