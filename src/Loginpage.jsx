import React, { useState } from "react";
import "./Loginpage.css";
const Login = (props) => {
  const [logininfo, setlogininfo] = useState({
    user: "",
    pass: "",
  });
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setlogininfo((preval) => {
      return { ...preval, [name]: value };
    });
  };

  const loginformsubmit = (e) => {
    e.preventDefault();
    props.loginFormName(logininfo);
  };

  return (
    <>
      <div className="main-login-div">
        <div className="header">
          <h4 className="head_text">Sign Up/Log In</h4>
        </div>
        <div className="login">
          <h2 className="login_text">
            <span
              className="fa fa-user-circle"
              aria-hidden="true"
              id="icon_login"
            ></span>
            Log In
          </h2>
          <form onSubmit={loginformsubmit}>
            <label>FullName</label>
            <input
              type="text"
              onChange={InputEvent}
              value={logininfo.user}
              name="user"
              placeholder="name"
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={logininfo.pass}
              name="pass"
              onChange={InputEvent}
              placeholder="password"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        {/* <h3
          className="text-center mt-4 skip-link text-white-50"
          onClick={loginformsubmit}
        >
          <u> Skip Login</u>
        </h3> */}
      </div>
    </>
  );
};

export default Login;
