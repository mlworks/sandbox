import styled from 'styled-components'

// Constants
import {border, colors, layout, neutrals, spacing} from 'constants/styles'

const Card = styled.section`
  padding: ${spacing.xlg} ${spacing.lg};
  border-left: ${layout.subUnit} solid ${colors.accentRed};
  border-radius: ${border.radius};
  background: ${neutrals.neutral00};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`

export default Card
