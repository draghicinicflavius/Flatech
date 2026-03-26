import { useState, useEffect } from 'react'
import './App.css'
import Footer from './Footer'

function App() {
  // Starea pentru meniul hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // NOU: Starea pentru Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // NOU: MAGIA PENTRU DARK MODE
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  // MAGIA PENTRU SCROLL (Acum funcționează și în sus, și în jos)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active'); // Apare când dai scroll în jos
        } else {
          entry.target.classList.remove('active'); // DISPARE când dai scroll în sus
        }
      });
    }, { threshold: 0.1 });

    // Căutăm toate tipurile de animații
    const hiddenElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      
      {/* 1. NAVBAR CU HAMBURGER ȘI BUTON TEMĂ */}
      <nav className="navbar">
        <div className="nav-logo-text">FLATECH</div>
        
        {/* Grupăm Butonul de Dark Mode și Hamburgerul ca să stea frumos împreună */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          
          {/* NOU: Butonul Dark Mode */}
          <button 
            className="theme-toggle" 
            onClick={() => setIsDarkMode(!isDarkMode)}
            title="Schimbă tema"
            style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', padding: 0 }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Butonul Hamburger (nemodificat) */}
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✖' : '☰'}
          </div>
          
        </div>

        {/* Linkurile din meniu */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#acasa" onClick={() => setIsMenuOpen(false)}>Acasă</a></li>
          <li><a href="#portofoliu" onClick={() => setIsMenuOpen(false)}>Portofoliu</a></li>
          {/* Am adăugat link-ul spre secțiunea nouă de Prețuri */}
          <li><a href="#preturi" onClick={() => setIsMenuOpen(false)}>Prețuri</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* 2. BUTON PLUTITOR PENTRU APEL DIRECT */}
      <a href="tel:+40751094127" className="floating-call-btn" title="Sună-mă acum!">
        📞
      </a>

      {/* 3. SECȚIUNEA HERO (Logo Rotund, Text nou, Insigne și 2 Butoane) */}
      <section id="acasa" className="section hero-section">
        {/* Logo-ul are acum clasa pentru a fi rotund perfect */}
        <img src="/logo-firma.jpeg" alt="FLATECH Logo" className="hero-logo breathing-logo reveal" />
        <h1 className="reveal">Construim prezența ta online!</h1>
        
        {/* Text nou și captivant */}
        <p className="hero-subtitle reveal">
          Transformăm ideile în site-uri rapide, moderne și gata să atragă clienți. <br/>
          Fie că ai nevoie de un site de prezentare sau de un meniu digital, noi ne ocupăm de absolut tot.
        </p>

        {/* Insigne de încredere adăugate pentru un aspect 'Viu' */}
        <div className="hero-badges reveal">
          <span>✅ Design Premium</span>
          <span>✅ Optimizare SEO</span>
          <span>✅ Suport Inclus</span>
        </div>

        {/* Butoanele Noi */}
        <div className="hero-buttons reveal">
          <a href="#portofoliu" className="glow-btn">Vezi ce am lucrat</a>
          <a href="#preturi" className="outline-btn">Pachete și Prețuri</a>
        </div>
      </section>

      {/* SECȚIUNE NOUĂ: STATISTICI (Bulele animate) */}
      <section className="section stats-section">
        <div className="stats-grid">
          
          {/* Bulina 1 */}
          <div className="stat-box reveal-left">
            <svg viewBox="0 0 100 100" className="circular-chart">
              <path className="circle-bg" d="M50,10 a 40,40 0 1,0 0,80 a 40,40 0 1,0 0,-80" />
              <path className="circle-fill fill-100" d="M50,10 a 40,40 0 1,0 0,80 a 40,40 0 1,0 0,-80" />
              <text x="50" y="55" className="percentage">100%</text>
            </svg>
            <h3>Clienți Mulțumiți</h3>
          </div>

          {/* Bulina 2 */}
          <div className="stat-box reveal">
            <svg viewBox="0 0 100 100" className="circular-chart">
              <path className="circle-bg" d="M50,10 a 40,40 0 1,0 0,80 a 40,40 0 1,0 0,-80" />
              <path className="circle-fill fill-85" d="M50,10 a 40,40 0 1,0 0,80 a 40,40 0 1,0 0,-80" />
              <text x="50" y="55" className="percentage">35+</text>
            </svg>
            <h3>Proiecte Finalizate</h3>
          </div>

          {/* Bulina 3 */}
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

      {/* 4. SECȚIUNEA PORTOFOLIU (Site-uri + Proiectul Special) */}
      <section id="portofoliu" className="section portfolio-section">
        <h2 className="reveal">Proiecte Finalizate</h2>
        <p className="subtitle reveal">Nu vindem doar idei, iată câteva din site-urile noastre live:</p>
        
        <div className="portfolio-grid-3">
          
          {/* Site 1 - Vine din STÂNGA */}
          <div className="portfolio-card reveal-left">
            <img src="/topmontajacoperis.png" alt="Site Top Acoperis" className="portfolio-img" />
            <h3>Top Acoperiș Montaj</h3>
            <p>Site de prezentare servicii</p>
            <a href="https://www.topacoperismontaj.ro" target="_blank" rel="noreferrer" className="live-link">🌐 Deschide Live</a>
          </div>
          
          {/* Site 2 - Vine de JOS (Centru) */}
          <div className="portfolio-card reveal">
            <img src="/site2.png" alt="Site 2" className="portfolio-img" />
            <h3>Proiectul deGoicea</h3>
            <p>Portofoliu fotografi/formatii</p>
            <a href="https://www.degoicea.ro" target="_blank" rel="noreferrer" className="live-link">🌐 Deschide Live</a>
          </div>

          {/* Site 3 - Vine din DREAPTA */}
          <div className="portfolio-card reveal-right">
            <img src="/site3.png" alt="Site 3" className="portfolio-img" />
            <h3>Meniu Digital Cafenele/Restaurante</h3>
            <p>Meniu / Cod QR</p>
            <a href="https://meniu-povestea-cafelei.vercel.app/" target="_blank" rel="noreferrer" className="live-link">🌐 Deschide Live</a>
          </div>

        </div>

        {/* PROIECTUL SPECIAL (Aplicația Web Full-Stack) */}
        <div className="featured-project reveal">
          <div className="featured-image-wrapper">
            {/* Aici pui screenshot-ul aplicației de pe telefon */}
            <img src="/aplicatie-versuri.jpeg" alt="Aplicație Cor" className="featured-img" />
          </div>
          
          <div className="featured-content">
            <span className="featured-badge">Aplicație Web Custom (Full-Stack)</span>
            <h3>Sistem Live Multi-User</h3>
            
            <ul className="featured-list">
              <li><strong>Sincronizare în Timp Real:</strong> Comanda dirijorului actualizează automat ecranele tuturor membrilor trupei instant.</li>
              <li><strong>Motor Inteligent:</strong> Căutare vocală (Web Speech API).</li>
              <li><strong>Design PWA & UX:</strong> Instalabilă pe Home Screen, interfață adaptivă și zoom salvat local.</li>
              <li><strong>Sistem de Roluri:</strong> Acces diferențiat Admin / Dirijor / Corist, susținut de un backend solid în Java.</li>
            </ul>
            
            <a href="#" target="_blank" rel="noreferrer" className="glow-btn small-btn">Vezi Detalii</a>
          </div>
        </div>
      </section>

      {/* SECȚIUNEA PREȚURI */}
      <section id="preturi" className="section pricing-section">
        <h2 className="reveal">Pachete Web Design</h2>
        <p className="subtitle reveal">Transparență totală. Alege pachetul potrivit pentru stadiul afacerii tale.</p>
        
        <div className="pricing-grid reveal">
          {/* Pachet 1: Start */}
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

          {/* Pachet 2: Business (Cel mai vândut, evidențiat) */}
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

          {/* Pachet 3: Premium / Custom */}
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

        {/* SECȚIUNEA GOOGLE ADS (Add-on) */}
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

      {/* 5. SECȚIUNEA CONTACT & FORMULAR (Neon Dark Mode) */}
      <section id="contact" className="section contact-section dark-mode">
  <h2 className="reveal">Începe Proiectul Tău</h2>
  <p className="reveal">Lasă-ne datele și te sunăm noi cât mai curând.</p>
  
  <div className="contact-wrapper">
    {/* AM REPARAT LINK-UL AICI (fără dublură) */}
    <form action="https://formspree.io/f/xgopezzd" method="POST" className="contact-form glass-form reveal">
      
      {/* AM ADĂUGAT name="nume" */}
      <input type="text" name="nume" placeholder="Numele tău" required />
      
      {/* AM ADĂUGAT name="telefon" */}
      <input type="tel" name="telefon" placeholder="Numărul de telefon" required />
      
      {/* AM ADĂUGAT name="subiect" */}
      <select name="subiect" required defaultValue="">
        <option value="" disabled>Ce tip de site dorești?</option>
        <option value="prezentare">Site de Prezentare (Firme/Servicii)</option>
        <option value="meniu">Meniu Digital (Horeca)</option>
        <option value="magazin">Magazin Online</option>
        <option value="altul">Am altă idee</option>
      </select>
      
      <button type="submit" className="glow-btn submit-btn">Trimite Solicitarea</button>
    </form>

          {/* Linkuri Social Media & WhatsApp */}
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