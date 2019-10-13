import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Input = ({id, maxlength, type, value}) => {
  const [count, setCount] = useState(maxlength - value.length)
  const [inputValue, setValue] = useState(value)

  return (
    <div>
      <input
        id={id}
        maxLength={maxlength}
        value={inputValue}
        type={type}
        onChange={event => {
          setCount(maxlength - event.target.value.length)
          setValue(event.target.value)
        }}
      />
      {maxlength &&
        <div>{count} characters left</div>
      }
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  maxlength: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string
}

Input.defaultProps = {
  type: 'text',
  value: ''
}

export default Input
