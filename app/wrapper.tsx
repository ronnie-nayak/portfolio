"use client";
import Nav from "@/components/nav";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <Suspense>
        <Nav />
      </Suspense>
      {children}
    </RecoilRoot>
  );
}
