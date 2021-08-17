import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './partials.css';



function Navbar() {

  return(
      <>
      <nav className="nav">
       
        <div className="container">
          <Link to={'/'} className="brand-name"> BlogApp </Link>
            <ul className="navbar">
              <li className="nav-li">
              <Link to={'/'} className="link"> Home </Link>
              </li>
              <li className="nav-li">
              <Link to={'/blog'} className="link"> Blog </Link>
              </li >
              <li className="nav-li">
              <Link to={'/about'} className="link"> About </Link>
              </li>
              <li className="nav-li">
              <Link to={'/login'} className="link"> Log In </Link>
              </li>
            </ul>
        </div>

        
        
      </nav>
      </>

  );
}


  export default Navbar;