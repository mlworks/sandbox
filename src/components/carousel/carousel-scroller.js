import styled from 'styled-components'

// Component
import FlexBox from 'components/flex-box'

const CarouselScroller = styled(FlexBox)`
  transform: translateX(
    ${props => (props.translateX ? `-${props.translateX}px` : '0')}
  );
  transition: 0.3s cubic-bezier(0.25, 0.7, 0.01, 0.8) transform;
`

export default CarouselScroller
