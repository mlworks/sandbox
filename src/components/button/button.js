import styled from 'styled-components'

// Constants
import {layout, neutrals, spacing} from 'constants/styles'

const ButtonSC = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  display: ${({fullWidth}) => (fullWidth ? 'flex' : 'inline-flex')};
  width: ${({fullWidth}) => (fullWidth ? '100%' : 'auto')};
  padding: ${spacing.md} ${spacing.lg};
  min-height: ${layout.tapSize};
  border: 0;

  background: none;

  color: inherit;
  font-weight: 500;
  cursor: pointer;

  transition: 0.2s ease-out background;
  -webkit-appearance: none;

  &:active,
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &[disabled] {
    background: ${neutrals.neutral20};
    color: ${neutrals.neutral30};
    cursor: not-allowed;
  }
`
export default ButtonSC
