import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // we can destructure the props right in the function params or have const {login, avatar_url, html_url} = props.user
  // in functional components we pass props through the function params
  // constructor is used when component is loaded, we don't typically use constructors

  // Since were not using class, we don't use this
  // Destructing, it's pulling these out of this.props which is coming from a prop from the users state in that component
  return (
    <div className="card text-center">
      <img
        className="round-img"
        src={avatar_url}
        alt=""
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
