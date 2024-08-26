import React from "react";
import '../styles/form-input-label.css';

const FormInputLabel = ({label, type, placeholder, value, onChange}) => {
  return (
    <div className="form-input-label-container">
      <label>{label}</label>
      <input
          className="form-input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
      />
    </div>
  );
}

export default FormInputLabel;