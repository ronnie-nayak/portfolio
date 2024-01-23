import { ContactForm } from "./contactForm";

export default function Contact() {

  return (
    <div id="contact" className="p-9 sm:pt-40">
      <h2 className="sm:text-[2.25vw] font-bold mb-5">Say Hello</h2>
      <div className="border border-black mb-16 mr-5"></div>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="bg-[F5F5F5] sm:text-[1.75vw] w-8/12">
          Looking to start a project or just want to say hi? Send me an email and I’ll do my best to reply within 24 hours!
          <br />
          <br />
          If contact forms aren’t your thing, you can also send me an email at<br />
          <a href="mailto:abhishek.ron.nayak@gmail.com" className="underline font-bold mt-5 block">abhishek.ron.nayak@gmail.com</a>
          <h2 className="mt-8 font-bold ">Phone: +91 98212 45180</h2>
        </div>
        <div className="w-full px-10">

          <ContactForm />
        </div >
      </div>
    </div>
  )
}                            
