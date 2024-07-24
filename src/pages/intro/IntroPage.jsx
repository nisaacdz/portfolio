import React from "react";
import "./IntroPage.css";
import { message, name } from "./message";
import Typewriter from "./TypeWriter";

const portrait_picture = "../../../portrait_picture.jpg";
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
            <img src="../../../logos/gmail.png" alt="Gmail" />
          </a>
          <span className='divider'></span>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img src="../../../logos/linkedin.png" alt="LinkedIn" />
          </a>
          <span className='divider'></span>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img src="../../../logos/github.png" alt="GitHub" />
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
