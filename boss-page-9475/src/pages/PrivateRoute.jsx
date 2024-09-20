import React from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { auth } = React.useContext(AuthContext);

  if (auth === false) {
    alert("Login to continue");
    return <Navigate to="/" /> ;
  }
  return children;
}

export default PrivateRoute;
