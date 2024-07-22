import React from 'react';
import ProfilePicture from '../ProfilePicture'; // Subcomponent for profile picture

const IntroPage = () => {
  return (
    <div className="intro-page">
      {/* Large profile picture section */}
      <div className="profile-picture-container">
        <ProfilePicture size="large" /> {/* Pass size prop to ProfilePicture */}
      </div>

      {/* Text section */}
      <div className="intro-text">
        {/* Replace with your intro, motivation, etc. */}
        <h1>Hi there! I'm [Your Name]</h1>
        <p>
          [Write a captivating introduction about yourself, your skills, and your passion. 
          Highlight what makes you unique and why someone should explore your work.]
        </p>
      </div>

      {/* Navigation buttons */}
      <nav className="navigation">
        <ul>
          <li className="active">Intro</li> {/* Mark Intro as active */}
          <li>Projects</li>
          <li>Experience</li>
          <li>Resume</li>
        </ul>
      </nav>
    </div>
  );
};

export default IntroPage;