export type Lang = 'es' | 'en';
type T = Record<Lang, string>;

export interface Project {
  slug: string;
  name: string;
  url: string;
  category: T;
  problem: T;
  built: T;
  /** Cifra o cita real de resultado. Vacío = se muestra un aviso para completarlo. */
  result?: T;
  /** Filas de la "ficha de medidas": cómo se trabajaba antes. */
  measures?: { k: T; v: T }[];
  stack: string[];
  featured?: boolean;
  /** Proyectos que tocan dinero: muestran aviso de "no es asesoramiento". */
  finance?: boolean;
  /** Ruta de una captura real en /public (por ejemplo /shots/atelier.webp). */
  image?: string;
  /** Oculto hasta que José confirme qué hace. */
  draft?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'atelier',
    name: 'Atelier',
    url: 'https://style-spotligh-atelier.lovable.app',
    featured: true,
    category: { es: 'Análisis de imagen personal con IA', en: 'AI personal-style analysis' },
    problem: {
      es: 'Un asesoramiento de imagen personal es caro y difícil de repetir cuando cambias de estilo.',
      en: 'Personal-style consulting is expensive and hard to repeat when your style changes.',
    },
    built: {
      es: 'A partir de hasta seis fotos genera una guía de rostro, color, maquillaje, peinado, vestuario y silueta. Las fotos se quedan en el dispositivo.',
      en: 'From up to six photos it builds a guide to face, colour, make-up, hair, wardrobe and silhouette. Photos never leave the device.',
    },
    measures: [
      { k: { es: 'Asesoría de imagen', en: 'Style advice' }, v: { es: 'Cara y presencial', en: 'Costly and in person' } },
      { k: { es: 'Fotos del cliente', en: 'Client photos' }, v: { es: 'Sensibles, no deben subirse', en: 'Sensitive, must stay private' } },
      { k: { es: 'Resultado', en: 'Output' }, v: { es: 'Notas sueltas, sin guía', en: 'Loose notes, no guide' } },
    ],
    stack: ['Computer vision', 'React', 'Local-first'],
  },
  {
    slug: 'respira',
    name: 'Respira',
    url: 'https://one-payment-brighter.lovable.app',
    featured: true,
    finance: true,
    category: { es: 'Consolidación de deudas', en: 'Debt consolidation' },
    problem: {
      es: 'Varias deudas con cuotas y fechas distintas, y ninguna idea de cuándo terminarás de pagarlas.',
      en: 'Several debts with different payments and dates, and no idea when you will be done.',
    },
    built: {
      es: 'Registro de deudas, un semáforo en lenguaje sencillo y un simulador que muestra al instante la nueva cuota y la fecha en que quedarás libre.',
      en: 'A debt register, a plain-language traffic light and a simulator that instantly shows the new payment and your debt-free date.',
    },
    measures: [
      { k: { es: 'Deudas', en: 'Debts' }, v: { es: 'Varias, con fechas distintas', en: 'Several, different dates' } },
      { k: { es: 'Diagnóstico', en: 'Diagnosis' }, v: { es: 'Letra pequeña, sin explicar', en: 'Small print, unexplained' } },
      { k: { es: 'Fecha de fin', en: 'Debt-free date' }, v: { es: 'Desconocida', en: 'Unknown' } },
    ],
    stack: ['React', 'Simulator', 'UX writing'],
  },
  {
    slug: 'football-academy',
    name: 'Football Academy',
    url: 'https://football-academy-mvp.emergent.host/login',
    featured: true,
    category: { es: 'SaaS para una academia de fútbol', en: 'SaaS for a football academy' },
    problem: {
      es: 'Altas por WhatsApp, cuotas sin conciliar y horarios hechos a mano.',
      en: 'Sign-ups over WhatsApp, unreconciled fees and hand-made schedules.',
    },
    built: {
      es: 'Inscripciones, pagos, CRM de familias y calendario de entrenamientos en una sola app.',
      en: 'Enrolment, payments, a family CRM and the training calendar in one app.',
    },
    measures: [
      { k: { es: 'Altas de alumnos', en: 'Enrolment' }, v: { es: 'WhatsApp y hoja de cálculo', en: 'WhatsApp and a spreadsheet' } },
      { k: { es: 'Cuotas mensuales', en: 'Monthly fees' }, v: { es: 'Transferencias sin conciliar', en: 'Unreconciled transfers' } },
      { k: { es: 'Horarios y grupos', en: 'Schedules' }, v: { es: 'Organizados a mano', en: 'Planned by hand' } },
    ],
    stack: ['React', 'SaaS', 'Pagos', 'CRM'],
  },
  {
    slug: 'flexfit',
    name: 'FlexFit',
    url: 'https://stride-tracker-fitgym.lovable.app',
    featured: true,
    category: { es: 'Entrenamiento en cualquier lugar', en: 'Train anywhere' },
    problem: {
      es: 'Entrenar fuera del gimnasio sin plan ni forma de ver el progreso.',
      en: 'Training away from the gym with no plan and no way to see progress.',
    },
    built: {
      es: 'Planes de calistenia, gimnasio y funcional, rutinas guiadas con temporizador y seguimiento del progreso.',
      en: 'Calisthenics, gym and functional plans, guided timed routines and progress tracking.',
    },
    stack: ['React', 'Timers', 'Progress tracking'],
  },
  {
    slug: 'hearthbeat',
    name: 'HearthBeat',
    url: 'https://hearthbeat-family-hub.com',
    category: { es: 'Salud familiar', en: 'Family health' },
    problem: {
      es: 'El historial de salud de la familia, repartido entre papeles y apps distintas.',
      en: 'The family health record, scattered across paper and different apps.',
    },
    built: {
      es: 'Perfiles por persona, tendencias de constantes e informes listos para el médico.',
      en: 'Per-person profiles, vital-sign trends and doctor-ready reports.',
    },
    stack: ['React', 'Charts', 'Reports'],
  },
  {
    slug: 'moneyminder',
    name: 'MoneyMinder',
    url: 'https://moneyminder-76.emergent.host/',
    finance: true,
    category: { es: 'Finanzas personales', en: 'Personal finance' },
    problem: { es: 'Ninguna visibilidad de en qué se va el dinero.', en: 'No visibility of where the money goes.' },
    built: {
      es: 'Control de gastos con categorización por IA, informes visuales y varios idiomas.',
      en: 'Expense tracking with AI categorisation, visual reports and several languages.',
    },
    stack: ['React', 'D3.js', 'AI', 'i18n'],
  },
  {
    slug: 'commute-summarizer',
    name: 'Commute Summarizer',
    url: 'https://ai-commute-summarizer-820940536854.us-west1.run.app/',
    category: { es: 'Resúmenes de audio con IA', en: 'AI audio briefings' },
    problem: { es: 'Demasiada información y poco tiempo en el trayecto.', en: 'Too much to read, too little time on the commute.' },
    built: {
      es: 'Convierte noticias y novedades en resúmenes de audio pensados para el trayecto.',
      en: 'Turns news and updates into audio briefings sized for the commute.',
    },
    stack: ['NLP', 'Text-to-speech', 'React'],
  },
  {
    slug: 'vibeforge',
    name: 'VibeForge',
    url: 'https://smooth-build-studio.lovable.app',
    category: { es: 'Generación de código con IA', en: 'AI code generation' },
    problem: { es: 'Pasar de la idea al código lleva demasiado tiempo.', en: 'Going from idea to code takes too long.' },
    built: {
      es: 'Un estudio que genera la base de una app a partir de una descripción y permite exportar el código.',
      en: 'A studio that generates an app skeleton from a description and exports the code.',
    },
    stack: ['Code generation', 'React', 'Node.js'],
  },
  {
    slug: 'pitch-pulse',
    name: 'Pitch Pulse',
    url: 'https://fantasy-pitch-pulse.lovable.app',
    category: { es: 'Estadísticas de fútbol', en: 'Football stats' },
    problem: { es: 'Datos de partidos dispersos y difíciles de comparar.', en: 'Match data scattered and hard to compare.' },
    built: { es: 'Panel de estadísticas y análisis de jugadores para fantasy.', en: 'Player stats and analysis dashboard for fantasy football.' },
    stack: ['React', 'Sports API', 'Analytics'],
  },
  {
    slug: 'thursday-football',
    name: 'Thursday Football',
    url: 'https://thursdayfootball.netlify.app',
    category: { es: 'Organización de partidos', en: 'Match organiser' },
    problem: { es: 'Organizar el partido semanal por chat es un caos.', en: 'Organising the weekly game over chat is chaos.' },
    built: { es: 'Convocatorias, equipos y calendario para un grupo de amigos.', en: 'Call-ups, teams and calendar for a group of friends.' },
    stack: ['React', 'Scheduling'],
  },
  {
    slug: 'sprint-tracker',
    name: 'Sprint Tracker',
    url: 'https://ready-set-track.lovable.app',
    category: { es: 'Gestión ágil', en: 'Agile tracking' },
    problem: { es: 'Equipos sin visibilidad del sprint ni de su velocidad.', en: 'Teams without visibility of the sprint or their velocity.' },
    built: { es: 'Planificación de sprints, objetivos y seguimiento de velocidad.', en: 'Sprint planning, goals and velocity tracking.' },
    stack: ['React', 'Node.js', 'WebSocket'],
  },
  {
    slug: 'vitalpath',
    name: 'VitalPath',
    url: 'https://teffy-yoga-studio.lovable.app',
    draft: true,
    category: { es: 'Bienestar integral', en: 'Holistic wellness' },
    problem: { es: '[Describe el problema]', en: '[Describe the problem]' },
    built: {
      es: 'Programas de fitness, nutrición, bienestar mental y coaching con profesionales.',
      en: 'Fitness programmes, nutrition, mental wellbeing and coaching with professionals.',
    },
    stack: ['React'],
  },
  {
    slug: '5bots',
    name: '5Bots',
    url: 'https://fivefold-market-council.lovable.app',
    draft: true,
    finance: true,
    category: { es: 'Panel de bots de trading', en: 'Trading bot dashboard' },
    problem: { es: '[Describe el problema]', en: '[Describe the problem]' },
    built: { es: '[Describe lo que construiste]', en: '[Describe what you built]' },
    stack: ['React'],
  },
];

export const published = projects.filter((p) => !p.draft);
export const featured = published.filter((p) => p.featured);
export const fichaProjects = featured.filter((p) => p.measures?.length);
