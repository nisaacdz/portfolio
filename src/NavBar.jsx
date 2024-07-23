
import React from 'react';
import './NavBar.css';

const NavBar = ({pageIdx, updatePage}) => {
    return (
        <nav id="navbar">
          <ul>
            <li className={pageIdx === 0 ? "activeTab" : "inactiveTab"} onClick={() => updatePage(0)}>Intro</li>
            <li className={pageIdx === 1 ? "activeTab" : "inactiveTab"} onClick={() => updatePage(1)}>My projects</li>
            <li className={pageIdx === 2 ? "activeTab" : "inactiveTab"} onClick={() => updatePage(2)}>My Experience</li>
            <li className={pageIdx === 3 ? "activeTab" : "inactiveTab"} onClick={() => updatePage(3)}>My Resume</li>
          </ul>
        </nav>
    );

};

export default NavBar;