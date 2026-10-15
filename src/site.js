import { Cog, Disc3, Gauge, Search, Thermometer, Wind, Wrench, Zap, Star } from "lucide-react";
import { FacebookIcon, YelpIcon } from "./social-icons.jsx";
import logo from "./assets/arvada-logo.png";

const COMPANY = "Arvada Auto Tech & Diagnostic Center";
const MAPS_QUERY = "Arvada Auto Tech & Diagnostic Center, 5395 Marshall St, Arvada, CO 80002";

export default {
  COMPANY,
  ABBR: "aat",
  NOUN: "shop",
  PHONE: "3034205106",
  PHONE_DISPLAY: "(303) 420-5106",
  EMAIL: "",
  ADDRESS: "5395 Marshall St",
  CITY: "Arvada, CO 80002",
  MAPS_QUERY,
  FOUNDED: null,
  GOOGLE_PLACE_ID: "",
  // Shown until live Google data loads. From a third-party listing on 2026-10-14; confirm before launch.
  FALLBACK_RATING: { rating: 4.8, userRatingCount: 307 },
  END_DATE: "2026-11-20T23:59:59-07:00",

  BRAND: { name: "Arvada Auto Tech", sub: "& DIAGNOSTIC CENTER", logo, logoAlt: "Arvada Auto Tech & Diagnostic Center" },
  ANNOUNCE: "Auto repair & brake service on Marshall St · Arvada, Wheat Ridge, Westminster, Broomfield & Golden",

  HOURS: [
    ["Monday – Friday", "8:00 am – 6:00 pm"],
    ["Saturday – Sunday", "Closed"],
  ],
  HOURS_SHORT: "Mon–Fri 8 am – 6 pm",

  HERO: {
    sign: "Brakes & Alignment",
    title: ["Arvada's shop for ", "brakes, alignment & diagnostics."],
    text: "Honest answers, quality parts and current diagnostic equipment, from a neighborhood crew that stands behind every repair with a guarantee.",
    cta: "Schedule an Appointment",
    photo: { src: "/photos/shop-building.webp", alt: "The Arvada Auto Tech shop on Marshall Street, with its Brakes & Alignment sign over two service bays" },
  },

  SERVICES: {
    eyebrow: "What we fix",
    title: ["One stop for ", "repair, brakes & diagnostics."],
    text: "Every make and model, domestic, Asian or European. Not sure what's wrong? Start with a diagnosis.",
    cta: "Book this",
    featured: [
      {
        title: "Brake Service",
        icon: Disc3,
        desc: "Our specialty. Inspections, pads, rotors and hydraulic repairs so your car stops safely, every time.",
        points: ["Brake inspections", "Pad & rotor replacement", "Squeals, grinding, soft pedal"],
      },
      {
        title: "Alignment",
        icon: Gauge,
        desc: "Four-wheel alignments that stop the pull, straighten the wheel and save your tires after Colorado potholes.",
        points: ["4-wheel alignment", "Suspension checks", "Uneven tire wear"],
      },
    ],
    items: [
      { title: "Diagnostics", desc: "Check-engine lights and drivability problems traced with current scan tools.", icon: Search },
      { title: "Auto Electrical", desc: "Batteries, starters, alternators, sensors and wiring faults.", icon: Zap },
      { title: "Maintenance", desc: "Oil changes, belts, plugs and fluids on your maker's schedule.", icon: Wrench },
      { title: "Engine Service", desc: "Leaks, sensors, timing parts and engine repairs of every size.", icon: Cog },
      { title: "Exhaust & Emissions", desc: "Mufflers, pipes and leaks fixed, and help passing emissions.", icon: Wind },
      { title: "Heating & A/C", desc: "A/C recharges and repairs, heater and defrost service.", icon: Thermometer },
    ],
    makes: {
      title: "Makes we service",
      note: "Plus older and discontinued models (Pontiac, Mercury, Plymouth and friends).",
      items: ["Acura", "Buick", "Chevrolet", "Chrysler", "Dodge", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Isuzu", "Jeep", "Kia", "Lexus", "Lincoln", "Mazda", "Mitsubishi", "Nissan", "Subaru", "Suzuki", "Toyota"],
    },
  },

  // Real entries from the "Recently Serviced Vehicles" feed on the current website (service lines shortened).
  RECENT: {
    eyebrow: "Off the lift",
    title: ["Recently ", "serviced."],
    text: "A few real jobs from this summer, each followed by a 5-star review.",
    items: [
      { car: "2007 Nissan Xterra", miles: "15,921", date: "Aug 27, 2026", work: "Camshaft position sensors replaced", by: "Larry C." },
      { car: "2018 Ford F-150", miles: "154,105", date: "Aug 14, 2026", work: "Spark plugs and both front wheel hubs/bearings replaced", by: "Bob W." },
      { car: "2005 Honda Civic", miles: "174,555", date: "Jul 28, 2026", work: "Starter assembly replaced", by: "Chris H." },
      { car: "2020 Jeep Wrangler", miles: "56,100", date: "Jul 21, 2026", work: "Auxiliary battery tested and replaced", by: "Margie W." },
      { car: "2010 Nissan Rogue", miles: "109,739", date: "Jul 15, 2026", work: "Oil leak diagnosis, synthetic oil change, serpentine belt", by: "Jean B." },
      { car: "2004 Mazda MPV", miles: "174,861", date: "Jun 23, 2026", work: "4-wheel alignment", by: "Jon Y." },
    ],
  },

  ABOUT: {
    nav: "The Shop",
    eyebrow: "Why Arvada trusts us",
    title: ["Straight talk, ", "solid work."],
    text: "We use the latest diagnostic equipment and high-quality parts, and our technicians are skilled, certified professionals with years in the trade. The goal is simple: fix it right, explain it clearly, and make every visit one you'd recommend.",
    photo: { src: "/photos/tech-and-shop-dog.webp", alt: "A technician standing in the Arvada Auto Tech service bay next to the shop dog" },
    photo2: { src: "/photos/service-bay.webp", alt: "A Subaru up on the lift in the service bay during a brake job" },
    caption: "The crew, and the shop pup customers keep mentioning.",
    credentials: [
      { title: "ASE Certified Master Technician", desc: "Certified, experienced technicians." },
      { title: "Guaranteed work", desc: "We stand behind every repair." },
      { title: "Estimates first", desc: "Know the price before work starts." },
      { title: "Quality parts", desc: "High-quality parts on every job." },
    ],
  },

  REVIEWS: {
    title: ["What Arvada drivers ", "say."],
    text: "Verified-customer reviews collected by the shop and shown on the current website.",
    quoteSource: "Verified customer, from the current website",
    quotes: [
      { title: "Consummate Professionals", text: "I was in a bind trying to get back to Texas. They got me in on short notice and made the necessary repairs in record time at the price quoted. Great communicator. I was extremely impressed with Scotty and Jason.", name: "Larry C.", car: "2007 Nissan" },
      { title: "Scott is a great guy, honest and reasonable", text: "I stopped by Thursday evening hoping to get my truck in the next week or so, he ordered the parts, I dropped it off the next morning and he had it done the same day, as a small business owner my truck is my office, I so appreciate Scott for jumping right on it, he will be my mechanic for as long as he’s there!", name: "Bob W.", car: "2018 Ford" },
      { text: "They got me in quickly and were able to get me back on the road the same day. Always friendly and their pup is a sweetie!", name: "Erin Packer" },
      { text: "Awesome service, fast and Scotty was super friendly. Great place", name: "Ezequiel Rivas" },
      { text: "Fast, professional and honest treatment.", name: "Lyle Maxson" },
    ],
  },

  CREDS: {
    eyebrow: "Certified & connected",
    items: [
      { src: "/badges/ase-master.png", alt: "ASE Certified Master Technician", label: "ASE Certified Master Technician" },
      { src: "/badges/advance-auto-parts.png", alt: "Advance Auto Parts", label: "Advance Auto Parts affiliate" },
      { src: "/badges/carcareone.png", alt: "CarCareONE credit card", label: "CarCareONE financing" },
      { src: "/badges/bridgestone-card.png", alt: "Bridgestone credit card", label: "Bridgestone card accepted" },
    ],
    pay: ["Visa", "Mastercard", "Discover", "American Express", "Checks"],
  },

  BOOK: {
    nav: "Book a Visit",
    eyebrow: "Book a visit",
    title: ["Tell us what's going on. ", "We'll take it from there."],
    text: "Request a time and we'll call to confirm. You get a clear estimate before any work starts.",
    points: ["Estimates before any work", "Current diagnostic equipment", "Every repair guaranteed"],
    submit: "Request Appointment",
    note: "We'll call to confirm your time. Need it sooner? Call",
    fields: [
      [{ name: "name", label: "Name", required: true, autoComplete: "name" }, { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" }],
      [{ name: "email", label: "Email", type: "email", autoComplete: "email" }, { name: "vehicle", label: "Vehicle", placeholder: "Year, make, model" }],
      [{ name: "service", label: "Service", type: "select", placeholder: "Choose a service…", options: ["Not sure / diagnosis", "Brake Service", "Alignment", "Diagnostics", "Auto Electrical", "Maintenance", "Engine Service", "Exhaust & Emissions", "Heating & A/C"] }, { name: "date", label: "Preferred day", type: "date" }],
      { name: "notes", label: "What's going on?", type: "textarea", placeholder: "Noises, warning lights, when it started…" },
    ],
  },

  VISIT: {
    nav: "Visit",
    eyebrow: "Visit the shop",
    title: ["Find us on ", "Marshall Street."],
    areas: "Serving Arvada, Wheat Ridge, Westminster, Broomfield and Golden.",
  },

  FOOTER_BLURB: "Auto repair, brake service, alignments and diagnostics for Arvada and the northwest metro.",
  SOCIAL_LINKS: [
    { name: "Facebook", url: "https://www.facebook.com/Arvada-Auto-Tech-Diagnostic-Center-165672606854167/", icon: FacebookIcon, top: true },
    { name: "Yelp", url: "https://www.yelp.com/biz/arvada-auto-tech-and-diagnostic-center-arvada", icon: YelpIcon, top: true },
    { name: "Google", url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`, icon: Star, top: true },
  ],
};
