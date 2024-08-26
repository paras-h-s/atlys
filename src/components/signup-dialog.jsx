import React, { useState } from 'react';

import FormInputLabel from '../common/form-input-label';
import Button from '../common/button';
import PasswordInput from '../common/password-input';

import crossButton from '../static/white-cross-black-bg.svg';
import '../styles/login-dialog.css';

const SignupDialog = ({onClose, onShowLoginDialog}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleContinue = () => {
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }


  return (
    <div className="login-wrapper">
      {onClose && <img 
        src={crossButton} 
        alt="cross button" 
        className="cross-button"
        onClick={onClose} />}
      <div className="subheading_14px_500">SIGN UP</div>
      <div className="heading_18px_600" style={{marginTop: "10px"}}>Create an account to continue</div>
      <div className="login-container">
        <FormInputLabel
          label="Email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <FormInputLabel
          label="Username"
          type="text"
          placeholder="Choose a preferred username"
          value={username}
          onChange={handleUsernameChange}
        />
        <PasswordInput 
          value={password} 
          handlePasswordChange={handlePasswordChange}
          placeholder={"Choose a strong password"} />
        <Button label={"Continue"} onClick={handleContinue} />
        <div className="register-user" onClick={onShowLoginDialog}>
          <span>Already have an account?</span>
          <span 
            className="subheading_14px_500_C5C7CA"
            style={{marginLeft: "6px"}}>
            Login →
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupDialog;