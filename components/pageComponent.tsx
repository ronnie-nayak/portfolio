
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function PageComponent(props: { id: string, layoutId: string, topImage: string, title: string, heading: string, description: string, firstImage: string, firstImageSize: string, secondImage: string, secondImageSize: string, thirdImage: string, thirdImageSize: string }) {
  const router = useRouter()

  const [first, setFirst] = useState(false)

  const data = ["", "", ""]
  return (
    <>
      <div id={props.id} className="p-10 pt-24 flex flex-col items-center w-screen h-full">
        <motion.div className="w-[70vw] h-[20vh] sm:h-[70vh] rounded-3xl "
          initial={{ boxShadow: "rgba(0, 0, 0, 0) 0px 5px 15px" }}
          animate={{ boxShadow: "rgba(0, 0, 0, 0.6) 0px 5px 15px" }}
          transition={{ duration: 0.9 }}
          style={{
            background: props.topImage,
            backgroundSize: "cover",
          }}
          layoutId={props.layoutId}
          onClick={() => setFirst(true)}
        ></motion.div>



        <motion.div className="flex flex-col sm:flex-row sm:px-40 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-full">
            <h1 className="sm:text-[2.5vw] mb-2">{props.title}</h1>
            <h2 className="sm:text-[2vw] underline">{props.heading}</h2>
          </div>

          <p className="w-full sm:text-[1.5vw]">
            {props.description}
          </p>
        </motion.div>


        <motion.div className="w-[70vw] h-[20vh] sm:h-[70vh] rounded-3xl mb-14 "
          style={{
            background: props.firstImage,
            backgroundSize: props.firstImageSize,
            boxShadow: "rgba(0, 0, 0, 0.6) 0px 5px 15px"
          }}
        ></motion.div>
        <div className="flex gap-14">
          <motion.div className="w-[35vw] h-[20vh] sm:h-[70vh] rounded-3xl "
            style={{
              background: props.secondImage,
              backgroundSize: props.secondImageSize,
              boxShadow: "rgba(0, 0, 0, 0.6) 0px 5px 15px"
            }}
          ></motion.div>
          <motion.div className="w-[35vw] h-[20vh] sm:h-[70vh] rounded-3xl "
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

        <motion.div className="fixed top-0 left-0 p-24 grid place-items-center w-screen h-screen bg-cream z-10 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
        </motion.div >
      }
    </>
  )
}
