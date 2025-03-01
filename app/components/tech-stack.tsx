"use client"
import Image from "next/image";

export default function TechStack() {
  const technologies = [
    { name: "React", logo: "/react.svg" },
    { name: "Next.js", logo: "/nextjs.svg" },
    { name: "Node.js", logo: "/nodejs.svg" },
    { name: "TypeScript", logo: "/ts.svg" },
    { name: "AWS", logo: "/aws.svg" },
    { name: "Docker", logo: "/docker.svg" },
    { name: "Python", logo: "/python.svg" },
    { name: "Rust", logo: "/rust.svg" },
    { name: "Go", logo: "/go.webp" },
    { name: "PHP", logo: "/php.webp" },
    { name: "WordPress", logo: "/wordpress.webp" },
    { name: "Flutter", logo: "/flutter.svg" },
    { name: "React Native", logo: "/react.svg" },
    { name: "Kotlin", logo: "/kotlin.svg" },
  ];

 
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="py-12 border-t border-slate-800 bg-black">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-slate-500 mb-8">
          TRUSTED TECHNOLOGIES WE WORK WITH
        </p>
        <div className="overflow-hidden relative">
          <div className="animate-scroll flex gap-8 md:gap-16 w-max">
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  width={40}
                  height={40}
                />
                <span className="text-slate-400 text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 26s linear infinite;
        }
      `}</style>
    </section>
  );
}