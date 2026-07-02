import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Trash2, ShieldAlert, ShieldCheck, AlertTriangle,
  FileText, Globe, CreditCard, CheckCircle2, XCircle, Info,
  ChevronRight, BookOpen, User
} from 'lucide-react';
import '../App.css';
import './Docs.css';

/* ─── Translations ───────────────────────────────────────────── */
const t = {
  en: {
    nav: { back: 'Back to Home', docs: 'Documentation', lang: 'EN' },
    sidebar: {
      title: 'Documentation',
      categories: [
        {
          label: 'Account',
          items: [{ id: 'delete-account', label: 'Delete Account', icon: Trash2 }],
        },
      ],
    },
    doc: {
      badge: 'Account Management',
      title: 'How to Delete Your Account',
      subtitle:
        'This guide explains the deletion process, what data is permanently removed, and what data remains outside our systems.',
      lastUpdated: 'Last updated: April 2, 2026',
      warningTitle: 'This action is permanent and cannot be undone.',
      warningBody:
        'Once you confirm deletion, your entire account will be scheduled for removal. There is no grace period or recovery option.',

      howTitle: 'How to Delete Your Account',
      steps: [
        { step: '01', title: 'Open your Profile', desc: 'Tap the Profile tab in the bottom navigation bar.' },
        { step: '02', title: 'Scroll to the bottom', desc: 'Scroll down past Settings and Sign Out until you see the red "Delete My Account" button.' },
        { step: '03', title: 'Confirm deletion', desc: 'Type DELETE in the confirmation field and tap "Delete My Account" to proceed.' },
      ],

      screenshotsTitle: 'In-App Screenshots',
      screenshotCaptions: [
        'Profile screen — tap "Delete My Account" at the bottom',
        'Delete Account confirmation — type DELETE to confirm',
      ],

      deletedTitle: 'What Gets Deleted',
      deletedSubtitle: 'The following data is permanently deleted from our Supabase database via cascading foreign-key relationships when your auth.users record is removed:',
      deletedRows: [
        { table: 'profiles', notes: 'Your profile, username, bio, and avatar', method: 'ON DELETE CASCADE' },
        { table: 'wallets', notes: 'Wallet balance', method: 'ON DELETE CASCADE' },
        { table: 'goals', notes: 'All goals → milestones → tasks (chain cascade)', method: 'ON DELETE CASCADE' },
        { table: 'transactions', notes: 'Full transaction history', method: 'ON DELETE CASCADE' },
        { table: 'streak_logs', notes: 'All streak data', method: 'ON DELETE CASCADE' },
        { table: 'payment_methods', notes: 'Saved payment cards (Stripe token references)', method: 'ON DELETE CASCADE' },
        { table: 'stakes', notes: 'All goal & task stakes', method: 'ON DELETE CASCADE' },
        { table: 'followers', notes: 'Follower / following relationships', method: 'ON DELETE CASCADE' },
        { table: 'partners', notes: 'Accountability partner relationships', method: 'ON DELETE CASCADE' },
        { table: 'partner_matchmaking', notes: 'Matchmaking posts', method: 'ON DELETE CASCADE' },
        { table: 'social_commitments', notes: 'Public commitments', method: 'ON DELETE CASCADE' },
        { table: 'habits', notes: 'All habits → completions → charges (chain cascade)', method: 'ON DELETE CASCADE' },
        { table: 'habit_stacks', notes: 'Habit stacks', method: 'ON DELETE CASCADE' },
        { table: 'standalone_tasks', notes: 'Standalone tasks', method: 'ON DELETE CASCADE' },
        { table: 'xp_transactions, xp_stats, selfcoins_transactions', notes: 'XP & SelfCoins history', method: 'ON DELETE CASCADE' },
        { table: 'habit_partnerships', notes: 'Habit partner relationships', method: 'ON DELETE CASCADE' },
        { table: 'user_reward_redemptions', notes: 'Reward redemptions', method: 'ON DELETE CASCADE' },
        { table: 'projects', notes: 'All user projects', method: 'ON DELETE CASCADE' },
      ],

      keptTitle: 'What Is NOT Deleted (External Systems)',
      keptSubtitle: 'The following data lives outside our Supabase database and is not automatically removed:',
      keptRows: [
        {
          system: 'Stripe Customer Object',
          icon: CreditCard,
          detail:
            'Your Stripe Customer record (profiles.stripe_customer_id) remains in our Stripe dashboard after deletion. We manually clean this up upon request for GDPR compliance.',
          status: 'retained',
          statusLabel: 'Retained externally',
        },
      ],

      gdprTitle: 'GDPR & Data Requests',
      gdprBody:
        'If you require a complete export of your data or want your Stripe Customer Object removed prior to account deletion, please contact our support team before initiating the deletion process.',
      gdprCta: 'Contact Support',

      infoBox: {
        title: 'Active Stakes Warning',
        body: 'If you have active financial stakes at the time of deletion, any staked funds may be forfeited and cannot be recovered. Please settle or cancel active stakes before deleting your account.',
      },
    },
  },
  cs: {
    nav: { back: 'Zpět na hlavní stránku', docs: 'Dokumentace', lang: 'CZ' },
    sidebar: {
      title: 'Dokumentace',
      categories: [
        {
          label: 'Účet',
          items: [{ id: 'delete-account', label: 'Smazání účtu', icon: Trash2 }],
        },
      ],
    },
    doc: {
      badge: 'Správa účtu',
      title: 'Jak smazat svůj účet',
      subtitle:
        'Tento průvodce vysvětluje proces smazání, jaká data jsou trvale odstraněna a jaká data zůstávají mimo naše systémy.',
      lastUpdated: 'Naposledy aktualizováno: 2. dubna 2026',
      warningTitle: 'Tato akce je nevratná a nelze ji vrátit zpět.',
      warningBody:
        'Jakmile smazání potvrdíte, bude váš celý účet označen k odstranění. Neposkytujeme lhůtu ani možnost obnovy.',

      howTitle: 'Jak smazat účet',
      steps: [
        { step: '01', title: 'Otevřete Profil', desc: 'Klepněte na záložku Profil ve spodní navigační liště.' },
        { step: '02', title: 'Přejděte na konec stránky', desc: 'Přejděte dolů přes Nastavení a Odhlásit se, dokud neuvidíte červené tlačítko „Smazat účet".' },
        { step: '03', title: 'Potvrďte smazání', desc: 'Napište DELETE do potvrzovacího pole a klepněte na „Smazat účet".' },
      ],

      screenshotsTitle: 'Snímky obrazovky z aplikace',
      screenshotCaptions: [
        'Obrazovka Profil — klepněte na „Smazat účet" v dolní části',
        'Potvrzení smazání — napište DELETE pro potvrzení',
      ],

      deletedTitle: 'Co bude smazáno',
      deletedSubtitle: 'Následující data jsou trvale odstraněna z naší Supabase databáze prostřednictvím kaskádových cizích klíčů při odebrání záznamu auth.users:',
      deletedRows: [
        { table: 'profiles', notes: 'Váš profil, uživatelské jméno, bio a avatar', method: 'ON DELETE CASCADE' },
        { table: 'wallets', notes: 'Zůstatek peněženky', method: 'ON DELETE CASCADE' },
        { table: 'goals', notes: 'Všechny cíle → milníky → úkoly (kaskáda)', method: 'ON DELETE CASCADE' },
        { table: 'transactions', notes: 'Kompletní historie transakcí', method: 'ON DELETE CASCADE' },
        { table: 'streak_logs', notes: 'Veškerá data o streak', method: 'ON DELETE CASCADE' },
        { table: 'payment_methods', notes: 'Uložené platební karty (reference Stripe tokenů)', method: 'ON DELETE CASCADE' },
        { table: 'stakes', notes: 'Všechny sázky na cíle a úkoly', method: 'ON DELETE CASCADE' },
        { table: 'followers', notes: 'Vztahy sledující / sledovaní', method: 'ON DELETE CASCADE' },
        { table: 'partners', notes: 'Vztahy s accountability partnery', method: 'ON DELETE CASCADE' },
        { table: 'partner_matchmaking', notes: 'Příspěvky v párování partnerů', method: 'ON DELETE CASCADE' },
        { table: 'social_commitments', notes: 'Veřejné závazky', method: 'ON DELETE CASCADE' },
        { table: 'habits', notes: 'Všechny návyky → plnění → poplatky (kaskáda)', method: 'ON DELETE CASCADE' },
        { table: 'habit_stacks', notes: 'Zásobníky návyků', method: 'ON DELETE CASCADE' },
        { table: 'standalone_tasks', notes: 'Samostatné úkoly', method: 'ON DELETE CASCADE' },
        { table: 'xp_transactions, xp_stats, selfcoins_transactions', notes: 'Historie XP a SelfCoins', method: 'ON DELETE CASCADE' },
        { table: 'habit_partnerships', notes: 'Partnerství v návycích', method: 'ON DELETE CASCADE' },
        { table: 'user_reward_redemptions', notes: 'Uplatnění odměn', method: 'ON DELETE CASCADE' },
        { table: 'projects', notes: 'Všechny projekty uživatele', method: 'ON DELETE CASCADE' },
      ],

      keptTitle: 'Co NENÍ smazáno (externí systémy)',
      keptSubtitle: 'Následující data existují mimo naši Supabase databázi a nejsou automaticky odstraněna:',
      keptRows: [
        {
          system: 'Stripe Customer Object',
          icon: CreditCard,
          detail:
            'Váš zákazník Stripe (profiles.stripe_customer_id) zůstane v našem Stripe dashboardu i po smazání. Na žádost jej ručně odstraňujeme pro soulad s GDPR.',
          status: 'retained',
          statusLabel: 'Zachováno externě',
        },
      ],

      gdprTitle: 'GDPR a žádosti o data',
      gdprBody:
        'Pokud požadujete kompletní export svých dat nebo chcete, aby byl váš Stripe Customer Object odstraněn před smazáním účtu, kontaktujte prosím náš tým podpory před zahájením procesu smazání.',
      gdprCta: 'Kontaktovat podporu',

      infoBox: {
        title: 'Upozornění na aktivní sázky',
        body: 'Pokud máte v době smazání aktivní finanční sázky, mohou být vsazené prostředky propadnuty a nelze je obnovit. Před smazáním účtu prosím vyřešte nebo zrušte aktivní sázky.',
      },
    },
  },
};

