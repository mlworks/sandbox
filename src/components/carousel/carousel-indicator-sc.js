import styled from 'styled-components'

// Component
import ButtonBase from 'components/button-base'

// Constants
import {neutrals, unit} from 'constants/styles'

const CarouselIndicatorSC = styled(ButtonBase)`
  display: block;
  width: ${unit * 1.5}px;
  height: ${unit * 1.5}px;
  background: ${props =>
    props['aria-selected'] ? neutrals.neutral40 : neutrals.neutral20};
  border-radius: 50%;

  transition: 0.2s ease-out background-color;
`

export default CarouselIndicatorSC
