

import Hero from "./components/hero";

import Navbar from "./components/navbar";
import TechStack from "./components/tech-stack";


import Services from "./components/services";
import Features from "./components/features";
import CTA from "./components/cta";

import ProductsSection from "./components/products";
export default function home(){
  return(
    <>
  
 <div >
 <Navbar/>
 <Hero/>
 <TechStack/>
 <Services/>
 <ProductsSection/>
 <Features/>
 
 <CTA/>
 
  </div>
</>
  )
}