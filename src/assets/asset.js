const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop",
    title: "Understanding COVID-19 Symptoms",
    desc: "Learn about common symptoms and when to seek medical attention.",
    content:
      "COVID-19 symptoms can range from mild to severe. Common signs include fever, cough, fatigue, breathing difficulty, and loss of taste or smell. Early awareness helps reduce spread and ensures timely medical care.",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    title: "How Diagnosis Tools Help",
    desc: "Discover how digital health tools assist early diagnosis and triage.",
    content:
      "Digital diagnosis tools support healthcare systems by offering fast assessments, symptom checks, and guidance based on trusted medical data. They help reduce pressure on hospitals and improve early response.",
  },
  {
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop",
    title: "Prevention & Safety Measures",
    desc: "Simple steps you can take to protect yourself and others.",
    content:
      "Preventive measures include regular hand washing, mask usage, vaccination, physical distancing, and staying informed through reliable sources like the WHO and national health agencies.",
  },
  {
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop",
    title: "Mental Health During Pandemics",
    desc: "Managing anxiety and stress in uncertain times.",
    content:
      "The pandemic has taken a toll on mental health globally. It's important to acknowledge feelings of anxiety, maintain social connections virtually, establish routines, and seek professional help when needed. Remember, taking care of your mental health is just as important as physical health.",
  },
  {
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop",
    title: "The Importance of Vaccination",
    desc: "Why vaccines are crucial in fighting infectious diseases.",
    content:
      "Vaccines have proven to be one of the most effective tools in preventing severe illness and death from COVID-19. They work by training your immune system to recognize and fight the virus. Getting vaccinated not only protects you but also helps protect vulnerable members of your community.",
  },
  {
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop",
    title: "Telemedicine: Healthcare's Future",
    desc: "How virtual consultations are transforming patient care.",
    content:
      "Telemedicine has become increasingly important, allowing patients to receive medical advice from home. This technology reduces exposure risks, saves time, and makes healthcare more accessible to people in remote areas. Video consultations, remote monitoring, and digital prescriptions are becoming the new normal.",
  },
  {
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&auto=format&fit=crop",
    title: "Boosting Your Immune System",
    desc: "Natural ways to strengthen your body's defenses.",
    content:
      "A strong immune system is your best defense against infections. Focus on eating a balanced diet rich in fruits and vegetables, getting adequate sleep (7-9 hours), exercising regularly, managing stress, and staying hydrated. Supplements like vitamin C, D, and zinc may also support immune function.",
  },
  {
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop",
    title: "Understanding Test Results",
    desc: "What different COVID-19 tests mean and when to use them.",
    content:
      "There are several types of COVID-19 tests available: PCR tests detect active infections and are highly accurate, while rapid antigen tests provide quick results but may be less sensitive. Antibody tests show if you've had a past infection. Understanding which test to use and how to interpret results is crucial for making informed health decisions.",
  },
  {
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop",
    title: "Safe Travel Guidelines",
    desc: "Tips for traveling safely during health emergencies.",
    content:
      "If you must travel, take precautions: check travel advisories, ensure you're fully vaccinated, wear masks in crowded areas, maintain hand hygiene, avoid touching your face, and monitor your health before and after travel. Consider travel insurance that covers medical emergencies and be prepared to quarantine if required.",
  },
  {
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop",
    title: "Long COVID: What We Know",
    desc: "Understanding persistent symptoms after recovery.",
    content:
      "Long COVID affects some people weeks or months after initial infection. Common symptoms include fatigue, brain fog, shortness of breath, and joint pain. If you're experiencing persistent symptoms, consult your healthcare provider. Treatment focuses on managing symptoms and gradually increasing activity levels. Research is ongoing to better understand and treat this condition.",
  },
];

