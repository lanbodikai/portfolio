import IntroOverlay from "@/components/ui/IntroOverlay";
import HeroG16 from "@/components/sections/HeroG16";
import Reveal from "@/components/ui/Reveal";
import CornerCard from "@/components/ui/CornerCard";
import ContactCTA from "@/components/sections/ContactCTA";
import TechSeparator from "@/components/ui/TechSeparator";
import ExperienceCard from "@/components/sections/ExperienceCard";

const badgeBase = "about-badge";
const badgeIconWrap = "about-badge-icon";
const badgeIcon = "block fa-fw text-[0.7em] leading-none";
const nameBadgeBase = badgeBase;

const BadgeIcon = ({ icon }: { icon: string }) => (
  <span className={badgeIconWrap}>
    <i className={`${icon} ${badgeIcon}`} aria-hidden="true" />
  </span>
);

const StackGroup = ({ label, icon, items }: { label: string; icon: string; items: string[] }) => (
  <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
    <span className="mr-2 font-semibold text-[var(--fg)]">{label}</span>
    <span className="inline-flex flex-wrap gap-2 align-middle">
      {items.map((item) => (
        <span key={item} className={badgeBase}>
          <BadgeIcon icon={icon} />
          <span>{item}</span>
        </span>
      ))}
    </span>
  </p>
);

