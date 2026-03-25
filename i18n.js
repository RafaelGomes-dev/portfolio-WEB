

const TRANSLATIONS = {

  /* ── NAVBAR (all pages) ── */
  'nav-home':     { pt: 'Home',    en: 'Home' },
  'nav-projects': { pt: 'Projetos', en: 'Projects' },
  'nav-about':    { pt: 'Sobre',   en: 'About' },
  'nav-contact':  { pt: 'Contato', en: 'Contact' },

  /* ── INDEX — Hero ── */
  'hero-greeting': { pt: 'Olá! Eu me chamo Rafael Gomes', en: "Hi! My name is Rafael Gomes" },
  'hero-title':    { pt: 'DESENVOLVEDOR EM FORMAÇÃO', en: 'DEVELOPER IN TRAINING' },
  'hero-desc':     {
    pt: 'Estudante do 4º período de Engenharia da Computação na PUCPR e estagiário apaixonado por resolver problemas reais através de código. Com uma base sólida em C, tenho experiência prática no desenvolvimento de automações e na construção de APIs/backend utilizando Java e frameworks Python, como o Flask. No ecossistema Web, atuo com HTML, CSS e JavaScript, possuindo também vivência com React.js, Next.js e bancos de dados relacionais (MySQL)',
    en: "4th-semester Computer Engineering student at PUCPR and an intern passionate about solving real problems through code. With a solid foundation in C, I have hands-on experience building automations and APIs/backend services using Java and Python frameworks like Flask. On the Web side, I work with HTML, CSS and JavaScript, and also have experience with React.js, Next.js and relational databases (MySQL)."
  },
  'hero-btn-projects': { pt: 'Ver projetos', en: 'View projects' },
  'hero-btn-cv':       { pt: 'Baixar Currículo', en: 'Download CV' },

  /* ── INDEX — Projects section ── */
  'section-projects': { pt: 'Projetos', en: 'Projects' },

  'proj1-title': { pt: 'Gestão de Gastos', en: 'Expense Manager' },
  'proj1-desc':  { pt: 'Uma web com front e backend feito com micro-framework Flask', en: 'A full-stack web app with front and backend built with the Flask micro-framework' },
  'proj1-link':  { pt: 'Ver no GitHub →', en: 'View on GitHub →' },

  'proj2-title': { pt: 'Bot Discord - CALL OF DUTY', en: 'Discord Bot - CALL OF DUTY' },
  'proj2-desc':  { pt: 'Bot para Discord voltado a jogadores de COD, com status de servidores, meta de armas, ranking com SQLite e notificações automáticas', en: 'Discord bot aimed at COD players, featuring server status, weapon meta, SQLite ranking and automatic notifications' },
  'proj2-link':  { pt: 'Ver no GitHub →', en: 'View on GitHub →' },

  /* ── INDEX — Skills ── */
  'section-skills': { pt: 'Skills', en: 'Skills' },
  'skill-responsive': { pt: 'Design Responsivo', en: 'Responsive Design' },
  'skill-api-dev':    { pt: 'Desenvolvimento de APIs', en: 'API Development' },
  'skill-apis':       { pt: 'APIs básicas', en: 'Basic APIs' },
  'skill-automation': { pt: 'Automação de Tarefas', en: 'Task Automation' },
  'skill-db-title':   { pt: 'Banco de Dados', en: 'Database' },
  'skill-relational': { pt: 'Modelagem Relacional', en: 'Relational Modeling' },
  'skill-queries':    { pt: 'Consultas e Joins', en: 'Queries and Joins' },
  'skill-teamwork':   { pt: 'Trabalho em equipe', en: 'Teamwork' },
  'skill-proactive':  { pt: 'Proatividade', en: 'Proactiveness' },
  'skill-comms':      { pt: 'Comunicação clara', en: 'Clear communication' },
  'skill-org':        { pt: 'Organização', en: 'Organization' },
  'skill-learning':   { pt: 'Aprendizado rápido', en: 'Fast learning' },

  /* ── INDEX — Experience ── */
  'section-exp':   { pt: 'Experiências', en: 'Experience' },
  'exp-role':      { pt: 'Estagiário', en: 'Intern' },
  'exp-period':    { pt: 'Período — Nov 2024 · Presente', en: 'Period — Nov 2024 · Present' },
  'exp-li1':       { pt: 'Automação de tarefas com Python', en: 'Task automation with Python' },
  'exp-li2':       { pt: 'Manutenção de Sistemas Legados', en: 'Legacy Systems Maintenance' },
  'exp-li3':       { pt: 'Engenharia de Serviços', en: 'Service Engineering' },
  'exp-li4':       { pt: 'Troubleshooting', en: 'Troubleshooting' },
  'exp-li5':       { pt: 'Suporte ao Cliente', en: 'Customer Support' },

  /* ── INDEX + CONTATO — Contact ── */
  'contact-title': { pt: 'Vamos conversar', en: "Let's talk" },
  'contact-desc':  { pt: 'Quer trabalhar comigo, tirar dúvidas ou discutir um projeto? Entre em contato e responderei o mais rápido possível.', en: 'Want to work together, ask questions or discuss a project? Get in touch and I will reply as soon as possible.' },

  /* ── FOOTER ── */
  'footer': { pt: '© 2026 Rafael Gomes — Todos os direitos reservados', en: '© 2026 Rafael Gomes — All rights reserved' },

  /* ── SOBRE ── */
  'about-title': { pt: 'Sobre mim', en: 'About me' },
  'about-desc':  {
    pt: 'Atualmente, aplico meus conhecimentos diretamente no mercado como estagiário na área de Engenharia de Serviços. No meu dia a dia, foco em transformar processos repetitivos em rotinas inteligentes, desenvolvendo automações com Python e dando manutenção em sistemas e rotinas legadas (como scripts em .bat). Essa vivência corporativa me ensinou a importância de criar códigos limpos, eficientes e que realmente agregam valor ao negócio.',
    en: "Currently I apply my knowledge directly in the industry as an intern in the Service Engineering area. Day to day I focus on turning repetitive processes into smart routines, developing Python automations and maintaining legacy systems and scripts (such as .bat files). This corporate experience taught me the importance of writing clean, efficient code that truly adds value to the business."
  },
  'about-location': { pt: '📍 Curitiba — Brasil 🇧🇷', en: '📍 Curitiba — Brazil 🇧🇷' },
  'terminal-education': { pt: 'Engenharia da Computação - PUCPR', en: 'Computer Engineering - PUCPR' },

  'journey-title': { pt: 'Minha Jornada', en: 'My Journey' },
  'tl1-title': { pt: 'Início da faculdade', en: 'Started college' },
  'tl1-desc':  { pt: 'Comecei a faculdade Engenharia da Computação e tive um primeiro contato com as principais linguagens de programação.', en: 'Started my Computer Engineering degree and had my first contact with the main programming languages.' },
  'tl2-title': { pt: 'Primeiro Estágio', en: 'First Internship' },
  'tl2-desc':  { pt: 'Ao final do ano de 2024, consegui a oportunidade de começar em um primeiro estágio na área, na empresa POSITIVO TECNOLOGIA S/A, trabalhando e me aperfeiçoando em automações com Python.', en: 'By the end of 2024 I got the opportunity to start my first internship in the field at POSITIVO TECNOLOGIA S/A, working on and improving Python automations.' },
  'tl3-title': { pt: 'Faculdade e mais faculdade', en: 'Deeper into college' },
  'tl3-desc':  { pt: 'Comecei a me aprofundar mais nas linguagens de programação na faculdade, como Python, Java e comecei a aplicá-las no trabalho e no meu dia a dia. Realizando alguns projetos mais trabalhosos.', en: 'I deepened my knowledge in programming languages such as Python and Java, and started applying them at work and in daily projects, including more complex assignments.' },
  'tl4-title': { pt: 'Aprofundamento em desenvolvimento WEB', en: 'Deep-dive into Web Development' },
  'tl4-desc':  { pt: 'Comecei a me interessar muito por desenvolvimento WEB tanto frontend quanto backend, aperfeiçoei meus conhecimentos e no momento me encontro aqui desenvolvendo projetos e buscando sempre oportunidades.', en: 'I became deeply interested in Web development — both frontend and backend. I sharpened my skills and am now here building projects and always seeking new opportunities.' },

  /* ── PROJETOS PAGE ── */
  'projects-page-title': { pt: 'Projetos', en: 'Projects' },
  'projects-page-sub':   { pt: 'Alguns dos trabalhos e aplicações que desenvolvi.', en: 'Some of the work and applications I have built.' },

  'p1-title': { pt: 'Sistema de Controle de Gastos (Fullstack)', en: 'Expense Tracking System (Fullstack)' },
  'p1-desc':  { pt: 'Aplicação web fullstack desenvolvida em Python utilizando o microframework Flask. O sistema oferece um painel completo para gestão financeira pessoal, contando com banco de dados relacional e um sistema de autenticação seguro com senhas criptografadas. A interface é totalmente responsiva e os dados de cada usuário são isolados. Projeto em produção, hospedado na nuvem.', en: 'Fullstack web application built in Python using the Flask micro-framework. The system provides a complete personal finance management dashboard with a relational database and a secure authentication system with encrypted passwords. The interface is fully responsive and each user\'s data is isolated. Project live in production, hosted in the cloud.' },
  'p1-type':  { pt: 'Projeto Pessoal / Fullstack', en: 'Personal Project / Fullstack' },
  'p1-github': { pt: 'Ver no GitHub', en: 'View on GitHub' },

  'p2-title': { pt: 'Bot do Meta — Discord COD', en: 'Meta Bot — Discord COD' },
  'p2-desc':  { pt: 'Bot para Discord voltado a jogadores de Call of Duty, desenvolvido em Python. Conta com consulta de status de servidores em tempo real via web scraping, meta de armas atualizado, sistema de ranking com banco de dados SQLite, enquetes, sorteios e notificações automáticas. Projeto em produção, hospedado na nuvem.', en: 'Discord bot aimed at Call of Duty players, built in Python. Features real-time server status via web scraping, updated weapon meta, SQLite-powered ranking system, polls, giveaways and automatic notifications. Project live in production, hosted in the cloud.' },
  'p2-type':  { pt: 'Projeto Pessoal / Bot / Automação', en: 'Personal Project / Bot / Automation' },
  'p2-github': { pt: 'Ver no GitHub', en: 'View on GitHub' },

  'cta-title': { pt: 'Interessado em trabalhar comigo', en: 'Interested in working with me' },
  'cta-desc':  { pt: 'Posso ajudar no desenvolvimento do seu projeto ou ideia.', en: 'I can help bring your project or idea to life.' },
  'cta-btn':   { pt: 'Entrar em contato', en: 'Get in touch' },
};

