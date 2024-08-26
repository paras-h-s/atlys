import React, { useState } from 'react';

import FormInputLabel from '../common/form-input-label';
import Button from '../common/button';
import PasswordInput from '../common/password-input';

import crossButton from '../static/white-cross-black-bg.svg';
import '../styles/login-dialog.css';
import '../styles/heading-styles.css';

const LoginDialog = ({onClose, onShowSignupDialog, onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <div className="login-wrapper">
      {onClose && <img 
        src={crossButton} 
        alt="cross button" 
        className="cross-button"
        onClick={onClose} />}
      <div className="subheading_14px_500">WELCOME BACK</div>
      <div className="heading_18px_600" style={{marginTop: "10px"}}>Log into your account</div>
      <div className="login-container">
        <FormInputLabel
          label="Email or Username"
          type="text"
          placeholder="Enter your email or username"
          value={email}
          onChange={handleEmailChange}
        />
        <PasswordInput 
          value={password} 
          handlePasswordChange={handlePasswordChange}
          onForgotPassword={() => console.log('Forgot password clicked')}
          placeholder={"Enter your password"} />
        <Button label={"Login now"} onClick={handleLogin} />
        <div className="register-user" onClick={onShowSignupDialog}>
          <span>Not registered yet?</span>
          <span 
            className="subheading_14px_500_C5C7CA"
            style={{marginLeft: "6px"}}>
            Register →
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;