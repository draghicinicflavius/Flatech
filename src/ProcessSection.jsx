import React from 'react';

function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: "💬",
      title: "Discuție & Consultanță",
      description: "Discutăm viziunea afacerii tale, înțelegem nevoile clienților tăi și stabilim structura ideală a site-ului."
    },
    {
      number: "02",
      icon: "🎨",
      title: "Design & Personalizare",
      description: "Construim o interfață modernă, elegantă și orientată spre conversie, adaptată identității brandului tău."
    },
    {
      number: "03",
      icon: "⚡",
      title: "Dezvoltare & Optimizare",
      description: "Scriem un cod curat, optimizăm imaginile WebP și asigurăm o viteză impecabilă de încărcare pe orice ecran."
    },
    {
      number: "04",
      icon: "🚀",
      title: "Lansare & Suport",
      description: "Publicăm site-ul pe domeniul tău final, configurăm certificatul SSL și îți oferim asistență tehnică."
    }
  ];

  return (
    <section className="section process-section" id="proces">
      <h2 className="reveal">🗺️ Cum Lucrăm</h2>
      <p className="subtitle reveal">
        Un proces transparent în 4 pași simpli pentru un site gata de succes.
      </p>

      <div className="process-grid reveal" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '25px',
        width: '100%',
        maxWidth: '1160px',
        marginTop: '30px'
      }}>
        {steps.map((step, idx) => (
          <div 
            key={idx}
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '16px',
              padding: '30px 22px',
              textAlign: 'left',
              position: 'relative',
              boxShadow: 'var(--shadow-sm)',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="process-card"
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px'
              }}>
                <span style={{ fontSize: '2.2rem' }}>{step.icon}</span>
                <span style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: 'var(--primary-accent)',
                  opacity: 0.8
                }}>
                  {step.number}
                </span>
              </div>

              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '800',
                margin: '0 0 12px',
                color: 'var(--text-dark)'
              }}>
                {step.title}
              </h3>

              <p style={{
                fontSize: '0.92rem',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
                margin: 0
              }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
