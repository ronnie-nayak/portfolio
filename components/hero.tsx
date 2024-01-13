import { motion } from "framer-motion";


const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const lettered = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    },
  },
};

const line = "I’m Abhishek(Ronnie) Nayak, a fullstack developer & system designer based in New Delhi. Available for freelance & collaborations."

export default function Hero() {

  return (

    <div id="hero" className='relative bg-[#F5F5F5] h-[900px] w-10/12 mx-auto'>
      <div style={{
        color: "#282828",
        fontWeight: "300",
        lineHeight: "1.4",
      }} className="absolute mt-[250px] z-10 w-[70%] text-6xl">
        <motion.span variants={banner} initial="initial" animate="animate">
          {line.split("").map((letter, index) => (<motion.span key={index} variants={lettered}>{letter}</motion.span>))}
        </motion.span>
      </div>
      <div style={{
        background: "url('/photo1.jpeg') center",
        backgroundSize: "cover",
      }} className="float-right z-0 w-6/12 h-full overflow-y-clip" >
      </div>
    </div>
  )
}
