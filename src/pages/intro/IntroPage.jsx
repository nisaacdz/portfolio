import React from "react";
import "./IntroPage.css";
import Typewriter from "./TypeWriter";
import { person } from "../../person";

const portrait_picture = `${process.env.PUBLIC_URL}/photos/portrait_picture.jpg`;
const gmail_logo = `${process.env.PUBLIC_URL}/logos/gmail.png`;
const linkedin_logo = `${process.env.PUBLIC_URL}/logos/linkedin.png`;
const github_logo = `${process.env.PUBLIC_URL}/logos/github.png`;

const message = {
  hello: `Hello👋! My name is `,
  message: `
        I'm a student at the ${person.school}, ${person.location} 
        pursuing a Bachelor of Science in ${person.program}.
        ${person.passion}
    `,
};

const IntroPage = () => {
  const typeWriterStyles = {
    fontWeight: "300",
    fontSize: "1.6rem",
    top: 0,
  };
  return (
    <div id="intro-page">
      <div className="portrait">
        <img
          className="portrait-picture"
          src={portrait_picture}
          alt="portrait-picture"
        />
        <div className="social-buttons">
          <a href={`mailto:${person.email}`}>
            <img src={gmail_logo} alt="Gmail" />
          </a>
          <span className='divider'></span>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedin_logo} alt="LinkedIn" />
          </a>
          <span className='divider'></span>
          <a href={person.github} target="_blank" rel="noopener noreferrer">
            <img src={github_logo} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="intro">
        <div className="intro-text-container">
          <div className="intro-text-hello">
            <p style={{ fontSize: "2rem" }}>
              {message.hello}
              <span className="intro-text-name">{person.name}!</span>
            </p>
          </div>
          <Typewriter
            text={message.message}
            delay={50}
            styles={typeWriterStyles}
            workDomains={person.thingsIDo}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
