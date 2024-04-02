import React from "react";
import { Outlet } from 'react-router-dom';
import './styles/index.scss';
import Navbar from "./components/Navbar";
import Sidenav from './components/Sidenav'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidenav className='side' />
      <Outlet />
    </div>
  );
}

export default App;
