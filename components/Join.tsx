import BlurText from "@/src/blocks/TextAnimations/BlurText/BlurText";
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
      <div className="place-self-center">
        <BlurText
          text="Wanna be part of us?"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-7xl mb-8"
        />
      </div>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        viewport={{ once: true }}
        className="w-[50%] place-self-center"
      >
        <NeonGradientCard className="">
        <Stepper
          initialStep={1}
          onStepChange={(step) => console.log(`Step ${step} reached`)}
          onFinalStepCompleted={() => console.log("Welcome aboard!")}
          backButtonText="Previous"
          nextButtonText="Next"
          className="bg-[#282824] rounded-[20px]"
        >
          <Step>
            <h2 className="text-3xl font-bold mb-4">Join the Club!</h2>
            <p className="text-lg text-[#D9DADB] mb-4">
              Be part of our family by signing up as a member. We&apos;re excited to have you on board!
            </p>
          </Step>
          <Step>
            <h2 className="text-3xl font-bold mb-4">Make a One-Time Payment</h2>
            <p className="text-lg text-[#D9DADB] mb-4">
              Secure your membership with a one-time fee of RM10. Payment details will be provided upon sign-up.
            </p>
          </Step>
          <Step>
            <h2 className="text-3xl font-bold mb-4">Send Us Your Details</h2>
            <p className="text-lg text-[#D9DADB]">
              Email the following information to{" "}
              <span className="text-white font-semibold">sunwaytechclub@gmail.com</span>:
            </p>
            <ul className="list-disc list-inside text-[#D9DADB] text-md space-y-2 mb-4 mt-2">
              <li>Name</li>
              <li>Student ID</li>
              <li>Imail Address</li>
              <li>Course Programme</li>
              <li>Payment Receipt</li>
            </ul>
          </Step>
          <Step>
            <h2 className="text-3xl font-bold mb-4">Check Your Inbox</h2>
            <p className="text-lg text-[#D9DADB] mb-4">
              Hang tight! You will receive a confirmation email once your membership is processed.
            </p>
          </Step>
        </Stepper>
        </NeonGradientCard>
      </motion.div>
    </section>
  );
}
