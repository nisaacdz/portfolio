import React from 'react';
import './ExperiencePage.css';
import { person } from '../../person';

const Experience = ({ company, position, duration, description }) => {
    return (
        <div className="experience">
            <h3>{position} at {company}</h3>
            <p>{duration}</p>
            <ul>
            {description.map((dsc, idx) => {
                return <li key={idx}>{dsc}</li>
            })}
            </ul>
        </div>
    );
};

const ExperiencePage = () => {
    return (
        <div id="experience-page">
            <GetYourCompanyHere />
            <div className="experiences">
                {person.experiences.map((exp, index) => (
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
                    {person.specialty.map((v, index) => <li key={index}>{v}</li>)}
                </ul>
            </div>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">Refer Me</a>
        </div>
    );
};

export default ExperiencePage;