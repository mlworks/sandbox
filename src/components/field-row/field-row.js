import styled from 'styled-components'

// Component
import FlexBox from 'components/flex-box'

// Constants
import {spacing} from 'constants/styles'

const FieldRow = styled(FlexBox)`
  & + & {
    margin-top: ${spacing.lg};
  }
`

export default FieldRow

