import React, { useState } from 'react';
import LegalModal from './LegalModal';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalData, setModalData] = useState({ isOpen: false, title: '', content: '' });

  const legalTexts = {
    termeni: {
      title: "Termeni și Condiții",
      content: "<p>Prezentul document stabilește termenii și condițiile de utilizare a site-ului FLATECH IT Solutions. Serviciile noastre constau în crearea de site-uri web, landing page-uri și soluții digitale personalizate. Ne rezervăm dreptul de a modifica prețurile sau structura pachetelor în orice moment. Contractarea serviciilor se face pe baza unei discuții prealabile și a stabilirii detaliilor tehnice.</p>"
    },
    confidentialitate: {
      title: "Politica de Confidențialitate (GDPR)",
      content: "<p>Respectăm confidențialitatea datelor dumneavoastră. Prin completarea formularului de contact de pe acest site, ne furnizați date precum Numele și Numărul de telefon. Aceste date sunt colectate și prelucrate exclusiv în scopul de a vă contacta pentru a răspunde solicitării dumneavoastră și a oferi serviciile contractate. Datele nu vor fi niciodată vândute sau transmise către terți.</p>"
    },
    cookie: {
      title: "Politica de Cookies",
      content: "<p>Acest site utilizează cookie-uri tehnice care sunt strict necesare pentru funcționarea optimă a paginii web, precum și cookie-uri de sesiune/stocare locală pentru preferințe (cum ar fi acceptarea bannerului de cookie-uri). Continuarea navigării pe site reprezintă acordul dumneavoastră privind utilizarea acestora.</p>"
    }
  };

  const openModal = (key) => {
    setModalData({
      isOpen: true,
      title: legalTexts[key].title,
      content: legalTexts[key].content
    });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, title: '', content: '' });
  };

  return (
    <>
      <footer style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid rgba(153, 255, 0, 0.2)', marginTop: '50px', backgroundColor: '#1a1a1a', color: '#f4f4f4', width: '100%', boxSizing: 'border-box' }}>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '30px', marginBottom: '30px', textAlign: 'left' }}>
          
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h4 style={{ color: '#99ff00', marginBottom: '15px' }}>FLATECH IT Solutions</h4>
            <p style={{ fontSize: '0.9rem', color: '#bbb', lineHeight: '1.5' }}>
              Soluții web moderne, site-uri de prezentare și meniuri digitale pentru afacerea ta.
            </p>
          </div>

          <div style={{ flex: '1', minWidth: '200px' }}>
            <h4 style={{ color: '#99ff00', marginBottom: '15px' }}>Informații Legale</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', lineHeight: '1.8' }}>
              <li><button onClick={() => openModal('termeni')} style={{ background: 'none', border: 'none', color: '#bbb', cursor: 'pointer', padding: 0, fontSize: '0.9rem', textAlign: 'left' }}>Termeni și Condiții</button></li>
              <li><button onClick={() => openModal('confidentialitate')} style={{ background: 'none', border: 'none', color: '#bbb', cursor: 'pointer', padding: 0, fontSize: '0.9rem', textAlign: 'left' }}>Politica de Confidențialitate (GDPR)</button></li>
              <li><button onClick={() => openModal('cookie')} style={{ background: 'none', border: 'none', color: '#bbb', cursor: 'pointer', padding: 0, fontSize: '0.9rem', textAlign: 'left' }}>Politica de Cookies</button></li>
            </ul>
          </div>

          <div style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
            <h4 style={{ color: '#99ff00', marginBottom: '15px' }}>Protecția Consumatorului</h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
                <img src="/anpc-sal.png" alt="SAL ANPC" style={{ height: '40px', maxWidth: '120px', objectFit: 'contain', display: 'block' }} />
              </a>
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                <img src="/anpc-sol.png" alt="SOL ANPC" style={{ height: '40px', maxWidth: '120px', objectFit: 'contain', display: 'block' }} />
              </a>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', fontSize: '0.9rem' }}>
          <p>&copy; {currentYear} FLATECH IT Solutions. Toate drepturile rezervate.</p>
          <small style={{ color: '#99ff00', fontWeight: 'bold' }}>Created by Flavius Draghici</small>
        </div>

      </footer>

      {/* Aici apelăm componenta ta LegalModal */}
      <LegalModal 
        isOpen={modalData.isOpen} 
        onClose={closeModal} 
        title={modalData.title} 
        content={modalData.content} 
      />
    </>
  );
}

export default Footer;