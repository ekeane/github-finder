import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
// This Github state includes all of our actions
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = (text) => {
    setLoading();
    fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    ) // must use backticks if we wish to place variable in string
      .then((res) => res.json())
      .then((data) => {
        // setUsers(data.items);
        // setLoading(false);
        // setShowClear(true);
        setShowClear();
        dispatch({
          type: SEARCH_USERS,
          payload: data.items,
        });
      });
  };

  // All of these below are then sent to the Reducer upon dispatch:

  // Get User: Get single Github User:
  const getUser = (userName) => {
    setLoading();
    fetch(
      `https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    ) // must use backticks if we wish to place variable in string
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_USER,
          payload: data,
        });
      });
  };

  // Get user repos:
  const getUserRepos = (userName) => {
    setLoading();
    fetch(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    ) // must use backticks if we wish to place variable in string
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_REPOS,
          payload: data,
        });
      })
      .catch((e) => console.log(e));
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Set show clear
  const setShowClear = () => dispatch({ type: CLEAR_USERS });

  return (
    // You have to wrap the whole application with the provider so the whole app has access
    <GithubContext.Provider
      // Everything in value is what we want available to the entire app
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading, // The data sources and associated functions
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
