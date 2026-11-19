export const en = {
  meta: {
    title: 'Kirill Ryzhkov -- Web Developer & Designer',
  },
  nav: {
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    certificates: 'Certificates',
    contact: 'Contact',
  },
  hero: {
    heading: "Hi, i'm kirill",
    tagline:
      'a web developer & designer driven by crafting striking and unforgettable projects',
    contactBtn: 'Contact Me',
  },
  about: {
    heading: 'About me',
    text: "With hands-on experience in web development, Python, Django, JavaScript, and UI/UX design, I build clean, reliable digital products and solve real business tasks. From 1C support to full-stack web apps — let's build something incredible together!",
  },
  services: {
    heading: 'Services',
    items: [
      {
        number: '01',
        name: 'Web Development',
        description:
          'Full-stack web applications on Python, Django, and JavaScript with REST APIs, authentication, databases, and responsive interfaces.',
      },
      {
        number: '02',
        name: 'UI/UX & Web Design',
        description:
          'Clean, modern, conversion-focused interfaces and design systems crafted in Figma, Canva, and CorelDRAW with attention to typography.',
      },
      {
        number: '03',
        name: 'E-Commerce & Content',
        description:
          'Building online stores, structured product catalogs, promotional banners, and storefront layouts tailored for real business needs.',
      },
      {
        number: '04',
        name: 'Bots & Automation',
        description:
          'Custom Telegram bots, Python scripts, and workflow automation tools that save time and streamline daily operations.',
      },
      {
        number: '05',
        name: '1C & IT Support',
        description:
          '1C:Enterprise user consulting, software setup, system administration, and clear video or PDF documentation for teams.',
      },
    ],
  },
  projects: {
    heading: 'Projects',
    liveBtn: 'Live Project',
    items: [
      {
        id: 'diary',
        name: 'Electronic Diary System',
        category: 'Diploma / Full-Stack',
        summary:
          'Comprehensive academic platform on Django & DRF with JWT authentication, Swagger API docs, role-based dashboards (Admin, Teacher, Student), schedule, attendance, grading, dark/light themes, and RU/EN/KK localization.',
      },
      {
        id: 'marketplace',
        name: 'Student Marketplace',
        category: 'Web App / Django',
        summary:
          'Peer-to-peer services marketplace for college students featuring catalog search, filters, favorites, order lifecycle tracking, reviews & ratings, direct messaging, notifications, and an analytics admin panel.',
      },
      {
        id: 'steelshop',
        name: 'SteelShop.kz',
        category: 'Commercial / E-Commerce',
        summary:
          'Commercial PC hardware & peripherals storefront with dedicated category pages (GPUs, CPUs, keyboards, chairs, cases, cooling), custom video showcases, SSL deployment, and responsive UI.',
      },
      {
        id: 'animeshka',
        name: 'Animeshka Portal',
        category: 'Node.js / Full-Stack',
        summary:
          'Full-stack anime catalog web application built with Node.js, Express, Handlebars, and SQLite featuring dynamic pages, detail views, admin management, and API routes.',
      },
      {
        id: 'assen',
        name: 'Assen KZ Brand & Content',
        category: 'Commercial / Graphic Design',
        summary:
          'E-commerce visual design and content production for Assen KZ: mobile promotional banners, brand showcase graphics, and structured product cards.',
      },
      {
        id: 'spotik',
        name: 'TG Spotik Bot',
        category: 'Python / Telegram & Spotify API',
        summary:
          'Telegram bot integrated with Spotify Web API (Spotipy) and SQLite: top-10 playlist tracks, live track & artist search, album tracklists, artist profiles, and user query logging.',
      },
    ],
  },
  certificates: {
    heading: 'Certificates',
    subtitle: 'Verified courses, technical training, and 1C certification.',
    filters: {
      all: 'All',
      frontend: 'Frontend & Web',
      backend: 'Java & CS',
      onec: '1C:Enterprise',
    },
    viewFull: 'View full',
    credentialBadge: 'Official Credential',
    items: [
      {
        id: 'frontend-extra',
        title: 'Frontend Development (Extended)',
        issuer: 'Programming School',
        year: '2022',
        category: 'frontend',
      },
      {
        id: 'frontend-advanced',
        title: 'Frontend Development (Advanced)',
        issuer: 'Programming School',
        year: '2022',
        category: 'frontend',
      },
      {
        id: 'frontend-basic',
        title: 'Frontend Development (Basic)',
        issuer: 'Programming School',
        year: '2022',
        category: 'frontend',
      },
      {
        id: 'coursera-web',
        title: 'Web Development Specialization',
        issuer: 'Coursera',
        year: '2026',
        category: 'frontend',
      },
      {
        id: 'coursera-java',
        title: 'Java Programming Fundamentals',
        issuer: 'Coursera',
        year: '2026',
        category: 'backend',
      },
      {
        id: '1c-prof',
        title: '1C:Professional — Trade Management',
        issuer: '1C Official Certification',
        year: '2026',
        category: 'onec',
      },
    ],
  },
  contactModal: {
    eyebrow: 'Get in touch',
    name: 'Kirill Ryzhkov',
    location: 'Almaty, Kazakhstan',
    copyEmail: 'Copy email',
    copyPhone: 'Copy phone',
    copied: 'Copied to clipboard',
    downloadCv: 'Download CV (PDF)',
  },
  projectModal: {
    viewGithub: 'View on GitHub',
    openGallery: 'Open fullscreen gallery',
  },
  footer: {
    status: 'Almaty, Kazakhstan · Open to IT & Web projects',
    rights: 'All rights reserved.',
  },
} as const;
