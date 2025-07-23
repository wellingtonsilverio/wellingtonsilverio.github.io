import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './pages/About';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Academics from './pages/Academics';
import Hobbies from './pages/Hobbies';
import Budget from './pages/Budget';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route exact path="/"
                element={<About />}>
              </Route>
              <Route exact path="/about"
                element={<About />}>
              </Route>
              <Route exact path="/projects"
                element={<Projects />}>
              </Route>
              <Route exact path="/experiences"
                element={<Experiences />}>
              </Route>
              <Route exact path="/academics"
                element={<Academics />}>
              </Route>
              <Route exact path="/hobbies"
                element={<Hobbies />}>
              </Route>
              <Route exact path="/budget"
                element={<Budget />}>
              </Route>
              <Route exact path="/faq"
                element={<FAQ />}>
              </Route>
              <Route exact path="/contact"
                element={<Contact />}>
              </Route>
            </Routes>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display:flex;
  height:100vh;
`;
