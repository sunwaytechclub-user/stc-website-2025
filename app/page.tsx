"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import GradientText from "@/GradientText/GradientText";
import Event from "@/components/Event";
import AboutUs from "@/components/AboutUs";
import Join from "@/components/Join";
import PastEvent from "@/components/PastEvent";
import Collab from "@/components/Collab";

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <Nav />
      <Hero />
      <AboutUs />
      <Event />
      <PastEvent />
      <Join />
      <Collab/>
    </div>
  );
}

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <span className="text-3xl font-bold">STC</span>
      <button
        onClick={() => {
          document.getElementById("schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        VIEW SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
};

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

  const clip1 = useTransform(scrollY, [0, 1500], [30, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [70, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
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
        backgroundImage:
          "url(/images/Hero.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

