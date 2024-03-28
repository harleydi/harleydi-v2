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
  const [contactActive, setContactActive] = useState(true)

  
 
  const actives = {
    home: () => setHomeActive(false),
    work: () => setWorkActive(false),
    about: () => setAboutActive(false),
    contact: () => setContactActive(false)
  }

  const onClickHandler = (e) => {

    // for (const name in actives) {
    //   if (e.target.name === name) {
    //     console.log(true)
    //   } else if (name !== e.target.name) {
    //     // return actives[name]
    //   }
    // }
    const activeToggler = () => {
      
    }
    console.log(() => `set${'About'}Active(true)`)
  }

  return (
    <div className='navbar'>
      <h4 className='logo'>디즈니</h4>
      <ul className='nav'>
        <li id='navItem' name='Home' className={homeActive ? 'active-link': undefined}><Link name='name' to="/">Home</Link></li>
        <li id='navItem' name='Work' className={workActive ? 'active-link' : undefined} ><Link name='work' to="/work">Projects</Link></li>
        <li name='About' id='navItem' onClick={onClickHandler} className={aboutActive ? 'active-link' : undefined} ><Link to='/about' name='about '>About</Link></li>
        <Link name= 'contact' to='/contact'><li id='nav-item' name='Contact' className={contactActive ? 'active-link' : undefined}>Testing</li></Link>
        {/* <li id='navItem' className={contactActive && 'active-link'} ><Link to="/contact">Contact</Link></li> */}
      </ul>
    </div>
  )
}
