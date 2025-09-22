import { useId } from 'react'
import PropTypes from 'prop-types'

export default function Input({ label, placeholder, ...restProps }) {
  const inputId = useId()

  return (
    <div className="input-wrapper">
      {label && <label className="input-label" htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        className="input-element"
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool
}


