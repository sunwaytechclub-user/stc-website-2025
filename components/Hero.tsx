'use client'
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const SECTION_HEIGHT = 1500;
  const { scrollY } = useScroll();

  // Expanding Clip Path Animation
  const clip1 = useTransform(scrollY, [0, 1500], [30, 0]); 
  const clip2 = useTransform(scrollY, [0, 1500], [80, 100]);  
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // Background Scaling & Fade-out Animation
  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["200%", "100%"]);
  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

  // Scroll Text Animation
  const scrollTextOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100svh)` }}
      className="relative w-full"
    >
      {/* Scroll Down Text */}
      <motion.div 
        className="fixed inset-x-0 mx-auto top-[80%] w-fit text-white text-2xl font-medium z-20 flex flex-col items-center gap-2"
        style={{ opacity: scrollTextOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          y: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <span>Scroll Down</span>
        <span className="text-3xl">↓</span>
      </motion.div>

      {/* Hero Image (sticky, always on screen) */}
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

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
}
