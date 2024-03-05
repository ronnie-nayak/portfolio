import { type ClassValue, clsx } from "clsx";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleScroll = (hrefId: string) => {
  // first prevent the d
  //efault behavior
  let deviation = 70;
  const targetId = hrefId.replace(/.*\#/, "");
  if (targetId === "hero") deviation = 0;
  if (window.screen.width < 640) deviation = -50;
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);
  const why = elem?.getBoundingClientRect().top;
  window.scrollTo({
    top: why! + window.scrollY + deviation,
    behavior: "smooth",
  });
};

export const pageLinks = [
  {
    id: "eat-street",
    layoutId: "0project",
    topImage: "url('/project/eat-street.webp') center ",
    title: "Eat Street",
    heading: "E-Commerce Grocery App",
    description:
      "Eat Street is a full-stack e-commerce grocery app that allows users to browse and purchase groceries. The app is built with the robust MERN stack with Typescript . It is responsive and has features such as a working checkout system, favourites list and filtering products.",
    firstImage: "url('/project/big-eat.webp') 50% 66% ",
    firstImageSize: "100%",
    secondImage: "url('/project/eat-page/itempage.webp') 50% 8% ",
    secondImageSize: "120%",
    thirdImage: "url('/project/eat-page/cart.webp') 50% 66% ",
    thirdImageSize: "160%",
    website: "https://eat-street-web.vercel.app/",
    github: "https://github.com/ronnie-nayak/eat-street",
    builtWith: [
      "/logos/next.webp",
      "/logos/typescript.webp",
      "/logos/react.webp",
      "/logos/tailwind.webp",
      "/logos/mongo.webp",
    ],
  },
  {
    id: "save-up",
    layoutId: "1project",
    topImage: "url('/project/save-up.webp') center ",
    title: "Save Up",
    heading: "Money Management Tracker",
    description:
      "Save-Up is a money management tracker that allows users to track their expenses and savings. The app with the latest T3 framework in a TurboRepo with TypeScript, to allow for type-checking across front-end, back-end and database. With NextAuth you can keep your transactions safe and secure.",
    firstImage: "url('/project/save-page/transactions.webp') 50% 66% ",
    firstImageSize: "100%",
    secondImage: "url('/project/save-page/savings.webp') left top ",
    secondImageSize: "160%",
    thirdImage: "url('/project/save-page/bills.webp') left top ",
    thirdImageSize: "160%",
    website: "https://save-up-web.vercel.app/",
    github: "https://github.com/ronnie-nayak/save-up",
    builtWith: [
      "/logos/next.webp",
      "/logos/typescript.webp",
      "/logos/react.webp",
      "/logos/trpc.webp",
      "/logos/drizzle.webp",
      "/logos/turbo.webp",
    ],
  },
  {
    id: "arn",
    layoutId: "2project",
    topImage: "url('/project/arn.webp') center ",
    title: "My Portfolio Website",
    heading: "A Showcase of what I can offer You",
    description:
      "I build my projects with a lot of care and really love seeing my work come to life. I hope you could see the effort I am willing to put in to learn what I don't know through constant trial and error. If you wish to be in contact, give me a call on +91-9821245180, send an email at abhishek.ron.nayak@gmail.com or fill the contact form on the main page. Hope to be of help.",
    firstImage: "url('/project/arn-page/projects.webp') center ",
    firstImageSize: "115%",
    secondImage: "url('/project/big-arn.webp') 50% 0% ",
    secondImageSize: "150%",
    thirdImage: "url('/project/big-arn.webp') 50% 100% ",
    thirdImageSize: "120%",
    website: "https://abhishek-ron-nayak.vercel.app/",
    github: "https://github.com/ronnie-nayak/portfolio",
    builtWith: [
      "/logos/next.webp",
      "/logos/typescript.webp",
      "/logos/react.webp",
      "/logos/tailwind.webp",
      "/logos/framer-motion.webp",
    ],
  },
];
