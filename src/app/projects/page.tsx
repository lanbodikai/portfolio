// src/app/projects/page.tsx

import TopBarROG from "@/components/nav/TopBarROG";
import AuthorReel from "@/components/sections/AuthorReel";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <TopBarROG />
      {/* Spacer to sit below fixed navbar */}
      <div className="h-16" />

      {/* Reuse the Projects reel for a focused projects page */}
      <AuthorReel />
    </main>
  );
}

