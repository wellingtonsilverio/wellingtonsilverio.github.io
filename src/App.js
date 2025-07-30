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
import Chat from './pages/Chat';


function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/experiences" element={<Experiences />} />
              <Route exact path="/academics" element={<Academics />} />
              <Route exact path="/hobbies" element={<Hobbies />} />
              <Route exact path="/budget" element={<Budget />} />
              <Route exact path="/faq" element={<FAQ />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/chat" element={<Chat />} />
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
