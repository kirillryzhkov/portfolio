export interface ProjectStaticMeta {
  id: 'diary' | 'marketplace' | 'steelshop' | 'animeshka' | 'assen' | 'spotik';
  number: string;
  stack: string[];
  githubUrl?: string;
  images: string[];
}

export const PROJECTS_META: ProjectStaticMeta[] = [
  {
    id: 'diary',
    number: '01',
    stack: ['Python', 'Django', 'DRF', 'SimpleJWT', 'Swagger', 'SQLite', 'i18n'],
    githubUrl: 'https://github.com/kirillryzhkov/electronic-diary-system',
    images: ['/projects/diary-1.webp', '/projects/diary-2.webp', '/projects/diary-3.webp'],
  },
  {
    id: 'marketplace',
    number: '02',
    stack: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'SQLite'],
    githubUrl: 'https://github.com/kirillryzhkov',
    images: ['/projects/market-1.webp', '/projects/market-2.webp', '/projects/market-3.webp'],
  },
  {
    id: 'steelshop',
    number: '03',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'UI Design', 'SSL Hosting'],
    githubUrl: 'https://github.com/kirillryzhkov',
    images: [
      '/projects/steelshop-1.webp',
      '/projects/steelshop-2.webp',
      '/projects/steelshop-3.webp',
      '/projects/steelshop-4.webp',
      '/projects/steelshop-5.webp',
      '/projects/steelshop-6.webp',
      '/projects/steelshop-7.webp',
    ],
  },
  {
    id: 'animeshka',
    number: '04',
    stack: ['Node.js', 'Express', 'Handlebars', 'SQLite', 'REST API'],
    githubUrl: 'https://github.com/kirillryzhkov/animeSiteInfo',
    images: [
      '/projects/animeshka-1.webp',
      '/projects/animeshka-2.webp',
      '/projects/animeshka-3.webp',
    ],
  },
  {
    id: 'assen',
    number: '05',
    stack: ['CorelDRAW', 'Figma', 'Canva', 'E-Commerce', 'Brand Content'],
    images: [
      '/projects/assen-card-1.webp',
      '/projects/assen-card-2.webp',
      '/projects/assen-card-3.webp',
      '/projects/assen-card-4.webp',
      '/projects/assen-card-5.webp',
      '/projects/assen-card-6.webp',
      '/projects/assen-1.webp',
      '/projects/assen-2.webp',
    ],
  },
  {
    id: 'spotik',
    number: '06',
    stack: ['Python', 'Telegram Bot API', 'Spotipy', 'SQLite'],
    githubUrl: 'https://github.com/kirillryzhkov/opiumbot2.0',
    images: ['/projects/spotik-1.webp', '/projects/spotik-2.webp'],
  },
];
