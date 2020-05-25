import React from "react";

const Clear = ({ clearUsers, showClear }) => {
  return (
    <div>
      <input
        type={showClear ? "submit" : "hidden"}
        value="Clear"
        className="btn btn-light btn-block"
        onClick={clearUsers}
      />
    </div>
  );
};

export default Clear;
