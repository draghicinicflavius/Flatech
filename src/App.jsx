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

      {/* 4. SECȚIUNEA PORTOFOLIU (Site-uri Live) */}
      <section id="portofoliu" className="section portfolio-section">
        <h2>Proiecte Funcționale</h2>
        <p className="subtitle">Nu vindem doar idei, iată site-urile noastre live:</p>
        
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <div className="mockup-placeholder">Imagine Site 1</div>
            <h3>Meniu Digital Restaurant</h3>
            <a href="#" className="live-link">🌐 Deschide Live</a>
          </div>
          
          <div className="portfolio-card">
            <div className="mockup-placeholder">Imagine Site 2</div>
            <h3>Site Prezentare Service Auto</h3>
            <a href="#" className="live-link">🌐 Deschide Live</a>
          </div>
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