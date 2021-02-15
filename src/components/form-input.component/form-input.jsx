import React from 'react'
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} />
      {
        label ? (
          <lable className={`${
            otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
            >
          {label}
        </lable>
        ) : null
        }
    </div>
  )
}

export default FormInput
