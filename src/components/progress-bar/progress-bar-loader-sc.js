import styled from 'styled-components'

// Component
import Spacing from 'components/spacing'

// Constants
import {unit} from 'constants/styles'

const ProgressBarLoaderSC = styled(Spacing)`
  height: ${unit * 1.5}px;
  padding: 1px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.3);
`

export default ProgressBarLoaderSC
