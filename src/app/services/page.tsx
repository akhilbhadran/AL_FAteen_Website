

import AlFateenContent from "../../components/Services/AlFateenContent";

// --- SEO METADATA ---
// Note: Title and Description help improve visibility for "Best Cleaning Services in Ras Al Khaimah"
export const metadata = {
  title: "Al Fateen | Premium Cleaning & Pest Control Ras Al Khaimah",
  description: "Experience the gold standard in hygiene. Al Fateen provides municipality-approved cleaning and pest control services in Ras Al Khaimah.",
  keywords: [
    "luxury cleaning Ras Al Khaimah",
    "premium pest control UAE",
    "Al Fateen Services",
    "termite treatment RAK",
    "marble polishing Ras Al Khaimah",
  ],
  openGraph: {
    title: "Al Fateen | The Art of Hygiene",
    description: "Municipality approved cleaning and pest control in Ras Al Khaimah.",
    url: "https://al-fateen.com", 
    siteName: "Al Fateen Services",
    locale: "en_AE",
    type: "website", 
  },
};

export default function Page() {
  return <AlFateenContent />;
}