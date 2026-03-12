import { useState } from 'react'
import './App.css'
import Footer from './Footer'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-logo-text">FLATECH</div>
        <ul className="nav-links">
          <li><a href="#acasa">Acasa</a></li>
          <li><a href="#oferte">Oferte</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* SECTIUNEA HERO */}
      <section id="acasa" className="section hero-section">
        <img src="/logo-firma.jpeg" alt="FLATECH Logo" className="hero-logo" />
        <h1>Construim prezența ta online</h1>
        <p>Soluții dedicate afacerii tale.</p>
        <a href="#contact" className="cta-button">Solicită Oferta</a>
      </section>

      {/* SECTIUNEA OFERTE */}
      <section id="oferte" className="section offers-section">
        <h2>Servicii Profesionale</h2>
        <div className="offers-grid">
          <div className="offer-card">
            <div className="icon">📱</div>
            <h3>Meniuri Digitale</h3>
            <p>Soluții dedicate pentru cafenele și restaurante (Sistem QR).</p>
          </div>
          <div className="offer-card">
            <div className="icon">💻</div>
            <h3>Site-uri Prezentare</h3>
            <p>Design personalizat pentru firme mici și medii locale.</p>
          </div>
          <div className="offer-card highlight">
            <div className="icon">🚀</div>
            <h3>Mentenanță & SEO</h3>
            <p>Pagină online modernă cu mentenanță inclusă la <strong>PREȚ ACCESIBIL</strong>.</p>
          </div>
        </div>
      </section>

      {/* SECTIUNEA CONTACT (SCHELET) */}
      <section id="contact" className="section contact-section">
        <h2>Contactează-ne</h2>
        <p>Drăghici Nicolae Flavius: 0751094127</p>
        {/* Aici vom pune formularul data viitoare */}
      </section>

      <Footer />
    </div>
  )
}

export default App