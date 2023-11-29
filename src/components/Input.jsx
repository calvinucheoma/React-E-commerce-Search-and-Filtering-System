import React from 'react';

const Input = ({ handleRadioChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input
        type="radio"
        value={value}
        onChange={handleRadioChange}
        name={name}
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
