// src/app/page.tsx
import { About } from "@/Components/About";
import { Projects } from "@/Components/Projects";
import { GitHub } from "@/Components/GitHub";
import { Skills } from "@/Components/Skills";
import { Resume } from "@/Components/Resume";
import { Contact } from "@/Components/Contact";

export default function HomePage() {
  return (
    <main className="px-4 py-10 space-y-24 max-w-4xl mx-auto">
      <About />
      <Projects />
      <GitHub />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}
