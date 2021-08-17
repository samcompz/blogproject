import React from "react";

import { BrowserRouter as Router, Link } from 'react-router-dom';


import vanillaLogo from '../../images/vanillajs.jpeg';
import vueLogo from '../../images/vuelogo.svg';
import reactLogo from '../../images/reactjs.png';
import flutterLogo from '../../images/flutter.png';

//import './App.css';


function Posts() {

  return(
      <div>
            {/* heading of the blog == latest posts */}
            <div className="heading">
              <h3 className="title">Latest Posts</h3>
            </div>
        
          <div className="main">  {/* start main*/}
            <div className="container">   {/* start container wrapper*/}
              
              <div className="cat-card-b"> {/* First : Vanilla Javascript */}
                <div className="cat-card-body">
                    <h2 className="cat-card-title">Vanila Js</h2>
                  </div>

                  <div className="cat-card-top-b">
                  <img src={vanillaLogo} alt="Pic" />
                  </div>
                  <div className="cat-card-body">
                    <p className="cat-card-desc"><span class="post-span">Updated: 24th June 2021</span>  | <span class="post-span">Comments</span>   |  <span class="post-span">Category: Javascript</span></p>
                    <p className="cat-card-desc-main">
                      Vanilla JS is a fast, lightweight, cross-platform framework for building incredible, powerful JavaScript applications.
                    </p>
                    <Link to={'/vanilla-page'} class="post-link">Read the full story</Link>
                  </div>
              </div>

              <div className="cat-card-b">  {/* start second blog topic : React Js  */}
                <div className="cat-card-body">
                    <h2 className="cat-card-title">REACT</h2>
                </div>

                <div className="cat-card-top-b">
                  <img src={reactLogo} alt="Pic" /> {/*image */}
                </div>
                <div className="cat-card-body">
                  <p className="cat-card-desc"><span class="post-span">Updated: 24th June 2021</span>  | <span class="post-span">Comments</span>   |  <span class="post-span">Category: Javascript</span></p>
                    <p className="cat-card-desc-main">
                        React is a JavaScript library for building user interfaces. 
                        Learn what React is all about on our homepage or in the tutorial.
                    </p>
                    <Link to={'/react-page'} class="post-link">Read the full story</Link>
                </div>
              </div> {/*end second blog topic : React Js*/}

              <div className="cat-card-b"> {/* start Third blog topic : FLUTTER */}
                <div className="cat-card-body">
                  <h2 className="cat-card-title">FLUTTER</h2>
                </div>

                <div className="cat-card-top-b">
                <img src={flutterLogo} alt="Pic" />
                </div>
                <div className="cat-card-body">
                <p className="cat-card-desc"><span class="post-span">Updated: 24th June 2021</span>  | <span class="post-span">Comments</span>   |  <span class="post-span">Category: Javascript</span></p>
                  <p className="cat-card-desc-main">
                    Flutter is Google's UI toolkit for building beautiful, 
                    natively compiled applications for mobile, web, desktop, 
                    and embedded devices from a single codebase.
                  </p>
                  <Link to={'/flutter-page'} class="post-link">Read the full story</Link>
                </div>
              </div> {/* end Third blog topic : FLUTTER */}

              
              <div className="cat-card-b"> {/* Fourth blog topic : Vue Js  */}
                <div className="cat-card-body">
                  <h2 className="cat-card-title">VUE JS</h2>
                </div>

                <div className="cat-card-top-b">
                <img src={vueLogo} alt="Pic" />
                </div>
                <div className="cat-card-body">
                <p className="cat-card-desc"><span class="post-span">Updated: 24th June 2021</span>  | <span class="post-span">Comments</span>   |  <span class="post-span">Category: Javascript</span></p>
                  <p className="cat-card-desc-main">
                    Vue (pronounced /vjuː/, like view) is a progressive framework for building 
                    user interfaces. Unlike ....
                  </p>
                  <Link to={'/vue-page'} class="post-link">Read the full story</Link>
                </div>
              </div> {/* end Fourth blog topic : Vue Js  */}

          </div> {/* end container wrapper*/}
        </div> {/* end  main*/}
      </div>

  );
}


export default Posts;