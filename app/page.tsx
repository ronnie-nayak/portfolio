'use client'
import AboutMe from "@/components/aboutme";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import { MarqueeComp } from "@/components/marquee";
import Nav from "@/components/nav";
import Projects from "@/components/projects";
import { useEffect } from "react";



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

  return (
    <div data-scroll-container className="bg-[#F5F5F5]"
    >

      <div data-scroll-section className="pt-20 xl:w-[1300px] w-3/4 mx-auto">
        <Hero />
        <Projects />
        <AboutMe />
      </div>
      <div data-scroll data-scroll-speed={-5}>
        mallu
      </div>
      <MarqueeComp />
      <div data-scroll-section className="pt-20 xl:w-[1300px] w-3/4 mx-auto">
        <Contact />
      </div>
    </div>
  )
}
