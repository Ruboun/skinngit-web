// translations.js — EN & CZ content for instrait landing page

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
      startWeb: 'Launch Web App',
    },

    // ── Hero ──
    hero: {
      badge: 'Web App live now · Mobile coming soon',
      h1: 'Stop setting goals.',
      h1accent: 'Start keeping them.',
      sub: 'instrait seals your commitments with no exit route — pledge real capital, set a strict deadline, and execute under the pressure of the strait. Available on web today.',
      btnIos: 'iOS — Coming Soon',
      btnAndroidSoon: 'Google Play — Coming Soon',
      btnWeb: 'Launch Web App',
      fine: 'Free to start · No credit card required · iOS & Android coming soon',
      trustPayments: 'Payments by',
      trustSyncs: 'Syncs with',
      trustForfeits: 'Forfeits to',
      screenLabels: [
        'Your daily command center',
        'Habits with real pledges',
        'Social Hub & Buddy finder',
        'AI-generated goal plans',
        'Strait Score & achievements',
      ],
    },

    // ── Slogan ──
    slogan: {
      prefix: 'Your goals cost you',
      faded: 'nothing.',
      suffix: "That's the problem.",
    },

    // ── Ecosystem (B) ──
    ecosystem: {
      label: 'Full ecosystem',
      h2: 'One system.\nEvery device.',
      sub: 'Your accountability engine works everywhere — on your desk today, in your pocket soon.',
      web: {
        badge: '● Live Now',
        title: 'Web App',
        desc: 'Full-featured browser experience. Set goals, track habits, manage projects, and keep money on the line — from any device with a browser.',
        cta: 'Open Web App',
        features: [
          'Complete goal, habit & project management',
          'AI Goal Planner',
          'Financial pledges via Stripe',
          'Social Hub & leaderboards',
        ],
      },
      mobile: {
        badge: 'Coming Soon',
        title: 'iOS & Android',
        desc: 'Native mobile experience with push notifications, widgets, and deep OS integration. Everything from the web app, built for your pocket.',
        cta: 'Notify me',
        features: [
          'Push notifications for deadlines',
          'Home screen widgets',
          'Offline access',
          'Google Calendar sync',
        ],
      },
    },

    // ── How it works ──
    how: {
      label: 'The mechanism',
      h2: 'Three steps to a different you.',
      steps: [
        {
          title: 'Define the Node',
          body: 'Create a Goal, Habit, Project, or one-off Task. Let the AI break it into milestones and daily steps automatically.',
        },
        {
          title: 'Lock the Asset',
          body: 'Pledge real capital. Miss the deadline and it\'s charged — no excuses, no extensions.',
        },
        {
          title: 'Execute the Strait',
          body: 'Once locked, the exit routes are sealed. Complete and earn a rising Strait Score. Fail and your pledge funds something meaningful.',
        },
      ],
      science: 'Loss aversion — people fight ~2× harder to avoid losing $50 than to gain it. We built the whole app around that fact.',
    },

    // ── Science Pillars (H) ──
    sciencePillars: {
      label: 'The science',
      h2: 'Why instrait works\nwhen willpower doesn\'t.',
      pillars: [
        {
          title: 'Loss Aversion',
          desc: 'People fight ~2× harder to avoid losing $50 than to gain it. Every pledge you set activates this hardwired circuit.',
          ref: 'Kahneman & Tversky, 1979',
        },
        {
          title: 'Commitment Devices',
          desc: 'Pre-committing your future self to a goal removes the temptation to quit when things get hard.',
          ref: 'Thaler & Benartzi, 2004',
        },
        {
          title: 'Social Accountability',
          desc: 'Public goals with real consequences add a second engine of motivation — your reputation and relationships.',
          ref: 'Ariely et al., 2009',
        },
        {
          title: 'Habit Stacking',
          desc: 'Anchoring new habits to existing routines hijacks neural pathways so new behaviors require less willpower.',
          ref: 'Clear, Atomic Habits, 2018',
        },
      ],
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
          desc: '"After X, I will Y" — chain habits together. Track streaks, set a pledge per missed day.',
          outcome: 'You build discipline automatically',
        },
        {
          title: 'Projects with a brainstorm canvas',
          desc: 'Dump raw ideas first. Move to "Locked In" once you\'re sure. Daily pulse keeps you accountable.',
          outcome: 'You ship instead of planning forever',
        },
        {
          title: 'Strait Score — your execution rating',
          desc: 'A single number that tracks your follow-through across every goal, habit, and task. Drop too low and you enter Redemption Mode. Earn achievements as you rebuild.',
          outcome: 'You face your real track record — and change it',
        },
        {
          title: 'Google Calendar sync',
          desc: 'Every goal and task deadline appears in your Google Calendar automatically. One less thing to switch between. (Premium)',
          outcome: 'Your whole life in one view',
        },
        {
          title: 'Real money pledged',
          desc: 'Set any amount. Miss the deadline and Stripe charges it automatically — to charity, app support, or your partners.',
          outcome: 'You take deadlines seriously',
        },
        {
          title: 'One-off tasks. Real pledges.',
          desc: 'No long-term commitment needed. Create a single task, set a deadline, pledge money on it — done or charged. "Finish the report by Friday or $20 goes to UNICEF."',
          outcome: 'You stop procrastinating on the things that matter most',
        },
        {
          title: 'Life Visions',
          desc: 'Start with who you want to become. Define your life vision and let instrait reverse-engineer it into today\'s goals and habits.',
          outcome: 'Your daily actions connect to something bigger',
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
          'Partners share in your forfeited pledges',
        ],
      },
      features: [
        {
          title: 'Public Commitments Feed',
          desc: 'Post goals publicly. Your followers can like, verify, or call you out as failed — adding a shame badge to your profile.',
        },
        {
          title: 'Leaderboards',
          desc: 'Compete on streak length, goals completed, and Strait Score. Three boards, updated in real time.',
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

    // ── Testimonials (E) ──
    testimonials: {
      label: 'Early users',
      h2: 'Real people.\nReal results.',
      items: [
        {
          quote: 'I\'ve tried every habit tracker out there. Nothing stuck until I put $50 on finishing my online course. Done in 3 weeks.',
          name: 'Martin K.',
          role: 'Beta tester · Prague',
        },
        {
          quote: 'The Strait Score is brutal in the best way. Watching my number drop after skipping the gym was the push I finally needed.',
          name: 'Sarah L.',
          role: 'Beta tester · London',
        },
        {
          quote: 'Finally an app that doesn\'t let you off the hook. Knowing the money goes to UNICEF if I quit — that changed everything.',
          name: 'Tomáš B.',
          role: 'Beta tester · Brno',
        },
      ],
    },

    // ── Comparison (F) ──
    comparison: {
      label: 'How we compare',
      h2: 'Built different.',
      sub: 'Most apps reward you for trying. instrait rewards you for doing.',
      features: [
        'Real money pledges',
        'Social accountability',
        'AI goal planning',
        'Reputation score',
        'Generous free tier',
        'Web + Mobile',
      ],
      apps: [
        { name: 'instrait', values: [true, true, true, true, true, true], highlight: true },
        { name: 'Beeminder', values: [true, false, false, false, false, true] },
        { name: 'Habitica', values: [false, true, false, false, true, true] },
        { name: 'Streaks', values: [false, false, false, false, false, false] },
      ],
      note: 'Based on publicly available feature lists. Last checked May 2025.',
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
          'Financial pledges on all items',
          'AI Goal Plan Generator',
          'Full Social Hub access',
          'Strait Score & achievements',
        ],
        btn: 'Start Free',
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

    // ── FAQ (I) ──
    faq: {
      label: 'FAQ',
      h2: 'Clear answers.',
      items: [
        {
          q: 'Is my money safe?',
          a: 'Yes. Payments are processed by Stripe (PCI DSS Level 1). instrait stores only a secure token — never your card number.',
        },
        {
          q: 'What happens if I fail a goal with a pledge?',
          a: 'The pledged amount is charged automatically to your card and sent where you chose: a global charity (UNICEF, WHO, Doctors Without Borders) or your accountability partner.',
        },
        {
          q: 'Can I pledge money on a one-off task, not just goals?',
          a: 'Yes. Standalone Tasks let you put money on any single thing — "Finish the report by Friday or $20 goes to UNICEF." No habit streak or long-term goal plan needed.',
        },
        {
          q: 'What is the Strait Score?',
          a: 'Your Strait Score is a reputation number that tracks your follow-through rate across all goals, habits, and tasks. Complete what you commit to and it rises. Miss deadlines and it drops. Fall too low and you enter Redemption Mode — a locked state until you prove yourself again. Completing goals also earns you achievements that are visible on your public profile.',
        },
        {
          q: 'How do Partner Rewards work?',
          a: 'Hit consistency milestones — streaks, completed goals, high Strait Score — and unlock real vouchers and discounts from fitness, wellness, and productivity brands. Partner Rewards is a Premium feature.',
        },
        {
          q: 'What is "Locked In" mode for Projects?',
          a: 'Projects start in brainstorm mode — free-form idea dumping with no consequences. Switch to Locked In when you\'re ready to commit: deadlines activate, pledges apply, and the project appears in your accountability dashboard.',
        },
        {
          q: 'Can I remove a pledge?',
          a: 'Pledges are intentionally hard to remove — that friction is the point. The commitment needs to feel real.',
        },
        {
          q: 'Are social features mandatory?',
          a: 'No. Keep goals fully private, share only with followers, or restrict to approved partners — your choice.',
        },
        {
          q: 'Who sees my goals?',
          a: 'You control visibility for every item: Private (only you), Followers (people you approve), or Partners (mutual accountability pairs). Nothing is public by default.',
        },
        {
          q: 'Do I need Premium to use pledges?',
          a: 'No. Financial pledges are included in the free plan. Premium unlocks unlimited items, advanced analytics, habit stacks, and Google Calendar Sync.',
        },
      ],
    },

    // ── CTA ──
    cta: {
      h2: 'Your goals deserve consequences.',
      sub: 'Join thousands building real discipline — one committed day at a time.',
      btnIos: 'iOS — Coming Soon',
      btnAndroidSoon: 'Google Play — Coming Soon',
      btnWeb: 'Launch Web App',
      fine: 'Free to start · Stripe-secured · Cancel anytime',
    },

    // ── Footer ──
    footer: {
      tagline: 'Execution through constraint.',
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
      madeWith: 'Built to keep you honest.',
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
      startWeb: 'Spustit Webovou Aplikaci',
    },

    hero: {
      badge: 'Webová aplikace online · Mobilní brzy',
      h1: 'Přestaň si dávat cíle.',
      h1accent: 'Začni je plnit.',
      sub: 'instrait uzavře tvé závazky bez možnosti úniku — založ finanční závazek, nastav přísný termín a provedení pod tlakem průlivu. Dostupné na webu dnes.',
      btnIos: 'iOS — Brzy k dispozici',
      btnAndroidSoon: 'Google Play — Brzy k dispozici',
      btnWeb: 'Spustit Webovou Aplikaci',
      fine: 'Zdarma · Bez platební karty · iOS & Android brzy k dispozici',
      trustPayments: 'Platby přes',
      trustSyncs: 'Synchronizuje s',
      trustForfeits: 'Propadá',
      screenLabels: [
        'Tvoje denní základna',
        'Návyky se skutečnými závazky',
        'Social Hub & hledání parťáka',
        'AI plán tvých cílů',
        'Strait Score & achievementy',
      ],
    },

    slogan: {
      prefix: 'Tvoje cíle tě nestojí',
      faded: 'nic.',
      suffix: 'To je ten problém.',
    },

    ecosystem: {
      label: 'Kompletní ekosystém',
      h2: 'Jeden systém.\nKaždé zařízení.',
      sub: 'Tvůj motor zodpovědnosti funguje všude — na počítači dnes, v kapse brzy.',
      web: {
        badge: '● Online teď',
        title: 'Webová aplikace',
        desc: 'Plnohodnotný zážitek v prohlížeči. Nastavuj cíle, sleduj návyky, spravuj projekty a drž peníze v závazku — z jakéhokoliv zařízení s prohlížečem.',
        cta: 'Otevřít webovou aplikaci',
        features: [
          'Kompletní správa cílů, návyků a projektů',
          'AI generátor plánů cílů',
          'Finanční závazky přes Stripe',
          'Social Hub & žebříčky',
        ],
      },
      mobile: {
        badge: 'Brzy k dispozici',
        title: 'iOS & Android',
        desc: 'Nativní mobilní zážitek s push notifikacemi, widgety a hlubokou integrací do OS. Vše z webové aplikace, připravené pro tvoji kapsu.',
        cta: 'Notifikovat mě',
        features: [
          'Push notifikace pro termíny',
          'Widgety na domovskou obrazovku',
          'Offline přístup',
          'Synchronizace s Google Kalendářem',
        ],
      },
    },

    how: {
      label: 'Mechanismus',
      h2: 'Tři kroky k lepšímu sobě.',
      steps: [
        {
          title: 'Definuj cíl',
          body: 'Vytvoř Cíl, Návyk, Projekt nebo jednorázový Úkol. Nech AI rozložit ho na milníky a denní kroky automaticky.',
        },
        {
          title: 'Založ závazek',
          body: 'Dej do závazku skutečné peníze. Propásneš-li termín, bude stržena — bez výmluv, bez prodloužení.',
        },
        {
          title: 'Projdi průlivem',
          body: 'Jakmile jsi zavázán, cesty zpět jsou uzavřeny. Splň a tvůj Strait Score poroste. Selži a tvůj závazek podpoří něco smysluplného.',
        },
      ],
      science: 'Averze ke ztrátě — lidé bojují ~2× silněji, aby nepřišli o 50 $, než aby je získali. Na tom jsme postavili celou aplikaci.',
    },

    sciencePillars: {
      label: 'Věda za aplikací',
      h2: 'Proč instrait funguje,\nkdyž vůle nestačí.',
      pillars: [
        {
          title: 'Averze ke ztrátě',
          desc: 'Lidé bojují ~2× silněji, aby nepřišli o 50 $, než aby je získali. Každý závazek aktivuje tento pevně zapojený obvod.',
          ref: 'Kahneman & Tversky, 1979',
        },
        {
          title: 'Závazkové nástroje',
          desc: 'Předběžný závazek budoucího já odstraňuje pokušení vzdát se ve chvíli, kdy je to těžké.',
          ref: 'Thaler & Benartzi, 2004',
        },
        {
          title: 'Sociální zodpovědnost',
          desc: 'Veřejné cíle s reálnými důsledky přidávají druhý motor motivace — tvoji reputaci a vztahy.',
          ref: 'Ariely et al., 2009',
        },
        {
          title: 'Řetězení návyků',
          desc: 'Připojení nových návyků k existujícím rutinám využívá nervové dráhy, takže nové chování vyžaduje méně vůle.',
          ref: 'Clear, Atomic Habits, 2018',
        },
      ],
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
          desc: '"Po X udělám Y" — propoj návyky dohromady. Sleduj série, nastav závazek za každý promarněný den.',
          outcome: 'Disciplínu si vybuduješ automaticky',
        },
        {
          title: 'Projekty s brainstorming plátnem',
          desc: 'Nejdřív vyhoď hrubé nápady. Přejdi do fáze „Zamčeno" jakmile si jistý. Denní pulz tě udržuje zodpovědným.',
          outcome: 'Spustíš to místo věčného plánování',
        },
        {
          title: 'Strait Score — tvoje skóre plnění',
          desc: 'Jediné číslo, které sleduje plnění přes všechny cíle, návyky a úkoly. Klesneš-li příliš nízko, vstoupíš do Redemption Mode. Plněním cílů sbíráš achievementy.',
          outcome: 'Čelíš skutečnému záznamu — a měníš ho',
        },
        {
          title: 'Synchronizace s Google Kalendářem',
          desc: 'Každý termín cíle a úkolu se automaticky zobrazí v tvém Google Kalendáři. O jednu věc míň přepínat. (Premium)',
          outcome: 'Celý tvůj život na jednom místě',
        },
        {
          title: 'Skutečné peníze v závazku',
          desc: 'Nastav libovolnou částku. Propásneš termín a Stripe ji automaticky strhne — charitě, podpoře aplikace nebo tvým partnerům.',
          outcome: 'Termíny začneš brát vážně',
        },
        {
          title: 'Jednorázové úkoly. Skutečné závazky.',
          desc: 'Žádný dlouhodobý závazek není potřeba. Vytvoř jednorázový úkol, nastav termín, vlož na něj závazek — splněno nebo strženo. „Dodám zprávu do pátku, nebo jde 500 Kč UNICEF."',
          outcome: 'Přestaneš odkládat věci, na kterých nejvíce záleží',
        },
        {
          title: 'Životní vize',
          desc: 'Začni tím, kým chceš být. Definuj svoji životní vizi a nech instrait pomoci rozložit ji do dnešních cílů a návyků.',
          outcome: 'Tvoje denní akce se propojí s něčím větším',
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
          'Partneři se podílejí na tvých propadlých závazcích',
        ],
      },
      features: [
        {
          title: 'Veřejný feed závazků',
          desc: 'Zveřejni cíle. Tvoji sledující mohou lajkovat, ověřit nebo tě označit jako selhávajícího — a přidat ti odznak hanby na profil.',
        },
        {
          title: 'Žebříčky',
          desc: 'Soutěž v délce série, splněných cílech a Strait Score. Tři žebříčky, aktualizované v reálném čase.',
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

    testimonials: {
      label: 'První uživatelé',
      h2: 'Skuteční lidé.\nSkutečné výsledky.',
      items: [
        {
          quote: 'Vyzkoušel jsem každou aplikaci pro návyky. Nic nezabralo, dokud jsem nedal 50 $ na dokončení kurzu. Hotovo za 3 týdny.',
          name: 'Martin K.',
          role: 'Beta tester · Praha',
        },
        {
          quote: 'Strait Score je brutální tím nejlepším způsobem. Sledovat, jak mi číslo padá po vynechaném tréninku, byl impulz, který jsem konečně potřeboval.',
          name: 'Sarah L.',
          role: 'Beta tester · Londýn',
        },
        {
          quote: 'Konečně aplikace, která tě nenechá uniknout. Vědět, že peníze jdou na UNICEF, pokud přestanu — to změnilo vše.',
          name: 'Tomáš B.',
          role: 'Beta tester · Brno',
        },
      ],
    },

    comparison: {
      label: 'Porovnání',
      h2: 'Jinak stavěno.',
      sub: 'Většina aplikací tě odměňuje za snahu. instrait tě odměňuje za výsledky.',
      features: [
        'Závazky skutečnými penězi',
        'Sociální zodpovědnost',
        'AI plánování cílů',
        'Skóre reputace',
        'Štědrý bezplatný tarif',
        'Web + Mobilní',
      ],
      apps: [
        { name: 'instrait', values: [true, true, true, true, true, true], highlight: true },
        { name: 'Beeminder', values: [true, false, false, false, false, true] },
        { name: 'Habitica', values: [false, true, false, false, true, true] },
        { name: 'Streaks', values: [false, false, false, false, false, false] },
      ],
      note: 'Na základě veřejně dostupných informací o funkcích. Naposledy ověřeno: květen 2025.',
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
          'Finanční závazky na všechny položky',
          'AI generátor plánů cílů',
          'Plný přístup k Social Hubu',
          'Strait Score & achievementy',
        ],
        btn: 'Začít zdarma',
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
          a: 'Ano. Platby zpracovává Stripe (PCI DSS Level 1). instrait ukládá pouze bezpečný token — nikdy číslo tvé karty.',
        },
        {
          q: 'Co se stane, když nesplním cíl se závazkem?',
          a: 'Vložená částka závazku je automaticky stržena z tvé karty a odeslána tam, kam sis zvolil: globální charita (UNICEF, WHO, Lékaři bez hranic) nebo tvůj partner zodpovědnosti.',
        },
        {
          q: 'Mohu vložit závazek na jednorázový úkol, ne jen na cíle?',
          a: 'Ano. Samostatné úkoly ti umožňují vložit peníze na cokoliv — „Dodám zprávu do pátku, nebo jde 500 Kč UNICEF." Nepotřebuješ žádnou sérii návyků ani dlouhodobý plán cílů.',
        },
        {
          q: 'Co je Strait Score?',
          a: 'Strait Score je číslo reputace, které sleduje míru plnění tvých cílů, návyků a úkolů. Plni závazky a roste. Propásni termíny a klesá. Klesneš-li příliš nízko, vstoupíš do Redemption Mode — zamčeného stavu, dokud se neprokážeš. Plněním cílů také získáváš achievementy viditelné na tvém veřejném profilu.',
        },
        {
          q: 'Jak fungují Partnerské odměny?',
          a: 'Dosáhni milníků konzistence — série, splněné cíle, vysoké Strait Score — a odemkni poukazy a slevy od fitness, wellness a produktivitních značek. Partnerské odměny jsou Premium funkce.',
        },
        {
          q: 'Co je fáze „Zamčeno" u Projektů?',
          a: 'Projekty začínají v brainstorming módu — volné vyhazování nápadů bez důsledků. Přepni do „Zamčeno", když jsi připravený se zavázat: aktivují se termíny, závazky platí a projekt se zobrazí v tvém dashboardu zodpovědnosti.',
        },
        {
          q: 'Mohu závazek odstranit?',
          a: 'Závazky jsou záměrně těžko odstranitelné — tření je smyslem. Závazek musí být skutečný.',
        },
        {
          q: 'Jsou sociální funkce povinné?',
          a: 'Ne. Udržuj cíle plně soukromé, sdílej jen se sledujícími nebo omez přístup jen na schválené partnery — tvoje volba.',
        },
        {
          q: 'Kdo vidí moje cíle?',
          a: 'Viditelnost kontroluješ pro každou položku: Soukromé (jen ty), Sledující (lidé, které schválíš), nebo Partneři (vzájemné páry zodpovědnosti). Nic není veřejné ve výchozím nastavení.',
        },
        {
          q: 'Potřebuji Premium pro závazky?',
          a: 'Ne. Finanční závazky jsou součástí bezplatného plánu. Premium odemyká neomezené položky, pokročilé analytiky, návykové řetězy a synchronizaci s Google Kalendářem.',
        },
      ],
    },

    cta: {
      h2: 'Tvoje cíle si zaslouží důsledky.',
      sub: 'Přidej se k tisícům lidí budujících skutečnou disciplínu — den po dni.',
      btnIos: 'iOS — Brzy k dispozici',
      btnAndroidSoon: 'Google Play — Brzy k dispozici',
      btnWeb: 'Spustit Webovou Aplikaci',
      fine: 'Zdarma · Zabezpečeno Stripe · Zrušení kdykoliv',
    },

    footer: {
      tagline: 'Provedení skrze omezení.',
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
      madeWith: 'Postaveno, aby tě udrželo čestným.',
    },
  },
};

export default translations;
