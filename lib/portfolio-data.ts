export interface Service {
  icon: string
  title: string
  description: string
}

export interface EducationItem {
  title: string
  period: string
  description: string
}

export interface Skill {
  name: string
  level: number
}

export interface Project {
  title: string
  category: string | string[]
  image: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
}

export interface ProfileData {
  name: string
  title: string
  avatar: string
  email: string
  location: string
  social: {
    github: string
    linkedin: string
  }
}

export interface AboutData {
  aboutTitle: string
  doingTitle: string
  description: string[]
  services: Service[]
}

export interface ContactFormLabels {
  fullName: string
  emailAddress: string
  phone: string
  yourMessage: string
  namePlaceholder: string
  emailPlaceholder: string
  phonePlaceholder: string
  messagePlaceholder: string
  sendButton: string
}

export interface ResumeData {
  resumeTitle: string
  educationTitle: string
  experienceTitle: string
  skillsTitle: string
  education: EducationItem[]
  experience: EducationItem[]
  skills: Skill[]
}

export interface PortfolioData {
  portfolioTitle: string
  previewLabel: string
  visitLabel: string
  categories: string[]
  projects: Project[]
}

export interface ContactData {
  contactTitle: string
  emailLabel: string
  locationLabel: string
  formLabels: ContactFormLabels
  email: string
  location: string
}

export interface LanguageContent {
  profileData: ProfileData
  aboutData: AboutData
  resumeData: ResumeData
  portfolioData: PortfolioData
  contactData: ContactData
}

