import { useState } from 'react'
import './App.css'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-container">
      {/* Secțiunea de sus (Header/Navbar) */}
      <nav className="navbar">
        <img 
          src="/logo-firma.jpeg" 
          alt="Logo Firma" 
          className="main-logo"
        />
      </nav>

      <main className="main-content">
        <section className="hero">
          <h1>Servicii Profesionale Web</h1>
          <p>Soluții dedicate pentru afacerea ta.</p>
        </section>

        {/* Grid-ul cu cartonașele transparente */}
        <div className="card-grid">
          
          <div className="glass-card">
            <h3>Soluții dedicate</h3>
            <p>Specializați în meniuri digitale pentru cafenele și site-uri de prezentare pentru firme locale.</p>
          </div>

          <div className="glass-card">
            <h3>Beneficii cheie</h3>
            <ul style={{ textAlign: 'left', display: 'inline-block' }}>
              <li>Design modern (Mobile First)</li>
              <li>Mentenanță inclusă</li>
              <li>SEO și viteză optimizată</li>
            </ul>
          </div>

          <div className="glass-card">
            <h3>Interacțiune</h3>
            <p>Apasă butonul de mai jos să vezi cum funcționează React:</p>
            <button className="pro-button" onClick={() => setCount((count) => count + 1)}>
              Clienți mulțumiți: {count}
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App