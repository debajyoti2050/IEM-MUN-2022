import React from 'react';
import './signup.css'
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}><h5>{label}</h5></label>
      <input
        className={`form-control  ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off" placeholder={placeholder}
      />
      <span><ErrorMessage component="div" name={field.name} className="error" /></span>
    </div>
  )
}