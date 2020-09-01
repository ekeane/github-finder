import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

// This Github state includes all of our actions
const AlertState = (props) => {
  const initialState = null; // Since there is only one piece of state

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        type,
      },
    });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 3000);
  };

  return (
    // You have to wrap the whole application with the provider so the whole app has access
    <AlertContext.Provider
      // Everything in value is what we want available to the entire app
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
