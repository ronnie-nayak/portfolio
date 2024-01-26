import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn/ui/accordion";
import { Button } from "@/shadcn/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div id="about" className="p-9 sm:pt-40">
      <h2 className="sm:text-[2.25vw] font-bold mb-5">About Me</h2>
      <div className="border border-black mb-16 mr-5"></div>
      <div className="flex flex-col-reverse sm:flex-row gap-10">
        <div className="bg-[F5F5F5] sm:text-[1.5vw] w-full font-bold">
          <p className="mb-9">
            I'm a Full Stack Developer working in developing web solutions for a
            variety of clients. My skillset lies in delivering an end-to-end
            approach for business use-cases while delivering a seamless user
            experience.
          </p>
          <p className="mb-24">
            I like to dive into the complexities of todays tech environment
            while experiencing and growing with the community. I am passionate
            about the field and there is nothing better than having like-minded
            people to share your pursuits with.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-black">
              <AccordionTrigger>
                Which Tech Stack do I work with?
              </AccordionTrigger>
              <AccordionContent className="sm:text-[1.5vw] leading-8">
                Most recently I'm having fun with the T3 stack in a turborepo.
                I'm also familiar with MERN and its use-cases.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-black">
              <AccordionTrigger>
                Which field am I interested in?
              </AccordionTrigger>
              <AccordionContent className="sm:text-[1.5vw] leading-8">
                I love working with the backend and I am learning about the
                Cloud and how computer networking works.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-black">
              <AccordionTrigger>What am I learning right now?</AccordionTrigger>
              <AccordionContent className="sm:text-[1.5vw] leading-8">
                Currently I'm leaning Go and building web servers with it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-full sm:text-[1.5vw] flex flex-col items-center">
          <div
            className="w-60 h-60 lg:w-96 lg:h-96 rounded-full border-8 border-double border-gray-500"
            style={{
              background: "url('/profile.jpg') center no-repeat",
              backgroundSize: "contain",
            }}
          ></div>

          <div className="self-start mt-9 flex w-full items-center">
            <h2 className="sm:text-[2vw] mb-5 w-6/12">Contact Info</h2>
            <div className="border border-black mb-4 w-full "></div>
          </div>
          <div className="self-start py-4 font-bold sm:text-[1.95vw] ">
            <h2 className="mb-4">Email: abhishek.ron.nayak@gmail.com</h2>
            <h2>Phone: +91 98212 45180 </h2>
            <h2 className="mt-9 sm:text-[1.75vw]">Socials :</h2>
          </div>
          <div className="flex gap-16 items-center">
            <a target="_blank" href="https://github.com/ronnie-nayak">
              <Image
                className="hover:scale-110 transition duration-200"
                alt="github"
                src="/github.svg"
                width={90}
                height={90}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/abhishek-r-nayak/"
            >
              <Image
                className="hover:scale-110 transition duration-200"
                alt="linkedin"
                src="/linkedin.svg"
                width={110}
                height={110}
              />
            </a>
            <a
              target="_blank"
              href="https://wa.me/919821245180?text=Hey%20let's%20chat"
            >
              <Image
                className="hover:scale-110 transition duration-200"
                alt="whatsapp"
                src="/whatsapp.svg"
                width={110}
                height={110}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <h2 className="sm:text-[1.75vw] font-bold mb-5">Branding / Logo</h2> */
}
{
  /* <div className="border border-black mb-16 mr-5"></div> */
}
