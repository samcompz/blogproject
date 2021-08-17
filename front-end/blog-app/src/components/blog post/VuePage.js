import React from "react";


import vuePic from '../../images/vuelogo.svg';

function VuePage() {
    return (
        <>
        {/* Page Heading */}
         <div className="blog-page">
            <div className="overlay"></div>
            <div className="hero">
              <h2 className="hero-text">Vanila Js tips and Tricks</h2>
            </div>
          </div> 
        
        {/* body of page */}
        <div className="main"> 
            <div className="container">
              <div className="cat-card-page">
                <div className="cat-card-top-b">
                  <img src={vuePic} alt="Pic" />
                </div>
                <div className="cat-card-body">
                  <p className="cat-card-desc">
                      <span class="post-span">Updated: 14th August 2021</span>  
                      |<span class="post-span">Comments</span> 
                      |<span class="post-span">Category: Javascript</span>
                  </p>

                  <p className="cat-card-desc-main">

                      What is "Vanilla JavaScript"?
                      The term vanilla script is used to refer to the pure JavaScript (or we can say 
                      plain JavaScript) without any type of additional library. 
                      Sometimes people often used it as a joke"nowadays several 
                      things can also be done without using any additional JavaScript 
                      libraries".

                      The vanilla script is one of the lightest weight frameworks ever. 
                      It is very basic and straightforward to learn as well as to use. 
                      You can create significant and influential applications as well as 
                      websites using the vanilla script.

                      The team of developers that created the vanilla JavaScript is continuously 
                      working on it to improve it and make it more useful for the web-developers.
                    
                  </p>

                  <p>
                      Why should you learn vanilla JS?
                      This the very common question asked by the beginners that, when there are already
                      so many other powerful frameworks and libraries available, why they should choose
                      to learn vanilla Js and use it.

                      There are several reasons for choosing the vanilla js to learn and use it in 
                      our projects. Here we are discussing the following three main and most important
                      of them.

                      <li>Web-performance</li>

                      This is much better for web performance than many other frameworks and libraries, 
                      as it is the most expensive and important part of the front-end stack. Vanilla js 
                      code needs to be compiled and parsed, unlike HTML and CSS files, which are 
                      available to use only when they're downloaded. A file of js with a size of 
                      50kb has a much more significant impact on web performance than the same 
                      size of HTML and CSS files.

                      <li>  b. User Experience</li>

                      It provides an effortless but user-friendly developing experience.While 
                      developing an application or website using JavaScript, a developer just needs
                      to open the text editor and can begin coding. There is no need for the 
                      developer to perform troublesome steps like npm install, compilation steps, 
                      and no build, etc.

                      <li>   c. It makes working with frameworks easier as well</li>

                      In case, if any developer still wants to use any of the other frameworks, 
                      it makes working with them more comfortable as well. As we all aware of how 
                      hard it is to get started with a framework.

                      There's a lot of assumed knowledge in the documentation, and understanding 
                      how all available tools works makes it quite easier to learn. A lot of beginners
                      having little knowledge try to learn a framework, no wonders they get stuck 
                      somewhere after some time they quit focusing on the fundamentals of the 
                      Vanilla js. When they get comfortable, they again start learning frameworks, 
                      and this time they get things much quicker.

                      <h3>Some other important advantages of the vanilla script are as follows:</h3>

                      <li> Interoperability:-</li>
                     
                      We can insert the JavaScript in any of the web-pages, but in another 
                      scripting language, we cannot do so. For example PHP

                      We can also use it in several different applications because it supports 
                      other languages such as PHP and Pearl etc.

                      <li>Server Load:-</li>
                      Since we all know that the execution of the JavaScript is done on the 
                      client-sideso it reduces the overall demand for server use. Also, 
                      the simple application doesn't require the involvement of the server at all.

                      <li>Rich interfaces:-</li>
                      With the help of JavaScript, we can create an excellent quality of 
                      features such as drag &drop, and components like a slider. This can impact 
                      the user experience on the website in a positive way.

                      <li>Speed:-</li>
                      Since its execution occurs on the client-side, it does not require any kind of 
                      external resources, its speed is excellent. The speed of JavaScript also does not
                      get affected by the calls to a back-end server.

                      <h3>Disadvantages of the Vanilla Script</h3>
                      One of the most significant disadvantages of the vanilla script is client-side 
                      security since we all know that the code of JavaScript is viewable at the 
                      client-side. Hence, anyone can modify it and use it as a weapon or tool for 
                      malicious purposes.
                      
                      Another major disadvantage of JavaScript isthat it lacks Debugging Facility.
                      We cannot use it for network-based applications because there is no such kind 
                      of support available.
                      The vanilla script also does not have some capabilities such as multiprocessors, 
                      and multithreading, etc.
                      It also does not allow reading and writing filesfor security reasons.

                  </p>
                </div>
              </div>

            </div> {/*end containre*/}
          </div>  {/*end main*/}
        </>
    );
}

export default VuePage;