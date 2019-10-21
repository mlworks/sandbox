import styled from 'styled-components'

// Constants
import {colors} from 'constants/styles'

const InputSC = styled.input`
  &:focus {
    border-bottom-color: ${colors.accentRed};
  }

  ${({maxLength}) =>
    !!maxLength &&
    `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}
`

export default InputSC
