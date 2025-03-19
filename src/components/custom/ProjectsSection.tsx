import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section
      id="projects"
      className="w-full h-auto p-4 mb-16 mt-8 scroll-smooth"
    >
      <div className="w-full h-auto container">
        <h2 className="text-3xl font-bold mb-8 text-left">Projects</h2>
        <div className="w-full flex flex-wrap gap-8 justify-center sm:px-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} active={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
