import styled from 'styled-components'

// Constants
import {fontSizes, spacing} from 'constants/styles'

const FieldLabelSC = styled.label`
  display: inline-block;
  padding-left: ${spacing.md};
  margin-bottom: ${spacing.sm};
  font-size: ${fontSizes.small};
`

export default FieldLabelSC
