import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Home/Home.jsx'
import Login from '../Login/Login.jsx'
import About from '../About/About.jsx'

class Header extends React.Component{
    render(){
        return(
          <div className="Header">
            <Router>
              <div className="topnav">
                <Link className="active" to="/">Home</Link>
                <Link to="/Login">Login</Link>
                <Link to="/About">About</Link>
              </div> 
              <div className="content">
                <Switch>
                  <Route exact path="/">
                    <Home/>
                  </Route>
                  <Route exact path="/Login">
                    <Login/>
                  </Route>
                  <Route exact path="/About">
                    <About/>
                  </Route>
                </Switch>
              </div>
            </Router>
          </div>
            )
    }
}

export default Header;