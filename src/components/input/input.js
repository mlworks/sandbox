import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

// Components
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'

// SC
import InputSC from './input-sc'
import InputCounterSC from './input-counter-sc'

const Input = ({maxLength, type, value, onChange, ...props}) => {
  const [count, setCount] = useState(maxLength - value.length)

  useEffect(() => {
    setCount(value.length)
  }, [maxLength, value])

  return (
    <FlexBox>
      <FlexItem>
        <InputSC
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
      </FlexItem>
      {maxLength && (
        <InputCounterSC
          id="char-limit"
          aria-label={`${maxLength - count} characters remaining`}
        >
          {count}/{maxLength}
        </InputCounterSC>
      )}
    </FlexBox>
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
