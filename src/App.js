import React, { Component } from "react"; // using destructuring
import "./App.css";
import Navbar from "./components/layout/Navbar.js"; // we can use the extention .js or not
import UserItem from "./components/users/UserItem";

class App extends Component {
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
        <UserItem />
      </div>
    );
  }
}

export default App;
