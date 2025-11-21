import IntroOverlay from "@/components/ui/IntroOverlay";
import TopBarROG from "@/components/nav/TopBarROG";
import HeroG16 from "@/components/sections/HeroG16";
import Reveal from "@/components/ui/Reveal";
import CornerCard from "@/components/ui/CornerCard";
import ContactCTA from "@/components/sections/ContactCTA";
import ProfileDeck from "@/components/ui/ProfileDeck"; 
import TechSeparator from "@/components/ui/TechSeparator";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050507] text-white selection:bg-rogRed selection:text-white overflow-x-hidden">
      <IntroOverlay />
      <TopBarROG />
      
      {/* 1. HERO - Zoom Animation */}
      <div className="relative">
        <Reveal type="zoom" duration={1.5}>
          <HeroG16 />
        </Reveal>
      </div>

      {/* 2. ABOUT SECTION - Slide & Blur Animations */}
      <section id="about" className="relative py-24 md:py-32 tech-bg overflow-hidden">
        {/* Purple Background Glow */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-rogRed/10 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-20 items-center justify-center">
            
            {/* Left: 3D Card Animation */}
            <Reveal type="left" className="relative group perspective-1000">
               <div className="absolute -inset-4 bg-rogRed/20 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition duration-1000" />
               <ProfileDeck />
            </Reveal>

            {/* Right: Text Content */}
            <Reveal type="blur" delay={0.2} className="w-full md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-rogRed" />
                <h3 className="font-tech text-rogRed text-lg tracking-widest">WHO I AM</h3>
              </div>
              <h2 className="font-tech text-4xl md:text-5xl font-bold mb-6 uppercase leading-tight">
                From Concept <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rogRed to-rogCyan">To Product</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                I am a product-minded engineer bridging the gap between advanced AI and real-world utility. From computer vision tools to autonomous financial agents, I build intelligent full-stack systems that turn complex logic into intuitive, scalable products.
              </p>
              
              {/* Stats Grid */}
              <Reveal type="up" delay={0.4} className="grid grid-cols-2 gap-4 mt-8">
                <div className="border border-gray-800 p-4 hover:border-rogRed transition-colors duration-300">
                  <h4 className="font-tech text-2xl text-white">200+</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Prototypes</p>
                </div>
                <div className="border border-gray-800 p-4 hover:border-rogCyan transition-colors duration-300">
                  <h4 className="font-tech text-2xl text-white">∞</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Solution</p>
                </div>
              </Reveal>
            </Reveal>
          </div>
        </div>
      </section>
      
      {/* 3. SELECTED MISSIONS */}
      <section id="projects" className="py-24 bg-black tech-bg relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal type="zoom" className="text-center mb-20">
            <h2 className="font-tech text-4xl md:text-6xl font-bold mb-2 uppercase">
              Selected <span className="text-rogRed glitch-text" data-text="Missions">Missions</span>
            </h2>
            <div className="w-24 h-1 bg-rogRed mx-auto" />
          </Reveal>

          <div className="flex flex-col gap-12">
            
            {/* Project 1: Mouse-Fit (Image Right) */}
            <Reveal type="right" threshold={0.3}>
              <CornerCard
                title="Mouse-Fit"
                subtitle="01 // FULLSTACK AI PRODUCT"
                description="A browser-based ergonomic analysis tool. It uses computer vision to generate a real-time mesh of your hand, calibrates physical size using a standard credit card, and matches you with the perfect hardware."
                tags={["Computer Vision", "TensorFlowJS", "Databases"]}
                img="/projects/mousefit-hero.jpg"
                align="right"
                href="https://mousefit.pro"
              />
            </Reveal>

            <TechSeparator />

            {/* Project 2: VentureSignal (New Project - Image Left) */}
            <Reveal type="left" threshold={0.3}>
              <CornerCard 
                title="VentureSignal"
                subtitle="02 // VC AI ASSISTANT"
                description="The intelligent VC assistant. An AI-powered Chrome extension acting as a 'second brain' for investors. It parses startup websites, passively monitors for traction signals, and auto-drafts re-engagement emails."
                tags={["FastAPI", "SQL", "Chrome Extension", "AI Agent"]}
                img="/projects/venturesignal.jpg" // Ensure you add an image with this name
                align="left"
                href="https://github.com/lanbodikai/ReengageAI"
              />
            </Reveal>

            <TechSeparator />
            
            {/* Project 3: ScratchGPT (Image Right) */}
            <Reveal type="right" threshold={0.3}>
              <CornerCard 
                title="ScratchGPT"
                subtitle="03 // AI AGENT"
                description="Bridging the gap between natural language and logic. A creative agent that translates plain English instructions into fully functional, block-based Scratch projects."
                tags={["Debugging", "Product Developement", "EdTech"]}
                img="/projects/scratchgpt-hero.png"
                align="right"
                href="https://stax.fun"
              />
            </Reveal>
            
            {/* ANIMATION SEPARATOR */}
            <TechSeparator />

            {/* Project 4: Financial AI Agent (New Addition) */}
            <Reveal type="left" threshold={0.3}>
              <CornerCard 
                title="Financial AI Agent"
                subtitle="04 // AI AGENT"
                description="An AI-driven financial analyst agent. It leverages Llama 3.2 and LangChain to extract, normalize, and summarize complex financial data into typed JSON. Features advanced prompt engineering with strict output guardrails for consistent Income Statements and Balance Sheets."
                tags={["LangChain", "Prompt Engineering", "Python"]}
                img="/projects/ABC.png" 
                align="left"
                href="https://github.com/lanbodikai/SIAI-financial-agent-test"
              />
            </Reveal>

            <TechSeparator />
            

            {/* Project 5: Rocketry (Image Left) */}
            <Reveal type="left" threshold={0.3}>
              <CornerCard 
                title="Rocketry"
                subtitle="05 // AEROSPACE"
                description="High-altitude student rocketry operations. Engineered custom avionics bays with redundant deployment logic and designed flight profiles for 750ft targets."
                tags={["Avionics", "Telemetry", "Flight Ops"]}
                img="/projects/rocketry-hero.mp4" 
                align="left"
              />
            </Reveal>

            <TechSeparator />

            {/* Project 5: Robotics (Image Right) */}
            <Reveal type="right" threshold={0.3}>
              <CornerCard 
                title="Robotics"
                subtitle="06 // AUTONOMOUS"
                description="Competitive robotics engineering at a high level. Integrated drivetrain mechanics with vision-based autonomous routines."
                tags={["Computer Vision", "Path Planning", "Mechanism Design"]}
                img="/projects/robotics-hero.png"
                align="right"
              />
            </Reveal>

          </div>

          <Reveal type="up" className="mt-24 flex justify-center">
            <button className="inline-flex items-center px-8 py-3 border border-rogRed text-rogRed font-tech uppercase tracking-[0.25em] text-xs hover:bg-rogRed hover:text-black transition-colors duration-300">
              Checkout more projects
            </button>
          </Reveal>
        </div>
      </section>

      {/* 5. FOOTER / CONTACT */}
      <footer className="relative z-50 bg-black pt-20 border-t border-gray-900 overflow-hidden">
        <div className="absolute inset-0 tech-bg opacity-20 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10 pb-10">
           <Reveal type="blur" duration={1.2}>
             <ContactCTA />
           </Reveal>
           
           <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 mt-10 text-gray-500 text-sm font-mono">
             <p>© 2025 KAI ZHAO. SYSTEM ONLINE.</p>
             <div className="flex items-center gap-2 text-green-500">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                OPEN FOR OPPORTUNITIES
             </div>
           </div>
        </div>
      </footer>
    </main>
  );
}