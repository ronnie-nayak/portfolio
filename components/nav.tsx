'use client'
import { handleScroll } from "@/lib/utils";
import { ActiveState } from "@/recoil/atoms";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-[#F5F5F5] fixed w-screen top-0 left-0 z-10">
      <ul className="flex items-center justify-end gap-5 mx-24 py-8 text-2xl font-semi">
        <img className="mr-auto" src='/logo.svg' alt='logo' />
        <Link onClick={handleScroll} href="#hero" >Home</Link>
        <Link onClick={handleScroll} href="#projects" >Projects</Link>
        <Link onClick={handleScroll} href="#about" >About</Link>
        <Link onClick={handleScroll} href="#contact" >Contact</Link>
      </ul>
    </nav >
  )
}
