export const LANGUAGES = [
  { code: 'pt', label: 'PT', name: 'Português', htmlLang: 'pt-BR' },
  { code: 'en', label: 'EN', name: 'English', htmlLang: 'en' },
  { code: 'zh', label: '中文', name: '中文', htmlLang: 'zh-CN' },
  { code: 'es', label: 'ES', name: 'Español', htmlLang: 'es' },
  { code: 'fr', label: 'FR', name: 'Français', htmlLang: 'fr' },
] as const;

export type Lang = (typeof LANGUAGES)[number]['code'];

export const DEFAULT_LANG: Lang = 'pt';

export interface Dictionary {
  meta: { title: string; description: string };
  nav: { about: string; process: string; units: string; contact: string; language: string };
  hero: { title: string; subtitle: string };
  essence: { eyebrow: string; text: string; watermarkAlt: string };
  units: { heading: string; subheading: string; items: Record<'imob' | 'trading' | 'capital' | 'energy', string> };
  principles: { title: string; desc: string }[];
  footer: {
    closing: string;
    cta: string;
    legalName: string;
    address: string;
    contact: string;
    privacy: string;
    confidentiality: string;
  };
}

export const translations: Record<Lang, Dictionary> = {
  pt: {
    meta: {
      title: 'CONCLAVE | Estruturadora de Negócios',
      description: 'Estratégia, inteligência, relações e ativos para criar, organizar e viabilizar operações relevantes.',
    },
    nav: { about: 'A Conclave', process: 'Como Atuamos', units: 'Núcleos', contact: 'Contato', language: 'Idioma' },
    hero: {
      title: 'Estruturamos negócios\npara criar movimentos\nque prosperam.',
      subtitle: 'Estratégia, inteligência, relações e ativos para criar, organizar e viabilizar operações relevantes.',
    },
    essence: {
      eyebrow: 'A Conclave',
      text: 'Nossa essência é reunir pessoas, informações e interesses relevantes em torno de uma mesa de decisão para que decisões complexas sejam tomadas com clareza, responsabilidade e visão próspera.',
      watermarkAlt: 'Marca d\'água do logo da Conclave',
    },
    units: {
      heading: 'Conclave Business',
      subheading: 'O Núcleo Coordenador',
      items: {
        imob: 'Estruturação, intermediação e desenvolvimento de ativos e operações imobiliárias: terrenos, permutas, parcerias e projetos que exigem critério antes do movimento.',
        trading: 'Originação, intermediação e comercialização de bens, ativos e commodities, conectando produtores, fornecedores, compradores e mercados dentro das exigências legais.',
        capital: 'Frente seletiva de desenvolvimento financeiro e participações estratégicas: teses, modelos e veículos societários para projetos escolhidos a dedo.',
        energy: 'Estruturação de projetos e operações de energias renováveis, organizando ativos, parcerias e viabilidade para que iniciativas sustentáveis ganhem consistência e avancem.',
      },
    },
    principles: [
      { title: 'Discrição Absoluta', desc: 'Operamos nos bastidores. O valor está no resultado, não na exposição.' },
      { title: 'Visão de Longo Prazo', desc: 'Não buscamos ganhos efêmeros. Estruturamos fundações para legados duradouros.' },
      { title: 'Rigor Analítico', desc: 'Cada decisão é baseada em dados, inteligência e leitura precisa do cenário global.' },
      { title: 'Exclusividade', desc: 'Selecionamos nossos movimentos e parceiros. Não operamos em volume, mas em profundidade.' },
      { title: 'Proteção', desc: 'A preservação do patrimônio e da reputação antecede qualquer busca por assimetria.' },
      { title: 'Execução Impecável', desc: 'A ideia sem a estrutura e a execução corretas é apenas um conceito. Entregamos realidade.' },
    ],
    footer: {
      closing: 'Uma mesa de decisão para negócios que exigem inteligência, relações, estrutura e presença.',
      cta: 'Agendar Conversa Confidencial',
      legalName: 'Razão Social',
      address: 'Endereço',
      contact: 'Contato',
      privacy: 'Políticas de Privacidade',
      confidentiality: 'Termos de Confidencialidade',
    },
  },

  en: {
    meta: {
      title: 'CONCLAVE | Business Structuring',
      description: 'Strategy, intelligence, relationships and assets to create, organize and enable relevant operations.',
    },
    nav: { about: 'About Conclave', process: 'How We Work', units: 'Divisions', contact: 'Contact', language: 'Language' },
    hero: {
      title: 'We structure businesses\nto create movements\nthat prosper.',
      subtitle: 'Strategy, intelligence, relationships and assets to create, organize and enable relevant operations.',
    },
    essence: {
      eyebrow: 'About Conclave',
      text: 'Our essence is to gather people, information and relevant interests around a decision table, so that complex decisions are made with clarity, responsibility and a prosperous vision.',
      watermarkAlt: 'Conclave logo watermark',
    },
    units: {
      heading: 'Conclave Business',
      subheading: 'The Coordinating Core',
      items: {
        imob: 'Structuring, intermediation and development of real estate assets and operations: land, swaps, partnerships and projects that call for judgment before movement.',
        trading: 'Origination, intermediation and sale of goods, assets and commodities, connecting producers, suppliers, buyers and markets within legal requirements.',
        capital: 'A selective front for financial development and strategic stakes: theses, models and corporate vehicles for carefully chosen projects.',
        energy: 'Structuring of renewable energy projects and operations, organizing assets, partnerships and feasibility so that sustainable initiatives gain consistency and move forward.',
      },
    },
    principles: [
      { title: 'Absolute Discretion', desc: 'We work behind the scenes. Value lies in the result, not in exposure.' },
      { title: 'Long-Term Vision', desc: 'We do not chase fleeting gains. We build foundations for lasting legacies.' },
      { title: 'Analytical Rigor', desc: 'Every decision rests on data, intelligence and a precise reading of the global scenario.' },
      { title: 'Exclusivity', desc: 'We select our moves and our partners. We do not operate in volume, but in depth.' },
      { title: 'Protection', desc: 'Preserving assets and reputation comes before any pursuit of asymmetry.' },
      { title: 'Flawless Execution', desc: 'An idea without the right structure and execution is just a concept. We deliver reality.' },
    ],
    footer: {
      closing: 'A decision table for businesses that demand intelligence, relationships, structure and presence.',
      cta: 'Schedule a Confidential Conversation',
      legalName: 'Legal Name',
      address: 'Address',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      confidentiality: 'Confidentiality Terms',
    },
  },

  zh: {
    meta: {
      title: 'CONCLAVE | 商业架构与发展',
      description: '以战略、洞察、关系与资产，创建、组织并推动具有分量的业务运作。',
    },
    nav: { about: '关于 Conclave', process: '我们的方式', units: '业务板块', contact: '联系', language: '语言' },
    hero: {
      title: '我们构建商业架构，\n成就持续兴旺的发展动能。',
      subtitle: '以战略、洞察、关系与资产，创建、组织并推动具有分量的业务运作。',
    },
    essence: {
      eyebrow: '关于 Conclave',
      text: '我们的本质，是将相关的人、信息与利益汇聚于同一张决策桌前，使复杂的决策建立在清晰、责任与兴旺的远见之上。',
      watermarkAlt: 'Conclave 标志水印',
    },
    units: {
      heading: 'Conclave Business',
      subheading: '统筹核心',
      items: {
        imob: '房地产资产与业务的架构设计、居间撮合与开发：土地、置换、合作及需要先审慎判断、再采取行动的项目。',
        trading: '商品、资产与大宗商品的开发、居间与销售，在法律要求范围内连接生产方、供应方、买方与市场。',
        capital: '有所选择的金融发展与战略参股板块：为精心挑选的项目设计投资逻辑、模型与公司架构。',
        energy: '可再生能源项目与业务的架构设计，梳理资产、合作与可行性，使可持续的项目更扎实、稳步推进。',
      },
    },
    principles: [
      { title: '绝对审慎', desc: '我们在幕后运作。价值体现在成果，而非曝光。' },
      { title: '长远视野', desc: '我们不追逐短暂的收益，而是为持久的传承打下根基。' },
      { title: '严谨分析', desc: '每一项决策都基于数据、洞察与对全球格局的准确研判。' },
      { title: '甄选原则', desc: '我们甄选每一步行动与合作伙伴。我们不追求数量，而追求深度。' },
      { title: '守护', desc: '在追求任何不对称优势之前，先守护资产与声誉。' },
      { title: '卓越执行', desc: '缺少恰当架构与执行的想法，只是一个概念。我们交付现实。' },
    ],
    footer: {
      closing: '一张决策桌，服务于需要洞察、关系、架构与在场的商业事务。',
      cta: '预约保密洽谈',
      legalName: '公司名称',
      address: '地址',
      contact: '联系方式',
      privacy: '隐私政策',
      confidentiality: '保密条款',
    },
  },

  es: {
    meta: {
      title: 'CONCLAVE | Estructuradora de Negocios',
      description: 'Estrategia, inteligencia, relaciones y activos para crear, organizar y viabilizar operaciones relevantes.',
    },
    nav: { about: 'La Conclave', process: 'Cómo Actuamos', units: 'Núcleos', contact: 'Contacto', language: 'Idioma' },
    hero: {
      title: 'Estructuramos negocios\npara crear movimientos\nque prosperan.',
      subtitle: 'Estrategia, inteligencia, relaciones y activos para crear, organizar y viabilizar operaciones relevantes.',
    },
    essence: {
      eyebrow: 'La Conclave',
      text: 'Nuestra esencia es reunir personas, información e intereses relevantes en torno a una mesa de decisión, para que las decisiones complejas se tomen con claridad, responsabilidad y visión próspera.',
      watermarkAlt: 'Marca de agua del logo de Conclave',
    },
    units: {
      heading: 'Conclave Business',
      subheading: 'El Núcleo Coordinador',
      items: {
        imob: 'Estructuración, intermediación y desarrollo de activos y operaciones inmobiliarias: terrenos, permutas, alianzas y proyectos que exigen criterio antes del movimiento.',
        trading: 'Originación, intermediación y comercialización de bienes, activos y commodities, conectando productores, proveedores, compradores y mercados dentro de las exigencias legales.',
        capital: 'Frente selectivo de desarrollo financiero y participaciones estratégicas: tesis, modelos y vehículos societarios para proyectos elegidos con cuidado.',
        energy: 'Estructuración de proyectos y operaciones de energías renovables, organizando activos, alianzas y viabilidad para que las iniciativas sostenibles ganen consistencia y avancen.',
      },
    },
    principles: [
      { title: 'Discreción Absoluta', desc: 'Operamos entre bastidores. El valor está en el resultado, no en la exposición.' },
      { title: 'Visión de Largo Plazo', desc: 'No buscamos ganancias efímeras. Estructuramos cimientos para legados duraderos.' },
      { title: 'Rigor Analítico', desc: 'Cada decisión se basa en datos, inteligencia y una lectura precisa del escenario global.' },
      { title: 'Exclusividad', desc: 'Seleccionamos nuestros movimientos y aliados. No operamos en volumen, sino en profundidad.' },
      { title: 'Protección', desc: 'La preservación del patrimonio y de la reputación antecede cualquier búsqueda de asimetría.' },
      { title: 'Ejecución Impecable', desc: 'Una idea sin la estructura y la ejecución correctas es solo un concepto. Entregamos realidad.' },
    ],
    footer: {
      closing: 'Una mesa de decisión para negocios que exigen inteligencia, relaciones, estructura y presencia.',
      cta: 'Agendar Conversación Confidencial',
      legalName: 'Razón Social',
      address: 'Dirección',
      contact: 'Contacto',
      privacy: 'Política de Privacidad',
      confidentiality: 'Términos de Confidencialidad',
    },
  },

  fr: {
    meta: {
      title: 'CONCLAVE | Structuration d\'Affaires',
      description: 'Stratégie, intelligence, relations et actifs pour créer, organiser et rendre viables des opérations d\'envergure.',
    },
    nav: { about: 'La Conclave', process: 'Notre Approche', units: 'Pôles', contact: 'Contact', language: 'Langue' },
    hero: {
      title: 'Nous structurons des affaires\npour créer des mouvements\nqui prospèrent.',
      subtitle: 'Stratégie, intelligence, relations et actifs pour créer, organiser et rendre viables des opérations d\'envergure.',
    },
    essence: {
      eyebrow: 'La Conclave',
      text: 'Notre essence est de réunir personnes, informations et intérêts pertinents autour d\'une table de décision, afin que les décisions complexes soient prises avec clarté, responsabilité et vision prospère.',
      watermarkAlt: 'Filigrane du logo Conclave',
    },
    units: {
      heading: 'Conclave Business',
      subheading: 'Le Pôle Coordinateur',
      items: {
        imob: 'Structuration, intermédiation et développement d\'actifs et d\'opérations immobilières : terrains, permutes, partenariats et projets qui exigent du discernement avant le mouvement.',
        trading: 'Origination, intermédiation et commercialisation de biens, d\'actifs et de matières premières, en reliant producteurs, fournisseurs, acheteurs et marchés dans le respect des exigences légales.',
        capital: 'Volet sélectif de développement financier et de participations stratégiques : thèses, modèles et véhicules sociétaires pour des projets choisis avec soin.',
        energy: 'Structuration de projets et d\'opérations d\'énergies renouvelables, en organisant actifs, partenariats et viabilité afin que les initiatives durables gagnent en solidité et avancent.',
      },
    },
    principles: [
      { title: 'Discrétion Absolue', desc: 'Nous œuvrons en coulisses. La valeur réside dans le résultat, non dans l\'exposition.' },
      { title: 'Vision de Long Terme', desc: 'Nous ne cherchons pas des gains éphémères. Nous bâtissons des fondations pour des héritages durables.' },
      { title: 'Rigueur Analytique', desc: 'Chaque décision repose sur des données, de l\'intelligence et une lecture précise du contexte mondial.' },
      { title: 'Exclusivité', desc: 'Nous sélectionnons nos mouvements et nos partenaires. Nous n\'opérons pas en volume, mais en profondeur.' },
      { title: 'Protection', desc: 'La préservation du patrimoine et de la réputation précède toute recherche d\'asymétrie.' },
      { title: 'Exécution Impeccable', desc: 'Une idée sans la bonne structure ni la bonne exécution n\'est qu\'un concept. Nous livrons la réalité.' },
    ],
    footer: {
      closing: 'Une table de décision pour des affaires qui exigent intelligence, relations, structure et présence.',
      cta: 'Planifier un Entretien Confidentiel',
      legalName: 'Raison Sociale',
      address: 'Adresse',
      contact: 'Contact',
      privacy: 'Politique de Confidentialité',
      confidentiality: 'Conditions de Confidentialité',
    },
  },
};
