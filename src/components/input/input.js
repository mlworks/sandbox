import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const Input = ({maxLength, type, value, onChange, ...props}) => {
  const [count, setCount] = useState(maxLength - value.length)

  useEffect(() => {
    setCount(value.length)
  }, [maxLength, value])

  return (
    <React.Fragment>
      <input
        {...props}
        aria-describedby={maxLength && 'char-limit'}
        maxLength={maxLength}
        value={value}
        type={type}
        onChange={event => {
          setCount(event.target.value.length)
          onChange(event.target.value)
        }}
      />
      {maxLength && (
        <span
          id="char-limit"
          aria-label={`${maxLength - count} characters remaining`}
        >
          {count}/{maxLength}
        </span>
      )}
    </React.Fragment>
  )
}

Input.propTypes = {
  maxLength: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
}

export default Input
