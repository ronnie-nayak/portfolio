'use client'
import AboutMe from "@/components/aboutme";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import { MarqueeComp } from "@/components/marquee";
import Nav from "@/components/nav";
import Projects from "@/components/projects";
import { Reviews } from "@/components/reviews";
import Skill from "@/components/skill";
import { handleScroll } from "@/lib/utils";
import { PageScrollState } from "@/recoil/atoms";
import LocomotiveScroll from "locomotive-scroll";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";



export default function Home() {
  useEffect(() => {

    async function caller() {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const scroll = new LocomotiveScroll({
        smooth: true,
      })

    }
    caller()
  }, [])

  const pageScroll = useRecoilValue(PageScrollState)
  return (
    <div data-scroll-container >
      <div className={`pt-20 xl:w-[1300px] sm:w-3/4 mx-auto ${pageScroll ? "" : "h-screen overflow-hidden"} `}>
        <Hero />
        <Projects />
        <AboutMe />
        <MarqueeComp />
        <Skill />
        <Contact />
        <Reviews />
      </div>
    </div>
  )
}