const products = [
  {
    id: 1,
    image: "https://unsplash.com/photos/a-package-of-toothpaste-sitting-next-to-a-toothbrush-NXZLaQ2uBQc?w=800&auto=format&fit=crop",
    name: "COVID-19 Rapid Test Kit",
    price: "$24.99",
    rating: 4.8,
    category: "Testing",
    description: "Professional-grade rapid antigen test kit for accurate COVID-19 detection at home. Results in 15 minutes with 98% accuracy.",
    features: [
      "Results in 15 minutes",
      "98% accuracy rate",
      "FDA approved",
      "Easy to use",
      "Includes 5 test strips"
    ],
    inStock: true
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1584733267766-c37261a6c560?w=800&auto=format&fit=crop",
    name: "N95 Respirator Masks (50 Pack)",
    price: "$49.99",
    rating: 4.9,
    category: "Protection",
    description: "Premium N95 respirator masks offering superior protection against airborne particles and viruses. NIOSH certified for maximum safety.",
    features: [
      "NIOSH N95 certified",
      "50 masks per box",
      "Adjustable nose clip",
      "Comfortable fit",
      "99% filtration efficiency"
    ],
    inStock: true
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&auto=format&fit=crop",
    name: "Digital Thermometer Pro",
    price: "$34.99",
    rating: 4.7,
    category: "Monitoring",
    description: "Advanced infrared thermometer for quick, non-contact temperature readings. Perfect for family health monitoring.",
    features: [
      "Non-contact infrared",
      "1-second readings",
      "Memory for 32 readings",
      "Fever alarm function",
      "LCD backlit display"
    ],
    inStock: true
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop",
    name: "Pulse Oximeter",
    price: "$29.99",
    rating: 4.6,
    category: "Monitoring",
    description: "Portable fingertip pulse oximeter to monitor blood oxygen saturation and pulse rate. Essential for COVID-19 monitoring.",
    features: [
      "SpO2 & pulse rate monitoring",
      "OLED display",
      "Auto shut-off",
      "Low battery indicator",
      "Includes lanyard & batteries"
    ],
    inStock: true
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop",
    name: "Hand Sanitizer Bundle",
    price: "$19.99",
    rating: 4.5,
    category: "Hygiene",
    description: "Premium alcohol-based hand sanitizer bundle with 70% ethyl alcohol. Kills 99.9% of germs without water.",
    features: [
      "70% ethyl alcohol",
      "4 bottles (8oz each)",
      "Moisturizing formula",
      "Quick-dry",
      "Pleasant scent"
    ],
    inStock: true
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1585435421671-0c16764854c3?w=800&auto=format&fit=crop",
    name: "UV-C Sterilizer Box",
    price: "$89.99",
    rating: 4.8,
    category: "Sanitization",
    description: "Professional UV-C light sterilizer box for phones, masks, keys, and small items. Eliminates 99.9% of bacteria and viruses.",
    features: [
      "UV-C LED technology",
      "360° sterilization",
      "Auto shut-off safety",
      "Fits most smartphones",
      "5-minute cycle"
    ],
    inStock: true
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop",
    name: "Immune Support Vitamins",
    price: "$39.99",
    rating: 4.7,
    category: "Wellness",
    description: "Comprehensive immune support supplement with Vitamin C, D3, Zinc, and Elderberry. Boost your natural defenses.",
    features: [
      "Vitamin C, D3, & Zinc",
      "Elderberry extract",
      "90-day supply",
      "Non-GMO & gluten-free",
      "Third-party tested"
    ],
    inStock: true
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop",
    name: "Air Purifier HEPA H13",
    price: "$199.99",
    rating: 4.9,
    category: "Air Quality",
    description: "Medical-grade HEPA H13 air purifier captures 99.97% of airborne particles including viruses, bacteria, and allergens.",
    features: [
      "HEPA H13 filtration",
      "Covers 500 sq ft",
      "Smart air quality sensor",
      "Quiet operation",
      "3 fan speeds"
    ],
    inStock: true
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1603217039863-aa106f431b89?w=800&auto=format&fit=crop",
    name: "Disposable Gloves (200 Pack)",
    price: "$24.99",
    rating: 4.6,
    category: "Protection",
    description: "Premium nitrile disposable gloves for superior protection. Latex-free, powder-free, and suitable for sensitive skin.",
    features: [
      "200 gloves per box",
      "Nitrile material",
      "Latex & powder-free",
      "Textured grip",
      "Multiple sizes available"
    ],
    inStock: true
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=800&auto=format&fit=crop",
    name: "Face Shield (10 Pack)",
    price: "$29.99",
    rating: 4.4,
    category: "Protection",
    description: "Crystal-clear face shields providing full-face protection. Comfortable, reusable, and anti-fog coating.",
    features: [
      "10 shields included",
      "Anti-fog coating",
      "Adjustable headband",
      "Lightweight design",
      "Reusable & washable"
    ],
    inStock: true
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop",
    name: "Disinfectant Spray (6 Pack)",
    price: "$34.99",
    rating: 4.7,
    category: "Hygiene",
    description: "Hospital-grade disinfectant spray that kills 99.9% of viruses and bacteria on surfaces. Safe for use on various materials.",
    features: [
      "6 bottles (16oz each)",
      "Kills 99.9% of germs",
      "Multi-surface use",
      "Fresh scent",
      "EPA registered"
    ],
    inStock: true
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&auto=format&fit=crop",
    name: "Vitamin D3 + K2 Supplement",
    price: "$27.99",
    rating: 4.8,
    category: "Wellness",
    description: "High-potency vitamin D3 combined with K2 for optimal immune support and bone health. Essential for overall wellness.",
    features: [
      "5000 IU Vitamin D3",
      "100 mcg Vitamin K2",
      "180 capsules",
      "Non-GMO & vegan",
      "Third-party tested"
    ],
    inStock: true
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
    name: "Medical Face Masks (100 Pack)",
    price: "$29.99",
    rating: 4.6,
    category: "Protection",
    description: "Disposable 3-ply medical face masks with ear loops. Comfortable, breathable protection for everyday use.",
    features: [
      "3-ply construction",
      "100 masks per box",
      "Adjustable nose bridge",
      "Breathable material",
      "ASTM Level 1 certified"
    ],
    inStock: true
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&auto=format&fit=crop",
    name: "Zinc + Vitamin C Lozenges",
    price: "$18.99",
    rating: 4.5,
    category: "Wellness",
    description: "Immune-boosting lozenges with zinc and vitamin C. Great-tasting orange flavor supports your body's natural defenses.",
    features: [
      "15mg Zinc per lozenge",
      "100mg Vitamin C",
      "60 lozenges",
      "Orange flavor",
      "Gluten-free"
    ],
    inStock: true
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&auto=format&fit=crop",
    name: "Antibacterial Wipes (12 Canisters)",
    price: "$44.99",
    rating: 4.8,
    category: "Hygiene",
    description: "Multi-purpose antibacterial wipes for surfaces and hands. Kills 99.9% of germs and leaves surfaces clean and fresh.",
    features: [
      "12 canisters (80 wipes each)",
      "Kills 99.9% of bacteria",
      "Alcohol-free formula",
      "Fresh scent",
      "Convenient dispensing"
    ],
    inStock: true
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=800&auto=format&fit=crop",
    name: "Contact-Free Soap Dispenser",
    price: "$45.99",
    rating: 4.7,
    category: "Hygiene",
    description: "Automatic touchless soap dispenser with infrared sensor. Perfect for maintaining hygiene without cross-contamination.",
    features: [
      "Touchless operation",
      "Adjustable soap volume",
      "350ml capacity",
      "Waterproof design",
      "Battery powered"
    ],
    inStock: true
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop",
    name: "Elderberry Immune Syrup",
    price: "$32.99",
    rating: 4.9,
    category: "Wellness",
    description: "Organic elderberry syrup with honey and herbs. Traditional immune support formula for the whole family.",
    features: [
      "Organic elderberries",
      "Raw honey blend",
      "16 oz bottle",
      "No artificial ingredients",
      "Great taste"
    ],
    inStock: true
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop",
    name: "Blood Pressure Monitor",
    price: "$54.99",
    rating: 4.6,
    category: "Monitoring",
    description: "Digital blood pressure monitor with large display. Track your cardiovascular health with clinical accuracy at home.",
    features: [
      "Clinical accuracy",
      "Large LCD screen",
      "120 memory storage",
      "Irregular heartbeat detection",
      "Universal cuff size"
    ],
    inStock: true
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    name: "Protective Safety Goggles",
    price: "$16.99",
    rating: 4.4,
    category: "Protection",
    description: "Anti-fog safety goggles providing eye protection from splashes and airborne particles. Comfortable for extended wear.",
    features: [
      "Anti-fog coating",
      "Adjustable elastic band",
      "Impact resistant",
      "Lightweight design",
      "Universal fit"
    ],
    inStock: true
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop",
    name: "Home Humidifier with UV Light",
    price: "$79.99",
    rating: 4.8,
    category: "Air Quality",
    description: "Ultrasonic cool mist humidifier with built-in UV light sterilization. Maintains optimal humidity for respiratory health.",
    features: [
      "4L water capacity",
      "UV sterilization",
      "Whisper-quiet operation",
      "Auto shut-off",
      "Covers 400 sq ft"
    ],
    inStock: true
  }
];

