import TopBarROG from "@/components/nav/TopBarROG";
import ScrollSpyNav from "@/components/nav/ScrollSpyNav";
import HeroG16 from "@/components/sections/HeroG16";
import FeatureSection from "@/components/sections/FeatureSection";
import TechSpecs from "@/components/sections/TechSpecs";
import AuthorReel from "@/components/sections/AuthorReel";
import GalleryMarquee from "@/components/sections/GalleryMarquee";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500 selection:text-black">
      {/* Fixed Navigation Bars */}
      <TopBarROG />
      <ScrollSpyNav />
      
      {/* 01. Cinematic Intro */}
      <HeroG16 />
      
      {/* 02. Technical Specifications Grid */}
      <TechSpecs />

      {/* 03. Feature Sections (Z-Pattern Layout) */}
      <div className="flex flex-col gap-0">
        <FeatureSection
          id="mouse-fit"
          title="Mouse-Fit"
          subtitle="ERGONOMICS ENGINE"
          img="/projects/mousefit-hero.jpg"
          align="right"
          ctaHref="https://mousefit.pro"
          tags={["TensorFlowJS", "React Three Fiber", "Calibration"]}
          description={
            <>
              <p className="mb-4">
                A browser-based ergonomic analysis tool. It uses <strong>computer vision</strong> to generate a real-time mesh of your hand, calibrates physical size using a standard credit card, and matches you with the perfect hardware.
              </p>
              <p>
                No external hardware required. Just your webcam and a card.
              </p>
            </>
          }
        />

        <FeatureSection
          id="scratch-gpt"
          title="ScratchGPT"
          subtitle="AI ORCHESTRATION"
          img="/projects/scratchgpt-hero.png"
          align="left"
          ctaHref="https://stax.fun"
          tags={["LLM", "Prompt Engineering", "EdTech"]}
          description={
            <p>
              Bridging the gap between natural language and logic. A creative agent that translates plain English instructions into fully functional, block-based <strong>Scratch</strong> projects for educational environments.
            </p>
          }
        />

        <FeatureSection
          id="rocketry"
          title="Rocketry"
          subtitle="AVIONICS & FLIGHT"
          img="/projects/rocketry-hero.mp4"
          align="right"
          tags={["Embedded Systems", "Telemetry", "CAD"]}
          description={
            <p>
              High-altitude student rocketry operations. Engineered custom avionics bays with redundant deployment logic. Designed flight profiles for <strong>750ft</strong> targets and managed recovery system telemetry.
            </p>
          }
        />

        <FeatureSection
          id="robotics"
          title="Robotics"
          subtitle="AUTONOMOUS SYSTEMS"
          img="/projects/robotics-hero.png"
          align="left"
          tags={["Vision Systems", "Motion Profiling", "C++"]}
          description={
            <p>
              Competitive robotics engineering. Integrated drivetrain mechanics with vision-based autonomous routines. Features auto-aligning manipulators and real-time strategic path planning.
            </p>
          }
        />
      </div>

      {/* 04. Gallery Section */}
      <div id="gallery" className="border-t border-white/10 bg-black py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-widest text-white">GALLERY</h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </div>
        <GalleryMarquee />
      </div>

      {/* 05. About / Awards */}
      <div className="bg-[#050505] py-24">
        <AuthorReel />
      </div>

      {/* 06. Footer */}
      <ContactCTA />
    </main>
  );
}