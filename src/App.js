import React, { Component } from "react"; // using destructuring
import "./App.css";
import Navbar from "./components/layout/Navbar.js"; // we can use the extention .js or not
import Users from "./components/users/Users";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  // this is a lifecycle method, fires when component loads
  componentDidMount() {
    this.setState({ loading: true });

    fetch(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ) // must use backticks if we wish to place variable in string
      .then((res) => res.json())
      .then((data) => this.setState({ users: data, loading: false }));
  }

  // If you were to declare a function up here, you would need to reference it with 'this'
  render() {
    // Everything in this return is JSX, we use className in JSX, JSX must have 1 parent element
    // This is also where we write out JS
    // To reference the variables or the JS we use {}
    // If we are not using an else case in the ternary operator, we can just && as if it is false, will not render the next piece

    return (
      <div>
        <Navbar title="Github Finder" icon="fab fa-github" />
        {/* We pass props into the components so the components can use them, these props overwrite default props */}
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
          {/* {this.state.users} */}
        </div>
      </div>
    );
  }
}

export default App;
