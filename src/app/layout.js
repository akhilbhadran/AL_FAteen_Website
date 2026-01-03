// src/app/layout.js
import "./global.css";
// ... other imports

export const metadata = {
  title: "AL Fateen",
  description: "Next.js migrated site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ADD THIS PROP 👇 */}
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}