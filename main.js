// ============================================
//  SORA — main.js v4 (Conversión / Senior)
// ============================================

const T = {
  es: {
    "nav.benefits":"Qué resolvemos", "nav.work":"Trabajo", "nav.services":"Servicios", "nav.about":"Nosotros", "nav.contact":"Hablemos hoy",
    "hero.label":"Ecommerce Operating System",
    "hero.l1":"Sistemas operativos para", "hero.l2":"ecommerce.",
    "hero.sub":"Implementamos un sistema completo para ecommerce que automatiza pedidos, stock, pagos y atención al cliente, eliminando errores y permitiendo escalar sin fricción.",
    "hero.ctaPrimary":"Sistematizar mi Ecommerce", "hero.ctaSecondary":"Ver módulos ↑",
    "hero.urgency":"⚡ 3 a 6 semanas de implementación por fases.",
    "auth.label":"Infraestructura preparada para:",
    "auth.1":"Tiendas de Alto Volumen", "auth.2":"Marcas en Expansión", "auth.3":"Retail B2B/B2C", "auth.4":"Operaciones Complejas",
    "s.benefits":"El Problema Operativo", "ben.intro":"El caos operativo frena tu crecimiento. Arreglamos la base.",
    "ben.1.t":"Reducís errores humanos masivos", "ben.1.d":"Eliminamos planillas rotas y traspasos manuales donde se pierde información y dinero todos los días.",
    "ben.2.t":"Eliminás cuellos de botella", "ben.2.d":"Desatascamos la facturación, los envíos y la atención para que puedas escalar ventas indefinidamente.",
    "ben.3.t":"Ganas tiempo (y capital)", "ben.3.d":"Tu equipo deja de hacer 'data entry' repetitivo para enfocarse en marketing, producto y crecimiento.",
    "ben.4.t":"Control gerencial total", "ben.4.d":"Tenés la foto entera de tu ecommerce en tiempo real y tomás decisiones basadas en facturación neta, no en intuición.",
    "s.work":"Trabajo probado",
    "p.velora.t1":"Ecommerce", "p.velora.t2":"Stock Integrado", "p.velora.t3":"IA Operativa",
    "p.live":"Operando a escala", "p.see":"Ver resultados en Retail",
    "cs.challenge":"El caos operativo inicial", "cs.velora.challenge":"Un ecommerce top perdía ventas y clientes conectando Shopify, un sistema de facturación arcaico y stock físico separados.",
    "cs.solution":"La solución desarrollada", "cs.velora.solution":"Construimos una plataforma de gestión accionada por voz con IA profunda. Integró todo en un solo flujo, emitiendo facturas y descontando stock en tiempo real.",
    "cs.m1":"Ventas procesadas tras lanzamiento",
    "cs.m2":"Tiempo operativo ahorrado al mes",
    "cs.m3":"Fricción o curva de adaptación",
    "cs.velora.quote":"“El impacto fue inmediato. En una semana redujimos los errores a cero y liberamos casi todo el tiempo que pasábamos cargando datos. Se pagó sola.”",
    "cs.velora.cite":"— Cadena minorista (3 sucursales, AMBA)",
    "s.services":"Oferta: Ecommerce OS", "srv.intro":"Un sistema operativo completo para escalar sin fricción.",
    "srv.s1.t":"1. Automatización de pedidos", "srv.s1.d":"Integración profunda con Shopify / WooCommerce. Flujo de órdenes 100% automático y reducción a cero de errores manuales en envíos.",
    "srv.s2.t":"2. Gestión de stock en tiempo real", "srv.s2.d":"Sincronización instantánea entre todos tus canales de venta físicos y digitales. Alertas automáticas y control centralizado.",
    "srv.s3.t":"3. Pagos y facturación integrados", "srv.s3.d":"Automatización de cobros, emisión automática de facturas frente al agente de impuestos y conciliación financiera sin tocar Excel.",
    "srv.s4.t":"4. Atención al cliente automatizada", "srv.s4.d":"Flujos integrados de WhatsApp y Email. Respuestas autónomas las 24hs y seguimientos de estados de pedidos en piloto automático.",
    "srv.s5.t":"5. Dashboard de control", "srv.s5.d":"Tu ecommerce visualizado de principio a fin. Ventas globales en tiempo real, KPIs logísticos y métricas clave para crecimiento.",
    "s.about":"Resultados", 
    "sp.title":"Construimos sistemas que las empresas aman usar.",
    "sp.q1":"\"Velora cambió la forma en que gestionamos la tienda. El poder hablarle al sistema ahorró horas de conciliación diaria.\"",
    "sp.r1":"Dueño, Cadena Retail (AMBA)",
    "sp.q2":"\"El inventario solía ser un caos con un margen de error altísimo. Desde que integraron facturación en tiempo real, operamos en paz.\"",
    "sp.r2":"Gerente de Sucursal",
    "sp.q3":"\"El verdadero valor no es la app, sino hacer desaparecer las tareas repetitivas. Se pagó sola en el primer mes de uso.\"",
    "sp.r3":"Operador de Stock",
    "s.pricing":"Inversión & Escala", "pr.intro":"Soluciones llave en mano. Sin presupuestos ocultos.",
    "pr.rec":"Recomendado",
    "pr.st.d":"Integraciones clave y automatización core operativa.",
    "pr.st.f1":"Shopify/WooCommerce Sync", "pr.st.f2":"Centralización de Stock básico", "pr.st.f3":"Soporte inicial 30 días",
    "pr.gr.d":"El Ecommerce OS completo (Los 5 pilares operativos).",
    "pr.gr.f1":"Todo el plan Starter", "pr.gr.f2":"Dashboard Financiero y APIs", "pr.gr.f3":"Automatización Inteligente WA",
    "pr.sc.d":"Para volumen masivo e iteración de IA corporativa.",
    "pr.sc.f1":"Desarrollo Custom", "pr.sc.f2":"IA Predictiva de Demanda", "pr.sc.f3":"Prioridad 24/7 Server",
    "s.contact":"Aplicá ahora", "ct.title":"Escalemos tu operación.", "ct.sub":"Escribinos para una consultoría de 30 mins garantizada. Cero humo.",
    "ct.filter":"Trabajamos únicamente con ecommerce que ya están vendiendo y necesitan escalar su operación. Si estás empezando desde cero, no somos la mejor opción.",
    "ct.wa":"Hablar con Director (WhatsApp)", "ct.mail":"hola@sora.studio",
    "ft.tagline":"Agencia de producto y escala digital · Buenos Aires", "ft.made":"Construido en Argentina para el mundo"
  },
  en: {
    "nav.benefits":"What we solve", "nav.work":"Work", "nav.services":"Services", "nav.about":"About us", "nav.contact":"Let's talk",
    "hero.label":"Ecommerce Operating System",
    "hero.l1":"Operating systems for", "hero.l2":"ecommerce scaling.",
    "hero.sub":"We implement a complete ecommerce system that automates orders, stock, payments, and customer support. Eliminating errors and allowing frictionless scaling.",
    "hero.ctaPrimary":"Systematize my Ecommerce", "hero.ctaSecondary":"View modules ↓",
    "hero.urgency":"⚡ 3 to 6 weeks phased implementation.",
    "auth.label":"Infrastructure prepared for:",
    "auth.1":"High Volume Stores", "auth.2":"Expanding Brands", "auth.3":"B2B/B2C Retail", "auth.4":"Complex Operations",
    "s.benefits":"The Operational Nightmare", "ben.intro":"Operational chaos halts growth. We fix the foundation.",
    "ben.1.t":"Reduce massive human errors", "ben.1.d":"We eliminate broken spreadsheets and manual transfers where data and capital is lost daily.",
    "ben.2.t":"Eliminate bottlenecks", "ben.2.d":"We untangle billing, shipping, and support so you can scale sales infinitely without breaking.",
    "ben.3.t":"Gain time (and budget)", "ben.3.d":"Your team shifts away from repetitive data entry to heavily focus on marketing and growth.",
    "ben.4.t":"Total management control", "ben.4.d":"You get the full picture of your ecommerce in real time. Make decisions based on net revenue, not guesses.",
    "s.work":"Proven results",
    "p.velora.t1":"Ecommerce", "p.velora.t2":"Unified Stock", "p.velora.t3":"Operational AI",
    "p.live":"Operating at scale", "p.see":"See Retail results",
    "cs.challenge":"The operational chaos", "cs.velora.challenge":"A top ecommerce lost clients connecting Shopify to archaic offline billing and disjointed multi-store inventory.",
    "cs.solution":"The developed solution", "cs.velora.solution":"We built a voice-activated management platform with deep AI. It unified everything into one flow, updating stock in real time.",
    "cs.m1":"Processed sales post-launch",
    "cs.m2":"Operational hours saved per month",
    "cs.m3":"Friction or training curve",
    "cs.velora.quote":"“The impact was immediate. In one week we reduced errors to zero and freed up almost all the time we spent entering data. It paid for itself.”",
    "cs.velora.cite":"— Retail Chain (3 branches), LATAM",
    "s.services":"Offer: Ecommerce OS", "srv.intro":"A complete operating system to scale efficiently.",
    "srv.s1.t":"1. Order automation", "srv.s1.d":"Deep Shopify / WooCommerce integrations. 100% automated order workflows dropping manual shipping errors to zero.",
    "srv.s2.t":"2. Real-time inventory", "srv.s2.d":"Instant syncing across all physical and digital channels. Automated thresholds, alerts, and unified control.",
    "srv.s3.t":"3. Unified billing and payments", "srv.s3.d":"Payment automation and hands-free automatic invoice generation with tax entities without touching Excel.",
    "srv.s4.t":"4. Automated customer care", "srv.s4.d":"Integrated automated WhatsApp and email flows. Order trackings and 24/7 autonomous replies.",
    "srv.s5.t":"5. Analytics Dashboard", "srv.s5.d":"Your entire business visualized end-to-end. Real-time global sales, logistics KPIs, and key scale metrics.",
    "s.about":"Results", 
    "sp.title":"We build systems that companies love to use.",
    "sp.q1":"\"Velora changed how we manage the store. Being able to talk to the system and log automatically saved us hours of daily reconciliation.\"",
    "sp.r1":"Owner, Retail Chain (LATAM)",
    "sp.q2":"\"Inventory used to be chaos. Since they integrated real-time billing into Velora, we operate with complete peace of mind.\"",
    "sp.r2":"Store Manager",
    "sp.q3":"\"The true value isn't the app itself, but seeing repetitive daily tasks disappear. It paid for itself in the first month.\"",
    "sp.r3":"Inventory Operator",
    "s.pricing":"Investment & Scale", "pr.intro":"Turn-key solutions. No hidden budgets.",
    "pr.rec":"Recommended",
    "pr.st.d":"Key integrations and core operational automation.",
    "pr.st.f1":"Shopify/WooCommerce Sync", "pr.st.f2":"Basic Inventory Centralization", "pr.st.f3":"Initial 30-day Support",
    "pr.gr.d":"The complete Ecommerce OS (The 5 pillars).",
    "pr.gr.f1":"Everything in Starter", "pr.gr.f2":"Financial Dashboard & APIs", "pr.gr.f3":"Smart WA Automation",
    "pr.sc.d":"For massive volume and corporate AI iteration.",
    "pr.sc.f1":"Custom Development", "pr.sc.f2":"Predictive Demand AI", "pr.sc.f3":"24/7 Priority Server",
    "s.contact":"Apply now", "ct.title":"Let's scale your op.", "ct.sub":"Reach out for a 30 min guaranteed consultation mapping out your infrastructure.",
    "ct.filter":"We strictly work with ecommerce ecosystems that are already selling and need to scale their operation. If you are starting from zero, we are not the right fit for you.",
    "ct.wa":"Talk to Director (WhatsApp)", "ct.mail":"hello@sora.studio",
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
