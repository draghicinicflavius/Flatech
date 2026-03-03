import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Secțiunea de sus (Header/Navbar) */}
      <nav style={{ padding: '20px', textAlign: 'center' }}>
        <img 
          src="/logo-firma.jpeg" 
          alt="Logo Firma" 
          style={{ height: '80px', width: 'auto' }} 
        />
      </nav>

      <main style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h1>Numele Firmei Tale</h1>
        <p>Soluții profesionale pentru afacerea ta.</p>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Clienți mulțumiți: {count}
          </button>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
