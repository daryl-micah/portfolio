import { Header } from "@/components/core/header";
import Hero from "@/components/core/hero-section";
import { Skills } from "@/components/core/skills";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-black dark:bg-black dark:bg-grid-white/[0.03] bg-grid-black/[0.2]">
      <div className="max-w-7xl mx-auto p-5 overflow-hidden">
        <Header />
        <Hero />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
}
