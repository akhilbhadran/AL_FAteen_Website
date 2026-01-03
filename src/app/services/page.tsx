import AlFateenContent from "../../components/Services/AlFateenContent";

// --- SEO METADATA ---
export const metadata = {
  title: "Al Fateen | Premium Cleaning & Pest Control Ras Al Khaimah",
  description: "Experience the gold standard in hygiene. Al Fateen provides municipality-approved cleaning and pest control services in Ras Al Khaimah with a focus on luxury residential and commercial protection.",
  keywords: [
    "luxury cleaning Ras Al Khaimah",
    "premium pest control UAE",
    "Al Fateen Services",
    "termite treatment RAK",
    "marble polishing Ras Al Khaimah",
    "villa cleaning services",
    "sanitization experts"
  ],
  openGraph: {
    title: "Al Fateen | The Art of Hygiene",
    description: "Municipality approved, eco-friendly cleaning and pest control in Ras Al Khaimah.",
    url: "https://cleanpro.ae", 
    siteName: "Al Fateen Services",
    locale: "en_AE",
    type: "website", // FIXED: Changed from 'business.business' to 'website'
  },
};

export default function Page() {
  return <AlFateenContent />;
}