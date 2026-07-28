/* ============================================================================
   POLICY PREFERENCES LAB — SITE DATA
   ============================================================================
   This file drives the whole site. Edit here and everything updates:
   the interactive map, the stats in the hero, the featured-research cards,
   and the full catalogue on research.html.

   HOW TO ADD A STUDY
   ------------------
   Copy any block below and change the fields:
     id        unique slug, no spaces
     title     full paper title
     authors   author string as you want it displayed
     outlet    journal or series ("Journal of Development Economics",
               "World Bank Policy Research Working Paper", ...)
     year      display year (number)
     status    "publication" | "working-paper" | "in-progress"
     themes    one or two from THEMES below
     url       link to the paper, or null if none yet
     countries array of ISO3 codes where data was collected (drives the map).
               Leave [] for global/desk studies — they appear in the
               catalogue but not on the map.
     sample    short line about the data, or null
     featured  true to show on the homepage (aim for 5–6 featured)

   ISO3 codes must match the map. Common ones used here:
   AGO Angola · ARG Argentina · AUS Australia · BGD Bangladesh · BOL Bolivia
   BRA Brazil · COL Colombia · ECU Ecuador · EGY Egypt · ESP Spain · FJI Fiji
   GBR United Kingdom · GHA Ghana · IDN Indonesia · IND India · JOR Jordan
   KAZ Kazakhstan · KEN Kenya · LKA Sri Lanka · MEX Mexico · NGA Nigeria
   NLD Netherlands · PAK Pakistan · PNG Papua New Guinea · TZA Tanzania
   USA United States · VNM Vietnam · ZAF South Africa · ZMB Zambia
   ========================================================================= */

