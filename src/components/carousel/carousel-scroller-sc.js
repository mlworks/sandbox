import styled from 'styled-components'

// Component
import FlexBox from 'components/flex-box'

const CarouselScrollerSC = styled(FlexBox).attrs(props => ({
  style: {
    transform: `translateX(${
      props.translateX ? `${props.translateX * -1}px` : '0'
    })`,
  },
}))`
  transition: ${props =>
    props.isDragActive
      ? 'none'
      : '0.3s cubic-bezier(0.25, 0.7, 0.01, 0.8) transform'};
`

export default CarouselScrollerSC
