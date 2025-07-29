import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Import your Header and Footer components
import Header from "../components/Header"; // Make sure this path is correct
import Footer from "../components/Footer"; // Make sure this path is correct
import { LanguageProvider } from "../contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alpha Tech",
  description: "Replicated from a screenshot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {/* 2. Place your Header component here, above the page content */}

          {/* It's good practice to wrap the main content in a <main> tag */}
          <Header />
          <main>{children}</main>

          {/* 3. Place your Footer component here, below the page content */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}