import styled from 'styled-components'

// Component
import FlexBox from 'components/flex-box'

const CarouselScroller = styled(FlexBox)`
  transform: translateX(
    ${props => (props.translateX ? `-${props.translateX}px` : '0')}
  );
  transition: 0.2s ease-out transform;
`

export default CarouselScroller
