import React, { useState, useEffect } from 'react';

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificăm dacă utilizatorul a acceptat deja cookie-urile anterior
    const consent = localStorage.getItem('flatech_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('flatech_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#1a1a1a',
      color: '#f4f4f4',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 -5px 20px rgba(0,0,0,0.3)',
      zIndex: 9999,
      borderTop: '2px solid #99ff00',
      flexWrap: 'wrap',
      gap: '15px',
      boxSizing: 'border-box'
    }}>
      <div style={{ fontSize: '0.9rem', maxWidth: '900px', lineHeight: '1.4' }}>
        Acest site folosește cookie-uri pentru a îmbunătăți experiența de navigare și a oferi funcționalități de analiză. Continuarea navigării implică acceptarea acestora. {' '}
        <a href="#cookie" style={{ color: '#99ff00', textDecoration: 'underline' }}>Află mai multe</a>.
      </div>
      <button 
        onClick={acceptCookies}
        style={{
          backgroundColor: '#99ff00',
          color: '#1a1a1a',
          border: 'none',
          padding: '10px 25px',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: '0.3s'
        }}
      >
        Accept
      </button>
    </div>
  );
}

export default CookieBanner;