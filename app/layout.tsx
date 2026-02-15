import "./globals.css";

export const metadata = {
  title: "Beez Pixel",
  description: "Agentie web"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
