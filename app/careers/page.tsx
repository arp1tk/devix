import JobCard from "../components/job-card"

export default function Careers() {
  return (
    <main className="min-h-screen bg-black py-12 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,80,220,0.12),transparent_50%)]"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-10 text-center">
            <h1 className="text-4xl text-white md:text-5xl font-bold leading-tight">
              Open
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 ml-2">
                Positions
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Join our team to work in a dynamic environment. Let's connect and create wonders together.
            </p>
          </div>

          <div className="grid gap-6">
            <JobCard
              title="Full Stack Developer"
              company="Devix"
              jobType="Remote"
              qualifications={[
                "Knowledge of Computer Science principles",
                "Experience or coursework in Back-End, Front-End Web Development and Software Development",
                "Experience with Node.js, Express.js and related technologies",
                "Strong analytical and problem-solving abilities",
              ]}
              responsibilities={[
                "Develop and maintain web applications using React and Next.js",
                "Build RESTful APIs and server-side logic using Node.js",
                "Collaborate with cross-functional teams to define and implement new features",
                "Optimize applications for maximum speed and scalability",
              ]}
              benefits={[
                "Paid Internship (₹5000 stipend)",
                "Duration will be 1 Month (Extendable based on performance)",
                "Certification upon completion",
                "Hands-on experience with real-world projects",
              ]}
              formPath="/apply"
            />

           
          </div>
        </div>
      </div>
    </main>
  )
}
