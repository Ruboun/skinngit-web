import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronDown, ChevronRight, Globe, ArrowLeft } from 'lucide-react';
import '../App.css';
import translations from '../translations';

const enSections = [
  {
    title: '1. Introduction',
    content: [
      'This Privacy Policy ("Policy") describes how we collect, use, and protect your personal data in connection with your use of the instrait mobile application ("App"). Please read it carefully before using the App.',
      'By using the App, you acknowledge that you have read and understood how your personal data is processed as described in this Policy.',
    ],
  },
  {
    title: '2. Data Controller',
    content: [
      'The data controller responsible for your personal data is:',
      'Petr Andrýsek\nSole trader (self-employed individual)\nICO: 17601037\nDUNS Number: 986917955\nAddress: Grégrova 443/12, 779 00 Olomouc, Czech Republic\nContact email: skinngit@gmail.com',
      'For any questions, requests, or complaints regarding the protection of your personal data, contact us at the email address above.',
    ],
  },
  {
    title: '3. What Personal Data We Collect',
    content: [
      '3.1 Data you provide directly\nWhen registering and using the App, you provide us with:\n• Identity data: full name, username (@username), email address\n• Profile data: date of birth, city, interests, profile photo\n• User-generated content: goals, habits, projects, tasks, comments, public commitments\n• In-app communications: messages with accountability partners, ratings',
      '3.2 Payment data\nTo enable the financial pledges feature, payment data is processed through our payment service provider, Stripe. Your actual card number, expiry date, and CVV are never stored in our systems — Stripe provides us only with a secure payment method reference token. Stripe holds PCI DSS Level 1 certification.',
      '3.3 Data collected automatically when you use the App\nWhen you use the App, we automatically collect:\n• Device technical data: device type, operating system, app version\n• Device identifiers: anonymous identifiers (Firebase Instance ID)\n• Usage data: screens you visit, features you use, login timestamps\n• Performance data: crash reports and error logs, response times\n• IP address when communicating with our servers',
      '3.4 Data from third parties\nIf you use the Google Calendar Sync feature (Premium), we access your Google calendar service to the extent you explicitly approve when linking your account. This data is used solely for synchronising your goals and tasks and is not shared with third parties.',
    ],
  },
  {
    title: '4. Purposes and Legal Bases for Processing',
    content: [
      '4.1 Providing the App\'s services — performance of a contract (Art. 6(1)(b) GDPR)\n• Creating and managing your user account\n• Processing and managing financial pledges and payments via Stripe\n• Displaying your goals, habits, projects, and tasks\n• Enabling accountability partnerships and social features\n• Sending notifications and reminders about deadlines and commitments',
      '4.2 Legitimate interests (Art. 6(1)(f) GDPR)\n• Ensuring the security and integrity of the App and preventing misuse\n• Monitoring errors and improving App performance and stability\n• Analysing App usage for development and improvement via Google Analytics and Firebase Analytics\n• Defending rights in legal disputes',
      '4.3 Consent (Art. 6(1)(a) GDPR)\n• Sending marketing notifications and App news — consent is given in notification settings and can be withdrawn at any time\n• Publishing your profile, public commitments, and statistics within the App community',
      '4.4 Compliance with a legal obligation (Art. 6(1)(c) GDPR)\n• Retaining tax and accounting records for the periods required by law\n• Cooperating with public authorities in cases required by applicable legislation',
    ],
  },
  {
    title: '5. Recipients of Personal Data and Third Parties',
    content: [
      'We do not sell your personal data to third parties. We share it only in the cases described below and to the extent necessary:',
      '5.1 Stripe (payment gateway)\nDuring activation of financial stakes, your payment data is processed by Stripe Payments Europe, Ltd., based in Ireland, acting as an independent controller of payment data. Processing is carried out in accordance with Stripe\'s terms and PCI DSS Level 1 certification. More information: https://stripe.com/privacy',
      '5.2 Google Firebase\nThe App uses Google Firebase infrastructure (Google LLC, USA) for backend services including user authentication, database (Firestore), cloud storage, and push notifications (Firebase Cloud Messaging). Data transfers outside the EEA are based on Standard Contractual Clauses approved by the European Commission. More: https://firebase.google.com/support/privacy',
      '5.3 Google Analytics / Firebase Analytics\nWe use Google Analytics for Firebase to analyse App usage. Collected data is anonymised and used solely to improve the App. Detailed profiles are not created for targeted advertising purposes. More: https://policies.google.com/privacy',
      '5.4 Accountability partners\nIf you explicitly add an accountability partner within the App, that partner may view your progress and results to the extent you define when setting up the partnership. This shared access is part of the App\'s core functionality and requires your explicit consent.',
      '5.5 Public authorities\nWhere required by law, or where necessary to protect our rights or the rights of third parties, we may disclose your data to public authorities or courts.',
    ],
  },
  {
    title: '6. International Transfers of Personal Data',
    content: [
      'Some of the recipients listed above (in particular Google LLC) are located or process data in the United States or other countries outside the European Economic Area (EEA). Transfers of data to such countries are carried out on the basis of:',
      '• Standard Contractual Clauses (SCCs) approved by the European Commission\n• European Commission adequacy decisions (where applicable)',
      'We take all reasonable technical and organisational measures to ensure an adequate level of protection for your personal data.',
    ],
  },
  {
    title: '7. Data Retention',
    content: [
      'We retain your personal data for as long as necessary to fulfil the purposes set out in this Policy, or for as long as required by applicable law:',
      '• Account data (profile, goals, habits, projects, tasks): for the duration of your account + 30 days after deletion to allow reversal of the decision\n• Payment records and tax documents: 10 years from the relevant taxable transaction (in accordance with Czech accounting and tax legislation)\n• App usage logs and analytics data: maximum 26 months in anonymised form\n• Push notification logs: 90 days\n• Customer support communications: 3 years',
      'After the applicable retention period, your personal data is securely deleted or anonymised.',
    ],
  },
  {
    title: '8. Your Data Protection Rights',
    content: [
      'As a data subject, you have the following rights under the GDPR:',
      '8.1 Right of access (Art. 15 GDPR)\nYou have the right to obtain confirmation of whether we are processing your personal data and, if so, the right to access that data and information about its processing.',
      '8.2 Right to rectification (Art. 16 GDPR)\nYou have the right to request the correction of inaccurate personal data or the completion of incomplete personal data. Many of your personal details can be updated directly in the Edit Profile section of the App.',
      '8.3 Right to erasure ("right to be forgotten") (Art. 17 GDPR)\nWhere the conditions set out in the GDPR are met, you have the right to request the erasure of your personal data. This right can be exercised by emailing skinngit@gmail.com or directly within the App under Profile > Settings > Delete Account. Please note that erasure may not always be possible where a legal obligation to retain data exists (e.g. tax records).',
      '8.4 Right to restriction of processing (Art. 18 GDPR)\nUnder the conditions set out by law, you have the right to request a restriction on the processing of your personal data.',
      '8.5 Right to data portability (Art. 20 GDPR)\nYou have the right to receive the personal data you have provided to us in a structured, commonly used, and machine-readable format, and to transmit that data to another controller.',
      '8.6 Right to object (Art. 21 GDPR)\nYou have the right to object to the processing of your personal data carried out on the basis of legitimate interests, including profiling. In such cases, we will cease processing your data unless we can demonstrate compelling legitimate grounds for processing that override your interests.',
      '8.7 Right to withdraw consent (Art. 7(3) GDPR)\nWhere processing is based on your consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out before withdrawal. Consent to marketing notifications can be withdrawn in Notification Settings in the App or by sending an email to skinngit@gmail.com.',
      '8.8 How to exercise your rights\nYou can exercise your rights by:\n• Email: skinngit@gmail.com\n• Directly within the App: Profile > Settings\nWe will respond to your request without undue delay and no later than 30 days from receipt. In justified cases, this period may be extended by a further 60 days.',
      '8.9 Right to lodge a complaint with a supervisory authority\nIf you believe that the processing of your personal data is in breach of the GDPR or other applicable legislation, you have the right to lodge a complaint with the competent supervisory authority. As we are established in the Czech Republic, the relevant authority is:\n\nOffice for Personal Data Protection (ÚOOÚ)\nPplk. Sochora 27, 170 00 Prague 7, Czech Republic\nWebsite: https://www.uoou.cz\nEmail: posta@uoou.cz\nPhone: +420 234 514 111\n\nYou also have the right to lodge a complaint with the supervisory authority in the EU member state of your habitual residence, place of work, or place of the alleged infringement.',
    ],
  },
  {
    title: '9. Security of Personal Data',
    content: [
      'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction, or other unlawful processing. These measures include:',
      '• Encryption of data in transit via TLS/HTTPS protocol\n• Secure data storage within Google Firebase infrastructure\n• Access to personal data is restricted to individuals who strictly need it\n• Payment data is processed exclusively through Stripe\'s certified gateway (PCI DSS Level 1)\n• Regular review and updating of security measures',
      'Nevertheless, no system for transmitting or storing data over the internet is completely secure. If you believe your interaction with us is no longer secure, please contact us immediately at skinngit@gmail.com.',
    ],
  },
  {
    title: '10. Age Restriction',
    content: [
      'The instrait App is intended exclusively for individuals aged 16 and over. We do not knowingly collect personal data from children under the age of 16. If we discover that we have inadvertently collected personal data from a child under 16, we will delete it without delay.',
      'If you are a parent or legal guardian and believe that your child under 16 has provided us with personal data, please contact us at skinngit@gmail.com.',
    ],
  },
  {
    title: '11. Cookies and Similar Technologies',
    content: [
      'The instrait mobile app does not use web cookies. However, we use similar technologies specific to the mobile environment:',
      '• Firebase Instance ID: an anonymous device identifier used for delivering push notifications and analytics\n• Device local storage: used to store app settings and session data to provide a better user experience',
      'This data is not used for advertising profiling and is not shared with advertisers.',
    ],
  },
  {
    title: '12. Public Profiles and Public Commitments',
    content: [
      'If you set up a public profile or publish a Public Commitment, that information is visible to other users of the App. This includes:',
      '• Your username (@username) and any profile information you choose to make public\n• Your public commitments and their outcomes (Success Board / Shame Board)\n• Your statistics and rankings in leaderboards (if you participate in them)',
      'You can adjust the visibility of your profile and commitments at any time in the App settings. Your real name is not displayed in the public areas of the App unless you choose to include it yourself.',
    ],
  },
  {
    title: '13. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. We will notify you of any material changes via an in-app notification or by email to the address associated with your account, at least 30 days before the changes take effect.',
      'The date of the most recent update is always shown at the top of this document. We encourage you to review this Policy periodically.',
    ],
  },
  {
    title: '14. Contact',
    content: [
      'If you have any questions, comments, or requests regarding this Policy or the processing of your personal data, please contact us:',
      'Petr Andrýsek — instrait\nEmail: skinngit@gmail.com\nAddress: Grégrova 443/12, 779 00 Olomouc, Czech Republic\nBusiness Registration No. (ICO): 17601037',
      'We aim to respond to all data protection enquiries within 5 business days.',
      'This Privacy Policy is valid and effective as of May 15, 2026.',
    ],
  },
];

