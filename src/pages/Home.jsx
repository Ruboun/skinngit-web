import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Apple, Play, Shield, Flame, Users, Repeat, Calendar,
  Trophy, Check, Target, Brain, TrendingUp, ChevronDown,
  Star, Zap, Lock, UserCheck, Award, BarChart2, ArrowRight,
  MessageCircle, Globe, Sparkles, Laptop, Smartphone,
  ListTodo, Eye, Minus, Quote
} from 'lucide-react';
import '../App.css';
import translations from '../translations';

/* ─── Inline SVG Logos ─────────────────────────────────────── */

const StripeLogo = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" style={{ height: '20px' }} />
);

const GoogleLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const UnicefLogo = () => (
  <svg viewBox="0 0 80 24" width="60" height="18" fill="none">
    <text x="0" y="18" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="16" fill="#00AEEF">UNICEF</text>
  </svg>
);

/* ─── Language Toggle ───────────────────────────────────────── */

function LangToggle({ lang, setLang }) {
  return (
    <div className="lang-toggle">
      <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
      <span className="lang-sep" />
      <button className={`lang-btn ${lang === 'cs' ? 'active' : ''}`} onClick={() => setLang('cs')}>CZ</button>
    </div>
  );
}

/* ─── Phone Carousel ────────────────────────────────────────── */

const SCREEN_SRCS = [
  '/images/Tasks.png',
  '/images/Habits.png',
  '/images/Social Hub - board.png',
  '/images/Goals.png',
  '/images/Main Dashboard.png',
];

