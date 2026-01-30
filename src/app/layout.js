// src/app/layout.js
import "./global.css";
// ... other imports
import Head from 'next/head';

export const metadata = {
  title: "AL Fateen",
  description: "Next.js migrated site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

<Head>
  <link
    rel="preload"
    as="image"
    href="/images/img1.webp"
    media="(min-width: 768px)"
  />
  <link
    rel="preload"
    as="image"
    href="/images/mob-1.webp"
    media="(max-width: 767px)"
  />
</Head>
      {/* ADD THIS PROP 👇 */}
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}