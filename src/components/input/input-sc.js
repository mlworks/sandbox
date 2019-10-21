import styled from 'styled-components'

// Constants
import {border, colors, layout, neutrals, spacing} from 'constants/styles'

const InputSC = styled.input`
  display: block;
  width: 100%;
  padding: ${spacing.md};
  min-height: ${layout.tapSize};
  border-radius: ${border.radius};
  border: 0;
  border-bottom: 2px solid ${border.color};
  background: ${neutrals.neutral10};

  outline: 0;

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
