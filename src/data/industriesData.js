// src/data/industriesData.js

const industriesData = [
  {
    id: 1,
    name: "Construction & Infrastructure",
    description: "Comprehensive bond and insurance solutions for construction companies, contractors, and infrastructure developers. Covers project risks, performance guarantees, and liability protection.",
    image: require('../assets/images/industries/construction.jpg'),
    iconClass: "building",
    services: [
      "Performance Bonds",
      "Contractor All Risk Insurance",
      "Professional Indemnity",
      "Delay in Start-up Coverage",
      "Plant & Equipment Insurance"
    ],
    keyBenefits: [
      "Expedited bond issuance for tender requirements",
      "Project-specific insurance packages",
      "Coverage for international construction projects",
      "Subcontractor risk management"
    ]
  },
  {
    id: 2,
    name: "Financial Institutions",
    description: "Specialized products for banks, investment firms, and financial service providers, addressing regulatory and operational risks.",
    image: require('../assets/images/industries/financial.webp'),
    iconClass: "chart-line",
    services: [
      "Bankers Blanket Bond",
      "Directors & Officers Liability",
      "Professional Indemnity",
      "Cyber Security Insurance",
      "Fidelity Guarantees"
    ],
    keyBenefits: [
      "Compliance with financial regulations",
      "Protection against financial crime",
      "Coverage for fiduciary responsibilities",
      "Digital transaction risk mitigation"
    ]
  },
  {
    id: 3,
    name: "Energy, Oil & Gas",
    description: "Specialized coverage for the unique risks faced by energy companies, from extraction and production to distribution and retail operations.",
    image: require('../assets/images/industries/energy.jpg'),
    iconClass: "bolt",
    services: [
      "Operator's Extra Expense",
      "Energy Package Policies",
      "Environmental Liability",
      "Business Interruption",
      "Transit & Cargo Insurance"
    ],
    keyBenefits: [
      "Integrated risk management solutions",
      "Coverage for onshore and offshore operations",
      "Crisis management support",
      "Tailored to specific energy sector regulations"
    ]
  },
  {
    id: 4,
    name: "Logistics & Maritime",
    description: "Comprehensive risk solutions for transportation, shipping, and logistics companies operating across borders and seas.",
    image: require('../assets/images/industries/logistics.jpeg'),
    iconClass: "ship",
    services: [
      "Marine Cargo Insurance",
      "Hull & Machinery Coverage",
      "Freight Forwarder Liability",
      "Transport Operator Insurance",
      "Warehouse Coverage"
    ],
    keyBenefits: [
      "Global coverage for international transit",
      "Claims management across jurisdictions",
      "Coverage for supply chain interruptions",
      "Digital tracking integration"
    ]
  },
  {
    id: 5,
    name: "Public Sector & Government",
    description: "Tailored solutions for government agencies, municipalities, and public-private partnerships, ensuring compliance with public procurement requirements.",
    image: require('../assets/images/industries/government.jpeg'),
    iconClass: "landmark",
    services: [
      "Contract Performance Guarantees",
      "Public Official Bonds",
      "Liability Coverage for Public Entities",
      "Infrastructure Project Insurance",
      "Concession Guarantees"
    ],
    keyBenefits: [
      "Compliance with public procurement regulations",
      "Transparent premium structures",
      "Support for public-private partnerships",
      "Coverage for essential public services"
    ]
  },
  {
    id: 6,
    name: "Import/Export & Trade",
    description: "Solutions designed to protect international trade operations, mitigate payment risks, and ensure smooth customs clearance.",
    image: require('../assets/images/industries/trade.jpg'),
    iconClass: "globe",
    services: [
      "Trade Credit Insurance",
      "Customs & Transit Guarantees",
      "Marine & Cargo Coverage",
      "Political Risk Insurance",
      "Export Financing Guarantees"
    ],
    keyBenefits: [
      "Protection against non-payment",
      "Simplified customs clearance",
      "Coverage for goods in international transit",
      "Support for trade finance arrangements"
    ]
  },
  {
    id: 7,
    name: "SMEs & Startups",
    description: "Affordable and flexible insurance and bond solutions tailored to the unique needs and budgets of small businesses and emerging ventures.",
    image: require('../assets/images/industries/startup.jpg'),
    iconClass: "rocket",
    services: [
      "Business Package Insurance",
      "Liability Coverage",
      "Performance Guarantees",
      "Cyber Insurance",
      "Key Person Protection"
    ],
    keyBenefits: [
      "Scalable coverage that grows with your business",
      "Affordable premium structures",
      "Fast-track application process",
      "Bundled solutions for cost efficiency"
    ]
  }
];

export default industriesData;
