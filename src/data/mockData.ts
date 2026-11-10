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
    "Customer satisfaction",
    "Pride in every project",
  ],
};

export const SERVICES_INTRO = {
  eyebrow: "The Service Anatomy",
  body:
    "Nine core disciplines for Stamford and Fairfield County homes — each carried out with the same standard of precision, material integrity, and clean professional finish.",
};

export const SERVICES = [
  { number: "01", title: "Residential Framing", description: "Structural framing for walls, additions, and load-bearing changes — built square, plumb, and true.", image: "/service1.jpg" },
  { number: "02", title: "Finish Carpentry", description: "Custom trim, crown moulding, and baseboards fitted with clean joinery and seamless transitions.", image: "/service2.jpg" },
  { number: "03", title: "Custom Decks & Pergolas", description: "Composite and natural wood decks and pergolas engineered to stand up to Connecticut winters.", image: "/service3.jpg" },
  { number: "04", title: "Home Renovations", description: "Full interior, kitchen, and basement remodels managed end-to-end with honest timelines.", image: "/service4.jpg" },
  { number: "05", title: "Interior Trim & Moulding", description: "Crisp miters, wainscoting, and door and window casing with tight, even reveals.", image: "/service5.jpg" },
  { number: "06", title: "Custom Woodworking", description: "Bespoke built-ins, mantels, and live-edge tables crafted to your exact specifications.", image: "/service6.jpg" },
  { number: "07", title: "Basement Finishing", description: "Transforming lower levels into warm, finished living spaces — framing, trim, and detail work.", image: "/service7.jpg" },
  { number: "08", title: "Door & Window Installation", description: "Weather-sealed, properly fitted installations that operate smoothly through every season.", image: "/service8.jpg" },
  { number: "09", title: "General Carpentry Repairs", description: "Rot repairs, structural fixes, and deck repair handled with the same care as a new build.", image: "/service9.jpg" },
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

export const PROJECT_FILTERS = ["All", "Renovations", "Decks", "Interior", "Exterior", "Custom Builds"] as const;

export const PROJECTS: Project[] = [
  { title: "Fireplace Wall & Floating Shelves — Stamford", category: "Renovations", image: "/project1.jpg", aspect: "1/1", materials: "Stone-Look Tile Surround, Solid Wood Floating Shelves, Painted Base Cabinets", description: "A full living-room fireplace wall with a tiled surround, a solid wood mantel, flanking floating shelves, and built-in base cabinets.", scope: "Fireplace surround, mantel, shelving, and built-in cabinetry", duration: "3 Weeks" },
  { title: "Cedar Deck & Pergola — Darien", category: "Decks", image: "/deck1.jpg", aspect: "3/4", materials: "Western Red Cedar, Hidden Fasteners", description: "A spacious backyard deck with a custom cedar pergola, detailed for drainage and freeze-thaw cycles along the Connecticut shoreline.", scope: "Multi-tier deck with integrated cedar pergola", duration: "3 Weeks" },
  { title: "Built-In Bookcases — Greenwich", category: "Interior", image: "/project2.jpg", aspect: "1/1", materials: "Painted Hardwood Built-Ins, Brick Surround, Wood Mantel", description: "Floor-to-ceiling painted bookcases with lower cabinets framing a brick fireplace and a solid wood mantel.", scope: "Twin built-in bookcases with fireplace mantel", duration: "2 Weeks" },
  { title: "Farmhouse Dining Table — New Canaan", category: "Custom Builds", image: "/project3.jpg", aspect: "1/1", materials: "Reclaimed Hardwood Top, Hand-Rubbed Finish", description: "A custom farmhouse dining table built from reclaimed hardwood, sized for the room and finished by hand.", scope: "Bespoke dining table", duration: "2 Weeks" },
  { title: "Slatted Media Wall — Norwalk", category: "Interior", image: "/project4.jpg", aspect: "1/1", materials: "Wood Slat Panels, Integrated LED Lighting, Floating Console", description: "A modern feature wall with vertical wood slat panels, hidden lighting, and a low floating media console.", scope: "Feature wall, slat paneling, and floating console", duration: "2 Weeks" },
  { title: "Exterior Trim Package — Norwalk", category: "Exterior", image: "/project5.jpg", aspect: "4/3", materials: "Cellular PVC, Cedar Fascia", description: "A complete exterior trim package for a Norwalk colonial, with weather-resistant PVC detailing and cedar fascia accents.", scope: "Exterior fascia, soffit, and window trim package", duration: "3 Weeks" },
  { title: "Live-Edge Floating Shelves — Darien", category: "Custom Builds", image: "/project6.jpg", aspect: "1/1", materials: "Live-Edge Hardwood Slabs, Concealed Steel Brackets", description: "Live-edge hardwood shelves mounted on concealed brackets to create a warm, natural retail display wall.", scope: "Custom live-edge display shelving", duration: "1 Week" },
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
  { author: "Laura K.", location: "Stamford, CT", rating: 5, text: "Wood Core built floor-to-ceiling built-ins around our fireplace and they look like they came with the house. Every reveal is even and every shelf is dead level — real precision work." },
  { author: "James T.", location: "Greenwich, CT", rating: 5, text: "Communication was outstanding. We got a clear scope and price up front, daily updates during the job, and they finished our deck and pergola the exact week they promised." },
  { author: "Priya S.", location: "Darien, CT", rating: 5, text: "The crown moulding and wainscoting in our dining room are flawless. You can't find a gap anywhere. True craftsmen who clearly take pride in their work." },
  { author: "Mark D.", location: "New Canaan, CT", rating: 5, text: "They designed and built a custom mudroom bench and cubbies for our family. Furniture-grade quality, great ideas along the way, and the site was swept clean every day." },
  { author: "Ellen R.", location: "Norwalk, CT", rating: 5, text: "We had rot in our porch columns and window sills. They explained exactly what needed fixing, repaired it properly, and the new trim miters are perfect." },
  { author: "Chris M.", location: "Westport, CT", rating: 5, text: "From framing our basement to the final trim, the craftsmanship was top notch. Responsive, honest, and on schedule — we've already booked them for our next project." },
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
