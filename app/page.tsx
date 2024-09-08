"use client";
import NavBar from "../components/ui/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Faqs from "../components/Faqs";
import Banner from "../components/ui/Banner";

import Features from "../components/Features";
import { WobbleCardDemo } from "@/components/Bento";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="wobbleCardDemo">
          <WobbleCardDemo />
        </section>
        <section id="faqs">
          <Faqs />
        </section>
      </main>
      <Footer />
    </div>
  );
}
