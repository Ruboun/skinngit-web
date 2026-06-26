import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Send, MapPin, Phone, CheckCircle, AlertCircle, MessageSquare, User, AtSign, ArrowLeft, Clock } from 'lucide-react';
import '../App.css';
import translations from '../translations';

export default function Contact() {
  const [lang] = useState('en'); // Simplify language for Contact, or could toggle if needed.
  const t = translations[lang];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Jméno je povinné / Name is required';
    if (!formData.email.trim()) newErrors.email = 'E-mail je povinný / Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Neplatný e-mail / Invalid email';
    if (!formData.subject.trim()) newErrors.subject = 'Předmět je povinný / Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Zpráva je povinná / Message is required';
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Zpráva musí mít alespoň 10 znaků / Min 10 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus('sending');

    const subject = encodeURIComponent(`[instrait] ${formData.subject}`);
    const body = encodeURIComponent(
      `Jméno/Name: ${formData.name}\nE-mail: ${formData.email}\n\nZpráva:\n${formData.message}`
    );
    const mailtoUrl = `mailto:skinngit@gmail.com?subject=${subject}&body=${body}`;

    try {
      window.location.href = mailtoUrl;
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 800);
    } catch {
      setStatus('error');
    }
  };

  const subjectOptions = [
    'Obecný dotaz / General Inquiry',
    'Technická podpora / Tech Support',
    'Ochrana osobních údajů / GDPR',
    'Partnerství a spolupráce / Partnerships',
    'Nahlásit chybu / Report Bug',
    'Jiné / Other',
  ];

  const inputStyle = (error) => ({
    width: '100%',
    padding: '12px 16px 12px 40px',
    borderRadius: '8px',
    border: `1px solid ${error ? 'var(--color-accent-red)' : 'rgba(173,139,115,0.2)'}`,
    background: 'var(--color-surface)',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: 'var(--color-text-main)',
    outline: 'none',
    transition: 'all 0.2s'
  });

  return (
    <div className="app-root" style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* ── Header ── */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="logo">instrait<span className="logo-dot" /></Link>
          <div className="header-ctas">
            <Link to="/" style={{display:'flex', alignItems:'center', gap: '6px', color: 'var(--color-text-main)', fontWeight: 600}}>
              <ArrowLeft size={16} /> Back
            </Link>
          </div>
        </div>
      </header>

      {/* ── Content ── */}
      <main style={{ maxWidth: '1000px', margin: '140px auto 80px', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ 
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: '64px', height: '64px', borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary)', color: 'white', marginBottom: '24px',
            boxShadow: 'var(--shadow-md)'
          }}>
            <MessageSquare size={32} />
          </div>
          <h1 className="section-h2" style={{ marginBottom: '16px' }}>
            Kontaktujte nás / Contact Us
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Máte otázky, připomínky nebo potřebujete pomoc? Napište nám — odpovíme do 5 pracovních dnů.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
          
          {/* Contact Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '24px', background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid rgba(173,139,115,0.15)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', background: 'rgba(173,139,115,0.1)', borderRadius: '12px', color: 'var(--color-primary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px', fontSize: '1.1rem' }}>E-mail</h4>
                <a href="mailto:skinngit@gmail.com" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>skinngit@gmail.com</a>
              </div>
            </div>

            <div style={{ padding: '24px', background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid rgba(173,139,115,0.15)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', background: 'rgba(173,139,115,0.1)', borderRadius: '12px', color: 'var(--color-primary)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px', fontSize: '1.1rem' }}>Adresa / Address</h4>
                <p style={{ margin: 0 }}>Grégrova 443/12<br/>779 00 Olomouc<br/>Czech Republic</p>
              </div>
            </div>

            <div style={{ padding: '24px', background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid rgba(173,139,115,0.15)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', background: 'rgba(173,139,115,0.1)', borderRadius: '12px', color: 'var(--color-primary)' }}>
                <Clock size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px', fontSize: '1.1rem' }}>Odpověď / Response</h4>
                <p style={{ margin: 0 }}>Do 5 pracovních dnů / Within 5 business days</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ padding: '32px', background: 'var(--color-surface)', borderRadius: '16px', border: '1px solid rgba(173,139,115,0.15)', boxShadow: 'var(--shadow-md)' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle size={48} style={{ color: 'var(--color-accent-green)', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Zpráva připravena!</h3>
                <p style={{ marginBottom: '24px' }}>
                  Váš e-mailový klient byl otevřen. Pokud ne, napište nám přímo na nakopírovaný e-mail. / Your mail client has opened. If not, write directly to the email copied.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-primary-lg" style={{width: 'auto'}}>
                  Odeslat další / Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '24px' }}>Napište nám / Drop us a line</h3>
                
                <div style={{ position: 'relative', marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Jméno / Name</label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--color-text-muted)' }} />
                    <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={inputStyle(errors.name)} placeholder="Vaše jméno / Your name" />
                  </div>
                  {errors.name && <span style={{ color: 'var(--color-accent-red)', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                </div>

                <div style={{ position: 'relative', marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>E-mail / Email address</label>
                  <div style={{ position: 'relative' }}>
                    <AtSign size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--color-text-muted)' }} />
                    <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={inputStyle(errors.email)} placeholder="vas@email.cz" />
                  </div>
                  {errors.email && <span style={{ color: 'var(--color-accent-red)', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Předmět / Subject</label>
                  <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} style={{...inputStyle(errors.subject), paddingLeft: '16px'}}>
                    <option value="">Vyberte téma... / Select topic...</option>
                    {subjectOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                  {errors.subject && <span style={{ color: 'var(--color-accent-red)', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.subject}</span>}
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 600 }}>Zpráva / Message</label>
                  <textarea rows="5" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{...inputStyle(errors.message), paddingLeft: '16px', resize: 'vertical'}} placeholder="Jak vám můžeme pomoci? / How can we help?"></textarea>
                  {errors.message && <span style={{ color: 'var(--color-accent-red)', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary-lg" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
                  <Send size={20} /> Otevřít e-mail pro odeslání / Open email to send
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.8rem', marginTop: '16px', color: 'var(--color-text-muted)' }}>
                  Vyplněním formuláře a kliknutím předpřipravíme šablonu vašeho e-mailu.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
          <span>© {new Date().getFullYear()} instrait. {t.footer.copy}</span>
          <span style={{ opacity: 0.5 }}>{t.footer.madeWith}</span>
        </div>
      </footer>
    </div>
  );
}
