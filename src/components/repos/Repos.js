import React from "react";
import RepoItem from "./RepoItem";

export const Repos = ({ repos }) => {
  const mapRepos = (repos) => {
    return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
  };

  return <div>{mapRepos(repos)}</div>;
};

export default Repos;
