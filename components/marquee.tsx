import Marquee from "react-fast-marquee";
import Image from 'next/image'

const links = [
  "/logos/node.svg",
  "/logos/next.svg",
  "/logos/auth.png",
  "/logos/drizzle.jpg",
  "/logos/recoil.svg",
  "/logos/tailwind.svg",
  "/logos/trpc.svg",
  "/logos/turbo.svg",
  "/logos/typescript.svg",
  "/logos/react.png",
  "/logos/mongo.svg"
];

export function MarqueeComp() {
  return (
    <div className="mt-20">
      <Marquee>
        {links.map((link, i) => (<Image key={i} alt={link} className="mx-9 text-[20vw]" src={link} width={100} height={100} />))}
      </Marquee>
    </div>
  )
}
