import React, { Fragment } from 'react'
import './FormInput.scss'

const FormInput = ({ label, onChange, value, type, className }) => {
  return (
    <Fragment>
      <div className={`${className ?? 'w_100'}`}>
        <p className={`form_label`}>{label}</p>
        <input
          onChange={onChange}
          type={type ?? 'text'}
          value={value}
          className={`form_input`}
        />
      </div>
    </Fragment>
  )
}

export default FormInput
