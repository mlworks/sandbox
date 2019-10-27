import styled from 'styled-components'

// Component
import FlexBox from 'components/flex-box'

// Constants
import {zIndex} from 'constants/styles'

const CarouselControlsSC = styled(FlexBox).attrs({
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 'md',
})`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  z-index: ${zIndex.z1};

  pointer-events: none;
  transform: translateY(-50%);

  button {
    pointer-events: auto;
  }
`

export default CarouselControlsSC
