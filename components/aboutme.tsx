import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shadcn/ui/accordion";
import { Button } from "@/shadcn/ui/button";
export default function AboutMe() {
  return (
    <div id="about" className="p-9 pt-40">
      <h2 className="text-5xl font-bold mb-5">About Me</h2>
      <div className="border border-black mb-16 mr-5"></div>
      <div className="flex gap-10">
        <div className="bg-[F5F5F5] text-2xl w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className="w-full text-2xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-black">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent className="text-lg">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-black">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent className="text-lg">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-black">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent className="text-lg">
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* <h2 className="text-3xl font-bold mb-5">Branding / Logo</h2> */}
          {/* <div className="border border-black mb-16 mr-5"></div> */}
        </div >

      </div>
    </div>
  )
}                            