/* ─── Component ─────────────────────────────────────────────── */
export default function Docs() {
  const [lang, setLang] = useState('en');
  const d = t[lang].doc;
  const nav = t[lang].nav;
  const sidebar = t[lang].sidebar;

  return (
    <div className="docs-root">
      {/* ── Top bar ── */}
      <header className="docs-topbar">
        <div className="docs-topbar-inner">
          <Link to="/" className="docs-back-btn">
            <ArrowLeft size={16} /> {nav.back}
          </Link>
          <div className="docs-logo"><img src="/instrait-logo.png" alt="instrait" className="logo-img" /></div>
          <div className="docs-topbar-lang">
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >EN</button>
            <span className="lang-sep" />
            <button
              className={`lang-btn ${lang === 'cs' ? 'active' : ''}`}
              onClick={() => setLang('cs')}
            >CZ</button>
          </div>
        </div>
      </header>

      <div className="docs-layout">
        {/* ── Sidebar ── */}
        <aside className="docs-sidebar">
          <div className="docs-sidebar-header">
            <BookOpen size={16} />
            <span>{sidebar.title}</span>
          </div>
          {sidebar.categories.map((cat, ci) => (
            <div key={ci} className="docs-sidebar-cat">
              <span className="docs-sidebar-cat-label">{cat.label}</span>
              {cat.items.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="docs-sidebar-item active">
                  <item.icon size={15} />
                  {item.label}
                  <ChevronRight size={13} className="docs-sidebar-chevron" />
                </a>
              ))}
            </div>
          ))}
        </aside>

        {/* ── Main Content ── */}
        <main className="docs-main" id="delete-account">
          {/* Header */}
          <div className="doc-header">
            <div className="doc-badge">
              <User size={13} /> {d.badge}
            </div>
            <h1 className="doc-title">{d.title}</h1>
            <p className="doc-subtitle">{d.subtitle}</p>
            <span className="doc-updated">{d.lastUpdated}</span>
          </div>

          {/* Warning banner */}
          <div className="doc-warning-banner">
            <AlertTriangle size={22} className="doc-warning-icon" />
            <div>
              <strong>{d.warningTitle}</strong>
              <p>{d.warningBody}</p>
            </div>
          </div>

          {/* Active stakes info box */}
          <div className="doc-info-box">
            <Info size={18} className="doc-info-icon" />
            <div>
              <strong>{d.infoBox.title}</strong>
              <p>{d.infoBox.body}</p>
            </div>
          </div>

          {/* How to delete */}
          <section className="doc-section">
            <h2 className="doc-section-title">{d.howTitle}</h2>
            <div className="doc-steps">
              {d.steps.map((s, i) => (
                <div key={i} className="doc-step">
                  <div className="doc-step-num">{s.step}</div>
                  <div className="doc-step-body">
                    <strong>{s.title}</strong>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section className="doc-section">
            <h2 className="doc-section-title">{d.screenshotsTitle}</h2>
            <div className="doc-screenshots">
              <figure className="doc-screenshot-card">
                <div className="doc-phone-frame">
                  <div className="doc-phone-notch" />
                  <div className="doc-phone-screen">
                    <img
                      src="/images/profile-menu-screen.png"
                      alt={d.screenshotCaptions[0]}
                    />
                  </div>
                  <div className="doc-phone-home-bar" />
                </div>
                <figcaption>{d.screenshotCaptions[0]}</figcaption>
              </figure>
              <figure className="doc-screenshot-card">
                <div className="doc-phone-frame">
                  <div className="doc-phone-notch" />
                  <div className="doc-phone-screen">
                    <img
                      src="/images/delete-account-screen.png"
                      alt={d.screenshotCaptions[1]}
                    />
                  </div>
                  <div className="doc-phone-home-bar" />
                </div>
                <figcaption>{d.screenshotCaptions[1]}</figcaption>
              </figure>
            </div>
          </section>

          {/* What gets DELETED table */}
          <section className="doc-section">
            <div className="doc-section-title-row">
              <XCircle size={20} className="doc-title-icon deleted" />
              <h2 className="doc-section-title">{d.deletedTitle}</h2>
            </div>
            <p className="doc-section-sub">{d.deletedSubtitle}</p>
            <div className="doc-table-wrap">
              <table className="doc-table">
                <thead>
                  <tr>
                    <th>Table / Data</th>
                    <th>What's removed</th>
                    <th>Method</th>
                  </tr>
                </thead>
                <tbody>
                  {d.deletedRows.map((row, i) => (
                    <tr key={i}>
                      <td><code className="doc-code">{row.table}</code></td>
                      <td>{row.notes}</td>
                      <td>
                        {row.method === 'ON DELETE CASCADE'
                          ? <span className="doc-badge-cascade">ON DELETE CASCADE</span>
                          : <span className="doc-badge-manual">{row.method}</span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* What is NOT deleted */}
          <section className="doc-section">
            <div className="doc-section-title-row">
              <ShieldAlert size={20} className="doc-title-icon kept" />
              <h2 className="doc-section-title">{d.keptTitle}</h2>
            </div>
            <p className="doc-section-sub">{d.keptSubtitle}</p>
            <div className="doc-kept-cards">
              {d.keptRows.map((row, i) => (
                <div key={i} className={`doc-kept-card doc-kept-${row.status}`}>
                  <div className="doc-kept-card-header">
                    <div className="doc-kept-icon-wrap">
                      <row.icon size={18} />
                    </div>
                    <div>
                      <strong className="doc-kept-system">{row.system}</strong>
                      <span className={`doc-kept-badge doc-kept-badge-${row.status}`}>
                        {row.statusLabel}
                      </span>
                    </div>
                  </div>
                  <p className="doc-kept-detail">{row.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* GDPR */}
          <section className="doc-section doc-gdpr-section">
            <div className="doc-section-title-row">
              <ShieldCheck size={20} className="doc-title-icon gdpr" />
              <h2 className="doc-section-title">{d.gdprTitle}</h2>
            </div>
            <p className="doc-gdpr-body">{d.gdprBody}</p>
            <Link to="/contact" className="doc-gdpr-btn">
              <Globe size={16} /> {d.gdprCta}
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
