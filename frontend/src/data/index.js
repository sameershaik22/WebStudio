// Trusted Logos
export const trustedLogos = [
  { id: 'desiswad', name: 'DesiSwad Foods', tag: 'FOODS', icon: '🍲' },
  { id: 'constructline', name: 'ConstructLine', tag: 'BUILDING THE FUTURE', icon: '🏗️' },
  { id: 'healthcare', name: 'HealthCare+', tag: 'CLINIC & HOSPITAL', icon: '🏥' },
  { id: 'realnext', name: 'RealNext', tag: 'PROPERTIES', icon: '🏢' },
  { id: 'edusphere', name: 'EduSphere', tag: 'UNIVERSITY', icon: '🎓' },
];

// 5 Horizontal Feature Pillars (Section 2)
export const featurePillars = [
  {
    icon: 'Wand2',
    title: 'Unique Design',
    desc: 'Every website is custom designed for your brand.',
  },
  {
    icon: 'Rocket',
    title: 'High Performance',
    desc: 'Fast, optimized, and built for the best experience.',
  },
  {
    icon: 'Search',
    title: 'SEO Ready',
    desc: 'Built with SEO best practices to help you rank higher.',
  },
  {
    icon: 'Smartphone',
    title: 'Fully Responsive',
    desc: 'Looks perfect on every device and screen size.',
  },
  {
    icon: 'Headphones',
    title: 'Ongoing Support',
    desc: "We're with you even after your website is live.",
  },
];

