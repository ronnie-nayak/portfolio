import { handleScroll } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { LuArrowUpRight } from "react-icons/lu";

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemer = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
};


const projectLinks = [{
  layoutId: "0",
  bigImage: "url('/project/big-eat.png') 50% -5%",
  imageSize: "200%",
  setterFunction: "first",
  smallImage: "/project/small-eat.png",
  middleImage: "url('/project/eat-street.png') center ",
  link: "/eat-street#eat-street"
}, {
  layoutId: "1",
  bigImage: "url('/project/big-save.png') 30% 150%",
  imageSize: "250%",
  setterFunction: "second",
  smallImage: "/project/small-save.png",
  middleImage: "url('/project/save-up.png') center",
  link: "/save-up#save-up"
}, {
  layoutId: "2",
  bigImage: "url('/project/big-arn.png') 50% 65%",
  imageSize: "200%",
  setterFunction: "third",
  smallImage: "/project/small-arn.jpeg",
  middleImage: "url('/project/arn.png') center",
  link: "/arn#arn"

}]

function TransitionComponent({ layoutId, link, middleImage }: { layoutId: string, link: string, middleImage: string }) {
  const router = useRouter()
  return (

    <div className="fixed top-0 left-0 p-24 flex flex-col items-center w-screen h-screen z-20"
    >
      <motion.div layoutId={layoutId} className="w-[70vw] h-[20vh] sm:h-[70vh]"
        onLayoutAnimationComplete={() => router.push(link)}
        style={{
          background: middleImage,
          backgroundSize: "cover",
        }}></motion.div>

    </div >
  )
}

const data = ["project/eat-street.png", "project/save-up.png", "project/arm.png"]
export default function Projects() {
  const router = useRouter()
  let { scrollYProgress } = useScroll()
  let y = useTransform(scrollYProgress, [0, 1], ["-50%", "100%"])
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  return (
    <div id="projects" className="p-9 sm:pt-40">
      <h2 className="sm:text-[2.25vw] font-bold mb-5">Projects</h2>
      <div className="border border-black mb-16 mr-5"></div>
      <motion.div variants={container} initial="hidden" whileInView="show" className="bg-[F5F5F5] flex flex-col sm:flex-row gap-9">
        {
          projectLinks.map((project, index) => (
            <div key={index} className="w-full sm:w-[30%]">
              <div className="group  h-[10vh] sm:h-[60vh] rounded-2xl overflow-hidden  cursor-pointer  relative">
                <motion.div className=""
                  variants={itemer}
                  layoutId={project.layoutId}
                >
                  <motion.div

                    whileHover={{ backdropFilter: "blur(2px)" }}
                    style={{
                      background: project.bigImage,
                      backgroundSize: project.imageSize,
                      y
                    }}

                    // whileHover={{ filter: "blur(2px)" }}
                    className="h-[20vh] sm:h-[70vh]">
                  </motion.div>
                  <div
                    onClick={() => {
                      if (project.setterFunction === "first") setFirst(true)
                      if (project.setterFunction === "second") setSecond(true)
                      if (project.setterFunction === "third") setThird(true)
                    }}
                    className="absolute w-full h-full top-0 left-0 group-hover:backdrop-blur-[2px]">

                    <img src={project.smallImage} className="group-hover:opacity-100 opacity-0 transition duration-500 h-16 sm:h-40 z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl" />
                  </div>
                </motion.div>

              </div>
              <motion.div className="flex flex-col mt-9"
                variants={itemer}
                initial="hidden"
                whileInView="show"
              >
                <Link href="" className="linker"><h2>Visit Website</h2><TbWorld size={45} /><LuArrowUpRight size={45} /></Link>
                <Link href="" className="linker"><h2>Github Code</h2><FaGithub size={45} /><LuArrowUpRight size={45} /></Link>
              </motion.div>
            </div>
          ))
        }



      </motion.div >
      {
        projectLinks.map((project, index) => {
          if (project.setterFunction === "first" && first) return <TransitionComponent key={`first ${index}`} layoutId={project.layoutId} link={project.link} middleImage={project.middleImage} />
          if (project.setterFunction === "second" && second) return <TransitionComponent key={`second ${index}`} layoutId={project.layoutId} link={project.link} middleImage={project.middleImage} />
          if (project.setterFunction === "third" && third) return <TransitionComponent key={`third ${index}`} layoutId={project.layoutId} link={project.link} middleImage={project.middleImage} />
        })
      }

      {

        (first || second || third) &&

        <motion.div className="fixed top-0 left-0 p-24 grid place-items-center w-screen h-screen bg-cream z-10 "
          initial={{ opacity: 0, filter: "blur(2px)" }}
          animate={{ opacity: 1, filter: "blur(1px)" }}
          transition={{ duration: 0.9 }}
        >
        </motion.div >
      }
    </div >
  )
}

