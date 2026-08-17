import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid rgba(153, 255, 0, 0.2)', marginTop: '50px', backgroundColor: 'var(--dark-bg, #1a1a1a)', color: 'var(--text-light, #f4f4f4)' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '30px', marginBottom: '30px', textAlign: 'left' }}>
        
        {/* Coloana 1: Date de bază */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h4 style={{ color: 'var(--neon-green, #99ff00)', marginBottom: '15px' }}>FLATECH IT Solutions</h4>
          <p style={{ fontSize: '0.9rem', color: '#bbb', lineHeight: '1.5' }}>
            Soluții web moderne, site-uri de prezentare și meniuri digitale pentru afacerea ta.
          </p>
        </div>

        {/* Coloana 2: Link-uri Legale (placeholder pentru pagini viitoare) */}
        <div style={{ flex: '1', minWidth: '200px' }}>
          <h4 style={{ color: 'var(--neon-green, #99ff00)', marginBottom: '15px' }}>Informații Legale</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', lineHeight: '1.8' }}>
            <li><a href="#termeni" style={{ color: '#bbb', textDecoration: 'none' }}>Termeni și Condiții</a></li>
            <li><a href="#confidentialitate" style={{ color: '#bbb', textDecoration: 'none' }}>Politica de Confidențialitate (GDPR)</a></li>
            <li><a href="#cookie" style={{ color: '#bbb', textDecoration: 'none' }}>Politica de Cookies</a></li>
          </ul>
        </div>

        {/* Coloana 3: Siglele ANPC (SAL / SOL) */}
        <div style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
          <h4 style={{ color: 'var(--neon-green, #99ff00)', marginBottom: '15px' }}>Protecția Consumatorului</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center' }}>
            <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
              <img src="/anpc-sal.png" alt="SAL ANPC" style={{ height: '45px', objectFit: 'contain' }} />
            </a>
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              <img src="/anpc-sol.png" alt="SOL ANPC" style={{ height: '45px', objectFit: 'contain' }} />
            </a>
          </div>
        </div>

      </div>

      {/* Partea de jos: Copyright și semnătura ta */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', fontSize: '0.9rem' }}>
        <p>&copy; {currentYear} FLATECH IT Solutions. Toate drepturile rezervate.</p>
        <small style={{ color: 'var(--neon-green, #99ff00)', fontWeight: 'bold' }}>Created by Flavius Draghici</small>
      </div>

    </footer>
  );
}

export default Footer;