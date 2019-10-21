import styled from 'styled-components'

// Constants
import {border, layout, neutrals, spacing} from 'constants/styles'

const ButtonSC = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  display: ${({fullWidth}) => (fullWidth ? 'flex' : 'inline-flex')};
  padding: ${spacing.md} ${spacing.lg};
  min-height: ${layout.tapSize};
  border: 0;
  border-radius: ${border.radius};

  background: none;
  outline: none;
  color: inherit;
  cursor: pointer;

  transition: 0.2s ease-out background;
  -webkit-appearance: none;

  &:active,
  &:focus {
    background: rgba(0, 0, 0, 0.1);
  }

  &[disabled] {
    background: ${neutrals.neutral20};
    color: ${neutrals.neutral30};
    cursor: not-allowed;
  }
`
export default ButtonSC
