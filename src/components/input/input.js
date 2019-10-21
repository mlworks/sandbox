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
  const charCountLeft = maxLength - count

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
            onChange(event)
          }}
        />
      </FlexItem>
      {maxLength && (
        <InputCounterSC
          id="char-limit"
          aria-label={`${charCountLeft} characters remaining`}
          title={`${charCountLeft} characters remaining`}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
}

export default Input
