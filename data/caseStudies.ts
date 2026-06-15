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
    title: "3X More Clients in The First Month",
    metrics: [
      { value: "+300%", label: "Leads" },
      { value: "+150%", label: "Organic Traffic" },
      { value: "x2", label: "Digital Footprint" },
    ],
    timeframe: "8 Months",
    metadata: {
      services: "Web Design & SEO",
      client: "Dolce Far Niente",
      year: 2025,
      whatWeDidSummary: "Dolce Far Niente needed a complete digital overhaul. We implemented a high-conversion web design and a targeted SEO strategy, resulting in a 300% increase in lead generation within the first month."
    },
    fullStory: {
      objective: {
        problem: "To increase online visibility and drive a consistent pipeline of high-quality leads.",
        context: "The client struggled with low traffic and an outdated web presence that failed to convert visitors."
      },
      whatWeDid: [
        "Website Overhaul: Redesigned the site for high conversion rates.",
        "SEO Strategy: Implemented targeted, localized keyword optimization.",
        "Performance Tuning: Optimized site speed and user experience."
      ],
      creativeProcess: [
        "Market Research: Analyzed niche competitors to identify gaps.",
        "Design System: Built a custom, brand-aligned UI.",
        "SEO Implementation: Executed an on-page and off-page optimization plan."
      ],
      results: "Achieved a 300% increase in leads and a 150% boost in organic traffic within the first month.",
      conclusion: "By modernizing their digital infrastructure, we turned the client's website into a reliable engine for customer acquisition."
    },
  },
  {
    id: 2,
    slug: "pochara-studio",
    category: ["SEO", "Google Ads"],
    categoryLabel: "SEO / GOOGLE ADS",
    clientName: "Pochara Studio",
    image: "/img/testimonials/testimonial2.png",
    title: "2X More Client Acquisition",
    metrics: [
      { value: "+210%", label: "Leads" },
      { value: "+165%", label: "Website Traffic" },
      { value: "-42%", label: "CPA" },
    ],
    timeframe: "6 Months",
    metadata: {
      services: "SEO & Google Ads",
      client: "Pochara Studio",
      year: 2025,
      whatWeDidSummary: "For Pochara Studio, we focused on aggressive Google Ads scaling and long-tail SEO keywords. This reduced their Customer Acquisition Cost by 42% while doubling their overall client intake."
    },
    fullStory: {
      objective: {
        problem: "To lower acquisition costs while increasing the volume of incoming client appointments.",
        context: "The client was spending too much per lead and needed a more efficient marketing mix."
      },
      whatWeDid: [
        "Ads Scaling: Optimized Google Ads campaigns for better ROAS.",
        "Keyword Research: Identified high-intent, long-tail SEO terms.",
        "Funnel Optimization: Streamlined the booking path for users."
      ],
      creativeProcess: [
        "Data Analysis: Reviewed campaign performance to eliminate waste.",
        "Strategy Adjustment: Pivoted toward high-performing long-tail keywords.",
        "Testing: Conducted A/B testing on ad creative and copy."
      ],
      results: "Reduced Customer Acquisition Cost (CPA) by 42% and doubled overall client intake.",
      conclusion: "Through focused ad spend and high-intent SEO, we created a sustainable and cost-effective acquisition engine."
    },
  },
];