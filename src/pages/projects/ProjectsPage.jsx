import React from "react";
import "./ProjectsPage.css";

const projects = [
  {
    title: "Pitou",
    description:
      "Pitou is my biggest personal project so far. It is a very fast file explorer powered by Tauri. It has all common file operations plus safe folder, recycle bin, and much cool features. Demo currently available for Windows only.",
    demo_link: "../../../demos/demo_pitou.gif",
    stack: "Tauri, Yew.rs, Tokio.rs, SQLite",
    codebase: "https://github.com/nisaacdz/pitou",
  },
  {
    title: "Bloxel",
    description:
      "Bloxel is a cross-platform lecture board application with chalk-like user experience. Bloxel incoporates features such as design chalks, straight line corrections and more. You can save your work and share it with others as pdf, jpeg or ppt.",
    demo_link: "../../../demos/demo_bloxel.gif",
    stack: "Tauri, React, MySQL, C++, Python, Html manipulation",
    codebase: "https://github.com/nisaacdz/bloxel",
  },
  {
    title: "Database Visualizer",
    description:
      "A single page web application for visualizing databases. Built with React and SQL.js. It currently only supports SQL databases.",
    demo_link: "../../../demos/demo_database.gif",
    stack: "React, C++, SQL.js",
    codebase: "https://github.com/nisaacdz/bloxel",
  },
  {
    title: "News App",
    description:
      "Bloxel is a lecture board cross-platform application built with React, Tauri, C++, Python, Rust. Incoporates design chalks, straight line corrections and more. You can save your work and share it with others as pdf, jpeg or ppt.",
    demo_link: "../../../demos/demo_news.gif",
    stack:
      "Egui.rs, serde & serde_json, REST api via newsapi.org, wasm_bindgen",
    codebase: "https://github.com/nisaacdz/dailydozeofsomenews",
  },
  {
    title: "cleanli",
    description:
      "A startup online-based organization that handles environmentally safe disposal and recycling of household wastes.",
    demo_link: "../../../demos/demo_news.gif",
    stack: "PostgreSQL, Sequelize, Express, Vue, AWS, Firebase",
    codebase: "https://github.com/nisaacdz/dailydozeofsomenews",
  },
  {
    title: "Medify",
    description: "An online healthcare management system",
    demo_link: "../../../demos/demo_database.gif",
    stack: "Surrealdb, Express, Svelte, Firebase",
    codebase: "https://github.com/nisaacdz/dailydozeofsomenews",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
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
