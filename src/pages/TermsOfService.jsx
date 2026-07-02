import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronDown, ChevronRight, Globe, ArrowLeft } from 'lucide-react';
import '../App.css';
import translations from '../translations';

const enSections = [
  {
    title: '1. Introductory Provisions and Provider',
    content: [
      'The provider and operator of the instrait Application is:\n\nName/Business Name: Petr Andrýsek\nLegal Form: Sole Proprietor / Self-employed (OSVČ)\nID (IČO): 17601037\nRegistered Office: Grégrova 443/12, 779 00 Olomouc, Czech Republic\nContact E-mail: skinngit@gmail.com',
      'For any questions, requests, or objections regarding these Terms, please contact us at the e-mail address listed above.',
      'The instrait Application is a personal development tool designed for goal setting, habit building, project management, and task tracking, utilizing social elements (accountability partnerships) and motivational financial pledges.',
    ],
  },
  {
    title: '2. Registration Conditions and Age Restriction',
    content: [
      'Age Limit: The Application is intended exclusively for individuals aged 16 and older. By registering, you confirm that you meet this age requirement.',
      'Accuracy of Data: The User is obliged to provide true, accurate, and current information during registration (name, username, e-mail) and keep it updated.',
      'Account Security: The User is fully responsible for maintaining the confidentiality of their login credentials and for all activities that occur under their account.',
    ],
  },
  {
    title: '3. Rules of Conduct and User-Generated Content',
    content: [
      'The Application allows users to upload texts, goals, comments, photos, and other content (hereinafter referred to as "User Content").',
      'Responsibility for Content: You bear sole responsibility for all content you publish within the Application or share with your accountability partner.',
      'Prohibited Content: It is strictly forbidden to upload or share content that:\n• Violates the laws of the Czech Republic, the European Union, or international law.\n• Is defamatory, offensive, hateful, racist, pornographic, or incites violence.\n• Infringes upon copyrights, trademarks, or other intellectual property rights of third parties.\n• Contains viruses, malware, or harmful code.',
      'Content Moderation: The provider reserves the right (but not the obligation) to remove any User Content that violates these Terms at any time without prior notice.',
    ],
  },
  {
    title: '4. License Agreement and Intellectual Property',
    content: [
      'Ownership of the Application: All rights to the Application, including design, source code, graphics, logos, and texts, are the exclusive property of Petr Andrýsek and are protected by intellectual property laws.',
      'User License: The provider grants the User a limited, non-transferable, non-exclusive, revocable license to use the Application for personal, non-commercial purposes on a compatible mobile device.',
      'License to User Content: By uploading content to the Application, you grant the provider a royalty-free, worldwide, non-exclusive license to host, store, and display this content solely for the purpose of ensuring the functionality of the Application.',
    ],
  },
  {
    title: '5. Financial Pledges and Payment Terms',
    content: [
      'The Application includes a specific function for financial pledges tied to achieving your own goals and commitments ("pledges").',
      'Voluntary Participation: Engagement in financial pledges is entirely voluntary. The User explicitly defines the financial amount and the conditions under which the stake is won or lost in advance.',
      'Payment Processing: All financial transactions are processed through the certified payment gateway Stripe (Stripe Payments Europe, Ltd.). The provider does not store or process your full credit card details (card number, expiration date, or CVV code) on its systems.',
      'Finality of Transactions: The User acknowledges that if they fail to fulfill their defined commitment according to the rules of the Application, the stake is forfeited in accordance with the setup of the given function. Financial amounts debited due to an unsuccessful stake are non-refundable.',
    ],
  },
  {
    title: '6. Premium Services and Subscription',
    content: [
      'Premium Features: Certain features of the Application (e.g., Google Calendar Sync) may be premium and subject to a fee in the form of one-time payments or regular subscriptions.',
      'Automatic Renewal: Unless stated otherwise, subscriptions automatically renew for the same period until canceled. Subscriptions can be canceled at any time in your account settings within the Application or through the respective platform store (Google Play / App Store).',
    ],
  },
  {
    title: '7. Limitation of Liability',
    content: [
      '"As Is" Basis: The Application is provided on an "as is" and "as available" basis. The provider gives no warranties regarding uninterrupted availability, error-free operation, or 100% functionality of the Application.',
      'Exclusion of Damages: To the maximum extent permitted by applicable law, the provider shall not be liable for any direct, indirect, incidental, or consequential damages, loss of data, loss of profit, or damage to reputation resulting from the use or inability to use the Application, including any synchronization errors (e.g., with Google Calendar).',
      'Motivational Nature: The Application serves exclusively as a motivational and personal development tool. The provider is not responsible for the real-world results of users in meeting their personal goals.',
    ],
  },
  {
    title: '8. Account Termination and Sanctions',
    content: [
      'Termination by User: You can delete your account at any time voluntarily directly within the Application in the Settings > Delete Account section or by sending a request to skinngit@gmail.com.',
      'Termination by Provider: The provider reserves the right to suspend or completely terminate your user account and block your access to the Application if:\n• You violate these Terms.\n• You use the Application for fraudulent or illegal activities.\n• Your behavior harms the community or the good name of the Application.',
    ],
  },
  {
    title: '9. Privacy Policy',
    content: [
      'The handling of your personal data is conducted in accordance with applicable legal regulations, including the GDPR. Detailed information on what data we collect and how we process it can be found in our separate Privacy Policy document.',
    ],
  },
  {
    title: '10. Changes to the Terms',
    content: [
      'The provider is entitled to unilaterally change or update these Terms at any time (e.g., due to legislative changes or the introduction of new features). Users will be informed of material changes via an in-app notification or an e-mail sent to the address associated with their account at least 30 days prior to the changes taking effect. By continuing to use the Application after the changes become effective, you express your consent to the new wording.',
    ],
  },
  {
    title: '11. Governing Law and Jurisdiction',
    content: [
      'These Terms and any legal relationships arising from them shall be governed by the laws of the Czech Republic. Any potential disputes will be resolved primarily through amicable negotiation. In the event of a court dispute, the competent courts of the Czech Republic shall have exclusive jurisdiction.',
    ],
  },
  {
    title: '12. Contact Information',
    content: [
      'Should you have any questions, complaints, or comments regarding these Terms, you can contact us at:\n\nE-mail: skinngit@gmail.com\nMailing Address: Petr Andrýsek - instrait, Grégrova 443/12, 779 00 Olomouc, Czech Republic',
    ],
  },
];

