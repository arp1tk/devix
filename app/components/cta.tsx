"use client"

import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section
      id="contact"
      className="px-40 relative bg-slate-950 py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transform Your Ideas into{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Solutions
              </span>
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to revolutionize your software development? Let's discuss how Devix can help you build and deploy
              the perfect software solution for your business needs.
            </motion.p>
          </div>

          <motion.div
            className="lg:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Get Started Today</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 h-12 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-white text-white hover:bg-white/10 h-12 px-6 rounded-lg"
                >
                  View Portfolio
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

