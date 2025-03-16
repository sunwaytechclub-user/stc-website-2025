import { motion } from "framer-motion";
import FallingText from "@/src/blocks/TextAnimations/FallingText/FallingText";
import { useState, useRef } from "react";
import ShinyText from "@/src/blocks/TextAnimations/ShinyText/ShinyText";


export default function Schedule() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const fallingTextRef = useRef<{ trigger: () => void } | null>(null);

  const handleClick = () => {
    fallingTextRef.current?.trigger();
    setIsButtonClicked(true);
  };

  return (
    <section
      id="aboutus"
      className="mx-auto max-w-5xl px-4 py-24 sm:py-32 md:py-48 text-white relative"
    >
      <div className="relative z-10">
        <p className="heading-style-1">Who Are We</p>
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="my-3 sm:my-5 text-2xl sm:text-3xl md:text-4xl font-black uppercase text-zinc-50"
        >
          Sunway Tech Club
        </motion.h1>
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <p className="text-sm sm:text-base md:text-lg text-justify">
          <span className="italic font-semibold">STC (Sunway Tech Club)</span> is a dynamic tech community dedicated to 
          <span className="font-bold"><a className="underline underline-offset-4 decoration-[#1cb37b] decoration-wavy"> bridging the gap</a> between <a className="underline underline-offset-4 decoration-[#3ab3cc] decoration-dashed decoration-4">tech education, the tech industry,</a> and <a className="underline underline-offset-2 decoration-[#43539b] decoration-wavy decoration-2">technopreneurship</a>
          </span>. 
          Our primary focus is on empowering Sunway students through engaging events, hands-on workshops, and 
          industry-driven activities that equip them with real-world skills. STC is more than just a club — it&apos;s a 
          thriving network of like-minded individuals who share a passion for technology and innovation. Whether you&apos;re 
          looking to upskill, explore career opportunities, or connect with fellow tech enthusiasts, STC provides the platform to 
          help you grow and achieve your goals.
          </p>
        </motion.div>
        <div className="flex justify-center">
          <div
            onClick={handleClick}
            className={` self-place-center mt-6 px-6 py-2 border-[1px] border-[#353535] bg-black rounded-2xl hover:bg-[#111] hover:cursor-pointer transition-all duration-300 ${
              isButtonClicked ? 'opacity-0 invisible' : 'opacity-100 visible'
            }`}
          >
            <ShinyText text="Don't Click Me" disabled={false} speed={3} className='shiny-text' />
            
          </div>
        </div>
        
      </div>
      <div className="h-[550px] md:h-[600px] absolute top-0 left-0 w-full z-0">
        <FallingText
          text={`#Industry #Tech #Education #Entrepreneurship #SunwayTechClub #STC #Innovation #Code #Hackathon #Workshop #Networking #Connections #Sustainability #Collaboration`} 
          highlightWords={[
            { word: "#Industry", color: "#42e19a" },
            { word: "#Education", color: "#45d5e6" },
            { word: "#SunwayTechClub", color: "#3950ba" },
            { word: "#STC", color: "#42e19a" },
            { word: "#Code", color: "#45d5e6" },
            { word: "#Workshop", color: "#3950ba" },
            { word: "#Networking", color: "#42e19a" },
            { word: "#Connections", color: "#45d5e6" },
            { word: "#Collaboration", color: "#3950ba" },
          ]}
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize={"1.5rem"}
          mouseConstraintStiffness={0.2}
          onTriggerRef={fallingTextRef}
        />
      </div>
    </section>
  );
}
