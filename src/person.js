const public_url = `${process.env.PUBLIC_URL}`;
export const person = {
  name: "Isaac",
  email: "nisaacdz@gmail.com",
  linkedin: "https://www.linkedin.com/in/isaac-dzikum-401033225/",
  github: "https://github.com/nisaacdz",
  youtube: "https://www.youtube.com/channel/UCf_6vvyIPM2wtGohdC68MKg",
  resume:
    "https://docs.google.com/document/d/19YBRcPLhNuv2_PSSYJXquFnM9nl551V6k2xdjKzhN44/preview?usp=sharing",
  school: "University of Ghana",
  location: "Legon",
  program: "Computer Science & Mathematics",
  projects: [
    {
      title: "Pitou",
      description:
        "A very fast and feature-rich file explorer powered by Tauri. It has all common file operations plus safe folder, recycle bin, and much cool features. Demo currently available for Windows only.",
      demo_link: `${public_url}/demos/demo_pitou.gif`,
      stack: "Tauri, Yew.rs, Tokio.rs, SQLite",
      codebase: "https://github.com/nisaacdz/pitou",
    },
    {
      title: "Bloxel",
      description:
        "Bloxel is a cross-platform lecture board application with chalk-like user experience. Bloxel incoporates features such as design chalks, straight line corrections and more. You can save your work and share it with others as pdf, jpeg or ppt.",
      demo_link: `${public_url}/demos/demo_bloxel.gif`,
      stack: "Tauri, React, MySQL, C++, Python, Html manipulation",
      codebase: "https://github.com/nisaacdz/bloxel",
    },
    {
      title: "Database Visualizer",
      description:
        "A single page web application for visualizing databases. Built with React and SQL.js. It currently only supports SQL databases.",
      demo_link: `${public_url}/demos/demo_database.gif`,
      stack: "React, C++, SQL.js",
      codebase: "https://github.com/nisaacdz/database_viewer",
    },
    {
      title: "News App",
      description:
        "A cross-platform app that provides summaries of latest news at various locations. Built with Egui.rs and wasm_bindgen. Fetches news from newsapi.org via REST api. Cached news are stored in SQLite database.",
      demo_link: `${public_url}/demos/demo_news.gif`,
      stack:
        "Egui.rs, serde & serde_json, REST api via newsapi.org, wasm_bindgen",
      codebase: "https://github.com/nisaacdz/dailydozeofsomenews",
    },
    {
      title: "Portfolio Website",
      description:
        "A single page application built almost entirely with React. Added different theme colors and deployed it to github apps.",
      demo_link: `${public_url}/demos/demo_portfolio.gif`,
      stack: "React, Node, Javascript, Html, CSS",
      codebase: "https://github.com/nisaacdz/portfolio",
    },
    {
      title: "Blockify",
      description:
        "A general purpose blockchain library with contains important crypto and blockchain operations such as generating cryptographic keys, signing data verifying digital signatures, hashing etc. Published as open source at crates.io with 4000 downloads.",
      demo_link: `${public_url}/demos/demo_blockify.gif`,
      stack: "Rust, DLL files, SQLite, Third party open source libraries",
      codebase: "https://github.com/nisaacdz/blockify",
    },
    {
      title: "Scientific Calculator",
      description: "A desktop calculator app written in Java with Java Swing.",
      demo_link: `${public_url}/demos/demo_calcus.gif`,
      stack: "Java, Java Swing, MWC pattern",
      codebase: "https://github.com/nisaacdz/ncalculator",
    },
    {
      title: "cleanli",
      description:
        "A startup online-based organization that handles environmentally safe disposal and recycling of household wastes.",
      demo_link: `${public_url}/demos/demo_unavailable.gif`,
      stack: "PostgreSQL, Sequelize, Express, Vue, AWS, Firebase",
      codebase: "https://github.com/nisaacdz/cleanli",
    },
    {
      title: "Medify",
      description: "An online healthcare management system",
      demo_link: `${public_url}/demos/demo_unavailable.gif`,
      stack: "Surrealdb, Express, Svelte, Firebase",
      codebase: "https://github.com/nisaacdz/medify",
    },
  ],
  experiences: [
    {
      company: "Tecunit Ghana",
      position: "Frontend Developer",
      duration: "From 28th August 2024 to present",
      description: [
        "Designed, developed and improved existing code for responsive, appealing, user-friendly web applications",
        "Collaborated with cross-functional teams to identify and prioritize project requirements and fix client issues",
        "Implemented accessibility and web performance optimization techniques to improve interface and experience",
      ],
    },
  ],
  thingsIDo: [
    "Frontend Development",
    "Backend Development",
    "Database Design",
    "Fullstack Development",
    "Web3 development",
    "Machine Learning",
  ],
  specialty: [
    "Practical experience in all stages of software development.",
    "Expertise in low-level programming and memory management.",
    "Problem solving skills and ability to identify and improve bad code.",
    "High learning rate and peerless adaptation to fast-paced environments.",
  ],
  passion: "I love to study problems and design and implement innovative solutions.",
};
