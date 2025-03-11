"use client"
import { PinContainer } from "./ui/3d-pin"
import { Search, BarChart2, FileText, Shield } from "lucide-react"
import { useEffect, useState } from "react"

export default function ProductsSection() {
  // Add a loading state to control when the component is visible
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded to true after component mounts
    setIsLoaded(true)
  }, [])

  return (
    <section id="products" className="w-full py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Powerful tools designed to help you gather insights and make data-driven decisions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Only show the PinContainer when fully loaded */}
          <div className={`w-[320px] h-[400px] transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <PinContainer title="Visit" href="https://devixlab.com" containerClassName="w-full h-full">
              <div className="flex flex-col p-6 tracking-tight text-slate-100/90 w-[320px] h-[400px]">
                <h3 className="text-2xl font-bold text-white mb-2">Tattletale</h3>
                <div className="text-sm font-medium text-cyan-400 mb-4">Social Media Investigation Tool</div>

                <div className="flex-1 flex flex-col">
                  <p className="text-slate-300 mb-6">
                    Advanced data scraping and analysis tool for social media platforms. Gather insights, track trends,
                    and generate comprehensive reports.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Search className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-slate-300">Data Scraping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-slate-300">Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-slate-300">Reporting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-slate-300">Privacy</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-32 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">fb</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">tw</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">ig</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">li</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>

          {/* Placeholder - now has exact same dimensions as the Tattletale card */}
          <div className="w-[320px] h-[400px] flex items-center justify-center">
            <div className="w-full h-full border border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center p-6 bg-slate-900/50">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
                <span className="text-2xl text-slate-500">+</span>
              </div>
              <p className="text-slate-500 text-center">More products coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}