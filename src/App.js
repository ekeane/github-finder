import React from "react"; // using destructuring
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar.js"; // we can use the extention .js or not
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import Home from "./components/pages/Home";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar title="Github Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login" // this is a slug and is a variable link
                  component={User}
                />
                <Route
                  component={NotFound} // put this as the last component as if the router doesn't find a match it will go here
                />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

App.propTypes = {};

export default App;
