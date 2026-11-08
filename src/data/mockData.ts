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
    "Serving Stamford, Greenwich, Darien, New Canaan, Norwalk, and all of Fairfield County & Westchester County.",
  footerBlurb:
    "Built with Precision. Crafted to Last. Residential carpentry and renovation specialists based in Stamford, CT — serving Fairfield & Westchester Counties.",
};

export const SEO = {
  title: "Wood Core Carpentry — Stamford, CT Carpenters",
  description:
    "Residential carpentry in Stamford, CT: custom framing, finish work, decks, and home renovations across Fairfield & Westchester Counties.",
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
  body:
    "For over 15 years, Wood Core Carpentry has built and restored homes across Fairfield County. We're known for tight craftsmanship, showing up when we say we will, leaving every job site clean at the end of the day, and talking straight about scope, timing, and cost — from Stamford colonials to Greenwich shoreline homes.",
  statValue: "15+",
  statLabel: "Years in Fairfield County",
  points: [
    "Precision craftsmanship",
    "Honest communication",
    "Clean job sites",
    "Reliable scheduling",
    "Local Fairfield County crew",
    "Licensed & insured in CT",
    "Pride in every project",
  ],
};

export const SERVICES_INTRO = {
  eyebrow: "The Service Anatomy",
  body:
    "Nine core disciplines for Stamford and Fairfield County homes — each carried out with the same standard of precision, material integrity, and clean professional finish.",
};

export const SERVICES = [
  { number: "01", title: "Residential Framing", description: "Structural framing for walls, additions, and load-bearing changes — built square, plumb, and true." },
  { number: "02", title: "Finish Carpentry", description: "Custom trim, crown moulding, and baseboards fitted with clean joinery and seamless transitions." },
  { number: "03", title: "Custom Decks & Pergolas", description: "Composite and natural wood decks and pergolas engineered to stand up to Connecticut winters." },
  { number: "04", title: "Home Renovations", description: "Full interior, kitchen, and basement remodels managed end-to-end with honest timelines." },
  { number: "05", title: "Custom Woodworking", description: "Bespoke built-ins, mantels, and live-edge tables crafted to your exact specifications." },
  { number: "06", title: "Interior Trim & Moulding", description: "Crisp miters, wainscoting, and door and window casing with tight, even reveals." },
  { number: "07", title: "Basement Finishing", description: "Transforming lower levels into warm, finished living spaces — framing, trim, and detail work." },
  { number: "08", title: "Door & Window Installation", description: "Weather-sealed, properly fitted installations that operate smoothly through every season." },
  { number: "09", title: "General Carpentry Repairs", description: "Rot repairs, structural fixes, and deck repair handled with the same care as a new build." },
];

export type Project = {
  title: string;
  category: "Renovations" | "Decks" | "Interior" | "Exterior" | "Custom Builds";
  image: string;
  aspect: "3/4" | "4/3";
  materials: string;
  description: string;
  scope: string;
  duration: string;
};

export const PROJECT_FILTERS = ["All", "Renovations", "Decks", "Interior", "Exterior", "Custom Builds"] as const;

