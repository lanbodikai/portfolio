// src/app/page.tsx

import TopBarROG from "@/components/nav/TopBarROG";

import HeroVideo from "@/components/sections/HeroVideo";
// Front hero (ASUS layout: title left, video right)

// Vertical scroll → horizontal pan cards (we'll target this with #specs from navbar)
import ProjectsBriefHorizontal from "@/components/sections/ProjectsBriefHorizontal";

// Auto “powerpoint” about/author reel (linked via #awards)
import AuthorReel from "@/components/sections/AuthorReel";

// Rolling image/video gallery (linked via #gallery)
import GalleryMarquee from "@/components/sections/GalleryMarquee";

// Simple detail slice for each project (A/B/C)
import ProjectDetail from "@/components/sections/ProjectDetail";

// Bottom contact CTA (linked via #contact)
import ContactCTA from "@/components/sections/ContactCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Fixed ASUS-style brand/navigation bar */}
      <TopBarROG />
      <HeroVideo />
      {/* 2) Brief Overview — vertical scroll pans horizontally (navbar "Tech Specs" → #specs) */}
      <ProjectsBriefHorizontal/>

      {/* 3) Author / “Awards” reel (navbar "Awards" → #awards) */}
      <AuthorReel/>

      {/* 4) Rolling gallery (navbar "Gallery" → #gallery) */}
      <GalleryMarquee/>

      {/* 5/6/7) Project details — anchor targets you can link to from cards */}
      <ProjectDetail id="proj-a" title="Mouse-Fit" img="/projects/mousefit-hero.jpg" />
      <ProjectDetail id="proj-b" title="Financial AI" img="/projects/finai-hero.jpg" />
      <ProjectDetail id="proj-c" title="Computer Vision" img="/projects/cv-hero.jpg" />

      {/* 8) Contact / Get in touch (navbar "Support" → #contact) */}
      <ContactCTA id="contact" />
    </main>
  );
}
