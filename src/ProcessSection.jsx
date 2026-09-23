import React from 'react';

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discuție & Consultanță",
      description: "Discutăm viziunea afacerii tale, înțelegem nevoile clienților tăi și stabilim structura ideală a site-ului."
    },
    {
      number: "02",
      title: "Design & Personalizare",
      description: "Construim o interfață modernă, elegantă și orientată spre conversie, adaptată identității brandului tău."
    },
    {
      number: "03",
      title: "Dezvoltare & Optimizare",
      description: "Scriem un cod curat, optimizăm imaginile WebP și asigurăm o viteză impecabilă de încărcare pe orice ecran."
    },
    {
      number: "04",
      title: "Lansare & Suport",
      description: "Publicăm site-ul pe domeniul tău final, configurăm certificatul SSL și îți oferim asistență tehnică."
    }
  ];

  return (
    <section className="section process-section" id="proces">
      <h2 className="reveal">Cum Lucrăm</h2>
      <p className="subtitle reveal">
        Un proces transparent în 4 pași simpli pentru un site gata de succes.
      </p>

      <div className="process-grid reveal" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '28px',
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
              padding: '30px 24px',
              textAlign: 'left',
              boxShadow: 'var(--shadow-sm)',
              transition: 'transform 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{
                marginBottom: '16px'
              }}>
                <span style={{
                  fontSize: '1.8rem',
                  fontWeight: '900',
                  color: 'var(--primary-accent)'
                }}>
                  {step.number}
                </span>
              </div>

              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: '800',
                margin: '0 0 10px',
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
