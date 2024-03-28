import React from "react";
import { Routes, Route, Outlet } from 'react-router-dom';
import './styles/index.scss';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Sidenav from './components/Sidenav'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidenav className='side' />
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
