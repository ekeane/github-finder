import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      // JSON object with three users
      {
        id: "1",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "2",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "3",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
    ],
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((
          user // although this is JS within the {}, we still need to use () when returning some JSX
        ) => (
          <UserItem key={user.id} user={user} /> // pass a key to each list item so there is no unique key prop error
          // Passing in all the needed data as a prop
        ))}
      </div>
    );
  }
}

// We can add styling
const userStyle = {
  // we apply this to the whole users component as we are trying to fit in 3 userItems per row in users
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
