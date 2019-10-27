import styled from 'styled-components'

import FlexBox from 'components/flex-box'
const CarouselControlsSC = styled(FlexBox).attrs({
  alignItems: 'center',
})`
  ol {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    flex: 0 0 auto;
    margin: 0 4px;
  }
`

export default CarouselControlsSC
