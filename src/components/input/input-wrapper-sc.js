import styled from 'styled-components'

// Component
import FlexBox from 'components/flex-box'

// SC
import InputCounterSC from './input-counter-sc'

// Constants
import {border, neutrals} from 'constants/styles'

const InputWrapperSC = styled(FlexBox)`
  &:focus-within {
    ${InputCounterSC} {
      background: ${border.focusColor};
      color: ${neutrals.neutral00};
    }
  }
`

export default InputWrapperSC
