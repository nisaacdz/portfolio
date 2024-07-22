import './App.css';
import { useState } from 'react';
import IntroPage from './pages/intro/IntroPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import ExperiencePage from './pages/experience/ExperiencePage';
import ResumePage from './pages/resume/ResumePage';


function App() {
  const [pageIdx, setPageIdx] = useState(0);

  const updatePage = (idx) => {
    setPageIdx(idx);
  }

  let body;
  if (pageIdx === 0) {
    body = <IntroPage/>;
  } else if (pageIdx === 1) {
    body = <ProjectsPage/>;
  } else if (pageIdx === 2) {
    body = <ExperiencePage/>;
  } else {
    body = <ResumePage/>;
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigation">
          <ul>
            <li className={pageIdx === 0 ? "active" : ""} onClick={() => updatePage(0)}>Intro</li>
            <li className={pageIdx === 1 ? "active" : ""} onClick={() => updatePage(1)}>Projects</li>
            <li className={pageIdx === 2 ? "active" : ""} onClick={() => updatePage(2)}>Experience</li>
            <li className={pageIdx === 3 ? "active" : ""} onClick={() => updatePage(3)}>Resume</li>
          </ul>
        </nav>
      </header>
      <main>
        {body}
      </main>
    </div>
  );
}

export default App;