const czSections = [
  {
    title: '1. Úvod',
    content: [
      'Tyto Zásady ochrany osobních údajů (dále jen „Zásady”) popisují, jakým způsobem shromažďujeme, používáme a chráníme vaše osobní údaje v souvislosti s používáním mobilní aplikace instrait (dále jen „Aplikace”). Před použitím Aplikace si je prosím pečlivě přečtěte.',
      'Používáním Aplikace potvrzujete, že jste si tyto Zásady přečetli a že rozumíte způsobu zpracování vašich osobních údajů popsanému v tomto dokumentu.',
    ],
  },
  {
    title: '2. Správce osobních údajů',
    content: [
      'Správcem odpovědným za vaše osobní údaje je:',
      'Petr Andrýsek\nFyzická osoba – podnikatel (OSVČ)\nIČO: 17601037\nDUNS: 986917955\nSídlo: Grégrova 443/12, 779 00 Olomouc, Česká republika\nKontaktní e-mail: skinngit@gmail.com',
      'V případě jakýchkoli dotazů, žádostí nebo stížností ohledně ochrany vašich osobních údajů nás kontaktujte na výše uvedené e-mailové adrese.',
    ],
  },
  {
    title: '3. Jaké osobní údaje shromažďujeme',
    content: [
      '3.1 Údaje, které nám poskytujete přímo\nPři registraci a používání Aplikace nám poskytujete:\n• Identifikační údaje: celé jméno, uživatelské jméno (@username), e-mailová adresa\n• Profilové údaje: datum narození, město, zájmy, profilová fotografie\n• Obsah vytvořený uživatelem: cíle, návyky, projekty, úkoly, komentáře, veřejné závazky\n• Komunikace v aplikaci: zprávy s partnery pro zodpovědnost, ověření a upozornění na nesplnění',
      '3.2 Platební údaje\nPro aktivaci funkce finančního závazkového pledge systému jsou platební údaje zpracovávány prostřednictvím našeho poskytovatele platebních služeb, společnosti Stripe. Číslo vaší karty, datum expirace ani CVV kód nejsou v našich systémech nikdy uloženy — Stripe nám poskytuje pouze bezpečný referenční token platební metody. Stripe je držitelem certifikace PCI DSS Level 1.',
      '3.3 Údaje shromažďované automaticky při používání Aplikace\nPři používání Aplikace automaticky shromažďujeme:\n• Technické údaje zařízení: typ zařízení, operační systém, verze aplikace\n• Identifikátory zařízení: anonymní identifikátory (Firebase Instance ID)\n• Údaje o používání: navštívené obrazovky, používané funkce, časová razítka přihlášení\n• Výkonnostní data: hlášení o pádech a chybové logy, reakční doby\n• IP adresa při komunikaci s našimi servery',
      '3.4 Údaje od třetích stran\nPokud používáte funkci Google Calendar Sync (Premium), přistupujeme k vaší službě kalendáře Google v rozsahu, který výslovně schválíte při propojování účtu. Tyto údaje se používají výhradně pro synchronizaci vašich cílů a úkolů a nesdílejí se s třetími stranami.',
    ],
  },
  {
    title: '4. Účely a právní základy zpracování',
    content: [
      '4.1 Poskytování služeb Aplikace — plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR)\n• Vytvoření a správa vašeho uživatelského účtu\n• Zpracování a správa finančních pledges a plateb prostřednictvím Stripe\n• Zobrazování vašich cílů, návyků, projektů a úkolů\n• Umožnění partnerské zodpovědnosti a sociálních funkcí\n• Zasílání oznámení a upomínek k termínům a závazkům',
      '4.2 Oprávněné zájmy (čl. 6 odst. 1 písm. f) GDPR)\n• Zajištění bezpečnosti a integrity Aplikace a prevence zneužití\n• Sledování chyb a zlepšování výkonu a stability Aplikace\n• Analýza používání Aplikace pro vývoj a vylepšování pomocí Google Analytics a Firebase Analytics\n• Obhajoba práv v právních sporech',
      '4.3 Souhlas (čl. 6 odst. 1 písm. a) GDPR)\n• Zasílání marketingových oznámení a novinek v Aplikaci — souhlas se uděluje v nastavení oznámení a lze jej kdykoli odvolat\n• Zveřejnění vašeho profilu, veřejných závazků a statistik v rámci komunity Aplikace',
      '4.4 Plnění právní povinnosti (čl. 6 odst. 1 písm. c) GDPR)\n• Uchovávání daňové a účetní evidence po dobu stanovenou zákonem\n• Součinnost s orgány veřejné moci v případech požadovaných platnou legislativou',
    ],
  },
  {
    title: '5. Příjemci osobních údajů a třetí strany',
    content: [
      'Vaše osobní údaje třetím stranám neprodáváme. Sdílíme je pouze v níže popsaných případech a v nezbytně nutném rozsahu:',
      '5.1 Stripe (platební brána)\nPři aktivaci finančních pledges jsou vaše platební údaje zpracovávány společností Stripe Payments Europe, Ltd. se sídlem v Irsku, která působí jako samostatný správce platebních údajů. Zpracování se řídí vlastními podmínkami Stripe a její certifikací PCI DSS Level 1.\nVíce informací: https://stripe.com/privacy',
      '5.2 Google Firebase\nAplikace využívá infrastrukturu Google Firebase (Google LLC, USA) pro backendové služby, včetně ověřování uživatelů, databáze (Firestore), cloudového úložiště a push oznámení (Firebase Cloud Messaging). Přenosy dat mimo EHP jsou založeny na Standardních smluvních doložkách schválených Evropskou komisí. Více: https://firebase.google.com/support/privacy',
      '5.3 Google Analytics / Firebase Analytics\nK analýze používání Aplikace používáme Google Analytics for Firebase. Shromažďovaná data jsou anonymizována a používána výhradně ke zlepšení Aplikace. Pro účely cílené reklamy se nevytvářejí podrobné profily. Více: https://policies.google.com/privacy',
      '5.4 Partnerské zodpovědnostní vztahy\nPokud v rámci Aplikace výslovně přidáte partnera pro zodpovědnost, může tento partner zobrazovat vaše pokroky a výsledky v rozsahu, který sami definujete při nastavování partnerství (viz sekce Partneři v Aplikaci). Tento sdílený přístup je součástí základní funkcionality Aplikace a vyžaduje váš výslovný souhlas.',
      '5.5 Orgány veřejné moci\nTam, kde to vyžaduje zákon nebo je to nezbytné k ochraně našich práv či práv třetích stran, můžeme vaše údaje poskytnout orgánům veřejné moci nebo soudům.',
    ],
  },
  {
    title: '6. Mezinárodní přenosy osobních údajů',
    content: [
      'Někteří z výše uvedených příjemců (zejména Google LLC) sídlí nebo zpracovávají data ve Spojených státech amerických nebo jiných zemích mimo Evropský hospodářský prostor (EHP). Přenosy údajů do těchto zemí se uskutečňují na základě:',
      '• Standardních smluvních doložek (SCC) schválených Evropskou komisí\n• Rozhodnutí Evropské komise o odpovídající ochraně (tam, kde jsou uplatnitelná)',
      'Přijímáme veškerá přiměřená technická a organizační opatření, abychom zajistili dostatečnou úroveň ochrany vašich osobních údajů.',
    ],
  },
  {
    title: '7. Doba uchovávání údajů',
    content: [
      'Vaše osobní údaje uchováváme po dobu nezbytnou k naplnění účelů stanovených v těchto Zásadách, nebo po dobu vyžadovanou platnými právními předpisy:',
      '• Údaje o účtu (profil, cíle, návyky, projekty, úkoly): po dobu trvání vašeho účtu + 30 dní po smazání, aby bylo možné zrušit rozhodnutí\n• Platební záznamy a daňové doklady: 10 let od příslušného zdanitelného plnění (v souladu s českou účetní a daňovou legislativou)\n• Protokoly o používání aplikace a analytická data: maximálně 26 měsíců v anonymizované podobě\n• Protokoly push oznámení: 90 dní\n• Komunikace se zákaznickou podporou: 3 roky',
      'Po uplynutí příslušné doby uchovávání jsou vaše osobní údaje bezpečně vymazány nebo anonymizovány.',
    ],
  },
  {
    title: '8. Vaše práva na ochranu údajů',
    content: [
      'Jako subjekt údajů máte podle GDPR následující práva:',
      '8.1 Právo na přístup (čl. 15 GDPR)\nMáte právo získat potvrzení o tom, zda zpracováváme vaše osobní údaje, a pokud ano, právo na přístup k těmto údajům a informacím o jejich zpracování.',
      '8.2 Právo na opravu (čl. 16 GDPR)\nMáte právo požádat o opravu nepřesných osobních údajů nebo doplnění neúplných osobních údajů. Mnoho vašich osobních údajů lze aktualizovat přímo v sekci Upravit profil v Aplikaci.',
      '8.3 Právo na výmaz ("právo být zapomenut") (čl. 17 GDPR)\nJsou-li splněny podmínky stanovené GDPR, máte právo požádat o výmaz vašich osobních údajů. Toto právo můžete uplatnit zasláním e-mailu na skinngit@gmail.com nebo přímo v Aplikaci pod Profil > Nastavení > Smazat účet. Upozorňujeme, že výmaz není vždy možný tam, kde existuje právní povinnost uchovávání údajů (např. daňové záznamy)',
      '8.4 Právo na omezení zpracování (čl. 18 GDPR)\nZa podmínek stanovených zákonem máte právo požádat o omezení zpracování vašich osobních údajů.',
      '8.5 Právo na přenositelnost údajů (čl. 20 GDPR)\nMáte právo získat osobní údaje, které jste nám poskytli, ve strukturovaném, běžně používaném a strojově čitelném formátu a předat je jinému správci.',
      '8.6 Právo vznést námitku (čl. 21 GDPR)\nMáte právo vznést námitku proti zpracování vašich osobních údajů prováděnému na základě oprávněných zájmů, včetně profilování. V takovém případě přestaneme vaše údaje zpracovávat, pokud neprokážeme přesvědčivé oprávněné důvody pro zpracování, které převažují nad vašimi zájmy.',
      '8.7 Právo odvolat souhlas (čl. 7 odst. 3 GDPR)\nTam, kde je zpracování založeno na vašem souhlasu, můžete tento souhlas kdykoli odvolat, aniž by tím byla dotčena zákonnost zpracování provedeného před jeho odvoláním. Souhlas s marketingovými oznámeními lze odvolat v Nastavení oznámení v Aplikaci nebo zasláním e-mailu na skinngit@gmail.com.',
      '8.8 Jak uplatnit svá práva\nSvá práva můžete uplatnit:\n• E-mailem: skinngit@gmail.com\n• Přímo v Aplikaci: Profil > Nastavení\nNa vaši žádost odpovíme bez zbytečného odkladu, nejpozději do 30 dnů od jejího doručení. V odůvodněných případech lze tuto lhůtu prodloužit o dalších 60 dnů.',
      '8.9 Právo podat stížnost u dozorového úřadu\nPokud se domníváte, že zpracování vašich osobních údajů je v rozporu s GDPR nebo jinou platnou legislativou, máte právo podat stížnost u příslušného dozorového úřadu. Jelikož máme sídlo v České republice, příslušným úřadem je:\n\nÚřad pro ochranu osobních údajů (ÚOOÚ)\nPplk. Sochora 27, 170 00 Praha 7, Česká republika\nWebové stránky: https://www.uoou.cz\nE-mail: posta@uoou.cz\nTelefon: +420 234 514 111\n\nMáte také právo podat stížnost u dozorového úřadu v členském státě EU, v němž máte obvyklé bydliště, místo výkonu práce nebo místo údajného porušení.',
    ],
  },
  {
    title: '9. Bezpečnost osobních údajů',
    content: [
      'Uplatňujeme příslušná technická a organizační opatření na ochranu vašich osobních údajů před neoprávněným přístupem, ztrátou, zničením nebo jiným nezákonným zpracováním. Tato opatření zahrnují:',
      '• Šifrování dat při přenosu prostřednictvím protokolu TLS/HTTPS\n• Bezpečné uložení dat v infrastruktuře Google Firebase\n• Přístup k osobním údajům je omezen na osoby, které ho nezbytně potřebují\n• Platební data jsou zpracovávána výhradně prostřednictvím certifikované brány Stripe (PCI DSS Level 1)\n• Pravidelná kontrola a aktualizace bezpečnostních opatření',
      'Žádný systém pro přenos nebo ukládání dat přes internet však není zcela bezpečný. Pokud se domníváte, že vaše interakce s námi již není bezpečná, kontaktujte nás okamžitě na adrese skinngit@gmail.com.',
    ],
  },
  {
    title: '10. Věkové omezení',
    content: [
      'Aplikace instrait je určena výhradně pro osoby starší 16 let. Vědomě neshromažďujeme osobní údaje dětí mladších 16 let. Pokud zjistíme, že jsme neúmyslně shromáždili osobní údaje dítěte mladšího 16 let, tyto údaje neprodleně smažeme.',
      'Pokud jste rodičem nebo zákonným zástupcem a domníváte se, že vaše dítě mladší 16 let nám poskytlo osobní údaje, kontaktujte nás prosím na adrese skinngit@gmail.com.',
    ],
  },
  {
    title: '11. Cookies a podobné technologie',
    content: [
      'Mobilní aplikace instrait nepoužívá webové cookies. Používáme však podobné technologie specifické pro mobilní prostředí:',
      '• Firebase Instance ID: anonymní identifikátor zařízení používaný pro doručování push notifikací a analytiku\n• Lokální úložiště zařízení: používáno pro ukládání nastavení aplikace a dat relace za účelem lepšího uživatelského zážitku',
      'Tato data nejsou používána pro reklamní profilování a nejsou sdílena s inzerenty.',
    ],
  },
  {
    title: '12. Veřejné profily a veřejné závazky',
    content: [
      'Pokud si nastavíte veřejný profil nebo zveřejníte Veřejný závazek, jsou tyto informace viditelné pro ostatní uživatele Aplikace. To zahrnuje:',
      '• Vaše uživatelské jméno (@username) a veškeré profilové informace, které se rozhodnete zveřejnit\n• Vaše veřejné závazky a jejich výsledky (Nástěnka úspěchů / Nástěnka hanby)\n• Vaše statistiky a umístění v žebříčcích (pokud se jich zúčastníte)',
      'Viditelnost vašeho profilu a závazků můžete kdykoli upravit v nastavení Aplikace. Vaše skutečné jméno se ve veřejných částech Aplikace nezobrazuje, pokud ho sami nezahrnete.',
    ],
  },
  {
    title: '13. Změny těchto zásad',
    content: [
      'Tyto Zásady ochrany osobních údajů můžeme čas od času aktualizovat. O veškerých podstatných změnách vás budeme informovat prostřednictvím oznámení v aplikaci nebo e-mailem na adresu spojenou s vaším účtem, a to nejméně 30 dní před nabytím účinnosti změn.',
      'Datum poslední aktualizace je vždy uvedeno v záhlaví tohoto dokumentu. Doporučujeme vám tyto Zásady pravidelně kontrolovat.',
    ],
  },
  {
    title: '14. Kontakt',
    content: [
      'Pokud máte jakékoli dotazy, připomínky nebo žádosti týkající se těchto Zásad nebo zpracování vašich osobních údajů, kontaktujte nás prosím:',
      'Petr Andrýsek — instrait\nE-mail: skinngit@gmail.com\nAdresa: Gregrova 443/12, 779 00 Olomouc, Česká republika\nIČ: 17601037',
      'Snažíme se odpovídat na všechny dotazy týkající se ochrany osobních údajů do 5 pracovních dnů.',
      'Tyto Zásady ochrany osobních údajů jsou platné a účinné od 15. května 2026.',
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

export default function PrivacyPolicy() {
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
            <Link to="/" style={{display:'flex', alignItems:'center', gap: '6px', color: 'var(--color-text-main)', fontWeight: 600}}>
              <ArrowLeft size={16} /> {lang==='cs'?'Zpět':'Back'}
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
            <Shield size={32} />
          </div>
          <h1 className="section-h2" style={{ marginBottom: '16px' }}>
            {lang === 'cs' ? 'Zásady ochrany osobních údajů' : 'Privacy Policy'}
          </h1>
          <p style={{ marginBottom: '32px' }}>
            {lang === 'cs' ? 'Aplikace instrait · Verze 1.1 · Platné od 15. května 2026' : 'instrait Application · Version 1.1 · Valid from May 15, 2026'}
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
