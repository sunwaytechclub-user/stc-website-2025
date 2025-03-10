"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import Event from "@/components/Event";
import AboutUs from "@/components/AboutUs";
import Join from "@/components/Join";
import PastEvent from "@/components/PastEvent";
import Collab from "@/components/Collab";
import Navbar from "@/components/Navbar";

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



const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100svh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  // Clip path animation - image expands from center outward
  // Smaller initial window (40% of viewport)
  const clip1 = useTransform(scrollY, [0, 1500], [30, 0]); 
  const clip2 = useTransform(scrollY, [0, 1500], [80, 100]);  
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // Image scaling and fade effects
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["200%", "100%"]  // Changed from 170% to 200% for more dramatic initial zoom
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-[100svh] w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url(/images/Hero.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

