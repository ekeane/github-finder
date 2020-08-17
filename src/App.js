import React, { useState, useEffect } from "react"; // using destructuring
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar.js"; // we can use the extention .js or not
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import PropTypes from "prop-types";
import Clear from "./components/users/Clear";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const [loading, setLoading] = useState(false);
  const [showClear, setShowClear] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
        setShowClear(true);
      });
  }, []);

  // Get single Github User:
  const getUser = (userName) => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ) // must use backticks if we wish to place variable in string
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
        setShowClear(true);
      });
  };

  // Get user repos:
  const getUserRepos = (userName) => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ) // must use backticks if we wish to place variable in string
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
        setShowClear(true);
      })
      .catch((e) => console.log(e));
  };

  const clearUsers = () => {
    setUsers([]);
    setShowClear(false);
  };

  const setAlertTimeOut = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <GithubState>
      <Router>
        <div>
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />

            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <div>
                    <Search setAlert={setAlertTimeOut} />
                    <Clear clearUsers={clearUsers} showClear={showClear} />
                    <Users loading={loading} users={users} />
                  </div>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login" // this is a slug and is a variable link
                render={(props) => (
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    loading={loading}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

App.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default App;
