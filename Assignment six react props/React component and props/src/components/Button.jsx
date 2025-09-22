import PropTypes from 'prop-types'

export default function Button({ buttonText, variant = 'primary', ...restProps }) {
  const className = `btn ${variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}`

  return (
    <button className={className} {...restProps}>
      {buttonText}
    </button>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string
}