/* ─────────────────────────────────────────────
   DOM helpers
───────────────────────────────────────────── */

function setLang(lang) {
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-br';
  applyTranslations(lang);
  updateToggleBtn(lang);
}

function getLang() {
  return localStorage.getItem('portfolio-lang') || 'pt';
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang] !== undefined) {
      // Preserve inner <span> (used for the colored dot)
      const span = el.querySelector('span');
      if (span) {
        el.childNodes.forEach(n => { if (n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== '') n.textContent = TRANSLATIONS[key][lang]; });
      } else {
        el.textContent = TRANSLATIONS[key][lang];
      }
    }
  });

  // html attr
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[key]?.[lang]) el.placeholder = TRANSLATIONS[key][lang];
  });
}

function updateToggleBtn(lang) {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.textContent = lang === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT';
  btn.title = lang === 'pt' ? 'Switch to English' : 'Mudar para Português';
}

/* ─────────────────────────────────────────────
   Inject the toggle button into the navbar
───────────────────────────────────────────── */

function injectToggleButton() {
  const menu = document.querySelector('.menu');
  if (!menu) return;

  const btn = document.createElement('button');
  btn.id = 'lang-toggle';
  btn.setAttribute('aria-label', 'Toggle language');

  btn.style.cssText = `
    background: transparent;
    border: 1px solid rgba(85, 88, 247, 0.5);
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.03em;
    padding: 5px 13px;
    transition: background 0.2s, border-color 0.2s, color 0.2s;
    white-space: nowrap;
    align-self: center;
    margin-left: 8px;
  `;

  btn.addEventListener('mouseenter', () => {
    btn.style.background = '#5558f7';
    btn.style.borderColor = '#5558f7';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.background = 'transparent';
    btn.style.borderColor = 'rgba(85, 88, 247, 0.5)';
  });

  btn.addEventListener('click', () => {
    const current = getLang();
    setLang(current === 'pt' ? 'en' : 'pt');
  });

  // Insert as a list item so it sits inline with the menu
  const li = document.createElement('li');
  li.style.listStyle = 'none';
  li.appendChild(btn);
  menu.appendChild(li);
}

