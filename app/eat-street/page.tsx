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
      <div id="eat-street" className="p-10 pt-24 flex flex-col items-center w-screen h-full">
        <motion.div className="w-[70vw] h-[20vh] sm:h-[70vh] rounded-3xl "
          initial={{ boxShadow: "rgba(0, 0, 0, 0) 0px 5px 15px" }}
          animate={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          transition={{ duration: 0.9 }}
          style={{
            background: "url('/project/eat-street.png') center ",
            backgroundSize: "cover",
          }}
          layoutId={"0project"}
          onClick={() => setFirst(true)}
        ></motion.div>



        <motion.div className="flex flex-col sm:flex-row sm:px-40 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-full">
            <h1 className="sm:text-[2.5vw] mb-2">Eat Street</h1>
            <h2 className="sm:text-[2vw] underline">E-Commerce Grocery App</h2>
          </div>

          <p className="w-full sm:text-[1.5vw]">
            Eat Street is a full-stack e-commerce grocery app that allows users to browse and purchase groceries. The app is built with the robust MERN stack with Typescript . It is responsive and has features such as a working checkout system, favourites list and filtering products.
          </p>
        </motion.div>


        <motion.div className="w-[70vw] h-[20vh] sm:h-[70vh] rounded-3xl mb-14 "
          style={{
            background: "url('/project/big-eat.png') 50% 66% ",
            backgroundSize: "100%",
            boxShadow: "rgba(0, 0, 0, 0.6) 0px 5px 15px"
          }}
        ></motion.div>
        <div className="flex gap-14">
          <motion.div className="w-[35vw] h-[20vh] sm:h-[70vh] rounded-3xl "
            style={{
              background: "url('/project/eat-page/itempage.png') 50% 8% ",
              backgroundSize: "120%",
              boxShadow: "rgba(0, 0, 0, 0.6) 0px 5px 15px"
            }}
          ></motion.div>
          <motion.div className="w-[35vw] h-[20vh] sm:h-[70vh] rounded-3xl "
            style={{
              background: "url('/project/eat-page/cart.png') 50% 66% ",
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
