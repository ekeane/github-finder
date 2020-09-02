import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

// This Github state includes all of our actions
const AlertState = (props) => {
  const initialState = ""; // Since there is only one piece of state

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
    <AlertContext.Provider
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
