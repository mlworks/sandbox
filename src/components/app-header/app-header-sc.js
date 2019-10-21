import styled from 'styled-components'

// Components
import Button from 'components/button'
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'

// Constants
import {border, colors, fontSizes, layout, neutrals} from 'constants/styles'

const AppHeaderSC = styled(FlexBox).attrs({
  alignItems: 'center',
})`
  min-height: ${layout.headerHeight};
  border-top: ${layout.subUnit} solid ${colors.accentRed};
  border-bottom: ${border.shorthand};
  background: ${neutrals.neutral10};

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
