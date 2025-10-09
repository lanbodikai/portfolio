// src/app/projects/page.tsx

import TopBarROG from "@/components/nav/TopBarROG";
import ProjectsTimeline from "@/components/sections/ProjectsTimeline";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <TopBarROG />
      {/* Spacer to sit below fixed navbar */}
      <div className="h-16" />

      {/* Interactive flowing timeline of projects */}
      <ProjectsTimeline />
    </main>
  );
}