// Industries data with unique mockup themes
export const industries = [
  {
    id: 'restaurant',
    title: 'Restaurant',
    icon: '🍽️',
    desc: 'Elegant menus, reservation systems, and mouth-watering visual storytelling.',
    accent: '#E74C3C',
    bg: 'linear-gradient(135deg, #FFF5F0 0%, #FAEAE6 100%)',
    heroColor: '#E74C3C',
    heroText: 'Reserve Your Table',
    mockupBg: '#1A0A08',
    cardBg: '#2D1210',
    image: '/mockups/restaurant.png',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    icon: '🛍️',
    desc: 'Conversion-optimized storefronts with seamless checkout and product discovery.',
    accent: '#6C5CE7',
    bg: 'linear-gradient(135deg, #F3F0FF 0%, #E8E3FF 100%)',
    heroColor: '#6C5CE7',
    heroText: 'Shop Collection',
    mockupBg: '#0D0B1F',
    cardBg: '#1A1630',
    image: '/mockups/ecommerce.png',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: '🏥',
    desc: 'Clean, reassuring medical websites that build trust and simplify patient journeys.',
    accent: '#00B8A9',
    bg: 'linear-gradient(135deg, #F0FFFE 0%, #E0FFFE 100%)',
    heroColor: '#00B8A9',
    heroText: 'Book Appointment',
    mockupBg: '#041412',
    cardBg: '#0A2220',
    image: '/mockups/healthcare.png',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    icon: '🏡',
    desc: 'Stunning property showcases with interactive maps and immersive virtual tours.',
    accent: '#27AE60',
    bg: 'linear-gradient(135deg, #F0FFF4 0%, #E0FFE8 100%)',
    heroColor: '#27AE60',
    heroText: 'Browse Properties',
    mockupBg: '#041208',
    cardBg: '#081E10',
    image: '/mockups/realestate.png',
  },
  {
    id: 'education',
    title: 'Education',
    icon: '📚',
    desc: 'Engaging learning platforms and institution websites with course management.',
    accent: '#3B82F6',
    bg: 'linear-gradient(135deg, #F0F6FF 0%, #E0EEFF 100%)',
    heroColor: '#3B82F6',
    heroText: 'Explore Courses',
    mockupBg: '#041410',
    cardBg: '#082018',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'construction',
    title: 'Construction',
    icon: '🏗️',
    desc: 'Bold, industrial websites that showcase projects, capabilities, and credibility.',
    accent: '#F39C12',
    bg: 'linear-gradient(135deg, #FFFBF0 0%, #FFF5DC 100%)',
    heroColor: '#F39C12',
    heroText: 'Our Projects',
    mockupBg: '#1A1200',
    cardBg: '#2A1E00',
    image: '/mockups/construction.png',
  },
  {
    id: 'law',
    title: 'Law Firm',
    icon: '⚖️',
    desc: 'Authoritative, trust-inspiring legal websites that communicate expertise and gravitas.',
    accent: '#1E3A5F',
    bg: 'linear-gradient(135deg, #F0F4FF 0%, #E5EBFF 100%)',
    heroColor: '#1E3A5F',
    heroText: 'Free Consultation',
    mockupBg: '#040810',
    cardBg: '#081018',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hotel',
    title: 'Hotel & Resort',
    icon: '🏨',
    desc: 'Luxurious hospitality websites that immerse guests in the experience before arrival.',
    accent: '#C4A35A',
    bg: 'linear-gradient(135deg, #FFFBF5 0%, #FFF5E8 100%)',
    heroColor: '#C4A35A',
    heroText: 'Reserve Now',
    mockupBg: '#120C00',
    cardBg: '#1E1400',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fitness',
    title: 'Fitness & Gym',
    icon: '💪',
    desc: 'High-energy gym websites with class scheduling, trainer profiles, and memberships.',
    accent: '#F97316',
    bg: 'linear-gradient(135deg, #FFF8F0 0%, #FFE8D8 100%)',
    heroColor: '#F97316',
    heroText: 'Join Now',
    mockupBg: '#1A0800',
    cardBg: '#281200',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'architecture',
    title: 'Architecture Studio',
    icon: '📐',
    desc: 'Minimal, gallery-forward portfolios that let breathtaking architectural work speak.',
    accent: '#B8860B',
    bg: 'linear-gradient(135deg, #FEFCF5 0%, #FBF7E8 100%)',
    heroColor: '#B8860B',
    heroText: 'View Portfolio',
    mockupBg: '#0A0800',
    cardBg: '#140F00',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'startup',
    title: 'Tech Startup',
    icon: '🚀',
    desc: 'Dynamic, conversion-focused landing pages that turn visitors into early adopters.',
    accent: '#8B5CF6',
    bg: 'linear-gradient(135deg, #F8F0FF 0%, #F0E8FF 100%)',
    heroColor: '#8B5CF6',
    heroText: 'Get Early Access',
    mockupBg: '#0A0315',
    cardBg: '#140525',
    image: '/mockups/startup.png',
  },
  {
    id: 'beauty',
    title: 'Beauty & Salon',
    icon: '💅',
    desc: 'Chic, glamorous salon websites with booking systems and portfolio galleries.',
    accent: '#EC4899',
    bg: 'linear-gradient(135deg, #FFF0F8 0%, #FFE0F5 100%)',
    heroColor: '#EC4899',
    heroText: 'Book Now',
    mockupBg: '#180410',
    cardBg: '#280818',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
  },
];

// Selected Work (Section 4 in screenshot)
export const selectedWorkItems = [
  {
    id: 'desiswad',
    title: 'DesiSwad Foods',
    category: 'Food E-Commerce Website',
    image: '/mockups/ecommerce.png',
    logo: '🍲 DesiSwad',
  },
  {
    id: 'constructline',
    title: 'ConstructLine',
    category: 'Corporate Website',
    image: '/mockups/construction.png',
    logo: '🏗️ ConstructLine',
  },
  {
    id: 'healthcareplus',
    title: 'HealthCare Plus',
    category: 'Healthcare Website',
    image: '/mockups/healthcare.png',
    logo: '🏥 HealthCare+',
  },
  {
    id: 'realnext',
    title: 'RealNext Properties',
    category: 'Real Estate Website',
    image: '/mockups/realestate.png',
    logo: '🏢 RealNext',
  },
  {
    id: 'edusphere',
    title: 'EduSphere University',
    category: 'Education Website',
    image: '/mockups/startup.png',
    logo: '🎓 EduSphere',
  },
];

