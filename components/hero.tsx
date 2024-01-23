import { handleScroll } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { type } from 'os';
import { TypeAnimation } from 'react-type-animation';
// I’m Abhishek (Ronnie) Nayak, a fullstack developer & system designer based in New Delhi.<br /> Available for freelance & collaborations.
//
export default function Hero() {

  return (

    <div id="hero" className='relative bg-[#F5F5F5] h-[600px] sm:h-[900px] w-10/12 mx-auto'>
      <div style={{
        color: "#282828",
        fontWeight: "300",
        lineHeight: "1.4",
        textShadow: "0 1px 0 rgba(255, 255, 255, 0.9)",
      }} className="absolute mt-14 sm:mt-[200px] z-10 w-[70%] sm:text-[1.75vw]">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'I’m Abhishek (Ronnie) Nayak, a frontend',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'I’m Abhishek (Ronnie) Nayak, a backend',
            1000,
            'I’m Abhishek (Ronnie) Nayak, a fullstack developer & system designer based in New Delhi.',
            1000,
            'I’m Abhishek (Ronnie) Nayak, a fullstack developer & system designer based in New Delhi. Available for freelance & collaborations.',
            1000,
          ]}
          wrapper="span"
          speed={80}
          deletionSpeed={{ type: "keyStrokeDelayInMs", value: 20 }}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={0}
        />
      </div>
      <motion.div style={{
        background: "url('/photo2.jpg') center no-repeat",
        backgroundSize: "cover",
      }} className="float-right z-0 w-6/12 h-full overflow-y-clip"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
      </motion.div>
    </div >
  )
}