const aboutValues = [
  {
    icon: "Heart",
    title: "Compassion",
    description: "We prioritize the health and wellbeing of every individual, offering support and care through innovative solutions."
  },
  {
    icon: "Shield",
    title: "Trust & Safety",
    description: "Your health data is protected with enterprise-grade security. We maintain the highest standards of privacy and accuracy."
  },
  {
    icon: "Zap",
    title: "Innovation",
    description: "Leveraging cutting-edge AI and medical technology to provide fast, accurate diagnostic tools for early detection."
  },
  {
    icon: "Globe",
    title: "Accessibility",
    description: "Making quality healthcare information and diagnostic tools available to everyone, everywhere, at any time."
  }
];

const aboutStats = [
  { number: "500K+", label: "Users Served" },
  { number: "98%", label: "Accuracy Rate" },
  { number: "150+", label: "Countries" },
  { number: "24/7", label: "Support Available" }
];

const aboutTeam = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop",
    description: "20+ years in infectious disease research"
  },
  {
    name: "Michael Chen",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
    description: "Former healthcare technology executive"
  },
  {
    name: "Dr. Amara Okafor",
    role: "Head of AI Research",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
    description: "PhD in Machine Learning & Medical AI"
  },
  {
    name: "James Rodriguez",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    description: "15 years building scalable health platforms"
  }
];

