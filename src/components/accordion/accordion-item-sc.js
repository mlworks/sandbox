import styled from 'styled-components'

// Constants
import {border} from 'constants/styles'

const AccordionItemSC = styled.div`
  & + & {
    border-top: ${border.shorthand};
  }
`

export default AccordionItemSC
