// All Wood Core Carpentry copy, business details and content lists live here,
// so the home page markup in src/routes/index.tsx stays focused on layout.

export const BUSINESS = {
  name: "Wood Core Carpentry",
  logoLead: "WOOD CORE",
  logoAccent: "CARPENTRY",
  tagline: "Built with Precision. Crafted to Last.",
  city: "Stamford, CT",
  phone: "(203) 555-0198",
  phoneHref: "tel:+12035550198",
  email: "info@woodcorecarpentry.com",
  address: "Stamford, CT 06901",
  serviceAreaShort: "Stamford & Fairfield County",
  serviceAreaTowns: "Stamford · Greenwich · Darien · New Canaan · Norwalk",
  serviceAreaFull:
    "Serving Stamford, Greenwich, Darien, New Canaan, Norwalk, & Fairfield County, CT.",
  footerBlurb:
    "Built with Precision. Crafted to Last. Residential carpentry and renovation specialists based in Stamford, CT — serving Fairfield County, CT.",
};

export const SEO = {
  title: "Wood Core Carpentry — Stamford, CT Carpenters",
  description:
    "Residential carpentry in Stamford, CT: custom framing, finish work, decks, and home renovations across Fairfield County.",
  ogTitle: "Wood Core Carpentry — Built with Precision. Crafted to Last.",
  ogDescription:
    "Stamford, CT carpentry for framing, finish work, decks, and renovations in Greenwich, Darien, New Canaan, Norwalk and beyond.",
};

export const HERO = {
  eyebrow: "Built with Precision. Crafted to Last.",
  headlineLead: "Wood Core Carpentry",
  headlineAccent: "— Stamford, CT",
  subheadline:
    "High-quality residential carpentry, custom framing, finish work, decks, and home renovations delivered with precision and care.",
};

export const ABOUT = {
  eyebrow: "About the Shop",
  heading: "A commitment to the craft.",
  body: "For over 15 years, Wood Core Carpentry has built and restored homes across Fairfield County. We're known for tight craftsmanship, showing up when we say we will, leaving every job site clean at the end of the day, and talking straight about scope, timing, and cost — from Stamford colonials to Greenwich shoreline homes.",
  statValue: "15+",
  statLabel: "Years in Fairfield County",
  points: [
    "Precision craftsmanship",
    "Honest communication",
    "Clean job sites",
    "Reliable scheduling",
    "Local Fairfield County crew",
    "Customer satisfaction",
    "Pride in every project",
  ],
};

export const SERVICES_INTRO = {
  eyebrow: "The Service Anatomy",
  body: "Nine core disciplines for Stamford and Fairfield County homes — each carried out with the same standard of precision, material integrity, and clean professional finish.",
};

const REAL_PROJECT_IMAGES = {
  livingRoom:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%284%29-A5Q2ohBAImUxxbMqNpb3CiHYIu9Kgt.webp",
  kitchen:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%285%29-18QWQH79o0QRIX6io39hbEkRM17aon.webp",
  gate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%283%29-qg0sbm7KhgkTpeHMgu9dxszPAmPubF.webp",
  entryway:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%282%29-awMfHnXg3xU3hmrQFIUzHhoFtriiP0.webp",
} as const;

export const SERVICES = [
  {
    number: "01",
    title: "Residential Framing",
    description:
      "Structural framing for walls, additions, and load-bearing changes — built square, plumb, and true.",
    image: REAL_PROJECT_IMAGES.entryway,
  },
  {
    number: "02",
    title: "Finish Carpentry",
    description:
      "Custom trim, crown moulding, and baseboards fitted with clean joinery and seamless transitions.",
    image: REAL_PROJECT_IMAGES.livingRoom,
  },
  {
    number: "03",
    title: "Custom Decks & Pergolas",
    description:
      "Composite and natural wood decks and pergolas engineered to stand up to Connecticut winters.",
    image: REAL_PROJECT_IMAGES.gate,
  },
  {
    number: "04",
    title: "Home Renovations",
    description:
      "Full interior, kitchen, and basement remodels managed end-to-end with honest timelines.",
    image: REAL_PROJECT_IMAGES.kitchen,
  },
  {
    number: "05",
    title: "Interior Trim & Moulding",
    description: "Crisp miters, wainscoting, and door and window casing with tight, even reveals.",
    image: REAL_PROJECT_IMAGES.entryway,
  },
  {
    number: "06",
    title: "Custom Woodworking",
    description:
      "Bespoke built-ins, mantels, and live-edge tables crafted to your exact specifications.",
    image: REAL_PROJECT_IMAGES.livingRoom,
  },
  {
    number: "07",
    title: "Basement Finishing",
    description:
      "Transforming lower levels into warm, finished living spaces — framing, trim, and detail work.",
    image: REAL_PROJECT_IMAGES.kitchen,
  },
  {
    number: "08",
    title: "Door & Window Installation",
    description:
      "Weather-sealed, properly fitted installations that operate smoothly through every season.",
    image: REAL_PROJECT_IMAGES.gate,
  },
  {
    number: "09",
    title: "General Carpentry Repairs",
    description:
      "Rot repairs, structural fixes, and deck repair handled with the same care as a new build.",
    image: REAL_PROJECT_IMAGES.entryway,
  },
];

export type Project = {
  title: string;
  category: "Renovations" | "Decks" | "Interior" | "Exterior" | "Custom Builds";
  image: string;
  aspect: "3/4" | "4/3" | "1/1";
  materials: string;
  description: string;
  scope: string;
  duration: string;
};

