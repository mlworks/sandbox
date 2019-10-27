import styled from 'styled-components'

// SC
import ButtonBase from 'components/button-base'

// Constants
import {neutrals, spacing} from 'constants/styles'

const ButtonRaised = styled(ButtonBase)`
  display: flex;
  justify-content: center;
  padding: ${spacing.md};
  border-radius: 50%;
  background: ${neutrals.neutral00};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);

  &:active:not([disabled]),
  &:hover:not([disabled]) {
    background: ${neutrals.neutral20};
  }

  &[disabled] {
    background: ${neutrals.neutral10};
    color: ${neutrals.neutral20};
  }
`

export default ButtonRaised
