import { Translations } from '../types';

export const ru: Translations = {
  meta: {
    title: 'Кирилл Рыжков -- Веб-разработчик и дизайнер',
  },
  nav: {
    about: 'Обо мне',
    services: 'Услуги',
    projects: 'Проекты',
    certificates: 'Сертификаты',
    contact: 'Контакты',
  },
  hero: {
    heading: 'Привет, я кирилл',
    tagline:
      'веб-разработчик и\u00A0дизайнер, создающий яркие и\u00A0запоминающиеся проекты',
    contactBtn: 'Связаться',
  },
  about: {
    heading: 'Обо мне',
    text: 'Разносторонний IT-специалист с опытом веб-разработки (Python, Django, JS, HTML/CSS), UI/UX-дизайна и сопровождения 1С. Сочетаю понимание кода с решением прикладных задач бизнеса — давайте создадим что-то крутое вместе!',
  },
  services: {
    heading: 'Услуги',
    items: [
      {
        number: '01',
        name: 'Веб-разработка',
        description:
          'Full-stack веб-приложения на Python, Django и JavaScript с REST API, авторизацией, базами данных и адаптивным интерфейсом.',
      },
      {
        number: '02',
        name: 'UI/UX и веб-дизайн',
        description:
          'Чистые, современные и конверсионные интерфейсы в Figma, Canva и CorelDRAW с вниманием к типографике и деталям.',
      },
      {
        number: '03',
        name: 'E-Commerce и контент',
        description:
          'Создание интернет-магазинов, структурированных каталогов товаров, рекламных баннеров и посадочных страниц под задачи бизнеса.',
      },
      {
        number: '04',
        name: 'Боты и автоматизация',
        description:
          'Разработка Telegram-ботов, Python-скриптов и инструментов автоматизации рутинных процессов.',
      },
      {
        number: '05',
        name: '1С и IT-поддержка',
        description:
          'Консультационная поддержка пользователей 1С, настройка ПО, базовое администрирование и подготовка видео/PDF-инструкций.',
      },
    ],
  },
  projects: {
    heading: 'Проекты',
    liveBtn: 'Подробнее',
    items: [
      {
        id: 'diary',
        name: 'Electronic Diary System',
        category: 'Диплом / Full-Stack',
        summary:
          'Информационная система электронного дневника на Django и DRF: JWT-авторизация, Swagger-документация, роли (Администратор, Преподаватель, Студент), расписание, посещаемость, оценки, тёмная/светлая тема и 3 языка.',
      },
      {
        id: 'marketplace',
        name: 'Student Marketplace',
        category: 'Веб-приложение / Django',
        summary:
          'Онлайн-маркетплейс услуг для студентов колледжей: каталог с фильтрами и поиском, избранное, оформление и статусы заказов, отзывы, личные сообщения, уведомления и панель статистики.',
      },
      {
        id: 'steelshop',
        name: 'SteelShop.kz',
        category: 'Коммерческий / E-Commerce',
        summary:
          'Коммерческий интернет-магазин компьютерных комплектующих и периферии: отдельные каталоги (GPU, CPU, клавиатуры, кресла, корпуса), видео-превью, адаптивная вёрстка и настройка SSL.',
      },
      {
        id: 'animeshka',
        name: 'Animeshka Portal',
        category: 'Node.js / Full-Stack',
        summary:
          'Full-stack веб-портал с каталогом аниме на Node.js, Express, Handlebars и SQLite: динамические страницы, детальные карточки, админ-добавление и API-маршруты.',
      },
      {
        id: 'assen',
        name: 'Assen KZ — Дизайн и контент',
        category: 'Коммерческий / Графический дизайн',
        summary:
          'Визуальное оформление и контент-менеджмент для Assen KZ: мобильные рекламные баннеры, бренд-графика и карточки товаров.',
      },
      {
        id: 'spotik',
        name: 'TG Spotik Bot',
        category: 'Python / Telegram и Spotify API',
        summary:
          'Telegram-бот с интеграцией Spotify Web API (Spotipy) и SQLite: топ-10 треков плейлиста, поиск треков и артистов, треклисты альбомов, профили и логирование запросов.',
      },
    ],
  },
  certificates: {
    heading: 'Сертификаты',
    subtitle: 'Подтверждённые курсы, специализации и сертификация 1С.',
    filters: {
      all: 'Все',
      frontend: 'Frontend и Web',
      backend: 'Java и CS',
      onec: '1С:Предприятие',
    },
    viewFull: 'Открыть',
    credentialBadge: 'Официальный сертификат',
    items: [
      {
        id: 'frontend-extra',
        title: 'Frontend-разработка (Дополнительный уровень)',
        issuer: 'Школа программирования',
        year: '2022',
        category: 'frontend',
      },
      {
        id: 'frontend-advanced',
        title: 'Frontend-разработка (Продвинутый уровень)',
        issuer: 'Школа программирования',
        year: '2022',
        category: 'frontend',
      },
      {
        id: 'frontend-basic',
        title: 'Frontend-разработка (Начальный уровень)',
        issuer: 'Школа программирования',
        year: '2022',
        category: 'frontend',
      },
      {
        id: 'coursera-web',
        title: 'Веб-разработка (Web Development)',
        issuer: 'Coursera',
        year: '2026',
        category: 'frontend',
      },
      {
        id: 'coursera-java',
        title: 'Основы программирования на Java',
        issuer: 'Coursera',
        year: '2026',
        category: 'backend',
      },
      {
        id: '1c-prof',
        title: '1С:Профессионал — Управление торговлей',
        issuer: 'Официальный сертификат 1С',
        year: '2026',
        category: 'onec',
      },
    ],
  },
  contactModal: {
    eyebrow: 'Связаться со мной',
    name: 'Кирилл Рыжков',
    location: 'Алматы, Казахстан',
    copyEmail: 'Скопировать email',
    copyPhone: 'Скопировать телефон',
    copied: 'Скопировано',
    downloadCv: 'Скачать резюме (PDF)',
  },
  projectModal: {
    viewGithub: 'Открыть на GitHub',
    openGallery: 'Открыть галерею во весь экран',
  },
  footer: {
    status: 'Алматы, Казахстан · Открыт к IT и веб-проектам',
    rights: 'Все права защищены.',
  },
};
