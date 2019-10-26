import styled from 'styled-components'

import FlexBox from 'components/flex-box'
const CarouselControlsSC = styled(FlexBox)`
  ol {
    display: flex;
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
