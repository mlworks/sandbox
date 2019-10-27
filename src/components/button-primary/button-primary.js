import styled from 'styled-components'

// SC
import Button from 'components/button'

// Constants
import {border, colors, neutrals} from 'constants/styles'

const ButtonPrimary = styled(Button)`
  background: ${colors.accentRed};
  border-radius: ${border.radius};
  color: ${neutrals.neutral00};

  &:active:not([disabled]),
  &:hover:not([disabled]) {
    background: ${colors.darkAccentRed};
  }

  &[disabled] {
    background: #bd9595;
    colors: #dadada;
  }
`

export default ButtonPrimary
