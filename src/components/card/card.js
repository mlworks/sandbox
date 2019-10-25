import styled from 'styled-components'

// Constants
import {border, neutrals, spacing} from 'constants/styles'

const Card = styled.section`
  overflow: hidden;
  padding: ${spacing.xlg} ${spacing.lg};
  border-radius: ${border.radius};
  background: ${neutrals.neutral00};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);

  h2 {
    margin-bottom: ${spacing.xlg};
    font-family: 'Roboto', sans-serif;
    text-transform: none;
  }
`

export default Card
