import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EduQuest - Unlock Your Global Future",
  description: "Your Study Abroad Journey Begins Here. Find the best courses, discover your perfect country, and get personalized study-abroad advice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} font-bricolage antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-R3CZ2D8ZHX" />
    </html>
  );
}