export const content: Record<'en' | 'pt', LanguageContent> = {
  en: {
    profileData: {
      name: 'Raul',
      title: 'Backend Developer',
      avatar: '/eu.jpg',
      email: 'raulawp460@gmail.com',
      location: 'Ceilândia, DF - Brazil',
      social: {
        github: 'https://github.com/Raul-guii',
        linkedin: 'https://www.linkedin.com/in/raul-guilherme-bezerra-da-silva-/',
      },
    },
    aboutData: {
      aboutTitle: 'About Me',
      doingTitle: "What I'm Doing",
      description: [
        "I'm a backend-focused developer based in Brasília, Brazil, currently completing a degree in Systems Analysis and Development (graduating December 2026). I specialize in building robust, scalable server-side systems — from API design to message-driven architectures.",
        "My main stack is Java and Spring Boot (Spring Security, JWT/OAuth2), with PostgreSQL and MySQL for persistence, RabbitMQ and Redis for asynchronous processing, and Docker/Kubernetes for deployment. I also work with Angular and TypeScript on the frontend when a project calls for it. I care about understanding the reasoning behind architectural decisions, not just implementing features — and I write and test iteratively rather than assuming a solution works.",
      ],
      services: [
        {
          icon: 'Zap',
          title: 'Backend Development',
          description: 'Building REST APIs and server-side systems with Java, Spring Boot, and Spring Security.',
        },
        {
          icon: 'Database',
          title: 'Data & Messaging',
          description: 'Designing schemas and async pipelines with PostgreSQL, MySQL, RabbitMQ, and Redis.',
        },
        {
          icon: 'Container',
          title: 'DevOps & Deployment',
          description: 'Containerizing and deploying services with Docker, Kubernetes, and CI/CD practices.',
        },
        {
          icon: 'Shield',
          title: 'Security',
          description: 'Implementing authentication and authorization with JWT, OAuth2, and Spring Security.',
        },
      ],
    },
    resumeData: {
      resumeTitle: 'Resume',
      educationTitle: 'Education',
      experienceTitle: 'Experience',
      skillsTitle: 'My Skills',
      education: [
        {
          title: 'Projeção TG — Systems Analysis and Development (ADS)',
          period: '— December 2026 (expected)',
          description:
            'Studying software engineering, systems design, and modern development practices, with a focus on backend architecture.',
        },
      ],
      experience: [],
      skills: [
        { name: 'Java / Spring Boot', level: 85 },
        { name: 'Spring Security / JWT / OAuth2', level: 80 },
        { name: 'PostgreSQL / MySQL', level: 80 },
        { name: 'Docker / Kubernetes', level: 70 },
        { name: 'Angular / TypeScript', level: 70 },
        { name: 'RabbitMQ / Redis', level: 70 },
      ],
    },
    portfolioData: {
      portfolioTitle: 'Portfolio',
      previewLabel: 'Preview',
      visitLabel: 'Visit',
      categories: ['all', 'backend', 'full-stack', 'course'],
      projects: [
        {
          title: 'E-commerce Hub',
          category: 'backend',
          image: '/ecommerce-painel.png',
          description: 'Multi-tenant B2B SaaS platform for e-commerce synchronization, with async processing and autoscaling.',
          tech: ['Java', 'Spring Boot', 'RabbitMQ', 'Redis', 'MySQL', 'Docker', 'Kubernetes'],
          liveUrl: '',
          githubUrl: 'https://github.com/Raul-guii/ecommerce-hub',
        },
        {
          title: 'SGF — Financial Management System',
          category: 'full-stack',
          image: '/dashboard.png',
          description: 'B2B SaaS financial management system with PIX payments via Mercado Pago. Final course project (TCC).',
          tech: ['Java', 'Spring Boot', 'Mercado Pago API', 'PostgreSQL'],
          liveUrl: '',
          githubUrl: 'https://github.com/Raul-guii/Financial-Management-System',
        },
        {
          title: 'GameList',
          category: 'full-stack',
          image: '/img1.png',
          description: 'Game cataloging application integrating the IGDB API.',
          tech: ['Java', 'Spring Boot', 'Angular', 'IGDB API'],
          liveUrl: '',
          githubUrl: 'https://github.com/Raul-guii/GameList',
        },
        {
          title: 'Button Security',
          category: 'backend',
          image: '/button.png',
          description: 'Security-focused project demonstrating OAuth2, JWT, and backend hardening practices.',
          tech: ['Java', 'Spring Boot', 'Spring Security', 'OAuth2', 'JWT'],
          liveUrl: '',
          githubUrl: 'https://github.com/Raul-guii/Button-Security',
        },
        {
          title: 'Order Food',
          category: 'course',
          image: '/order-food.png',
          description: 'order food plataform',
          tech: ['Java', 'Spring Boot', 'RabbitMQ', 'Redis', 'MySQL', 'Docker', 'Kubernetes'],
          liveUrl: '',
          githubUrl: 'https://github.com/Raul-guii/order-food',
        },
      ],
    },
    contactData: {
      contactTitle: 'Contact',
      emailLabel: 'Email',
      locationLabel: 'Location',
      formLabels: {
        fullName: 'Full Name',
        emailAddress: 'Email Address',
        phone: 'Phone',
        yourMessage: 'Your Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'you@example.com',
        phonePlaceholder: '+55 (61) 90000-0000',
        messagePlaceholder: 'Write your message here...',
        sendButton: 'Send Message',
      },
      email: 'raulawp460@gmail.com',
      location: 'Brasília, DF - Brazil',
    },
  },
  pt: {
    profileData: {
      name: 'Raul',
      title: 'Desenvolvedor Backend',
      avatar: '/eu.jpg',
      email: 'raulawp460@gmail.com',
      location: 'Ceilândia, DF - Brasil',
      social: {
        github: 'https://github.com/Raul-guii',
        linkedin: 'https://www.linkedin.com/in/raul-guilherme-bezerra-da-silva-/',
      },
    },
    aboutData: {
      aboutTitle: 'Sobre Mim',
      doingTitle: 'O que eu faço',
      description: [
        "Sou desenvolvedor com foco em backend, baseado em Brasília, atualmente concluindo o curso de Análise e Desenvolvimento de Sistemas (formatura em dezembro de 2026). Sou especializado em construir sistemas server-side robustos e escaláveis — desde o design de APIs até arquiteturas orientadas a mensagens.",
        "Minha stack principal é Java e Spring Boot (Spring Security, JWT/OAuth2), com PostgreSQL e MySQL para persistência, RabbitMQ e Redis para processamento assíncrono, e Docker/Kubernetes para deploy. Também trabalho com Angular e TypeScript no frontend quando o projeto exige. Gosto de entender o raciocínio por trás das decisões de arquitetura, não só implementar funcionalidades — e testo de forma iterativa em vez de assumir que uma solução funciona.",
      ],
      services: [
        {
          icon: 'Zap',
          title: 'Desenvolvimento Backend',
          description: 'Construção de APIs REST e sistemas server-side com Java, Spring Boot e Spring Security.',
        },
        {
          icon: 'Database',
          title: 'Dados & Mensageria',
          description: 'Design de schemas e pipelines assíncronos com PostgreSQL, MySQL, RabbitMQ e Redis.',
        },
        {
          icon: 'Container',
          title: 'DevOps & Deploy',
          description: 'Containerização e deploy de serviços com Docker, Kubernetes e práticas de CI/CD.',
        },
        {
          icon: 'Shield',
          title: 'Segurança',
          description: 'Implementação de autenticação e autorização com JWT, OAuth2 e Spring Security.',
        },
      ],
    },
    resumeData: {
      resumeTitle: 'Currículo',
      educationTitle: 'Formação',
      experienceTitle: 'Experiência',
      skillsTitle: 'Minhas Habilidades',
      education: [
        {
          title: 'Projeção TG — Análise e Desenvolvimento de Sistemas (ADS)',
          period: '— Dezembro de 2026 (previsto)',
          description:
            'Estudando engenharia de software, design de sistemas e práticas modernas de desenvolvimento, com foco em arquitetura backend.',
        },
      ],
      experience: [],
      skills: [
        { name: 'Java / Spring Boot', level: 85 },
        { name: 'Spring Security / JWT / OAuth2', level: 80 },
        { name: 'PostgreSQL / MySQL', level: 80 },
        { name: 'Docker / Kubernetes', level: 70 },
        { name: 'Angular / TypeScript', level: 70 },
        { name: 'RabbitMQ / Redis', level: 70 },
      ],
    },
    portfolioData: {
      portfolioTitle: 'Portfólio',
      previewLabel: 'Prévia',
      visitLabel: 'Visitar',
      categories: ['all', 'backend', 'full-stack'],
      projects: [
        {
          title: 'E-commerce Hub',
          category: 'backend',
          image: '/ecommerce-painel.png',
          description: 'Plataforma SaaS multi-tenant B2B para sincronização de e-commerce, com processamento assíncrono e autoscaling.',
          tech: ['Java', 'Spring Boot', 'RabbitMQ', 'Redis', 'MySQL', 'Docker', 'Kubernetes'],
          liveUrl: '',
          githubUrl: 'https://github.com/Raul-guii/ecommerce-hub',
        },
        {
          title: 'SGF — Sistema de Gestão Financeira',
          category: 'full-stack',
          image: '/dashboard.png',
          description: 'Sistema SaaS B2B de gestão financeira com pagamentos via PIX (Mercado Pago). Projeto final de curso (TCC).',
          tech: ['Java', 'Spring Boot', 'Mercado Pago API', 'PostgreSQL'],
          liveUrl: '',
          githubUrl: 'https://github.com/Raul-guii/Financial-Management-System',
        },
        {
          title: 'GameList',
          category: 'full-stack',
          image: '/img1.png',
          description: 'Aplicação de catalogação de jogos integrada à API do IGDB.',
          tech: ['Java', 'Spring Boot', 'Angular', 'IGDB API'],
          liveUrl: '',
          githubUrl: 'https://github.com/Raul-guii/GameList',
        },
        {
          title: 'Button Security',
          category: 'backend',
          image: '/button.png',
          description: 'Projeto com foco em segurança demonstrando OAuth2, JWT e boas práticas de hardening no backend.',
          tech: ['Java', 'Spring Boot', 'Spring Security', 'OAuth2', 'JWT'],
          liveUrl: '',
          githubUrl: 'https://github.com/Raul-guii/Button-Security',
        },
      ],
    },
    contactData: {
      contactTitle: 'Contato',
      emailLabel: 'Email',
      locationLabel: 'Localização',
      formLabels: {
        fullName: 'Nome Completo',
        emailAddress: 'Endereço de Email',
        phone: 'Telefone',
        yourMessage: 'Sua Mensagem',
        namePlaceholder: 'Seu nome',
        emailPlaceholder: 'voce@exemplo.com',
        phonePlaceholder: '+55 (61) 90000-0000',
        messagePlaceholder: 'Escreva sua mensagem aqui...',
        sendButton: 'Enviar Mensagem',
      },
      email: 'raulawp460@gmail.com',
      location: 'Brasília, DF - Brasil',
    },
  },
}

export type Language = keyof typeof content