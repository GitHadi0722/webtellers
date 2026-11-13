import React, { useEffect, useRef, useState } from 'react';

const phone = '03318362256';
const email = 'webtellers@gmail.com';

const services = [
  {
    number: '01',
    icon: '⌘',
    title: 'Website design & development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85',
    alt: 'Laptop displaying a website under development',
    description:
      'A fast, polished website that makes it easy for customers to understand what you do and get in touch.',
    detail: 'Business websites · Landing pages',
  },
  {
    number: '02',
    icon: '▦',
    title: 'E-commerce websites',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=85',
    alt: 'Customer paying for an online purchase',
    description:
      'Give your products a home online with a smooth shopping experience built to help your business sell.',
    detail: 'Online stores · Product catalogues',
  },
  {
    number: '03',
    icon: '✳',
    title: 'Branding & graphic design',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=85',
    alt: 'Colorful visual identity and graphic design materials',
    description:
      'Create a consistent, memorable identity customers recognise across your website and social channels.',
    detail: 'Logo design · Visual identity',
  },
  {
    number: '04',
    icon: '↗',
    title: 'SEO & digital marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85',
    alt: 'Analytics dashboard on a laptop screen',
    description:
      'Build your visibility online and connect with more people looking for the products or services you offer.',
    detail: 'Search visibility · Social media',
  },
];

const work = [
  {
    category: 'FASHION & E-COMMERCE',
    location: 'CANADA',
    title: 'Shreeji Boutique',
    image: '/Portfolio/shreeji-boutique.jpeg',
    alt: 'Traditional Indian fashion from Shreeji Boutique',
    href: 'https://shreejiboutique.ca/',
  },
  {
    category: 'EDUCATION & NATURE',
    location: 'WINTER PARK, FL',
    title: 'Nature Camp at Mead Gardens',
    image: '/Portfolio/nature-camp.png',
    alt: 'Young nature camp student sharing an art project',
    href: 'https://naturecampatmeadgardens.com/',
  },
  {
    category: 'EVENTS & ENTERTAINMENT',
    location: 'EVENT EXPERIENCES',
    title: 'Abeehive Events',
    image: '/Portfolio/abeehive-events.png',
    alt: 'Abeehive Events DJ performing at an event',
    href: 'https://abeehiveevents.com/',
  },
  {
    category: 'TAX & ACCOUNTANCY',
    location: 'DUBLIN, IRELAND',
    title: 'V. Mullen & Co',
    image: '/Portfolio/vmullen-tax-advisors.png',
    alt: 'Financial planning and tax advisory workspace for V. Mullen & Co',
    href: 'https://vmullenandco.ie/',
  },
  {
    category: 'BOOK PUBLISHING',
    location: 'UNITED STATES',
    title: 'Publishing Hub USA',
    image: '/Portfolio/publishing-hub-books.png',
    alt: 'An author reading a book published by Publishing Hub USA',
    href: 'https://publishinghubusa.com/services/book-publishing-lp2/',
  },
  {
    category: 'RESTORATION & HOME SERVICES',
    location: 'PROPERTY SERVICES',
    title: 'Mr Carlos Restoration',
    image: '/Portfolio/carlos-restoration-feature.png',
    alt: 'A restoration professional working on a property',
    href: 'https://chocolate-porcupine-246603.hostingersite.com/',
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="WebTellers home" onClick={closeMenu}>
        <img src="/Logo.jpg" alt="WebTellers — Affordable business solution for everyone" />
      </a>
      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        type="button"
      >
        <span />
        <span />
      </button>
      <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <a className="button header-cta" href="#contact">
        Let&apos;s talk <ArrowIcon diagonal />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-art hero-art-one" />
      <div className="hero-art hero-art-two" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="hero-label">
          <span className="status-dot" />
          YOUR DIGITAL GROWTH PARTNER · PAKISTAN
        </div>
        <h1>
          We build websites
          <br />
          that turn ideas
          <br />
          <span className="gradient-text">into growth.</span>
        </h1>
        <p>
          From your first website to your next big idea, we help Pakistani
          businesses show up online and move forward with confidence.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Book a consultation <ArrowIcon />
          </a>
          <a className="button button-ghost" href="#portfolio">
            Explore portfolio
          </a>
        </div>
        <div className="hero-location"><span /> BUILT FOR BUSINESSES ACROSS PAKISTAN</div>
      </div>
      <div className="hero-visual" role="img" aria-label="Animated digital growth dashboard">
        <div className="visual-orbit" aria-hidden="true" />
        <div className="growth-halo" aria-hidden="true" />
        <div className="growth-dashboard">
          <div className="dashboard-toolbar">
            <div className="window-dots"><i /><i /><i /></div>
            <span>webtellers.pk</span>
            <span className="toolbar-menu">•••</span>
          </div>
          <div className="dashboard-site">
            <div className="dashboard-nav">
              <b>WEBTELLERS<span>.</span></b>
              <span>YOUR DIGITAL PARTNER</span>
              <i><span className="live-dot" /> LIVE</i>
            </div>
            <div className="dashboard-main">
              <div className="dashboard-copy">
                <span>READY TO GROW?</span>
                <strong>Make your<br />next move<br /><em>count.</em></strong>
                <p>Digital, made simple.</p>
              </div>
              <div className="dashboard-chart">
                <div className="chart-head"><span>ONLINE REACH</span><b>+128%</b></div>
                <div className="chart-graph" aria-hidden="true">
                  <div className="chart-bars">
                    <i /><i /><i /><i /><i /><i /><i />
                  </div>
                  <svg viewBox="0 0 220 120" fill="none" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="growth-fill" x1="110" y1="0" x2="110" y2="120" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3aa7f4" />
                        <stop offset="1" stopColor="#3aa7f4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path className="chart-area" d="M4 104 37 88 69 91 103 58 135 66 169 31 216 12v108H4z" />
                    <path className="chart-line" d="m4 104 33-16 32 3 34-33 32 8 34-35 47-19" />
                    <circle className="chart-point" cx="216" cy="12" r="4" />
                  </svg>
                </div>
                <div className="chart-axis"><span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span></div>
              </div>
            </div>
            <div className="dashboard-footer"><span>WEB DESIGN</span><span>E-COMMERCE</span><span>BRANDING</span></div>
          </div>
        </div>
        <div className="visual-tag tag-top"><span>✳</span> YOUR IDEA,<br />OUR NEXT PROJECT</div>
        <div className="visual-tag tag-bottom"><span>01 — 04</span><b>DESIGNED TO<br />MOVE YOU FORWARD</b></div>
      </div>
      <div className="hero-bottom">
        <span>WEB DESIGN · E-COMMERCE · BRANDING</span>
        <span>MADE FOR PAKISTAN <b>✳</b></span>
      </div>
    </section>
  );
}

