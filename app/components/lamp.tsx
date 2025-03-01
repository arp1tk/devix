"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-blue-400 to-purple-600 py-4 bg-clip-text text-center text-5xl font-extrabold tracking-tight text-transparent md:text-8xl drop-shadow-lg"
      >
        DevixLab
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: "easeInOut",
        }}
        className="mt-4 max-w-2xl text-center text-lg md:text-2xl font-medium text-gray-300"
      >
        Empowering Businesses with Cutting-Edge Solutions & Digital Excellence.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          duration: 1,
          ease: "easeInOut",
        }}
        className="mt-2 max-w-3xl text-center text-md md:text-xl text-gray-400"
      >
        We craft tailor-made digital products and provide expert consultancy to help you navigate the ever-evolving tech landscape. Let's innovate together.
      </motion.p>
    </LampContainer>
  );
}
