import Marquee from "react-fast-marquee";
import Image from "next/image";

const links = [
  "/logos/node.webp",
  "/logos/next.webp",
  "/logos/auth.webp",
  "/logos/drizzle.webp",
  "/logos/recoil.webp",
  "/logos/tailwind.webp",
  "/logos/trpc.webp",
  "/logos/turbo.webp",
  "/logos/typescript.webp",
  "/logos/react.webp",
  "/logos/mongo.webp",
  "/logos/framer-motion.webp",
];

export function MarqueeComp() {
  return (
    <div className="mt-20">
      <Marquee>
        {links.map((link, i) => (
          <Image
            key={i}
            alt={link}
            className="mx-9 text-[20vw]"
            src={link}
            width={100}
            height={100}
          />
        ))}
      </Marquee>
    </div>
  );
}
