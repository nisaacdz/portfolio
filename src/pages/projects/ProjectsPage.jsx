import React from "react";
import "./ProjectsPage.css";
import { person } from "../../person";

const Projects = () => {
  return (
    <div className="projects-container">
      {person.projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <p className="project-stack">{`Technologies: ${project.stack}`}</p>
      <div className="project-links">
        <a href={project.demo_link} target="_blank" rel="noopener noreferrer">
          <img
            src={project.demo_link}
            alt={`${project.title} demo`}
            className="project-demo"
          />
        </a>
        <a
          href={project.codebase}
          target="_blank"
          rel="noopener noreferrer"
          className="project-codebase"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default Projects;
