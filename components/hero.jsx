"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-32 pb-20">
      <div className="container mx-auto">
        {/* Animated Heading & Subtext */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-extrabold leading-tight drop-shadow-lg  text-gray-900 dark:text-gray-100">
            Master Your Finances <br /> with <span className="text-yellow-400">AI Intelligence</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            An AI-powered financial management platform that helps you track, analyze, 
            and optimize your spending with real-time insights.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex justify-center space-x-6"
        >
          <Link href="/dashboard">
            <Button 
              size="lg" 
              className="px-8 bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-300 hover:text-gray-300 transition-all shadow-lg"
            >
              Get Started 🚀
            </Button>
          </Link>
          <Link href="https://www.youtube.com/">
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 border border-white-200 text-gray-900 font-bold hover:bg-white-200 hover:text-gray-300 transition-all shadow-lg"
            >
              Watch Demo 🎥
            </Button>
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-12"
        >
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