function PhoneCarousel({ labels }) {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % SCREEN_SRCS.length);
    }, 2800);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (i) => {
    setActive(i);
    clearInterval(intervalRef.current);
    startAuto();
  };

  return (
    <div className="phone-carousel-wrapper">
      <div className="phone-glow" />
      <div className="phone-image-container">
        {SCREEN_SRCS.map((src, i) => (
          <img key={i} src={src} alt={labels[i]} className={`phone-slide ${i === active ? 'active' : ''}`} />
        ))}
      </div>
      <div className="carousel-label">{labels[active]}</div>
      <div className="carousel-dots">
        {SCREEN_SRCS.map((_, i) => (
          <button key={i} className={`carousel-dot ${i === active ? 'active' : ''}`} onClick={() => goTo(i)} aria-label={`Screen ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────── */

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{q}</span>
        <ChevronDown size={20} className={`faq-chevron ${open ? 'rotated' : ''}`} />
      </div>
      <div className="faq-answer-wrap">
        <div className="faq-answer">{a}</div>
      </div>
    </div>
  );
}

/* ─── Main App ──────────────────────────────────────────────── */

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const featureIcons = [
    { icon: <Brain size={22} />,    bg: 'rgba(232,146,10,.15)',  color: 'var(--c-primary)',  cardClass: '' },
    { icon: <Repeat size={22} />,   bg: 'rgba(74,222,128,.15)',  color: '#4ADE80',           cardClass: 'bento-habits' },
    { icon: <BarChart2 size={22} />,bg: 'rgba(46,46,60,.5)',     color: 'var(--c-primary)',  cardClass: 'bento-projects' },
    { icon: <Star size={22} />,     bg: 'rgba(248,113,113,.15)', color: '#F87171',           cardClass: '' },
    { icon: <Calendar size={22} />, bg: 'rgba(96,165,250,.12)',  color: '#60A5FA',           cardClass: 'bento-calendar' },
    { icon: <Zap size={22} />,      bg: 'rgba(232,146,10,.15)',  color: '#E8920A',           cardClass: 'bento-stakes' },
    { icon: <ListTodo size={22} />, bg: 'rgba(74,222,128,.12)',  color: '#4ADE80',           cardClass: 'bento-tasks' },
    { icon: <Eye size={22} />,      bg: 'rgba(232,146,10,.1)',   color: 'var(--c-primary)',  cardClass: 'bento-visions' },
  ];

  const socialFeatureIcons = [
    { icon: <Globe size={20} />,        bg: 'rgba(232,146,10,.1)',   color: 'var(--c-primary)' },
    { icon: <Trophy size={20} />,       bg: 'rgba(232,146,10,.12)',  color: '#E8920A' },
    { icon: <Award size={20} />,        bg: 'rgba(248,113,113,.1)',  color: '#F87171' },
    { icon: <MessageCircle size={20} />,bg: 'rgba(74,222,128,.15)',  color: '#4ADE80' },
  ];

  return (
    <div className="app-root">

      {/* ── Header ── */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <div className="logo"><img src="/instrait-logo.png" alt="instrait" className="logo-img" /></div>
          <nav className="nav">
            <a href="#how"      className="nav-link">{t.nav.how}</a>
            <a href="#features" className="nav-link">{t.nav.features}</a>
            <a href="#social"   className="nav-link">{t.nav.community}</a>
            <a href="#pricing"  className="nav-link">{t.nav.pricing}</a>
          </nav>
          <div className="header-ctas">
            <LangToggle lang={lang} setLang={setLang} />
            <a href="https://app.instrait.com" className="btn-store btn-ios"><Globe size={16} /> {t.nav.startWeb}</a>
            <a href="#" className="btn-store btn-android btn-ios-soon"><Play size={16} /> {t.nav.googlePlaySoon}</a>
            <a href="#" className="btn-store btn-android btn-ios-soon"><Apple size={16} /> iOS</a>
          </div>
        </div>
      </header>

      {/* ── HERO (A) ── */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="container hero-inner">
          <div className="hero-text animate-up">
            <div className="hero-badge">
              <Flame size={13} /> {t.hero.badge}
            </div>
            <h1 className="hero-h1">
              {t.hero.h1}<br />
              <span className="gradient-accent">{t.hero.h1accent}</span>
            </h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-btns">
              <a href="https://app.instrait.com" className="btn-primary-lg">
                <Globe size={20} /> {t.hero.btnWeb}
                <span className="btn-live-dot" />
              </a>
              <div className="store-btns-group">
                <a href="#" className="btn-coming-soon"><Play size={20} /> {t.hero.btnAndroidSoon}</a>
                <a href="#" className="btn-coming-soon"><Apple size={20} /> {t.hero.btnIos}</a>
              </div>
            </div>
            <p className="hero-fine">{t.hero.fine}</p>
            <div className="trust-row">
              <span className="trust-label">{t.hero.trustPayments}</span>
              <StripeLogo />
              <span className="trust-sep" />
              <span className="trust-label">{t.hero.trustSyncs}</span>
              <GoogleLogo />
              <span className="trust-cal">Calendar</span>
              <span className="trust-sep" />
              <span className="trust-label">{t.hero.trustForfeits}</span>
              <UnicefLogo />
            </div>
          </div>

          <div className="hero-visual animate-up delay-200">
            <PhoneCarousel labels={t.hero.screenLabels} />
          </div>
        </div>

        <div className="scroll-hint">
          <ChevronDown size={22} className="scroll-chevron" />
        </div>
      </section>

      {/* ── SLOGAN STRIP ── */}
      <div className="slogan-strip">
        <div className="container">
          <p className="slogan-text">
            {t.slogan.prefix} <span className="slogan-faded">{t.slogan.faded}</span> {t.slogan.suffix}
          </p>
        </div>
      </div>

      {/* ── ECOSYSTEM (B) ── */}
      <section className="section ecosystem-section">
        <div className="container">
          <div className="section-label"><Globe size={14} /> {t.ecosystem.label}</div>
          <h2 className="section-h2" style={{ whiteSpace: 'pre-line' }}>{t.ecosystem.h2}</h2>
          <p className="section-sub">{t.ecosystem.sub}</p>

          <div className="ecosystem-grid">
            {/* Web App */}
            <div className="ecosystem-card ecosystem-web">
              <div className="ecosystem-card-header">
                <div className="ecosystem-icon-wrap ecosystem-icon-web">
                  <Laptop size={28} />
                </div>
                <div>
                  <span className="ecosystem-badge ecosystem-badge-live">{t.ecosystem.web.badge}</span>
                  <h3 className="ecosystem-title">{t.ecosystem.web.title}</h3>
                </div>
              </div>
              <p className="ecosystem-desc">{t.ecosystem.web.desc}</p>
              <ul className="ecosystem-features">
                {t.ecosystem.web.features.map((f, i) => (
                  <li key={i}><Check size={14} /> {f}</li>
                ))}
              </ul>
              <a href="https://app.instrait.com" className="btn-primary-lg ecosystem-cta">
                <Globe size={18} /> {t.ecosystem.web.cta}
              </a>
            </div>

            {/* Mobile App */}
            <div className="ecosystem-card ecosystem-mobile">
              <div className="ecosystem-card-header">
                <div className="ecosystem-icon-wrap ecosystem-icon-mobile">
                  <Smartphone size={28} />
                </div>
                <div>
                  <span className="ecosystem-badge ecosystem-badge-soon">{t.ecosystem.mobile.badge}</span>
                  <h3 className="ecosystem-title">{t.ecosystem.mobile.title}</h3>
                </div>
              </div>
              <p className="ecosystem-desc">{t.ecosystem.mobile.desc}</p>
              <ul className="ecosystem-features">
                {t.ecosystem.mobile.features.map((f, i) => (
                  <li key={i}><Check size={14} /> {f}</li>
                ))}
              </ul>
              <div className="ecosystem-store-row">
                <div className="ecosystem-store-pill"><Apple size={15} /> iOS</div>
                <div className="ecosystem-store-pill"><Play size={15} /> Android</div>
                <span className="ecosystem-year">2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="section how-section">
        <div className="container">
          <div className="section-label"><Zap size={14} /> {t.how.label}</div>
          <h2 className="section-h2">{t.how.h2}</h2>

          <div className="steps-grid">
            {[
              { color: 'var(--c-primary)', bg: 'rgba(232,146,10,.12)', icon: <Target size={28} /> },
              { color: '#F87171', bg: 'rgba(248,113,113,.12)', icon: <Shield size={28} /> },
              { color: '#F5B84C', bg: 'rgba(232,146,10,.12)', icon: <Trophy size={28} /> },
            ].map((s, i) => (
              <div key={i} className="step-card">
                <span className="step-num">0{i + 1}</span>
                <div className="step-icon" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
                <h3 className="step-title">{t.how.steps[i].title}</h3>
                <p className="step-body">{t.how.steps[i].body}</p>
              </div>
            ))}
          </div>

          <div className="science-bar">
            <Brain size={20} style={{ color: 'var(--c-primary)', flexShrink: 0 }} />
            <span dangerouslySetInnerHTML={{ __html: t.how.science.replace('Loss aversion', '<strong>Loss aversion</strong>').replace('Averze ke ztrátě', '<strong>Averze ke ztrátě</strong>') }} />
          </div>
        </div>
      </section>

      {/* ── SCIENCE PILLARS (H) ── */}
      <section className="section science-pillars-section">
        <div className="container">
          <div className="section-label"><Brain size={14} /> {t.sciencePillars.label}</div>
          <h2 className="section-h2" style={{ whiteSpace: 'pre-line' }}>{t.sciencePillars.h2}</h2>
          <div className="pillars-grid">
            {t.sciencePillars.pillars.map((p, i) => (
              <div key={i} className="pillar-card">
                <div className="pillar-num">0{i + 1}</div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
                <span className="pillar-ref">{p.ref}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="section features-section">
        <div className="container">
          <div className="section-label"><Sparkles size={14} /> {t.features.label}</div>
          <h2 className="section-h2" style={{ whiteSpace: 'pre-line' }}>{t.features.h2}</h2>

          <div className="bento-grid">

            {/* Large card: AI Goals */}
            <div className="bento bento-lg bento-goals">
              <div className="bento-text">
                <div className="bento-icon-chip" style={{ background: featureIcons[0].bg, color: featureIcons[0].color }}>
                  {featureIcons[0].icon}
                </div>
                <h3 className="bento-h3">{t.features.cards[0].title}</h3>
                <p className="bento-p">{t.features.cards[0].desc}</p>
                <div className="bento-outcome"><Check size={14} /> {t.features.cards[0].outcome}</div>
              </div>
              <div className="bento-img-wrap">
                <img src="/images/Goals.png" alt="AI goal plan" className="bento-phone-img" />
              </div>
            </div>

            {/* Small: Habits */}
            <div className={`bento bento-sm bento-habits`}>
              <div className="bento-icon-chip" style={{ background: featureIcons[1].bg, color: featureIcons[1].color }}>
                {featureIcons[1].icon}
              </div>
              <h3 className="bento-h3">{t.features.cards[1].title}</h3>
              <p className="bento-p">{t.features.cards[1].desc}</p>
              <div className="bento-outcome"><Check size={14} /> {t.features.cards[1].outcome}</div>
            </div>

            {/* Small: Projects */}
            <div className={`bento bento-sm bento-projects`}>
              <div className="bento-icon-chip" style={{ background: featureIcons[2].bg, color: featureIcons[2].color }}>
                {featureIcons[2].icon}
              </div>
              <h3 className="bento-h3">{t.features.cards[2].title}</h3>
              <p className="bento-p">{t.features.cards[2].desc}</p>
              <div className="bento-outcome"><Check size={14} /> {t.features.cards[2].outcome}</div>
            </div>

            {/* Large reversed: Skin Score (D) */}
            <div className="bento bento-lg bento-score bento-reverse">
              <div className="bento-text">
                <div className="bento-icon-chip" style={{ background: featureIcons[3].bg, color: featureIcons[3].color }}>
                  {featureIcons[3].icon}
                </div>
                <h3 className="bento-h3">{t.features.cards[3].title}</h3>
                <p className="bento-p" dangerouslySetInnerHTML={{ __html: t.features.cards[3].desc.replace('Redemption Mode', '<strong>Redemption Mode</strong>') }} />
                <div className="bento-outcome"><Check size={14} /> {t.features.cards[3].outcome}</div>
              </div>
              <div className="bento-img-wrap">
                <img src="/images/Main Dashboard.png" alt="Skin Score and achievements" className="bento-phone-img" />
              </div>
            </div>

            {/* Small: Standalone Tasks (C) */}
            <div className={`bento bento-sm bento-tasks`}>
              <div className="bento-icon-chip" style={{ background: featureIcons[6].bg, color: featureIcons[6].color }}>
                {featureIcons[6].icon}
              </div>
              <h3 className="bento-h3">{t.features.cards[6].title}</h3>
              <p className="bento-p">{t.features.cards[6].desc}</p>
              <div className="bento-outcome"><Check size={14} /> {t.features.cards[6].outcome}</div>
            </div>

            {/* Small: Calendar */}
            <div className={`bento bento-sm bento-calendar`}>
              <div className="bento-icon-chip" style={{ background: featureIcons[4].bg, color: featureIcons[4].color }}>
                {featureIcons[4].icon}
              </div>
              <h3 className="bento-h3">{t.features.cards[4].title}</h3>
              <p className="bento-p">{t.features.cards[4].desc}</p>
              <div className="bento-outcome"><Check size={14} /> {t.features.cards[4].outcome}</div>
            </div>

            {/* Small: Stakes */}
            <div className={`bento bento-sm bento-stakes`}>
              <div className="bento-icon-chip" style={{ background: featureIcons[5].bg, color: featureIcons[5].color }}>
                {featureIcons[5].icon}
              </div>
              <h3 className="bento-h3">{t.features.cards[5].title}</h3>
              <p className="bento-p">{t.features.cards[5].desc}</p>
              <div className="bento-outcome"><Check size={14} /> {t.features.cards[5].outcome}</div>
            </div>

            {/* Small: Life Visions (G) */}
            <div className={`bento bento-sm bento-visions`}>
              <div className="bento-icon-chip" style={{ background: featureIcons[7].bg, color: featureIcons[7].color }}>
                {featureIcons[7].icon}
              </div>
              <h3 className="bento-h3">{t.features.cards[7].title}</h3>
              <p className="bento-p">{t.features.cards[7].desc}</p>
              <div className="bento-outcome"><Check size={14} /> {t.features.cards[7].outcome}</div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SOCIAL HUB ── */}
      <section id="social" className="section social-section">
        <div className="container">
          <div className="section-label"><Users size={14} /> {t.social.label}</div>
          <h2 className="section-h2" style={{ whiteSpace: 'pre-line' }}>{t.social.h2}</h2>
          <p className="section-sub">{t.social.sub}</p>

          <div className="social-grid">
            <div className="social-card">
              <div className="social-screen-wrap">
                <img src="/images/Social Hub - board.png" alt="Social Hub Partners" className="social-phone-img" />
              </div>
              <div className="social-card-body">
                <div className="social-icon-chip"><UserCheck size={22} /></div>
                <h3>{t.social.buddy.title}</h3>
                <p>{t.social.buddy.desc}</p>
                <ul className="social-bullets">
                  {t.social.buddy.bullets.map((b, i) => (
                    <li key={i}><Check size={13} /> {b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="social-features-col">
              {t.social.features.map((f, i) => (
                <div key={i} className="social-feat">
                  <div className="sfeat-icon" style={{ background: socialFeatureIcons[i].bg, color: socialFeatureIcons[i].color }}>
                    {socialFeatureIcons[i].icon}
                  </div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (E) ── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-label"><Star size={14} /> {t.testimonials.label}</div>
          <h2 className="section-h2" style={{ whiteSpace: 'pre-line' }}>{t.testimonials.h2}</h2>
          <div className="testimonials-grid">
            {t.testimonials.items.map((item, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-quote-mark">"</div>
                <p className="testimonial-quote">{item.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{item.name[0]}</div>
                  <div className="testimonial-author-info">
                    <span className="testimonial-name">{item.name}</span>
                    <span className="testimonial-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON (F) ── */}
      <section className="section comparison-section">
        <div className="container">
          <div className="section-label"><BarChart2 size={14} /> {t.comparison.label}</div>
          <h2 className="section-h2">{t.comparison.h2}</h2>
          <p className="section-sub">{t.comparison.sub}</p>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="comp-feature-col"></th>
                  {t.comparison.apps.map(app => (
                    <th key={app.name} className={app.highlight ? 'comp-us-col' : 'comp-other-col'}>
                      {app.highlight
                        ? <><span className="comp-us-name">{app.name}</span><span className="comp-us-tag">Us</span></>
                        : app.name
                      }
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.comparison.features.map((feature, fi) => (
                  <tr key={fi}>
                    <td className="comp-feature-label">{feature}</td>
                    {t.comparison.apps.map(app => (
                      <td key={app.name} className={`comp-cell ${app.highlight ? 'comp-us-col' : ''}`}>
                        {app.values[fi]
                          ? <Check size={18} className="comp-check-yes" />
                          : <Minus size={18} className="comp-check-no" />
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="comparison-note">{t.comparison.note}</p>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="section pricing-section">
        <div className="container">
          <div className="section-label"><TrendingUp size={14} /> {t.pricing.label}</div>
          <h2 className="section-h2" style={{ whiteSpace: 'pre-line' }}>{t.pricing.h2}</h2>

          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-tier">{t.pricing.free.tier}</div>
              <div className="price-amount">{t.pricing.free.amount}<span>{t.pricing.free.period}</span></div>
              <p className="price-desc">{t.pricing.free.desc}</p>
              <ul className="price-list">
                {t.pricing.free.features.map((f, i) => (
                  <li key={i}><Check size={16} /> {f}</li>
                ))}
              </ul>
              <a href="https://app.instrait.com" className="btn-price-outline">{t.pricing.free.btn}</a>
            </div>

            <div className="price-card price-premium">
              <div className="price-badge">{t.pricing.premium.badge}</div>
              <div className="price-tier">{t.pricing.premium.tier}</div>
              <div className="price-amount">{t.pricing.premium.amount}<span>{t.pricing.premium.period}</span></div>
              <p className="price-desc">{t.pricing.premium.desc}</p>
              <ul className="price-list">
                {t.pricing.premium.features.map((f, i) => (
                  <li key={i}><Check size={16} /> {i < 5 ? <strong>{f.split(' — ')[0]}</strong> : f}{f.includes(' — ') ? ` — ${f.split(' — ')[1]}` : ''}</li>
                ))}
              </ul>
              <a href="https://app.instrait.com" className="btn-price-primary">{t.pricing.premium.btn} <ArrowRight size={16} /></a>
              <p className="price-save">{t.pricing.premium.save}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ (I) ── */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-label">{t.faq.label}</div>
          <h2 className="section-h2">{t.faq.h2}</h2>
          <div className="faq-list">
            {t.faq.items.map((item, i) => <FAQItem key={`${lang}-${i}`} {...item} />)}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div className="cta-glow" />
          <h2 className="cta-h2">{t.cta.h2}</h2>
          <p className="cta-sub">{t.cta.sub}</p>
          <div className="cta-btns">
            <a href="https://app.instrait.com" className="btn-primary-lg"><Globe size={20} /> {t.cta.btnWeb}</a>
            <div className="store-btns-group">
              <a href="#" className="btn-coming-soon"><Play size={20} /> {t.cta.btnAndroidSoon}</a>
              <a href="#" className="btn-coming-soon"><Apple size={20} /> {t.cta.btnIos}</a>
            </div>
          </div>
          <p className="cta-fine">{t.cta.fine}</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="logo footer-logo"><img src="/instrait-logo.png" alt="instrait" className="logo-img" /></div>
            <p className="footer-tagline">{t.footer.tagline}</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <span className="footer-col-title">{t.footer.product}</span>
              <a href="#how">{t.footer.links.how}</a>
              <a href="#features">{t.footer.links.features}</a>
              <a href="#pricing">{t.footer.links.pricing}</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">{t.footer.community}</span>
              <a href="#">{t.footer.links.social}</a>
              <a href="#">{t.footer.links.leaderboards}</a>
              <a href="#">{t.footer.links.rewards}</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">{t.footer.legal}</span>
              <Link to="/privacy-policy">{t.footer.links.privacy}</Link>
              <Link to="/terms">{t.footer.links.terms}</Link>
              <Link to="/docs">Documentation</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} instrait. {t.footer.copy}</span>
          <span style={{ opacity: 0.5 }}>{t.footer.madeWith}</span>
        </div>
      </footer>

    </div>
  );
}

export default App;
