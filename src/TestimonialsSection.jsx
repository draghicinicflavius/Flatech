import React from 'react';

function TestimonialsSection() {
  const reviews = [
    {
      name: "Top Acoperiș Montaj",
      category: "Servicii Construcții",
      text: "Flavius ne-a creat un site extrem de rapid și bine structurat. Apelurile de la clienți au crescut considerabil de la lansare!",
      rating: 5
    },
    {
      name: "Cafeneaua Povestea Cafelei",
      category: "HoReCa / Meniu Digital",
      text: "Meniul digital QR creat de Flavius este intuitiv și foarte apreciat de clienții noștri. Are un design cald, este intuitiv pentru orice client.",
      rating: 5
    },
    {
      name: "deGoicea Phototography",
      category: "Portofoliu Fotograf / Formație",
      text: "Atenția la detalii și viteza de execuție m-au impresionat, fiind atat de multe poze pe site. Portofoliul meu arată spectaculos pe orice telefon mobil.",
      rating: 5
    }
  ];

  return (
    <section className="section testimonials-section" id="recenzii">
      <h2 className="reveal">Ce Spun Clienții</h2>
      <p className="subtitle reveal">
        Încrederea se construiește prin rezultate tangibile și servicii de calitate.
      </p>

      <div className="testimonials-grid reveal" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '28px',
        width: '100%',
        maxWidth: '1160px',
        marginTop: '30px'
      }}>
        {reviews.map((rev, idx) => (
          <div 
            key={idx}
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '16px',
              padding: '28px 24px',
              textAlign: 'left',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease'
            }}
          >
            <div>
              <div style={{ marginBottom: '14px' }}>
                <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: '800', color: 'var(--text-dark)' }}>
                  {rev.name}
                </h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  {rev.category}
                </span>
              </div>

              <div style={{ color: '#ffc107', fontSize: '1rem', marginBottom: '14px' }}>
                {'★'.repeat(rev.rating)}
              </div>

              <p style={{
                fontSize: '0.94rem',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
                fontStyle: 'italic',
                margin: 0
              }}>
                "{rev.text}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
