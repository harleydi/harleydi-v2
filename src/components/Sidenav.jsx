import React from 'react';
import '../styles/sidenav.scss';
import Css from '../assets/images/css-3.png';
import Twitter from '../assets/images/twitter.png';
import LinkedIn from '../assets/images/linkedin-logo.png';
import Github from '../assets/images/github.png';
import Sass from '../assets/images/sass.png';

export default function Sidenav() {
  return (
    <div className='sidemain'>
      <div className="sidenav">
        <a href="https://twitter.com/bx_giannis">
          <div className='side-hover'>
            {/* <img src={Twitter} alt='Twitter icon'/> */}
            <i class="fa-brands fa-twitter"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/disney-harley-a430a4137/">
          {/* <img src={LinkedIn} alt='LinkedIn icon' /> */}
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/harleydi">
          {/* <img src={Github} alt='Github Icon' /> */}
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  )
}

