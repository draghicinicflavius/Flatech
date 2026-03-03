import { useState } from 'react'
import './App.css'
import Footer from './Footer'

function App() {
  return (
    <div className="app-container">
      {/* 1. Navbar */}
      <nav className="navbar">
        <div className="nav-logo-small">FLATECH</div>
        <ul className="nav-links">
          <li><a href="#acasa">Acasa</a></li>
          <li><a href="#oferte">Oferte</a></li>
          <li><a href="#portofoliu">Portofoliu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* 2. Hero Section (Pagina Principala) */}
      <section id="acasa" className="section hero-light">
        <img src="/logo-firma.jpeg" alt="Logo FLATECH" className="hero-logo" />
        <h1>Construim prezența ta online</h1>
        <p>Site-uri moderne pentru afaceri locale.</p>
      </section>

      {/* 3. Oferte */}
      <section id="oferte" className="section light-bg">
        <h2>Oferte Servicii</h2>
        <div className="offers-grid">
          <div className="offer-item">Meniu Digital</div>
          <div className="offer-item">Site Prezentare</div>
          <div className="offer-item">Mentenanță</div>
        </div>
      </section>

      {/* 4. Formular Contact */}
      <section id="contact" className="section white-bg">
        <h2>Solicită un site</h2>
        <form className="contact-form">
          <input type="text" placeholder="Numele tău" required />
          <input type="tel" placeholder="Număr de telefon" required />
          <textarea placeholder="Ce fel de site dorești?"></textarea>
          <button type="submit" className="submit-btn">Trimite solicitarea</button>
        </form>
      </section>

      <Footer />
    </div>
  )
}

export default App