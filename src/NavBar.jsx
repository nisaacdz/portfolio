import React, {useEffect, useRef} from "react";
import "./NavBar.css";

const Popup = ({ show, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClose]);

    if (!show) return null;

    return (
        <div className="popup">
            <ul>
                <li><a href="https://github.com/nisaacdz" target="_blank" rel="noopener noreferrer">Follow me on GitHub</a></li>
                <li><a href="mailto:nisaacdz@gmail.com">Email me</a></li>
                <li><a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a></li>
                <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Share with me on Twitter</a></li>
            </ul>
        </div>
    );
};

const NavBar = ({ pageIdx, updatePage }) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const handleProfileClick = () => {
    setShowPopup(!showPopup);
  };

  const onClosePopup = () => {
    setShowPopup(false);
  };

  let titleText;
  if (pageIdx === 0) {
    titleText = "Welcome to my portfolio";
  } else if (pageIdx === 1) {
    titleText = "My projects";
  } else if (pageIdx === 2) {
    titleText = "My experience";
  } else {
    titleText = "My resume";
  }

  return (
    <nav id="navbar">
      <h1 className="title-text">{titleText}</h1>
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
        <img src="../../../profile_photo.jpeg" alt="Profile" onClick={handleProfileClick}/>
      </div>
      <Popup show={showPopup} onClose={onClosePopup}/>
    </nav>
  );
};

export default NavBar;
