// translations.js — EN & CZ content for Skinngit landing page

const translations = {
  en: {
    // ── Nav ──
    nav: {
      how: 'How it works',
      features: 'Features',
      community: 'Community',
      pricing: 'Pricing',
      appStore: 'App Store',
      googlePlaySoon: 'Google Play',
      startWeb: 'Start on Web',
    },

    // ── Hero ──
    hero: {
      badge: 'Backed by behavioural science',
      h1: 'Stop setting goals.',
      h1accent: 'Start keeping them.',
      sub: 'Skinngit turns your ambitions into unbreakable commitments — backed by real money, an accountability partner, and a community that\'s watching.',
      btnIos: 'iOS — Coming Soon',
      btnAndroidSoon: 'Google Play — Coming Soon',
      btnWeb: 'Start on the web right now',
      fine: 'Free to start · No credit card required',
      trustPayments: 'Payments by',
      trustSyncs: 'Syncs with',
      trustForfeits: 'Forfeits to',
      screenLabels: [
        'Your daily command center',
        'Habits with real stakes',
        'Social Hub & Buddy finder',
        'AI-generated goal plans',
        'XP, levels & Skin Score',
      ],
    },

    // ── Slogan ──
    slogan: {
      prefix: 'Your goals cost you',
      faded: 'nothing.',
      suffix: "That's the problem.",
    },

    // ── How it works ──
    how: {
      label: 'The mechanism',
      h2: 'Three steps to a different you.',
      steps: [
        {
          title: 'Set the goal',
          body: 'Create a Goal, Habit, or Project. Let the AI break it into milestones and daily steps automatically.',
        },
        {
          title: 'Put money on the line',
          body: 'Stake real money. If you miss a deadline, the amount is charged — no excuses, no extensions.',
        },
        {
          title: 'Win or learn to win',
          body: 'Complete and earn XP, rewards, and a rising Skin Score. Fail and your money funds something meaningful.',
        },
      ],
      science: 'Loss aversion — people fight ~2× harder to avoid losing $50 than to gain it. We built the whole app around that fact.',
    },

    // ── Features ──
    features: {
      label: 'What you get',
      h2: 'Everything you need to become\nsomeone who follows through.',
      cards: [
        {
          title: 'AI plans your entire roadmap',
          desc: 'Tell the AI your goal and experience level. Get a full milestone plan with deadlines — ready in seconds, fully editable.',
          outcome: 'You stop wasting weeks trying to "figure out where to start"',
        },
        {
          title: 'Habit stacks that stick',
          desc: '"After X, I will Y" — chain habits together. Track streaks, set stakes per missed day.',
          outcome: 'You build discipline automatically',
        },
        {
          title: 'Projects with a brainstorm canvas',
          desc: 'Dump raw ideas first. Move to "Locked In" once you\'re sure. Daily pulse keeps you accountable.',
          outcome: 'You ship instead of planning forever',
        },
        {
          title: 'A score that reflects who you really are',
          desc: 'Your Skin Score tracks follow-through across every goal, habit and task. Drop too low and you enter Redemption Mode — locked until you prove yourself again.',
          outcome: 'You face the truth — and change it',
        },
        {
          title: 'Google Calendar sync',
          desc: 'Every goal and task deadline appears in your Google Calendar automatically. One less thing to switch between. (Premium)',
          outcome: 'Your whole life in one view',
        },
        {
          title: 'Real money at stake',
          desc: 'Set any amount. Miss the deadline and Stripe charges it automatically — to charity, app support, or your partners.',
          outcome: 'You take deadlines seriously',
        },
      ],
    },

    // ── Social Hub ──
    social: {
      label: 'Social Hub',
      h2: 'Accountability is a sport.\nFind your team.',
      sub: 'The Social Hub turns your private goals into public commitments — with real consequences for quitting.',
      buddy: {
        title: 'Find a Buddy',
        desc: 'Post a buddy ad with your city, interests and schedule. Browse others looking for a gym partner, study buddy, or co-founder. Send a partner request in one tap.',
        bullets: [
          'Filter by Gym, Running, Study, Cycling & more',
          'Mutual approval — both sides commit',
          'Partners share in your forfeited stakes',
        ],
      },
      features: [
        {
          title: 'Public Commitments Feed',
          desc: 'Post goals publicly. Your followers can like, verify, or call you out as failed — adding a shame badge to your profile.',
        },
        {
          title: 'Leaderboards',
          desc: 'Compete on XP, streak length, and goals completed. Three boards, updated in real time.',
        },
        {
          title: 'Partner Rewards',
          desc: 'Hit consistency milestones → unlock real vouchers, discounts, and free trials from fitness, wellness, and productivity brands. (Premium)',
        },
        {
          title: 'Success & Shame Boards',
          desc: 'Your completed commitments build a Success Board visible to all. Failed ones go to the Shame Board — a powerful incentive to follow through.',
        },
      ],
    },

    // ── Pricing ──
    pricing: {
      label: 'Plans',
      h2: 'Free to start.\nPremium to dominate.',
      free: {
        tier: 'Free',
        amount: '$0',
        period: '/mo',
        desc: 'Everything you need to build discipline.',
        features: [
          'Up to 2 Goals, 1 Project, 5 Habits',
          'Unlimited standalone tasks',
          'Financial stakes on all items',
          'AI Goal Plan Generator',
          'Full Social Hub access',
          'XP, levels & achievements',
        ],
        btn: 'Download Free',
      },
      premium: {
        badge: 'Most Effective',
        tier: 'Premium',
        amount: '$9',
        period: '/mo',
        desc: 'No limits. Advanced tools for high achievers.',
        features: [
          'Unlimited Goals, Projects & Habits',
          'Habit Stacks — chain habits together',
          'Partner Rewards marketplace',
          'Advanced Stats dashboard',
          'Google Calendar Sync',
          'Premium badge on your profile',
        ],
        btn: 'Claim Your Edge',
        save: 'Save 15% with annual — $91.80/yr',
      },
    },

    // ── FAQ ──
    faq: {
      label: 'FAQ',
      h2: 'Clear answers.',
      items: [
        {
          q: 'Is my money safe?',
          a: 'Yes. Payments are processed by Stripe (PCI DSS Level 1). Skinngit stores only a secure token — never your card number.',
        },
        {
          q: 'What happens if I fail a goal with a stake?',
          a: 'The staked amount is charged automatically to your card and sent where you chose: a global charity (UNICEF, WHO, Doctors Without Borders) or your accountability partner.',
        },
        {
          q: 'Can I remove a stake?',
          a: 'Stakes are intentionally hard to remove — that friction is the point. The commitment needs to feel real.',
        },
        {
          q: 'Are social features mandatory?',
          a: 'No. Keep goals fully private, share only with followers, or restrict to approved partners — your choice.',
        },
        {
          q: 'Do I need Premium to use stakes?',
          a: 'No. Financial stakes are included in the free plan. Premium unlocks unlimited items, advanced analytics, habit stacks, and Google Calendar Sync.',
        },
      ],
    },

    // ── CTA ──
    cta: {
      h2: 'Your goals deserve consequences.',
      sub: 'Join thousands building real discipline — one committed day at a time.',
      btnIos: 'iOS — Coming Soon',
      btnAndroidSoon: 'Google Play — Coming Soon',
      btnWeb: 'Start on the web right now',
      fine: 'Free to start · Stripe-secured · Cancel anytime',
    },

    // ── Footer ──
    footer: {
      tagline: 'Prove it or pay for it.',
      product: 'Product',
      community: 'Community',
      legal: 'Legal',
      links: {
        how: 'How it works',
        features: 'Features',
        pricing: 'Pricing',
        social: 'Social Hub',
        leaderboards: 'Leaderboards',
        rewards: 'Partner Rewards',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      copy: 'All rights reserved.',
      madeWith: 'Made to make you keep your word.',
    },
  },

  // ════════════════════════════════
  //  CZECH
  // ════════════════════════════════
  cs: {
    nav: {
      how: 'Jak to funguje',
      features: 'Funkce',
      community: 'Komunita',
      pricing: 'Ceník',
      appStore: 'App Store',
      googlePlaySoon: 'Google Play',
      startWeb: 'Spustit na webu hned',
    },

    hero: {
      badge: 'Podloženo behaviorální vědou',
      h1: 'Přestaň si dávat cíle.',
      h1accent: 'Začni je plnit.',
      sub: 'Skinngit promění tvé ambice v závazky, které nelze porušit — podpořené skutečnými penězi, partnerem zodpovědnosti a komunitou, která tě sleduje.',
      btnIos: 'iOS — Brzy k dispozici',
      btnAndroidSoon: 'Google Play — Brzy k dispozici',
      btnWeb: 'Spustit na webu hned',
      fine: 'Zdarma · Bez platební karty',
      trustPayments: 'Platby přes',
      trustSyncs: 'Synchronizuje s',
      trustForfeits: 'Propadá',
      screenLabels: [
        'Tvoje denní základna',
        'Návyky se skutečnými sázkami',
        'Social Hub & hledání parťáka',
        'AI plán tvých cílů',
        'XP, úrovně & Skin Score',
      ],
    },

    slogan: {
      prefix: 'Tvoje cíle tě nestojí',
      faded: 'nic.',
      suffix: 'To je ten problém.',
    },

    how: {
      label: 'Mechanismus',
      h2: 'Tři kroky k lepšímu sobě.',
      steps: [
        {
          title: 'Nastav cíl',
          body: 'Vytvoř Cíl, Návyk nebo Projekt. Nech AI rozložit ho na milníky a denní kroky automaticky.',
        },
        {
          title: 'Vsaď peníze',
          body: 'Dej do sázky skutečné peníze. Pokud propásneš termín, částka je stržena — bez výmluv, bez prodloužení.',
        },
        {
          title: 'Vyhraj nebo se nauč vyhrávat',
          body: 'Splň a získej XP, odměny a rostoucí Skin Score. Selži a tvoje peníze podpoří něco smysluplného.',
        },
      ],
      science: 'Averze ke ztrátě — lidé bojují ~2× silněji, aby nepřišli o 50 $, než aby je získali. Na tom jsme postavili celou aplikaci.',
    },

    features: {
      label: 'Co získáš',
      h2: 'Vše, co potřebuješ, aby ses stal\nněkým, kdo dodržuje slovo.',
      cards: [
        {
          title: 'AI naplánuje celou tvoji cestu',
          desc: 'Řekni AI svůj cíl a úroveň zkušeností. Získej kompletní plán milníků s termíny — připravený za vteřiny, plně editovatelný.',
          outcome: 'Přestaneš ztrácet týdny přemýšlením, „kde vůbec začít"',
        },
        {
          title: 'Návykové řetězy, které skutečně fungují',
          desc: '"Po X udělám Y" — propoj návyky dohromady. Sleduj série, nastav sázku za každý promarněný den.',
          outcome: 'Disciplínu si vybuduješ automaticky',
        },
        {
          title: 'Projekty s brainstorming plátnem',
          desc: 'Nejdřív vyhoď hrubé nápady. Přejdi do fáze „Zamčeno" jakmile si jistý. Denní pulz tě udržuje zodpovědným.',
          outcome: 'Spustíš to místo věčného plánování',
        },
        {
          title: 'Skóre, které odráží, kdo skutečně jsi',
          desc: 'Tvůj Skin Score sleduje plnění přes všechny cíle, návyky i úkoly. Klesneš-li příliš nízko, vstoupíš do Redemption Mode — zamčeno, dokud se neprokážeš.',
          outcome: 'Čelíš pravdě — a měníš ji',
        },
        {
          title: 'Synchronizace s Google Kalendářem',
          desc: 'Každý termín cíle a úkolu se automaticky zobrazí v tvém Google Kalendáři. O jednu věc míň přepínat. (Premium)',
          outcome: 'Celý tvůj život na jednom místě',
        },
        {
          title: 'Skutečné peníze v sázce',
          desc: 'Nastav libovolnou částku. Propásneš termín a Stripe ji automaticky strhne — charitě, podpoře aplikace nebo tvým partnerům.',
          outcome: 'Termíny začneš brát vážně',
        },
      ],
    },

    social: {
      label: 'Social Hub',
      h2: 'Zodpovědnost je sport.\nNajdi svůj tým.',
      sub: 'Social Hub promění tvoje soukromé cíle ve veřejné závazky — s reálnými důsledky za vzdání se.',
      buddy: {
        title: 'Najdi parťáka',
        desc: 'Zveřejni inzerát se svým městem, zájmy a rozvrhem. Procházej ostatní hledající parťáka do posilovny, ke studiu nebo spoluzakladatele. Žádost pošleš jedním klepnutím.',
        bullets: [
          'Filtruj podle Posilovny, Běhu, Studia, Cyklistiky a dalšího',
          'Vzájemné schválení — obě strany se zavazují',
          'Partneři se podílejí na tvých propadlých sázkách',
        ],
      },
      features: [
        {
          title: 'Veřejný feed závazků',
          desc: 'Zveřejni cíle. Tvoji sledující mohou lajkovat, ověřit nebo tě označit jako selhávajícího — a přidat ti odznak hanby na profil.',
        },
        {
          title: 'Žebříčky',
          desc: 'Soutěž v XP, délce série a splněných cílech. Tři žebříčky, aktualizované v reálném čase.',
        },
        {
          title: 'Partnerské odměny',
          desc: 'Dosáhni milníků konzistence → odemkni poukazy, slevy a bezplatné zkušební verze od fitness, wellness a produktivitních značek. (Premium)',
        },
        {
          title: 'Nástěnky úspěchu & hanby',
          desc: 'Splněné závazky budují tvou Nástěnku úspěchu viditelnou všem. Neúspěchy jdou na Nástěnku hanby — silná motivace dotáhnout to do konce.',
        },
      ],
    },

    pricing: {
      label: 'Plány',
      h2: 'Zdarma na začátek.\nPremium pro dominanci.',
      free: {
        tier: 'Zdarma',
        amount: '$0',
        period: '/měs.',
        desc: 'Vše, co potřebuješ k budování disciplíny.',
        features: [
          'Až 2 Cíle, 1 Projekt, 5 Návyků',
          'Neomezené samostatné úkoly',
          'Finanční sázky na všechny položky',
          'AI generátor plánů cílů',
          'Plný přístup k Social Hubu',
          'XP, úrovně & achievementy',
        ],
        btn: 'Stáhnout zdarma',
      },
      premium: {
        badge: 'Nejúčinnější',
        tier: 'Premium',
        amount: '$9',
        period: '/měs.',
        desc: 'Bez omezení. Pokročilé nástroje pro vysoké výkony.',
        features: [
          'Neomezené Cíle, Projekty & Návyky',
          'Návykové řetězy — propoj návyky dohromady',
          'Marketplace partnerských odměn',
          'Pokročilý dashboard statistik',
          'Synchronizace s Google Kalendářem',
          'Premium odznak na tvém profilu',
        ],
        btn: 'Získej svou výhodu',
        save: 'Ušetři 15 % s ročním předplatným — $91,80/rok',
      },
    },

    faq: {
      label: 'FAQ',
      h2: 'Jasné odpovědi.',
      items: [
        {
          q: 'Jsou moje peníze v bezpečí?',
          a: 'Ano. Platby zpracovává Stripe (PCI DSS Level 1). Skinngit ukládá pouze bezpečný token — nikdy číslo tvé karty.',
        },
        {
          q: 'Co se stane, když nesplním cíl se sázkou?',
          a: 'Vsazená částka je automaticky stržena z tvé karty a odeslána tam, kam sis zvolil: globální charita (UNICEF, WHO, Lékaři bez hranic) nebo tvůj partner zodpovědnosti.',
        },
        {
          q: 'Mohu sázku odstranit?',
          a: 'Sázky jsou záměrně těžko odstranitelné — tření je smyslem. Závazek musí být skutečný.',
        },
        {
          q: 'Jsou sociální funkce povinné?',
          a: 'Ne. Udržuj cíle plně soukromé, sdílej jen se sledujícími nebo omez přístup jen na schválené partnery — tvoje volba.',
        },
        {
          q: 'Potřebuji Premium pro sázky?',
          a: 'Ne. Finanční sázky jsou součástí bezplatného plánu. Premium odemyká neomezené položky, pokročilé analytiky, návykové řetězy a synchronizaci s Google Kalendářem.',
        },
      ],
    },

    cta: {
      h2: 'Tvoje cíle si zaslouží důsledky.',
      sub: 'Přidej se k tisícům lidí budujících skutečnou disciplínu — den po dni.',
      btnIos: 'iOS — Brzy k dispozici',
      btnAndroidSoon: 'Google Play — Brzy k dispozici',
      btnWeb: 'Spustit na webu hned',
      fine: 'Zdarma · Zabezpečeno Stripe · Zrušení kdykoliv',
    },

    footer: {
      tagline: 'Dokaž to, nebo za to zaplať.',
      product: 'Produkt',
      community: 'Komunita',
      legal: 'Právní',
      links: {
        how: 'Jak to funguje',
        features: 'Funkce',
        pricing: 'Ceník',
        social: 'Social Hub',
        leaderboards: 'Žebříčky',
        rewards: 'Partnerské odměny',
        privacy: 'Zásady ochrany soukromí',
        terms: 'Podmínky služby',
      },
      copy: 'Všechna práva vyhrazena.',
      madeWith: 'Abys dodržoval své slovo.',
    },
  },
};

export default translations;
