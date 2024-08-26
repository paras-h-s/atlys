import React from "react";

import LoginDialog from "./login-dialog";

import logo from '../static/logo.svg';
import '../styles/signin-page.css';

const SigninPage = ({onLogin}) => {
  return (
    <div className="signin-page">
      <img className="logo" src={logo} alt="logo" />
      <LoginDialog onLogin={onLogin} />
    </div>
  );
}

export default SigninPage;