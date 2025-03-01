"use client"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "./ui/text-reveal"
import {HoverBorderGradient} from "./ui/hover-border-gradient"
export default function CTA() {
  return (
   
    <section id="contact" className="py-20 relative bg-slate-950 overflow-hidden">
      

      <div className="container mx-auto px-4 relative z-20">
        <TextRevealCard
          text="Transform your ideas"
          revealText="into powerful solutions"
          className="mx-auto max-w-4xl shadow-2xl"
        >
          <TextRevealCardTitle className="text-2xl md:text-3xl mb-4 text-white/90">
            Ready to revolutionize your software development?
          </TextRevealCardTitle>
          <TextRevealCardDescription className="text-lg mb-8 text-white/70">
            Let's discuss how Devix can help you build and deploy the perfect software solution for your business needs.
          </TextRevealCardDescription>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 h-12 px-6 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
             <HoverBorderGradient
                         containerClassName="rounded-md"
                         as="button"
                         className="dark:bg-black bg-white h-11 text-black dark:text-white flex items-center space-x-2">
                        {/* <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 h-12 px-6"> */}
                          View Portfolio
                        {/* </Button> */}
                        </HoverBorderGradient>
          </div>
        </TextRevealCard>
      </div>
    </section>

  )
}

