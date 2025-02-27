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
      <ParallaxTexts />
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


interface ParallaxTextProps {
  text: string;
  start: number;
  end: number;
  className?: string;
  colors?: string[]; // Add this new prop
}

const ParallaxTexts = () => {
  return (
    <div className="mx-auto w-full px-4 pt-[100px] md:pt-[200px]">
      <ParallaxText
        text="#Industry"
        start={-200}
        end={200}
        className="w-2/3 md:w-1/3 text-4xl md:text-6xl font-bold text-white ml-[5%] md:ml-[10%]"
        colors={["#40ffaa", "#4079ff", "#40ffaa"]}
      />
      <ParallaxText
        text="<Code/>"
        start={200}
        end={-250}
        className="w-full md:w-1/2 text-5xl md:text-7xl font-bold text-white ml-[20%] md:ml-[60%]"
        colors={[" #12c2e9, #c471ed, #f64f59"]}
      />
      <ParallaxText
        text="#Tech"
        start={350}
        end={-150}
        className="w-2/3 md:w-1/3 text-3xl md:text-5xl font-bold text-white ml-[10%] md:ml-[55%]"
        colors={["#f7ff00", "#db36a4", "#f7ff00"]}
      />
      <ParallaxText
        text="#Innovation"
        start={-300}
        end={200}
        className="w-full md:w-1/2 text-4xl md:text-6xl font-bold text-white ml-[30%] md:ml-[60%]"
        colors={["#FF0080", "#FF8C00", "#FF0080"]}
      />
      <ParallaxText
        text="#Education"
        start={250}
        end={-200}
        className="w-2/3 md:w-1/3 text-3xl md:text-5xl font-bold text-white ml-[15%] md:ml-[25%]"
        colors={["#4facfe", "#00f2fe", "#4facfe"]}
      />
    </div>
  );
};

const ParallaxText = ({ className, text, start, end, colors = ["#ffaa40", "#9c40ff", "#ffaa40"] }: ParallaxTextProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    >
      <GradientText colors={colors} animationSpeed={8}>
        {text}
      </GradientText>
    </motion.div>
  );
};