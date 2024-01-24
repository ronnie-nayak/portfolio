import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Wrapper from "./wrapper";

import { ScrollerMotion } from "scroller-motion";
const myFont = localFont({
  src: [
    {
      path: "../font/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayLight.ttf",
      weight: "300",
      style: "light",
    },
  ],
});
export const metadata: Metadata = {
  title: "Abhishek R Nayak",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="sm:[text-0.85vw]">
      <body className={myFont.className}>
        <Wrapper>
          <div className="bg-cream">{children}</div>
        </Wrapper>
      </body>
    </html>
  );
}
