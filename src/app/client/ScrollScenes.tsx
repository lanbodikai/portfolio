"use client";
import HeroMediaRight from "@/components/hero/HeroVideoRight";
import MouseFit from "@/components/sections/MouseFit";
import FinancialAI from "@/components/sections/FinancialAI";
import CVDeepDive from "@/components/sections/CVDeepDive";
import AboutMe from "@/components/sections/AboutMe";
import OtherProjects from "@/components/sections/OtherProjects";

export default function ScrollScenes() {
  return (
    <>
      <HeroMediaRight/>
      <MouseFit />
      <FinancialAI />
      <CVDeepDive />
      <AboutMe />
      <OtherProjects />
    </>
  );
}
