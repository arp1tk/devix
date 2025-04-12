"use client"

import { useEffect, useState } from "react"
import  {Button}  from "./ui/buttonace"
import { ArrowRight, Code, Server, Globe } from "lucide-react"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import { handleSmoothScroll } from "./smoothScroll";
export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "software solutions"

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-20 pb-10 md:pt-40 md:pb-24 container mx-auto px-6 md:px-16 lg:px-40">

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-800 text-indigo-400 text-sm font-medium">
            Next-Gen Development & Deployment
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transform your ideas into
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 ml-2">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-lg">
            We build cutting-edge software solutions and provide seamless deployment services to bring your vision to
            life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 h-12 px-6"
              onClick={() => handleSmoothScroll(null, "contact")}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <HoverBorderGradient
             containerClassName="rounded-md"
             as="button"
             onClick={() => handleSmoothScroll(null, "contact")}
             className="dark:bg-black bg-white h-11 text-black dark:text-white flex items-center space-x-2"
            >
              Book a Consultation
            </HoverBorderGradient>
          </div>

          <div className="flex items-center gap-2 text-slate-400 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border-2 border-black"
                />
              ))}
            </div>
            <span>Trusted by 100+ companies worldwide</span>
          </div>
        </div>

        <CardContainer containerClassName="py-10">
      <CardBody className="h-auto w-auto relative [transform-style:preserve-3d]">
        <CardItem translateZ="50" className="w-full h-full">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-lg opacity-75 animate-pulse"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <CardItem translateZ="100" className="text-xs text-slate-400 flex-1 text-center">devix-dashboard.js</CardItem>
              </div>
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <CardItem translateZ="100" className="w-full h-full bg-slate-800/50 rounded-md p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Code size={16} className="text-indigo-400" />
                      <span className="text-sm font-medium">Development</span>
                    </div>
                    <div className="h-2 bg-indigo-500/20 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-indigo-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-slate-400">80% Complete</div>
                  </CardItem>
                  <CardItem translateZ="80" className="w-full h-full bg-slate-800/50 rounded-md p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Server size={16} className="text-purple-400" />
                      <span className="text-sm font-medium">Deployment</span>
                    </div>
                    <div className="h-2 bg-purple-500/20 rounded-full overflow-hidden">
                      <div className="h-full w-3/5 bg-purple-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-slate-400">60% Complete</div>
                  </CardItem>
                </div>

                <CardItem translateZ="80" className="w-full bg-slate-800/50 rounded-md p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Globe size={16} className="text-teal-400" />
                      <span className="text-sm font-medium">Project Status</span>
                    </div>
                    <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-0.5 rounded-full">Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Frontend</span>
                      <span className="text-teal-400">Completed</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Backend</span>
                      <span className="text-indigo-400">In Progress</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Database</span>
                      <span className="text-purple-400">Optimizing</span>
                    </div>
                  </div>
                </CardItem>
              </div>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
      </div>
    </section>
  )
}

