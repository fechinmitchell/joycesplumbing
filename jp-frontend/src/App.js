// jp-frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Droplets, Wrench, ShowerHead, 
  Thermometer, PipetteIcon, Clock, ChevronDown, Gauge,
  Menu, X, CheckCircle, ArrowRight
} from 'lucide-react';
import './App.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <Droplets className="logo-icon" />
          <span>Joyce's Plumbing</span>
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'nav-links-open' : ''}`}>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('services')}>Services</button>
          <button onClick={() => scrollToSection('work')}>Our Work</button>
          <button onClick={() => scrollToSection('contact')} className="nav-cta">Get in Touch</button>
        </div>
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero-bg">
      <div className="hero-gradient"></div>
    </div>
    <div className="hero-content">
      <h1 className="hero-title">
        Trusted<br />
        <span className="hero-title-accent">Plumbing Services</span>
      </h1>
      <p className="hero-subtitle">
        From leaks and dripping taps to boiler servicing and full bathroom refits, we do a proper job at a fair price. Serving Oughterard, Connemara, Galway City and the surrounding areas, no job is too big or too small.
      </p>
      <div className="hero-buttons">
        <a href="tel:+353870989898" className="btn-primary">
          <Phone size={20} /> Give Us a Call
        </a>
        <button className="btn-secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
          View Services <ArrowRight size={20} />
        </button>
      </div>
      <div className="hero-trust">
        <div className="trust-item">
          <CheckCircle size={20} />
          <span>Free Quotes</span>
        </div>
        <div className="trust-item">
          <CheckCircle size={20} />
          <span>No Call-Out Fee</span>
        </div>
        <div className="trust-item">
          <CheckCircle size={20} />
          <span>Same Day Service</span>
        </div>
      </div>
    </div>
    <div className="scroll-indicator" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
      <ChevronDown className="scroll-icon" />
    </div>
  </section>
);

const About = () => (
  <section id="about" className="about">
    <div className="section-container">
      <div className="about-content-full">
        <span className="section-tag">Why Choose Us</span>
        <h2 className="section-title">Reliable Plumbing & Heating Solutions for Homes and Businesses</h2>
        <p className="about-text">
          Looking for a plumber in Galway you can trust? At Joyce's Plumbing we look after everything from plumbing repairs and boiler servicing to full bathroom refits, and we take pride in doing every job right.
        </p>
        <p className="about-text">
          With over 15 years in the trade, we work on homes and businesses across Oughterard, Connemara, Galway City and the surrounding areas.
        </p>
        <p className="about-text">
          Whether you need a leak fixed, your boiler serviced or a new bathroom put in, we're a local team you can rely on. Just give us a ring.
        </p>
      </div>
    </div>
  </section>
);

const services = [
  { icon: Wrench, title: 'General Plumbing', description: "If it involves water, give us a ring. No job is too small.", features: ['Dishwashers & Washing Machines', 'Toilets & Cisterns', 'Hot Water Cylinders'] },
  { icon: Thermometer, title: 'Heating & Boilers', description: "Keep the house warm through the long Connemara winters.", features: ['Annual Boiler Service', 'Oil Boiler Repairs', 'Radiators & Controls'] },
  { icon: ShowerHead, title: 'Bathrooms', description: "Whether it's a dripping shower or a full bathroom refit, we'll do a proper job.", features: ['Full Bathroom Refits', 'Showers & Electric Showers', 'Neat & Tidy Finish'] },
  { icon: Gauge, title: 'Pumps & Water Pressure', description: "Weak shower or a pump giving trouble? We'll get your water flowing properly again.", features: ['Pump Repairs & Replacement', 'Low Pressure Sorted', 'Outdoor Taps Fitted'] },
  { icon: PipetteIcon, title: 'Drains & Blockages', description: "Sink, toilet or drain that won't clear? We'll have it running freely again.", features: ['Blocked Sinks & Toilets', 'Drain Unblocking', 'Waste Pipe Repairs'] },
  { icon: Droplets, title: 'Leaks & Taps', description: "A drip under the sink or a tap that won't stop? We'll find it and fix it.", features: ['Tap Repairs & Replacement', 'Leak Finding', 'Pipe Repairs'] }
];

const Services = () => (
  <section id="services" className="services">
    <div className="section-container">
      <div className="section-header">
        <span className="section-tag">How We Can Help</span>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">No job too small, from a dripping tap to a full bathroom refit</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon"><service.icon size={28} /></div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}><CheckCircle size={14} />{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const workImages = [
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop', alt: 'Bathroom renovation' },
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop', alt: 'Modern bathroom' },
  { src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop', alt: 'Shower installation' },
  { src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop', alt: 'Boiler work' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop', alt: 'Kitchen plumbing' },
  { src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=400&fit=crop', alt: 'Bathroom fixtures' }
];

const Work = () => (
  <section id="work" className="work">
    <div className="section-container">
      <div className="section-header">
        <span className="section-tag">Previous Jobs</span>
        <h2 className="section-title">Our Work</h2>
        <p className="section-subtitle">A few examples of recent projects around Connemara and Galway</p>
      </div>
      <div className="work-grid">
        {workImages.map((image, index) => (
          <div key={index} className="work-card">
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="contact">
    <div className="section-container">
      <div className="contact-wrapper">
        <div className="contact-info">
          <span className="section-tag">Let's Chat</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-description">
            Give us a call or drop us an email. No obligation, just friendly advice.
          </p>
          <div className="contact-details">
            <a href="tel:+353870989898" className="contact-item">
              <div className="contact-icon"><Phone size={24} /></div>
              <div><strong>Phone</strong><span>087 098 9898</span></div>
            </a>
            <a href="mailto:joycesplumbing@gmail.com" className="contact-item">
              <div className="contact-icon"><Mail size={24} /></div>
              <div><strong>Email</strong><span>joycesplumbing@gmail.com</span></div>
            </a>
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={24} /></div>
              <div><strong>Area</strong><span>Connemara & Galway</span></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Clock size={24} /></div>
              <div><strong>Hours</strong><span>7am to 9pm</span></div>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <div className="form-success">
            <Mail size={48} />
            <h3>Send Us an Email</h3>
            <p>Tell us a bit about what you need and we'll get back to you as soon as we can.</p>
            <p><strong>joycesplumbing@gmail.com</strong></p>
            <a
              href="mailto:joycesplumbing@gmail.com?subject=Website%20Enquiry"
              className="btn-primary btn-full"
            >
              Email Us <ArrowRight size={20} />
            </a>
            <p style={{ marginTop: '1.5rem' }}>Need us urgently?</p>
            <a href="tel:+353870989898" className="btn-primary btn-full">
              <Phone size={20} /> Call 087 098 9898
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="section-container">
      <div className="footer-simple">
        <div className="nav-logo"><Droplets className="logo-icon" /><span>Joyce's Plumbing</span></div>
        <p>Your local plumber in Oughterard, serving Connemara and Galway.</p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Joyce's Plumbing</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;