"use client";
import Navbar from "./components/ui/Navbar";
import { ThreeDMarquee } from "./components/ui/3d-marquee";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-auto my-7 rounded-3xl p-2 ring-1 ring-neutral-700/10 w-full h-screen">
        <ThreeDMarquee />
        
      </div>
      
    </>
  );
}