const czSections = [
  {
    title: '1. Úvodní ustanovení a poskytovatel',
    content: [
      'Poskytovatelem a provozovatelem Aplikace instrait je:\n\nJméno/Firma: Petr Andrýsek\nPrávní forma: Fyzická osoba – podnikatel (OSVČ)\nIČO: 17601037\nSídlo: Grégrova 443/12, 779 00 Olomouc, Česká republika\nKontaktní e-mail: skinngit@gmail.com',
      'Aplikace instrait je nástroj pro osobní rozvoj, dosahování cílů, budování návyků, správu projektů a úkolů, který využívá sociální prvky (accountability partnerství) a motivační finanční závazky.',
    ],
  },
  {
    title: '2. Podmínky registrace a věkové omezení',
    content: [
      'Věkový limit: Aplikace je určena výhradně osobám starším 16 let. Registrací v Aplikaci potvrzujete, že tento věkový limit splňujete.',
      'Pravdivost údajů: Uživatel je povinen při registraci uvést pravdivé, přesné a aktuální údaje (jméno, uživatelské jméno, e-mail) a udržovat je aktualizované.',
      'Zabezpečení účtu: Uživatel je plně odpovědný za zachování důvěrnosti svých přihlašovacích údajů a za veškeré aktivity, které pod jeho účtem nastanou.',
    ],
  },
  {
    title: '3. Pravidla chování a uživatelský obsah',
    content: [
      'Aplikace umožňuje uživatelům nahrávat texty, cíle, komentáře, fotografie a další obsah (dále jen „Uživatelský obsah").',
      'Odpovědnost za obsah: Za veškerý obsah, který v rámci Aplikace zveřejníte nebo nasdílíte svému accountability partnerovi, nesete výhradní odpovědnost Vy.',
      'Zakázaný obsah: Je přísně zakázáno nahrávat nebo sdílet obsah, který:\n• Porušuje zákony České republiky nebo mezinárodní právo.\n• Je hanlivý, urážlivý, nenávistný, rasistický, pornografický nebo podněcuje k násilí.\n• Porušuje autorská práva, práva k ochranným známkám nebo jiná práva duševního vlastnictví třetích osob.\n• Obsahuje viry, malware nebo škodlivý kód.',
      'Moderování obsahu: Provozovatel si vyhrazuje právo (nikoli však povinnost) bez předchozího upozornění odstranit jakýkoli Uživatelský obsah, který porušuje tyto Podmínky.',
    ],
  },
  {
    title: '4. Licenční ujednání a duševní vlastnictví',
    content: [
      'Vlastnictví Aplikace: Veškerá práva k Aplikaci, včetně designu, zdrojového kódu, grafik, log a textů, jsou vlastnictvím Petra Andrýska a jsou chráněna autorským právem.',
      'Uživatelská licence: Provozovatel uděluje Uživateli omezenou, nepřenosnou, nevýhradní a odvolatelnou licenci k používání Aplikace pro osobní, nekomerční účely na kompatibilním mobilním zařízení.',
      'Licence k Uživatelskému obsahu: Nahráním obsahu do Aplikace udělujete provozovateli bezplatnou, celosvětovou a nevýhradní licenci k hostování, ukládání a zobrazování tohoto obsahu za účelem zajištění chodu funkcí Aplikace.',
    ],
  },
  {
    title: '5. Finanční sázky (Pledges) a platební podmínky',
    content: [
      'Aplikace obsahuje specifickou funkci finančních sázek na splnění vlastních cílů a závazků („pledges").',
      'Dobrovolnost: Zapojení do finančních sázek je zcela dobrovolné. Uživatel předem explicitně definuje finanční částku a podmínky, za kterých sázku vyhraje nebo prohraje.',
      'Zpracování plateb: Veškeré finanční transakce jsou zpracovávány prostřednictvím certifikované platební brány Stripe (Stripe Payments Europe, Ltd.). Provozovatel neukládá ani nezpracovává kompletní údaje o Vaší platební kartě.',
      'Finální charakter transakcí: Uživatel bere na vědomí, že pokud nesplní svůj definovaný závazek podle pravidel Aplikace, sázka propadá v souladu s nastavením dané funkce. Finanční částky stržené na základě neúspěšné sázky jsou nevratné.',
    ],
  },
  {
    title: '6. Služby Premium a předplatné',
    content: [
      'Premium funkce: Některé funkce Aplikace (např. Google Calendar Sync) mohou být zpoplatněny formou jednorázových plateb nebo pravidelného předplatného.',
      'Automatické obnovení: Pokud není uvedeno jinak, předplatné se automaticky obnovuje na stejné období, dokud jej nezrušíte. Předplatné lze zrušit v nastavení Vašeho účtu v Aplikaci nebo prostřednictvím příslušného obchodu (Google Play / App Store).',
    ],
  },
  {
    title: '7. Omezení odpovědnosti',
    content: [
      '„Tak jak je": Aplikace je poskytována „tak, jak je" a „jak je dostupná". Provozovatel neposkytuje žádné záruky ohledně nepřetržité dostupnosti, bezchybnosti nebo stoprocentní funkčnosti Aplikace.',
      'Vyloučení odpovědnosti za škodu: Provozovatel nenese odpovědnost za žádné přímé, nepřímé, náhodné nebo následné škody, ztrátu dat, ušlý zisk nebo poškození dobrého jména, které vznikly v důsledku používání nebo nemožnosti používat Aplikaci, včetně případných chyb v synchronizaci (např. Google Calendar).',
      'Motivační charakter: Aplikace slouží výhradně jako motivační nástroj. Provozovatel neodpovídá za reálné výsledky uživatelů při plnění jejich osobních cílů.',
    ],
  },
  {
    title: '8. Ukončení účtu a sankce',
    content: [
      'Zrušení uživatelem: Svůj účet můžete kdykoli dobrovolně smazat přímo v Aplikaci v sekci Nastavení > Smazat účet nebo žádostí na e-mail skinngit@gmail.com.',
      'Zrušení provozovatelem: Provozovatel si vyhrazuje právo pozastavit nebo zcela zrušit Váš uživatelský účet a zamezit Vám v přístupu k Aplikaci, pokud:\n• Porušíte tyto Podmínky.\n• Budete aplikaci využívat k podvodným nebo nelegálním aktivitám.\n• Vaše chování bude poškozovat komunitu nebo dobré jméno Aplikace.',
    ],
  },
  {
    title: '9. Ochrana osobních údajů',
    content: [
      'Nakládání s Vašimi osobními údaji probíhá v souladu s platnými právními předpisy (včetně nařízení GDPR). Podrobné informace o tom, jaká data sbíráme a jak je zpracováváme, naleznete v samostatném dokumentu Zásady ochrany osobních údajů (Privacy Policy).',
    ],
  },
  {
    title: '10. Změny podmínek',
    content: [
      'Provozovatel je oprávněn tyto Podmínky kdykoli jednostranně změnit či aktualizovat (např. z důvodu změny legislativy nebo zavedení nových funkcí). O podstatných změnách budou uživatelé informováni prostřednictvím oznámení v Aplikaci nebo e-mailem minimálně 30 dní před nabytím účinnosti změn. Pokračováním v používání Aplikace po nabytí účinnosti změn vyjadřujete s novým zněním souhlas.',
    ],
  },
  {
    title: '11. Rozhodné právo a řešení sporů',
    content: [
      'Tyto Podmínky a veškeré právní vztahy z nich vyplývající se řídí právním řádem České republiky. Veškeré případné spory budou řešeny primárně smírnou cestou. V případě soudního sporu budou k řešení příslušné věcně a místně příslušné soudy České republiky.',
    ],
  },
  {
    title: '12. Kontakt',
    content: [
      'V případě jakýchkoli dotazů, stížností nebo připomínek k těmto Podmínkám nás můžete kontaktovat na:\n\nE-mail: skinngit@gmail.com\nKorespondenční adresa: Petr Andrýsek - instrait, Grégrova 443/12, 779 00 Olomouc, Česká republika.',
    ],
  },
];

