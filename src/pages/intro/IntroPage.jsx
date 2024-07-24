import React from "react";
import "./IntroPage.css";

const description = `In a quiet village nestled between rolling hills, a curious cat named Whiskers discovered a hidden path leading to an ancient forest. The trees whispered secrets of forgotten times, and the air was filled with the scent of blooming flowers. Whiskers, with his keen sense of adventure, followed the path until he stumbled upon a sparkling stream. There, he met a wise old turtle who shared tales of the forest’s magic. As the sun set, casting a golden glow, Whiskers realized that every journey holds the promise of new discoveries and friendships.`;
const portrait_picture = "../../../portrait_picture.jpg";
const prefaredName = "Isaac Newton";
const github = "https://github.com/nisaacdz";
const linkedin = "https://www.linkedin.com/in/isaac-dzikum-401033225/";
const gmail = "nisaacdz@gmail.com";

const IntroPage = () => {
  return (
    <div id="intro-page">
      <div className="portrait-picture-container">
        <img className="portrait-picture" src={portrait_picture} alt="portrait-picture" />
        <div className="social-buttons">
          <a href={`mailto:${gmail}`}>
            <img src="../../../logos/gmail.png" alt="Gmail" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img src="../../../logos/linkedin.png" alt="LinkedIn" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img src="../../../logos/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="intro-text">
        <h1>{`Hi there! I'm ${prefaredName}`}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default IntroPage;
