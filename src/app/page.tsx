import TopBarROG from "@/components/nav/TopBarROG";
import HeroVideo from "@/components/sections/HeroVideo";
import FeatureSpotlight from "@/components/sections/FeatureSpotlight";
import AuthorReel from "@/components/sections/AuthorReel";
import GalleryMarquee from "@/components/sections/GalleryMarquee";
import StickyScrollSection from "@/components/sections/StickyScrollSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-neon-magenta selection:text-white">
      <TopBarROG />
      
      <HeroVideo />
      
      {/* Intro Text Area - Spaced correctly below Hero */}
      <div className="relative z-20 bg-black pb-20 pt-32">
        <FeatureSpotlight />
      </div>

      {/* PROJECTS STACK 
        The "sticky" css in StickyScrollSection ensures they stack 
        visually on top of each other as you scroll down.
      */}
      
      {/* Project 1: Mouse-Fit */}
      <StickyScrollSection
        id="mouse-fit"
        title="Mouse-Fit"
        img="/projects/mousefit-hero.jpg"
        eyebrow="SYSTEM 01 // ERGONOMICS"
        align="right"
        ctaHref="https://mousefit.pro"
        tags={[
          "TensorFlowJS Vision",
          "React + Three.js",
          "Edge Detection",
          "Calibration Engine"
        ]}
      >
        <p>
          A browser-based ergonomic analysis tool. It uses computer vision to generate a mesh of your hand, calibrates size using a standard credit card, and matches you with the perfect hardware.
        </p>
      </StickyScrollSection>

      {/* Project 2: ScratchGPT */}
      <StickyScrollSection
        id="scratch-gpt"
        title="ScratchGPT"
        img="/projects/scratchgpt-hero.png"
        eyebrow="SYSTEM 02 // AI AGENT"
        align="left"
        ctaHref="https://stax.fun"
        tags={[
          "LLM Orchestration",
          "Prompt Engineering",
          "Educational Tech",
          "Natural Language Processing"
        ]}
      >
        <p>
          Bridging the gap between thought and code. A creative agent that translates natural language instructions into fully functional, block-based Scratch projects for classrooms.
        </p>
      </StickyScrollSection>

      {/* Project 3: Rocketry */}
      <StickyScrollSection
        id="rocketry"
        title="Rocketry"
        img="/projects/rocketry-hero.mp4"
        eyebrow="SYSTEM 03 // AEROSPACE"
        align="right"
        tags={[
          "Avionics Design",
          "Flight Telemetry",
          "CAD / 3D Modeling",
          "Recovery Systems"
        ]}
      >
        <p>
          High-altitude student rocketry operations. Engineered custom avionics bays, designed flight profiles for 750ft targets, and managed recovery deployment logic.
import TopBarROG from "@/components/nav/TopBarROG";
import HeroVideo from "@/components/sections/HeroVideo";
import FeatureSpotlight from "@/components/sections/FeatureSpotlight";
import AuthorReel from "@/components/sections/AuthorReel";
import GalleryMarquee from "@/components/sections/GalleryMarquee";
import StickyScrollSection from "@/components/sections/StickyScrollSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-neon-magenta selection:text-white">
      <TopBarROG />
      
      <HeroVideo />
      
      {/* Feature Highlight / Intro */}
      <div className="relative z-20 bg-[#050505] pb-32 pt-32">
        <FeatureSpotlight />
      </div>

      {/* PROJECTS STACK 
        Each section is 100vh and Sticky. 
        They will physically stack on top of each other.
        The 'index' prop manages z-index.
      */}
      
      <StickyScrollSection
        index={1}
        id="mouse-fit"
        title="Mouse-Fit"
        img="/projects/mousefit-hero.jpg"
        eyebrow="SYS // 01"
        align="right"
        ctaHref="https://mousefit.pro"
        tags={["Computer Vision", "React Three Fiber", "Calibration Engine"]}
      >
        <p>
          A browser-based ergonomic analysis tool. It uses <strong>TensorFlowJS</strong> to generate a real-time mesh of your hand, calibrates physical size using a standard credit card, and matches you with the perfect hardware.
        </p>
      </StickyScrollSection>

      <StickyScrollSection
        index={2}
        id="scratch-gpt"
        title="ScratchGPT"
        img="/projects/scratchgpt-hero.png"
        eyebrow="SYS // 02"
        align="left"
        ctaHref="https://stax.fun"
        tags={["LLM Orchestration", "Prompt Engineering", "EdTech"]}
      >
        <p>
          Bridging the gap between natural language and logic. A creative agent that translates plain English instructions into fully functional, block-based <strong>Scratch</strong> projects for educational environments.
        </p>
      </StickyScrollSection>

      <StickyScrollSection
        index={3}
        id="rocketry"
        title="Rocketry"
        img="/projects/rocketry-hero.mp4"
        eyebrow="SYS // 03"
        align="right"
        tags={["Avionics", "Telemetry", "Flight Ops"]}
      >
        <p>
          High-altitude student rocketry operations. Engineered custom avionics bays with redundant deployment logic. Designed flight profiles for <strong>750ft</strong> targets and managed recovery system telemetry.
        </p>
      </StickyScrollSection>

      <StickyScrollSection
        index={4}
        id="robotics"
        title="Robotics"
        img="/projects/robotics-hero.png"
        eyebrow="SYS // 04"
        align="left"
        tags={["Autonomous Pathing", "Vision Systems", "Mechanism Design"]}
      >
        <p>
          Competitive robotics engineering at a high level. Integrated drivetrain mechanics with vision-based autonomous routines. Features auto-aligning manipulators and real-time strategic path planning.
        </p>
      </StickyScrollSection>

      {/* Ending Sections
        We use z-index 50 to ensure this content scrolls OVER the last project card
        instead of getting stuck behind it.
      */}
      <div className="relative z-50 bg-[#050505] shadow-[0_-50px_100px_rgba(0,0,0,1)]">
        <div id="awards" className="border-t border-white/10 py-32">
          <AuthorReel />
        </div>

        <div className="pb-24 pt-12">
          <GalleryMarquee />
        </div>

        <ContactCTA />
      </div>
    </main>
  );
}