// Wolf Trades Hall of Fame — single source of truth.
// Used by HallOfFameCarousel on /results, /, and /wolfpack.
//
// Photo policy: `photo: null` renders an initials fallback card. As Roland
// drops headshots into /public/images/proof/, swap null → path here.
//
// Story policy: real, verifiable copy only. No fake urgency, no guru
// language. Stories carry over verbatim from the prior /results inline
// array unless flagged DRAFT (Dom, Huddie, John, Phil, Mike) — those
// require Roland's approval before publish.

export interface HallOfFameMember {
  /** Full display name */
  name: string;
  /** 2-letter fallback shown when photo is null */
  initials: string;
  /** Path under /public, or null if no photo yet */
  photo: string | null;
  /** Eyebrow label above the stat (e.g. "Breakout Trader") */
  label: string;
  /** Headline number (e.g. "$20M+", "Six figures") */
  stat: string;
  /** Sub-line under stat (e.g. "career profits") */
  substat: string;
  /** 2-3 sentence story */
  story: string;
  /** Era pill — currently always "Pack Alumni" */
  era: string;
}

export const HALL_OF_FAME: ReadonlyArray<HallOfFameMember> = [
  {
    name: "Jack Kellogg",
    initials: "JK",
    photo: "/images/proof/jack-over-20mil.jpg",
    label: "Breakout Trader",
    stat: "$20M+",
    substat: "career profits",
    story:
      "Jack represents what happens when a trader stops chasing and builds real conviction around a process. He studied the environment, refined his edge, and scaled it.",
    era: "Pack Alumni",
  },
  {
    name: "Brian @wareagletrader",
    initials: "BW",
    photo: null,
    label: "Eight-Figure Year",
    stat: "$10M+",
    substat: "in 2024",
    story:
      "Brian's results reflect discipline and structure at scale. He built a process he could trust, then executed consistently when the opportunity was there.",
    era: "Pack Alumni",
  },
  {
    name: "Suragh",
    initials: "SU",
    photo: "/images/proof/suragh-first-millionaire.jpg",
    label: "First Millionaire Student",
    stat: "$1M+",
    substat: "documented",
    story:
      "Suragh became Roland's first documented millionaire student — proof that the process, applied consistently, produces life-changing results.",
    era: "Pack Alumni",
  },
  {
    name: "Aaron",
    initials: "AA",
    photo: "/images/proof/aaron-1-2-mil.jpg",
    label: "Seven-Figure Track",
    stat: "$1.2M+",
    substat: "and growing",
    story:
      "Aaron's growth came from tightening execution and focusing on what actually works. He moved from inconsistency to a defined process.",
    era: "Pack Alumni",
  },
  {
    name: "Brandon Hanna",
    initials: "BH",
    photo: "/images/proof/brandon-approaching-1mil.jpg",
    label: "Approaching Seven Figures",
    stat: "~$1M",
    substat: "and rising",
    story:
      "Brandon's trajectory reflects what happens when a trader locks into a process and stays there long enough for it to compound.",
    era: "Pack Alumni",
  },
  {
    name: "Dom",
    initials: "DO",
    photo: null,
    label: "Breakout Trader",
    stat: "Seven figures",
    substat: "career profits",
    // DRAFT — Roland approval pending.
    story:
      "Dom is a co-founder of Clover Trading and one of the original Pack members. Seven figures earned through breakout setups and disciplined execution since the early days.",
    era: "Pack Alumni",
  },
  {
    name: "Huddie",
    initials: "MH",
    photo: "/images/proof/huddie-7-figures.jpg",
    label: "Seven-Figure Trader",
    stat: "Seven figures",
    substat: "documented",
    // DRAFT — Roland approval pending.
    story:
      "Co-founder of Clover Trading. Huddie's path is a process story — disciplined entries, real risk management, and steady progression to seven figures inside the Pack.",
    era: "Pack Alumni",
  },
  {
    name: "John",
    initials: "JO",
    photo: null,
    label: "Seven-Figure Club",
    stat: "Seven figures",
    substat: "crossed in 2021",
    // DRAFT — Roland approval pending.
    story:
      "John crossed seven figures in 2021 — the result of long-arc process work in the Pack. Steady progression, real risk management, real review.",
    era: "Pack Alumni",
  },
  {
    name: "Sebastien",
    initials: "SE",
    photo: "/images/proof/sebastien-500k.jpg",
    label: "Consistent Builder",
    stat: "$500K+",
    substat: "documented",
    story:
      "Sebastien represents steady progression — not chasing, not forcing, but building something repeatable over time.",
    era: "Pack Alumni",
  },
  {
    name: "Sandra",
    initials: "SA",
    photo: "/images/proof/sandra-200k.jpg",
    label: "First Female Six-Figure",
    stat: "$200K+",
    substat: "and climbing",
    story:
      "Sandra's milestone wasn't just the number — it was building confidence and structure in a space where most traders never get there.",
    era: "Pack Alumni",
  },
  {
    name: "Carlos",
    initials: "CA",
    photo: "/images/proof/carlos-6-figures.jpg",
    label: "Six-Figure Trader",
    stat: "$200K+",
    substat: "documented",
    story:
      "Carlos built his edge by focusing on process over noise. His progress came from consistency, not chasing big days.",
    era: "Pack Alumni",
  },
  {
    name: "Phil",
    initials: "PH",
    photo: null,
    label: "Small-Cap Trader",
    stat: "Six figures",
    substat: "long-biased",
    // DRAFT — Roland approval pending.
    story:
      "Phil works the small-cap long side. Six figures earned from staying disciplined and long-biased — knowing what setup to wait for and not forcing the rest.",
    era: "Pack Alumni",
  },
  {
    name: "Stock Sniper Mike",
    initials: "SM",
    photo: "/images/proof/stock-sniper-mike-6-figures.jpg",
    label: "Six-Figure Trader",
    stat: "Six figures",
    substat: "documented",
    // DRAFT — Roland approval pending.
    story:
      "Mike committed to a defined process and let the consistency speak. Six figures, earned by repetition and review.",
    era: "Pack Alumni",
  },
  {
    name: "Tony",
    initials: "TO",
    photo: null,
    label: "Six-Figure Trader",
    stat: "Six figures",
    substat: "documented",
    story:
      "Tony's results came from simplifying his approach and committing to a structure he could execute consistently.",
    era: "Pack Alumni",
  },
];
