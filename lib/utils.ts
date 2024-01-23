import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const handleScroll = (hrefId: string) => {
  // first prevent the d
  //efault behavior
  let deviation = 70
  const targetId = hrefId.replace(/.*\#/, "");
  if (targetId === "hero") deviation = 0
  if (window.screen.width < 640) deviation = -50
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);
  const why = elem?.getBoundingClientRect().top
  window.scrollTo({
    top: why! + window.scrollY + deviation,
    behavior: "smooth",
  })
}
