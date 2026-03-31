// ============================================
//  SORA — main.js v4 (Conversión / Senior)
// ============================================

const T = {
  es: {
    "nav.benefits":"Qué resolvemos", "nav.work":"Trabajo", "nav.services":"Servicios", "nav.about":"Nosotros", "nav.contact":"Hablemos hoy",
    "hero.label":"Estudio de producto digital",
    "hero.l1":"Apps que hacen", "hero.l2":"crecer tu negocio.",
    "hero.sub":"Dejá de perder tiempo y clientes por sistemas que no funcionan. Construimos la tecnología que elimina cuellos de botella y hace crecer tu negocio.",
    "hero.ctaPrimary":"Empezar un proyecto", "hero.ctaSecondary":"Ver cómo trabajamos ↓",
    "hero.urgency":"⚡ Estamos tomando 2 nuevos proyectos este mes.",
    "auth.label":"Infraestructura preparada para:",
    "auth.1":"Retail & Comercios", "auth.2":"Gestión de Stock", "auth.3":"Ventas B2B", "auth.4":"Operaciones Logísticas",
    "s.benefits":"Propuesta de valor", "ben.intro":"Tu negocio compite por atención y eficiencia. Hacemos que ganes en ambas.",
    "ben.1.t":"Aumentás tus ventas sin invertir más en publicidad", "ben.1.d":"Diseñamos interfaces sin fricción. Cada píxel está optimizado para que tu cliente compre o contrate sin perderse en el proceso.",
    "ben.2.t":"Automatizás procesos", "ben.2.d":"Reemplazamos tareas manuales, planillas y mensajes repetitivos por sistemas autónomos 24/7.",
    "ben.3.t":"Ahorrás tiempo (y plata)", "ben.3.d":"Tu equipo deja de apagar incendios y se enfoca en hacer crecer el negocio de verdad.",
    "ben.4.t":"Tenés control total", "ben.4.d":"Paneles de gestión a medida con base de datos e integraciones con métricas en tiempo real.",
    "s.work":"Trabajo probado",
    "p.velora.t1":"Gestión", "p.velora.t2":"Voz", "p.velora.t3":"IA",
    "p.live":"Operando a escala", "p.see":"Ver resultados reales",
    "cs.challenge":"El problema de negocio", "cs.velora.challenge":"Un comercio minorista perdía horas todos los días conciliando ventas, stock y facturación entre tres sistemas rotos. La operación manual no les permitía escalar.",
    "cs.solution":"La solución desarrollada", "cs.velora.solution":"Construimos una plataforma de gestión accionada por voz con IA profunda. Integró todo en un solo flujo, emitiendo facturas y descontando stock en tiempo real.",
    "cs.m1":"Ventas procesadas tras lanzamiento",
    "cs.m2":"Tiempo operativo ahorrado al mes",
    "cs.m3":"Fricción o curva de adaptación",
    "cs.velora.quote":"“El impacto fue inmediato. En una semana redujimos los errores a cero y liberamos casi todo el tiempo que pasábamos cargando datos. Se pagó sola.”",
    "cs.velora.cite":"— Cadena minorista (3 sucursales, AMBA)",
    "s.services":"Nuestro expertise", "srv.intro":"Construimos infraestructura digital robusta. No parches.",
    "srv.s1.t":"Interfaces que convierten", "srv.s1.d":"Cada píxel está pensado para guiar al usuario a la acción. UI/UX enfocado en la conversión, sin fricciones que te hagan perder ventas.",
    "srv.s2.t":"Apps que no se rompen al escalar", "srv.s2.d":"Desarrollamos con stacks modernos y bases de datos preparadas para alto tráfico. Tu negocio crece, la app resiste.",
    "srv.s3.t":"Negocios en piloto automático", "srv.s3.d":"Conectamos IA, pasarelas de pago y facturación para que todo tu ciclo de negocio funcione sin intervención humana repetitiva.",
    "srv.s4.t":"Acompañamiento post-lanzamiento", "srv.s4.d":"No te entregamos el código y desaparecemos. Monitoreamos performance, iteramos y te ayudamos a crecer con datos reales.",
    "s.about":"Resultados", 
    "sp.title":"Construimos sistemas que las empresas aman usar.",
    "sp.q1":"\"Velora cambió la forma en que gestionamos la tienda. El poder hablarle al sistema ahorró horas de conciliación diaria.\"",
    "sp.r1":"Dueño, Cadena Retail (AMBA)",
    "sp.q2":"\"El inventario solía ser un caos con un margen de error altísimo. Desde que integraron facturación en tiempo real, operamos en paz.\"",
    "sp.r2":"Gerente de Sucursal",
    "sp.q3":"\"El verdadero valor no es la app, sino hacer desaparecer las tareas repetitivas. Se pagó sola en el primer mes de uso.\"",
    "sp.r3":"Operador de Stock",
    "s.contact":"Empecemos", "ct.title":"Hagamos crecer tu negocio.", "ct.sub":"Escribinos ahora. Te respondemos hoy mismo para definir tu próximo gran paso. Cero fricción.",
    "ct.wa":"Empezar ahora por WhatsApp", "ct.mail":"hola@sora.studio",
    "ft.tagline":"Agencia de producto y escala digital · Buenos Aires", "ft.made":"Construido en Argentina para el mundo"
  },
  en: {
    "nav.benefits":"What we solve", "nav.work":"Work", "nav.services":"Services", "nav.about":"About us", "nav.contact":"Let's talk",
    "hero.label":"Digital product studio",
    "hero.l1":"Apps that make", "hero.l2":"your business grow.",
    "hero.sub":"Stop losing time and clients due to broken systems. We build the technology that eliminates bottlenecks and endlessly scales your business.",
    "hero.ctaPrimary":"Start a project", "hero.ctaSecondary":"See how we work ↓",
    "hero.urgency":"⚡ We are onboarding 2 new projects this month.",
    "auth.label":"Infrastructure ready for:",
    "auth.1":"Retail & Stores", "auth.2":"Inventory Management", "auth.3":"B2B Sales", "auth.4":"Logistics Operations",
    "s.benefits":"Value Proposition", "ben.intro":"Your business competes for attention and efficiency. We make you win at both.",
    "ben.1.t":"Increase sales without ad-spend", "ben.1.d":"Frictionless interfaces. Every pixel is optimized so your customer buys or subscribes without getting lost in the process.",
    "ben.2.t":"Automate processes", "ben.2.d":"We replace manual tasks, spreadsheets, and repetitive messages with autonomous 24/7 systems.",
    "ben.3.t":"Save time (and budget)", "ben.3.d":"Your team stops putting out fires and focuses on truly growing the business.",
    "ben.4.t":"Total control", "ben.4.d":"Custom management dashboards with databases and real-time metric integrations.",
    "s.work":"Proven results",
    "p.velora.t1":"Management", "p.velora.t2":"Voice", "p.velora.t3":"AI",
    "p.live":"Operating at scale", "p.see":"See live results",
    "cs.challenge":"The business problem", "cs.velora.challenge":"A retail business lost hours every day reconciling sales, inventory, and billing across three broken systems. Manual work blocked their scale.",
    "cs.solution":"The developed solution", "cs.velora.solution":"We built a voice-activated management platform with deep AI. It unified everything into one flow, updating stock in real time.",
    "cs.m1":"Processed sales post-launch",
    "cs.m2":"Operational hours saved per month",
    "cs.m3":"Friction or training curve",
    "cs.velora.quote":"“The impact was immediate. In one week we reduced errors to zero and freed up almost all the time we spent entering data. It paid for itself.”",
    "cs.velora.cite":"— Retail Chain (3 branches), LATAM",
    "s.services":"Our expertise", "srv.intro":"We build robust digital infrastructure. Not just UI patches.",
    "srv.s1.t":"Interfaces that convert", "srv.s1.d":"Every pixel is designed to guide the user to action. UI/UX strictly focused on conversion to drastically reduce bounce rates.",
    "srv.s2.t":"Apps that don't break", "srv.s2.d":"We develop using modern stacks and high-traffic ready databases. Your business scales, the codebase holds up seamlessly.",
    "srv.s3.t":"Business on autopilot", "srv.s3.d":"We connect AI, payment gateways, and billing so your entire business cycle runs without repetitive manual intervention.",
    "srv.s4.t":"Post-launch scaling", "srv.s4.d":"We don't hand over the code and vanish. We monitor performance, iterate, and help you grow leveraging real data analytics.",
    "s.about":"Results", 
    "sp.title":"We build systems that companies love to use.",
    "sp.q1":"\"Velora changed how we manage the store. Being able to talk to the system and log automatically saved us hours of daily reconciliation.\"",
    "sp.r1":"Owner, Retail Chain (LATAM)",
    "sp.q2":"\"Inventory used to be chaos. Since they integrated real-time billing into Velora, we operate with complete peace of mind.\"",
    "sp.r2":"Store Manager",
    "sp.q3":"\"The true value isn't the app itself, but seeing repetitive daily tasks disappear. It paid for itself in the first month.\"",
    "sp.r3":"Inventory Operator",
    "s.contact":"Let's begin", "ct.title":"Let's grow your business.", "ct.sub":"Reach out today. We will reply in hours to define your next big step. Zero friction.",
    "ct.wa":"Start now via WhatsApp", "ct.mail":"hello@sora.studio",
    "ft.tagline":"Digital product & scaling agency · Global", "ft.made":"Built in Argentina for the world"
  }
};

let lang = localStorage.getItem('sora_lang') || (navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es');

function applyLang() {
  const t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k]) el.innerHTML = t[k];
  });
  document.documentElement.lang = lang;
  document.title = lang === 'en' ? 'Sora — Apps that grow your business' : 'Sora — Apps que hacen crecer tu negocio';
  
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'en' ? 'ES' : 'EN';
  }
}

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const Hamburg = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
Hamburg.addEventListener('click', () => {
  Hamburg.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  Hamburg.classList.remove('open');
  mobileMenu.classList.remove('open');
}));

const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      lang = lang === 'es' ? 'en' : 'es';
      localStorage.setItem('sora_lang', lang);
      applyLang();
    });
  }
});
