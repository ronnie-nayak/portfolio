
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { LuArrowUpRight } from "react-icons/lu";
import { useSetRecoilState } from "recoil";
import { PageScrollState } from "@/recoil/atoms";

export function PageComponent(props: { id: string, layoutId: string, topImage: string, title: string, heading: string, description: string, firstImage: string, firstImageSize: string, secondImage: string, secondImageSize: string, thirdImage: string, thirdImageSize: string, builtWith: string[], website: string, github: string }) {
  const router = useRouter()

  const [first, setFirst] = useState(false)
  const setPageScroll = useSetRecoilState(PageScrollState)
  const data = ["", "", ""]
  return (
    <>
      <div id={props.id} className="p-10 pt-24 flex flex-col items-center w-screen h-full overflow-hidden">
        <motion.div className="w-[90vw] sm:w-[70vw] h-[60vw] sm:h-[35vw] rounded-3xl "
          initial={{ boxShadow: "rgba(0, 0, 0, 0) 0px 5px 15px" }}
          animate={{ boxShadow: "rgba(0, 0, 0, 0.6) 0px 5px 15px" }}
          transition={{ duration: 0.9 }}
          style={{
            background: props.topImage,
            backgroundSize: "cover",
          }}
          layoutId={props.layoutId}
          onClick={() => {
            setPageScroll(true)
            setFirst(true)
          }}
        ></motion.div>


        <div className="sm:px-40 py-20">
          <motion.div className="flex flex-col sm:flex-row "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-full">
              <h1 className="sm:text-[2.5vw] mb-2">{props.title}</h1>
              <h2 className="sm:text-[2vw] underline">{props.heading}</h2>
              <div className="flex flex-col sm:flex-row gap-4 m-8 ml-0">
                <a target="_blank" href={props.website} className="linker"><h2>Visit Website</h2><TbWorld size={45} /><LuArrowUpRight size={45} /></a>
                <a target="_blank" href={props.github} className="linker"><h2>Github Code</h2><FaGithub size={45} /><LuArrowUpRight size={45} /></a>
              </div>
            </div>

            <p className="w-full sm:text-[1.5vw] mb-2">
              {props.description}
            </p>
          </motion.div>
          <div className="flex gap-4 mt-4 sm:gap-9 flex-wrap justify-center sm:justify-start">
            {
              props.builtWith.map((item, index) => (<img src={item} key={index} className="w-10 h-10 sm:w-20 sm:h-20" />))
            }
          </div>
        </div>


        <motion.div className="w-[90vw] sm:w-[70vw] h-[60vw] sm:h-[40vw]  rounded-3xl mb-14 "
          style={{
            background: props.firstImage,
            backgroundSize: props.firstImageSize,
            boxShadow: "rgba(0, 0, 0, 0.6) 0px 5px 15px"
          }}
        ></motion.div>
        <div className="flex flex-col sm:flex-row gap-14">
          <motion.div className="w-[90vw] sm:w-[35vw] h-[60vw] sm:h-[40vw] rounded-3xl "
            style={{
              background: props.secondImage,
              backgroundSize: props.secondImageSize,
              boxShadow: "rgba(0, 0, 0, 0.6) 0px 5px 15px"
            }}
          ></motion.div>
          <motion.div className="w-[90vw] sm:w-[35vw] h-[60vw] sm:h-[40vw] rounded-3xl "
            style={{
              background: props.thirdImage,
              backgroundSize: props.thirdImageSize,
              boxShadow: "rgba(0, 0, 0, 0.6) 0px 5px 15px"
            }}
          ></motion.div>
        </div>

      </div >






      {
        first &&

        <div className="fixed left-0 top-0 z-20 w-screen h-screen ">
          <div className="pt-20 xl:w-[1300px] w-3/4 mx-auto">

            <div className="p-9 pt-40 flex gap-9">
              {data.map((item, index) => (

                <motion.div layoutId={index + "project"} className="w-[30%] h-[60vh] overflow-hidden translate-y-52"
                  key={index}
                  onLayoutAnimationComplete={() => router.push("./?project=true")}
                >
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      }

      {
        first &&

        <motion.div className="fixed top-0 left-0 p-24 grid place-items-center w-screen h-screen bg-cream z-10 overscroll-y-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
        </motion.div >
      }
    </>
  )
}
