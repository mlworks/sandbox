import styled from 'styled-components'

// Constants
import {border, colors} from 'constants/styles'

const ModalInnerSC = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;

  background: ${colors.bodyColor};
  border-radius: ${border.radius};
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.3);

  pointer-events: auto;
`

export default ModalInnerSC
