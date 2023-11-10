import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="outer">
        <div className="heading">
          <h2>Login</h2>
        </div>

        <div className="form">
          <div className="form-contents">
            <input placeholder="username" />
          </div>
          <div className="form-contents">
            <input placeholder="password" />
          </div>
          <div className="form-contents">
            <button>Log in</button>
          </div>
        </div>
        <div className="register">
            <label>New to QprobeZ ? : register here</label>
          </div>
      </div>
    </div>
  );
}

export default Login;
