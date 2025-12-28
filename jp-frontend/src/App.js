import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Droplets, Wrench, ShowerHead, 
  Thermometer, PipetteIcon, Clock, ChevronDown,
  Menu, X, CheckCircle, ArrowRight, Heart
} from 'lucide-react';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5007';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
      <div className="hero-badge">
        <Heart size={16} />
        <span>Your Local Connemara Plumber</span>
      </div>
      <h1 className="hero-title">
        Friendly, Reliable<br />
        <span className="hero-title-accent">Plumbing Help</span>
      </h1>
      <p className="hero-subtitle">
        From urgent emergency plumbing services to outdoor tap installations, leak detection, and pipe repairs, we deliver fast, reliable solutions that keep your plumbing in perfect working order. Serving Galway City and surrounding areas, we bring quality craftsmanship and prompt service to every job – big or small.
      </p>
      <div className="hero-buttons">
        <a href="tel:+353851234567" className="btn-primary">
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
          Looking for a Galway plumber you can trust? At Joyce's Plumbing, we deliver expert plumbing services, comprehensive bathroom renovations, and boiler servicing, ensuring quality results every time.
        </p>
        <p className="about-text">
          With over 15 years of experience, we provide a full range of domestic and commercial plumbing solutions, serving Oughterard, Connemara, Galway City and surrounding areas.
        </p>
        <p className="about-text">
          Whether you need an emergency plumber, professional heating upgrades, or a complete bathroom remodel, our locally trusted team is here to help.
        </p>
        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-number">15+</span>
            <span className="about-stat-label">Years Experience</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">Local</span>
            <span className="about-stat-label">Galway Based</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">1000+</span>
            <span className="about-stat-label">Happy Customers</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const services = [
  { icon: Wrench, title: 'Emergency Repairs', description: "Burst pipe at midnight? No problem. We'll get to you as fast as we can.", features: ['Available Evenings & Weekends', 'Quick Response', 'Honest Pricing'] },
  { icon: ShowerHead, title: 'Bathrooms', description: "From fixing a leaky shower to fitting a whole new bathroom.", features: ['Full Installations', 'Repairs & Upgrades', 'Tidy Workmanship'] },
  { icon: Thermometer, title: 'Heating & Boilers', description: "Keep your home cosy through those Connemara winters.", features: ['Boiler Servicing', 'Repairs', 'New Installations'] },
  { icon: PipetteIcon, title: 'Drains & Blockages', description: "Blocked drain? We'll get things flowing again.", features: ['Drain Clearing', 'CCTV Surveys', 'Prevention Advice'] },
  { icon: Droplets, title: 'Leaks & Taps', description: "That annoying drip keeping you up? Let us sort it.", features: ['Tap Repairs', 'Leak Detection', 'Pipe Repairs'] },
  { icon: Clock, title: 'General Plumbing', description: "Whatever the job, big or small, give us a call.", features: ['Dishwasher Installs', 'Washing Machines', 'General Repairs'] }
];

const Services = () => (
  <section id="services" className="services">
    <div className="section-container">
      <div className="section-header">
        <span className="section-tag">How We Can Help</span>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">No job too small – from a dripping tap to a full bathroom installation</p>
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
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Unable to send message. Please give us a call instead!');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="section-tag">Let's Chat</span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-description">
              Give us a call or drop us a message – no obligation, just friendly advice.
            </p>
            <div className="contact-details">
              <a href="tel:+353851234567" className="contact-item">
                <div className="contact-icon"><Phone size={24} /></div>
                <div><strong>Phone</strong><span>085 123 4567</span></div>
              </a>
              <a href="mailto:info@joycesplumbing.ie" className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <div><strong>Email</strong><span>info@joycesplumbing.ie</span></div>
              </a>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div><strong>Area</strong><span>Connemara & Galway</span></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Clock size={24} /></div>
                <div><strong>Hours</strong><span>7am - 9pm (Emergencies Anytime)</span></div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <CheckCircle size={48} />
                <h3>Thanks a Million!</h3>
                <p>We'll get back to you as soon as we can.</p>
                <button onClick={() => setSubmitted(false)} className="btn-primary">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {error && <div className="form-error">{error}</div>}
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required placeholder="Mary O'Brien" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required placeholder="mary@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="085 123 4567" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">How Can We Help?</label>
                  <textarea id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required rows={4} placeholder="Tell us a bit about what you need..." />
                </div>
                <button type="submit" className="btn-primary btn-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="section-container">
      <div className="footer-simple">
        <div className="nav-logo"><Droplets className="logo-icon" /><span>Joyce's Plumbing</span></div>
        <p>Your friendly local plumber in Oughterard, serving Connemara and Galway.</p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Joyce's Plumbing · Made with <Heart size={14} className="heart-icon" /> in Oughterard</p>
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
