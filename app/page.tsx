"use client";
import Event from "@/components/Event";
import AboutUs from "@/components/AboutUs";
import Join from "@/components/Join";
import PastEvent from "@/components/PastEvent";
import Collab from "@/components/Collab";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <AboutUs />
      <Event />
      <PastEvent />
      <Join />
      <Collab/>
    </div>
  );
}
