import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "SocialFlow AI",
  description: "Ton equipe social media. Powered by AI.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}