import styled from 'styled-components'

// Component
import FlexBox from 'components/flex-box'

// Constants
import {border, fontSizes, neutrals} from 'constants/styles'

const InputCounterSC = styled(FlexBox).attrs({
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'md',
})`
  flex: 0 0 auto;
  align-self: stretch;
  background: ${neutrals.neutral30};
  border-top-right-radius: ${border.radius};
  border-bottom-right-radius: ${border.radius};
  font-size: ${fontSizes.small};
`

export default InputCounterSC
