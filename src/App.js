import React, { Component } from "react"; // using destructuring
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

class App extends Component {
  state = {
    users: [],
    loading: false,
    showClear: false,
    alert: null,
    user: {},
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  // this is a lifecycle method, fires when component loads
  componentDidMount() {
    this.setState({ loading: true });

    fetch(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ) // must use backticks if we wish to place variable in string
      .then((res) => res.json())
      .then((data) =>
        this.setState({ users: data, loading: false, showClear: true })
      );
  }

  searchUsers = (text) => {
    this.setState({ loading: true });
    fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ) // must use backticks if we wish to place variable in string
      .then((res) => res.json())
      .then((data) =>
        this.setState({ users: data.items, loading: false, showClear: true })
      );
  };

  // Get single Github User:
  getUser = (userName) => {
    this.setState({ loading: true });
    fetch(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ) // must use backticks if we wish to place variable in string
      .then((res) => res.json())
      .then((data) => {
        this.setState({ user: data, loading: false, showClear: true });
      });
  };

  clearUsers = () => {
    this.setState({ users: [], showClear: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  // If you were to declare a function up here, you would need to reference it with 'this'
  render() {
    // Everything in this return is JSX, we use className in JSX, JSX must have 1 parent element
    // This is also where we write out JS
    // To reference the variables or the JS we use {}
    // If we are not using an else case in the ternary operator, we can just && as if it is false, will not render the next piece

    return (
      <Router>
        <div>
          <Navbar title="Github Finder" icon="fab fa-github" />
          {/* We pass props into the components so the components can use them, these props overwrite default props */}
          <div className="container">
            <Alert alert={this.state.alert} />

            <Switch>
              <Route
                exact
                path="/"
                render={(
                  props // instead of using a component for the route you can use render and then pass in multi components
                ) => (
                  <div>
                    <Search
                      searchUsers={this.searchUsers}
                      setAlert={this.setAlert}
                    />
                    <Clear
                      clearUsers={this.clearUsers}
                      showClear={this.state.showClear}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
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
                    getUser={this.getUser}
                    user={this.state.user}
                    loading={this.state.loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
