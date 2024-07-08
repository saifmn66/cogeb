import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsCompleted from "./pages/ProjectsCompleted";
import ProjectsOngoing from "./pages/ProjectsOngoing";
import Contact from "./pages/Contact";
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
    <Router>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects-completed" element={<ProjectsCompleted />} /> */}
        {/* <Route path="/projects-ongoing" element={<ProjectsOngoing />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
