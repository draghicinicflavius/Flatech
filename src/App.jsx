import { useState, useEffect } from 'react'
import './App.css'
import Footer from './Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

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

  return (
    <div className="app-container">
      
      <nav className="navbar">
        <div className="nav-logo-text">FLATECH</div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button 
            className="theme-toggle" 
            onClick={() => setIsDarkMode(!isDarkMode)}
            title="Schimbă tema"
            style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', padding: 0 }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✖' : '☰'}
          </div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#acasa" onClick={() => setIsMenuOpen(false)}>Acasă</a></li>
          <li><a href="#portofoliu" onClick={() => setIsMenuOpen(false)}>Portofoliu</a></li>
          <li><a href="#preturi" onClick={() => setIsMenuOpen(false)}>Prețuri</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      <a href="tel:+40751094127" className="floating-call-btn" title="Sună-mă acum!">
        📞
      </a>

      <section id="acasa" className="section hero-section">
        <div className="hero-container">
          
          <div className="hero-image-content reveal-right">
            <img src="/logo-firma.jpeg" alt="FLATECH Logo" className="hero-logo floating-logo" />
          </div>

          <div className="hero-text-content reveal-left">
            <h1>Construim prezența ta online!</h1>
            <p className="hero-subtitle">
              Transformăm ideile în site-uri rapide, moderne și gata să atragă clienți. <br/>
              Fie că ai nevoie de un site de prezentare sau de un meniu digital, noi ne ocupăm de absolut tot.
            </p>

            <div className="hero-badges">
              <span>✅ Design Premium</span>
              <span>✅ Optimizare SEO</span>
              <span>✅ Suport Inclus</span>
            </div>

            <div className="hero-buttons">
              <a href="#portofoliu" className="glow-btn">Vezi ce am lucrat</a>
              <a href="#preturi" className="outline-btn">Pachete și Prețuri</a>
            </div>
          </div>

        </div>
      </section>

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
            <h3>Proiecte Finalizate</h3>
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

      <section id="portofoliu" className="section portfolio-section">
        <h2 className="reveal">Proiecte Finalizate</h2>
        <p className="subtitle reveal">Nu vindem doar idei, iată câteva din site-urile noastre live:</p>
        
        <div className="portfolio-grid-3">
          
          <div className="portfolio-card reveal-left">
            <img src="/topmontajacoperis.png" alt="Site Top Acoperis" className="portfolio-img" />
            <h3>Top Acoperiș Montaj</h3>
            <p>Site de prezentare servicii</p>
            <a href="https://www.topacoperismontaj.ro" target="_blank" rel="noreferrer" className="live-link">🌐 Deschide Live</a>
          </div>
          
          <div className="portfolio-card reveal">
            <img src="/site2.png" alt="Site 2" className="portfolio-img" />
            <h3>Proiectul deGoicea</h3>
            <p>Portofoliu fotografi/formatii</p>
            <a href="https://www.degoicea.ro" target="_blank" rel="noreferrer" className="live-link">🌐 Deschide Live</a>
          </div>

          <div className="portfolio-card reveal-right">
            <img src="/site3.png" alt="Site 3" className="portfolio-img" />
            <h3>Meniu Digital Cafenele/Restaurante</h3>
            <p>Meniu / Cod QR</p>
            <a href="https://meniu-povestea-cafelei.vercel.app/" target="_blank" rel="noreferrer" className="live-link">🌐 Deschide Live</a>
          </div>

        </div>

        {/* PROIECTUL SPECIAL - REPARAT DEFINITIV */}
        <div className="featured-project reveal">
          
          {/* 1. VARIANTA MOBIL (FLIP CARD 3D) */}
          <div className="mobile-flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <span className="featured-badge">Aplicație Web Custom</span>
                <h3>Sistem Live Multi-User</h3>
                <ul className="featured-list">
                  <li><strong>Sincronizare:</strong> Comanda dirijorului actualizează tot.</li>
                  <li><strong>Motor Inteligent:</strong> Căutare vocală (Web Speech API).</li>
                  <li><strong>PWA:</strong> Instalabilă pe mobil.</li>
                </ul>
                <div className="flip-indicator">Apasă pentru captură ⤵</div>
              </div>
              <div className="flip-card-back">
                <img src="/aplicatie-versuri.jpeg" alt="Aplicație Cor" className="flip-mobile-img" />
              </div>
            </div>
          </div>

          {/* 2. VARIANTA PC (SIDE-BY-SIDE CURAT) */}
          <div className="desktop-clean-layout">
            <div className="desktop-image-wrapper">
              <img src="/aplicatie-versuri.jpeg" alt="Aplicație Cor" className="desktop-img" />
            </div>
            <div className="desktop-content">
              <span className="featured-badge">Aplicație Web Custom (Full-Stack)</span>
              <h3>Sistem Live Multi-User</h3>
              <ul className="featured-list">
                <li><strong>Sincronizare în Timp Real:</strong> Comanda dirijorului actualizează automat ecranele tuturor membrilor.</li>
                <li><strong>Motor Inteligent:</strong> Căutare vocală (Web Speech API).</li>
                <li><strong>Design PWA & UX:</strong> Instalabilă pe Home Screen, interfață adaptivă.</li>
                <li><strong>Sistem de Roluri:</strong> Acces diferențiat Admin / Dirijor / Corist.</li>
              </ul>
              <a href="#" className="glow-btn small-btn">Vezi Detalii</a>
            </div>
          </div>

        </div>
      </section>

      <section id="preturi" className="section pricing-section">
        <h2 className="reveal">Pachete Web Design</h2>
        <p className="subtitle reveal">Transparență totală. Alege pachetul potrivit pentru stadiul afacerii tale.</p>
        
        <div className="pricing-grid reveal">
          <div className="pricing-card">
            <h3>Pachetul Start</h3>
            <div className="price"><span>€</span>199</div>
            <p className="price-desc">Perfect pentru o prezență rapidă online.</p>
            <ul>
              <li>Landing Page (1 Pagină lungă)</li>
              <li>Design Modern & Responsive</li>
              <li>Formular Contact / WhatsApp</li>
              <li>Optimizare viteză (WebP)</li>
            </ul>
            <a href="#contact" className="outline-btn small-btn">Alege Pachetul</a>
          </div>

          <div className="pricing-card popular">
            <div className="popular-badge">Cel Mai Vândut</div>
            <h3>Pachetul Business</h3>
            <div className="price"><span>€</span>450</div>
            <p className="price-desc">Ideal pentru firme, clinici și profesioniști.</p>
            <ul>
              <li>Site Multi-Pagină (Acasă, Despre, Servicii)</li>
              <li>Secțiune Portofoliu / Galerie</li>
              <li>Optimizare SEO de bază</li>
              <li>Integrare Google Analytics</li>
            </ul>
            <a href="#contact" className="glow-btn small-btn">Alege Pachetul</a>
          </div>

          <div className="pricing-card">
            <h3>Custom Software</h3>
            <div className="price"><span>€</span>800<span>+</span></div>
            <p className="price-desc">Aplicații web și funcționalități complexe.</p>
            <ul>
              <li>Magazin Online / Meniu Digital</li>
              <li>Backend / Bază de date (Java/Node)</li>
              <li>Sistem conturi / Sincronizare live</li>
              <li>Design PWA instalabil pe mobil</li>
            </ul>
            <a href="#contact" className="outline-btn small-btn">Cere Ofertă</a>
          </div>
        </div>

        <div className="ads-banner reveal">
          <div className="ads-content">
            <h3 style={{ color: "var(--neon-green)" }}>🚀 Vrei clienți din prima zi?</h3>
            <p>Nu aștepta ca lumea să te găsească din întâmplare. Îți configurez o campanie profesională de <strong>Google Ads</strong>, gata să îți aducă telefoane și mesaje imediat.</p>
          </div>
          <div className="ads-price-box">
            <span className="ads-tag">Setup Campanie</span>
            <span className="ads-cost">50 €</span>
            <span className="ads-note">*plată unică, fără abonament lunar</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section dark-mode">
        <h2 className="reveal">Începe Proiectul Tău</h2>
        <p className="reveal">Lasă-ne datele și te sunăm noi cât mai curând.</p>
        
        <div className="contact-wrapper">
          <form action="https://formspree.io/f/xgopezzd" method="POST" className="contact-form glass-form reveal">
            <input type="text" name="nume" placeholder="Numele tău" required />
            <input type="tel" name="telefon" placeholder="Numărul de telefon" required />
            <select name="subiect" required defaultValue="">
              <option value="" disabled>Ce tip de site dorești?</option>
              <option value="prezentare">Site de Prezentare (Firme/Servicii)</option>
              <option value="meniu">Meniu Digital (Horeca)</option>
              <option value="magazin">Magazin Online</option>
              <option value="altul">Am altă idee</option>
            </select>
            <button type="submit" className="glow-btn submit-btn">Trimite Solicitarea</button>
          </form>

          <div className="social-links reveal">
            <p>Sau scrie-ne direct pe:</p>
            <a href="https://wa.me/40751094127" target="_blank" rel="noreferrer" className="social-btn whatsapp">💬 WhatsApp</a>
            <a href="https://www.instagram.com/draghiciflavius01/" target="_blank" rel="noreferrer" className="social-btn instagram">📸 Instagram</a>
            <a href="https://www.facebook.com/draghicinicolae.flavius?locale=ro_RO" target="_blank" rel="noreferrer" className="social-btn facebook">📘 Facebook</a>

            <p>Verifica proiectele mele si pe:</p>
            <a href="https://www.linkedin.com/in/dr%C4%83ghici-flavius-2b0306393/" target="_blank" rel="noreferrer" className="social-btn linkedin">💼 LinkedIn</a>
            <a href="https://github.com/draghicinicflavius" target="_blank" rel="noreferrer" className="social-btn github">💻 GitHub</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App