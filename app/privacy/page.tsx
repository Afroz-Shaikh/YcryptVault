
"use client";

import { WobbleCardDemo } from "@/components/Bento";
import NavBar from "../../components/ui/Navbar";
import Footer from "../../components/Footer";
import Privacy from "../../components/Privacy";
  
export default function Home() {
  // npx nx build next-app
  return (
    <div className="flex flex-col min-h-screen  ">
      {/* <NavBar /> */}
      <main className="flex-grow">
     
    
    {/* TErms & COnditions coneteent*/}
      <div className="bg-black">
      <Privacy />
      </div>
      </main>
      <Footer />
    </div>
  );
}