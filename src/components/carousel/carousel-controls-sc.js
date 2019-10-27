import styled from 'styled-components'

// Component
import ButtonRaised from 'components/button-raised'
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

  ${ButtonRaised} {
    pointer-events: auto;

    &[disabled] {
      transform: scale(0);
    }
  }
`

export default CarouselControlsSC
