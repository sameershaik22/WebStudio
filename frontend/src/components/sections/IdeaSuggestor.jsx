import { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, Wand2, ArrowRight, Check, ShieldCheck, Clock, 
  DollarSign, Utensils, Calendar, ShoppingBag, Share2, 
  MessageCircle, MapPin, CreditCard, Repeat, Star, Mail, 
  Truck, Activity, Users, Zap, Layers, Video, FileText, 
  CheckCircle, Heart, Eye, Map, Calculator, PhoneCall, 
  Download, Lock, Sliders, Award, Briefcase, Grid, 
  FileSpreadsheet, X, CheckCircle2, ChevronRight, Cpu
} from 'lucide-react';
import { ideaPresets } from '../../data/index.js';

// Icon mapper for dynamic feature list
const iconMap = {
  Utensils: <Utensils size={16} />,
  Calendar: <Calendar size={16} />,
  ShoppingBag: <ShoppingBag size={16} />,
  Share2: <Share2 size={16} />,
  MessageCircle: <MessageCircle size={16} />,
  MapPin: <MapPin size={16} />,
  CreditCard: <CreditCard size={16} />,
  Repeat: <Repeat size={16} />,
  Sparkles: <Sparkles size={16} />,
  Star: <Star size={16} />,
  Mail: <Mail size={16} />,
  Truck: <Truck size={16} />,
  Activity: <Activity size={16} />,
  Users: <Users size={16} />,
  DollarSign: <DollarSign size={16} />,
  Zap: <Zap size={16} />,
  Layers: <Layers size={16} />,
  ShieldCheck: <ShieldCheck size={16} />,
  UserCheck: <CheckCircle size={16} />,
  Video: <Video size={16} />,
  FileText: <FileText size={16} />,
  CheckCircle: <CheckCircle size={16} />,
  Heart: <Heart size={16} />,
  Eye: <Eye size={16} />,
  Map: <Map size={16} />,
  Calculator: <Calculator size={16} />,
  PhoneCall: <PhoneCall size={16} />,
  Download: <Download size={16} />,
  Lock: <Lock size={16} />,
  Sliders: <Sliders size={16} />,
  Award: <Award size={16} />,
  Briefcase: <Briefcase size={16} />,
  Clock: <Clock size={16} />,
  Grid: <Grid size={16} />,
  FileSpreadsheet: <FileSpreadsheet size={16} />
};

