// All Wood Core Carpentry copy, business details and content lists live here,
// so the home page markup in src/routes/index.tsx stays focused on layout.

export const BUSINESS = {
  name: "Wood Core Carpentry",
  logoLead: "WOOD CORE",
  logoAccent: "CARPENTRY",
  tagline: "Built with Precision. Crafted to Last.",
  city: "Stamford, CT",
  phone: "(203) 913-7795",
  phoneHref: "tel:+12039137795",
  email: "woodcorecarpentry26@gmail.com",
  address: "Stamford, CT 06902",
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
  gate: "/service-gate-replacement.jpg",
  entryway:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%282%29-awMfHnXg3xU3hmrQFIUzHhoFtriiP0.webp",
  exteriorHome:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c413a343-replacement-image-1-IYXSm5ruorofNASqqr2fSXnx07fCta.png",
  basement:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c413a343-replacement-image-4-1Yh7BtordRWo2lrauKa3YOtuF8vsUk.jpg",
  basementLounge:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5576f5aa-replacement-image-1-uyKXXbny5gsqTTRaN0xQDgwaxyDAec.jpg",
  handPlaning:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5576f5aa-replacement-image-2-KP5qqEFkPSX37haHI37LmxqIXdolT4.png",
  lumberLayout:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a3861e61-replacement-image-1-YBJK0BfF0k85BBZXG7F377Fx5tVs2m.jpg",
  finishCarpentry:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a3861e61-replacement-image-2-gW4InYeuu3r0eZXP1gFjnRMn9UADWm.jpg",
  twilightDeck:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a3861e61-replacement-image-3.png-2W78gIHPX6BqmAUFN4lMKhMRFJePL2.jpeg",
  craftsmanPlaning:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a3861e61-replacement-image-4-28KtknYDKkAHnrlv353HRZuOWxDeG4.png",
} as const;

export const SERVICES = [
  {
    number: "01",
    title: "Residential Framing",
    description:
      "Structural framing for walls, additions, and load-bearing changes — built square, plumb, and true.",
    image: REAL_PROJECT_IMAGES.lumberLayout,
  },
  {
    number: "02",
    title: "Finish Carpentry",
    description:
      "Custom trim, crown moulding, and baseboards fitted with clean joinery and seamless transitions.",
    image: REAL_PROJECT_IMAGES.finishCarpentry,
  },
  {
    number: "03",
    title: "Custom Decks & Pergolas",
    description:
      "Composite and natural wood decks and pergolas engineered to stand up to Connecticut winters.",
    image: REAL_PROJECT_IMAGES.twilightDeck,
  },
  {
    number: "04",
    title: "Home Renovations",
    description:
      "Full interior, kitchen, and basement remodels managed end-to-end with honest timelines.",
    image: REAL_PROJECT_IMAGES.exteriorHome,
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
    image: REAL_PROJECT_IMAGES.craftsmanPlaning,
  },
  {
    number: "07",
    title: "Basement Finishing",
    description:
      "Transforming lower levels into warm, finished living spaces — framing, trim, and detail work.",
    image: REAL_PROJECT_IMAGES.basementLounge,
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
    image: REAL_PROJECT_IMAGES.handPlaning,
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
  {
    title: "Colonial Exterior — Fairfield County",
    category: "Exterior",
    image: REAL_PROJECT_IMAGES.exteriorHome,
    aspect: "3/4",
    materials: "Exterior Siding, Window and Door Trim, Entry Details",
    description:
      "A substantial colonial home with carefully finished exterior details and a welcoming entry.",
    scope: "Residential exterior carpentry",
    duration: "Completed Project",
  },
  {
    title: "Custom Woodworking — Workshop",
    category: "Custom Builds",
    image: REAL_PROJECT_IMAGES.finishCarpentry,
    aspect: "4/3",
    materials: "Hardwood, Hand Planes, Traditional Woodworking Tools",
    description:
      "A close-up of traditional hand-tool woodworking and careful hardwood craftsmanship.",
    scope: "Custom woodworking",
    duration: "In Progress",
  },
  {
    title: "Handcrafted Woodwork — Workshop",
    category: "Custom Builds",
    image: REAL_PROJECT_IMAGES.craftsmanPlaning,
    aspect: "4/3",
    materials: "Walnut, Hand Planes, Traditional Woodworking Tools",
    description:
      "A craftsperson hand-planes a hardwood board to prepare it for a custom build.",
    scope: "Custom woodworking",
    duration: "In Progress",
  },
  {
    title: "Finished Basement — Fairfield County",
    category: "Renovations",
    image: REAL_PROJECT_IMAGES.basement,
    aspect: "4/3",
    materials: "Finished Flooring, Recessed Lighting, Built-In Kitchen",
    description:
      "A spacious finished basement combining comfortable living space with a practical kitchenette.",
    scope: "Basement finishing and renovation",
    duration: "Completed Project",
  },
  {
    title: "Basement Bar & Lounge — Fairfield County",
    category: "Renovations",
    image: REAL_PROJECT_IMAGES.basementLounge,
    aspect: "4/3",
    materials: "Vinyl Plank Flooring, Recessed Lighting, Custom Wet Bar Cabinetry",
    description:
      "A finished basement lounge with a sectional seating area, recessed lighting, and a custom wet bar.",
    scope: "Basement finishing and wet bar build-out",
    duration: "Completed Project",
  },
  {
    title: "Timber Layout — Stamford",
    category: "Custom Builds",
    image: REAL_PROJECT_IMAGES.lumberLayout,
    aspect: "4/3",
    materials: "Dimensional Lumber, Measuring Tape, Carpenter's Pencil",
    description:
      "A carpenter measures and marks timber before a precise custom carpentry cut.",
    scope: "Custom carpentry layout and preparation",
    duration: "In Progress",
  },
  {
    title: "Twilight Deck — Fairfield County",
    category: "Decks",
    image: REAL_PROJECT_IMAGES.twilightDeck,
    aspect: "3/4",
    materials: "Natural Wood Decking, Exterior Lighting, Metal Railings",
    description:
      "A spacious deck with warm step lighting, clean railing details, and an evening view.",
    scope: "Custom deck build",
    duration: "Completed Project",
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

export const GOOGLE_RATING = {
  score: "5.0",
  stars: 5,
  label: "Based on Google Reviews · 20+ more on Google Reviews",
};

export type GoogleReview = {
  author: string;
  location: string;
  rating: number;
  text: string;
};

export const googleReviews: GoogleReview[] = [
  {
    author: "Кувалда Мощная",
    location: "Stamford, CT",
    rating: 5,
    text: "I really appreciate the quality of the work. This Guy clearly knows what he's doing, and everything looks great. I would definitely recommend his service.",
  },
  {
    author: "luke I.",
    location: "Greenwich, CT",
    rating: 5,
    text: "Alex was fantastic from the quoting process all the way through completion of installing the cabinets and shelves on our chimney renovation project. He’s very personable and easy to work with, and his attention to detail is second to none. He’s a true perfectionist who clearly takes pride in his work and goes above and beyond to make sure everything is done right. Highly recommend!",
  },
  {
    author: "Priya S.",
    location: "Darien, CT",
    rating: 5,
    text: "Alex installed the doors in our home, and we couldn’t be happier that we chose him! He did an amazing job — everything was done quickly, professionally, and with great attention to detail.\n\nFor any future home improvement projects, this is definitely the company we’ll be calling. Thank you again for the excellent work! Highly recommended!",
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
