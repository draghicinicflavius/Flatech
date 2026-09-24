import { useState, useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import PriceCalculator from './PriceCalculator';
import ProcessSection from './ProcessSection';
import FaqSection from './FaqSection';
import TestimonialsSection from './TestimonialsSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('acasa');

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  // Scroll Reveal Animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Scrollspy pentru meniu activ
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['acasa', 'proces', 'portofoliu', 'preturi', 'calculator', 'recenzii', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo-text">FLATECH</div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button 
            className="theme-toggle" 
            onClick={() => setIsDarkMode(!isDarkMode)}
            title={isDarkMode ? "Comutare pe Tema Luminoasă" : "Comutare pe Tema Întunecată"}
            aria-label="Schimbă tema"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <div 
            className="hamburger" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Meniu Navigație"
          >
            {isMenuOpen ? '✖' : '☰'}
          </div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a 
              href="#acasa" 
              className={activeSection === 'acasa' ? 'active-link' : ''} 
              onClick={() => setIsMenuOpen(false)}
            >
              Acasă
            </a>
          </li>
          <li>
            <a 
              href="#proces" 
              className={activeSection === 'proces' ? 'active-link' : ''} 
              onClick={() => setIsMenuOpen(false)}
            >
              Cum Lucrăm
            </a>
          </li>
          <li>
            <a 
              href="#portofoliu" 
              className={activeSection === 'portofoliu' ? 'active-link' : ''} 
              onClick={() => setIsMenuOpen(false)}
            >
              Portofoliu
            </a>
          </li>
          <li>
            <a 
              href="#preturi" 
              className={activeSection === 'preturi' ? 'active-link' : ''} 
              onClick={() => setIsMenuOpen(false)}
            >
              Prețuri
            </a>
          </li>
          <li>
            <a 
              href="#calculator" 
              className={activeSection === 'calculator' ? 'active-link' : ''} 
              onClick={() => setIsMenuOpen(false)}
            >
              Configurator
            </a>
          </li>
          <li>
            <a 
              href="#faq" 
              className={activeSection === 'faq' ? 'active-link' : ''} 
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active-link' : ''} 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* BUTON APEL RAPID FLOTANT */}
      <a href="tel:+40751094127" className="floating-call-btn" title="Sună acum la FLATECH!">
        📞
      </a>

      {/* PRIMUL ECRAN (HERO INTRO) - AERISIT, CU LOGO, TITLU, SUBTITLU SI NUMĂR TELEFON */}
      <section id="acasa" className="section hero-section">
        <div className="hero-container">
          
          <div className="hero-image-content reveal-right">
            <img 
              src="/logo-firma.webp" 
              alt="FLATECH Logo - Flavius Draghici Web Design" 
              className="hero-logo floating-logo" 
              width="600"
              height="600"
              fetchPriority="high"
            />
          </div>

          <div className="hero-text-content reveal-left">
            <span className="author-tag">BY FLAVIUS DRAGHICI</span>
            
            <h1 className="hero-title">
              Construim prezența ta <span className="hero-title-highlight">online!</span>
            </h1>
            
            <p className="hero-subtitle">
              Transformăm ideile în site-uri rapide, moderne și gata să atragă clienți. 
              Fie că ai nevoie de un site de prezentare sau de un meniu digital QR, noi ne ocupăm de tot procesul tehnic.
            </p>

            <a href="tel:+40751094127" className="hero-phone-box">
              <span className="phone-icon">📞</span> 0751 094 127
            </a>
          </div>

        </div>
      </section>

      {/* DUPĂ SCROLL PE MOBIL - INSIGNE DE ÎNCREDERE ȘI BUTOANE DE ACȚIUNE */}
      <section className="section hero-details-section">
        <div className="hero-badges reveal">
          <span><i className="bullet-dot"></i> Design Premium</span>
          <span><i className="bullet-dot"></i> Viteză Optimă</span>
          <span><i className="bullet-dot"></i> 100% Mobile Ready</span>
          <span><i className="bullet-dot"></i> Suport Tehnic</span>
        </div>

        <div className="hero-buttons reveal">
          <a href="#calculator" className="glow-btn">Calculează Prețul</a>
          <a href="#portofoliu" className="outline-btn">Vezi Portofoliul</a>
        </div>
      </section>

      {/* SECȚIUNEA CUM LUCRĂM */}
      <ProcessSection />

      {/* STATISTICI / IMPACT */}
      <section className="section stats-section">
        <div className="stats-grid">
          
          <div className="stat-box reveal-left">
            <svg viewBox="0 0 100 100" className="circular-chart">
              <path className="circle-bg" d="M50,10 a 40,40 0 1,0 0,80 a 40,40 0 1,0 0,-80" />
              <path className="circle-fill fill-100" d="M50,10 a 40,40 0 1,0 0,80 a 40,40 0 1,0 0,-80" />
              <text x="50" y="55" className="percentage">100%</text>
            </svg>
            <h3>Clienți Mulțumiți</h3>
          </div>

          <div className="stat-box reveal">
            <svg viewBox="0 0 100 100" className="circular-chart">
              <path className="circle-bg" d="M50,10 a 40,40 0 1,0 0,80 a 40,40 0 1,0 0,-80" />
              <path className="circle-fill fill-85" d="M50,10 a 40,40 0 1,0 0,80 a 40,40 0 1,0 0,-80" />
              <text x="50" y="55" className="percentage">35+</text>
            </svg>
            <h3>Proiecte Livrate</h3>
          </div>

          <div className="stat-box reveal-right">
            <svg viewBox="0 0 100 100" className="circular-chart">
              <path className="circle-bg" d="M50,10 a 40,40 0 1,0 0,80 a 40,40 0 1,0 0,-80" />
              <path className="circle-fill fill-100" d="M50,10 a 40,40 0 1,0 0,80 a 40,40 0 1,0 0,-80" />
              <text x="50" y="55" className="percentage">24/7</text>
            </svg>
            <h3>Suport Tehnic</h3>
          </div>

        </div>
      </section>

      {/* PORTOFOLIU */}
      <section id="portofoliu" className="section portfolio-section">
        <h2 className="reveal">Proiecte Live</h2>
        <p className="subtitle reveal">Iată câteva dintre site-urile reale dezvoltate și optimizate pentru clienții noștri:</p>
        
        <div className="portfolio-grid-3">
          
          <div className="portfolio-card reveal-left">
            <img 
              src="/topmontajacoperis.webp" 
              alt="Site Top Acoperis Montaj Servicii Construcții" 
              className="portfolio-img" 
              width="1200"
              height="583"
              loading="lazy"
            />
            <h3>Top Acoperiș Montaj</h3>
            <p>Site de prezentare servicii acoperișuri</p>
            <a href="https://www.topacoperismontaj.ro" target="_blank" rel="noreferrer" className="live-link">
              Deschide Site Live ↗
            </a>
          </div>
          
          <div className="portfolio-card reveal">
            <img 
              src="/site2.webp" 
              alt="Portofoliu Fotografi si Formatii deGoicea" 
              className="portfolio-img" 
              width="1200"
              height="584"
              loading="lazy"
            />
            <h3>Proiectul deGoicea</h3>
            <p>Portofoliu formație & servicii foto-video</p>
            <a href="https://www.degoicea.ro" target="_blank" rel="noreferrer" className="live-link">
              Deschide Site Live ↗
            </a>
          </div>

          <div className="portfolio-card reveal-right">
            <img 
              src="/site3.webp" 
              alt="Meniu Digital Cafenele Povestea Cafelei QR" 
              className="portfolio-img" 
              width="1200"
              height="575"
              loading="lazy"
            />
            <h3>Meniu Digital Cafenele</h3>
            <p>Meniu interactiv accesibil prin Cod QR</p>
            <a href="https://meniu-povestea-cafelei.vercel.app/" target="_blank" rel="noreferrer" className="live-link">
              Deschide Meniu Live ↗
            </a>
          </div>

        </div>
      </section>

      {/* PACHETE SI PREȚURI */}
      <section id="preturi" className="section pricing-section">
        <h2 className="reveal">Pachete Web Design</h2>
        <p className="subtitle reveal">Transparență totală. Alege pachetul potrivit pentru afacerea ta.</p>
        
        <div className="pricing-grid reveal">
          <div className="pricing-card">
            <div>
              <h3>Pachetul Start</h3>
              <div className="price"><span>€</span>199</div>
              <p className="price-desc">Perfect pentru o prezență rapidă și elegantă online.</p>
              <ul>
                <li>Landing Page (1 Pagină structurată)</li>
                <li>Design Modern & Fully Responsive</li>
                <li>Formular Contact + WhatsApp Direct</li>
                <li>Optimizare viteză & imagini WebP</li>
              </ul>
            </div>
            <a href="#contact" className="outline-btn small-btn">Alege Pachetul</a>
          </div>

          <div className="pricing-card popular">
            <div className="popular-badge">Cel Mai Solicitat</div>
            <div>
              <h3>Pachetul Business</h3>
              <div className="price"><span>€</span>450</div>
              <p className="price-desc">Ideal pentru firme, clinici, servicii și profesioniști.</p>
              <ul>
                <li>Site Multi-Pagină (Acasă, Despre, Servicii)</li>
                <li>Secțiune Portofoliu / Galerie Foto</li>
                <li>Integrare Formular Contact & Hărți Google</li>
                <li>Certificat SSL & Optimizare Mobil</li>
              </ul>
            </div>
            <a href="#contact" className="glow-btn small-btn">Alege Pachetul</a>
          </div>

          <div className="pricing-card">
            <div>
              <h3>Pachet Premium</h3>
              <div className="price"><span>€</span>650<span>+</span></div>
              <p className="price-desc">Pentru afaceri cu nevoi specifice de organizare și prezentare.</p>
              <ul>
                <li>Catalog produse / Servicii detaliate</li>
                <li>Sistem integrat de solicitări programări</li>
                <li>Panou administrare conținut</li>
                <li>Optimizare tehnică avansată</li>
              </ul>
            </div>
            <a href="#contact" className="outline-btn small-btn">Cere Ofertă</a>
          </div>
        </div>
      </section>

      {/* CONFIGURATOR INTERACTIV DE PREȚ */}
      <PriceCalculator />

      {/* RECENZII / TESTIMONIALE */}
      <TestimonialsSection />

      {/* FAQ / ÎNTREBĂRI FRECVENTE */}
      <FaqSection />

      {/* CONTACT */}
      <section id="contact" className="section contact-section dark-mode-section">
        <h2 className="reveal" style={{ color: 'var(--primary-accent)' }}>Începe Proiectul Tău</h2>
        <p className="subtitle reveal" style={{ color: 'var(--text-muted)' }}>
          Ai o idee de proiect sau vrei o estimare rapidă? Scrie-ne direct pe WhatsApp sau dă-ne un telefon.
        </p>
        
        <div className="contact-wrapper">
          <div className="whatsapp-box glass-form reveal" style={{ textAlign: 'center', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', margin: '0 0 10px', color: 'var(--text-dark)' }}>
              Discută Direct pe WhatsApp
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: '0 0 20px' }}>
              Apasă pe butonul de mai jos și deschide o conversație directă. Îți răspundem rapid cu detalii și opțiuni pentru proiectul tău.
            </p>

            <a 
              href="https://wa.me/40751094127?text=Salut%20Flavius!%20Am%20v%C4%83zut%20site-ul%20FLATECH%20%C8%99i%20a%C8%99%20dori%20mai%20multe%20detalii%20despre%20un%20proiect." 
              target="_blank" 
              rel="noreferrer" 
              className="whatsapp-primary-btn"
            >
              Scrie-ne pe WhatsApp
            </a>

            <div style={{ marginTop: '18px', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              Sau sună-ne direct la: <a href="tel:+40751094127" style={{ color: 'var(--primary-accent)', fontWeight: 'bold', textDecoration: 'none' }}>0751 094 127</a>
            </div>
          </div>

          <div className="social-links reveal">
            <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>Rețele Sociale:</p>
            <a href="https://www.instagram.com/draghiciflavius01/" target="_blank" rel="noreferrer" className="social-btn instagram">
              Instagram
            </a>
            <a href="https://www.facebook.com/draghicinicolae.flavius?locale=ro_RO" target="_blank" rel="noreferrer" className="social-btn facebook">
              Facebook
            </a>

            <p style={{ margin: '15px 0 10px 0', fontWeight: 'bold' }}>Portofoliu & Profil:</p>
            <a href="https://www.linkedin.com/in/dr%C4%83ghici-flavius-2b0306393/" target="_blank" rel="noreferrer" className="social-btn linkedin">
              LinkedIn
            </a>
            <a href="https://github.com/draghicinicflavius" target="_blank" rel="noreferrer" className="social-btn github">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <CookieBanner />
      <Footer />
    </div>
  );
}

export default App;