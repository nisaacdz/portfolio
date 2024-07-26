import "./App.css";
import { useState } from "react";
import IntroPage from "./pages/intro/IntroPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ExperiencePage from "./pages/experience/ExperiencePage";
import ResumePage from "./pages/resume/ResumePage";
import NavBar from "./NavBar";
import { color_themes } from "./color_themes";

const madeBy = "nisaacdz";
const year = "2024";

function App() {
  const [pageIdx, setPageIdx] = useState(0);
  const [themeIdx, setThemeIdx] = useState(0);

  const updatePage = (idx) => {
    setPageIdx(idx);
  };

  const toggleTheme = () => {
    setThemeIdx((prevIdx) => (prevIdx + 1) % color_themes.length);
  };

  const color_style = color_themes[themeIdx];

  let body;
  if (pageIdx === 0) {
    body = <IntroPage />;
  } else if (pageIdx === 1) {
    body = <ProjectsPage />;
  } else if (pageIdx === 2) {
    body = <ExperiencePage />;
  } else {
    body = <ResumePage />;
  }

  return (
    <div className="App" style={color_style}>
      <header className="App-header">
        <NavBar
          pageIdx={pageIdx}
          updatePage={updatePage}
          toggleTheme={toggleTheme}
        />
      </header>
      <main className="App-body">{body}</main>
      <footer className="App-footer">
        <p>{`Made from scratch with 💙 by ${madeBy} in ${year}`}</p>
      </footer>
    </div>
  );
}

export default App;
