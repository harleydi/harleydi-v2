import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.scss';
import About from './About';
import Home from './Home';
import Work from './Work';

export default function Navbar() {
  const [homeActive, setHomeActive] = useState(true)
  const [workActive, setWorkActive] = useState(false)
  const [aboutActive, setAboutActive] = useState(false)
  const [resumeActive, setResumeActive] = useState(true)

  
 
  const actives = {
    home: () => setHomeActive(false),
    work: () => setWorkActive(false),
    about: () => setAboutActive(false),
    contact: () => setResumeActive(false)
  }

 

  return (
    <div className='navbar'>
      <div className="nav-content">
        <h4 className='logo'>디즈니</h4>
        <ul className='nav'>
          <Link name='name' to="/"><li id='navItem' name='Home'>Home</li></Link>
          <Link name='work' to="/work"><li id='navItem' name='Work'>Projects</li></Link>
          <Link to='/about' name='about '><li name='About' id='navItem'>About</li></Link>
          <Link name='resume' to='/resume'><li id='nav-item' name='Resume'>Resume</li></Link>
        </ul>
      </div>
    </div>
  )
}
