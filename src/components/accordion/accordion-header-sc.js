import styled from 'styled-components'

// Components
import Button from 'components/button'
import FlexBox from 'components/flex-box'

// Constants
import {fontSizes} from 'constants/styles'

const AccordionHeaderSC = styled.h3`
  font-family: 'Roboto', san-serif;
  font-size: ${fontSizes.big};

  ${Button} {
    text-align: left;
  }

  ${FlexBox} {
    flex: 1 1 auto;
  }
`

export default AccordionHeaderSC
