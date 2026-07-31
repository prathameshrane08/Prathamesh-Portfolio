"use client";

import { useState } from "react";

import Header from "@/components/Header";
import FullScreenMenu from "@/components/FullScreenMenu";
import Hero from "@/components/hero/Hero";

import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Projects from "@/components/sections/Projects";
import Capabilities from "@/components/sections/Capabilities";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#f1efe9] text-[#111111]"
    >
      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <Hero />

      <About />

      <Expertise />

      <Projects />

      <Capabilities />

      <Contact />
    </main>
  );
}