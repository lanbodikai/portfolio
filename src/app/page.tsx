import IntroOverlay from "@/components/ui/IntroOverlay";
import HeroG16 from "@/components/sections/HeroG16";
import Reveal from "@/components/ui/Reveal";
import CornerCard from "@/components/ui/CornerCard";
import ContactCTA from "@/components/sections/ContactCTA";
import TechSeparator from "@/components/ui/TechSeparator";

const badgeBase = "about-badge";
const badgeIconWrap = "about-badge-icon";
const badgeIcon = "block fa-fw text-[0.7em] leading-none";
const nameBadgeBase = badgeBase;

const BadgeIcon = ({ icon }: { icon: string }) => (
  <span className={badgeIconWrap}>
    <i className={`${icon} ${badgeIcon}`} aria-hidden="true" />
  </span>
);

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--bg)] selection:bg-accent selection:text-accent-contrast">
      <IntroOverlay />
      
      {/* 1. HERO - Zoom Animation */}
      <div className="relative z-10">
        <Reveal type="zoom" duration={1.5}>
          <HeroG16 />
        </Reveal>
      </div>

      {/* 2. ABOUT SECTION - Slide & Blur Animations */}
      <section id="about" className="relative z-10 overflow-hidden border-y border-[var(--border)] bg-[rgba(255,255,255,0.74)] py-20 backdrop-blur-sm md:py-28 about-dark">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="flex flex-col items-start justify-center md:items-center">
            <Reveal type="blur" delay={0.2} className="w-full max-w-3xl">
              <div className="space-y-6 text-left">
                <div>
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[var(--fg)] font-body">
                    About
                  </h2>
                  <div className="mt-3 h-[2px] w-16 bg-rogCyan" />
                </div>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  Hey guys! I'm Kai, an AI and full-stack software developer in the Bay Area studying IEOR at{" "}
                  <span className={nameBadgeBase}>
                    <BadgeIcon icon="fa-solid fa-building-columns" />
                    <span>UC Berkeley</span>
                  </span>{"."}
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  I'm currently building{" "}
                  <span className={nameBadgeBase}>
                    <BadgeIcon icon="fa-solid fa-gamepad" />
                    <span>MouseFit</span>
                  </span>
                  {", "}a web product that helps gamers find better-fitting peripherals using hand-size, grip-style, and preference-based AI recommendations.
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  I'm interested in AI systems, agents, retrieval, evaluation, and building reliable software around LLMs: turning models into useful products, not just prompting them.
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  I build with{" "}
                  <span className="inline-flex flex-wrap gap-2 align-middle">
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-code" />
                      <span>TypeScript</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-brands fa-python" />
                      <span>Python</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-brands fa-js" />
                      <span>JavaScript</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-brands fa-java" />
                      <span>Java</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-code" />
                      <span>C++</span>
                    </span>
                  </span>{"."}
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  Product-wise, I use{" "}
                  <span className="inline-flex flex-wrap gap-2 align-middle">
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-brands fa-react" />
                      <span>React/Next.js</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-brands fa-node-js" />
                      <span>Node.js</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-database" />
                      <span>PostgreSQL/SQLite</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-wind" />
                      <span>Tailwind CSS</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-brands fa-github" />
                      <span>Git/GitHub</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-cloud" />
                      <span>Vercel</span>
                    </span>
                  </span>{"."}
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  AI-wise, I'm working with{" "}
                  <span className="inline-flex flex-wrap gap-2 align-middle">
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-brain" />
                      <span>LLM APIs</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-magnifying-glass-chart" />
                      <span>RAG</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-vector-square" />
                      <span>Embeddings</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-database" />
                      <span>Vector search</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-diagram-project" />
                      <span>Agent workflows</span>
                    </span>
                  </span>{"."}
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  Hit me up on{" "}
                  <a
                    href="https://www.linkedin.com/in/kai-zhao-85b9832a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-[var(--fg)] underline decoration-rogCyan/60 underline-offset-4 hover:text-rogCyan transition-colors"
                  >
                    <i className="fa-brands fa-linkedin-in text-rogCyan text-xs" aria-hidden="true" />
                    LinkedIn
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      {/* 3. SELECTED MISSIONS */}
      <section id="projects" className="relative z-10 overflow-hidden bg-[rgba(255,255,255,0.82)] py-20 backdrop-blur-sm md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <Reveal type="zoom" className="text-center mb-8">
            <h2 className="font-body text-4xl md:text-6xl font-bold mb-2 tracking-tight">
              My Projects
            </h2>
            <div className="mx-auto h-[2px] w-24 bg-rogCyan" />
          </Reveal>

          <div className="flex flex-col gap-2 md:gap-4">
            
            {/* Project 1: Mouse-Fit (Image Right) */}
            <Reveal type="right" threshold={0.3}>
              <CornerCard
                title="Mouse-Fit"
                subtitle="01 // Fullstack AI Product"
                description="A browser-based ergonomic analysis tool. Uses simple Q&A assisted with RAG/Computer Vision to analyze a real-time measurement of your hand, and matches you with the perfect gaming mouse."
                img="/projects/mousefit-hero.jpg"
                align="right"
                href="https://mousefit.pro"
                tech={["RAG", "Computer Vision", "Product"]}
              />
            </Reveal>

            <TechSeparator />

            {/* Project 2: VentureSignal (New Project - Image Left) */}
            <Reveal type="left" threshold={0.3}>
              <CornerCard 
                title="VentureSignal"
                subtitle="02 // Chrome Extension"
                description="The intelligent VC assistant. An AI-powered Chrome extension acting as a 'second brain' for investors. It parses startup websites, passively monitors for traction signals, and auto-drafts re-engagement emails."
                img="/projects/venturesignal.jpg"
                align="left"
                href="https://github.com/lanbodikai/ReengageAI"
                tech={["Chrome Extension", "LLM Workflow", "Parsing"]}
              />
            </Reveal>

            <TechSeparator />
            
            {/* Project 3: ScratchGPT (Image Right) */}
            <Reveal type="right" threshold={0.3}>
              <CornerCard 
                title="ScratchGPT"
                subtitle="03 // @Polylabs Inc"
                description="Debug and develop a curriculum plan around a creative agent that translates natural language instructions into functional, block-based Scratch code for K-12 students."
                img="/projects/scratchgpt-hero.png"
                align="right"
                href="https://stax.fun/editor"
                tech={["Education", "Scratch", "Curriculum"]}
              />
            </Reveal>
            
            {/* ANIMATION SEPARATOR */}
            <TechSeparator />

            {/* Project 4: Financial AI Agent (New Addition) */}
            <Reveal type="left" threshold={0.3}>
              <CornerCard 
                title="Financial AI Agent"
                subtitle="04 // @Someidea AI"
                description="Designed and built the backend pipeline for a multi-agent financial analyst AI using LangChain. Use LLM to extract and summarize complex financial reports into consistent income statements and balance sheets."
                img="/projects/ABC.png" 
                align="left"
                href="https://github.com/lanbodikai/SIAI-financial-agent-test"
                tech={["LangChain", "AI Agent", "Financial Reports"]}
              />
            </Reveal>

          </div>

          <Reveal type="up" className="mt-16 flex justify-center md:mt-20">
            <a
              href="https://github.com/lanbodikai?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-border bg-white/70 px-8 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--fg)] transition-colors duration-300 hover:border-rogCyan hover:bg-rogCyan hover:text-white"
            >
              Check out more projects
            </a>
          </Reveal>
        </div>
      </section>

      {/* 5. FOOTER / CONTACT */}
      <footer className="relative z-10 overflow-hidden border-t border-[var(--border)] bg-[rgba(255,255,255,0.86)] pt-20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10 pb-10">
           <Reveal type="blur" duration={1.2}>
             <ContactCTA />
           </Reveal>
           
           <div className="flex flex-col md:flex-row justify-between items-center border-t border-[var(--border)] pt-8 mt-10 text-[var(--fg-muted)] text-sm font-mono">
             <p>© 2025 Kai Zhao.</p>
             <div className="flex items-center gap-2 text-[var(--fg)]">
                Open for opportunities
             </div>
           </div>
        </div>
      </footer>
    </main>
  );
}
