import styled from 'styled-components'

// Component
import ButtonBase from 'components/button-base'

// Constants
import {neutrals, unit} from 'constants/styles'

const CarouselIndicatorSC = styled(ButtonBase)`
  display: block;
  width: ${unit * 1.5}px;
  height: ${unit * 1.5}px;
  background: ${neutrals.neutral40};
  border-radius: 50%;
  opacity: ${props => (props['aria-selected'] ? 1 : 0.3)};
`

export default CarouselIndicatorSC
