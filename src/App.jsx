import { useState } from 'react'
import './App.css'
import Footer from './Footer'

function App() {
  return (
    <div className="landing-page">
      <nav className="simple-nav">
        {/* Logo mic în colț pentru navigare */}
        <img src="/logo-firma.jpeg" alt="FLATECH Logo" className="nav-logo" />
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <h1>Servicii profesionale de SITE-uri WEB</h1>
          <p>Soluții dedicate afacerii tale.</p>
          <button className="cta-button">Vezi Oferta</button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App