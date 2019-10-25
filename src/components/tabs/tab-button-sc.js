import styled from 'styled-components'

// Component
import Button from 'components/button'

// Constants
import {colors} from 'constants/styles'

const TabButtonSC = styled(Button)`
  position: relative;

  font-weight: ${props => (props['aria-selected'] ? 'bold' : 'normal')};

  &:hover {
    background: none;

    &::after {
      transform: scale(1);
    }
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    height: 2px;
    background: ${colors.accentRed};
    transform: scale(${props => (props['aria-selected'] ? 1 : 0)});
    transform-origin: bottom center;
    transition: 0.1s cubic-bezier(0.25, 0.7, 0.01, 0.8) transform;
  }
`

export default TabButtonSC
