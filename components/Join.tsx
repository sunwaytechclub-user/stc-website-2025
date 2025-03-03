import Stepper, { Step } from "@/components/bits/Stepper/Stepper";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const NeonGradientCard = dynamic(
  () =>
    import("./magicui/neon-gradient-card").then(
      (mod) => mod.NeonGradientCard
    ),
  { ssr: false, loading: () => null }
);

export default function Join() {
  return (
    <section id="join" className="mx-auto max-w-5xl px-4 py-48 text-white">
      <p className="heading-style-1">Why Join Us?</p>
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
        className="heading-style-2"
      >
        Be part of the tech revolution
      </motion.h1>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
      >
        <p className="text-sm sm:text-base md:text-lg">
        Technology is advancing fast—why not grow with it? At STC, you&apos;ll gain hands-on experience, connect with like-minded 
        individuals, and explore endless opportunities in the tech world. Whether you&apos;re a beginner or an expert, there&apos;s a place 
        for you here.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.3 }}
        className="w-full sm:w-[60%] md:w-[60%] lg:w-[50%] xl:w-[50%] mx-auto mt-10"
      >
        <NeonGradientCard>
        <Stepper
          initialStep={1}
          onStepChange={(step) => console.log(`Step ${step} reached`)}
          onFinalStepCompleted={() => console.log("Welcome aboard!")}
          backButtonText="Previous"
          nextButtonText="Next"
          className="bg-[#282824] rounded-[20px] p-2 sm:p-4 md:p-6 md:p-8"
        >
          <Step>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Join the Club!</h2>
            <p className="text-base sm:text-lg text-[#D9DADB] mb-3 sm:mb-4">
              Be part of our family by signing up as a member. We&apos;re excited to have you on board!
            </p>
          </Step>
          <Step>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Make a One-Time Payment</h2>
            <p className="text-base sm:text-lg text-[#D9DADB] mb-3 sm:mb-4">
              Secure your membership with a one-time fee of RM10. Payment details will be provided upon sign-up.
            </p>
          </Step>
          <Step>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Send Us Your Details</h2>
            <p className="text-base sm:text-lg text-[#D9DADB]">
              Email the following information to{" "}
              <span className="text-white font-semibold">sunwaytechclub@gmail.com</span>:
            </p>
            <ul className="list-disc list-inside text-[#D9DADB] text-sm sm:text-base space-y-1 sm:space-y-2 mb-3 sm:mb-4 mt-2">
              <li>Name</li>
              <li>Student ID</li>
              <li>Imail Address</li>
              <li>Course Programme</li>
              <li>Payment Receipt</li>
            </ul>
          </Step>
          <Step>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Check Your Inbox</h2>
            <p className="text-base sm:text-lg text-[#D9DADB] mb-3 sm:mb-4">
              Hang tight! You will receive a confirmation email once your membership is processed.
            </p>
          </Step>
        </Stepper>
        </NeonGradientCard>
      </motion.div>
    </section>
  );
}
