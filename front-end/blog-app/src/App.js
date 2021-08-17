import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/partials/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import VanillaPage from "./components/blog post/VanillaPage";
import ReactPage from "./components/blog post/ReactPage";
import VuePage from "./components/blog post/VuePage";
import FlutterPage from "./components/blog post/FlutterPage";
import LogIn from "./components/auth/LogIn";
import Register from "./components/auth/Register";

import './App.css';

function App() {

  return(
      <div>
        <Router>
          <Navbar />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/blog' component={Blog} />
              <Route path='/about' component={About} />
              <Route path='/vanilla-page' component={VanillaPage} />
              <Route path='/react-page' component={ReactPage} />
              <Route path='/vue-page' component={VuePage} />
              <Route path='/flutter-page' component={FlutterPage} />
              <Route path='/login' component={LogIn} />
              <Route path='/register' component={Register} />
          </Switch>
        </Router>
      </div>

  );
}


export default App;