export const PROJECT_FILTERS = [
  "All",
  "Renovations",
  "Decks",
  "Interior",
  "Exterior",
  "Custom Builds",
] as const;

export const PROJECTS: Project[] = [
  {
    title: "Norwalk",
    category: "Renovations",
    image: REAL_PROJECT_IMAGES.livingRoom,
    aspect: "1/1",
    materials: "Solid Wood Coffee Table, Custom Joinery, Hand-Finished Details",
    description: "A hand-built solid wood coffee table designed for a warm, lived-in family room.",
    scope: "Custom coffee table",
    duration: "2 Weeks",
  },
  {
    title: "Kitchen Renovation — Greenwich",
    category: "Renovations",
    image: REAL_PROJECT_IMAGES.kitchen,
    aspect: "3/4",
    materials: "Painted Cabinetry, Hardwood Flooring, Custom Island",
    description:
      "A kitchen renovation with painted cabinetry, a custom island, and carefully coordinated finish work.",
    scope: "Kitchen cabinetry and finish carpentry",
    duration: "3 Weeks",
  },
  {
    title: "Garden Gate — New Canaan",
    category: "Exterior",
    image: REAL_PROJECT_IMAGES.gate,
    aspect: "3/4",
    materials: "Painted Wood, Heavy-Duty Black Hardware, Stonework",
    description:
      "A custom painted garden gate built to complement the existing stone entrance and landscape.",
    scope: "Custom exterior gate",
    duration: "1 Week",
  },
  {
    title: "Entry Staircase — Darien",
    category: "Interior",
    image: REAL_PROJECT_IMAGES.entryway,
    aspect: "4/3",
    materials: "Oak Handrails, Painted Stringers, Steel Balusters",
    description:
      "A bright entryway finished with a clean stair detail, oak handrails, and balanced steel balusters.",
    scope: "Stair trim and entry finish work",
    duration: "2 Weeks",
  },
];

export const WHY_US = {
  eyebrow: "Why Wood Core Carpentry",
  body: "No inflated claims. Just consistent, dependable craftsmanship for Fairfield County homeowners — and the values behind it.",
  items: [
    {
      title: "Skilled Craftsmanship",
      text: "Over 15 years of refined technique behind every cut, joint, and finish.",
    },
    {
      title: "Honest Communication",
      text: "Clear scope, transparent pricing, and straight answers — always.",
    },
    {
      title: "Attention to Every Detail",
      text: "The small things are the big things. We sweat the reveals and miters.",
    },
    {
      title: "Reliable Scheduling",
      text: "We show up when we say we will, and we finish on time.",
    },
    {
      title: "Quality Materials",
      text: "Lumber and fasteners chosen to hold up to New England weather, not just cost.",
    },
    {
      title: "Clean Job Sites",
      text: "Crisp lines, tight joints, and a swept-up site at the end of every day.",
    },
  ],
};

// SAMPLE REVIEWS — written as placeholders, not copied from Google.
// Replace with real Google reviews (and the real rating) before going live.
export const GOOGLE_RATING = {
  score: "5.0",
  stars: 5,
  label: "Based on Google Reviews",
};

export type GoogleReview = {
  author: string;
  location: string;
  rating: number;
  text: string;
};

export const googleReviews: GoogleReview[] = [
  {
    author: "Laura K.",
    location: "Stamford, CT",
    rating: 5,
    text: "Wood Core built floor-to-ceiling built-ins around our fireplace and they look like they came with the house. Every reveal is even and every shelf is dead level — real precision work.",
  },
  {
    author: "James T.",
    location: "Greenwich, CT",
    rating: 5,
    text: "Communication was outstanding. We got a clear scope and price up front, daily updates during the job, and they finished our deck and pergola the exact week they promised.",
  },
  {
    author: "Priya S.",
    location: "Darien, CT",
    rating: 5,
    text: "The crown moulding and wainscoting in our dining room are flawless. You can't find a gap anywhere. True craftsmen who clearly take pride in their work.",
  },
  {
    author: "Mark D.",
    location: "New Canaan, CT",
    rating: 5,
    text: "They designed and built a custom mudroom bench and cubbies for our family. Furniture-grade quality, great ideas along the way, and the site was swept clean every day.",
  },
  {
    author: "Ellen R.",
    location: "Norwalk, CT",
    rating: 5,
    text: "We had rot in our porch columns and window sills. They explained exactly what needed fixing, repaired it properly, and the new trim miters are perfect.",
  },
  {
    author: "Chris M.",
    location: "Westport, CT",
    rating: 5,
    text: "From framing our basement to the final trim, the craftsmanship was top notch. Responsive, honest, and on schedule — we've already booked them for our next project.",
  },
];

export const CTA = {
  eyebrow: "Start Your Project",
  body: "Tell us about your Stamford or Fairfield County project and we'll provide a clear, honest estimate — no pressure, no inflated promises.",
};

export const ESTIMATE_FORM = {
  eyebrow: "Build Request",
  heading: "Request a Free Stamford & Fairfield County Estimate",
  imageLabel: "The Consultation Engine",
  imageHeading: "What is the heart of your project?",
  namePlaceholder: "Jane Doe",
  phonePlaceholder: "(203) 000-0000",
  emailPlaceholder: "jane@email.com",
  detailsPlaceholder: "Tell us about your project and town...",
};

export const PROJECT_TYPES = [
  "Framing",
  "Finish Carpentry",
  "Deck / Pergola",
  "Renovation",
  "Basement",
  "Trim & Moulding",
  "Custom Woodworking",
  "Doors & Windows",
  "Repair",
];
