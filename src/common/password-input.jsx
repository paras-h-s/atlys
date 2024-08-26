import React, {useState} from "react";

import '../styles/password-input.css';
import eyeIcon from '../static/eye.svg';

const PasswordInput = ({value, handlePasswordChange, placeholder, onForgotPassword}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDown = () => {
    setShowPassword(true);
  }

  const handleMouseUp = () => {
    setShowPassword(false);
  }

  return (
    <div className="password-input-container">
      <label>
        <span className="password-label">Password</span>
        {onForgotPassword && 
          <span className="forgot-password">
            Forgot Password?
          </span> 
        }
      </label>
      <div className="password-wrapper">
        <input
          className="password-input"
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={handlePasswordChange}
        />
        <img
          className="peek-password"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          src={eyeIcon}
          alt="peek password"
        />
      </div>
    </div>
  );
}

export default PasswordInput;