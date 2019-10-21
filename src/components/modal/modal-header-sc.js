import styled from 'styled-components'

// Constants
import {border, fontSizes, layout, neutrals} from 'constants/styles'

const ModalHeaderSC = styled.header`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  min-height: ${layout.headerHeight};
  border-bottom: ${border.shorthand};
  background: ${neutrals.neutral40};
  color: ${neutrals.neutral00};

  h2 {
    font-size: ${fontSizes.bigger};
  }
`

export default ModalHeaderSC
