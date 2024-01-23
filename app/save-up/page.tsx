"use client"
import { handleScroll } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const data = ["", "", ""]
export default function Project1() {
  const router = useRouter()

  const [first, setFirst] = useState(false)
  return (
    <>
      <div id="save-up" className="p-10 pt-24 flex flex-col items-center w-screen h-full">
        <motion.div className="w-[70vw] h-[20vh] sm:h-[70vh] rounded-3xl "
          initial={{ boxShadow: "rgba(0, 0, 0, 0) 0px 5px 15px" }}
          animate={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          transition={{ duration: 0.9 }}
          style={{
            background: "url('/project/save-up.png') center ",
            backgroundSize: "cover",
          }}
          layoutId={"1project"}
          onClick={() => setFirst(true)}
        ></motion.div>



        <motion.div className="flex flex-col sm:flex-row sm:px-40 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-full">
            <h1 className="sm:text-[2.5vw] mb-2">Save-Up</h1>
            <h2 className="sm:text-[2vw] underline">Money Management Tracker</h2>
          </div>

          <p className="w-full sm:text-[1.5vw]">
            Save-Up is a money management tracker that allows users to track their expenses and savings. The app with the latest T3 framework in a TurboRepo with TypeScript, to allow for type-checking across front-end, back-end and database. With NextAuth you can keep your transactions safe and secure.
          </p>
        </motion.div>


        <motion.div className="w-[70vw]  h-[20vh] sm:h-[70vh] rounded-3xl mb-14 "
          style={{
            background: "url('/project/save-page/transactions.png') 50% 66% ",
            backgroundSize: "100%",
            boxShadow: "rgba(0, 0, 0, 0.6) 0px 5px 15px"
          }}
        ></motion.div>
        <div className="flex gap-14">
          <motion.div className="w-[35vw]  h-[20vh] sm:h-[70vh] rounded-3xl "
            style={{
              background: "url('/project/save-page/savings.png') left top ",
              backgroundSize: "160%",
              boxShadow: "rgba(0, 0, 0, 0.6) 0px 5px 15px"
            }}
          ></motion.div>
          <motion.div className="w-[35vw]  h-[20vh] sm:h-[70vh] rounded-3xl "
            style={{
              background: "url('/project/save-page/bills.png') left top ",
              backgroundSize: "160%",
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