function ServiceHighlights() {
  return (
    <div className="service-highlights" aria-label="Who we work with">
      <span>HELPING PAKISTAN’S BUSINESSES GET ONLINE</span>
      <div><i>RETAIL</i><i>FOOD &amp; HOSPITALITY</i><i>PROFESSIONAL SERVICES</i><i>STARTUPS</i><i>AND MORE</i></div>
    </div>
  );
}

function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="services-section section-wrap" id="services">
      <div className="section-heading">
        <div>
          <div className="eyebrow"><span>01</span> WHAT WE DO</div>
          <h2>Everything your business<br />needs to <span>show up online.</span></h2>
        </div>
        <p>
          Practical digital services to help your business look its best and
          reach the right people.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-image">
              <img src={service.image} alt={service.alt} loading="lazy" />
              <div className="service-top"><span>{service.number}</span><span className="service-icon">{service.icon}</span></div>
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-bottom">
                <span>{service.detail}</span>
                <button
                  aria-label={`Ask WebTellers about ${service.title}`}
                  className="service-enquiry-trigger"
                  onClick={() => setActiveService(service)}
                  type="button"
                >
                  <ArrowIcon diagonal />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="service-note"><span>✳</span> ONE CREATIVE PARTNER. FROM FIRST IDEA TO LAUNCH.</div>
      {activeService && (
        <ServiceEnquiryDialog
          key={activeService.number}
          onClose={() => setActiveService(null)}
          service={activeService}
        />
      )}
    </section>
  );
}

