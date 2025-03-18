import { PortfolioProfile } from "@/types";
import ProjectCard from "./Project";

export default function MainPage({ person }: { person: PortfolioProfile }) {
  return (
    <main className="w-screen h-screen bg-background flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-8">
        {person.projects.map((project, i) => (
          <ProjectCard key={i} project={project} active={i === 0} />
        ))}
      </div>
    </main>
  );
}
