import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((
          user // although this is JS within the {}, we still need to use () when returning some JSX
        ) => (
          <UserItem key={user.id} user={user} /> // pass a key to each list item so there is no unique key prop error
          // Passing in all the needed data as a prop
        ))}
      </div>
    );
  }
};

// Prop types:
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

// We can add styling
const userStyle = {
  // we apply this to the whole users component as we are trying to fit in 3 userItems per row in users
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
