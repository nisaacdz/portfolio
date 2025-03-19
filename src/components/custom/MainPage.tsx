import { PortfolioProfile } from "@/types";
import ProjectsSection from "./ProjectsSection";

export default function MainPage({ person }: { person: PortfolioProfile }) {
  return (
    <main className="min-h-screen w-full bg-background">
      <ProjectsSection projects={person.projects}/>
    </main>
  );
}
