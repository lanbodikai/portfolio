"use client";

import Hero from "@/components/sections/HeroROG";
import HorizontalShowcase from "@/components/sections/HorizontalShowcase";
import SpecsGrid from "@/components/sections/SpecsGrid";
import FeatureRows from "@/components/sections/FeatureRows";
import GalleryMarquee from "@/components/sections/GalleryMarquee";
import CTA from "@/components/sections/CTA";

export default function Sections() {
  return (
    <>
      <Hero />
      <HorizontalShowcase />
      <SpecsGrid />
      <FeatureRows />
      <GalleryMarquee />
      <CTA />
    </>
  );
}
