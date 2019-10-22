import styled from 'styled-components'

// Components
import Button from 'components/button'
import FlexBox from 'components/flex-box'

// Constants
import {border} from 'constants/styles'

const AccordionHeaderSC = styled.h3`
  ${Button} {
    text-align: left;
  }

  ${FlexBox} {
    flex: 1 1 auto;
  }
`

export default AccordionHeaderSC
