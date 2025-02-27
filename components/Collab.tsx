import BlurText from "@/src/blocks/TextAnimations/BlurText/BlurText";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
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
];

export default function Join() {
  return (
    <section id="join" className="mx-auto max-w-5xl px-4 py-48 text-white">
      <div className="place-self-center">
        <BlurText
          text="Collab With Us?"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-7xl mb-8"
        />

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
