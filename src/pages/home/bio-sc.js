import styled from 'styled-components'

// Constants
import {colors, spacing} from 'constants/styles'

const BioSC = styled.div`
  img {
    float: right;
    margin-bottom: ${spacing.md};
    margin-left: ${spacing.md};
    max-width: 150px;
    border-radius: 50%;
  }

  a {
    color: ${colors.accentRed};
    text-decoration: none;
  }

  i {
    margin-right: ${spacing.sm};
    vertical-align: middle;
  }
`

export default BioSC
