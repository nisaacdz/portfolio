import React, { useState } from "react";
import "./ProjectsPage.css";


const projects = [
  {
    title: "Pitou",
    description: "Pitou is my biggest personal project so far. It is an extremely fast file explorer powered by Tauri. The frontend is frontend is built with Yew.rs and the backend is built with Rust. It has all common file operations plus safe folder, recycle bin, and other cool features. Demo currently available for Windows only.",
    demo_link: "../../../demo_pitou.gif",
    deployed_to: "dljdsljs",
    usage: "dlsjdls",
    codebase: "https://github.com/nisaacdz/pitou",
  },
  {
    title: "Bloxel",
    description: "Bloxel is a lecture board cross-platform application built with React, Tauri, C++, Python, Rust. Incoporates design chalks, straight line corrections and more. You can save your work and share it with others as pdf, jpeg or ppt.",
    demo_link: "../../../demo_bloxel.gif",
    deployed_to: "",
    usage: "",
    codebase: "https://github.com/nisaacdz/bloxel",
  },
  {
    title: "Bloxel",
    description: "Bloxel is a lecture board cross-platform application built with React, Tauri, C++, Python, Rust. Incoporates design chalks, straight line corrections and more. You can save your work and share it with others as pdf, jpeg or ppt.",
    demo_link: "../../../demo_bloxel.gif",
    deployed_to: "",
    usage: "",
    codebase: "https://github.com/nisaacdz/bloxel",
  },
  {
    title: "Bloxel",
    description: "Bloxel is a lecture board cross-platform application built with React, Tauri, C++, Python, Rust. Incoporates design chalks, straight line corrections and more. You can save your work and share it with others as pdf, jpeg or ppt.",
    demo_link: "../../../demo_bloxel.gif",
    deployed_to: "",
    usage: "",
    codebase: "https://github.com/nisaacdz/bloxel",
  }
];

const ProjectCard = ({ project }) => {
  const { title, description, demo_link, codebase, deployed_to, usage } = project;

  return (
    <div className="project-card">
      <img className="project-demo" src={demo_link} alt="Project Demo" />
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <a href={codebase} target="_blank" rel="noreferrer" className="project-link">
        View Code
      </a>
      {deployed_to && (
        <p className="project-deployed-to">
          Deployed to: <a href={deployed_to}>{deployed_to}</a>
        </p>
      )}

      {deployed_to && usage && (
        <p className="project-usage">
          Usage: {usage}
        </p>
      )}
    </div>
  );
};

const ProjectsPage = () => {
  const [projectIdx, setProjectIdx] = useState(0);

  const handleNextProject = () => {
    if (projectIdx < projects.length - 1) {
      setProjectIdx(projectIdx + 1);
    }
  };

  const handlePreviousProject = () => {
    if (projectIdx > 0) {
      setProjectIdx(projectIdx - 1);
    }
  };

  return (
    <div id="projects-page">
      <div className="projects-container">
        <div>
          <button
            onClick={handlePreviousProject}
            disabled={projectIdx === 0}
            className="btn"
          >
            Previous
          </button>
          <button
            onClick={handleNextProject}
            disabled={projectIdx === projects.length - 1}
            className="btn"
          >
            Next
          </button>
        </div>
        <ProjectCard project={projects[projectIdx]} />
      </div>
    </div>
  );
};

export default ProjectsPage;