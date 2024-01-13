"use client"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export default function Project1() {
  const router = useRouter()
  return (
    <div className="w-auto h-[700px] m-10 p-40">
      <motion.div onClick={() => router.push('/#projects')} layoutId="1" className="w-full h-full rounded-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
      >
        <div style={{
          background: "url('/1.jpeg') center ",
          backgroundSize: "cover",
        }} className="h-full w-full"></div>
      </motion.div>
    </div >

  )
}
