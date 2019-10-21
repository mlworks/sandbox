import styled from 'styled-components'

// Component
import FlexItem from 'components/flex-item'

// Constants
import {spacing} from 'constants/styles'

const FieldSC = styled(FlexItem)`
  & + & {
    margin-left: ${spacing.lg};
  }
`

export default FieldSC
