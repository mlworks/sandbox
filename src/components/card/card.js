import styled from 'styled-components'

// Constants
import {border, colors, layout, neutrals, spacing} from 'constants/styles'

const Card = styled.section`
  padding: ${spacing.xlg} ${spacing.lg};
  border-left: ${layout.subUnit} solid ${colors.accentRed};
  border-radius: ${border.radius};
  background: ${neutrals.neutral00};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);

  & + & {
    margin-top: ${spacing.xlg};
  }

  h2 {
    margin-bottom: ${spacing.xlg};
    font-family: 'Roboto', sans-serif;
    text-transform: none;
  }
`

export default Card
