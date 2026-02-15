import "./globals.css";

export const metadata = {
  title: "Beez Pixel - Agentie Web Design",
  description: "Site-uri moderne, SEO, hosting si branding digital"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        {children}
      </body>
    </html>
  );
}
