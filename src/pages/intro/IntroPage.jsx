import React from "react";

const description = `Write a captivating introduction about yourself, your skills, and your passion. 
          Highlight what makes you unique and why someone should explore your work. Write a captivating introduction about yourself, your skills, and your passion. 
          Highlight what makes you unique and why someone should explore your work. Write a captivating introduction about yourself, your skills, and your passion. 
          Highlight what makes you unique and why someone should explore your work.`;

const prefaredName = "Isaac Newton";
const IntroPage = () => {
  return (
    <div className="intro-page">
      {/* Large profile picture section */}
      <div className="profile-picture-container">
        
      </div>

      {/* Text section */}
      <div className="intro-text">
        {/* Replace with your intro, motivation, etc. */}
        <h1>{`Hi there! I'm ${prefaredName}`}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default IntroPage;