function ServiceEnquiryDialog({ onClose, service }) {
  const dialogRef = useRef(null);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
      dialog.querySelector('input[name="name"]')?.focus();
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Enquiry about ${service.title} from ${formData.get('name')}`;
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      `Service: ${service.title}`,
      '',
      'Project details:',
      formData.get('message'),
    ].join('\n');

    setFeedback('Your email app should open with your enquiry ready to send. If it does not, email webtellers@gmail.com.');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <dialog
      aria-labelledby="service-dialog-title"
      className="service-dialog"
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      onCancel={(event) => {
        event.preventDefault();
        dialogRef.current?.close();
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          dialogRef.current?.close();
        }
      }}
      onClose={onClose}
      ref={dialogRef}
    >
      <div className="service-dialog-heading">
        <div className="eyebrow"><span>✳</span> SERVICE ENQUIRY</div>
        <button
          aria-label="Close enquiry form"
          className="service-dialog-close"
          onClick={() => dialogRef.current?.close()}
          type="button"
        >
          &times;
        </button>
      </div>
      <h2 id="service-dialog-title">Let&apos;s talk about<br /><span>{service.title}</span></h2>
      <p className="service-dialog-intro">Share a few details and we&apos;ll get back to you about the right next step.</p>
      <form className="service-dialog-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input autoComplete="name" name="name" placeholder="e.g. Ayesha Khan" required />
        </label>
        <label>
          Email address
          <input autoComplete="email" name="email" placeholder="you@business.com" required type="email" />
        </label>
        <label>
          Service
          <input aria-label="Selected service" readOnly value={service.title} />
        </label>
        <label>
          Phone number <span>(optional)</span>
          <input autoComplete="tel" name="phone" placeholder="+92 3XX XXXXXXX" type="tel" />
        </label>
        <label className="service-dialog-message">
          Tell us a little about your project
          <textarea name="message" placeholder="What are you building, and how can we help?" required rows="3" />
        </label>
        <button className="button button-primary service-dialog-submit" type="submit">
          Send your enquiry <ArrowIcon />
        </button>
        <p className="service-dialog-feedback" aria-live="polite" role="status">{feedback}</p>
      </form>
    </dialog>
  );
}

function Work() {
  return (
    <section className="work-section" id="portfolio">
      <div className="section-wrap">
        <div className="section-heading work-heading">
          <div>
            <div className="eyebrow"><span>02</span> SELECTED PROJECTS</div>
            <h2>Good work, built for<br /><span>real businesses.</span></h2>
          </div>
          <a className="text-link" href="#contact">Let&apos;s build yours next <ArrowIcon /></a>
        </div>
        <div className="work-grid">
          {work.map((project) => (
            <a className="work-card" href={project.href} key={project.title} target="_blank" rel="noreferrer">
              <div className="work-image">
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="work-link-icon"><ArrowIcon diagonal /></span>
                <span className="work-location">{project.location}</span>
              </div>
              <div className="work-info">
                <span>{project.category}</span>
                <h3>{project.title}<ArrowIcon diagonal /></h3>
              </div>
            </a>
          ))}
        </div>
        <p className="work-disclaimer">A SELECTION OF LIVE PROJECTS · BUILT TO HELP BRANDS GROW ONLINE.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section-wrap" id="about">
      <div className="about-visual">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
          alt="Creative team collaborating on a project"
          loading="lazy"
        />
        <div className="about-stamp"><span>LOCAL<br />BUSINESS</span><b>✳</b><span>BIG<br />POTENTIAL</span></div>
      </div>
      <div className="about-copy">
        <div className="eyebrow"><span>03</span> WHY WEBTELLERS</div>
        <h2>Good digital work<br />should be for<br /><span>everyone.</span></h2>
        <p>
          We&apos;re a Pakistan-focused digital agency helping businesses of every
          size build a stronger online presence. From local shops and new
          ventures to growing teams, we make the digital side feel simple.
        </p>
        <p>
          Clear communication, thoughtful work and a website you can feel proud
          to share. That&apos;s what you can expect from WebTellers.
        </p>
        <a className="text-link" href="#contact">Let&apos;s make something work for you <ArrowIcon /></a>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ['01', 'Tell us about your business.', 'We start with a conversation about your goals, your customers and what you need.'],
    ['02', 'We shape the right solution.', 'You get a clear direction and a plan tailored to your business—not a template.'],
    ['03', 'Launch and grow.', 'We bring your project to life and help you take the next step with confidence.'],
  ];

  return (
    <section className="process-section">
      <div className="section-wrap process-layout">
        <div className="process-intro">
          <div className="eyebrow"><span>04</span> HOW WE WORK</div>
          <h2>Clear steps.<br /><span>No guesswork.</span></h2>
          <p>Getting your business online should feel straightforward. Here&apos;s how we make it happen.</p>
          <a className="button button-primary" href="#contact">Start a conversation <ArrowIcon /></a>
        </div>
        <div className="process-steps">
          {steps.map(([number, title, copy]) => (
            <article className="process-step" key={number}>
              <span className="step-number">{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
              <span className="step-mark">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="eyebrow"><span>05</span> LET&apos;S GET STARTED</div>
      <div className="contact-main">
        <h2>Let&apos;s build something<br /><span>good for your business.</span></h2>
        <div className="contact-intro">
          <p>Tell us what you have in mind. We&apos;ll talk it through and help you figure out a good next step.</p>
          <a className="button button-primary" href={`mailto:${email}?subject=${encodeURIComponent('Let’s talk about my business')}`}>
            Get in touch <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="contact-details">
        <a href={`mailto:${email}`}><span>EMAIL US</span><b>{email}</b><ArrowIcon diagonal /></a>
        <a href={`tel:+92${phone.slice(1)}`}><span>CALL US</span><b>+92 {phone.slice(1)}</b><ArrowIcon diagonal /></a>
        <a href="https://www.instagram.com/webtellers/" target="_blank" rel="noreferrer"><span>FOLLOW ALONG</span><b>Instagram</b><ArrowIcon diagonal /></a>
      </div>
    </section>
  );
}

function ContactForm() {
  const [feedback, setFeedback] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Website enquiry from ${formData.get('name')}`;
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      `Service: ${formData.get('service')}`,
      '',
      'Project details:',
      formData.get('message'),
    ].join('\n');

    setFeedback('Your email app should open with your enquiry ready to send. If it does not, email webtellers@gmail.com.');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="contact-form-section">
      <div className="section-wrap contact-form-layout">
        <div className="form-intro">
          <div className="eyebrow"><span>06</span> TELL US WHAT YOU HAVE IN MIND</div>
          <h2>Let&apos;s make your<br /><span>next move count.</span></h2>
          <p>Share a few details and we&apos;ll start a conversation about the right digital solution for your business.</p>
          <div className="form-promise"><span>✳</span> NO PRESSURE. JUST A GOOD CONVERSATION.</div>
        </div>
        <form className="project-form" onSubmit={handleSubmit}>
          <div className="form-fields">
            <label>
              Your name
              <input autoComplete="name" name="name" placeholder="e.g. Ayesha Khan" required />
            </label>
            <label>
              Email address
              <input autoComplete="email" name="email" placeholder="you@business.com" required type="email" />
            </label>
            <label>
              Phone number <span>(optional)</span>
              <input autoComplete="tel" name="phone" placeholder="+92 3XX XXXXXXX" type="tel" />
            </label>
            <label>
              What do you need?
              <select defaultValue="" name="service" required>
                <option disabled value="">Choose a service</option>
                <option>Website design &amp; development</option>
                <option>E-commerce website</option>
                <option>Branding &amp; graphic design</option>
                <option>SEO &amp; digital marketing</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="form-message">
              Tell us a little about your project
              <textarea name="message" placeholder="What are you building, and how can we help?" required rows="4" />
            </label>
          </div>
          <div className="form-submit-row">
            <p>Your details are only used to respond to this enquiry.</p>
            <button className="button button-primary" type="submit">Send your enquiry <ArrowIcon /></button>
          </div>
          <p className="form-feedback" aria-live="polite" role="status">{feedback}</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a href="#home" className="footer-brand" aria-label="WebTellers home">
          <img src="/Logo.jpg" alt="WebTellers" />
        </a>
        <p>Affordable digital solutions<br />for businesses across Pakistan.</p>
        <div className="footer-links"><a href="#services">Services</a><a href="#portfolio">Portfolio</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} WEBTELLERS</span><span>MADE FOR PAKISTAN, WITH CARE. <b>✳</b></span></div>
    </footer>
  );
}

function WhatsAppLink() {
  return (
    <a
      className="whatsapp-link"
      href={`https://wa.me/92${phone.slice(1)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with WebTellers on WhatsApp"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.48 0 .13 5.35.13 11.93c0 2.1.55 4.15 1.6 5.96L.03 24l6.26-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.48-8.42ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.89-.79-1.5-1.76-1.67-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.1 4.5.72.31 1.29.5 1.73.64.73.23 1.39.2 1.91.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceHighlights />
        <Services />
        <Work />
        <About />
        <Process />
        <Contact />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppLink />
    </>
  );
}
