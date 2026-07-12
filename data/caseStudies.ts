export interface CaseStudy {
  id: number;
  slug: string;
  category: string[];
  categoryLabel: string;
  clientName: string;
  image: string;
  title: string;
  metrics: { value: string; label: string }[];
  timeframe: string;
  metadata: {
    services: string;
    client: string;
    year: number;
    whatWeDidSummary: string;
  };
  fullStory: {
    objective: { problem: string; context: string };
    whatWeDid: string[];
    creativeProcess: string[];
    results: string;
    conclusion: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "dolce-far-niente",
    category: ["Web Design", "SEO"],
    categoryLabel: "WEB DESIGN / SEO",
    clientName: "Dolce Far Niente",
    image: "/img/testimonials/testimonial1.png",
    title: "Tripled Client Base & Expanded Digital Presence",
    metrics: [
      { value: "x3", label: "Client Bookings" },
      { value: "x2", label: "Instagram Footprint" },
      { value: "+85%", label: "Search Visibility" },
    ],
    timeframe: "3 Months",
    metadata: {
      services: "Web Design, SEO & Social Optimization",
      client: "Dolce Far Niente",
      year: 2026,
      whatWeDidSummary: "Dolce Far Niente needed clearer online visibility for her core services and an easier way for clients to book. We deployed a clean web design, optimized her local SEO based on specific services, and polished her Google Business profile and Instagram footprint."
    },
    fullStory: {
      objective: {
        problem: "To increase online outreach, showcase services clearly, and drive consistent direct bookings.",
        context: "The client needed a streamlined way for online prospects to find her offerings and transition from casual social media scrollers to booked appointments."
      },
      whatWeDid: [
        "Website Redesign: Built a clean presence focused on service clarity and an easy booking flow.",
        "SEO Strategy: Implemented service-based localized keyword optimization.",
        "Profile Optimization: Refined and tuned both her Google Business profile and Instagram presence."
      ],
      creativeProcess: [
        "Service Mapping: Organized the core offerings so visitors immediately understand how to book.",
        "Social Alignment: Coordinated her Instagram branding with the new web touchpoints.",
        "Local Search Setup: Structured on-page and map-pack visibility around her primary service keywords."
      ],
      results: "Successfully tripled her incoming clientele and doubled her active Instagram reach and engagement footprint.",
      conclusion: "By aligning her digital touchpoints and search presence, we established a steady, reliable channel for client bookings."
    },
  },
  {
    id: 2,
    slug: "pochara-studio",
    category: ["SEO", "Google Business"],
    categoryLabel: "SEO / GOOGLE BUSINESS",
    clientName: "Pochara Studio",
    image: "/img/testimonials/testimonial2.png",
    title: "Steady Growth & Local Search Foundation",
    metrics: [
      { value: "3x", label: "Monthly Clients" },
      { value: "100%", label: "Setup Complete" },
      { value: "Local", label: "Map Optimization" },
    ],
    timeframe: "1 Month",
    metadata: {
      services: "Web Design, SEO & Google Business Setup",
      client: "Pochara Studio",
      year: 2026,
      whatWeDidSummary: "For Pochara Studio, we established the initial digital foundation by deploying a clean website, executing core SEO, and setting up her Google Business profile to capture local search traffic."
    },
    fullStory: {
      objective: {
        problem: "To establish a functional digital storefront and capture local search intent.",
        context: "The client needed a professional web presence and a verified local map footprint to support her baseline word-of-mouth clientele."
      },
      whatWeDid: [
        "Website Launch: Developed a streamlined baseline site showcasing her core offerings.",
        "Core SEO: Implemented foundational on-page search optimization.",
        "Google Business Setup: Initialized and configured her local map listing."
      ],
      creativeProcess: [
        "Platform Setup: Built out clean, readable service structures.",
        "Local Optimization: Configured foundational directory and map parameters for early discovery."
      ],
      results: "Established a solid operational presence bringing in a steady flow of roughly triple the baseline client inquiries.",
      conclusion: "With the core web and map infrastructure live, the studio is primed for consistent, organic local visibility."
    },
  },
];