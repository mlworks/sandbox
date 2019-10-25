import styled from 'styled-components'

// Components
import Button from 'components/button'
import FlexItem from 'components/flex-item'

// Constants
import {border, fontSizes, layout, neutrals} from 'constants/styles'

const AppHeaderSC = styled.header`
  display: flex;
  align-items: center;
  min-height: ${layout.headerHeight};
  border-bottom: ${border.shorthand};
  background: ${neutrals.neutral40};
  color: ${neutrals.neutral00};

  h1 {
    font-size: ${fontSizes.huge};
  }

  ${Button} {
    height: 100%;
  }

  > ${FlexItem}:first-child {
    align-self: stretch;
  }
`

export default AppHeaderSC
