import React from "react";
import "./ProjectsPage.css";

const projects = [
  {
    demo_link: "https://drive.google.com/file/d/177dXOQdLB45emzZHXM4IXEhSJsjFg0z6/view?usp=sharing",
    title: "Pitou",
    description: "Pitou is my biggest personal project so far. It is an extremely fast file explorer powered by Tauri. The frontend is frontend is built with Yew.rs and the backend is built with Rust. It has all common file operations plus safe folder, recycle bin, and other cool features. Demo currently available for Windows only.",
    deployed_to: "",
    usage: "",
    codebase: "https://github.com/nisaacdz/pitou",
  },{
    demo_gif: "../../../demo_bloxel.gif",
    title: "Bloxel",
    description: "Bloxel is a lecture board cross-platform application built with React, Tauri, C++, Python, Rust. Incoporates design chalks, straight line corrections and more. You can save your work and share it with others as pdf, jpeg or ppt.",
    deployed_to: "",
    usage: "",
    codebase: "https://github.com/nisaacdz/bloxel",
  },{
    demo_gif: "",
    title: "Lecture board App",
    description: "A cross-platform application built with React, Tauri, C++, Python, Rust.",
    deployed_to: "",
    usage: "",
    codebase: "",
  },
  {
    demo_gif: "",
    title: "Lecture board App",
    description: "A cross-platform application built with React, Tauri, C++, Python, Rust.",
    deployed_to: "",
    usage: "",
    codebase: "",
  },
  {
    demo_gif: "",
    title: "Lecture board App",
    description: "A cross-platform application built with React, Tauri, C++, Python, Rust.",
    deployed_to: "",
    usage: "",
    codebase: "",
  },
];

const ProjectCard = ({project}) => {
    return (
        <div className="project-card">
          <video autoplay loop muted playsinline>
            <source src={project.demo_link} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>

            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.codebase} target="_blank" className="project-link">View Code</a>
        </div>
    );
}

const ProjectsPage = () => {
    return (
        <div>
            <h1>My personal projects</h1>
            <div className="projects-container">
                {
                projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))
                }
            </div>
        </div>
    );
};

export default ProjectsPage;
