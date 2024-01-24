"use client";
import { PageComponent } from "@/components/pageComponent";
import { handleScroll, pageLinks } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Project1() {
  return <PageComponent key="eat-street" {...pageLinks[0]} />;
}
