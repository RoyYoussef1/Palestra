// All site copy lives here so pages stay declarative.

export const WHATSAPP_NUMBER = "96170156375";
export const PHONE_DISPLAY = "70 156 375";
export const INSTAGRAM_URL = "https://www.instagram.com/palestra.lb/";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services & Pricing", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export const MARQUEE_ITEMS = [
  "SEMI-PRIVATE TRAINING",
  "MAX 4 PER GROUP",
  "ZUMBA",
  "KICKBOXING",
  "NUTRITION COACHING",
  "FIRST SESSION FREE",
];

// Home — numbered "What We Do" image cards
export const SERVICE_ROWS = [
  {
    number: "01",
    title: "PERSONAL TRAINING",
    img: "https://images.pexels.com/photos/32695899/pexels-photo-32695899.jpeg?auto=compress&cs=tinysrgb&w=900",
    to: "/services#svc-pt",
  },
  {
    number: "02",
    title: "ZUMBA",
    img: "https://images.pexels.com/photos/8957646/pexels-photo-8957646.jpeg?auto=compress&cs=tinysrgb&w=900",
    to: "/services#svc-zumba",
  },
  {
    number: "03",
    title: "KICKBOXING",
    img: "https://images.pexels.com/photos/7991640/pexels-photo-7991640.jpeg?auto=compress&cs=tinysrgb&w=900",
    to: "/services#svc-kick",
  },
  {
    number: "04",
    title: "NUTRITION",
    img: "https://images.pexels.com/photos/4929677/pexels-photo-4929677.jpeg?auto=compress&cs=tinysrgb&w=900",
    to: "/services#svc-nutrition",
  },
];

// Home — stats band
export const HOME_STATS = [
  { value: "4", label: "MAX PER GROUP" },
  { value: "4", label: "PROGRAMS" },
  { value: "1", label: "DEDICATED COACH" },
  { value: "100%", label: "PERSONALIZED" },
];

// Services page — service cards
export const SERVICES = [
  {
    id: "svc-pt",
    title: "Semi-Private Personal Training",
    img: "https://images.pexels.com/photos/32695899/pexels-photo-32695899.jpeg?auto=compress&cs=tinysrgb&w=800",
    body: "Strength, conditioning, and fat-loss programming in groups capped at 4. Richard designs and coaches every session — form corrections, progression, and accountability included.",
  },
  {
    id: "svc-zumba",
    title: "Zumba",
    img: "https://images.pexels.com/photos/8957646/pexels-photo-8957646.jpeg?auto=compress&cs=tinysrgb&w=800",
    body: "Dance-based cardio classes for adults — high energy, no experience required. Burn fat and blow off steam to great music.",
  },
  {
    id: "svc-kick",
    title: "Kickboxing",
    img: "https://images.pexels.com/photos/7991640/pexels-photo-7991640.jpeg?auto=compress&cs=tinysrgb&w=800",
    body: "Pad work, combos, and conditioning drills that build power and stamina while teaching real technique.",
  },
  {
    id: "svc-nutrition",
    title: "Nutrition Coaching",
    img: "https://images.pexels.com/photos/4929677/pexels-photo-4929677.jpeg?auto=compress&cs=tinysrgb&w=800",
    body: "Practical guidance layered onto your training plan — no fad diets, just habits that stick alongside your sessions.",
  },
];

// Shared pricing plans (Home teaser + Services full detail)
export const PLANS = [
  {
    name: "STARTER",
    price: "$120",
    cadenceShort: "2 sessions / week",
    cadenceLong: "2x per week",
    icon: "chart",
    featured: false,
    featuresShort: [
      "Groups of max 4 people",
      "Custom program by Richard",
      "Progress check-ins",
    ],
    featuresLong: [
      "2 semi-private sessions / week",
      "Groups of max 4 people",
      "Custom program by Richard",
      "Progress check-ins",
    ],
    cta: "Choose Starter",
  },
  {
    name: "PERFORMANCE",
    price: "$150",
    cadenceShort: "3 sessions / week",
    cadenceLong: "3x per week",
    icon: "target",
    featured: true,
    featuresShort: [
      "Groups of max 4 people",
      "Custom program by Richard",
      "Progress check-ins",
      "Nutrition guidance included",
    ],
    featuresLong: [
      "3 semi-private sessions / week",
      "Groups of max 4 people",
      "Custom program by Richard",
      "Progress check-ins",
      "Nutrition guidance included",
    ],
    cta: "Choose Performance",
  },
  {
    name: "UNLIMITED",
    price: "$190",
    cadenceShort: "Train anytime",
    cadenceLong: "Train anytime",
    icon: "users",
    featured: false,
    featuresShort: [
      "Groups of max 4 people",
      "Priority scheduling",
      "Nutrition guidance included",
    ],
    featuresLong: [
      "Unlimited semi-private sessions",
      "Groups of max 4 people",
      "Custom program by Richard",
      "Priority scheduling",
      "Nutrition guidance included",
    ],
    cta: "Choose Unlimited",
  },
];

// Contact form — "Interested In" options
export const INTEREST_OPTIONS = [
  "Free Trial Session",
  "Starter — 2x/week",
  "Performance — 3x/week",
  "Unlimited",
  "Zumba",
  "Kickboxing",
  "Nutrition Coaching",
];
