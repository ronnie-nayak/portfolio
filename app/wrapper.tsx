'use client'
import Nav from "@/components/nav";
import { RecoilRoot } from "recoil";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>

      <Nav />
      {children}
    </RecoilRoot>
  )
}
