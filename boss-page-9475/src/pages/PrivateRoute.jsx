import React from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { auth, setAuth, Login, Logout } = React.useContext(AuthContext);

  if (auth === false) {
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateRoute;
