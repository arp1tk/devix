
import { GoogleGeminiEffectDemo } from "./components/google";
import Hero from "./components/hero";
import { LampDemo } from "./components/lamp";
import Navbar from "./components/navbar";
import TechStack from "./components/tech-stack";
import { SpotlightNewDemo } from "./components/spot";
import { GridBackgroundDemo } from "./components/ui/grid-background";
import Services from "./components/services";
import Features from "./components/features";
import CTA from "./components/cta";
import {Testimonials} from "./components/testimonials";
export default function home(){
  return(
    <>
  
 <div >
 <Navbar/>
 <Hero/>
 <TechStack/>
 <Services/>
 <Features/>
 <CTA/>
 {/* <Testimonials/> */}
  {/* <LampDemo /> */}

  {/* <GoogleGeminiEffectDemo/> */}
  </div>
</>
  )
}