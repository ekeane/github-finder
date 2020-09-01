import React, { Fragment, useState } from "react";
import Search from "../users/Search";
import Users from "../users/Users";
import Clear from "../users/Clear";

const Home = () => {
  const [showClear, setShowClear] = useState(false);

  return (
    <Fragment>
      <Search />
      <Clear showClear={showClear} />
      <Users />
    </Fragment>
  );
};

export default Home;
