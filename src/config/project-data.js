
export const PROJECTS = [
  {
    id: 1,
    title: '3D Portfolio Showcase',
    description:
      'An interactive 3D portfolio website featuring GSAP animations, Three.js 3D models, and Framer Motion page transitions. Built with React, Vite, and Tailwind CSS. Optimized for performance with code splitting and lazy loading.',
    category: 'webgl',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    tags: ['React', 'Three.js', 'GSAP', 'Framer Motion', 'Vite', 'Tailwind CSS'],
    link: 'https://github.com',
    featured: true,
    year: 2024,
    details: {
      overview: 'A premium portfolio website showcasing advanced animation techniques and 3D graphics.',
      challenges: [
        'Optimizing 3D rendering for low-end devices',
        'Creating smooth scroll animations across all browsers',
        'Managing complex state with Redux',
      ],
      solutions: [
        'Implemented adaptive quality detection',
        'Used GSAP ScrollTrigger for scroll-based animations',
        'Organized Redux store with slices and selectors',
      ],
    },
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce platform with real-time inventory management, advanced filtering, and checkout. Features include product recommendations, wishlist functionality, and order tracking dashboard.',
    category: 'commerce',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=300&fit=crop',
    tags: ['React', 'Redux', 'Tailwind', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://github.com',
    featured: true,
    year: 2024,
    details: {
      overview: 'A complete e-commerce solution with modern UI and robust backend.',
      challenges: [
        'Handling complex product filtering',
        'Real-time inventory updates',
        'Payment processing integration',
      ],
      solutions: [
        'Built custom filtering algorithm',
        'Implemented WebSocket for real-time updates',
        'Integrated Stripe for secure payments',
      ],
    },
  },
  {
    id: 3,
    title: 'Animated Data Dashboard',
    description:
      'Real-time data visualization dashboard with animated charts, live metrics, and interactive reports. Built with D3.js and Chart.js for comprehensive data representation and analysis.',
    category: 'dashboard',
    image: 'https://images.unsplash.com/photo-1639762681033-6461854009de?w=500&h=300&fit=crop',
    tags: ['React', 'D3.js', 'Redux', 'Chart.js', 'WebSocket', 'Recharts'],
    link: 'https://github.com',
    featured: false,
    year: 2023,
    details: {
      overview: 'An enterprise-grade dashboard for real-time data monitoring.',
      challenges: [
        'Rendering thousands of data points efficiently',
        'Live data updates without lag',
        'Responsive charts on mobile',
      ],
      solutions: [
        'Used virtualization for large datasets',
        'Implemented WebSocket connections',
        'Mobile-optimized chart components',
      ],
    },
  },
  {
    id: 4,
    title: 'Motion Design System',
    description:
      'Comprehensive design system with 100+ animated components, interactive documentation, and Storybook integration. Built with React, Framer Motion, and TypeScript for maximum reusability.',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    tags: ['React', 'Storybook', 'Framer Motion', 'TypeScript', 'Tailwind', 'Jest'],
    link: 'https://github.com',
    featured: true,
    year: 2023,
    details: {
      overview: 'A component library with detailed documentation and playground.',
      challenges: [
        'Maintaining consistency across 100+ components',
        'Documenting animation properties',
        'Testing interactive components',
      ],
      solutions: [
        'Built Storybook with interactive controls',
        'Created animation documentation',
        'Implemented visual regression testing',
      ],
    },
  },
  {
    id: 5,
    title: 'VR Experience Platform',
    description:
      'Immersive WebXR platform for creating and experiencing virtual environments. Supports VR headsets and 3D interactions. Built with Babylon.js and WebXR API for cross-platform compatibility.',
    category: 'webgl',
    image: 'https://images.unsplash.com/photo-1622979135225-cc75192d6c91?w=500&h=300&fit=crop',
    tags: ['WebXR', 'Babylon.js', 'React', 'WebGL', 'Three.js', 'Node.js'],
    link: 'https://github.com',
    featured: true,
    year: 2023,
    details: {
      overview: 'A platform for creating and sharing VR experiences in the browser.',
      challenges: [
        'WebXR browser compatibility',
        'Optimization for VR performance',
        'Gesture and voice interaction',
      ],
      solutions: [
        'Implemented fallback for non-VR devices',
        'Used Babylon.js for superior VR support',
        'Integrated voice recognition API',
      ],
    },
  },
  {
    id: 6,
    title: 'Social Media App',
    description:
      'Full-stack social platform with real-time messaging, user profiles, feed algorithms, and media sharing. Features include notifications, trending topics, and user recommendations engine.',
    category: 'commerce',
    image: 'https://images.unsplash.com/photo-1611925591563-430f63602d4a?w=500&h=300&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux', 'Cloudinary'],
    link: 'https://github.com',
    featured: true,
    year: 2023,
    details: {
      overview: 'A complete social media platform with real-time features.',
      challenges: [
        'Real-time messaging and notifications',
        'Scalable database design',
        'Media optimization and storage',
      ],
      solutions: [
        'Used Socket.io for real-time communication',
        'Implemented MongoDB sharding',
        'Integrated Cloudinary for media management',
      ],
    },
  },
  {
    id: 7,
    title: 'AI Content Generator',
    description:
      'Web application powered by GPT-4 API for generating blog posts, social media content, and marketing copy. Features batch generation, templates, and export functionality.',
    category: 'dashboard',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    tags: ['React', 'OpenAI API', 'TypeScript', 'Tailwind', 'Redux', 'Express'],
    link: 'https://github.com',
    featured: false,
    year: 2024,
    details: {
      overview: 'AI-powered content creation tool for marketing teams.',
      challenges: [
        'API rate limiting',
        'Content quality control',
        'Real-time generation streaming',
      ],
      solutions: [
        'Implemented request queuing system',
        'Built content moderation filters',
        'Used streaming for real-time output',
      ],
    },
  },
  {
    id: 8,
    title: 'Interactive Learning Platform',
    description:
      'Educational platform with interactive courses, quizzes, and progress tracking. Built with React, includes video integration, code execution environment, and certificate generation.',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'ffmpeg', 'WebSocket', 'Stripe'],
    link: 'https://github.com',
    featured: false,
    year: 2023,
    details: {
      overview: 'Comprehensive learning platform with interactive features.',
      challenges: [
        'Video transcoding at scale',
        'Code execution sandbox',
        'Progress tracking and analytics',
      ],
      solutions: [
        'Used ffmpeg for video processing',
        'Implemented Docker for code execution',
        'Built custom analytics engine',
      ],
    },
  },
]

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'webgl', label: '3D & WebGL' },
  { id: 'commerce', label: 'E-Commerce & Apps' },
  { id: 'dashboard', label: 'Dashboards' },
  { id: 'design', label: 'Design Systems' },
]

export const getFeaturedProjects = () => {
  return PROJECTS.filter((project) => project.featured).slice(0, 3)
}

export const getProjectsByCategory = (category) => {
  if (category === 'all') return PROJECTS
  return PROJECTS.filter((project) => project.category === category)
}

// Search projects
export const searchProjects = (query) => {
  const lowerQuery = query.toLowerCase()
  return PROJECTS.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  )
}

// Get project by ID
export const getProjectById = (id) => {
  return PROJECTS.find((project) => project.id === id)
}

// Sort projects by date
export const sortProjectsByDate = (sortOrder = 'desc') => {
  return [...PROJECTS].sort((a, b) => {
    const comparison = b.year - a.year
    return sortOrder === 'asc' ? -comparison : comparison
  })
}