function AccordionItem({ section, index }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div style={{
      border: '1px solid rgba(46,46,60,0.8)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      marginBottom: '12px',
      background: 'var(--color-surface)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          textAlign: 'left',
          background: 'transparent',
          color: 'var(--color-text-main)',
          fontSize: '1.1rem',
          fontWeight: '600',
        }}
      >
        <span>{section.title}</span>
        <span style={{ color: 'var(--c-primary)' }}>
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: '0 24px 20px', borderTop: '1px solid rgba(46,46,60,0.5)' }}>
          {section.content.map((paragraph, i) => (
            <p key={i} style={{ marginTop: '16px', whiteSpace: 'pre-line', fontSize: '0.95rem' }}>
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TermsOfService() {
  const [lang, setLang] = useState('en');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const t = translations[lang];
  const sections = lang === 'cs' ? czSections : enSections;

  return (
    <div className="app-root" style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>

      {/* ── Header ── */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="logo"><img src="/instrait-logo.png" alt="instrait" className="logo-img" /></Link>
          <nav className="nav">
            <Link to="/#how" className="nav-link">{t.nav.how}</Link>
            <Link to="/#features" className="nav-link">{t.nav.features}</Link>
          </nav>
          <div className="header-ctas">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-main)', fontWeight: 600 }}>
              <ArrowLeft size={16} /> {lang === 'cs' ? 'Zpět' : 'Back'}
            </Link>
          </div>
        </div>
      </header>

      {/* ── Content ── */}
      <main style={{ maxWidth: '800px', margin: '120px auto 80px', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: '64px', height: '64px', borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary)', color: 'white', marginBottom: '24px',
            boxShadow: 'var(--shadow-md)'
          }}>
            <FileText size={32} />
          </div>
          <h1 className="section-h2" style={{ marginBottom: '16px' }}>
            {lang === 'cs' ? 'Smluvní podmínky užívání' : 'Terms of Service'}
          </h1>
          <p style={{ marginBottom: '32px' }}>
            {lang === 'cs'
              ? 'Aplikace instrait · Verze 1.0 · Platné od 18. května 2026'
              : 'instrait Application · Version 1.0 · Valid from May 18, 2026'}
          </p>

          <p style={{ marginBottom: '24px', fontSize: '0.95rem', opacity: 0.8 }}>
            {lang === 'cs'
              ? 'Stažením, instalací, registrací nebo používáním Aplikace vyjadřujete svůj bezvýhradný souhlas s těmito Podmínkami. Pokud s Podmínkami nesouhlasíte, Aplikaci prosím nepoužívejte.'
              : 'By downloading, installing, registering, or using the Application, you express your unconditional consent to these Terms. If you do not agree with these Terms, please do not use the Application.'}
          </p>

          {/* Lang Toggle */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--color-surface)', border: '1px solid rgba(46,46,60,0.8)',
            padding: '8px 16px', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-sm)'
          }}>
            <Globe size={18} style={{ color: 'var(--c-primary)' }} />
            <button
              onClick={() => setLang('en')}
              style={{ padding: '4px 12px', background: lang === 'en' ? 'var(--color-primary)' : 'transparent', color: lang === 'en' ? 'white' : 'var(--color-text-main)', borderRadius: 'var(--radius-full)', fontWeight: 600, transition: 'all 0.2s' }}
            >EN</button>
            <button
              onClick={() => setLang('cs')}
              style={{ padding: '4px 12px', background: lang === 'cs' ? 'var(--color-primary)' : 'transparent', color: lang === 'cs' ? 'white' : 'var(--color-text-main)', borderRadius: 'var(--radius-full)', fontWeight: 600, transition: 'all 0.2s' }}
            >CZ</button>
          </div>
        </div>

        <div>
          {sections.map((section, i) => (
            <AccordionItem key={`${lang}-${i}`} section={section} index={i} />
          ))}
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
