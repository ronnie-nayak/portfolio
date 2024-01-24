import { motion } from "framer-motion";

const skillsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Python",
  "Java",
  "Git",
  "GitHub",
  "Vercel",
  "Tailwind",
  "Prisma",
  "Recoil",
  "TRPC",
  "Turbo",
];

const customAni = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
    },
  }),
};

export default function Skill() {
  return (
    <div className="  scroll-mt-28 text-center sm:mb-40 mx-auto">
      <h2 className="my-10 sm:text-[2vw] font-bold underline">
        Technologies I have worked with
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsList.map((skill, index) => {
          return (
            <motion.li
              key={index}
              className="bg-white font-bold border border-black/[0.5] rounded-xl p-1 sm:px-9 sm:py-5 sm:m-1 text-[3vw] sm:text-[1.5vw]"
              variants={customAni}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {" "}
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
