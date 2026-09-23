import React, { useState } from 'react';

function PriceCalculator() {
  const [basePlan, setBasePlan] = useState('business');
  const [addons, setAddons] = useState({
    domainHosting: true,
    whatsappForm: true,
    speedOpt: true,
    support12: false,
    googleMaps: false,
  });

  const basePrices = {
    start: { name: 'Landing Page (1 Pagină)', price: 199 },
    business: { name: 'Site Business Multi-Pagină', price: 450 },
    catalog: { name: 'Catalog Produse / Programări', price: 650 },
    meniu: { name: 'Meniu Digital QR (HoReCa)', price: 149 },
  };

  const addonPrices = {
    domainHosting: { label: 'Domeniu .ro/.com + Găzduire (1 An)', price: 40 },
    whatsappForm: { label: 'Formular Contact & WhatsApp Direct', price: 25 },
    speedOpt: { label: 'Optimizare Viteză & Imagini WebP', price: 30 },
    support12: { label: 'Suport Tehnic Prioritar (12 Luni)', price: 50 },
    googleMaps: { label: 'Integrare Hărți Google & Modul Recenzii', price: 20 },
  };

  const toggleAddon = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateTotal = () => {
    let total = basePrices[basePlan].price;
    Object.keys(addons).forEach(key => {
      if (addons[key]) {
        total += addonPrices[key].price;
      }
    });
    return total;
  };

  const handleSelectPlan = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section calculator-section" id="calculator">
      <h2 className="reveal">Configurator Interactiv de Preț</h2>
      <p className="subtitle reveal">
        Selectează opțiunile dorite și obține o estimare transparentă în câteva secunde.
      </p>

      <div className="calculator-container reveal" style={{
        maxWidth: '950px',
        width: '100%',
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: '20px',
        padding: '35px 25px',
        boxShadow: 'var(--shadow-lg)',
        boxSizing: 'border-box'
      }}>
        
        {/* Pasul 1: Selectare Pachet Bază */}
        <div style={{ textAlign: 'left', marginBottom: '30px' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '16px', color: 'var(--text-dark)' }}>
            1. Alege tipul de proiect:
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {Object.keys(basePrices).map((key) => {
              const plan = basePrices[key];
              const isSelected = basePlan === key;
              return (
                <div 
                  key={key}
                  onClick={() => setBasePlan(key)}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    border: isSelected ? '2px solid var(--primary-accent)' : '1px solid var(--card-border)',
                    background: isSelected ? 'rgba(101, 196, 0, 0.08)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                    {plan.name}
                  </span>
                  <span style={{ 
                    fontWeight: '900', 
                    fontSize: '1.3rem', 
                    color: isSelected ? 'var(--primary-accent)' : 'var(--text-dark)',
                    marginTop: '8px' 
                  }}>
                    €{plan.price}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pasul 2: Selectare Opțiuni Extra */}
        <div style={{ textAlign: 'left', marginBottom: '30px' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '16px', color: 'var(--text-dark)' }}>
            2. Opțiuni și funcționalități suplimentare:
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {Object.keys(addonPrices).map((key) => {
              const addon = addonPrices[key];
              const isChecked = addons[key];
              return (
                <label 
                  key={key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 18px',
                    borderRadius: '10px',
                    border: '1px solid var(--card-border)',
                    background: isChecked ? 'rgba(101, 196, 0, 0.05)' : 'transparent',
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'background 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <input 
                      type="checkbox" 
                      checked={isChecked} 
                      onChange={() => toggleAddon(key)}
                      style={{ 
                        width: '18px', 
                        height: '18px', 
                        accentColor: 'var(--primary-accent)',
                        cursor: 'pointer' 
                      }}
                    />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                      {addon.label}
                    </span>
                  </div>
                  <span style={{ fontWeight: '700', color: 'var(--primary-accent)', fontSize: '0.95rem' }}>
                    +€{addon.price}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Total & CTA */}
        <div style={{
          borderTop: '2px dashed var(--card-border)',
          paddingTop: '25px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div style={{ textAlign: 'left' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'block' }}>
              Estimare totală configurată:
            </span>
            <span style={{ fontSize: '2.4rem', fontWeight: '900', color: 'var(--primary-accent)' }}>
              €{calculateTotal()}
            </span>
            <small style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              *Prețul este orientativ și se adaptează cerințelor finale
            </small>
          </div>

          <a 
            href="#contact" 
            onClick={handleSelectPlan}
            className="glow-btn"
          >
            Solicită Ofertă pentru Această Configurație
          </a>
        </div>

      </div>
    </section>
  );
}

export default PriceCalculator;
