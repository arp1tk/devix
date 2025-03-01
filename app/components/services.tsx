"use client";

import { Code, Server, Database, Globe, Layers, Cpu } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export default function Services() {
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
      description: "Modern, responsive web applications built with cutting-edge technologies, delivering high performance, scalability, and security. Our solutions are designed for seamless user experiences, optimized efficiency, and future-ready adaptability across all devices and platforms. 🚀",
      extraHeight: true, // Flag for extra height
    },
    {
      icon: <Layers className="h-6 w-6 text-pink-400" />,
      title: "API Development & Integration",
      description: "Secure and scalable APIs that connect your systems and enable seamless data flow.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-amber-400" />,
      title: "DevOps & CI/CD",
      description: "Automated workflows for continuous integration and deployment to accelerate your development cycle.",
    },
  ];

  // Grid area definitions for the services
  const gridAreas = [
    "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/13]",
    "md:[grid-area:3/7/4/13] xl:[grid-area:2/5/3/8]",
  ];

  return (
    <section id="services" className="py-20 bg-black sm:px-16 lg:px-40">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-slate-400">
          We provide end-to-end software development and deployment services to help businesses transform their ideas
          into reality.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            area={gridAreas[index]}
            icon={service.icon}
            title={service.title}
            description={service.description}
            extraHeight={service.extraHeight}
          />
        ))}
      </ul>
    </section>
  );
}

interface ServiceItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  extraHeight?: boolean;
}

const ServiceItem = ({ area, icon, title, description, extraHeight }: ServiceItemProps) => {
  return (
    <li className={`${extraHeight ? 'max-h-[30rem]' : 'min-h-[14rem]'} list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem] text-black dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}