export const personalInfo = {
  name: 'Nhat Minh',
  role: 'Full Stack Developer',
  tagline: 'Java • React • Python • Fastapi',
  avatar: null,
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/MinhCreator',
    linkedin: '',
    facebook: '',
    telegram: '',
    email: 'mailto:',
  },
}

export const aboutData = {
  intro: 'Passionate Full Stack Developer with 5+ years of experience building scalable web applications. I specialize in Java, Spring Boot, and React, creating seamless digital experiences that drive business growth.',
  story: 'My journey in tech started with curiosity about how websites work. Today, I architect full-stack solutions that serve millions of users. I believe in writing clean, maintainable code and building products that make a difference.',
  focus: 'Currently focused on cloud-native development, microservices architecture, and AI-powered applications. Always exploring new technologies to stay at the cutting edge.',
  stats: [
    { label: 'Years Experience', value: 2 },
    { label: 'Projects Completed', value: 50 },
    { label: 'Technologies Learned', value: 20 },
  ],
}

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Material UI', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Java', level: 82 },
      // { name: 'Spring Boot', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 82 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', level: 60 },
      { name: 'PostgreSQL', level: 60 },
      { name: 'MongoDB', level: 60 },
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Docker', level: 82 },
      { name: 'Linux', level: 85 },
      // { name: 'Nginx', level: 75 },
      { name: 'GitHub Actions', level: 80 },
    ],
  },
]

export const projectsData = [
  {
    id: 1,
    title: 'Chat Application',
    description: 'Real-time messaging platform with WebSocket support, file sharing, and end-to-end encryption. Built with microservices architecture.',
    image: null,
    tech: ['React', 'Spring Boot', 'WebSocket', 'MongoDB'],
    github: 'https://github.com/johndoe/chat-app',
    demo: 'https://chat-app.example.com',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution with payment processing, inventory management, and admin dashboard.',
    image: null,
    tech: ['Next.js', 'Java', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/johndoe/ecommerce',
    demo: 'https://ecommerce.example.com',
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'Kanban-style project management tool with real-time collaboration, drag-and-drop, and analytics.',
    image: null,
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/johndoe/task-manager',
    demo: 'https://tasks.example.com',
    category: 'fullstack',
  },
  {
    id: 4,
    title: 'AI Assistant Platform',
    description: 'AI-powered virtual assistant with natural language processing, voice recognition, and automated workflows.',
    image: null,
    tech: ['Python', 'React', 'TensorFlow', 'Docker'],
    github: 'https://github.com/johndoe/ai-assistant',
    demo: 'https://ai.example.com',
    category: 'ai',
  },
]

export const experienceData = [
  {
    id: 1,
    company: 'Tech Corp',
    position: 'Senior Full Stack Developer',
    duration: '2023 - Present',
    description: 'Lead development of microservices architecture serving 2M+ users. Mentored junior developers and implemented CI/CD pipelines.',
  },
  {
    id: 2,
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    duration: '2021 - 2023',
    description: 'Built and deployed scalable web applications using React, Spring Boot, and AWS. Optimized database queries reducing response time by 40%.',
  },
  {
    id: 3,
    company: 'WebAgency Pro',
    position: 'Junior Developer',
    duration: '2020 - 2021',
    description: 'Developed responsive websites and RESTful APIs. Collaborated with design team to implement pixel-perfect UI components.',
  },
  {
    id: 4,
    company: 'CodeCamp Inc.',
    position: 'Intern',
    duration: '2019 - 2020',
    description: 'Assisted in building internal tools and learned industry best practices. Contributed to open-source projects.',
  },
]

export const educationData = [
  {
    id: 1,
    university: 'Stanford University',
    degree: 'M.S. Computer Science',
    year: '2019',
    gpa: '3.9',
  },
  {
    id: 2,
    university: 'UC Berkeley',
    degree: 'B.S. Computer Science',
    year: '2017',
    gpa: '3.8',
  },
]

export const certifications = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon', year: '2023' },
  { name: 'Oracle Certified Java Developer', issuer: 'Oracle', year: '2022' },
  { name: 'Google Cloud Professional', issuer: 'Google', year: '2021' },
]

export const servicesData = [
  {
    icon: 'Globe',
    title: 'Web Development',
    description: 'Responsive, performant web applications using modern frameworks and best practices.',
  },
  {
    icon: 'Server',
    title: 'Backend APIs',
    description: 'Scalable RESTful and GraphQL APIs with microservices architecture.',
  },
  {
    icon: 'Database',
    title: 'Database Design',
    description: 'Efficient database schemas optimized for performance and scalability.',
  },
  {
    icon: 'Palette',
    title: 'UI/UX Development',
    description: 'Beautiful, accessible interfaces with smooth animations and interactions.',
  },
  {
    icon: 'Cloud',
    title: 'Cloud Deployment',
    description: 'CI/CD pipelines, containerization, and cloud infrastructure management.',
  },
]

export const statisticsData = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Happy Clients', value: 30, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
]

export const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CTO, TechStartup',
    avatar: null,
    review: 'John is an exceptional developer who delivered our platform ahead of schedule. His expertise in full-stack development is unmatched.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Product Manager, WebAgency',
    avatar: null,
    review: 'Working with John was a pleasure. He writes clean code and always considers the bigger picture. Highly recommended!',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'CEO, DigitalSolutions',
    avatar: null,
    review: 'John transformed our outdated system into a modern, scalable platform. Our users love the new experience.',
  },
]

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]
