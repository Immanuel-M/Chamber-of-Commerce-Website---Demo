import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Users, 
  Briefcase, 
  TrendingUp, 
  Award, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-display font-bold text-black text-xl">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white leading-none tracking-tight">BCC</span>
            <span className="text-[10px] text-gold uppercase tracking-widest font-semibold">Inland Empire</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/80 hover:text-gold text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-gold text-sm py-2">Join Now</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-white text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-gold w-full">Join Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Inland Empire Skyline" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-gold font-display font-bold tracking-[0.2em] uppercase text-sm mb-4">
            Empowering Black Business
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
            Building a <span className="text-gold">Legacy</span> of Economic Excellence
          </h1>
          <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
            The Black Chamber of Commerce Inland Empire is dedicated to the economic empowerment of African American businesses and the community.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-gold flex items-center gap-2 group">
              Become a Member <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 border border-white/20 text-white font-semibold rounded-md hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gold/5 blur-[120px] rounded-full"></div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Members', value: '500+' },
    { label: 'Years Active', value: '25+' },
    { label: 'Events Annually', value: '40+' },
    { label: 'Community Impact', value: '$2M+' },
  ];

  return (
    <section className="bg-zinc-950 py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-zinc-500 text-sm uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-red-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1974" 
              alt="Team Meeting" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-2xl shadow-xl hidden lg:block">
            <p className="text-black font-display font-bold text-2xl">Established 1998</p>
            <p className="text-black/70 text-sm">Serving the IE for over 2 decades</p>
          </div>
        </motion.div>

        <div>
          <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-4">Who We Are</h2>
          <h3 className="text-4xl font-display font-bold text-white mb-6">Our Mission is Your Success</h3>
          <p className="text-red-100 mb-6 text-lg leading-relaxed">
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
                <CheckCircle2 className="text-gold w-5 h-5 flex-shrink-0" />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
          <button className="text-white font-bold flex items-center gap-2 hover:text-gold transition-colors">
            Read Our Full Story <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Business Advocacy',
      description: 'We represent your interests at the local, state, and federal levels to ensure a fair business environment.',
      icon: ShieldCheck
    },
    {
      title: 'Networking Events',
      description: 'Connect with other business owners, community leaders, and potential clients at our regular mixers.',
      icon: Users
    },
    {
      title: 'Technical Assistance',
      description: 'Get expert advice on business planning, marketing, financial management, and more.',
      icon: Briefcase
    },
    {
      title: 'Procurement Support',
      description: 'We help you navigate the process of bidding for government and corporate contracts.',
      icon: Globe
    },
    {
      title: 'Marketing & Visibility',
      description: 'Increase your reach through our member directory, social media, and community spotlights.',
      icon: TrendingUp
    },
    {
      title: 'Professional Awards',
      description: 'We celebrate excellence in the Black business community through our annual awards gala.',
      icon: Award
    }
  ];

  return (
    <section id="services" className="section-padding bg-red-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-4">Our Services</h2>
          <h3 className="text-4xl font-display font-bold text-white mb-6">How We Support Our Members</h3>
          <p className="text-red-100">
            We offer a comprehensive suite of services designed to help your business grow, thrive, and make a lasting impact in the Inland Empire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-red-800 p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-gold w-6 h-6" />
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-3">{service.title}</h4>
              <p className="text-red-100 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const events = [
    {
      title: 'Monthly Business Mixer',
      date: 'March 25, 2026',
      time: '6:00 PM - 8:00 PM',
      location: 'Riverside Convention Center',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069'
    },
    {
      title: 'Economic Empowerment Summit',
      date: 'April 12, 2026',
      time: '9:00 AM - 4:00 PM',
      location: 'Ontario Business Hub',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2070'
    },
    {
      title: 'Annual Awards Gala',
      date: 'May 30, 2026',
      time: '7:00 PM - 11:00 PM',
      location: 'The Mission Inn Hotel',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2074'
    }
  ];

  return (
    <section id="events" className="section-padding bg-red-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-4">Upcoming Events</h2>
            <h3 className="text-4xl font-display font-bold text-white">Join Us at Our Next Gathering</h3>
          </div>
          <button className="text-white font-bold flex items-center gap-2 hover:text-gold transition-colors">
            View All Events <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-zinc-900">
                  {event.date.split(',')[0]}
                </div>
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-2 group-hover:text-gold transition-colors">{event.title}</h4>
              <div className="flex flex-col gap-1 text-red-100 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Membership = () => {
  return (
    <section id="membership" className="section-padding bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-gold font-display font-bold text-xl mb-4">Membership</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Invest in Your Future Today</h3>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
            Join a powerful network of business owners and professionals dedicated to excellence and community growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              { title: 'Individual', price: '$150', features: ['Networking Access', 'Member Directory', 'Event Discounts'] },
              { title: 'Business', price: '$350', features: ['Advocacy Support', 'Marketing Tools', 'Procurement Help'], popular: true },
              { title: 'Corporate', price: '$1,000+', features: ['Strategic Partnerships', 'Gala Sponsorship', 'Board Opportunities'] },
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`p-8 rounded-2xl border ${plan.popular ? 'bg-gold border-gold' : 'bg-black/40 border-white/10'} text-left transition-transform hover:scale-105`}
              >
                <h4 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.title}</h4>
                <div className={`text-3xl font-display font-bold mb-6 ${plan.popular ? 'text-black' : 'text-gold'}`}>{plan.price}<span className="text-sm font-normal">/year</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-black/80' : 'text-zinc-400'}`}>
                      <CheckCircle2 className="w-4 h-4" /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-colors ${plan.popular ? 'bg-black text-white hover:bg-zinc-800' : 'bg-gold text-black hover:bg-gold-dark'}`}>
                  Select Plan
                </button>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-sm italic">
            * Custom sponsorship levels are available for organizations looking for deeper community engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-display font-bold text-black text-xl">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white leading-none tracking-tight">BCC</span>
                <span className="text-[10px] text-gold uppercase tracking-widest font-semibold">Inland Empire</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              The premier business organization for African American entrepreneurs and professionals in the Inland Empire region.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-gold hover:text-black transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-gold hover:text-black transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-gold hover:text-black transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-gold hover:text-black transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Our Services</a></li>
              <li><a href="#events" className="hover:text-gold transition-colors">Events</a></li>
              <li><a href="#membership" className="hover:text-gold transition-colors">Membership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <span>123 Business Way, Suite 100<br />Riverside, CA 92501</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span>(951) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span>info@bccinlandempire.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-4">Stay updated with our latest news and events.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-gold"
              />
              <button className="bg-gold text-black p-2 rounded-lg hover:bg-gold-dark transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 Black Chamber of Commerce Inland Empire. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
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
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Events />
      <Membership />
      <Footer />
    </div>
  );
}
