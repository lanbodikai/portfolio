import IntroOverlay from "@/components/ui/IntroOverlay";
import HeroG16 from "@/components/sections/HeroG16";
import Reveal from "@/components/ui/Reveal";
import CornerCard from "@/components/ui/CornerCard";
import ContactCTA from "@/components/sections/ContactCTA";
import TechSeparator from "@/components/ui/TechSeparator";

const badgeBase =
  "inline-flex items-center gap-2 rounded-xl bg-card px-3 py-1 text-[1.02em] font-semibold leading-none text-fg ring-1 ring-border shadow-sm transition-colors";
const badgeIconWrap =
  "inline-grid h-[1.05rem] w-[1.05rem] shrink-0 place-items-center rounded-lg border border-border bg-card-2";
const badgeIcon = "block fa-fw text-[0.7em] leading-none text-rogRed";
const nameBadgeBase = badgeBase;

const BadgeIcon = ({ icon }: { icon: string }) => (
  <span className={badgeIconWrap}>
    <i className={`${icon} ${badgeIcon}`} aria-hidden="true" />
  </span>
);

export default function Page() {
  return (
    <main className="min-h-screen selection:bg-accent selection:text-accent-contrast overflow-x-hidden">
      <IntroOverlay />
      
      {/* 1. HERO - Zoom Animation */}
      <div className="relative">
        <Reveal type="zoom" duration={1.5}>
          <HeroG16 />
        </Reveal>
      </div>

      {/* 2. ABOUT SECTION - Slide & Blur Animations */}
      <section id="about" className="relative py-24 md:py-32 tech-bg overflow-hidden">
        {/* Colorful Background Glows */}
        <div className="absolute top-0 right-0 h-1/2 w-1/2 bg-rogRed/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-0 h-1/3 w-1/2 bg-rogCyan/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 h-40 w-40 rounded-full bg-rogCyan/20 blur-[90px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col items-center justify-center">
            <Reveal type="blur" delay={0.2} className="w-full max-w-3xl">
              <div className="space-y-6 text-left">
                <div>
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--fg)]">
                    About
                  </h2>
                  <div className="mt-3 h-1 w-16 bg-rogRed" />
                </div>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  I'm Kai (Junkai) - a full-stack AI + web developer in the Bay Area. I'm studying IEOR at{" "}
                  <span className={nameBadgeBase}>
                    <BadgeIcon icon="fa-solid fa-bear" />
                    <span>UC Berkeley</span>
                  </span>{" "}
                  with a Data Science minor. Love building end to end AI products that solve real, practical problems.
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  I'm building{" "}
                  <span className={nameBadgeBase}>
                    <BadgeIcon icon="fa-solid fa-computer-mouse" />
                    <span>MouseFit</span>
                  </span>
                  , a web app that helps gamers find better-fitting peripherals by turning hand size + grip style into practical, no-BS recommendations.
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  I mostly build in{" "}
                  <span className="inline-flex flex-wrap gap-2 align-middle">
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-brands fa-js" />
                      <span>JavaScript</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-brands fa-python" />
                      <span>Python</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-brands fa-java" />
                      <span>Java</span>
                    </span>
                  </span>. I also use a bit of{" "}
                  <span className="inline-flex flex-wrap gap-2 align-middle">
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-code" />
                      <span>C</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-database" />
                      <span>SQL</span>
                    </span>
                    <span className={badgeBase}>
                      <BadgeIcon icon="fa-solid fa-calculator" />
                      <span>MATLAB</span>
                    </span>
                  </span>{" "}
                  <span className="italic">(since I'm an IEOR major - can't complain)</span>.
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  Tool-wise, I use{" "}
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
                  </span>.
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  I'm enjoy robotics, 3D modeling, and gaming. Especially interested in building products that blend engineering + design into something people can actually feel and use.
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
                  Hit me up on{" "}
                  <a
                    href="https://www.linkedin.com/in/kai-zhao-85b9832a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-[var(--fg)] underline decoration-rogRed/60 underline-offset-4 hover:text-rogRed transition-colors"
                  >
                    <i className="fa-brands fa-linkedin-in text-rogRed text-xs" aria-hidden="true" />
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
      <section id="projects" className="py-24 bg-[var(--bg)] tech-bg relative border-t border-[var(--border)] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-rogCyan/10 via-transparent to-rogRed/10" />
        <div className="pointer-events-none absolute -top-16 right-10 h-72 w-72 rounded-full bg-rogCyan/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 left-8 h-72 w-72 rounded-full bg-rogRed/15 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
          <Reveal type="zoom" className="text-center mb-8">
            <h2 className="font-tech text-4xl md:text-6xl font-bold mb-2 uppercase">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-rogRed mx-auto" />
          </Reveal>

          <div className="flex flex-col gap-4">
            
            {/* Project 1: Mouse-Fit (Image Right) */}
            <Reveal type="right" threshold={0.3}>
              <CornerCard
                title="Mouse-Fit"
                subtitle="01 // FULLSTACK AI PRODUCT"
                description="A browser-based ergonomic analysis tool. It uses computer vision to generate a real-time mesh of your hand, calibrates physical size using a standard credit card, and matches you with the perfect hardware."
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
                img="/projects/ABC.png" 
                align="left"
                href="https://github.com/lanbodikai/SIAI-financial-agent-test"
              />
            </Reveal>

          </div>

          <Reveal type="up" className="mt-24 flex justify-center">
            <button className="inline-flex items-center px-8 py-3 border border-border text-rogRed font-tech uppercase tracking-[0.25em] text-xs hover:bg-rogRed hover:text-accent-contrast dark:border-rogRed dark:hover:bg-[var(--border)] dark:hover:text-[var(--fg)] transition-colors duration-300">
              Checkout more projects
            </button>
          </Reveal>
        </div>
      </section>

      {/* 5. FOOTER / CONTACT */}
      <footer className="relative z-50 bg-[var(--card)] pt-20 border-t border-[var(--border)] overflow-hidden">
        <div className="absolute inset-0 tech-bg opacity-20 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10 pb-10">
           <Reveal type="blur" duration={1.2}>
             <ContactCTA />
           </Reveal>
           
           <div className="flex flex-col md:flex-row justify-between items-center border-t border-[var(--border)] pt-8 mt-10 text-[var(--fg-muted)] text-sm font-mono">
             <p>© 2025 KAI ZHAO. SYSTEM ONLINE.</p>
             <div className="flex items-center gap-2 text-[var(--fg)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--fg)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--fg)]"></span>
                </span>
                OPEN FOR OPPORTUNITIES
             </div>
           </div>
        </div>
      </footer>
    </main>
  );
}
