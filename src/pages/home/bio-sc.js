import styled from 'styled-components'

// Constants
import {colors, spacing} from 'constants/styles'

const BioSC = styled.div`
  h2 {
    font-family: 'Roboto', sans-serif;
    text-transform: none;
  }

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
`

export default BioSC
