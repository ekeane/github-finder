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
    setLoading(true);
    fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ) // must use backticks if we wish to place variable in string
      .then((res) => res.json())
      .then((data) => {
        // setUsers(data.items);
        // setLoading(false);
        // setShowClear(true);
        setShowClear(true);
        dispatch({
          type: SEARCH_USERS,
          payload: data.items,
        });
      });
  };

  // Get User

  // Get Repos

  // Clear Users

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
        loading: state.loading,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
