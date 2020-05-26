import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  // const { icon, title } = props; another way to destructure
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i style={{ margin: "10px" }} className={icon}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
// In functional components, we added the prop checks below the function
// We replace static to the name of the functional component
Navbar.defaultProps = {
  // these are default props, must be named defaultProps exactly to work
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
