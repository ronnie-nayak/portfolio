'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/shadcn/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/ui/carousel"

const thoughts = [
  {
    quote: "I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail.",
    name: "Abraham Maslow"
  },
  {
    quote: "When I look at the world, I'm pessimistic, but when I look at people I am optimistic.",
    name: "Carl Rogers"
  },
  {
    quote: "Education is what survives when what has been learned has been forgotten.",
    name: "B. F. Skinner"
  },
  {
    quote: "Life itself remains a very effective therapist.",
    name: "Karen Horney"
  },
  {
    quote: "Becoming is better than being.",
    name: "Carol Dweck"
  },
  {
    quote: "The unexamined life is not worth living",
    name: "Socrates"
  }
]

export function Reviews() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )


  return (
    <div id="reviews" className="p-9 pt-40">
      <h2 className="sm:text-[2.25vw] font-bold mb-5">Food for Thought</h2>
      <div className="border border-black mb-16 mr-5"></div>
      <div className="w-full">

        <Carousel
          opts={{ loop: true }}
          plugins={[plugin.current]}
          className="w-full min-w-xs my-32"
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {thoughts.map((item, index) => (
              <CarouselItem key={index}>
                <div className="grid place-items-center text-center sm:text-[2vw] sm:px-60">
                  <h2>{item.quote}</h2>
                  <h3 className="text-right mt-9">- {item.name}</h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div >
  )
}                            
