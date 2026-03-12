import { useState, useEffect } from 'react'
import './App.css'
import Footer from './Footer'

function App() {
  // Starea pentru meniul hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // MAGIA PENTRU SCROLL ANIMATIONS (Apare elementele treptat)
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
      
      {/* 1. NAVBAR CU HAMBURGER */}
      <nav className="navbar">
        <div className="nav-logo-text">FLATECH</div>
        
        {/* Butonul Hamburger */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✖' : '☰'}
        </div>

        {/* Linkurile din meniu */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#acasa" onClick={() => setIsMenuOpen(false)}>Acasă</a></li>
          <li><a href="#portofoliu" onClick={() => setIsMenuOpen(false)}>Portofoliu Live</a></li>
          {/* Am adăugat link-ul spre secțiunea nouă de Prețuri */}
          <li><a href="#preturi" onClick={() => setIsMenuOpen(false)}>Prețuri</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* 2. BUTON PLUTITOR PENTRU APEL DIRECT */}
      <a href="tel:+40751094127" className="floating-call-btn" title="Sună-mă acum!">
        📞
      </a>

      {/* 3. SECȚIUNEA HERO (Logo Animat, Text nou și Insigne) */}
      <section id="acasa" className="section hero-section">
        {/* Logo-ul are acum animația de 'breathing' și clasa 'reveal' */}
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

        <a href="#portofoliu" className="glow-btn reveal">Vezi ce am lucrat</a>
      </section>

      {/* 4. SECȚIUNEA PORTOFOLIU (Modificările tale păstrate + animații) */}
      <section id="portofoliu" className="section portfolio-section">
        <h2 className="reveal">Proiecte Finalizate</h2>
        <p className="subtitle reveal">Nu vindem doar idei, iată site-urile noastre live:</p>
        
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
      </section>

      {/* SECȚIUNEA PREȚURI */}
      <section id="preturi" className="section pricing-section">
        <h2 className="reveal">Oferte Transparente</h2>
        <div className="pricing-banner reveal">
          <h3>Pachete de lansare pentru afacerea ta</h3>
          <div className="price-tag">
            Prețuri începând de la <br/>
            <span className="highlight-price">199 €</span>
          </div>
          <p>Fiecare afacere este unică. Obține un site profesional, optimizat și gata să atragă clienți, fără costuri ascunse.</p>
          <a href="#contact" className="glow-btn">Cere o ofertă personalizată</a>
        </div>
      </section>

      {/* 5. SECȚIUNEA CONTACT & FORMULAR (Neon Dark Mode) */}
      <section id="contact" className="section contact-section dark-mode">
        <h2 className="reveal">Începe Proiectul Tău</h2>
        <p className="reveal">Lasă-ne datele și te sunăm noi cât mai curând.</p>
        
        <div className="contact-wrapper">
          <form className="contact-form glass-form reveal">
            <input type="text" placeholder="Numele tău" required />
            <input type="tel" placeholder="Numărul de telefon" required />
            {/* Corectare sintaxă React pentru select: defaultValue în loc de selected */}
            <select required defaultValue="">
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
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn instagram">📸 Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn facebook">📘 Facebook</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App