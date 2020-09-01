import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";
import Clear from "../users/Clear";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Clear />
      <Users />
    </Fragment>
  );
};

export default Home;
