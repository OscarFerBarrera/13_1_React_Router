import React from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";

const Login = (props) => {

  const authInfo = React.useContext(AuthContext);

  return (
    <div className="page">
      <h1>Login</h1>
      {
        authInfo && authInfo.user ?
          <Navigate to="/my-account" replace={true}></Navigate> :
          <button onClick={() => props.login({ user: "Oscar" })}>Log in</button>
      }
    </div>
  );
}

export default Login;
