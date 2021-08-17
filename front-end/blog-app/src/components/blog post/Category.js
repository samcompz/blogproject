import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';


import picOne from '../../images/picone.jpg';
import pictwo from '../../images/pictwo.jpg';
import picthree from '../../images/picthree.jpg';

import '../Home.css';

function Category() {

  return(
      <>
          {/* Top banner */}
          <div className="container-top">
              <div className="overlay"></div>
              <div className="hero">
                <h2 className="herro-text">Welcome to Our Blog.</h2>
              </div>
          </div> 

          {/* The heading */}
          <div className="heading">
            <h3 className="title">Categories</h3>
          </div>

          {/* main-body */}
          <div className="main"> {/*main wrapper*/}
            <div className="container"> {/*container wrapper*/}

              {/* javascript link*/}
              <div className="cat-card">
                <div className="cat-card-top">
                <img src={picOne} alt="Pic" />
                </div>
                <Link to={'/blog'} className="cat-name"> Vanilla </Link>
              </div>

              {/* React link */}
              <div className="cat-card">
                <div className="cat-card-top">
                <img src={pictwo} alt="Pic" />
                </div>
                <h3 class="cat-name">React</h3>
              </div>

              {/* Node link */}
              <div className="cat-card">
                <div className="cat-card-top">
                <img src={picthree} alt="Pic" />
                </div>
                <h3 class="cat-name">Node</h3>
              </div>

              {/* Vue Js link */}
              <div className="cat-card">
                <div className="cat-card-top">
                <img src={picthree} alt="Pic" />
                </div>
                <h3 class="cat-name">Vue Js</h3>
              </div>

              {/* Flutter */}
              <div className="cat-card">
                <div className="cat-card-top">
                <img src={picthree} alt="Pic" />
                </div>
                <h3 class="cat-name">Vue Js</h3>
              </div>
              
              {/* others */}
              <div className="cat-card">
                <div className="cat-card-top">
                <img src={picthree} alt="Pic" />
                </div>
                <h3 class="cat-name"> other frameworks</h3>
              </div>

            </div>
          </div>
      </>
  );
}

export default Category;