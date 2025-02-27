import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";

interface ScheduleItemProps {
  title: string;
  date: string;
  location: string;
}

const ScheduleItem = ({ title, date, location }: ScheduleItemProps) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <p>What</p>
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="my-5 text-4xl font-black uppercase text-zinc-50"
      >
        We Do
      </motion.h1>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <p className="text-lg">
        At STC, we bridge the gap between tech education, the tech industry, and technopreneurship by hosting events like talks, career talks, company visits, hands-on workshops, and tech series. These activities are designed to help you learn new skills, gain industry insights, and connect with like-minded individuals. Whether you're a beginner or an aspiring technopreneur, STC is your platform to grow, innovate, and thrive in the tech world!
        </p>
      </motion.div>
      <ScheduleItem title="Mission 1" date="Dec 9th" location="Florida" />
      <ScheduleItem title="Mission 2" date="Dec 20th" location="Texas" />
      <ScheduleItem title="Mission 3" date="Jan 13th" location="Florida" />
    </section>
  );
}
