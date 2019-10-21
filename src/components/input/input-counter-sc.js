import styled from 'styled-components'

// Component
import FlexBox from 'components/flex-box'

const InputCounterSC = styled(FlexBox).attrs({
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'md',
})`
  flex: 0 0 auto;
  align-self: stretch;
  background: #d4d4d4;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 12px;
`

export default InputCounterSC
