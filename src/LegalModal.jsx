import React from 'react';

function LegalModal({ isOpen, onClose, title, content }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10000,
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        backgroundColor: '#1a1a1a',
        color: '#f4f4f4',
        padding: '30px',
        borderRadius: '15px',
        maxWidth: '700px',
        width: '100%',
        maxHeight: '80vh',
        overflowY: 'auto',
        border: '2px solid #99ff00',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: 'none',
            color: '#99ff00',
            fontSize: '1.5rem',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          ✕
        </button>

        <h2 style={{ color: '#99ff00', marginTop: 0, marginBottom: '20px' }}>{title}</h2>
        <div style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#ccc', textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: content }} />
        
        <button 
          onClick={onClose}
          style={{
            marginTop: '25px',
            backgroundColor: '#99ff00',
            color: '#1a1a1a',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'block',
            marginLeft: 'auto'
          }}
        >
          Închide
        </button>
      </div>
    </div>
  );
}

export default LegalModal;