export const PROJECTS: Project[] = [
  { title: "Vaulted Ceiling Reframe — New Canaan", category: "Custom Builds", image: "/site-assets/76a96acaede8317f.png", aspect: "3/4", materials: "Engineered LVL, Douglas Fir, Custom Steel Joinery", description: "A complete reframe of a New Canaan great-room ceiling, replacing compromised framing with precision-cut engineered timber and exposed fir beams.", scope: "Structural reframing of a vaulted great-room ceiling", duration: "5 Weeks" },
  { title: "Cedar Deck & Pergola — Darien", category: "Decks", image: "/site-assets/9dd489fe344217ff.png", aspect: "3/4", materials: "Western Red Cedar, Hidden Fasteners", description: "A spacious backyard deck with a custom cedar pergola, detailed for drainage and freeze-thaw cycles along the Connecticut shoreline.", scope: "Multi-tier deck with integrated cedar pergola", duration: "3 Weeks" },
  { title: "Crown Moulding & Trim — Stamford", category: "Interior", image: "/site-assets/3ec039348be6ff5b.png", aspect: "4/3", materials: "Primed MDF, Solid Oak Accents", description: "Crisp mitered crown and base trim throughout a Stamford colonial, with solid oak accents at openings and transitions.", scope: "Whole-home crown, base, and casing installation", duration: "2 Weeks" },
  { title: "Walnut Live-Edge Table — Greenwich", category: "Custom Builds", image: "/site-assets/ebcd63dbc1a6540e.png", aspect: "3/4", materials: "Black Walnut, Hand-Rubbed Oil Finish", description: "A furniture-grade live-edge walnut dining table for a Greenwich home, hand-finished with dovetailed base joinery.", scope: "Bespoke dining table from a single live-edge slab", duration: "4 Weeks" },
  { title: "Kitchen Renovation — Norwalk", category: "Renovations", image: "/site-assets/6e9119e130799143.png", aspect: "4/3", materials: "White Oak Cabinetry, Stone Counters", description: "A full Norwalk kitchen renovation featuring custom white oak cabinetry, precise trim, and integrated detail work.", scope: "Full kitchen remodel with custom cabinetry", duration: "6 Weeks" },
  { title: "Exterior Trim Package — Rye, NY", category: "Exterior", image: "/site-assets/2f1d4afd7235a23a.png", aspect: "4/3", materials: "Cellular PVC, Cedar Fascia", description: "A complete exterior trim package for a Westchester County home, with weather-resistant PVC detailing and cedar fascia accents.", scope: "Exterior fascia, soffit, and window trim package", duration: "3 Weeks" },
];

export const WHY_US = {
  eyebrow: "Why Wood Core Carpentry",
  body: "No inflated claims. Just consistent, dependable craftsmanship for Fairfield County homeowners — and the values behind it.",
  items: [
    { title: "Skilled Craftsmanship", text: "Over 15 years of refined technique behind every cut, joint, and finish." },
    { title: "Honest Communication", text: "Clear scope, transparent pricing, and straight answers — always." },
    { title: "Attention to Every Detail", text: "The small things are the big things. We sweat the reveals and miters." },
    { title: "Reliable Scheduling", text: "We show up when we say we will, and we finish on time." },
    { title: "Quality Materials", text: "Lumber and fasteners chosen to hold up to New England weather, not just cost." },
    { title: "Clean Job Sites", text: "Crisp lines, tight joints, and a swept-up site at the end of every day." },
  ],
};

export const REVIEWS = [
  { quote: "Wood Core reframed and trimmed out our entire addition. The joinery is tight, the crew was on time every single morning, and they swept the site clean before leaving each day.", name: "Laura K.", location: "Stamford, CT" },
  { quote: "Our new composite deck and pergola came out beautifully. They finished on the exact week they promised and left our yard cleaner than they found it.", name: "James T.", location: "Greenwich, CT" },
  { quote: "The crown moulding and wainscoting are flawless — you can't find a gap anywhere. Honest pricing and great communication from start to finish.", name: "Priya S.", location: "Norwalk, CT" },
  { quote: "They finished our basement into a real living space. Punctual, respectful of our home, and the custom built-ins are true furniture-grade work.", name: "Mark D.", location: "Stamford, CT" },
  { quote: "We had rot in our porch columns and sills. Wood Core repaired everything properly and the miters on the new trim are perfect.", name: "Ellen R.", location: "Greenwich, CT" },
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

export const PROJECT_TYPES = ["Framing", "Finish Carpentry", "Deck / Pergola", "Renovation", "Basement", "Trim & Moulding", "Custom Woodworking", "Doors & Windows", "Repair"];
