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
      <NavBar />
      <main className="flex-grow">
     
        <Hero />
       
        <Features/>
        <WobbleCardDemo/>
        <Faqs/>
        
      </main>
      <Footer />
    </div>
  );
}