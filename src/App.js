import './App.css';
import { useState } from 'react';
import IntroPage from './pages/intro/IntroPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import ExperiencePage from './pages/experience/ExperiencePage';
import ResumePage from './pages/resume/ResumePage';
import NavBar from './NavBar';


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
        <NavBar pageIdx={pageIdx} updatePage={updatePage}/>
      </header>
      <main className="App-body">
        {body}
      </main>
    </div>
  );
}

export default App;
