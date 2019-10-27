import styled from 'styled-components'

// Component
import ButtonBase from 'components/button-base'

// Constants
import {layout, neutrals, spacing} from 'constants/styles'

const ButtonSC = styled(ButtonBase)`
  display: ${({fullWidth}) => (fullWidth ? 'flex' : 'inline-flex')};
  width: ${({fullWidth}) => (fullWidth ? '100%' : 'auto')};
  padding: ${spacing.md} ${spacing.lg};
  min-height: ${layout.tapSize};

  font-weight: 500;

  transition: 0.2s ease-out background;
  -webkit-appearance: none;

  &:active:not([disabled]),
  &:hover:not([disabled]) {
    background: rgba(0, 0, 0, 0.1);
  }

  &[disabled] {
    color: ${neutrals.neutral30};
    cursor: not-allowed;
  }
`
export default ButtonSC
