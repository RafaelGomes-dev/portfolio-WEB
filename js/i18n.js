(() => {
  const EN = {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'hero.status': 'Open to opportunities',
    'hero.greeting': "Hi, I'm Rafael Gomes",
    'hero.title': 'Full stack developer <em>in training</em>',
    'hero.desc': '5th-semester Computer Science student at PUCPR and Service Engineering intern at Positivo Tecnologia. I build APIs with Java/Spring Boot and Python/Flask, automations, and web interfaces with React and Next.js, always backed by relational databases.',
    'hero.cta.projects': 'View projects',
    'hero.cta.cv': 'Download CV',

    'projects.title': 'Projects',
    'projects.seeAll': 'See all',
    'projects.all': 'See all projects',
    'projects.page.sub': 'Some of the things I have built, in production or in progress.',

    'kind.personal': 'Personal project',
    'kind.academic': 'Academic project',
    'kind.pair': 'Pair project',

    'btn.github': 'GitHub',
    'btn.live': 'Live demo',
    'btn.soon': 'Repository coming soon',

    'p1.title': 'Expense Manager',
    'p1.short': 'Full-stack personal finance app with secure authentication, responsive dashboard and cloud hosting.',
    'p1.long': 'Full-stack web app built with Python and Flask. Complete personal finance dashboard with a relational database, secure authentication with hashed passwords, fully responsive UI and per-user data isolation. Running in production.',

    'p2.title': 'Discord Bot — Call of Duty',
    'p2.short': 'Real-time server status, weapon meta, database-backed ranking and automatic notifications.',
    'p2.long': 'Discord bot for Call of Duty players. Checks server status in real time via web scraping, shows the current weapon meta, keeps a SQLite ranking and runs polls, giveaways and automatic notifications. Running in production.',

    'p3.title': 'IT Asset Management',
    'p3.short': 'REST API with JWT, HATEOAS and Swagger to manage hardware and licences linked to employees.',
    'p3.long': 'Corporate REST API for hardware, peripherals and software licences linked to employees. JWT authentication with Admin/User roles, audit logs, HATEOAS links and interactive Swagger docs. Running in production.',

    'p4.title': 'F1 HUB — Formula 1 statistics',
    'p4.short': 'Formula 1 statistics with race calendar, standings and driver profiles, consuming public APIs in real time.',
    'p4.long': 'Web app with race calendar, driver and constructor standings and driver profiles, consuming real-time data from public APIs (OpenF1 and f1api.dev). PostgreSQL persistence in a Docker environment.',

    'p5.title': 'BrainHub — University social network',
    'p5.short': 'University social network with authentication, profiles, chat and global search. Access control via Row Level Security.',
    'p5.long': 'Social network for university students with authentication, profiles, chat and global search. Built in pair, with access control enforced by Row Level Security in the database.',

    'p6.title': 'E-commerce Sales Dashboard',
    'p6.short': 'End-to-end data pipeline (generation, ETL and visualization) with KPIs, interactive charts and dynamic filters.',
    'p6.long': 'Interactive sales analytics dashboard with a complete data pipeline: generation, processing (ETL) and visualization. KPIs, interactive charts and real-time dynamic filters. Running in production.',

    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.data': 'Data and tools',

    'exp.title': 'Experience',
    'exp.role': 'Service Engineering Intern',
    'exp.period': 'Nov 2024 — present',
    'exp.li1': 'Task automation with Python',
    'exp.li2': 'Legacy systems maintenance',
    'exp.li3': 'Service engineering',
    'exp.li4': 'Troubleshooting',
    'exp.li5': 'Customer support',

    'contact.title': "Let's talk",
    'contact.desc': 'Want to work together, ask something or discuss a project? Reach out on any channel and I will reply as soon as I can.',

    'about.title': 'About me',
    'about.desc': 'I apply what I learn directly in the industry as a Service Engineering intern. Day to day I turn repetitive processes into smart routines, building Python automations and maintaining legacy systems and scripts (such as .bat files). That corporate experience taught me to write clean, efficient code that actually adds value to the business.',
    'about.location': 'Curitiba, Brazil',
    'term.role': 'Full stack developer in training',
    'term.education': 'Computer Science — PUCPR',
    'term.status': 'Open to opportunities',
    'journey.title': 'My journey',
    'tl1.title': 'Started college',
    'tl1.desc': 'Began my Computer Science degree at PUCPR and had my first contact with the main programming languages.',
    'tl2.title': 'First internship',
    'tl2.desc': 'At the end of 2024 I landed my first internship in the field at Positivo Tecnologia, working on Python automations.',
    'tl3.title': 'Deeper into the fundamentals',
    'tl3.desc': 'Went deeper into Python and Java at college and started applying them at work and in more demanding personal projects.',
    'tl4.title': 'Focus on web development',
    'tl4.desc': 'Got seriously into web development, both frontend and backend. Now I am here building projects and looking for new opportunities.',

    'cta.title': 'Interested in working together',
    'cta.desc': 'I can help build your project or idea.',
    'cta.btn': 'Get in touch',

    'footer': '© 2026 Rafael Gomes'
  };

  const KEY = 'portfolio-lang';
  const nodes = document.querySelectorAll('[data-i18n]');
  const toggle = document.getElementById('lang-toggle');

  nodes.forEach(el => { el.dataset.pt = el.innerHTML; });

  const apply = lang => {
    nodes.forEach(el => {
      const key = el.dataset.i18n;
      if (lang === 'en' && EN[key] !== undefined) {
        el.innerHTML = EN[key];
      } else {
        el.innerHTML = el.dataset.pt;
      }
    });
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    if (toggle) {
      toggle.textContent = lang === 'en' ? 'PT' : 'EN';
      toggle.setAttribute('aria-label', lang === 'en' ? 'Mudar para português' : 'Switch to English');
    }
    localStorage.setItem(KEY, lang);
  };

  const current = () => localStorage.getItem(KEY) || 'pt';

  apply(current());

  if (toggle) {
    toggle.addEventListener('click', () => apply(current() === 'pt' ? 'en' : 'pt'));
  }
})();
