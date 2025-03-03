import { motion } from "framer-motion";
import InfiniteScroll from "../src/blocks/Components/InfiniteScroll/InfiniteScroll";
import GradientText from "@/GradientText/GradientText";
import SpotlightCard from "@/src/blocks/Components/SpotlightCard/SpotlightCard";
import { DM_Sans } from 'next/font/google';
import { HiSparkles } from "react-icons/hi2";
import { Button } from "@/components/ui/button"
import { FaArrowRightLong  } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Event() {
  const handleButtonClick = (e: React.MouseEvent) => {
    // Stop event propagation to prevent SpotlightCard from capturing it
    e.stopPropagation()
    console.log("Button clicked!")
  }

  const scrollItems = [
    { content: <GradientText
      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
      animationSpeed={3}
      showBorder={true}
      className="p-2 md:p-4 text-2xl md:text-5xl"
      >
      Career Talk
      </GradientText> },

    { content: <GradientText
      colors={["#ff1b6b", "#45caff", "#ff1b6b", "#45caff", "#ff1b6b"]}
      animationSpeed={3}
      showBorder={true}
      className="p-2 md:p-4 text-2xl md:text-5xl"
      >
      Tech Talk
      </GradientText> },

    { content: <GradientText
      colors={["#40c9ff", "#e81cff", "#40c9ff", "#e81cff", "#40c9ff"]}
      animationSpeed={3}
      showBorder={true}
      className="p-2 md:p-4 text-2xl md:text-5xl"
      >
      Company Visits
      </GradientText> },

      { content: <GradientText
      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
      animationSpeed={3}
      showBorder={true}
      className="p-2 md:p-4 text-2xl md:text-5xl"
      >
      Hands-on Workshop
      </GradientText> },

      { content: <GradientText
        colors={["#84ffc9", "#aab2ff", "#eca0ff", "#84ffc9", "#aab2ff","#84ffc9"]}
        animationSpeed={3}
        showBorder={true}
        className="p-2 md:p-4 text-2xl md:text-5xl"
        >
        Tech Series
        </GradientText> },
  ];

  return (
    <section
      id="event"
      className="mx-auto max-w-5xl px-4 py-24 md:py-48 text-white"
    >
      <p className="heading-style-1">What We Do</p>
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="heading-style-2"
      >
        Events
      </motion.h1>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <p className="text-sm sm:text-base md:text-lg ">
        At STC, we bridge the gap between tech education, the tech industry, and technopreneurship 
        by hosting events like 
        <span className="italic font-bold"> Tech Talks,</span>
        <span className="italic font-bold"> Career Talks</span>
        <span className="italic font-bold"> Company Visit,</span>
        <span className="italic font-bold"> Hands-on Workshops </span> and
        <span className="italic font-bold"> Tech Series. </span>
        These activities are designed to help you learn new skills, gain industry insights, and connect 
        with like-minded individuals. Whether you&apos;re a beginner or an aspiring technopreneur, 
        STC is your platform to grow, innovate, and thrive in the tech world!
        </p>
        <div className="mt-8 md:mt-12">
          <InfiniteScroll
            items={scrollItems}
            width="100%"
            itemMinHeight={100}
            autoplay={true}
            autoplaySpeed={3}
            isTilted={true}
            tiltDirection="left"
            pauseOnHover={false}
            isInteractive={false}
          />
        </div>
      </motion.div>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <SpotlightCard className="bg-[#282824] p-6 rounded-lg shadow-lg shadow shadow-[#54544e]" spotlightColor="rgba(110, 109, 104, 0.48)">
          <div className="flex flex-col h-full justify-center items-start" onClick={(e) => e.stopPropagation()}>
            <motion.div
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className=""
            >
              <HiSparkles className="text-4xl  mb-4" />
              <h3 className={`${dmSans.className}  text-xl md:text-2xl font-bold mb-2`}>Checkout & Join Our Latest Events</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg">
              Never miss an event! Subscribe to our Luma calendar and get notified about upcoming activities, workshops, and gatherings. Easily register with just one click!
              </p>
              <Button
                className="relative z-10 bg-[#43433f] hover:opacity-90 transition-opacity px-8 py-2  font-semibold"
                onClick={handleButtonClick}
                asChild
              >
                <a href="https://lu.ma/sunwaytechclub" target="_blank" rel="noopener noreferrer">
                  STC Luma Calendar <FaArrowRightLong className="inline-block " />
                </a>
              </Button>
            </motion.div>
          </div>
        </SpotlightCard>
        
        <SpotlightCard className="bg-[#282824] p-6 rounded-lg shadow-lg shadow shadow-[#54544e]" spotlightColor="rgba(110, 109, 104, 0.48)">
          <div className="flex flex-col h-full justify-center items-start" onClick={(e) => e.stopPropagation()}>
            <motion.div
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className=""
            >
              <FaInstagram className="text-4xl mb-4" />
              <h3 className={`${dmSans.className} text-xl md:text-2xl font-bold mb-2`}>Follow Us On Instagram</h3>
              <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg">
                Check out event highlights, behind-the-scenes moments, and upcoming activities on our Instagram. Follow us to stay connected!
              </p>
              <Button
                className="relative z-10 bg-[#43433f] hover:opacity-90 transition-opacity px-8 py-2  font-semibold"
                onClick={handleButtonClick}
                asChild
              >
                <a href="https://www.instagram.com/sunwaytechclub/?hl=en" target="_blank" rel="noopener noreferrer">
                  STC Instagram <FaArrowRightLong className="inline-block " />
                </a>
              </Button>
            </motion.div>
          </div>
        </SpotlightCard>
      </div>
      
    </section>
  );
}
