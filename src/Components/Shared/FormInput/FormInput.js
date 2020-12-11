import React from 'react';
import './FormInput.scss';

const FormInput = ({ name, type, label, onBlur, placeholder, value = '' }) => {
  return (
    <div className='form-input'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default FormInput;