const experiences = [
  {
    company: "RiseLink",
    role: "Developer",
    date: "Jul 2026 - Present",
    location: "Remote / Sacramento, CA",
    summary: "Building the Android and cloud software behind a connected voice recorder.",
    highlights: [
      "Built Kotlin and Jetpack Compose workflows for device communication, Wi-Fi/FTP audio sync, Opus processing, recording, and transcripts.",
      "Deployed an asynchronous GCP transcription pipeline and partnered with the hardware team to debug the recorder protocol on physical boards.",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Cloud Run", "Cloud Tasks", "Firestore", "Speech-to-Text"],
  },
  {
    company: "Berkeley Law Library",
    role: "IT / Software Assistant",
    date: "Nov 2025 - Present",
    location: "Berkeley, CA",
    summary: "Developing data tools that make university research and operations more reliable.",
    highlights: [
      "Built scraping and data-processing scripts for 200+ university faculty lists, with parsing, cleaning, and validation logic for reliable extraction.",
    ],
    tech: ["Python", "Beautiful Soup", "Data Processing", "Validation"],
  },
  {
    company: "NeuralSeek",
    role: "AI Agent Builder Intern",
    date: "Mar 2026 - May 2026",
    location: "Remote, US",
    summary: "Built and demonstrated a customized AWS-hosted agent for grounded technical feedback.",
    highlights: [
      "Implemented multi-model LLM routing, retrieval grounding, context-window optimization, and automated code evaluation.",
    ],
    tech: ["AWS", "LLM Routing", "Retrieval", "Code Evaluation"],
  },
  {
    company: "Someidea AI",
    role: "Full Stack Engineer Intern",
    date: "Jan 2025 - Apr 2025",
    location: "Berkeley, CA",
    summary: "Shipped structured AI services for search and personalized financial analysis.",
    highlights: [
      "Built a Llama 3.1-8B query parser that converted free-form prompts into validated JSON and improved downstream search precision by 80%.",
      "Designed a schema-validated LangChain and GPT-4o pipeline for consistent balance sheets and cash flow statements.",
    ],
    tech: ["Llama 3.1", "LangChain", "GPT-4o", "Structured Outputs", "JSON Schema"],
  },
];

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
                  Hey guys! I'm Kai, an AI and full-stack software developer in the Bay Area studying IEOR with a minor in EECS at{" "}
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
                <div className="space-y-4 border-l-2 border-rogCyan/40 pl-5">
                  <StackGroup label="Languages" icon="fa-solid fa-code" items={["Python", "Java", "SQL", "TypeScript / JavaScript"]} />
                  <StackGroup label="Frameworks" icon="fa-solid fa-layer-group" items={["React", "Next.js", "FastAPI", "Node.js", "SQLAlchemy", "LangChain"]} />
                  <StackGroup label="Data & Cloud" icon="fa-solid fa-cloud" items={["PostgreSQL", "SQLite", "Redis", "AWS", "GCP", "Oracle Cloud", "Docker"]} />
                  <StackGroup label="Tools & Testing" icon="fa-solid fa-screwdriver-wrench" items={["Git / GitHub", "GitHub Actions", "Alembic", "pytest", "Jest"]} />
                </div>
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
            <Reveal type="right" threshold={0.3}>
              <CornerCard
                title="MouseFit Studio"
                subtitle="01 // Fullstack AI Product"
                description="A full-stack gaming-mouse recommendation platform that ranks a 434-model catalog by hand size, grip style, shape, weight, and connectivity, with camera-guided MediaPipe measurements and RAG-powered explanations."
                img="/projects/mousefit-hero.jpg"
                align="right"
                href="https://mousefit.pro"
                tech={["TypeScript", "Next.js", "FastAPI", "PostgreSQL", "MediaPipe", "RAG"]}
              />
            </Reveal>

            <TechSeparator />

            <Reveal type="left" threshold={0.3}>
              <CornerCard
                title="BK7258 Voice Device Platform"
                subtitle="02 // Embedded AI Platform"
                description="An end-to-end voice assistant that streams microphone audio over WebSockets for speech recognition, LLM inference, TTS, and on-device playback. Includes C firmware and automated build, validation, configuration, and flashing tools."
                img="/projects/bk7258-platform.svg"
                align="left"
                tech={["Python", "C", "Node.js", "WebSocket", "Oracle Cloud", "Beken Armino SDK"]}
              />
            </Reveal>

            <TechSeparator />

            <Reveal type="right" threshold={0.3}>
              <CornerCard
                title="RiseLink Recorder Platform"
                subtitle="03 // Android + Cloud Systems"
                description="A connected-recorder platform spanning Kotlin and Jetpack Compose device workflows, Wi-Fi/FTP synchronization, Opus audio processing, and an asynchronous GCP transcription backend with persistent recording history."
                img="/projects/riselink-recorder.svg"
                align="right"
                tech={["Kotlin", "Jetpack Compose", "Cloud Run", "Cloud Tasks", "Firestore", "Speech-to-Text"]}
              />
            </Reveal>

            <TechSeparator />

            <Reveal type="left" threshold={0.3}>
              <CornerCard
                title="VentureSignal"
                subtitle="04 // Chrome Extension"
                description="An AI-powered second brain for investors that parses startup websites, monitors for traction signals, and drafts timely re-engagement emails."
                img="/projects/venturesignal.jpg"
                align="left"
                href="https://github.com/lanbodikai/ReengageAI"
                tech={["Chrome Extension", "LLM Workflow", "Parsing"]}
              />
            </Reveal>

            <TechSeparator />

            <Reveal type="right" threshold={0.3}>
              <CornerCard
                title="Financial AI Agent"
                subtitle="05 // @Someidea AI"
                description="A schema-validated financial analysis pipeline that converts free-form prompts into structured data and uses LangChain with GPT-4o to generate consistent, personalized balance sheets and cash flow statements."
                img="/projects/ABC.png"
                align="right"
                href="https://github.com/lanbodikai/SIAI-financial-agent-test"
                tech={["LangChain", "GPT-4o", "Llama 3.1", "Structured Outputs", "Financial Analysis"]}
              />
            </Reveal>

            <TechSeparator />

            <Reveal type="left" threshold={0.3}>
              <CornerCard
                title="ScratchGPT"
                subtitle="06 // Creative Coding Agent"
                description="A creative agent that translates natural-language instructions into functional, block-based Scratch code for K-12 students, supported by debugging and curriculum design work."
                img="/projects/scratchgpt-hero.png"
                align="left"
                href="https://stax.fun/editor"
                tech={["Education", "Scratch", "AI Agent", "Curriculum"]}
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

      <section id="experiences" className="relative z-10 overflow-hidden border-t border-[var(--border)] bg-[var(--card-2)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal type="up" className="mb-12 max-w-3xl md:mb-16">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-rogCyan">Beyond the build log</p>
            <h2 className="font-body text-4xl font-bold tracking-tight md:text-6xl">Experiences</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Product engineering, AI systems, data tooling, and hardware-software integration across teams and production environments.
            </p>
          </Reveal>

          <div className="grid items-stretch gap-5 lg:grid-cols-2">
            {experiences.map((experience, index) => (
              <Reveal key={experience.company} type={index % 2 === 0 ? "left" : "right"} threshold={0.15} className="h-full">
                <ExperienceCard {...experience} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER / CONTACT */}
      <footer className="relative z-10 overflow-hidden border-t border-[var(--border)] bg-[rgba(255,255,255,0.86)] pt-20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10 pb-10">
           <Reveal type="blur" duration={1.2}>
             <ContactCTA />
           </Reveal>
           
           <div className="flex flex-col md:flex-row justify-between items-center border-t border-[var(--border)] pt-8 mt-10 text-[var(--fg-muted)] text-sm font-mono">
             <p>© 2026 Kai Zhao.</p>
             <div className="flex items-center gap-2 text-[var(--fg)]">
                Open for opportunities
             </div>
           </div>
        </div>
      </footer>
    </main>
  );
}
