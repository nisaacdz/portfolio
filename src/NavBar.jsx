import React, { useEffect, useRef } from "react";
import "./NavBar.css";
import { person } from "./person";

const profile_photo = `${process.env.PUBLIC_URL}/photos/profile_photo.jpeg`;

const introPageTitle = "Welcome to my portfolio";
const projectsPageTitle = "My projects";
const experiencePageTitle = "My experience";
const resumePageTitle = "My resume";

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

  const navMenus = ["Intro", "My Projects", "My Experience", "My Resume"];

  return (
    <nav id="navbar">
      <div className="page-title">
        <button
          className="theme-button"
          onClick={toggleTheme}
          title="toggle color themes"
        />
        <h1 className="title-text">{titleText}</h1>
      </div>
      <ul className="nav-menus">
        {navMenus.map((menuName, idx) => {
          return (
            <li
              className={pageIdx === idx ? "activeTab" : "inactiveTab"}
              onClick={() => updatePage(idx)}
            >
              {menuName}
            </li>
          );
        })}
      </ul>
      <div className="profile-photo">
        <img src={profile_photo} alt="Profile" onClick={handleProfileClick} />
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
          <a href={`mailto:${person.gmail}`}>Email me</a>
        </li>
        <li>
          <a href={person.github} target="_blank" rel="noopener noreferrer">
            Follow me on GitHub
          </a>
        </li>
        <li>
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </a>
        </li>
        <li>
          <a href={person.youtube} target="_blank" rel="noopener noreferrer">
            Watch my youtube
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
