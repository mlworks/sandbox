import styled from 'styled-components'

// Constants
import {fontSizes, spacing} from 'constants/styles'

const FieldLabelSC = styled.label`
  display: block;
  padding: 0 ${spacing.md};
  margin-bottom: ${spacing.sm};
  font-size: ${fontSizes.small};
`

export default FieldLabelSC
