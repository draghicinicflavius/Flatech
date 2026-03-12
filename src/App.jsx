import { useState } from 'react'
import './App.css'
import Footer from './Footer'

function App() {
  // Starea pentru meniul hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* 2. BUTON PLUTITOR PENTRU APEL DIRECT */}
      <a href="tel:+40751094127" className="floating-call-btn" title="Sună-mă acum!">
        📞
      </a>

      {/* 3. SECȚIUNEA HERO (Logo Animat) */}
      <section id="acasa" className="section hero-section">
        {/* Logo-ul are acum animația de 'breathing' și NU are umbră */}
        <img src="/logo-firma.jpeg" alt="FLATECH Logo" className="hero-logo breathing-logo" />
        <h1>Construim prezența ta online</h1>
        <p>Aducem afacerea ta în era digitală cu soluții de top.</p>
        <a href="#portofoliu" className="glow-btn">Vezi ce am lucrat</a>
      </section>

      {/* 4. SECȚIUNEA PORTOFOLIU (Cele 3 Site-uri) */}
      <section id="portofoliu" className="section portfolio-section">
        <h2>Proiecte Finalizate</h2>
        <p className="subtitle">Nu vindem doar idei, iată site-urile noastre live:</p>
        
        {/* Aici ai cele 3 cartonașe */}
        <div className="portfolio-grid-3">
          
          {/* Site 1 */}
          <div className="portfolio-card">
            {/* Trebuie să pui o poză numită site1.png în folderul public */}
            <img src="/site1.png" alt="Site Top Acoperis" className="portfolio-img" />
            <h3>Top Acoperiș Montaj</h3>
            <p>Site de prezentare servicii</p>
            <a href="https://www.topacoperismontaj.ro" target="_blank" rel="noreferrer" className="live-link">🌐 Deschide Live</a>
          </div>
          
          {/* Site 2 */}
          <div className="portfolio-card">
             {/* Trebuie să pui o poză numită site2.png în folderul public */}
            <img src="/site2.png" alt="Site 2" className="portfolio-img" />
            <h3>Nume Site 2</h3>
            <p>Meniu / Prezentare</p>
            <a href="#" target="_blank" rel="noreferrer" className="live-link">🌐 Deschide Live</a>
          </div>

          {/* Site 3 */}
          <div className="portfolio-card">
             {/* Trebuie să pui o poză numită site3.png în folderul public */}
            <img src="/site3.png" alt="Site 3" className="portfolio-img" />
            <h3>Nume Site 3</h3>
            <p>Meniu / Prezentare</p>
            <a href="#" target="_blank" rel="noreferrer" className="live-link">🌐 Deschide Live</a>
          </div>

        </div>
      </section>
      <section id="preturi" className="section pricing-section">
        <h2>Oferte Transparente</h2>
        <div className="pricing-banner">
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
        <h2>Începe Proiectul Tău</h2>
        <p>Lasă-ne datele și te sunăm noi cât mai curând.</p>
        
        <div className="contact-wrapper">
          {/* Formularul readus */}
          <form className="contact-form glass-form">
            <input type="text" placeholder="Numele tău" required />
            <input type="tel" placeholder="Numărul de telefon" required />
            <select required>
              <option value="" disabled selected>Ce tip de site dorești?</option>
              <option value="prezentare">Site de Prezentare (Firme/Servicii)</option>
              <option value="meniu">Meniu Digital (Horeca)</option>
              <option value="magazin">Magazin Online</option>
              <option value="altul">Am altă idee</option>
            </select>
            <button type="submit" className="glow-btn submit-btn">Trimite Solicitarea</button>
          </form>

          {/* Linkuri Social Media & WhatsApp */}
          <div className="social-links">
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