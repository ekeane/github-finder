import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  // auto will split left and right eqaully for the object, centering the object
  // display inline is horizontal and display block is vertical
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      ></img>
    </div>
  );
};
export default Spinner;