/* ─────────────────────────────────────────────
   Add data-i18n attributes to the current page
   (keeps HTML clean — no manual tagging needed)
───────────────────────────────────────────── */

function tagElements() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const tag = (sel, key) => {
    const el = document.querySelector(sel);
    if (el) el.setAttribute('data-i18n', key);
  };
  const tagAll = (sel, key) => {
    document.querySelectorAll(sel).forEach(el => el.setAttribute('data-i18n', key));
  };

  // ── NAVBAR (every page) ──
  const navLinks = document.querySelectorAll('.menu a');
  const navKeys = ['nav-home', 'nav-projects', 'nav-about', 'nav-contact'];
  navLinks.forEach((a, i) => { if (navKeys[i]) a.setAttribute('data-i18n', navKeys[i]); });

  // footer
  tagAll('footer p', 'footer');

  // ── INDEX ──
  if (page === 'index.html' || page === '') {
    tag('.hero-text h3', 'hero-greeting');
    tag('.hero-text h1', 'hero-title');
    tag('.hero-text p',  'hero-desc');

    const btns = document.querySelectorAll('.hero-botoes a');
    if (btns[0]) btns[0].setAttribute('data-i18n', 'hero-btn-projects');
    if (btns[1]) btns[1].setAttribute('data-i18n', 'hero-btn-cv');

    tag('.projects-title', 'section-projects');

    // project cards
    const cards = document.querySelectorAll('.project-card');
    if (cards[0]) {
      cards[0].querySelector('h3')?.setAttribute('data-i18n', 'proj1-title');
      cards[0].querySelector('p')?.setAttribute('data-i18n',  'proj1-desc');
      cards[0].querySelector('a')?.setAttribute('data-i18n',  'proj1-link');
    }
    if (cards[1]) {
      cards[1].querySelector('h3')?.setAttribute('data-i18n', 'proj2-title');
      cards[1].querySelector('p')?.setAttribute('data-i18n',  'proj2-desc');
      cards[1].querySelector('a')?.setAttribute('data-i18n',  'proj2-link');
    }

    tag('.skills-title',    'section-skills');
    const skillCols = document.querySelectorAll('.skill-column');
    if (skillCols[0]) {
      const lis = skillCols[0].querySelectorAll('li');
      if (lis[4]) lis[4].setAttribute('data-i18n', 'skill-responsive');
    }
    if (skillCols[1]) {
      const lis = skillCols[1].querySelectorAll('li');
      if (lis[2]) lis[2].setAttribute('data-i18n', 'skill-api-dev');
      if (lis[3]) lis[3].setAttribute('data-i18n', 'skill-apis');
      if (lis[4]) lis[4].setAttribute('data-i18n', 'skill-automation');
    }
    if (skillCols[2]) {
      skillCols[2].querySelector('h3')?.setAttribute('data-i18n', 'skill-db-title');
      const lis = skillCols[2].querySelectorAll('li');
      if (lis[2]) lis[2].setAttribute('data-i18n', 'skill-relational');
      if (lis[4]) lis[4].setAttribute('data-i18n', 'skill-queries');
    }
    if (skillCols[3]) {
      const lis = skillCols[3].querySelectorAll('li');
      if (lis[0]) lis[0].setAttribute('data-i18n', 'skill-teamwork');
      if (lis[1]) lis[1].setAttribute('data-i18n', 'skill-proactive');
      if (lis[2]) lis[2].setAttribute('data-i18n', 'skill-comms');
      if (lis[3]) lis[3].setAttribute('data-i18n', 'skill-org');
      if (lis[4]) lis[4].setAttribute('data-i18n', 'skill-learning');
    }

    tag('.experiencia-title', 'section-exp');
    tag('.exp-role',   'exp-role');
    tag('.exp-periodo','exp-period');
    const expLis = document.querySelectorAll('.exp-list li');
    const expKeys = ['exp-li1','exp-li2','exp-li3','exp-li4','exp-li5'];
    expLis.forEach((li, i) => { if (expKeys[i]) li.setAttribute('data-i18n', expKeys[i]); });

    tag('.contact-title', 'contact-title');
    tag('.contact-desc',  'contact-desc');
  }

  // ── SOBRE ──
  if (page === 'sobre.html') {
    tag('.hero-left h1',          'about-title');
    tag('.hero-descripition',     'about-desc');
    tag('.location-badge',        'about-location');
    const termLines = document.querySelectorAll('.terminal-body .highlight');
    if (termLines[2]) termLines[2].setAttribute('data-i18n', 'terminal-education');

    tag('.timeline h2', 'journey-title');
    const items = document.querySelectorAll('.timeline-item');
    const tlKeys = [
      ['tl1-title','tl1-desc'],
      ['tl2-title','tl2-desc'],
      ['tl3-title','tl3-desc'],
      ['tl4-title','tl4-desc'],
    ];
    items.forEach((item, i) => {
      if (!tlKeys[i]) return;
      item.querySelector('h3')?.setAttribute('data-i18n', tlKeys[i][0]);
      item.querySelector('p')?.setAttribute('data-i18n',  tlKeys[i][1]);
    });
  }

  // ── PROJETOS ──
  if (page === 'projetos.html') {
    tag('.projects-hero h1', 'projects-page-title');
    tag('.projects-hero p',  'projects-page-sub');

    const sections = document.querySelectorAll('.project');
    if (sections[0]) {
      sections[0].querySelector('h2')?.setAttribute('data-i18n', 'p1-title');
      sections[0].querySelector('.project-desc')?.setAttribute('data-i18n', 'p1-desc');
      const metas = sections[0].querySelectorAll('.project-meta p');
      if (metas[1]) metas[1].innerHTML = `<strong data-i18n-inner>Tipo:</strong> <span data-i18n="p1-type">${TRANSLATIONS['p1-type']['pt']}</span>`;
      if (metas[2]) metas[2].innerHTML = `<strong>Cliente:</strong> -`;
      sections[0].querySelector('.btn-primary')?.setAttribute('data-i18n', 'p1-github');
    }
    if (sections[1]) {
      sections[1].querySelector('h2')?.setAttribute('data-i18n', 'p2-title');
      sections[1].querySelector('.project-desc')?.setAttribute('data-i18n', 'p2-desc');
      const metas = sections[1].querySelectorAll('.project-meta p');
      if (metas[1]) metas[1].innerHTML = `<strong>Tipo:</strong> <span data-i18n="p2-type">${TRANSLATIONS['p2-type']['pt']}</span>`;
      sections[1].querySelector('.btn-primary')?.setAttribute('data-i18n', 'p2-github');
    }

    tag('.projects-cta h2',   'cta-title');
    tag('.projects-cta p',    'cta-desc');
    tag('.btn-primary-big',   'cta-btn');
  }

  // ── CONTATO ──
  if (page === 'contato.html') {
    tag('.contact-title', 'contact-title');
    tag('.contact-desc',  'contact-desc');
  }
}

/* ─────────────────────────────────────────────
   Boot
───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  injectToggleButton();
  tagElements();
  const lang = getLang();
  updateToggleBtn(lang);
  if (lang === 'en') applyTranslations('en');
});
