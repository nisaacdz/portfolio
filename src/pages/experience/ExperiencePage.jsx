import React from 'react';
import './ExperiencePage.css';

const experiences = [
    // {
    //     company: "Tech Solutions Inc.",
    //     position: "Software Engineer",
    //     duration: "Jan 2020 - Present",
    //     description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions."
    // },
    // {
    //     company: "Innovative Apps",
    //     position: "Frontend Developer",
    //     duration: "Jun 2018 - Dec 2019",
    //     description: "Designed and implemented user interfaces for web applications. Worked closely with designers to create visually appealing and user-friendly experiences."
    // }
];

const specialty = [
    "Practical experience in all stages of software development.",
    "Expertise in low-level programming and memory management.",
    "Problem solving skills and ability to identify and improve bad code.",
    "High learning rate and peerless adaptation to fast-paced environments.",
];

const Experience = ({ company, position, duration, description }) => {
    return (
        <div className="experience">
            <h3>{position} at {company}</h3>
            <p>{duration}</p>
            <p>{description}</p>
        </div>
    );
};

const ExperiencePage = () => {
    return (
        <div id="experience-page">
            <GetYourCompanyHere />
            <div className="experiences">
                {experiences.map((exp, index) => (
                    <Experience
                        key={index}
                        company={exp.company}
                        position={exp.position}
                        duration={exp.duration}
                        description={exp.description}
                    />
                ))}
            </div>
        </div>
    );
};

const GetYourCompanyHere = () => {
    return (
        <div className="referral-container">
            <h1>Get Your Company Here</h1>
            <div>
                <h2>What I can provide</h2>
                <ul>
                    {specialty.map((v, index) => <li key={index}>{v}</li>)}
                </ul>
            </div>
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">Refer Me</a>
        </div>
    );
};

export default ExperiencePage;