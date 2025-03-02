"use client"

import type React from "react"

import { Code, Server, Globe, Layers, Cpu, Smartphone, HardDrive } from "lucide-react"
import { GlowingEffect } from "./ui/glowing-effect"

export default function Services() {
  // Replace the services array with this standardized version
  const services = [
    {
      icon: <Code className="h-6 w-6 text-indigo-400" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business needs and challenges.",
    },
    {
      icon: <Server className="h-6 w-6 text-purple-400" />,
      title: "Cloud Deployment",
      description: "Seamless deployment and scaling of your applications on leading cloud platforms.",
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-green-400" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications that provide exceptional user experiences.",
    },
    {
      icon: <Layers className="h-6 w-6 text-pink-400" />,
      title: "API Development & Integration",
      description: "Secure and scalable APIs that connect your systems and enable seamless data flow.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-amber-400" />,
      title: "DevOps & CI/CD",
      description:
        "Automated workflows for continuous integration and deployment to accelerate your development cycle.",
    },
    {
      icon: <HardDrive className="h-6 w-6 text-teal-400" />,
      title: "Server Management",
      description:
        "Comprehensive server administration, monitoring, and maintenance for optimal performance and security.",
    },
  ]

  // Grid area definitions for the services
  const gridAreas = [
    "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/4]",
    "md:[grid-area:1/7/2/13] xl:[grid-area:1/4/2/7]",
    "md:[grid-area:2/1/3/7] xl:[grid-area:1/7/2/10]",
    "md:[grid-area:2/7/3/13] xl:[grid-area:1/10/2/13]",
    "md:[grid-area:3/1/4/7] xl:[grid-area:2/1/3/4]",
    "md:[grid-area:3/7/4/13] xl:[grid-area:2/4/3/7]",
    "md:[grid-area:4/1/5/13] xl:[grid-area:2/7/3/13]",
  ]

  return (
    <section id="services" className="py-20 bg-black sm:px-16 lg:px-40">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-slate-400">
          We provide end-to-end software development and deployment services to help businesses transform their ideas
          into reality.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-4 lg:gap-6 xl:grid-rows-2">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            area={gridAreas[index]}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </ul>
    </section>
  )
}

// Update the ServiceItemProps interface to remove extraHeight
interface ServiceItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
}

// Update the ServiceItem component to have fixed height and reduced spacing
const ServiceItem = ({ area, icon, title, description }: ServiceItemProps) => {
  return (
    <li className={`h-[14rem] list-none ${area} transition-transform duration-300 hover:scale-[1.02]`}>
      <div className="relative h-full rounded-2.5xl border border-gray-800 p-1 md:rounded-3xl md:p-2 backdrop-blur-sm bg-black/40">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-0.75 p-4 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-col gap-2">
            <div className="w-fit rounded-lg border border-gray-600 p-2 bg-black/60">{icon}</div>
            <h3 className="text-lg/[1.2rem] font-semibold font-sans -tracking-4 md:text-xl/[1.5rem] text-balance text-white">
              {title}
            </h3>
            <p className="font-sans text-xs/[1rem] md:text-sm/[1.2rem] text-neutral-400 line-clamp-3">{description}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

