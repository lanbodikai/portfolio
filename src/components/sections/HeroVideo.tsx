"use client";

export default function HeroVideo() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] w-full overflow-hidden bg-black"
      aria-label="Hero"
    >
      {/* Background video */}
      <video
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        poster="/video/hero-poster.jpg" /* optional */
      >
        {/* Provide at least one of these; webm first if you have it */}
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
        {/* Fallback text for accessibility */}
        Your browser does not support the background video.
      </video>

      {/* Darken for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered content */}
      <div className="relative z-10 grid h-full place-items-center px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs tracking-[0.2em] text-[#E3362D]">
            GAME CHANGER
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Build fast. Ship clean. Look good doing it.
          </h1>
          <p className="mt-4 text-sm text-white/80 md:text-base">
            Real-time CV, crisp UX, and systems thinking—end to end.
          </p>

          {/* Optional CTAs */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#showcase"
              className="rounded-2xl bg-white px-5 py-3 text-black transition hover:bg-white/90"
            >
              See projects
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/20 px-5 py-3 text-white transition hover:border-white/40"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
