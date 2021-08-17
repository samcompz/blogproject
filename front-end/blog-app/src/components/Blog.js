import react from "react";
import picOne from '../images/picone.jpg';
import pictwo from '../images/pictwo.jpg';
import picthree from '../images/picthree.jpg';

import { BrowserRouter as Router, Link } from 'react-router-dom';

function Blog () {
  return (
    <>
      <div className="blog-page">
        <div className="hero">
            <h2 className="hero-text">Read from Our stories.</h2>
        </div>
      </div> 
            
      <div className="main">      {/* main wrapper  */}
        <div className="container">      {/* container wrapper  */}
          {/* vanilla  */}
          <div className="cat-card-blog">
            <div className="cat-card-body">
                <h2 className="cat-card-title">Vanila Js tips and Tricks</h2>
            </div>

            <div className="cat-card-top-b">
              <img src={picOne} alt="Pic" />
            </div>
            <div className="cat-card-body">
              <p className="cat-card-desc">
                <span class="post-span">Updated: 24th June 2021</span>  | 
                <span class="post-span">Comments</span>   |  
                <span class="post-span">Category: Javascript</span>
              </p>
              <p className="cat-card-desc-main">
                Startup companies are a double-edged sword. All of the world’s biggest 
                mega corporations started as humble startups before cornering the market. 
                Being able to tell whether a startup will increase in value and develop into 
                something more serious is near-impossible, but you can make some fairly accurate
                assumptions... <Link to={'/post-page'} class="post-link">Read the full story</Link>
                </p>
            </div>
        </div>

        <div className="cat-card-blog">
          <div className="cat-card-body">
              <h2 className="cat-card-title">Vanila Js tips and Tricks</h2>
          </div>

          <div className="cat-card-top-b">
              <img src={picOne} alt="Pic" />
          </div>
          <div className="cat-card-body">
              <p className="cat-card-desc">
                <span class="post-span">Updated: 24th June 2021</span>  | 
                <span class="post-span">Comments</span>   |  
                <span class="post-span">Category: Javascript</span>
              </p>
              <p className="cat-card-desc-main">
                Startup companies are a double-edged sword. All of the world’s biggest 
                mega corporations started as humble startups before cornering the market. 
                Being able to tell whether a startup will increase in value and develop into 
                something more serious is near-impossible, but you can make some fairly accurate
                assumptions... <Link to={'/post-page'} class="post-link">Read the full story</Link>
              </p>
          </div>
        </div>

        <div className="cat-card-blog">
            <div className="cat-card-body">
                <h2 className="cat-card-title">Vanila Js tips and Tricks</h2>
            </div>

            <div className="cat-card-top-b">
              <img src={picOne} alt="Pic" />
            </div>
            <div className="cat-card-body">
              <p className="cat-card-desc">
                <span class="post-span">Updated: 24th June 2021</span>  | 
                <span class="post-span">Comments</span>   |  
                <span class="post-span">Category: Javascript</span>
              </p>
              <p className="cat-card-desc-main">
                Startup companies are a double-edged sword. All of the world’s biggest 
                mega corporations started as humble startups before cornering the market. 
                Being able to tell whether a startup will increase in value and develop into 
                something more serious is near-impossible, but you can make some fairly accurate
                assumptions... <Link to={'/post-page'} class="post-link">Read the full story</Link>
              </p>
            </div>
        </div>

        </div>
      </div>
    </>
  );
}

export default Blog;