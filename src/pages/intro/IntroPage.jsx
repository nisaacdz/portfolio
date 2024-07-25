import React from "react";
import "./IntroPage.css";
import { message, name } from "./message";
import Typewriter from "./TypeWriter";
import portrait_picture from "../../photos/portrait_picture.jpg";
import gmail_logo from "../../logos/gmail.png";
import linkedin_logo from "../../logos/linkedin.png";
import github_logo from "../../logos/github.png";

const github = "https://github.com/nisaacdz";
const linkedin = "https://www.linkedin.com/in/isaac-dzikum-401033225/";
const gmail = "nisaacdz@gmail.com";

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
          <a href={`mailto:${gmail}`}>
            <img src={gmail_logo} alt="Gmail" />
          </a>
          <span className='divider'></span>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedin_logo} alt="LinkedIn" />
          </a>
          <span className='divider'></span>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img src={github_logo} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="intro">
        <div className="intro-text-container">
          <div className="intro-text-hello">
            <p style={{ fontSize: "2rem" }}>
              {message.hello}
              <span className="intro-text-name">{name}!</span>
            </p>
          </div>
          <Typewriter
            text={message.message}
            delay={50}
            styles={typeWriterStyles}
            workDomains={message.whatIDo}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
