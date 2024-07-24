import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";


const Typewriter = ({ text, delay, styles, workDomains }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activateReactTyped, setActivateReactTyped] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeOut = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeOut);
    }
  }, [currentIndex, delay, text]);

  useEffect(() => {
    if (workDomains && (currentIndex >= text.length)) {
      setActivateReactTyped(true);
    }
  }, [currentIndex, text, workDomains]);

  const iDoStyles =  {
    textAlign: 'center',
    fontWeight: 600
  }

  return (
    <>
      <div>
        {activateReactTyped && 
          <h3>
            <span style={iDoStyles}>What I do:</span> {" "}
            <ReactTyped
              strings={workDomains}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar=">"
              showCursor={true}
            />
          </h3>
        }
        <span style={styles}>{currentText}</span>        
      </div>
    </>
  );
};

export default Typewriter;