const LAB = {

  // Shown in the hero. Studies and countries are counted automatically;
  // this figure is set by hand — update as new rounds are fielded.
  respondentsLabel: "200,000+",

  // Hero stat labels shown on the homepage (override the auto-computed counts).
  stats: { countries: "40+", respondents: "250,000+", studies: "23+" },

  themes: ["Taxes", "Redistribution & inequality", "Subsidies", "Poverty & wellbeing"],

  // Country display names for chips and the map panel (ISO3 → name).
  countryNames: {
    AGO: "Angola", ARG: "Argentina", AUS: "Australia", BGD: "Bangladesh",
    BOL: "Bolivia", BRA: "Brazil", COL: "Colombia", DNK: "Denmark", ECU: "Ecuador",
    EGY: "Egypt", ESP: "Spain", FJI: "Fiji", FRA: "France",
    GBR: "United Kingdom", GHA: "Ghana", IDN: "Indonesia", IND: "India",
    JOR: "Jordan", JPN: "Japan", KAZ: "Kazakhstan", KEN: "Kenya", KGZ: "Kyrgyz Republic",
    LKA: "Sri Lanka", MAR: "Morocco", MEX: "Mexico", MNG: "Mongolia",
    NGA: "Nigeria", NLD: "Netherlands", NZL: "New Zealand", PAK: "Pakistan",
    PHL: "Philippines", PNG: "Papua New Guinea", SLB: "Solomon Islands", SOM: "Somalia", SWE: "Sweden", TZA: "Tanzania",
    USA: "United States", UZB: "Uzbekistan", VNM: "Vietnam", ZAF: "South Africa",
    ZMB: "Zambia"
  },

  // Homepage news strip — keep to the 3–4 most recent items.
  news: [
    {
      date: "2026",
      text: "“Attitudes towards reducing fossil fuel subsidies” is published in the Journal of Development Economics.",
      url: "https://www.sciencedirect.com/science/article/pii/S0304387825001634"
    },
    {
      date: "2026",
      text: "The Policy Preferences Lab launches — team, openings, and data resources to be announced here.",
      url: null
    },
    {
      date: "2025",
      text: "Christopher Hoy is awarded the Sir Tony Atkinson Prize by the Society for the Study of Economic Inequality.",
      url: null
    }
  ],

  studies: [

    /* ---------------- Peer-reviewed publications ---------------- */

    {
      id: "fossil-fuel-subsidies",
      blogs: [
        { label: "Devpolicy Blog", year: 2026, title: "How households cope and what they want when energy prices rise", url: "https://devpolicy.org/how-households-cope-and-what-they-want-when-energy-prices-rise-20260622/" },
        { label: "World Bank Blogs", year: 2024, title: "Stop subsidizing asteroids: How to persuade people that governments should stop subsidizing fossil fuels", url: "https://blogs.worldbank.org/en/developmenttalk/stop-subsidizing-asteroids--how-to-persuade-people-that-governme" },
        { label: "World Bank Blogs", year: 2023, title: "Building support for energy subsidy reform: what will it take?", url: "https://blogs.worldbank.org/en/energy/building-support-energy-subsidy-reform-what-will-it-take" },
      ],
      featuredRank: 1,
      finding: "Public support for eliminating fossil fuel subsidies is very high if the money saved is used on alternative policies, such as improved public services.",
      title: "Attitudes towards reducing fossil fuel subsidies: Evidence across 12 middle-income countries",
      authors: "Christopher Hoy, Yeon Soo Kim, Minh Cong Nguyen, Mariano Sosa & Sailesh Tiwari",
      outlet: "Journal of Development Economics",
      year: 2026,
      status: "publication",
      themes: ["Subsidies"],
      url: "https://www.sciencedirect.com/science/article/pii/S0304387825001634",
      countries: ["AGO","ARG","BGD","BOL","ECU","EGY","GHA","IDN","KAZ","NGA","PAK","VNM"],
      sample: "Randomized survey experiment, ~37,000 respondents",
      featured: true
    },
    {
      id: "progressivity-tax-morale",
      blogs: [
        { label: "VoxDev", year: 2025, title: "How progressive taxation affects tax compliance in developing countries", url: "https://voxdev.org/topic/public-economics/how-progressive-taxation-affects-tax-compliance-developing-countries" },
        { label: "World Bank Blogs", year: 2022, title: "Why does the progressivity of taxes matter?", url: "https://blogs.worldbank.org/en/governance/why-does-progressivity-taxes-matter" },
      ],
      featuredRank: 5,
      finding: "People are more willing to pay tax when the tax system is more progressive, and less willing when it is less progressive.",
      title: "How does progressivity impact tax morale? Experimental evidence across developing countries",
      authors: "Christopher Hoy",
      outlet: "Journal of Development Economics",
      year: 2025,
      status: "publication",
      themes: ["Taxes", "Redistribution & inequality"],
      url: "https://www.sciencedirect.com/science/article/pii/S0304387824001470",
      countries: ["COL","GHA","IDN","JOR","LKA","MEX","TZA","ZAF"],
      sample: "Randomized survey experiment, 30,000+ respondents",
      featured: true
    },
    {
      id: "vaccines-zambia",
      blogs: [
        { label: "World Bank Blogs", year: 2022, title: "Three things we learnt about COVID-19 vaccine acceptance and intra-household dynamics in Zambia", url: "https://blogs.worldbank.org/en/developmenttalk/three-things-we-learnt-about-covid-19-vaccine-acceptance-and-intra-household" },
      ],
      title: "Intra-household dynamics and attitudes towards vaccines: Experimental and survey evidence from Zambia",
      authors: "Christopher Hoy, Rajalakshmi Kanagavel & Corey Cameron",
      outlet: "Review of Economics of the Household",
      year: 2025,
      status: "publication",
      themes: ["Poverty & wellbeing"],
      url: "https://doi.org/10.1007/s11150-025-09768-3",
      countries: ["ZMB"],
      sample: null,
      featured: false
    },
    {
      id: "false-divide",
      blogs: [
        { label: "Austaxpolicy", year: 2019, title: "[Budget Forum 2019] Coalition and Labor Voters Share Policy Priorities When They Are Informed About Inequality", url: "https://www.austaxpolicy.com/budget-forum-2019-coalition-labor-voters-share-policy-priorities-informed-inequality/" },
      ],
      title: "A false divide? Providing information about inequality aligns preferences for redistribution between right- and left-wing voters",
      authors: "Christopher Hoy, Russell Toth & Nurina Merdikawati",
      outlet: "Journal of Economic Inequality",
      year: 2024,
      status: "publication",
      themes: ["Redistribution & inequality"],
      url: "https://doi.org/10.1007/s10888-023-09609-2",
      countries: ["AUS"],
      sample: null,
      featured: false
    },
    {
      id: "indonesia-inequality-voting",
      blogs: [
        { label: "FKP Indonesia", year: 2018, title: "FKP at Article 33: How do Indonesians' perception of inequality shape their support for redistribution?", url: "https://www.fkpindonesia.org/summary-report/fkp-at-article-33-how-do-indonesians-perception-of-inequality-shape-their-support-for-redistribution" },
      ],
      title: "How does information about inequality shape voting intentions and preferences for redistribution? Evidence from a randomized survey experiment in Indonesia",
      authors: "Christopher Hoy, Russell Toth & Nurina Merdikawati",
      outlet: "Journal of Behavioral and Experimental Economics",
      year: 2024,
      status: "publication",
      themes: ["Redistribution & inequality"],
      url: "https://www.sciencedirect.com/science/article/pii/S2214804324001113",
      countries: ["IDN"],
      sample: null,
      featured: false
    },
    {
      id: "aid-popularity",
      blogs: [
        { label: "Devpolicy Blog", year: 2019, title: "What's more effective in raising support for aid, kindness or the national interest?", url: "https://www.devpolicy.org/whats-more-effective-in-raising-support-for-aid-20190110/" },
      ],
      title: "Helping us or helping them? What makes foreign aid popular with donor publics?",
      authors: "Terence Wood & Christopher Hoy",
      outlet: "Economic Development and Cultural Change",
      year: 2022,
      status: "publication",
      themes: ["Redistribution & inequality"],
      url: "https://doi.org/10.1086/713930",
      countries: ["AUS"],
      sample: null,
      featured: false
    },
    {
      id: "meritocracy",
      title: "How information about economic inequality impacts belief in meritocracy: Evidence from a randomized survey experiment across Australia, Indonesia and Mexico",
      authors: "Jonathan J. B. Mijs & Christopher Hoy",
      outlet: "Social Problems",
      year: 2022,
      status: "publication",
      themes: ["Redistribution & inequality"],
      url: "https://doi.org/10.1093/socpro/spaa059",
      countries: ["AUS","IDN","MEX"],
      sample: null,
      featured: false
    },
    {
      id: "vaccine-hesitancy",
      blogs: [
        { label: "World Bank Blogs", year: 2021, title: "The drivers of COVID-19 vaccine hesitancy and how to address them: Evidence from Papua New Guinea", url: "https://blogs.worldbank.org/en/developmenttalk/drivers-covid-19-vaccine-hesitancy-and-how-address-them-evidence-papua-new-guinea" },
      ],
      title: "Addressing vaccine hesitancy in developing countries: Survey and experimental evidence",
      authors: "Christopher Hoy, Terence Wood & Ellen Moscoe",
      outlet: "PLOS ONE",
      year: 2022,
      status: "publication",
      themes: ["Poverty & wellbeing"],
      url: "https://doi.org/10.1371/journal.pone.0277493",
      countries: ["PNG"],
      sample: null,
      featured: false
    },
    {
      id: "redistribution-ten",
      blogs: [
        { label: "AEA Research Highlights", year: 2021, title: "Against their financial interests (Featured Chart)", url: "https://www.aeaweb.org/research/charts/redistribution-support-low-income" },
        { label: "Devpolicy Blog", year: 2019, title: "Why are relatively poor people not more supportive of redistribution?", url: "https://devpolicy.org/why-are-relatively-poor-people-not-more-supportive-of-redistribution-20190122/" },
        { label: "From Poverty to Power", year: 2019, title: "No Matter Where You Live, the World is More Unequal Than You Realise, according to new research", url: "https://frompoverty.oxfam.org.uk/no-matter-where-you-live-the-world-is-more-unequal-than-you-realise-according-to-new-research/" },
        { label: "World Bank Blogs", year: 2018, title: "Why are relatively poor people not more supportive of redistribution? Guest Post by Christopher Hoy", url: "https://blogs.worldbank.org/en/impactevaluations/why-are-relatively-poor-people-not-more-supportive-redistribution-guest-post-christopher-hoy" },
      ],
      featuredRank: 3,
      finding: "Almost everyone thinks they are middle-class, but this doesn’t change their support for redistributive policies.",
      title: "Why are relatively poor people not more supportive of redistribution? Evidence from a randomized survey experiment across ten countries",
      authors: "Christopher Hoy & Franziska Mager",
      outlet: "American Economic Journal: Economic Policy",
      year: 2021,
      rank: 1,
      status: "publication",
      themes: ["Redistribution & inequality"],
      url: "https://doi.org/10.1257/pol.20190276",
      countries: ["AUS", "GBR", "USA", "IND", "MEX", "MAR", "NLD", "NGA", "ZAF", "ESP"],
      sample: "Randomized survey experiment, 30,000+ respondents",
      featured: true
    },
    {
      id: "american-exceptionalism",
      blogs: [
        { label: "Social Science Space", year: 2022, title: "Connecting Academia and Civil Society: Walking an Impact Tightrope", url: "https://www.socialsciencespace.com/2022/03/connecting-academia-and-civil-society-walking-an-impact-tightrope/" },
      ],
      title: "American exceptionalism? Differences in the elasticity of preferences for redistribution between the United States and Western Europe",
      authors: "Christopher Hoy & Franziska Mager",
      outlet: "Journal of Economic Behavior and Organization",
      year: 2021,
      status: "publication",
      themes: ["Redistribution & inequality"],
      url: "https://ideas.repec.org/a/eee/jeborg/v192y2021icp518-540.html",
      countries: ["USA","GBR","NLD","ESP","DNK"],
      sample: null,
      featured: false
    },
    {
      id: "geostrategic-aid",
      blogs: [
        { label: "Devpolicy Blog", year: 2019, title: "Does Chinese aid make Australians more generous?", url: "https://devpolicy.org/does-chinese-aid-make-australians-more-generous-20190814/" },
        { label: "Lowy Institute", year: 2019, title: "Does Chinese aid make Australians more generous?", url: "https://www.lowyinstitute.org/the-interpreter/does-chinese-aid-make-australians-more-generous" },
      ],
      title: "The effect of geostrategic competition on public attitudes to aid",
      authors: "Terence Wood, Christopher Hoy & Jonathan Pryke",
      outlet: "Journal of Experimental Political Science",
      year: 2021,
      status: "publication",
      themes: ["Redistribution & inequality"],
      url: "https://doi.org/10.1017/XPS.2020.27",
      countries: ["AUS","NZL"],
      sample: null,
      featured: false
    },

    /* ---------------- Working papers & work in progress ---------------- */

    {
      id: "horizontal-equity",
      blogs: [
        { label: "World Bank Blogs", year: 2026, title: "The hidden unfairness in your tax system and how to fix it", url: "https://blogs.worldbank.org/en/developmenttalk/the-hidden-unfairness-in-your-tax-system-and-how-to-fix-it" },
      ],
      featuredRank: 2,
      finding: "Citizens are concerned about the unfair tax burden on employees compared to the self-employed, but this doesn’t impact their policy preferences.",
      title: "Horizontal equity of taxation: Citizen beliefs and policy preferences",
      authors: "Pierre Bachas, Christopher Hoy, Anders Jensen & Mahvish Shaukat",
      outlet: "World Bank Policy Research Working Paper",
      year: 2026,
      rank: 1,
      status: "working-paper",
      themes: ["Taxes", "Redistribution & inequality"],
      url: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099718004292611926",
      countries: ["PAK", "COL", "IND", "IDN", "NGA", "PHL"],
      sample: null,
      featured: true
    },
    {
      id: "poverty-mortality",
      featuredRank: 4,
      finding: "Most people would prefer to live considerably shorter lives with higher incomes, and standard cost-benefit analyses miss this.",
      title: "For shorter or poorer: Attitudes toward the trade-off between poverty and mortality",
      authors: "Benoit Decerf, Christopher Hoy & Olivier Sterck",
      outlet: "IFS Working Paper",
      year: 2026,
      rank: 2,
      status: "working-paper",
      themes: ["Poverty & wellbeing"],
      url: "https://ifs.org.uk/publications/shorter-or-poorer-attitudes-toward-trade-between-poverty-and-mortality",
      countries: ["COL", "IND", "IDN", "NGA", "ZAF", "GBR", "USA"],
      sample: null,
      featured: true
    },
    {
      id: "managers-ai",
      title: "Managers as gatekeepers in the age of AI",
      authors: "Christopher Hoy, Yong Suk Lee, Cassandra Merritt & Jacob Dominski",
      outlet: "IFS Working Paper",
      year: 2026,
      rank: 5,
      status: "working-paper",
      themes: ["Redistribution & inequality"],
      url: "https://ifs.org.uk/publications/managers-gatekeepers-age-ai",
      countries: ["USA", "GBR"],
      sample: null,
      featured: false
    },
    {
      id: "fighting-poverty",
      title: "Attitudes toward poverty reduction programs around the world",
      authors: "Edward Bond, François Gerard, Christopher Hoy & Ben Waltmann",
      outlet: "Registered report, in progress",
      year: 2026,
      rank: 4,
      status: "in-progress",
      themes: ["Poverty & wellbeing", "Redistribution & inequality"],
      url: null,
      // Pilot countries to date — update as the full study is fielded
      countries: ["BRA","COL","EGY","IDN","IND","KEN","NGA","ZAF"],
      sample: "Multi-country registered report",
      featured: false
    },
    {
      id: "vat-exemptions",
      title: "Informality, incidence and pass-through of VAT exemptions",
      authors: "Christopher Hoy, Matias Strehl-Pessina & Ruggero Doino",
      outlet: "Working paper",
      year: 2026,
      status: "working-paper",
      themes: ["Taxes", "Subsidies"],
      url: null,
      countries: ["PNG"],
      sample: "Household survey, store-level price data and administrative records",
      featured: false
    },
    {
      id: "econ-reforms",
      blogs: [
        { label: "World Bank Blogs", year: 2025, title: "Design, more than cost drives public support for economic reforms", url: "https://blogs.worldbank.org/en/developmenttalk/design--more-than-cost-drives-public-support-for-economic-reform" },
      ],
      title: "Public preferences for economic reforms",
      authors: "Christopher Hoy, Yeon Soo Kim, Saad Imtiaz, Ana Maria Rojas Mendez, Moritz Meyer, Gustavo Canavire Bacarreza, Lydia Kim, William Seitz, Imane Helmy, Ikuko Uochi, Sering Touray, Juni Singh, Bambang Suharnoko Sjahrir, Utz Pape, Alan Fuchs, Trang Nguyen, Defne Gencer, Min A Lee, Akiko Sagesaka & Ivette Contreras",
      outlet: "World Bank Policy Research Working Paper",
      year: 2025,
      rank: 3,
      status: "working-paper",
      themes: ["Subsidies", "Taxes"],
      url: "https://ideas.repec.org/p/wbk/wbrwps/11233.html",
      countries: ["EGY", "KGZ", "IDN", "MNG", "NGA", "UZB"],
      sample: null,
      featured: false
    },
    {
      id: "simplified-tax",
      title: "Trade-offs in the design of simplified tax regimes",
      authors: "Christopher Hoy, Thiago Scot, Alex Oguso, Anna Custers, Daniel Zalo, Ruggero Doino, Jonathan Karver & Nicolas Orgeira Pillai",
      outlet: "World Bank Policy Research Working Paper",
      year: 2025,
      status: "working-paper",
      themes: ["Taxes"],
      url: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099529509162440365",
      countries: ["KEN"],
      sample: null,
      featured: false
    },
    {
      id: "slb-hfps",
      title: "Solomon Islands High Frequency Phone Survey on COVID-19",
      authors: "World Bank & UNICEF",
      outlet: "World Bank & UNICEF report",
      year: 2022,
      status: "report",
      themes: ["Poverty & wellbeing"],
      url: "https://openknowledge.worldbank.org/entities/publication/4178af52-02c7-5de6-973c-eecbb9050e89",
      countries: ["SLB"],
      sample: null,
      featured: false
    },
    {
      id: "tanzania-taxman",
      title: "Lying to the taxman or accepting a helping hand? Evidence from a novel experiment on SMEs in Tanzania",
      authors: "Revocatus Paul, Ephraim Mdee, Massaga Fimbo, Jonathan Karver, Zain Chaudhry & Christopher Hoy",
      outlet: "World Bank Policy Research Working Paper",
      year: 2025,
      status: "working-paper",
      themes: ["Taxes"],
      url: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099358002102524493",
      countries: ["TZA"],
      sample: null,
      featured: false
    },
    {
      id: "som-social-contract",
      title: "Toward building Somalia\u2019s social contract: State affordability, revenue mobilization, and service delivery in a nascent federal state",
      authors: "World Bank",
      outlet: "World Bank report",
      year: 2024,
      status: "report",
      themes: ["Taxes"],
      url: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099111424062026744",
      countries: ["SOM"],
      sample: null,
      featured: false
    },
    {
      id: "polarization",
      blogs: [
        { label: "The Conversation", year: 2026, title: "Real wages have gone backwards. Even earning $100,000 isn't what it used to be", url: "https://theconversation.com/real-wages-have-gone-backwards-even-earning-100-000-isnt-what-it-used-to-be-276169" },
        { label: "LSE Inequalities", year: 2025, title: "Revealing the wage gap makes far-right voters much more supportive of redistribution", url: "https://blogs.lse.ac.uk/inequalities/2025/10/08/far-right-voters-and-support-for-redistribution/" },
        { label: "Inequality.org", year: 2025, title: "When Far-Right Voters Learn Wage Inequality Facts, Their Support for Policy Solutions Jumps", url: "https://inequality.org/article/far-right-voters-wage-inequality/" },
      ],
      featuredRank: 6,
      finding: "Accurate information about wage inequality increases support for redistribution among far-right voters.",
      title: "Political polarization, wage inequality and preferences for redistribution",
      authors: "Christopher Hoy, Lionel Page, Catherine Eckel, Philip Grossman & Daniel Goldstein",
      outlet: "Revise & resubmit, Journal of Economic Behavior and Organization",
      year: 2025,
      status: "publication",
      themes: ["Redistribution & inequality"],
      url: "https://ideas.repec.org/p/ifs/ifsewp/25-36.html",
      countries: ["USA", "GBR", "AUS", "FRA", "SWE", "JPN"],
      sample: null,
      featured: true
    },
    {
      id: "indonesia-tax-evasion",
      blogs: [
        { label: "Devpolicy Blog", year: 2024, title: "Revealing the depth and breadth of tax evasion in Indonesia", url: "https://devpolicy.org/revealing-the-depth-and-breadth-of-tax-evasion-in-indonesia-20241010/" },
        { label: "VoxDev", year: 2024, title: "Revealing tax evasion by firms", url: "https://voxdev.org/topic/public-economics/revealing-tax-evasion-firms" },
      ],
      title: "Revealing tax evasion: Experimental evidence from a nationally representative survey of Indonesian firms",
      authors: "Christopher Hoy, Filip Jolevski & Anthony Obeyesekere",
      outlet: "Revise & resubmit, Journal of Economic Behavior and Organization",
      year: 2025,
      status: "publication",
      themes: ["Taxes"],
      url: "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099358407222411531/idu18ac8f51d1c91e14f751936b1e28e9f364a0b",
      countries: ["IDN"],
      sample: "Double-list experiment, nationally representative firm survey",
      featured: false
    }
  ]
};
