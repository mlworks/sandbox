import styled from 'styled-components'

// Constants
import {layout, spacing} from 'constants/styles'

const CarouselPaginationSC = styled.ol`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${spacing.md};

  li {
    flex: 0 0 auto;
    margin: 0 ${layout.subUnit};
  }
`

export default CarouselPaginationSC
