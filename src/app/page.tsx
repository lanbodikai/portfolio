// src/app/page.tsx

import TopBarROG from "@/components/nav/TopBarROG";

import HeroVideo from "@/components/sections/HeroVideo";
// Front hero (ASUS layout: title left, video right)

import FeatureSpotlight from "@/components/sections/FeatureSpotlight";

// Vertical scroll → horizontal pan cards (we'll target this with #specs from navbar)
// import ProjectsBriefHorizontal from "@/components/sections/ProjectsBriefHorizontal";

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
      {/* 2) ASUS-style feature highlight */}
      <FeatureSpotlight />
      {/* 3) Brief Overview — moved into Projects reel; cleaned out */}
      {/** <ProjectsBriefHorizontal /> */}

      {/* 4) Author / “Awards” reel (navbar "Awards" → #awards) */}
      <AuthorReel />

      {/* 5) Rolling gallery (navbar "Gallery" → #gallery) */}
      <GalleryMarquee />

      {/* Experiences — each with its own paragraph + bullets */}
  
      <ProjectDetail
        id="proj-a"
        title="Mouse-Fit"
        img="/projects/mousefit-hero.jpg"
        ctaHref="https://mousefit.pro"
        ctaTarget="_blank"
        ctaLabel="View Mouse-Fit"
        layout="right-portrait"
      >
        <p className="max-w-xl text-base text-white/85 md:text-lg">
          Browser-based hand-fit tool that measures landmarks, calibrates with a card, and recommends ergonomic mice with clear, explainable matches.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-white/75 md:text-base">
          <li className="flex items-center gap-3"><span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]" /> Mouse database + Finder AI agent</li>
          <li className="flex items-center gap-3"><span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#22d3ee]" /> 3-view capture with credit-card homography calibration</li>
          <li className="flex items-center gap-3"><span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a78bfa]" /> Self-trained mouse-detection model powering edge-aware overlays</li>
        </ul>
      </ProjectDetail>

      <ProjectDetail
        id="proj-b"
        title="ScratchGPT"
        img="/projects/scratchgpt-hero.png"
        ctaHref="https://stax.fun"
        ctaTarget="_blank"
        ctaLabel="View ScratchGPT"
      >
        <p className="max-w-xl text-base text-white/85 md:text-lg">
          Natural-language to Scratch: a creative agent that turns ideas into complete projects with classroom-friendly guardrails.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-white/75 md:text-base">
          <li className="flex items-center gap-3"><span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]" /> 100+ prompts evaluated for reliability and coverage</li>
          <li className="flex items-center gap-3"><span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#22d3ee]" /> Developed multiple step-by-step lesson plans using the ScratchGPT AI tool</li>
          <li className="flex items-center gap-3"><span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a78bfa]" /> Builds runnable projects in ~15 s on average</li>
        </ul>
      </ProjectDetail>


           <ProjectDetail id="proj-c" title="Rocketry" img="/projects/rocketry-hero.mp4" layout="right-portrait">
        <p className="max-w-xl text-base text-white/85 md:text-lg">
          Student rocketry avionics and flight ops: telemetry, flight software, and ground support.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-white/75 md:text-base">
          <li className="flex items-center gap-3">
            <span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]" />
            CAD + 3D-modeled airframe and avionics bay
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#22d3ee]" />
            ARC-compliant payload cradle for a single raw egg; parachute recovery with all parts tethered
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a78bfa]" />
            Flight profile tuned to 750 ft altitude and 36–39 s duration targets
          </li>
        </ul>
      </ProjectDetail>

      <ProjectDetail id="proj-d" title="Robotics" img="/projects/robotics-hero.png">
        <p className="max-w-xl text-base text-white/85 md:text-lg">
          Competitive robotics: strategy, motion planning, and system integration for reliable autonomous tasks.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-white/75 md:text-base">
          <li className="flex items-center gap-3">
            <span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#a78bfa] to-[#22d3ee]" />
            Built and integrated drivetrain, manipulators, and wiring for competition-ready robots
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#22d3ee]" />
            Autonomous routines, strategic match planning, and code integration across subsystems
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-block h-[10px] w-[10px] rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a78bfa]" />
            Features: AprilTags vision, motion profiles, auto-align
          </li>
        </ul>
      </ProjectDetail>

      {/* View more projects CTA */}
      <div className="mt-4 mb-8 flex w-full justify-center">
        <a
          href="/projects"
          className="inline-flex items-center rounded-md border border-white/15 bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/20"
        >
          View More Projects
        </a>
      </div>


      {/* 9) Contact / Get in touch (navbar "Support" → #contact) */}
      <ContactCTA id="contact" />
    </main>
  );
}
