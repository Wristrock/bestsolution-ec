import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, ChevronRight, Award, Users, Target, Settings, Droplet, Factory, Beaker, Globe, MapPin, Check, Shield, Wrench, Leaf, Zap, Package } from 'lucide-react';
import logo from './assets/bestsolution-logo.png';

export default function BestSolutionPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [showWatericon, setShowWatericon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gerenciar navegação com histórico do navegador
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state?.page === 'watericon') {
        setShowWatericon(true);
        setSelectedDivision(null);
      } else if (event.state?.page === 'division' && event.state?.divisionId) {
        const division = divisions.find(d => d.id === event.state.divisionId);
        setSelectedDivision(division);
        setShowWatericon(false);
      } else {
        setShowWatericon(false);
        setSelectedDivision(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToDivision = (division) => {
    setSelectedDivision(division);
    setShowWatericon(false);
    window.history.pushState(
      { page: 'division', divisionId: division.id },
      '',
      `#division-${division.id}`
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToWatericon = () => {
    setShowWatericon(true);
    setSelectedDivision(null);
    window.history.pushState(
      { page: 'watericon' },
      '',
      '#watericon'
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const divisions = [
    {
      id: 'industrial',
      title: "Industrial Maintenance & Facility Management",
      icon: Settings,
      color: 'from-blue-600 to-cyan-500',
      tagline: "Keeping critical assets operating safely and efficiently",
      description: "We provide comprehensive industrial maintenance and facility management solutions to ensure the reliability, safety, and efficiency of critical infrastructure and assets.",
      services: [
        "Technical infrastructure management",
        "Preventive and corrective industrial maintenance",
        "Mechanical and electrical installations engineering",
        "Facility operations support and optimization"
      ],
      detailedDescription: "Our industrial maintenance division specializes in providing end-to-end solutions for critical infrastructure. We combine predictive maintenance technologies with hands-on expertise to minimize downtime and maximize asset lifespan.",
      capabilities: [
        "24/7 emergency response teams",
        "Predictive maintenance programs",
        "Asset lifecycle management",
        "Energy efficiency optimization",
        "Compliance and safety audits",
        "Equipment modernization"
      ],
      gallery: [
        {
          url: 'https://pipemasters.pt/blog/wp-content/uploads/2019/03/manuten%C3%A7%C3%A3o-industrial-1024x685.jpg',
          title: 'Industrial Maintenance Operations',
          description: 'Comprehensive maintenance solutions for industrial facilities'
        },
        {
          url: 'https://www.maddoxindustrial.com/hubfs/services/MIG/images/Industrial%20Preventive%20Maintenance%20Services-1.jpg',
          title: 'Preventive Maintenance Programs',
          description: 'Systematic approach to equipment reliability and uptime'
        },
        {
          url: 'https://watericon.com/wp-content/uploads/2022/01/watericon-bmw2.jpg',
          title: 'Technical Infrastructure Management',
          description: 'Managing critical systems with precision and expertise'
        }
      ]
    },
    {
      id: 'water',
      title: "Water & Environmental Engineering",
      icon: Droplet,
      color: 'from-cyan-500 to-teal-500',
      tagline: "From water source to sustainable discharge",
      description: "We deliver advanced water and environmental engineering solutions for industrial, municipal, and commercial applications, covering the full EPC and operational lifecycle.",
      services: [
        "EPC projects (Engineering, Procurement & Construction)",
        "Water treatment, wastewater treatment and desalination systems",
        "Industrial water reuse and environmental compliance solutions",
        "24/7 monitoring and O&M (Operation & Maintenance) contracts"
      ],
      detailedDescription: "Our water and environmental engineering division brings world-class water treatment technology and expertise to industries across Mozambique. Our solutions range from small-scale water purification systems to large industrial wastewater treatment plants, covering the complete project lifecycle.",
      capabilities: [
        "Reverse osmosis systems",
        "Biological treatment processes",
        "Chemical dosing systems",
        "Zero liquid discharge (ZLD)",
        "Remote monitoring & control",
        "Regulatory compliance support"
      ],
      gallery: [
        {
          url: 'https://watericon.com/wp-content/uploads/2022/01/watericon-bmw3.jpg',
          title: 'Advanced Water Treatment Systems',
          description: 'State-of-the-art water purification and treatment facilities'
        },
        {
          url: 'https://media.licdn.com/dms/image/v2/D4D22AQEDCpmiohqJxg/feedshare-shrink_800/B4DZrjAzf8GsAk-/0/1764745230769?e=2147483647&v=beta&t=KL--Y-3a_gKunvaRo9IWwglgW2kugO8Nrm9_jkKwbUM',
          title: 'Industrial Water Treatment',
          description: 'Custom solutions for complex industrial water challenges'
        },
        {
          url: 'https://nuwater.com/wp-content/uploads/Untitled-design-35.png',
          title: 'Wastewater Treatment Plants',
          description: 'Sustainable wastewater management and recycling systems'
        }
      ]
    },
    {
      id: 'geological',
      title: "Geological & Chemical Consulting",
      icon: Beaker,
      color: 'from-purple-600 to-pink-500',
      tagline: "Supporting informed decision-making",
      description: "Our geological and chemical consulting services support informed decision-making for mining, construction, industrial operations, and environmental projects.",
      services: [
        "Geological and geotechnical studies",
        "Chemical consulting and process optimization",
        "Customized chemical formulations",
        "Environmental and industrial analysis support"
      ],
      detailedDescription: "Our team of geologists, chemists, and process engineers provide comprehensive consulting services for complex industrial and environmental challenges. We use advanced analytical techniques and field studies to deliver accurate, actionable insights.",
      capabilities: [
        "Site investigation & surveys",
        "Soil and rock mechanics analysis",
        "Process chemistry optimization",
        "Custom reagent development",
        "Laboratory testing services",
        "Technical feasibility studies"
      ],
      gallery: [
        {
          url: 'https://watericon.com/wp-content/uploads/2024/08/RO-RANGE-4.webp',
          title: 'Chemical Analysis Laboratory',
          description: 'Advanced testing and analysis for process optimization'
        },
        {
          url: 'https://watericon.com/wp-content/uploads/2025/08/37-1.webp',
          title: 'Geological Field Studies',
          description: 'Comprehensive site investigations and geotechnical assessments'
        },
        {
          url: 'https://watericon.com/wp-content/uploads/2025/08/36-1.webp',
          title: 'Process Optimization',
          description: 'Custom chemical solutions for industrial applications'
        }
      ]
    },
    {
      id: 'renewable',
      title: "Renewable Energy & Drilling Services",
      icon: Zap,
      color: 'from-green-600 to-emerald-500',
      tagline: "Sustainable energy and water access solutions",
      description: "We provide comprehensive renewable energy installations and drilling services for sustainable development, focusing on solar power systems, electrical infrastructure, and groundwater access solutions.",
      services: [
        "Solar power system design and installation",
        "Domestic, commercial, and industrial electrical wiring",
        "Installation of transformers, switchgear, and control panels",
        "Borehole drilling and casing installation",
        "Pump installation and repair",
        "Water testing and purification solutions"
      ],
      detailedDescription: "Our renewable energy and drilling division combines clean energy solutions with reliable water access services. We specialize in solar power installations, complete electrical systems, and professional borehole drilling services to support agricultural, residential, and industrial needs across Mozambique.",
      capabilities: [
        "Agro-voltaic system installation (solar irrigation)",
        "Energy efficiency audits and upgrades",
        "Electrical maintenance and fault diagnosis",
        "Borehole rehabilitation and maintenance",
        "Groundwater surveys and hydrogeological assessments",
        "Health, Safety, and Environment (HSE) compliance"
      ],
      gallery: [
        {
          url: 'https://www.greenenergy.ng/images/drilling-rig-aerial.jpeg',
          title: 'Professional Borehole Drilling',
          description: 'Reliable water access solutions for agriculture and industry'
        },
        {
          url: 'https://cdn.sanity.io/images/o6ep64o3/production/c32a6e8649aefbc52ca930dc89497b6f34f7a6fd-3200x1565.jpg?w=2000&h=978&auto=format',
          title: 'Solar Power Installations',
          description: 'Clean energy systems for residential and commercial applications'
        },
        {
          url: 'https://www.red-drilling-services.at/fileadmin/_processed_/6/1/csm_red_bohrung_E200_01_1_ret_komp_f3f604ac65.jpg',
          title: 'Groundwater Development',
          description: 'Sustainable water resource management and development'
        }
      ]
    }
  ];

  const credentials = [
    { value: '10+', label: 'Years Engineering Experience', icon: Award },
    { value: '4', label: 'Engineering Divisions', icon: Target },
    { value: '100%', label: 'National Coverage', icon: MapPin }
  ];

  const differentials = [
    { text: 'Multi-disciplinary engineering expertise', icon: Target },
    { text: 'Proven industrial and environmental experience', icon: Shield },
    { text: 'Strong ethical and safety standards', icon: Check },
    { text: 'National coverage across Mozambique', icon: Globe },
    { text: 'International technical partnerships', icon: Award }
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
                Official Representative in Mozambique
              </p>
              <p className="text-2xl italic opacity-90">End-to-end water treatment solutions provider</p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who is Watericon</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Watericon is an end-to-end water treatment solutions provider with a strong presence across Africa and the Middle East. Headquartered in Johannesburg, they operate 6 offices across the MEA region, with a regional hub in Abu Dhabi.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Backed by partnerships with leading global water treatment companies, Watericon supplies a broad range of equipment and consumables. Their large stock holding ensures immediate delivery without delay.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-cyan-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">17</div>
                  <div className="text-slate-700">Countries Across MEA</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                  <div className="text-slate-700">Offices in Africa & Middle East</div>
                </div>
                <div className="bg-teal-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">2000m²</div>
                  <div className="text-slate-700">Chemical Production Facility</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Settings className="text-cyan-600" size={32} />
                  Engineering Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Design, build, install & commission water treatment plants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Demineralised water & desalination systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Wastewater treatment & zero liquid discharge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Containerised water treatment plants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">24/7 monitoring & interactive back office</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Package className="text-blue-600" size={32} />
                  Equipment & Consumables
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Largest stock holding in Africa & Middle East</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">RO/UF/NF/MF membranes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Ion exchange resins & UV systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Pumps, filters & dosing systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">6 warehouses for immediate distribution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Beaker className="text-purple-600" size={32} />
                  Laboratory Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">SANAS accredited water analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Organic, inorganic & microbiological testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">R&D and trial plants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Laboratory equipment distribution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Factory className="text-green-600" size={32} />
                  Chemicals & Mining
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Hydrance specialty chemicals brand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Coagulants, flocculants & biocides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">Mining water treatment specialists</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">ISO 9001 & 45001, SABS certified</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Business Solutions</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="text-cyan-600" size={32} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">BOOT/BOT</h4>
                  <p className="text-sm text-slate-600">Build, Own, Operate & Transfer solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="text-blue-600" size={32} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Rentals & Leasing</h4>
                  <p className="text-sm text-slate-600">Rapid deployment for short-term projects</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="text-purple-600" size={32} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">O&M Services</h4>
                  <p className="text-sm text-slate-600">Operations & maintenance contracts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-green-600" size={32} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Project Financing</h4>
                  <p className="text-sm text-slate-600">Flexible payment terms with no capex</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Need Industrial Water Treatment Solutions?</h2>
              <p className="text-xl text-cyan-100 mb-8">Contact Best Solution as Watericon's official representative in Mozambique</p>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all"
              >
                Contact Best Solution
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
                  <img
                    src={logo}
                    alt="Best Solution Logo"
                    className="w-full h-full object-contain"
                  />
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
              {selectedDivision.subtitle && (
                <p className="text-xl bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block mb-4">
                  {selectedDivision.subtitle}
                </p>
              )}
              <p className="text-2xl italic opacity-90">{selectedDivision.tagline}</p>
            </div>

            {/* Section 1: Overview - Imagem Esquerda, Texto Direita */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Imagem */}
                  <div className="md:w-1/2 relative">
                    <img
                      src={selectedDivision.gallery[0].url}
                      alt="Overview"
                      className="w-full h-80 md:h-full object-cover"
                    />
                    {/* Fade gradient da direita */}
                    <div className="hidden md:block absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
                  </div>

                  {/* Texto Overview */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {selectedDivision.detailedDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Key Services - Texto Esquerda, Imagem Direita */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Imagem */}
                  <div className="md:w-1/2 relative">
                    <img
                      src={selectedDivision.gallery[1].url}
                      alt="Key Services"
                      className="w-full h-80 md:h-full object-cover"
                    />
                    {/* Fade gradient da esquerda */}
                    <div className="hidden md:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
                  </div>

                  {/* Texto Key Services */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Services</h2>
                    <div className="space-y-4">
                      {selectedDivision.services.map((service, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="text-blue-600 flex-shrink-0 mt-1" size={22} />
                          <span className="text-lg text-slate-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Capabilities - Imagem Esquerda, Texto Direita */}
            <div className="mb-12">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Imagem */}
                  <div className="md:w-1/2 relative">
                    <img
                      src={selectedDivision.gallery[2].url}
                      alt="Capabilities"
                      className="w-full h-80 md:h-full object-cover"
                    />
                    {/* Fade gradient da direita */}
                    <div className="hidden md:block absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
                  </div>

                  {/* Texto Capabilities */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Capabilities</h2>
                    <div className="space-y-4">
                      {selectedDivision.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <ChevronRight className="text-cyan-600 flex-shrink-0 mt-1" size={22} />
                          <span className="text-lg text-slate-700">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Interested in this service?</h2>
              <p className="text-xl text-cyan-100 mb-8">Contact our team to discuss your project requirements</p>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transition-all"
              >
                Get in Touch
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
                <img
                  src={logo}
                  alt="Best Solution Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-slate-800">BEST SOLUTION</h1>
                <p className="text-xs text-slate-600">Engineering & Consulting</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-700 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
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
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Mozambique • Multi-Disciplinary Engineering
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Multi-Disciplinary Engineering Solutions<br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                for Industry & Infrastructure
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Engineering, environmental and industrial solutions delivered with technical excellence, integrity, and operational focus across Mozambique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Explore Our Services
              </a>
              <a href="#contact" className="bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold border-2 border-slate-200 hover:border-blue-600 transition-all duration-300">
                Get in Touch
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <strong className="text-slate-900">Best Solution Engineering & Consulting</strong> is a leading multi-disciplinary engineering firm operating in Mozambique. We bridge the gap between technical complexity and operational efficiency by delivering practical, high-impact engineering solutions tailored to industrial, environmental, and infrastructure challenges.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our expertise spans industrial maintenance, water and environmental engineering, geological studies, and specialized technical consulting. We support our clients throughout the full project lifecycle — from concept and design to execution, operation, and long-term asset management.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Driven by ethical standards, safety, and technical excellence, we combine local knowledge with global best practices through strategic partnerships such as <strong className="text-cyan-600">Watericon</strong>, ensuring reliable and sustainable solutions for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Engineering Divisions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Four specialized divisions delivering comprehensive engineering solutions across industry and infrastructure
            </p>
          </div>

          <div className="space-y-8">
            {divisions.map((division) => (
              <div key={division.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className={`p-8 md:p-10 bg-gradient-to-br ${division.color} text-white flex flex-col justify-center`}>
                    <division.icon className="mb-4" size={48} />
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{division.title}</h3>
                    {division.subtitle && (
                      <p className="text-sm bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg inline-block mb-4">
                        {division.subtitle}
                      </p>
                    )}
                    <p className="text-lg font-semibold italic opacity-90">
                      {division.tagline}
                    </p>
                  </div>

                  <div className="md:col-span-2 p-8 md:p-10">
                    <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                      {division.description}
                    </p>
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">Key Services:</h4>
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
                        Learn More
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

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Best Solution?</h2>
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

      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Partners & Clients</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-slate-600 text-lg">Trusted by leading organizations across Mozambique and South Africa</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Toyota */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota.svg"
                alt="Toyota"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Sasol */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Sasol_Limited_-_Logo.svg/2560px-Sasol_Limited_-_Logo.svg.png"
                alt="Sasol"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Ceres */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a6/Ceres_Fruit_Juices_Logo.jpg"
                alt="Ceres"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Clover */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/48/Clover_logo.png"
                alt="Clover"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Coca-Cola */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png"
                alt="Coca-Cola"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* AEL */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center">
              <img
                src="https://www.bcm.org.bw/wp-content/uploads/2017/05/ael_mining_logo.jpg"
                alt="AEL Mining Services"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 italic">And many more leading organizations in mining, manufacturing, energy, and infrastructure sectors</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-cyan-500 via-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Droplet className="text-white" size={28} />
              <span className="text-white font-bold text-lg">Strategic Partnership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Watericon Industrial Water Treatment
            </h2>
            <p className="text-xl text-cyan-50 mb-4 max-w-3xl mx-auto">
              Official Representative in Mozambique
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Best Solution is proud to represent Watericon, Africa's leading end-to-end water treatment solutions provider with presence across 17 countries in MEA region
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center text-white border border-white/30">
              <Globe className="mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold mb-2">17</div>
              <div className="text-cyan-50">Countries Across MEA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center text-white border border-white/30">
              <MapPin className="mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-cyan-50">Offices in Africa & Middle East</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center text-white border border-white/30">
              <Factory className="mx-auto mb-4" size={48} />
              <div className="text-4xl font-bold mb-2">2000m²</div>
              <div className="text-cyan-50">Chemical Production Facility</div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => window.open('https://watericon.me', '_blank')}
              className="inline-flex items-center gap-3 bg-white text-cyan-600 px-10 py-5 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Droplet size={24} />
              Explore Watericon Solutions
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Looking for reliable engineering solutions?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
            Talk to our team and discover how Best Solution Engineering & Consulting can support your project from design to operation
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
            Contact Us
            <ChevronRight size={24} />
          </a>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-slate-600 text-lg">
              Ready to start your project? Get in touch with our engineering team
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <MapPin className="text-blue-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Best Solution Engineering & Consulting</h3>
                <p className="text-slate-600 mb-6">Maputo, Mozambique</p>
                <div className="space-y-4">
                  <a href="mailto:bestconsulting21@gmail.com" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                    <Mail size={20} />
                    <span>bestconsulting21@gmail.com</span>
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
                <h4 className="font-bold text-slate-900 mb-4 text-lg">Our Engineering Divisions</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Settings className="text-blue-600" size={20} />
                    <span>Industrial Maintenance</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Droplet className="text-cyan-600" size={20} />
                    <span>Water & Environmental</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Beaker className="text-purple-600" size={20} />
                    <span>Geological & Chemical</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Zap className="text-green-600" size={20} />
                    <span>Renewable Energy & Drilling</span>
                  </div>
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
            <p className="text-slate-400">Multi-Disciplinary Engineering Solutions for Industry & Infrastructure</p>
          </div>
          <p className="text-slate-400 mb-4">Headquartered in Maputo, Mozambique</p>
          <p className="text-slate-500 text-sm">© 2025 Best Solution Engineering & Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}