export default function IdeaSuggestor() {
  const [activePreset, setActivePreset] = useState(ideaPresets[0]);
  const [customInput, setCustomInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');

  // 3D Tilt Card Ref & State for clean interactive agency animation
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Initialize selected features when preset changes
  useEffect(() => {
    const initialFeatures = {};
    activePreset.recommendation.features.forEach((feat, i) => {
      initialFeatures[i] = true; // All included by default
    });
    setSelectedFeatures(initialFeatures);
  }, [activePreset]);

  // Handle 3D Mouse Tilt (Clean, sleek agency style animation)
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8; // Max 8 degree tilt
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Smart Keyword Matching Engine for Custom Business Ideas
  const handleAnalyzeIdea = (e) => {
    if (e) e.preventDefault();
    if (!customInput.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      const text = customInput.toLowerCase();
      let match = ideaPresets[0]; // default restaurant

      if (text.includes('shop') || text.includes('store') || text.includes('sell') || text.includes('clothes') || text.includes('product') || text.includes('retail') || text.includes('buy')) {
        match = ideaPresets[1]; // ecommerce
      } else if (text.includes('tech') || text.includes('saas') || text.includes('app') || text.includes('software') || text.includes('ai') || text.includes('tool') || text.includes('platform') || text.includes('startup')) {
        match = ideaPresets[2]; // startup
      } else if (text.includes('health') || text.includes('clinic') || text.includes('doctor') || text.includes('patient') || text.includes('medical') || text.includes('dental') || text.includes('care') || text.includes('hospital')) {
        match = ideaPresets[3]; // healthcare
      } else if (text.includes('house') || text.includes('home') || text.includes('real estate') || text.includes('property') || text.includes('apartment') || text.includes('rent') || text.includes('villa') || text.includes('land')) {
        match = ideaPresets[4]; // real estate
      } else if (text.includes('build') || text.includes('construction') || text.includes('repair') || text.includes('roof') || text.includes('civil') || text.includes('contractor') || text.includes('engine')) {
        match = ideaPresets[5]; // construction
      } else if (text.includes('food') || text.includes('coffee') || text.includes('cafe') || text.includes('bakery') || text.includes('eat') || text.includes('pizza') || text.includes('restaurant') || text.includes('menu')) {
        match = ideaPresets[0]; // restaurant
      } else {
        // Create dynamic custom recommendation on the fly!
        match = {
          id: 'custom-generated',
          category: 'Custom Business Solution',
          icon: '✨',
          prompt: customInput,
          recommendation: {
            title: `Custom ${customInput.slice(0, 25)} Portal`,
            type: 'Tailored Web Studio Architecture',
            description: `A custom-engineered high-performance website designed specifically around your vision: "${customInput}". Built from scratch for maximum conversions.`,
            colorPalette: 'Tailored Brand Palette & Modern Typography',
            timeline: '7 - 10 Days Guaranteed',
            priceRange: '$1,500 - $3,500',
            mockup: '/mockups/startup.png',
            features: [
              { name: 'Custom Brand UI/UX Design System', included: true, icon: 'Sparkles' },
              { name: 'Interactive User Engagement & Lead Capture', included: true, icon: 'Users' },
              { name: 'Mobile-First Responsive Layout & Speed Optimization', included: true, icon: 'Zap' },
              { name: 'SEO Core Web Vitals & Google Rank Ready', included: true, icon: 'MapPin' },
              { name: 'WhatsApp & Direct WhatsApp Client Connect', included: true, icon: 'MessageCircle' },
              { name: 'Custom Headless CMS for Easy Content Editing', included: true, icon: 'Layers' },
            ]
          }
        };
      }

      setActivePreset(match);
      setIsAnalyzing(false);
      // Smooth scroll to recommendation display
      document.getElementById('idea-result-display')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 600);
  };

  const toggleFeature = (index) => {
    setSelectedFeatures(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const countActiveFeatures = () => {
    return Object.values(selectedFeatures).filter(Boolean).length;
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!clientName || !clientContact) return;
    setModalSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setModalSubmitted(false);
      setClientName('');
      setClientContact('');
    }, 3500);
  };

  return (
    <section className="idea-suggestor section" id="idea-suggestor" aria-label="AI Website Idea Suggestor" style={{ background: 'var(--color-bg-secondary)', padding: 'var(--space-20) 0', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background glow */}
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, 0)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(196, 138, 90, 0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container">
        {/* Section Header */}
        <header className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--space-12) auto' }}>
          <div className="section-label reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', background: 'rgba(196, 138, 90, 0.15)', color: 'var(--color-accent)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>
            <Wand2 size={14} />
            AI-POWERED PROJECT CONFIGURATOR
          </div>
          <h2 className="section-heading reveal delay-100" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: '1.15', marginBottom: 'var(--space-4)' }}>
            Don't Know How Your Website Should Look? <span style={{ color: 'var(--color-accent)' }}>Tell Us Your Idea.</span>
          </h2>
          <p className="section-sub reveal delay-200" style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
            Whether you have a fully formed concept or just a rough business idea, our AI architecture engine will suggest the perfect website structure, features, and aesthetic for your brand.
          </p>
        </header>

        {/* Interactive Idea Input Bar */}
        <div className="idea-input-box reveal delay-300" style={{ maxWidth: '720px', margin: '0 auto var(--space-10) auto', background: 'var(--color-bg)', padding: 'var(--space-3)', borderRadius: 'var(--radius-full)', border: '2px solid var(--color-border)', boxShadow: '0 12px 35px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', transition: 'border-color 0.3s ease' }}>
          <div style={{ paddingLeft: 'var(--space-4)', color: 'var(--color-accent)' }}>
            <Sparkles size={22} />
          </div>
          <form onSubmit={handleAnalyzeIdea} style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 'var(--space-2)' }}>
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Say your business idea (e.g., 'An organic dog bakery with pickup & online menu')..."
              style={{ flex: 1, border: 'none', background: 'transparent', padding: 'var(--space-3) 0', fontSize: 'var(--text-base)', color: 'var(--color-text-primary)', outline: 'none', fontFamily: 'inherit' }}
            />
            <button
              type="submit"
              disabled={isAnalyzing || !customInput.trim()}
              style={{
                background: 'var(--color-accent)',
                color: '#fff',
                border: 'none',
                padding: 'var(--space-3) var(--space-6)',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: 'var(--text-sm)',
                cursor: isAnalyzing ? 'wait' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                transition: 'all 0.3s ease',
                opacity: isAnalyzing || !customInput.trim() ? 0.7 : 1,
                boxShadow: '0 4px 15px rgba(196, 138, 90, 0.3)'
              }}
            >
              {isAnalyzing ? (
                <>
                  <Cpu size={16} className="spin" />
                  Designing...
                </>
              ) : (
                <>
                  Suggest Website
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Preset Category Pills */}
        <div className="preset-pills reveal delay-400" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'var(--space-3)', marginBottom: 'var(--space-16)' }}>
          <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-text-tertiary)', alignSelf: 'center', marginRight: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            OR SELECT INDUSTRY:
          </span>
          {ideaPresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                setActivePreset(preset);
                setCustomInput(preset.prompt);
              }}
              style={{
                background: activePreset.id === preset.id ? 'var(--color-text-primary)' : 'var(--color-bg)',
                color: activePreset.id === preset.id ? 'var(--color-bg)' : 'var(--color-text-primary)',
                border: `1px solid ${activePreset.id === preset.id ? 'var(--color-text-primary)' : 'var(--color-border)'}`,
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-sm)',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                transition: 'all 0.25s ease',
                boxShadow: activePreset.id === preset.id ? '0 6px 16px rgba(0,0,0,0.15)' : 'none'
              }}
            >
              <span>{preset.icon}</span>
              {preset.category}
            </button>
          ))}
        </div>

        {/* Recommendation Display Grid (Left: Configurator, Right: Clean 3D Tilt Mockup) */}
        <div id="idea-result-display" className="recommendation-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 'var(--space-10)', alignItems: 'start' }}>
          
          {/* Left Column: AI Recommended Architecture & Feature Configurator */}
          <div className="recommendation-details reveal" style={{ background: 'var(--color-bg)', padding: 'var(--space-8)', borderRadius: 'var(--radius-3xl)', border: '1px solid var(--color-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-4)', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
              <span style={{ background: 'rgba(196, 138, 90, 0.15)', color: 'var(--color-accent)', padding: '4px 12px', borderRadius: 'var(--radius-md)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                RECOMMENDED ARCHITECTURE
              </span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)', fontWeight: 600 }}>
                {activePreset.category}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', lineHeight: '1.2', marginBottom: 'var(--space-3)' }}>
              {activePreset.recommendation.title}
            </h3>

            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-accent)', marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <Layers size={16} />
              {activePreset.recommendation.type}
            </div>

            <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-6)', borderBottom: '1px solid var(--color-border)' }}>
              {activePreset.recommendation.description}
            </p>

            {/* Aesthetic & Color Palette Suggestion */}
            <div style={{ marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-6)', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-3)' }}>
                SUGGESTED AESTHETIC & PALETTE
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #C48A5A 0%, #1A0A08 100%)', border: '2px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                  {activePreset.recommendation.colorPalette}
                </span>
              </div>
            </div>

            {/* Interactive Feature Checklist */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  MUST-HAVE CUSTOM FEATURES ({countActiveFeatures()} SELECTED)
                </span>
                <span style={{ fontSize: '11px', color: 'var(--color-accent)', fontWeight: 600 }}>
                  Click to toggle
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {activePreset.recommendation.features.map((feat, i) => {
                  const isChecked = selectedFeatures[i] ?? true;
                  return (
                    <div
                      key={i}
                      onClick={() => toggleFeature(i)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-lg)',
                        background: isChecked ? 'rgba(196, 138, 90, 0.08)' : 'var(--color-bg-secondary)',
                        border: `1px solid ${isChecked ? 'rgba(196, 138, 90, 0.4)' : 'transparent'}`,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                        <span style={{ color: isChecked ? 'var(--color-accent)' : 'var(--color-text-tertiary)' }}>
                          {iconMap[feat.icon] || <CheckCircle size={16} />}
                        </span>
                        <span style={{ fontSize: 'var(--text-sm)', fontWeight: isChecked ? 600 : 400, color: isChecked ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)' }}>
                          {feat.name}
                        </span>
                      </div>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '6px',
                        background: isChecked ? 'var(--color-accent)' : 'var(--color-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        transition: 'all 0.2s ease'
                      }}>
                        {isChecked && <Check size={12} strokeWidth={3} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline, Estimate & CTA */}
            <div style={{ background: 'var(--color-bg-secondary)', padding: 'var(--space-6)', borderRadius: 'var(--radius-2xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
                    ESTIMATED TIMELINE
                  </div>
                  <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                    <Clock size={18} className="text-accent" />
                    {activePreset.recommendation.timeline}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>
                    INVESTMENT RANGE
                  </div>
                  <div style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', marginTop: '2px' }}>
                    {activePreset.recommendation.priceRange}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowModal(true)}
                style={{
                  width: '100%',
                  background: 'var(--color-accent)',
                  color: '#fff',
                  border: 'none',
                  padding: 'var(--space-4) var(--space-6)',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: 'var(--text-base)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-2)',
                  boxShadow: '0 8px 25px rgba(196, 138, 90, 0.35)',
                  transition: 'all 0.3s ease'
                }}
              >
                Build This For My Business
                <ArrowRight size={18} />
              </button>
            </div>

          </div>

          {/* Right Column: Clean 3D Interactive Tilt Card Mockup Preview */}
          <div className="recommendation-preview reveal delay-200" style={{ position: 'sticky', top: '100px' }}>
            <div style={{ marginBottom: 'var(--space-4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-text-tertiary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                INTERACTIVE 3D PROTOTYPE PREVIEW
              </span>
              <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)', background: 'var(--color-bg)', padding: '2px 8px', borderRadius: '100px', border: '1px solid var(--color-border)' }}>
                Hover to tilt
              </span>
            </div>

            {/* Clean 3D Tilt Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: '1000px',
                width: '100%',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease',
                  transformStyle: 'preserve-3d',
                  background: 'linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 100%)',
                  borderRadius: 'var(--radius-3xl)',
                  padding: 'var(--space-6)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: isHovered 
                    ? '0 30px 60px rgba(0,0,0,0.35), 0 0 40px rgba(196, 138, 90, 0.2)' 
                    : '0 15px 35px rgba(0,0,0,0.2)',
                  position: 'relative'
                }}
              >
                {/* Floating Clay Badge (3D Depth) */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '25px',
                  background: '#F5F2EB',
                  color: '#111',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '11px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  border: '1px solid #D8D0C5',
                  transform: 'translateZ(40px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 10
                }}>
                  <ShieldCheck size={14} style={{ color: '#C48A5A' }} />
                  <span>AI Verified Architecture</span>
                </div>

                {/* Laptop Mockup Frame */}
                <div style={{
                  background: '#222',
                  borderRadius: '12px 12px 0 0',
                  overflow: 'hidden',
                  border: '3px solid #333',
                  borderBottom: 'none',
                  transform: 'translateZ(20px)',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.4)'
                }}>
                  {/* Browser Bar */}
                  <div style={{ height: '24px', background: '#111', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
                    <div style={{ marginLeft: 'auto', fontSize: '10px', color: '#888', fontWeight: 600 }}>
                      https://webstudio.agency/preview/{activePreset.id}
                    </div>
                  </div>

                  {/* High-Res Custom Mockup Image Display */}
                  <div style={{ position: 'relative', width: '100%', paddingTop: '65%', background: '#000' }}>
                    <img
                      src={activePreset.recommendation.mockup}
                      alt={activePreset.recommendation.title}
                      style={{
                        position: 'absolute',
                        top: 0, left: 0, width: '100%', height: '100%',
                        objectFit: 'cover',
                        transition: 'all 0.5s ease'
                      }}
                    />
                    {/* Dark gradient overlay at bottom of screen */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)', display: 'flex', alignItems: 'flex-end', padding: '16px' }}>
                      <div style={{ color: '#fff' }}>
                        <span style={{ fontSize: '10px', fontWeight: 700, background: 'var(--color-accent)', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                          Custom Crafted
                        </span>
                        <div style={{ fontSize: '14px', fontWeight: 700, marginTop: '4px' }}>
                          {activePreset.category} Showcase
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base */}
                <div style={{
                  height: '12px',
                  background: 'linear-gradient(90deg, #b0b0b0 0%, #d8d8d8 50%, #b0b0b0 100%)',
                  borderRadius: '0 0 16px 16px',
                  transform: 'translateZ(20px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
                  position: 'relative'
                }}>
                  <div style={{ width: '40px', height: '4px', background: '#666', margin: '0 auto', borderRadius: '0 0 4px 4px' }} />
                </div>

                {/* Floating Clay Stats Cards below mockup (3D Depth) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginTop: 'var(--space-6)', transform: 'translateZ(30px)' }}>
                  <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', padding: 'var(--space-4)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading)' }}>100%</div>
                    <div style={{ fontSize: '11px', color: '#aaa', marginTop: '2px' }}>Custom Scratch Code</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', padding: 'var(--space-4)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: '20px', fontWeight: 700, color: '#C48A5A', fontFamily: 'var(--font-heading)' }}>99.9</div>
                    <div style={{ fontSize: '11px', color: '#aaa', marginTop: '2px' }}>Google Speed Score</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Why WebStudio badge */}
            <div style={{ marginTop: 'var(--space-6)', textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)' }}>
              <CheckCircle2 size={14} className="text-accent" />
              <span>No templates or page builders used. We code from scratch.</span>
            </div>

          </div>

        </div>
      </div>

      {/* Interactive Quote / Consultation Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: 'var(--space-4)'
        }}>
          <div className="modal-content reveal-scale" style={{
            background: 'var(--color-bg)',
            width: '100%',
            maxWidth: '520px',
            borderRadius: 'var(--radius-3xl)',
            padding: 'var(--space-8)',
            border: '1px solid var(--color-border)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            <button
              onClick={() => setShowModal(false)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'var(--color-bg-secondary)', border: 'none', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--color-text-primary)' }}
            >
              <X size={18} />
            </button>

            {modalSubmitted ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-8) 0' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(39, 174, 96, 0.15)', color: '#27AE60', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4) auto' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>
                  Specification Sent!
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Your custom project configuration for <strong style={{ color: 'var(--color-text-primary)' }}>{activePreset.recommendation.title}</strong> has been transmitted to Sameer Pasha and our engineering team!
                </p>
                <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-4)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', fontSize: 'var(--text-xs)', color: 'var(--color-text-tertiary)' }}>
                  We will contact you within 2 hours with a preliminary prototype proposal.
                </div>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
                  START YOUR PROJECT
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-6)' }}>
                  Build Your {activePreset.category}
                </h3>

                <div style={{ background: 'var(--color-bg-secondary)', padding: 'var(--space-4)', borderRadius: 'var(--radius-xl)', marginBottom: 'var(--space-6)', fontSize: 'var(--text-sm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--color-text-secondary)' }}>Architecture:</span>
                    <strong style={{ color: 'var(--color-text-primary)' }}>{activePreset.recommendation.title}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--color-text-secondary)' }}>Selected Features:</span>
                    <strong style={{ color: 'var(--color-text-primary)' }}>{countActiveFeatures()} Included</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--color-text-secondary)' }}>Estimated Investment:</span>
                    <strong style={{ color: 'var(--color-accent)' }}>{activePreset.recommendation.priceRange}</strong>
                  </div>
                </div>

                <form onSubmit={handleModalSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '6px' }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. John Doe"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)', color: 'var(--color-text-primary)', fontSize: 'var(--text-base)', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '6px' }}>
                      EMAIL OR PHONE / WHATSAPP *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      placeholder="e.g. john@company.com or +1 234 567 8900"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', background: 'var(--color-bg-secondary)', color: 'var(--color-text-primary)', fontSize: 'var(--text-base)', outline: 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      background: 'var(--color-accent)',
                      color: '#fff',
                      border: 'none',
                      padding: '16px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 700,
                      fontSize: 'var(--text-base)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 'var(--space-2)',
                      marginTop: 'var(--space-2)',
                      boxShadow: '0 8px 25px rgba(196, 138, 90, 0.35)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Send to WebStudio Engineers
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
