import Marquee from "react-fast-marquee";
import Image from 'next/image'

const links = [
  "/node.svg",
  "/next.svg",
  "/auth.png",
  "/drizzle.jpg",
  "/recoil.svg",
  "/tailwind.svg",
  "/trpc.svg",
  "/turbo.svg",
  "/typescript.svg",
  "/react.png",
  "/mongo.svg"
];

export function MarqueeComp() {
  return (
    <div className="mt-20">
      <Marquee>
        {links.map((link, i) => (<Image key={i} className="mx-9" src={link} alt="Node.js Logo" width={100} height={100} />))}
      </Marquee>
    </div>
  )
}
