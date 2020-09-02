import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

export const Alert = () => {
  // Set context
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  return (
    <div>
      {alert !== null && (
        <div className={`alert alert-${alert.type}`}>
          <i className="fas fa-info-circle"></i> {alert.msg}
        </div>
      )}
    </div>
  );
};
export default Alert;
