import styled from 'styled-components'

// Constants
import {border, neutrals} from 'constants/styles'

const AccordionSC = styled.div`
  overflow: hidden;
  border-radius: ${border.radius};
  background: ${neutrals.neutral00};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`

export default AccordionSC
