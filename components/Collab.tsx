import { motion } from "framer-motion";
import ShinyText from "@/src/blocks/TextAnimations/ShinyText/ShinyText";
import LogoWall from "./bits/LogoWall/LogoWall";

const logoImgs = [
  { imgUrl: "https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/moneylion-logo.png", altText: "React Bits Logo" },
  { imgUrl: "https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/paynet_logo.png", altText: "React Bits Logo" },
  { imgUrl: "https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/deloitte_logo.png", altText: "React Bits Logo" },
  { imgUrl: "https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/cimb_logo.png", altText: "React Bits Logo" },
  { imgUrl: "https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/embeddedllm_logo.png", altText: "React Bits Logo" },
  { imgUrl: "https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/ethkl_logo.png", altText: "React Bits Logo" },
  { imgUrl: "https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/dd_logo.png", altText: "React Bits Logo" },
  { imgUrl: "https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/futurelab_logo.png", altText: "React Bits Logo" },
  { imgUrl: "https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/aws_logo.png", altText: "React Bits Logo" },
  { imgUrl: "https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/gdgkl_logo.png", altText: "React Bits Logo" },
  { imgUrl: "https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/Sas_logo.png", altText: "React Bits Logo" },
  { imgUrl: "https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/Mdec_logo.png", altText: "React Bits Logo" },
];

export default function Join() {
  return (
    <section id="collab" className="mx-auto max-w-5xl px-4 py-48 text-white">
      <p className="heading-style-1">Work With Us</p>
        <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
        className="heading-style-2"
      >
        Collaboration drive innovation!
      </motion.h1>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
      >
        <p className="text-sm sm:text-base md:text-lg">
        Are you an organization, startup, or fellow tech enthusiast looking 
        to collaborate? We&apos;re open to partnerships for workshops, hackathons, mentorship programs, and more! 
        Let&apos;s work together to create impactful experiences. Reach out to us at <span className="font-bold">sunwaytechclub@gmail.com</span>, and let&apos;s build something great together!</p>
      </motion.div>
      <div className="justify-self-center mt-10">
      <ShinyText text="Past Collaborators" disabled={false} speed={5} className='text-2xl sm:text-3xl font-bold md:text-5xl text-white' />
      </div>
      <div style={{height: '600px', width: '100%', position: 'relative'}}>
        <LogoWall
          items={logoImgs}
          direction='horizontal'
          pauseOnHover={false}
          size='clamp(8rem, 1rem + 20vmin, 25rem)'
          duration='30s'
          bgColor='#000'
          bgAccentColor='#282824'
        />  
      </div>
    </section>
  );
}
