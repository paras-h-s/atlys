import React from "react";
import '../styles/button.css';

const Button = ({label, onClick}) => {
  return (
    <div className="button-container" onClick={onClick}>
      {label}
    </div>
  );
}

export default Button;