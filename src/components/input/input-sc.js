import styled from 'styled-components'

// Constants
import {border, layout, neutrals, spacing} from 'constants/styles'

const InputSC = styled.input`
  display: block;
  width: 100%;
  padding: ${spacing.md};
  min-height: ${layout.tapSize};
  border-radius: ${border.radius};
  border: 1px solid ${border.color};
  background: ${neutrals.neutral10};

  outline: 0;

  &:focus {
    border-color: ${border.focusColor};
  }

  ${({maxLength}) =>
    !!maxLength &&
    `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}
`

export default InputSC