// Services (Section 5 in screenshot - 6 cards)
export const services = [
  {
    icon: 'Globe',
    title: 'Custom Websites',
    desc: 'Unique websites built around your business.',
  },
  {
    icon: 'ShoppingBag',
    title: 'E-Commerce Stores',
    desc: 'Powerful online stores that sell more.',
  },
  {
    icon: 'Code2',
    title: 'Web Applications',
    desc: 'Custom web apps to simplify your operations.',
  },
  {
    icon: 'Zap',
    title: 'Landing Pages',
    desc: 'High-converting pages that drive results.',
  },
  {
    icon: 'RefreshCw',
    title: 'Website Redesign',
    desc: 'Modern, fresh, and better than your competitors.',
  },
  {
    icon: 'Wrench',
    title: 'Maintenance & Support',
    desc: 'Ongoing care to keep your website running perfectly.',
  },
];

// 8 Horizontal Process Steps (Section 6 in screenshot)
export const processSteps = [
  {
    num: '01',
    label: 'Understand',
    desc: 'We learn about your business and goals.',
    icon: 'UserCheck',
  },
  {
    num: '02',
    label: 'Research',
    desc: 'We analyze your industry and competitors.',
    icon: 'Search',
  },
  {
    num: '03',
    label: 'Wireframe',
    desc: 'We create the structure and user flow.',
    icon: 'Layout',
  },
  {
    num: '04',
    label: 'Design',
    desc: 'We design a visual experience that represents you.',
    icon: 'Palette',
  },
  {
    num: '05',
    label: 'Develop',
    desc: 'We build your website with clean and scalable code.',
    icon: 'Code',
  },
  {
    num: '06',
    label: 'Test',
    desc: 'We test everything for speed, quality, and performance.',
    icon: 'CheckCircle2',
  },
  {
    num: '07',
    label: 'Launch',
    desc: 'We deploy your website and make it live.',
    icon: 'Rocket',
  },
  {
    num: '08',
    label: 'Support',
    desc: 'We provide ongoing support and maintenance.',
    icon: 'ShieldCheck',
  },
];

// Meet Our Team (Section 7 in screenshot - Sameer Pasha & Team!)
export const teamMembers = [
  {
    name: 'Sameer Shaik',
    role: 'Founder & Senior Software Engineer',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
    linkedin: '#',
    github: '#',
    email: 'sameer@webstudio.com',
  },
];

// Why Choose Us checkmarks
export const whyChooseUsReasons = [
  'We listen, understand, and deliver.',
  'We focus on long-term success.',
  'We provide honest advice.',
  'We care about your growth.',
];

// FAQs
export const faqs = [
  {
    q: 'How long does it take to build a custom website?',
    a: 'We work lightning fast! A standard business or corporate website takes just 7–10 days guaranteed. We work in intensive daily sprints and provide real-time staging preview links so you can watch your website come to life in 10 days.',
  },
  {
    q: 'Do you use templates or page builders?',
    a: 'Never. Every website we build is designed and developed from scratch specifically for your business. We believe templates limit your brand and your growth. Every line of code is written by our engineers.',
  },
  {
    q: 'How much does a custom website cost?',
    a: 'Pricing depends on the scope, features, and complexity of your project. We offer transparent pricing after understanding your needs. Our projects typically range from $600 for simple sites to $5,000 for complex platforms. Book a free consultation to get a precise quote.',
  },
  {
    q: 'Will my website work on all devices?',
    a: 'Absolutely. Responsive design is not optional — it is fundamental to our development process. Every website is tested and optimized for mobile, tablet, and desktop across all modern browsers.',
  },
  {
    q: 'Do you handle website hosting and domain?',
    a: 'Yes. We can assist with domain registration, hosting setup, SSL certificates, and DNS configuration. We also guide you on the best hosting solutions for your traffic and performance needs.',
  },
  {
    q: 'Will I be able to update my website myself?',
    a: 'Yes. We integrate user-friendly CMS solutions (like Sanity, Contentful, or WordPress headless) so you can update content, add blog posts, and manage products without any technical knowledge.',
  },
  {
    q: 'Do you provide SEO services?',
    a: 'Every website we build is SEO-ready from day one — semantic HTML, proper heading structure, meta tags, schema markup, sitemap, and Core Web Vitals optimization. We can also provide ongoing SEO strategy as an add-on service.',
  },
  {
    q: 'What happens after my website launches?',
    a: 'We provide 30 days of complimentary post-launch support. After that, we offer flexible maintenance plans to keep your website updated, secure, and performing at its best. We are your long-term digital partner.',
  },
];

