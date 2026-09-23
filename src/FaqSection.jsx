import React, { useState } from 'react';

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Cât durează crearea unui site de prezentare sau meniu digital?",
      answer: "În general, un Landing Page sau un Meniu Digital este gata în 2-4 zile lucrătoare. Pentru un site multi-pagină sau catalog de produse, durata standard este de 4-7 zile lucrătoare din momentul în care avem materialele necesare."
    },
    {
      question: "Ce materiale trebuie să pregătesc înainte de a începe?",
      answer: "Avem nevoie de informațiile de bază despre firma ta (servicii, date de contact), logo-ul tău (dacă îl ai) și eventuale imagini cu proiectele sau produsele tale. Dacă nu ai imagini profesionale, noi te putem ajuta cu selecția de resurse potrivite."
    },
    {
      question: "Cum funcționează Meniul Digital QR pentru restaurante/cafenele?",
      answer: "Oferim un meniu digital interactiv accesibil prin scanarea unui cod QR. Clientul nu trebuie să instaleze nicio aplicație - meniul se deschide instant în browserul telefonului mobil, este rapid și ușor de navigat."
    },
    {
      question: "Cine deține drepturile asupra site-ului după lansare?",
      answer: "Tu deții 100% din drepturile asupra site-ului, codului sursă și fișierelor. Nu există comisioane ascunse, plăți lunare obligatorii sau abonamente forțate."
    },
    {
      question: "Site-ul va fi adaptat pentru telefoane mobile și tablete?",
      answer: "Absolut! Toate proiectele create de FLATECH sunt 100% Responsive, optimizate pentru vizualizare perfectă pe ecrane de telefon mobil, tabletă, laptop și monitoare 4K."
    },
    {
      question: "Cum funcționează modalitatea de plată?",
      answer: "Pentru siguranța ambelor părți, lucrăm pe bază de avans (de obicei 30-50%) la stabilirea cerințelor, iar restul sumei se achită numai după ce site-ul este gata, testat și aprobat de tine."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq">
      <h2 className="reveal">❓ Întrebări Frecvente</h2>
      <p className="subtitle reveal">
        Tot ce trebuie să știi înainte de a începe un proiect cu FLATECH.
      </p>

      <div className="faq-container reveal" style={{
        maxWidth: '850px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        marginTop: '20px'
      }}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              style={{
                background: 'var(--card-bg)',
                border: isOpen ? '1px solid var(--primary-accent)' : '1px solid var(--card-border)',
                borderRadius: '14px',
                padding: '18px 24px',
                textAlign: 'left',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => toggleFaq(index)}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '15px'
              }}>
                <h3 style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  margin: 0,
                  color: isOpen ? 'var(--primary-accent)' : 'var(--text-dark)',
                  transition: 'color 0.2s'
                }}>
                  {faq.question}
                </h3>
                <span style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: 'var(--primary-accent)',
                  transition: 'transform 0.3s',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'
                }}>
                  ▾
                </span>
              </div>

              {isOpen && (
                <div style={{
                  marginTop: '14px',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--card-border)',
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FaqSection;
