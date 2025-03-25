"use client"
import { useState } from "react"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Cover } from "./ui/cover"
import toast, { Toaster } from "react-hot-toast" // Import toast and Toaster

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        toast.success('Message sent successfully!', {
          style: {
            background: '#10B981', // Green background
            color: '#fff',
          },
        });
      } else {
        setSubmitStatus('error');
        toast.error('Failed to send message. Please try again.', {
          style: {
            background: '#EF4444', // Red background
            color: '#fff',
          },
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      toast.error('An error occurred. Please try again later.', {
        style: {
          background: '#EF4444',
          color: '#fff',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="px-40 relative bg-slate-950 py-20 overflow-hidden">
      {/* Toaster component for displaying toasts */}
      <Toaster position="top-right" reverseOrder={false} />

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
                <Cover>Powerful Solutions</Cover>
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 h-12 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {isLoading ? 'Sending...' : 'Schedule a Consultation'}
                  {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}