import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Award, 
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

// --- Components ---

const UtilityHeader = () => (
  <div className="bg-ccc-blue-dark text-white py-2 px-6 hidden md:block">
    <div className="max-w-7xl mx-auto flex justify-end items-center gap-6 text-xs font-medium">
      <a href="#" className="hover:underline flex items-center gap-1"><Globe className="w-3 h-3" /> Translate</a>
      <a href="#" className="hover:underline">Contact Us</a>
      <a href="#" className="hover:underline">Join Now</a>
      <a href="#" className="hover:underline">Member Login</a>
      <div className="flex items-center bg-white/10 rounded px-2 py-1">
        <input type="text" placeholder="Search" className="bg-transparent border-none text-white placeholder-white/70 focus:outline-none w-32" />
        <Search className="w-3 h-3 cursor-pointer" />
      </div>
    </div>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-ccc-blue rounded-full flex items-center justify-center font-serif font-bold text-white text-xl">
            B
          </div>
          <div className="flex flex-col">
            <span className="text-ccc-blue font-serif font-bold text-xl leading-tight uppercase tracking-tight">Black Chamber</span>
            <span className="text-ccc-blue font-serif font-bold text-xl leading-tight uppercase tracking-tight">Inland Empire</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="group relative">
              <a href={item.href} className="nav-link flex items-center gap-1">
                {item.name} <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          ))}
          <button className="btn-primary py-2">Join the Chamber</button>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-ccc-blue" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-ccc-light border-t border-zinc-200 p-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-ccc-blue font-bold text-lg">
                {item.name}
              </a>
            ))}
            <button className="btn-primary w-full">Join the Chamber</button>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[550px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Inland Empire Business" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ccc-blue/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl text-white"
        >
          <span className="inline-block text-ccc-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">
            Empowering Black Business
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Building a <span className="text-ccc-gold">Legacy</span> of Economic Excellence
          </h1>
          <p className="text-xl mb-8 leading-relaxed text-white/90">
            The Black Chamber of Commerce Inland Empire is dedicated to the economic empowerment of African American businesses and the community.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-secondary">Become a Member</button>
            <button className="px-6 py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-all">
              Our Mission
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1974" 
            alt="BCCIE Leadership" 
            className="rounded-lg shadow-xl w-full"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-ccc-gold p-6 rounded shadow-lg hidden lg:block">
            <p className="text-ccc-blue-dark font-serif font-bold text-xl">Established 1998</p>
            <p className="text-ccc-blue-dark/70 text-sm font-medium">Serving the IE for 25+ years</p>
          </div>
        </motion.div>

        <div>
          <h2 className="text-sm font-bold text-ccc-blue uppercase tracking-widest mb-4">Who We Are</h2>
          <h3 className="text-4xl font-serif font-bold text-ccc-blue mb-6">Our Mission is Your Success</h3>
          <p className="text-zinc-600 mb-6 text-lg leading-relaxed">
            The Black Chamber of Commerce Inland Empire (BCCIE) is a non-profit organization that provides business development, advocacy, and networking opportunities for African American businesses in the Inland Empire region.
          </p>
          <div className="space-y-4 mb-8">
            {[
              'Promote economic growth and development',
              'Advocate for business-friendly policies',
              'Provide educational resources and training',
              'Foster community partnerships'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-ccc-gold w-5 h-5 flex-shrink-0" />
                <span className="text-zinc-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <button className="text-ccc-blue font-bold flex items-center gap-2 hover:underline">
            Read Our Full Story <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'Business Advocacy',
      description: 'We represent your interests at the local, state, and federal levels to ensure a fair business environment.',
      icon: ShieldCheck,
      color: 'bg-ccc-blue'
    },
    {
      title: 'Networking Events',
      description: 'Connect with other business owners, community leaders, and potential clients at our regular mixers.',
      icon: Users,
      color: 'bg-ccc-blue-dark'
    },
    {
      title: 'Technical Assistance',
      description: 'Get expert advice on business planning, marketing, financial management, and more.',
      icon: Briefcase,
      color: 'bg-ccc-gray'
    }
  ];

  return (
    <section id="services" className="bg-ccc-light py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ccc-blue mb-4">Our Services</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of services designed to help your business grow, thrive, and make a lasting impact.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className={`${card.color} p-6 flex justify-center`}>
                <card.icon className="w-12 h-12 text-white" />
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-serif font-bold text-ccc-blue mb-4">{card.title}</h3>
                <p className="text-zinc-600 mb-6">{card.description}</p>
                <a href="#" className="text-ccc-blue font-bold flex items-center gap-2 hover:underline">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactSection = () => {
  const stats = [
    { label: 'Members', value: '500+' },
    { label: 'Years Active', value: '25+' },
    { label: 'Events Annually', value: '40+' },
    { label: 'Community Impact', value: '$2M+' },
  ];

  return (
    <section className="section-container bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="text-4xl font-serif font-bold text-ccc-blue mb-2">{stat.value}</div>
            <div className="text-ccc-gray text-xs font-bold uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const MembershipSection = () => {
  const plans = [
    { title: 'Individual', price: '$150', features: ['Networking Access', 'Member Directory', 'Event Discounts'] },
    { title: 'Business', price: '$350', features: ['Advocacy Support', 'Marketing Tools', 'Procurement Help'], popular: true },
    { title: 'Corporate', price: '$1,000+', features: ['Strategic Partnerships', 'Gala Sponsorship', 'Board Opportunities'] },
  ];

  return (
    <section id="membership" className="bg-ccc-light py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ccc-blue mb-4">Membership Plans</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Join a powerful network of business owners and professionals dedicated to excellence and community growth.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-lg shadow-md border-t-4 ${plan.popular ? 'border-ccc-gold' : 'border-ccc-blue'}`}>
              <h4 className="text-xl font-bold text-ccc-blue mb-2">{plan.title}</h4>
              <div className="text-3xl font-serif font-bold text-ccc-blue-dark mb-6">{plan.price}<span className="text-sm font-normal text-zinc-500">/year</span></div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                    <CheckCircle2 className="w-4 h-4 text-ccc-gold" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded font-bold transition-all ${plan.popular ? 'btn-secondary' : 'btn-primary'}`}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-ccc-blue-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-serif font-bold text-xl leading-tight uppercase">Black Chamber</span>
              <span className="font-serif font-bold text-xl leading-tight uppercase">Inland Empire</span>
            </div>
            <p className="text-white/70 text-sm mb-6">
              The premier business organization for African American entrepreneurs and professionals in the Inland Empire region.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-ccc-gold" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-ccc-gold" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-ccc-gold" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-ccc-gold" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-ccc-gold" />
            </div>
          </div>

          <div>
            <h4 className="text-ccc-gold font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#services" className="hover:text-white">Our Services</a></li>
              <li><a href="#membership" className="hover:text-white">Membership</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ccc-gold font-bold uppercase tracking-widest text-sm mb-6">Our Impact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#" className="hover:text-white">Economic Growth</a></li>
              <li><a href="#" className="hover:text-white">Business Advocacy</a></li>
              <li><a href="#" className="hover:text-white">Community Partners</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
              <li><a href="#" className="hover:text-white">Newsroom</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-ccc-gold font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-ccc-gold" />
                <span>123 Business Way, Suite 100<br />Riverside, CA 92501</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-ccc-gold" />
                <span>(951) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-ccc-gold" />
                <span>info@bccinlandempire.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 Black Chamber of Commerce Inland Empire. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans">
      <UtilityHeader />
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ImpactSection />
      <MembershipSection />
      <Footer />
    </div>
  );
}
