import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Clear = ({ clearUsers }) => {
  const githubContext = useContext(GithubContext);

  return (
    <div>
      <input
        type={githubContext.users.length > 0 ? "submit" : "hidden"}
        value="Clear"
        className="btn btn-light btn-block"
        onClick={githubContext.clearUsers}
      />
    </div>
  );
};

export default Clear;