const aboutMilestones = [
  {
    year: "2020",
    title: "PandeMix Founded",
    description: "Started with a mission to democratize COVID-19 diagnostics during the global pandemic."
  },
  {
    year: "2021",
    title: "AI Model Launch",
    description: "Released our first AI-powered diagnostic tool with 95% accuracy rate."
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded to 100+ countries, serving millions of users worldwide."
  },
  {
    year: "2023",
    title: "Medical Partnership",
    description: "Partnered with WHO and leading health organizations for validated diagnostics."
  },
  {
    year: "2024",
    title: "Award Recognition",
    description: "Received Healthcare Innovation Award and reached 500K+ active users."
  }
];

// Contact Page Data
const contactInfo = [
  {
    icon: "Mail",
    title: "Email Us",
    info: "support@pandemix.com",
    subInfo: "We'll respond within 24 hours"
  },
  {
    icon: "Phone",
    title: "Call Us",
    info: "+1 (555) 123-4567",
    subInfo: "Mon-Fri, 9AM - 6PM EST"
  },
  {
    icon: "MapPin",
    title: "Visit Us",
    info: "123 Health Street, Medical District",
    subInfo: "San Francisco, CA 94102"
  },
  {
    icon: "Clock",
    title: "Working Hours",
    info: "24/7 Online Support",
    subInfo: "Always here when you need us"
  }
];

const contactFaqs = [
  {
    question: "How accurate is the COVID-19 diagnostic tool?",
    answer: "Our AI-powered diagnostic tool has a 98% accuracy rate, validated by leading health organizations and medical professionals."
  },
  {
    question: "Is my health data secure?",
    answer: "Yes, we use enterprise-grade encryption and comply with HIPAA regulations to ensure your health data is completely secure and private."
  },
  {
    question: "How long does it take to get results?",
    answer: "Results are typically available within 15-30 minutes after completing the assessment. Critical cases receive priority processing."
  },
  {
    question: "Do you offer international support?",
    answer: "Yes, PandeMix is available in 150+ countries with multilingual support and localized health information."
  }
];

export const aboutValuesAssets = aboutValues;
export const aboutStatsAssets = aboutStats;
export const aboutTeamAssets = aboutTeam;
export const aboutMilestonesAssets = aboutMilestones;
export const productAssets = products;
export const assets = blogPosts;
export const contactInfoAssets = contactInfo;
export const contactFaqsAssets = contactFaqs;