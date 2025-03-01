import { cn } from "@/lib/utils";
import { CheckCircle, Zap, Shield, Clock, Sparkles, Repeat } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: "Fast Development",
      description:
        "Rapid development cycles with agile methodologies to deliver your software quickly without compromising quality.",
    },
    {
      icon: <Shield className="h-6 w-6 text-green-400" />,
      title: "Secure Solutions",
      description: "Built-in security measures and best practices to protect your data and applications from threats.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-purple-400" />,
      title: "Cutting-Edge Tech",
      description: "Utilizing the latest technologies and frameworks to build modern, future-proof solutions.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-400" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to ensure your systems run smoothly.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-teal-400" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes to deliver reliable, bug-free software.",
    },
    {
      icon: <Repeat className="h-6 w-6 text-pink-400" />,
      title: "Continuous Improvement",
      description: "Ongoing optimization and updates to keep your software performing at its best.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-slate-950 sm:px-14 lg:px-40">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-800 text-indigo-400 text-sm font-medium mb-4">
            Why Choose Devix
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Features that set us apart</h2>
          <p className="text-slate-400">
            Our comprehensive approach to software development and deployment ensures your project's success from start
            to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-slate-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-slate-800",
        index < 3 && "lg:border-b dark:border-slate-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">
        <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-700 group-hover/feature:bg-indigo-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem] text-black dark:text-neutral-400  pt-5 px-10">
        {description}
      </p>
    </div>
  );
};