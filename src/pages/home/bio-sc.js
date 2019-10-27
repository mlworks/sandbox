import styled from 'styled-components'

// Component
import Card from 'components/card'

// Constants
import {colors, layout, spacing} from 'constants/styles'

const BioSC = styled(Card)`
  border-left: ${layout.subUnit} solid ${colors.accentRed};

  img {
    float: right;
    margin-bottom: ${spacing.md};
    margin-left: ${spacing.md};
    max-width: 150px;
    border-radius: 50%;

    @media (max-width: 400px) {
      max-width: 100px;
    }
  }

  a {
    color: ${colors.accentRed};
    word-break: break-all;
    text-decoration: none;
  }
`

export default BioSC
