// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../components/ui/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vault App",
  description: "Get on PlayStore and AppStore now!",
  openGraph: {
    type: 'website',
    url: 'https://ycryptvault.web.app/',
    title: 'Vault App',
    description: 'Get on PlayStore and AppStore now!',
    // image: 'https://example.com/og-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle',
    title: 'Vault App',
    description: 'Get on PlayStore and AppStore now!',
    // image: 'https://example.com/twitter-image.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
