import React, { useEffect, useRef } from "react";
import "./NavBar.css";

const introPageTitle = "Welcome to my portfolio";
const projectsPageTitle = "My projects";
const experiencePageTitle = "My experience";
const resumePageTitle = "My resume";

const youtube = "https://www.youtube.com/channel/UCf_6vvyIPM2wtGohdC68MKg";
const github = "https://github.com/nisaacdz";
const linkedin = "https://www.linkedin.com/in/isaac-dzikum-401033225/";
const gmail = "nisaacdz@gmail.com";

const NavBar = ({ pageIdx, updatePage, toggleTheme }) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const handleProfileClick = () => {
    setShowPopup((prevShowPopup) => {
      return !prevShowPopup;
    });
  };

  const onClosePopup = () => {
    setShowPopup(false);
  };

  let titleText;
  if (pageIdx === 0) {
    titleText = introPageTitle;
  } else if (pageIdx === 1) {
    titleText = projectsPageTitle;
  } else if (pageIdx === 2) {
    titleText = experiencePageTitle;
  } else {
    titleText = resumePageTitle;
  }

  return (
    <nav id="navbar">
      <div className="page-title">
        <button className="theme-button" onClick={toggleTheme} title="toggle color themes"/>
        <h1 className="title-text">{titleText}</h1>
      </div>
      <ul>
        <li
          className={pageIdx === 0 ? "activeTab" : "inactiveTab"}
          onClick={() => updatePage(0)}
        >
          Intro
        </li>
        <li
          className={pageIdx === 1 ? "activeTab" : "inactiveTab"}
          onClick={() => updatePage(1)}
        >
          My projects
        </li>
        <li
          className={pageIdx === 2 ? "activeTab" : "inactiveTab"}
          onClick={() => updatePage(2)}
        >
          My Experience
        </li>
        <li
          className={pageIdx === 3 ? "activeTab" : "inactiveTab"}
          onClick={() => updatePage(3)}
        >
          My Resume
        </li>
      </ul>
      <div className="profile-photo">
        <img
          src="../../../profile_photo.jpeg"
          alt="Profile"
          onClick={handleProfileClick}
        />
      </div>
      <Popup show={showPopup} onClose={onClosePopup} />
    </nav>
  );
};

const Popup = ({ show, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClose]);

  if (!show) return null;

  return (
    <div className="popup" ref={ref}>
      <ul>
        <li>
          <a href={`mailto:${gmail}`}>Email me</a>
        </li>
        <li>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow me on GitHub
          </a>
        </li>
        <li>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </li>
        <li>
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch my youtube
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
