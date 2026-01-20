import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, ChevronRight, Award, Target, Settings, Droplet, Factory, Beaker, Globe, MapPin, Check, Shield, Zap, Package, Wrench, FileCheck } from 'lucide-react';
import logo from './assets/bestsolution-logo.png';

export default function BestSolutionPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [showWatericon, setShowWatericon] = useState(false);
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      nav: { home: 'Home', about: 'About', services: 'Services', contact: 'Contact' },
      hero: {
        badge: 'Mozambique • Multi-Disciplinary Engineering',
        title: 'Multi-Disciplinary Engineering Solutions',
        titleHighlight: 'for Industry & Infrastructure',
        subtitle: 'Engineering, environmental and industrial solutions delivered with technical excellence, integrity, and operational focus across Mozambique',
        exploreBtn: 'Explore Our Services',
        contactBtn: 'Get in Touch'
      },
      credentials: { experience: 'Years Engineering Experience', divisions: 'Engineering Divisions', coverage: 'National Coverage' },
      about: {
        title: 'Who We Are',
        text1: 'is a leading multi-disciplinary engineering firm operating in Mozambique. We bridge the gap between technical complexity and operational efficiency by delivering practical, high-impact engineering solutions tailored to industrial, environmental, and infrastructure challenges.',
        text2: 'Our expertise spans industrial maintenance, water and environmental engineering, geological studies, and specialized technical consulting. We support our clients throughout the full project lifecycle — from concept and design to execution, operation, and long-term asset management.',
        text3: 'Driven by ethical standards, safety, and technical excellence, we combine local knowledge with global best practices through strategic partnerships such as',
        text3End: 'ensuring reliable and sustainable solutions for our clients.'
      },
      services: {
        title: 'Our Engineering Divisions',
        subtitle: 'Five specialized divisions delivering comprehensive engineering solutions across industry and infrastructure',
        keyServices: 'Key Services:',
        learnMore: 'Learn More'
      },
      certifications: {
        title: 'Certifications & Standards',
        subtitle: 'Committed to international quality, safety, and environmental management standards'
      },
      why: {
        title: 'Why Best Solution?',
        items: [
          'Multi-disciplinary engineering expertise',
          'Proven industrial and environmental experience',
          'Strong ethical and safety standards',
          'National coverage across Mozambique',
          'International technical partnerships'
        ]
      },
      watericon: {
        badge: 'Strategic Partnership',
        title: 'Watericon Industrial Water Treatment',
        subtitle: 'Official Representative in Mozambique',
        description: "Best Solution is proud to represent Watericon, Africa's leading end-to-end water treatment solutions provider with presence across 17 countries in MEA region",
        stat1: 'Countries Across MEA',
        stat2: 'Offices in Africa & Middle East',
        stat3: 'Chemical Production Facility',
        button: 'Explore Watericon Solutions',
        whoIsTitle: 'Who is Watericon',
        whoIsText1: 'Watericon is an end-to-end water treatment solutions provider with a strong presence across Africa and the Middle East. Headquartered in Johannesburg, they operate 6 offices across the MEA region.',
        engineeringTitle: 'Engineering Services',
        equipmentTitle: 'Equipment & Consumables',
        labTitle: 'Laboratory Services',
        chemicalsTitle: 'Chemicals & Mining',
        businessTitle: 'Business Solutions',
        ctaTitle: 'Need Industrial Water Treatment Solutions?',
        ctaText: "Contact Best Solution as Watericon's official representative in Mozambique",
        ctaButton: 'Contact Best Solution'
      },
      cta: {
        title: 'Looking for reliable engineering solutions?',
        subtitle: 'Talk to our team and discover how Best Solution Engineering & Consulting can support your project from design to operation',
        button: 'Contact Us'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Ready to start your project? Get in touch with our engineering team',
        location: 'Maputo, Mozambique',
        address: 'Address',
        divisions: 'Our Engineering Divisions'
      },
      footer: {
        subtitle: 'Multi-Disciplinary Engineering Solutions for Industry & Infrastructure',
        location: 'Headquartered in Maputo, Mozambique',
        rights: '© 2025 Best Solution Engineering & Consulting. All rights reserved.'
      },
      divisionPage: {
        overview: 'Overview',
        keyServices: 'Key Services',
        capabilities: 'Capabilities',
        ctaTitle: 'Interested in this service?',
        ctaSubtitle: 'Contact our team to discuss your project requirements',
        ctaButton: 'Get in Touch'
      }
    },
    pt: {
      nav: { home: 'Início', about: 'Sobre Nós', services: 'Serviços', contact: 'Contacto' },
      hero: {
        badge: 'Moçambique • Engenharia Multi-Disciplinar',
        title: 'Soluções de Engenharia Multi-Disciplinar',
        titleHighlight: 'para Indústria e Infraestrutura',
        subtitle: 'Soluções de engenharia, ambientais e industriais entregues com excelência técnica, integridade e foco operacional em Moçambique',
        exploreBtn: 'Explorar Serviços',
        contactBtn: 'Entre em Contacto'
      },
      credentials: { experience: 'Anos de Experiência em Engenharia', divisions: 'Divisões de Engenharia', coverage: 'Cobertura Nacional' },
      about: {
        title: 'Quem Somos',
        text1: 'é uma empresa líder em engenharia multi-disciplinar que opera em Moçambique. Fazemos a ponte entre a complexidade técnica e a eficiência operacional, fornecendo soluções de engenharia práticas e de alto impacto adaptadas aos desafios industriais, ambientais e de infraestrutura.',
        text2: 'A nossa experiência abrange manutenção industrial, engenharia ambiental e de águas, estudos geológicos e consultoria técnica especializada. Apoiamos os nossos clientes durante todo o ciclo de vida do projeto — desde o conceito e design até à execução, operação e gestão de ativos a longo prazo.',
        text3: 'Impulsionados por padrões éticos, segurança e excelência técnica, combinamos conhecimento local com as melhores práticas globais através de parcerias estratégicas como',
        text3End: 'garantindo soluções fiáveis e sustentáveis para os nossos clientes.'
      },
      services: {
        title: 'As Nossas Divisões de Engenharia',
        subtitle: 'Cinco divisões especializadas que fornecem soluções de engenharia abrangentes para a indústria e infraestrutura',
        keyServices: 'Serviços Principais:',
        learnMore: 'Saber Mais'
      },
      certifications: {
        title: 'Certificações e Normas',
        subtitle: 'Comprometidos com padrões internacionais de qualidade, segurança e gestão ambiental'
      },
      why: {
        title: 'Porquê Best Solution?',
        items: [
          'Experiência em engenharia multi-disciplinar',
          'Experiência comprovada industrial e ambiental',
          'Padrões éticos e de segurança rigorosos',
          'Cobertura nacional em Moçambique',
          'Parcerias técnicas internacionais'
        ]
      },
      watericon: {
        badge: 'Parceria Estratégica',
        title: 'Watericon Tratamento Industrial de Água',
        subtitle: 'Representante Oficial em Moçambique',
        description: 'A Best Solution tem orgulho em representar a Watericon, principal fornecedor de soluções completas de tratamento de água em África, com presença em 17 países da região MEA',
        stat1: 'Países na Região MEA',
        stat2: 'Escritórios em África e Médio Oriente',
        stat3: 'Instalação de Produção Química',
        button: 'Explorar Soluções Watericon',
        whoIsTitle: 'Quem é a Watericon',
        whoIsText1: 'A Watericon é um fornecedor completo de soluções de tratamento de água com forte presença em África e no Médio Oriente. Com sede em Joanesburgo, operam 6 escritórios na região MEA.',
        engineeringTitle: 'Serviços de Engenharia',
        equipmentTitle: 'Equipamentos e Consumíveis',
        labTitle: 'Serviços Laboratoriais',
        chemicalsTitle: 'Químicos e Mineração',
        businessTitle: 'Soluções de Negócio',
        ctaTitle: 'Precisa de Soluções de Tratamento de Água Industrial?',
        ctaText: 'Contacte a Best Solution como representante oficial da Watericon em Moçambique',
        ctaButton: 'Contactar Best Solution'
      },
      cta: {
        title: 'À procura de soluções de engenharia fiáveis?',
        subtitle: 'Fale com a nossa equipa e descubra como a Best Solution Engineering & Consulting pode apoiar o seu projeto desde o design até à operação',
        button: 'Contacte-nos'
      },
      contact: {
        title: 'Contacte-nos',
        subtitle: 'Pronto para iniciar o seu projeto? Entre em contacto com a nossa equipa de engenharia',
        location: 'Maputo, Moçambique',
        address: 'Endereço',
        divisions: 'As Nossas Divisões de Engenharia'
      },
      footer: {
        subtitle: 'Soluções de Engenharia Multi-Disciplinar para Indústria e Infraestrutura',
        location: 'Sede em Maputo, Moçambique',
        rights: '© 2025 Best Solution Engineering & Consulting. Todos os direitos reservados.'
      },
      divisionPage: {
        overview: 'Visão Geral',
        keyServices: 'Serviços Principais',
        capabilities: 'Capacidades',
        ctaTitle: 'Interessado neste serviço?',
        ctaSubtitle: 'Contacte a nossa equipa para discutir os requisitos do seu projeto',
        ctaButton: 'Entre em Contacto'
      }
    }
  };

  const t = translations[language];

  const certifications = [
    {
      code: 'ISO 45001:2018',
      name: language === 'en' ? 'Occupational Health and Safety Management System' : 'Sistema de Gestão de Saúde e Segurança Ocupacional',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      code: 'ISO 9001:2015',
      name: language === 'en' ? 'Quality Management System Awareness' : 'Consciência do Sistema de Gestão da Qualidade',
      icon: Award,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      code: 'ISO 14001:2015',
      name: language === 'en' ? 'Environmental Management System Awareness' : 'Consciência do Sistema de Gestão Ambiental',
      icon: Droplet,
      color: 'from-green-500 to-emerald-500'
    },
    {
      code: 'ISO 50001:2018',
      name: language === 'en' ? 'Energy Management System Awareness' : 'Consciência do Sistema de Gestão de Energia',
      icon: Zap,
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state?.page === 'watericon') {
        setShowWatericon(true);
        setSelectedDivision(null);
      } else if (event.state?.page === 'division' && event.state?.divisionId) {
        const division = getDivisions().find(d => d.id === event.state.divisionId);
        setSelectedDivision(division);
        setShowWatericon(false);
      } else {
        setShowWatericon(false);
        setSelectedDivision(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [language]);

  // Atualizar a divisão selecionada quando o idioma mudar
  useEffect(() => {
    if (selectedDivision) {
      const updatedDivision = getDivisions().find(d => d.id === selectedDivision.id);
      setSelectedDivision(updatedDivision);
    }
  }, [language]);

  const navigateToDivision = (division) => {
    setSelectedDivision(division);
    setShowWatericon(false);
    window.history.pushState({ page: 'division', divisionId: division.id }, '', `#division-${division.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getDivisions = () => [
    {
      id: 'industrial',
      title: language === 'en' ? "Industrial Maintenance & Facility Management" : "Manutenção Industrial e Gestão de Instalações",
      icon: Settings,
      color: 'from-blue-600 to-cyan-500',
      tagline: language === 'en' ? "Keeping critical assets operating safely and efficiently" : "Mantendo ativos críticos operando com segurança e eficiência",
      description: language === 'en'
        ? "We provide comprehensive industrial maintenance and facility management solutions to ensure the reliability, safety, and efficiency of critical infrastructure and assets."
        : "Fornecemos soluções abrangentes de manutenção industrial e gestão de instalações para garantir a confiabilidade, segurança e eficiência de infraestruturas e ativos críticos.",
      services: language === 'en' ? [
        "Technical infrastructure management",
        "Preventive and corrective industrial maintenance",
        "Mechanical and electrical installations engineering",
        "Facility operations support and optimization"
      ] : [
        "Gestão de infraestrutura técnica",
        "Manutenção industrial preventiva e corretiva",
        "Engenharia de instalações mecânicas e elétricas",
        "Apoio e otimização de operações de instalações"
      ],
      detailedDescription: language === 'en'
        ? "Our industrial maintenance division specializes in providing end-to-end solutions for critical infrastructure. We combine predictive maintenance technologies with hands-on expertise to minimize downtime and maximize asset lifespan."
        : "A nossa divisão de manutenção industrial especializa-se em fornecer soluções completas para infraestruturas críticas. Combinamos tecnologias de manutenção preditiva com experiência prática para minimizar o tempo de inatividade e maximizar a vida útil dos ativos.",
      capabilities: language === 'en' ? [
        "24/7 emergency response teams",
        "Predictive maintenance programs",
        "Asset lifecycle management",
        "Energy efficiency optimization",
        "Compliance and safety audits",
        "Equipment modernization"
      ] : [
        "Equipas de resposta a emergências 24/7",
        "Programas de manutenção preditiva",
        "Gestão do ciclo de vida de ativos",
        "Otimização de eficiência energética",
        "Auditorias de conformidade e segurança",
        "Modernização de equipamentos"
      ],
      gallery: [
        { url: 'https://pipemasters.pt/blog/wp-content/uploads/2019/03/manuten%C3%A7%C3%A3o-industrial-1024x685.jpg' },
        { url: 'https://www.maddoxindustrial.com/hubfs/services/MIG/images/Industrial%20Preventive%20Maintenance%20Services-1.jpg' },
        { url: 'https://watericon.com/wp-content/uploads/2022/01/watericon-bmw2.jpg' }
      ]
    },
    {
      id: 'water',
      title: language === 'en' ? "Water & Environmental Engineering" : "Engenharia Ambiental e de Águas",
      icon: Droplet,
      color: 'from-cyan-500 to-teal-500',
      tagline: language === 'en' ? "From water source to sustainable discharge" : "Da fonte de água ao descarte sustentável",
      description: language === 'en'
        ? "We deliver advanced water and environmental engineering solutions for industrial, municipal, and commercial applications, covering the full EPC and operational lifecycle."
        : "Fornecemos soluções avançadas de engenharia ambiental e de águas para aplicações industriais, municipais e comerciais, cobrindo todo o ciclo EPC e operacional.",
      services: language === 'en' ? [
        "EPC projects (Engineering, Procurement & Construction)",
        "Water treatment, wastewater treatment and desalination systems",
        "Industrial water reuse and environmental compliance solutions",
        "24/7 monitoring and O&M (Operation & Maintenance) contracts"
      ] : [
        "Projetos EPC (Engenharia, Aquisição e Construção)",
        "Tratamento de água, águas residuais e sistemas de dessalinização",
        "Reutilização de água industrial e soluções de conformidade ambiental",
        "Monitorização 24/7 e contratos O&M (Operação e Manutenção)"
      ],
      detailedDescription: language === 'en'
        ? "Our water and environmental engineering division brings world-class water treatment technology and expertise to industries across Mozambique. Our solutions range from small-scale water purification systems to large industrial wastewater treatment plants."
        : "A nossa divisão de engenharia ambiental e de águas traz tecnologia e experiência de classe mundial em tratamento de água para indústrias em Moçambique. As nossas soluções variam de sistemas de purificação de água em pequena escala a grandes plantas de tratamento.",
      capabilities: language === 'en' ? [
        "Reverse osmosis systems", "Biological treatment processes", "Chemical dosing systems",
        "Zero liquid discharge (ZLD)", "Remote monitoring & control", "Regulatory compliance support"
      ] : [
        "Sistemas de osmose reversa", "Processos de tratamento biológico", "Sistemas de dosagem química",
        "Descarga líquida zero (ZLD)", "Monitorização e controlo remoto", "Apoio à conformidade regulamentar"
      ],
      gallery: [
        { url: 'https://watericon.com/wp-content/uploads/2022/01/watericon-bmw3.jpg' },
        { url: 'https://media.licdn.com/dms/image/v2/D4D22AQEDCpmiohqJxg/feedshare-shrink_800/B4DZrjAzf8GsAk-/0/1764745230769?e=2147483647&v=beta&t=KL--Y-3a_gKunvaRo9IWwglgW2kugO8Nrm9_jkKwbUM' },
        { url: 'https://nuwater.com/wp-content/uploads/Untitled-design-35.png' }
      ]
    },
    {
      id: 'geological',
      title: language === 'en' ? "Geological & Chemical Consulting" : "Consultoria Geológica e Química",
      icon: Beaker,
      color: 'from-purple-600 to-pink-500',
      tagline: language === 'en' ? "Supporting informed decision-making" : "Apoiando tomadas de decisão informadas",
      description: language === 'en'
        ? "Our geological and chemical consulting services support informed decision-making for mining, construction, industrial operations, and environmental projects."
        : "Os nossos serviços de consultoria geológica e química apoiam a tomada de decisões informadas para projetos de mineração, construção, operações industriais e ambientais.",
      services: language === 'en' ? [
        "Geological and geotechnical studies", "Chemical consulting and process optimization",
        "Customized chemical formulations", "Environmental and industrial analysis support"
      ] : [
        "Estudos geológicos e geotécnicos", "Consultoria química e otimização de processos",
        "Formulações químicas personalizadas", "Apoio à análise ambiental e industrial"
      ],
      detailedDescription: language === 'en'
        ? "Our team of geologists, chemists, and process engineers provide comprehensive consulting services for complex industrial and environmental challenges using advanced analytical techniques."
        : "A nossa equipa de geólogos, químicos e engenheiros de processos fornece serviços de consultoria abrangentes para desafios industriais e ambientais complexos utilizando técnicas analíticas avançadas.",
      capabilities: language === 'en' ? [
        "Site investigation & surveys", "Soil and rock mechanics analysis", "Process chemistry optimization",
        "Custom reagent development", "Laboratory testing services", "Technical feasibility studies"
      ] : [
        "Investigação e levantamentos de locais", "Análise de mecânica de solos e rochas", "Otimização de química de processos",
        "Desenvolvimento de reagentes personalizados", "Serviços de testes laboratoriais", "Estudos de viabilidade técnica"
      ],
      gallery: [
        { url: 'https://watericon.com/wp-content/uploads/2024/08/RO-RANGE-4.webp' },
        { url: 'https://watericon.com/wp-content/uploads/2025/08/37-1.webp' },
        { url: 'https://watericon.com/wp-content/uploads/2025/08/36-1.webp' }
      ]
    },
    {
      id: 'renewable',
      title: language === 'en' ? "Renewable Energy & Drilling Services" : "Energia Renovável e Serviços de Perfuração",
      icon: Zap,
      color: 'from-green-600 to-emerald-500',
      tagline: language === 'en' ? "Sustainable energy and water access solutions" : "Soluções sustentáveis de energia e acesso à água",
      description: language === 'en'
        ? "We provide comprehensive renewable energy installations and drilling services for sustainable development, focusing on solar power systems, electrical infrastructure, and groundwater access."
        : "Fornecemos instalações abrangentes de energia renovável e serviços de perfuração para desenvolvimento sustentável, focando em sistemas de energia solar, infraestrutura elétrica e acesso à água subterrânea.",
      services: language === 'en' ? [
        "Solar power system design and installation", "Domestic, commercial, and industrial electrical wiring",
        "Installation of transformers, switchgear, and control panels", "Borehole drilling and casing installation",
        "Pump installation and repair", "Water testing and purification solutions"
      ] : [
        "Design e instalação de sistemas de energia solar", "Instalações elétricas domésticas, comerciais e industriais",
        "Instalação de transformadores, painéis de controlo e quadros elétricos", "Perfuração de furos e instalação de revestimento",
        "Instalação e reparação de bombas", "Testes de água e soluções de purificação"
      ],
      detailedDescription: language === 'en'
        ? "Our renewable energy and drilling division combines clean energy solutions with reliable water access services, specializing in solar power installations and professional borehole drilling."
        : "A nossa divisão de energia renovável e perfuração combina soluções de energia limpa com serviços confiáveis de acesso à água, especializando-se em instalações de energia solar e perfuração profissional de furos.",
      capabilities: language === 'en' ? [
        "Agro-voltaic system installation", "Energy efficiency audits", "Electrical maintenance and fault diagnosis",
        "Borehole rehabilitation", "Groundwater surveys", "HSE compliance"
      ] : [
        "Instalação de sistemas agro-voltaicos", "Auditorias de eficiência energética", "Manutenção elétrica e diagnóstico",
        "Reabilitação de furos", "Levantamentos de águas subterrâneas", "Conformidade HSE"
      ],
      gallery: [
        { url: 'https://www.oeconomico.com/wp-content/uploads/2023/08/Energias-renovaveis-podem-fornecer-electricidade-a-600-milhoes-de-africanos-que-dela-estao-actualmente-privados-criar-emprego-e-estimular-a-industrializacao-afirmam-peritos.jpg' },
        { url: 'https://apd-images.imgix.net/uploads/sites/9/2021/05/imagem-desafios-e-oportunidades-energ.-renovaveis-scaled.jpg?auto=compress%2Cformat&crop=edges&fit=crop&ixlib=php-1.1.0&w=900&s=e106303e2196de5af19cf4b6ea42d0bb' },
        { url: 'https://www.indico-lam.com/wp-content/uploads/2021/06/revista-indico-edicao-67.jpg' }
      ]
    },
    {
      id: 'hse',
      title: language === 'en' ? "Occupational Health & Safety" : "Higiene e Segurança no Trabalho",
      icon: Shield,
      color: 'from-orange-600 to-red-500',
      tagline: language === 'en' ? "Protecting people, ensuring compliance" : "Protegendo pessoas, garantindo conformidade",
      description: language === 'en'
        ? "We provide comprehensive occupational health and safety services to ensure workplace compliance, risk mitigation, and employee wellbeing across all industries."
        : "Fornecemos serviços abrangentes de higiene e segurança no trabalho para garantir a conformidade no local de trabalho, mitigação de riscos e bem-estar dos funcionários em todas as indústrias.",
      services: language === 'en' ? [
        "HSE management system implementation",
        "Risk assessments and safety audits",
        "PPE supply and training programs",
        "Emergency response planning",
        "Regulatory compliance consulting",
        "Safety training and certification"
      ] : [
        "Implementação de sistemas de gestão HST",
        "Avaliações de risco e auditorias de segurança",
        "Fornecimento de EPI e programas de formação",
        "Planeamento de resposta a emergências",
        "Consultoria de conformidade regulamentar",
        "Formação e certificação em segurança"
      ],
      detailedDescription: language === 'en'
        ? "Our HSE division specializes in creating safe working environments through comprehensive risk management, regulatory compliance, and employee training programs. We help organizations build robust safety cultures."
        : "A nossa divisão de HST especializa-se em criar ambientes de trabalho seguros através de gestão abrangente de riscos, conformidade regulamentar e programas de formação de funcionários. Ajudamos as organizações a construir culturas de segurança robustas.",
      capabilities: language === 'en' ? [
        "ISO 45001 certification support",
        "Incident investigation and analysis",
        "Safety culture development",
        "Occupational health monitoring",
        "Fire safety and prevention",
        "Contractor safety management"
      ] : [
        "Apoio à certificação ISO 45001",
        "Investigação e análise de incidentes",
        "Desenvolvimento de cultura de segurança",
        "Monitorização de saúde ocupacional",
        "Segurança e prevenção de incêndios",
        "Gestão de segurança de contratados"
      ],
      gallery: [
        { url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800' },
        { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800' },
        { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800' }
      ]
    }
  ];

  const divisions = getDivisions();

  const credentials = [
    { value: '10+', label: t.credentials.experience, icon: Award },
    { value: '5', label: t.credentials.divisions, icon: Target },
    { value: '100%', label: t.credentials.coverage, icon: MapPin }
  ];

  const differentials = t.why.items.map((text, idx) => ({
    text,
    icon: [Target, Shield, Check, Globe, Award][idx]
  }));

  const watericonServices = {
    engineering: language === 'en' ? [
      'Design, build, install & commission water treatment plants',
      'Demineralised water & desalination systems',
      'Wastewater treatment & zero liquid discharge',
      'Containerised water treatment plants',
      '24/7 monitoring & interactive back office'
    ] : [
      'Design, construção, instalação e comissionamento de plantas de tratamento de água',
      'Água desmineralizada e sistemas de dessalinização',
      'Tratamento de águas residuais e descarga líquida zero',
      'Plantas de tratamento de água containerizadas',
      'Monitorização 24/7 e back office interativo'
    ],
    equipment: language === 'en' ? [
      'Largest stock holding in Africa & Middle East',
      'RO/UF/NF/MF membranes',
      'Ion exchange resins & UV systems',
      'Pumps, filters & dosing systems',
      '6 warehouses for immediate distribution'
    ] : [
      'Maior stock em África e Médio Oriente',
      'Membranas RO/UF/NF/MF',
      'Resinas de troca iónica e sistemas UV',
      'Bombas, filtros e sistemas de dosagem',
      '6 armazéns para distribuição imediata'
    ],
    lab: language === 'en' ? [
      'SANAS accredited water analysis',
      'Organic, inorganic & microbiological testing',
      'R&D and trial plants',
      'Laboratory equipment distribution'
    ] : [
      'Análise de água acreditada SANAS',
      'Testes orgânicos, inorgânicos e microbiológicos',
      'Plantas de I&D e ensaio',
      'Distribuição de equipamentos laboratoriais'
    ],
    chemicals: language === 'en' ? [
      'Hydrance specialty chemicals brand',
      'Coagulants, flocculants & biocides',
      'Mining water treatment specialists',
      'ISO 9001 & 45001, SABS certified'
    ] : [
      'Marca de químicos especializados Hydrance',
      'Coagulantes, floculantes e biocidas',
      'Especialistas em tratamento de água de mineração',
      'Certificação ISO 9001 & 45001, SABS'
    ]
  };

  const businessSolutions = language === 'en' ? [
    { icon: Zap, title: 'BOOT/BOT', desc: 'Build, Own, Operate & Transfer', color: 'cyan' },
    { icon: Settings, title: 'Rentals & Leasing', desc: 'Rapid deployment', color: 'blue' },
    { icon: Wrench, title: 'O&M Services', desc: 'Operations & maintenance', color: 'purple' },
    { icon: Award, title: 'Project Financing', desc: 'Flexible payment terms', color: 'green' }
  ] : [
    { icon: Zap, title: 'BOOT/BOT', desc: 'Construir, Possuir, Operar e Transferir', color: 'cyan' },
    { icon: Settings, title: 'Alugueres e Leasing', desc: 'Implantação rápida', color: 'blue' },
    { icon: Wrench, title: 'Serviços O&M', desc: 'Operações e manutenção', color: 'purple' },
    { icon: Award, title: 'Financiamento de Projetos', desc: 'Termos de pagamento flexíveis', color: 'green' }
  ];

  if (showWatericon) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <nav className="fixed w-full z-50 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Droplet className="text-white" size={28} />
                </div>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-slate-800">WATERICON</h1>
                  <p className="text-xs text-slate-600">Industrial Water Treatment</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-28 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 text-white mb-12">
              <Droplet className="mb-6" size={64} />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Watericon Partnership</h1>
              <p className="text-xl bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block mb-4">
                {t.watericon.subtitle}
              </p>
              <p className="text-2xl italic opacity-90">End-to-end water treatment solutions provider</p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.watericon.whoIsTitle}</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {t.watericon.whoIsText1}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-cyan-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">17</div>
                  <div className="text-slate-700">{t.watericon.stat1}</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                  <div className="text-slate-700">{t.watericon.stat2}</div>
                </div>
                <div className="bg-teal-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">2000m²</div>
                  <div className="text-slate-700">{t.watericon.stat3}</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Settings className="text-cyan-600" size={32} />
                  {t.watericon.engineeringTitle}
                </h3>
                <ul className="space-y-3">
                  {watericonServices.engineering.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Package className="text-blue-600" size={32} />
                  {t.watericon.equipmentTitle}
                </h3>
                <ul className="space-y-3">
                  {watericonServices.equipment.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Beaker className="text-purple-600" size={32} />
                  {t.watericon.labTitle}
                </h3>
                <ul className="space-y-3">
                  {watericonServices.lab.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Factory className="text-green-600" size={32} />
                  {t.watericon.chemicalsTitle}
                </h3>
                <ul className="space-y-3">
                  {watericonServices.chemicals.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.watericon.businessTitle}</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {businessSolutions.map((item, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className={`text-${item.color}-600`} size={32} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">{t.watericon.ctaTitle}</h2>
              <p className="text-xl text-cyan-100 mb-8">{t.watericon.ctaText}</p>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all"
              >
                {t.watericon.ctaButton}
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedDivision) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <nav className="fixed w-full z-50 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src={logo} alt="Best Solution Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-slate-800">BEST SOLUTION</h1>
                  <p className="text-xs text-slate-600">Engineering & Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="pt-28 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className={`bg-gradient-to-br ${selectedDivision.color} rounded-2xl p-12 text-white mb-12`}>
              <selectedDivision.icon className="mb-6" size={64} />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedDivision.title}</h1>
              <p className="text-2xl italic opacity-90">{selectedDivision.tagline}</p>
            </div>

            {[
              { title: t.divisionPage.overview, content: selectedDivision.detailedDescription, side: 'left' },
              { title: t.divisionPage.keyServices, items: selectedDivision.services, side: 'right', icon: Check },
              { title: t.divisionPage.capabilities, items: selectedDivision.capabilities, side: 'left', icon: ChevronRight }
            ].map((section, idx) => (
              <div key={idx} className="mb-12">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className={`flex flex-col ${section.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="md:w-1/2 relative">
                      <img src={selectedDivision.gallery[idx].url} alt={section.title} className="w-full h-80 md:h-full object-cover" />
                      <div className={`hidden md:block absolute inset-y-0 ${section.side === 'right' ? 'left' : 'right'}-0 w-20 bg-gradient-to-${section.side === 'right' ? 'r' : 'l'} from-white to-transparent`}></div>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-slate-900 mb-6">{section.title}</h2>
                      {section.content ? (
                        <p className="text-lg text-slate-700 leading-relaxed">{section.content}</p>
                      ) : (
                        <div className="space-y-4">
                          {section.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <section.icon className={`${idx === 1 ? 'text-blue-600' : 'text-cyan-600'} flex-shrink-0 mt-1`} size={22} />
                              <span className="text-lg text-slate-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">{t.divisionPage.ctaTitle}</h2>
              <p className="text-xl text-cyan-100 mb-8">{t.divisionPage.ctaSubtitle}</p>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all"
              >
                {t.divisionPage.ctaButton}
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src={logo} alt="Best Solution Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-slate-800">BEST SOLUTION</h1>
                <p className="text-xs text-slate-600">Engineering & Consulting</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'services', 'contact'].map((item) => (
                <a key={item} href={`#${item}`} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                  {t.nav[item]}
                </a>
              ))}
              <button
                onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors font-medium"
              >
                <Globe size={18} />
                {language === 'en' ? 'PT' : 'EN'}
              </button>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                className="px-3 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors font-medium text-sm"
              >
                {language === 'en' ? 'PT' : 'EN'}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'services', 'contact'].map((item) => (
                <a key={item} href={`#${item}`} className="block text-slate-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  {t.nav[item]}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">{t.hero.badge}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {t.hero.title}<br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">{t.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {t.hero.exploreBtn}
              </a>
              <a href="#contact" className="bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold border-2 border-slate-200 hover:border-blue-600 transition-all duration-300">
                {t.hero.contactBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            {credentials.map((cred, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <cred.icon className="mb-3" size={40} />
                <div className="text-4xl font-bold mb-2">{cred.value}</div>
                <div className="text-blue-100 font-medium">{cred.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.about.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong className="text-slate-900">Best Solution Engineering & Consulting</strong> {t.about.text1}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">{t.about.text2}</p>
              <p className="text-lg text-slate-700 leading-relaxed">
                {t.about.text3} <strong className="text-cyan-600">Watericon</strong>, {t.about.text3End}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.certifications.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">{t.certifications.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <cert.icon className="text-white" size={32} />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{cert.code}</h3>
                  <p className="text-slate-600 text-sm">{cert.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.services.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">{t.services.subtitle}</p>
          </div>
          <div className="space-y-8">
            {divisions.map((division) => (
              <div key={division.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className={`p-8 md:p-10 bg-gradient-to-br ${division.color} text-white flex flex-col justify-center`}>
                    <division.icon className="mb-4" size={48} />
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{division.title}</h3>
                    <p className="text-lg font-semibold italic opacity-90">{division.tagline}</p>
                  </div>
                  <div className="md:col-span-2 p-8 md:p-10">
                    <p className="text-slate-700 text-lg mb-6 leading-relaxed">{division.description}</p>
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">{t.services.keyServices}</h4>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {division.services.map((service, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                          <span className="text-slate-700">{service}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <button
                        onClick={() => navigateToDivision(division)}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
                      >
                        {t.services.learnMore}
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.why.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {differentials.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={28} />
                </div>
                <p className="text-slate-700 font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-cyan-500 via-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Droplet className="text-white" size={28} />
              <span className="text-white font-bold text-lg">{t.watericon.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.watericon.title}</h2>
            <p className="text-xl text-cyan-50 mb-4 max-w-3xl mx-auto">{t.watericon.subtitle}</p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">{t.watericon.description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Globe, value: '17', label: t.watericon.stat1 },
              { icon: MapPin, value: '6', label: t.watericon.stat2 },
              { icon: Factory, value: '2000m²', label: t.watericon.stat3 }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center text-white border border-white/30">
                <stat.icon className="mx-auto mb-4" size={48} />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-cyan-50">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => window.open('https://watericon.me', '_blank')}
              className="inline-flex items-center gap-3 bg-white text-cyan-600 px-10 py-5 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Droplet size={24} />
              {t.watericon.button}
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">{t.cta.subtitle}</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
            {t.cta.button}
            <ChevronRight size={24} />
          </a>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.contact.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-slate-600 text-lg">{t.contact.subtitle}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <MapPin className="text-blue-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Best Solution Engineering & Consulting</h3>
                <p className="text-slate-600 mb-2">{t.contact.location}</p>
                <p className="text-slate-600 mb-6">
                  <strong>{t.contact.address}:</strong> Rua da Resistência n°275, Segundo Andar
                </p>
                <div className="space-y-4">
                  <a href="mailto:info@bestsolution.co.mz" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                    <Mail size={20} />
                    <span>info@bestsolution.co.mz</span>
                  </a>
                  <a href="tel:+258866281547" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                    <Phone size={20} />
                    <span>+258 866 281 547</span>
                  </a>
                  <a href="tel:+258858059947" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                    <Phone size={20} />
                    <span>+258 858 059 947</span>
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">{t.contact.divisions}</h4>
                <div className="space-y-3">
                  {[
                    { icon: Settings, text: language === 'en' ? 'Industrial Maintenance' : 'Manutenção Industrial', color: 'blue' },
                    { icon: Droplet, text: language === 'en' ? 'Water & Environmental' : 'Águas e Ambiente', color: 'cyan' },
                    { icon: Beaker, text: language === 'en' ? 'Geological & Chemical' : 'Geologia e Química', color: 'purple' },
                    { icon: Zap, text: language === 'en' ? 'Renewable Energy & Drilling' : 'Energia Renovável e Perfuração', color: 'green' },
                    { icon: Shield, text: language === 'en' ? 'Occupational Health & Safety' : 'Higiene e Segurança no Trabalho', color: 'orange' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700">
                      <item.icon className={`text-${item.color}-600`} size={20} />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Best Solution Engineering & Consulting</h3>
            <p className="text-slate-400">{t.footer.subtitle}</p>
          </div>
          <p className="text-slate-400 mb-4">{t.footer.location}</p>
          <p className="text-slate-500 text-sm">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}
