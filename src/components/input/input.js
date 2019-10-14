import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Input = ({maxLength, type, value, ...props}) => {
  const [count, setCount] = useState(maxLength - value.length)
  const [inputValue, setValue] = useState(value)

  return (
    <div>
      <input
        {...props}
        maxLength={maxLength}
        value={inputValue}
        type={type}
        onChange={event => {
          setCount(maxLength - event.target.value.length)
          setValue(event.target.value)
        }}
      />
      {maxLength &&
        <div>{count} characters left</div>
      }
    </div>
  )
}

Input.propTypes = {
  maxLength: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string
}

Input.defaultProps = {
  type: 'text',
  value: ''
}

export default Input
