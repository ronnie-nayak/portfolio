'use client'
import { handleScroll } from "@/lib/utils";
import { ActiveState, PageScrollState } from "@/recoil/atoms";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";

export default function Nav() {
  const [centerLogo, setCenterLogo] = useState(false)
  const [options, setOptions] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const setPageScroll = useSetRecoilState(PageScrollState)
  // const router = useRouter()
  useEffect(() => {
    if ("/" === pathname) {
      setPageScroll(true)
      setOptions(true)
      setCenterLogo(true)
    }
    else {
      setOptions(false)
      setCenterLogo(false)
    }
    if (searchParams.get('project') === "true") {
      handleScroll("./#projects")
    }
  }, [pathname])

  return (
    <nav className="bg-[#F5F5F5] fixed w-screen top-0 left-0 z-50 p-1 sm:p-0">
      <ul className="flex items-center justify-center sm:justify-end gap-5 sm:mx-24 py-6 sm:text-[1.5vw] font-semi relative">
        <motion.div>
          <Link href="/">
            <img className={`mr-auto h-40 absolute -top-10 ${centerLogo ? "hidden sm:block left-0" : "left-1/2 -translate-x-1/2"} transition-all duration-700`} src='/arn.jpeg' alt='logo' style={{
              clipPath: "inset(30% 10% 30% 10%)"
            }} />
          </Link>
        </motion.div>
        <button onClick={() => handleScroll("./#hero")} className={`${options ? "" : "-translate-y-20"} transition-all duration-700`}>Home</button>
        <button onClick={() => handleScroll("./#projects")} className={`${options ? "" : "-translate-y-20"} transition-all duration-700`}>Projects</button>
        <button onClick={() => handleScroll("./#about")} className={`${options ? "" : "-translate-y-20"} transition-all duration-700`}>About</button>
        <button onClick={() => handleScroll("./#contact")} className={`${options ? "" : "-translate-y-20"} transition-all duration-700`}>Contact</button>
      </ul>
    </nav >
  )
}
