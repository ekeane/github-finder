import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  // const { icon, title } = props; another way to destructure
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i style={{ margin: "10px" }} className={icon}></i>
        {title}
      </h1>
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