// AI Website Idea Suggestor Presets & Recommendation Rules
export const ideaPresets = [
  {
    id: 'restaurant',
    category: 'Restaurant & Cafe',
    icon: '🍽️',
    prompt: 'I want to open a gourmet restaurant and cafe with table bookings, online ordering for pickup, and an elegant menu display.',
    recommendation: {
      title: 'Conversion-Driven Gourmet Portal',
      type: 'Full-Stack Web App + Reservation System',
      description: 'A sensory-rich digital experience that stimulates appetite and streamlines dining reservations and takeout orders.',
      colorPalette: 'Warm Earthy Gold (#C48A5A) & Deep Espresso (#1A0A08)',
      timeline: '7 - 10 Days Guaranteed',
      priceRange: '$3,500 - $6,000',
      mockup: '/mockups/restaurant.png',
      features: [
        { name: 'Interactive Digital Menu with Allergen Filters', included: true, icon: 'Utensils' },
        { name: 'Real-Time Table Booking & Deposit System', included: true, icon: 'Calendar' },
        { name: 'Online Takeout & Delivery Checkout', included: true, icon: 'ShoppingBag' },
        { name: 'Instagram & TikTok Feed Integration', included: true, icon: 'Share2' },
        { name: 'WhatsApp Instant Chat for Catering Inquiries', included: true, icon: 'MessageCircle' },
        { name: 'SEO Local Business Schema & Google Maps', included: true, icon: 'MapPin' },
      ]
    }
  },
  {
    id: 'ecommerce',
    category: 'E-Commerce Store',
    icon: '🛍️',
    prompt: 'An online brand selling artisanal food products and organic snacks with subscription boxes and nationwide shipping.',
    recommendation: {
      title: 'High-Converting Direct-to-Consumer Store',
      type: 'E-Commerce Platform (Shopify Headless / Next.js)',
      description: 'Engineered for maximum average order value with frictionless 1-click checkout, customer reviews, and automated subscription billing.',
      colorPalette: 'Royal Velvet (#6C5CE7) & Soft Pearl (#F8F7FA)',
      timeline: '10 Days Guaranteed',
      priceRange: '$4,500 - $8,500',
      mockup: '/mockups/ecommerce.png',
      features: [
        { name: 'Frictionless 1-Click Checkout & Apple Pay', included: true, icon: 'CreditCard' },
        { name: 'Automated Monthly Subscription Box Engine', included: true, icon: 'Repeat' },
        { name: 'AI-Powered Product Recommendations & Upsells', included: true, icon: 'Sparkles' },
        { name: 'Customer Review & Photo Testimonial Showcase', included: true, icon: 'Star' },
        { name: 'Automated Abandoned Cart Email Recovery', included: true, icon: 'Mail' },
        { name: 'Real-Time Inventory & Shipping Tracking', included: true, icon: 'Truck' },
      ]
    }
  },
  {
    id: 'startup',
    category: 'Tech & SaaS Startup',
    icon: '🚀',
    prompt: 'A SaaS startup launching an AI-powered analytics tool for small businesses needing early adopter waitlists and interactive product demos.',
    recommendation: {
      title: 'Hyper-Growth SaaS Landing & Demo Portal',
      type: 'Interactive Web Application + Marketing Hub',
      description: 'Designed to build immense credibility and convert visitors into active trial users with interactive ROI calculators and feature previews.',
      colorPalette: 'Electric Violet (#8B5CF6) & Cyber Midnight (#0A0315)',
      timeline: '7 - 10 Days Guaranteed',
      priceRange: '$4,000 - $7,500',
      mockup: '/mockups/startup.png',
      features: [
        { name: 'Interactive Product Demo & ROI Calculator', included: true, icon: 'Activity' },
        { name: 'Early Access Waitlist & Viral Referral Engine', included: true, icon: 'Users' },
        { name: 'Dynamic Tiered Pricing Table with Toggle', included: true, icon: 'DollarSign' },
        { name: 'Stripe Integration for Instant Subscription', included: true, icon: 'Zap' },
        { name: 'Animated 3D Feature Highlights & Micro-interactions', included: true, icon: 'Layers' },
        { name: 'SOC-2 & Trust Security Badge Showcase', included: true, icon: 'ShieldCheck' },
      ]
    }
  },
  {
    id: 'healthcare',
    category: 'Healthcare & Clinic',
    icon: '🏥',
    prompt: 'A multi-specialty medical clinic looking for patient appointment scheduling, doctor credentials display, and secure telehealth consultation booking.',
    recommendation: {
      title: 'HIPAA-Compliant Patient Care Hub',
      type: 'Medical Portal + Scheduling Engine',
      description: 'A reassuring, pristine digital environment that instills patient confidence and automates clinic scheduling.',
      colorPalette: 'Medical Teal (#00B8A9) & Crisp Mint (#F0FFFE)',
      timeline: '8 - 10 Days Guaranteed',
      priceRange: '$5,000 - $9,000',
      mockup: '/mockups/healthcare.png',
      features: [
        { name: '24/7 Online Doctor Appointment Booking', included: true, icon: 'Calendar' },
        { name: 'Doctor Profiles with Verified Patient Reviews', included: true, icon: 'UserCheck' },
        { name: 'Secure Telehealth Video Consultation Linkage', included: true, icon: 'Video' },
        { name: 'Interactive Symptoms & Treatment Guide', included: true, icon: 'FileText' },
        { name: 'Insurance Verification & FAQ Checker', included: true, icon: 'CheckCircle' },
        { name: 'ADA Accessibility Compliant & Fast Loading', included: true, icon: 'Heart' },
      ]
    }
  },
  {
    id: 'realestate',
    category: 'Real Estate & Property',
    icon: '🏡',
    prompt: 'A luxury real estate agency showcasing high-end villas, commercial properties, and virtual 3D property tours for international buyers.',
    recommendation: {
      title: 'Luxury Architectural Showcase & MLS Portal',
      type: 'Property Discovery Platform + Virtual Tours',
      description: 'An ultra-premium property showcase featuring immersive visuals, interactive map filters, and direct agent connection.',
      colorPalette: 'Emerald Gold (#27AE60) & Deep Onyx (#041208)',
      timeline: '10 Days Guaranteed',
      priceRange: '$5,500 - $10,000',
      mockup: '/mockups/realestate.png',
      features: [
        { name: 'Immersive 3D Virtual Walkthrough Embeds', included: true, icon: 'Eye' },
        { name: 'Interactive Map Search with Neighborhood Stats', included: true, icon: 'Map' },
        { name: 'Mortgage Calculator & Financial Estimator', included: true, icon: 'Calculator' },
        { name: 'Direct WhatsApp & WeChat Agent Broker Connect', included: true, icon: 'PhoneCall' },
        { name: 'Automated Property Brochure PDF Generator', included: true, icon: 'Download' },
        { name: 'VIP Private Listing Portal for High-Net-Worth Buyers', included: true, icon: 'Lock' },
      ]
    }
  },
  {
    id: 'construction',
    category: 'Construction & Agency',
    icon: '🏗️',
    prompt: 'An established commercial construction and civil engineering firm needing to showcase completed projects, safety standards, and bidding capabilities.',
    recommendation: {
      title: 'Industrial Authority & Portfolio Showcase',
      type: 'Corporate Website + Client Bidding Portal',
      description: 'Commanding industrial aesthetics that communicate scale, safety excellence, and decades of engineering reliability.',
      colorPalette: 'Industrial Gold (#F39C12) & Slate Charcoal (#1A1200)',
      timeline: '7 - 10 Days Guaranteed',
      priceRange: '$4,000 - $7,000',
      mockup: '/mockups/construction.png',
      features: [
        { name: 'Before-and-After Interactive Project Gallery', included: true, icon: 'Sliders' },
        { name: 'ISO Certifications & Safety Standard Showcase', included: true, icon: 'Award' },
        { name: 'Subcontractor & Client Tender Submission Portal', included: true, icon: 'Briefcase' },
        { name: 'Interactive Timeline of Company History & Scale', included: true, icon: 'Clock' },
        { name: 'Equipment Fleet & Core Competencies Matrix', included: true, icon: 'Grid' },
        { name: 'Direct Request For Proposal (RFP) Estimator', included: true, icon: 'FileSpreadsheet' },
      ]
    }
  }
];

