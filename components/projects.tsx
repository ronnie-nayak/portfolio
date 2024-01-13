import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const itemer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      dureation: 0.5,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
  exit: { opacity: 0 },
};

const data = [1, 2, 3]
export default function Projects() {
  const router = useRouter()
  let { scrollYProgress } = useScroll()
  let y = useTransform(scrollYProgress, [0, 1], ["-50%", "60%"])
  return (
    <div id="projects" className="p-9 pt-40">
      <h2 className="text-5xl font-bold mb-5">Projects</h2>
      <div className="border border-black mb-16 mr-5"></div>
      <AnimatePresence>
        <motion.div variants={container} initial="hidden" whileInView="show" exit="exit" className="bg-[F5F5F5] flex gap-9">
          {data.map((item, index) => (

            <motion.div onClick={() => router.push("/project1")} layoutId={"" + item} className="group w-[30%] h-[60vh] rounded-2xl overflow-hidden"
              variants={itemer} key={index}
            >
              <motion.div style={{
                background: `url('/${item}.jpeg') center `,
                backgroundSize: "cover",
                y
              }} className="h-[70vh] group-hover:scale-150"></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

    </div >
  )
}
