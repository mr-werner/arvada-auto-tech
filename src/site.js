import { AlertTriangle, BatteryCharging, Car, Cog, Disc3, Gauge, Search, Star, Thermometer, Wind, Wrench, Zap, Clock, MapPin, ShieldCheck } from "lucide-react";

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

  BRAND: { name: "Arvada Auto Tech", sub: "& DIAGNOSTIC CENTER", icon: Gauge },
  ANNOUNCE: "Your local experts in auto repair and brake service · Arvada, Wheat Ridge, Westminster, Broomfield and Golden",

  HOURS: [
    ["Monday – Friday", "8:00 am – 6:00 pm"],
    ["Saturday", "Closed"],
    ["Sunday", "Closed"],
  ],
  HOURS_SHORT: "Mon–Fri 8:00 am – 6:00 pm",

  HERO: {
    eyebrow: "ARVADA, COLORADO · AUTO REPAIR & DIAGNOSTICS",
    title: ["Find the problem. ", "Fix it right."],
    text: "Brakes, alignments, electrical and engine work on Marshall Street, with current diagnostic equipment, quality parts and honest answers about what your car really needs.",
    cta: "Request an Appointment",
    card: [
      { icon: Clock, title: "Hours", text: "Mon–Fri, 8:00 am – 6:00 pm" },
      { icon: MapPin, title: "5395 Marshall St", text: "Arvada, CO 80002" },
      { icon: ShieldCheck, title: "We stand behind our work", text: "Every repair backed by our guarantee" },
    ],
  },

  STATS: (rating) => [
    [rating ? `${rating.rating.toFixed(1)} ★` : "5 ★", "Google rating"],
    [rating ? rating.userRatingCount.toLocaleString() : "300+", "Google reviews"],
    ["25+", "Makes serviced"],
    ["5", "Cities served"],
  ],

  SERVICES: {
    eyebrow: "WHAT WE DO",
    title: ["One stop for repair, ", "brakes and diagnostics."],
    text: "From routine maintenance to the warning light nobody else could figure out.",
    cta: "Request this service",
    items: [
      { title: "Brake Service", desc: "Inspections, pad and rotor replacement and hydraulic repairs so your car stops safely every time.", icon: Disc3 },
      { title: "Alignment Service", desc: "Four-wheel alignments that stop the pull, center the steering wheel and save your tires.", icon: Gauge },
      { title: "Diagnostics", desc: "Check-engine lights and drivability problems traced with current scan tools, not guesswork.", icon: Search },
      { title: "Auto Electrical", desc: "Batteries, starters, alternators, sensors and wiring faults found and fixed.", icon: Zap },
      { title: "Maintenance", desc: "Oil changes, belts, plugs and fluids on the schedule your manufacturer recommends.", icon: Wrench },
      { title: "Engine Service", desc: "Leak diagnosis, sensors, timing components and engine repairs of every size.", icon: Cog },
      { title: "Exhaust Service", desc: "Mufflers, pipes and exhaust leaks repaired so your car runs quiet and clean.", icon: Wind },
      { title: "Heating & A/C", desc: "A/C recharges and repairs, heater and defrost service for every season.", icon: Thermometer },
    ],
    chips: {
      title: "Makes we service",
      note: "Domestic, Asian and European. Older and discontinued models welcome.",
      items: ["Acura", "Buick", "Chevrolet", "Chrysler", "Dodge", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jeep", "Kia", "Lexus", "Lincoln", "Mazda", "Mitsubishi", "Nissan", "Subaru", "Toyota"],
    },
  },

  FEATURE: {
    id: "signs",
    nav: "Warning Signs",
    eyebrow: "KNOW THE WARNING SIGNS",
    title: ["When to bring it in, ", "before it gets expensive."],
    text: "Catching these early is usually the difference between a quick repair and a big one.",
    cards: [
      { name: "Brakes", icon: Disc3, lead: "Your car's most important safety system.", items: ["Squealing or grinding when you stop", "Soft or sinking pedal", "Car pulls to one side when braking", "Vibration through the pedal"] },
      { name: "Alignment", icon: Car, lead: "Colorado potholes knock it out fast.", items: ["Car drifts or pulls on a straight road", "Steering wheel sits off-center", "Uneven or fast tire wear", "After hitting a curb or big pothole"] },
      { name: "Check engine", icon: AlertTriangle, lead: "Never ignore a flashing light.", items: ["Solid light: book a diagnostic soon", "Flashing light: stop driving and call", "Rough idle or hesitation", "Sudden drop in fuel economy"] },
      { name: "Electrical", icon: BatteryCharging, lead: "Cold mornings find weak batteries.", items: ["Slow or clicking starts", "Dim or flickering lights", "Battery light on the dash", "Battery older than 4–5 years"] },
    ],
  },

  PROCESS: {
    eyebrow: "HOW IT WORKS",
    title: ["Diagnose first. ", "Then decide."],
    text: "You'll know exactly what's wrong and what it costs before any work starts.",
    steps: [
      ["Request a time", "Book online or call. Tell us what you're noticing."],
      ["We diagnose", "Our technicians test, inspect and pinpoint the cause."],
      ["You approve", "Clear options and pricing. Nothing happens without your OK."],
      ["Drive with confidence", "Pick up your car with the work explained and guaranteed."],
    ],
  },

  ABOUT: {
    nav: "About",
    eyebrow: "WHY ARVADA TRUSTS US",
    title: ["Honest work, ", "a friendly crew."],
    text: [
      "Arvada Auto Tech & Diagnostic Center is a neighborhood shop for drivers in Arvada, Wheat Ridge, Westminster, Broomfield and Golden. Customers keep coming back for fast, professional work, straight talk about pricing, and a team that remembers their name (and a shop pup who remembers everyone).",
    ],
    badge: ["4.8 ★", "Rated by hundreds of local drivers"],
    tiles: [
      { label: "Brakes", icon: Disc3 },
      { label: "Alignment", icon: Gauge },
      { label: "Diagnostics", icon: Search },
      { label: "Electrical", icon: Zap },
    ],
    credentials: [
      { title: "Certified technicians", desc: "Trained professionals using current diagnostic equipment." },
      { title: "Quality parts", desc: "High-quality parts on every repair." },
      { title: "Guaranteed work", desc: "We stand behind every job we do." },
      { title: "Easy payment", desc: "Visa, Mastercard, Discover, American Express and checks." },
    ],
  },

  REVIEWS: {
    title: ["What Arvada drivers ", "say about us."],
    text: "Read what customers say about the shop on Google.",
    quoteSource: "Customer review shown on the current website",
    quotes: [
      ["Awesome service, fast and Scotty was super friendly. Great place", "Ezequiel Rivas"],
      ["Fast, professional and honest treatment.", "Lyle Maxson"],
      ["Always friendly and their pup is a sweetie!", "Erin Packer"],
    ],
  },

  BOOK: {
    nav: "Book a Visit",
    eyebrow: "BOOK A VISIT",
    title: ["Tell us what's going on. ", "We'll take it from there."],
    text: "Request a time online and we'll call to confirm.",
    points: ["Clear estimates before any work", "Current diagnostic equipment", "Every repair guaranteed"],
    submit: "Request Appointment",
    note: "We'll call to confirm your time. Need it sooner? Call",
    fields: [
      [{ name: "name", label: "Name", required: true, autoComplete: "name" }, { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" }],
      [{ name: "email", label: "Email", type: "email", autoComplete: "email" }, { name: "vehicle", label: "Vehicle", placeholder: "Year, make, model" }],
      [{ name: "service", label: "Service", type: "select", placeholder: "Choose a service…", options: ["Not sure / diagnosis", "Brake Service", "Alignment Service", "Diagnostics", "Auto Electrical", "Maintenance", "Engine Service", "Exhaust Service", "Heating & A/C"] }, { name: "date", label: "Preferred day", type: "date" }],
      { name: "notes", label: "What's going on?", type: "textarea", placeholder: "Noises, warning lights, when it started…" },
    ],
  },

  VISIT: {
    nav: "Visit",
    eyebrow: "VISIT THE SHOP",
    title: ["Find us on ", "Marshall Street."],
    areas: "Serving Arvada, Wheat Ridge, Westminster, Broomfield and Golden.",
  },

  FOOTER_BLURB: "Auto repair, brake service and diagnostics for Arvada and the northwest metro.",
  SOCIAL_LINKS: [
    { name: "Google", url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`, icon: Star },
  ],
};
