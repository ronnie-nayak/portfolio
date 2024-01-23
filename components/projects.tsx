import { handleScroll } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

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


        <div className="w-full sm:w-[30%] h-[10vh] sm:h-[60vh] rounded-2xl overflow-hidden group cursor-pointer  relative">
          <motion.div className=""
            variants={itemer}
            layoutId={"0"}
          >
            <motion.div

              whileHover={{ backdropFilter: "blur(2px)" }}
              style={{
                background: `url('/project/big-eat.png') 50% -5%`,
                backgroundSize: "200%",
                y
              }}

              // whileHover={{ filter: "blur(2px)" }}
              className="h-[20vh] sm:h-[70vh]">
            </motion.div>
            <div
              onClick={() => setFirst(true)}
              className="absolute w-full h-full top-0 left-0 group-hover:backdrop-blur-[2px]">

              <img src="/project/small-eat.png" className="group-hover:opacity-100 opacity-0 transition duration-500 h-16 sm:h-40 z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </motion.div>

        </div>

        <div className="w-full sm:w-[30%] h-[10vh] sm:h-[60vh] rounded-2xl overflow-hidden group cursor-pointer  relative">
          <motion.div className=""
            variants={itemer}
            layoutId={"1"}
          >
            <motion.div

              whileHover={{ backdropFilter: "blur(2px)" }}
              style={{
                background: `url('/project/big-save.png') 30% 150%`,
                backgroundSize: "250%",
                y
              }}

              // whileHover={{ filter: "blur(2px)" }}
              className="h-[20vh] sm:h-[70vh]">
            </motion.div>
            <div
              onClick={() => setSecond(true)}
              className="absolute w-full h-full top-0 left-0 group-hover:backdrop-blur-[2px]">

              <img src="/project/small-save.png" className="group-hover:opacity-100 opacity-0 transition duration-500 h-16 sm:h-40 z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl" />
            </div>
          </motion.div>

        </div>

        <div className="w-full sm:w-[30%] h-[10vh] sm:h-[60vh] rounded-2xl overflow-hidden group cursor-pointer  relative">
          <motion.div className=""
            variants={itemer}
            layoutId={"2"}
          >
            <motion.div

              whileHover={{ backdropFilter: "blur(2px)" }}
              style={{
                background: `url('/project/big-arn.png') 50% 65%`,
                backgroundSize: "200%",
                y
              }}

              // whileHover={{ filter: "blur(2px)" }}
              className="h-[20vh] sm:h-[70vh]">
            </motion.div>
            <div
              onClick={() => setThird(true)}
              className="absolute w-full h-full top-0 left-0 group-hover:backdrop-blur-[2px]">

              <img src="/project/small-arn.jpeg" className="group-hover:opacity-100 opacity-0 transition duration-500 h-16 sm:h-40 z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl" />
            </div>
          </motion.div>

        </div>

        {/*   <motion.div className="group w-[30%] h-[10vh] sm:h-[60vh] rounded-2xl overflow-hidden cursor-pointer" */}
        {/*     variants={itemer} */}
        {/*     whileHover={{ filter: "blur(2px)" }} */}
        {/*   > */}
        {/*     <motion.div */}
        {/**/}
        {/*       style={{ */}
        {/*         background: `url('/project/big-save.png') 30% 150%`, */}
        {/*         backgroundSize: "250%", */}
        {/*         y */}
        {/*       }} */}
        {/*       layoutId={"1"} */}
        {/*       onClick={() => setSecond(true)} */}
        {/*       className="h-[20vh] sm:h-[70vh] group-hover:scale-150 "></motion.div> */}
        {/*   </motion.div> */}
        {/**/}
        {/*   <motion.div className="group w-[30%] h-[10vh] sm:h-[60vh] rounded-2xl overflow-hidden cursor-pointer" */}
        {/*     variants={itemer} */}
        {/*     whileHover={{ filter: "blur(2px)" }} */}
        {/*   // onClick={() => { */}
        {/*   //   window.scrollTo({ */}
        {/*   //     top: 0, */}
        {/*   //     behavior: "smooth" */}
        {/*   //   }) */}
        {/*   // }} */}
        {/*   > */}
        {/*     <motion.div */}
        {/**/}
        {/*       style={{ */}
        {/*         background: `url('/project/big-arn.png') 50% 65%`, */}
        {/*         backgroundSize: "200%", */}
        {/*         y */}
        {/*       }} */}
        {/*       layoutId={"2"} */}
        {/*       onClick={() => setThird(true)} */}
        {/*       className="h-[20vh] sm:h-[70vh] group-hover:scale-150 "></motion.div> */}
        {/*   </motion.div> */}
        {/**/}
      </motion.div>

      {
        first &&

        <div className="fixed top-0 left-0 p-24 flex flex-col items-center w-screen h-screen z-20"
        >
          <motion.div layoutId="0" className="w-[70vw] h-[20vh] sm:h-[70vh] "
            onLayoutAnimationComplete={() => router.push("/eat-street#eat-street")}
            style={{
              background: "url('/project/eat-street.png') center ",
              backgroundSize: "cover",
            }}></motion.div>

        </div >
      } {
        second &&

        <div className="fixed top-0 left-0 p-24 flex flex-col items-center w-screen h-screen z-20"
        >
          <motion.div layoutId="1" className="w-[70vw] h-[20vh] sm:h-[70vh] "
            onLayoutAnimationComplete={() => router.push("/save-up#save-up")}
            style={{
              background: "url('/project/save-up.png') center ",
              backgroundSize: "cover",
            }}></motion.div>

        </div >
      } {
        third &&

        <div className="fixed top-0 left-0 p-24 flex flex-col items-center w-screen h-screen z-20"
        >
          <motion.div layoutId="2" className="w-[70vw] h-[20vh] sm:h-[70vh] "
            onLayoutAnimationComplete={() => router.push("/arm#arm")}
            style={{
              background: "url('/project/arn.png') center ",
              backgroundSize: "cover",
            }}></motion.div>

        </div >
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


{/* <motion.div layoutId="0" onClick={() => router.push("/project1")} className="w-[80vw] h-[80vh] bg-[#F5F5F5] fixed top-10 left-52 z-50" */ }
{/* onLayoutAnimationComplete={() => router.push("/project1#project1")} */ }
{/* style={{ */ }
{/*   background: "url('/project/eat-street.png') center ", */ }
{/*   backgroundSize: "cover", */ }
{/* }}></motion.div> */ }
