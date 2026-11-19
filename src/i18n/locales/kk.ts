import { Translations } from '../types';

export const kk: Translations = {
  meta: {
    title: 'Кирилл Рыжков -- Веб-әзірлеуші және дизайнер',
  },
  nav: {
    about: 'Мен туралы',
    services: 'Қызметтер',
    projects: 'Жобалар',
    certificates: 'Сертификаттар',
    contact: 'Байланыс',
  },
  hero: {
    heading: 'Сәлем, мен кирилл',
    tagline:
      'әсерлі әрі\u00A0есте қаларлық жобаларды жасайтын веб-әзірлеуші және\u00A0дизайнер',
    contactBtn: 'Байланысу',
  },
  about: {
    heading: 'Мен туралы',
    text: 'Веб-әзірлеу (Python, Django, JS, HTML/CSS), UI/UX-дизайн және 1С сүйемелдеу тәжірибесі бар жан-жақты IT-маманмын. Кодты терең түсінуді бизнестің нақты міндеттерін шешумен ұштастырамын — бірге тамаша жоба жасайық!',
  },
  services: {
    heading: 'Қызметтер',
    items: [
      {
        number: '01',
        name: 'Веб-әзірлеу',
        description:
          'Python, Django және JavaScript негізіндегі REST API, авторизация, дерекқор және бейімделгіш интерфейсі бар толық циклді веб-қосымшалар.',
      },
      {
        number: '02',
        name: 'UI/UX және веб-дизайн',
        description:
          'Типографика мен бөлшектерге мән бере отырып, Figma, Canva және CorelDRAW бағдарламаларында жасалған заманауи интерфейстер.',
      },
      {
        number: '03',
        name: 'E-Commerce және контент',
        description:
          'Интернет-дүкендер, құрылымдалған тауар каталогтары, жарнамалық баннерлер және бизнеске арналған лендингтер жасау.',
      },
      {
        number: '04',
        name: 'Боттар және автоматтандыру',
        description:
          'Күнделікті жұмысты жеңілдететін Telegram-боттар, Python-скрипттер және процестерді автоматтандыру құралдары.',
      },
      {
        number: '05',
        name: '1С және IT-қолдау',
        description:
          '1С:Кәсіпорын пайдаланушыларына кеңес беру, бағдарламаларды баптау, әкімшілендіру және бейне/PDF нұсқаулықтар дайындау.',
      },
    ],
  },
  projects: {
    heading: 'Жобалар',
    liveBtn: 'Толығырақ',
    items: [
      {
        id: 'diary',
        name: 'Electronic Diary System',
        category: 'Диплом / Full-Stack',
        summary:
          'Django және DRF негізіндегі электрондық күнделік ақпараттық жүйесі: JWT-авторизация, Swagger құжаттамасы, рөлдік панельдер (Әкімші, Оқытушы, Студент), кесте, қатысу, бағалар және 3 тілді интерфейс.',
      },
      {
        id: 'marketplace',
        name: 'Student Marketplace',
        category: 'Веб-қосымша / Django',
        summary:
          'Колледж студенттеріне арналған қызметтер маркетплейсі: сүзгілер мен іздеу, таңдаулылар, тапсырыстарды басқару, пікірлер, жеке хабарламалар, хабарландырулар және статистика панелі.',
      },
      {
        id: 'steelshop',
        name: 'SteelShop.kz',
        category: 'Коммерциялық / E-Commerce',
        summary:
          'Компьютерлік бөлшектер мен периферия интернет-дүкені: GPU, CPU, пернетақталар, креслолар және корпустар каталогы, бейне-шолулар, адаптивті дизайн және SSL.',
      },
      {
        id: 'animeshka',
        name: 'Animeshka Portal',
        category: 'Node.js / Full-Stack',
        summary:
          'Node.js, Express, Handlebars және SQLite негізіндегі аниме каталогы бар full-stack веб-портал: динамикалық беттер, толық карточкалар, админ-панель және API.',
      },
      {
        id: 'assen',
        name: 'Assen KZ — Дизайн және контент',
        category: 'Коммерциялық / Графикалық дизайн',
        summary:
          'Assen KZ компаниясына арналған визуалды дизайн: мобильді жарнамалық баннерлер, бренд графикасы және тауар карточкалары.',
      },
      {
        id: 'spotik',
        name: 'TG Spotik Bot',
        category: 'Python / Telegram және Spotify API',
        summary:
          'Spotify Web API (Spotipy) және SQLite біріктірілген Telegram-бот: топ-10 тректер, трек пен орындаушы іздеу, альбом треклисттері және сұраныстарды сақтау.',
      },
    ],
  },
  certificates: {
    heading: 'Сертификаттар',
    subtitle: 'Расталған курстар, маманданулар және 1С сертификациясы.',
    filters: {
      all: 'Барлығы',
      frontend: 'Frontend және Web',
      backend: 'Java және CS',
      onec: '1С:Кәсіпорын',
    },
    viewFull: 'Ашу',
    credentialBadge: 'Ресми сертификат',
    items: [
      {
        id: 'frontend-extra',
        title: 'Frontend-әзірлеу (Қосымша деңгей)',
        issuer: 'Бағдарламалау мектебі',
        year: '2022',
        category: 'frontend',
      },
      {
        id: 'frontend-advanced',
        title: 'Frontend-әзірлеу (Жоғары деңгей)',
        issuer: 'Бағдарламалау мектебі',
        year: '2022',
        category: 'frontend',
      },
      {
        id: 'frontend-basic',
        title: 'Frontend-әзірлеу (Бастапқы деңгей)',
        issuer: 'Бағдарламалау мектебі',
        year: '2022',
        category: 'frontend',
      },
      {
        id: 'coursera-web',
        title: 'Веб-әзірлеу (Web Development)',
        issuer: 'Coursera',
        year: '2026',
        category: 'frontend',
      },
      {
        id: 'coursera-java',
        title: 'Java бағдарламалау негіздері',
        issuer: 'Coursera',
        year: '2026',
        category: 'backend',
      },
      {
        id: '1c-prof',
        title: '1С:Профессионал — Сауданы басқару',
        issuer: '1С ресми сертификаты',
        year: '2026',
        category: 'onec',
      },
    ],
  },
  contactModal: {
    eyebrow: 'Байланысу',
    name: 'Кирилл Рыжков',
    location: 'Алматы, Қазақстан',
    copyEmail: 'Email көшіру',
    copyPhone: 'Телефонды көшіру',
    copied: 'Көшірілді',
    downloadCv: 'Түйіндемені жүктеу (PDF)',
  },
  projectModal: {
    viewGithub: 'GitHub-та ашу',
    openGallery: 'Толық экранда ашу',
  },
  footer: {
    status: 'Алматы, Қазақстан · IT және веб-жобаларға ашық',
    rights: 'Барлық құқықтар қорғалған.',
  },
};
