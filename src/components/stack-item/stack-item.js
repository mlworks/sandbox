import styled from 'styled-components'

// Constants
import {spacing} from 'constants/styles'

const StackItem = styled.div`
  & + & {
    margin-top: ${spacing.xlg};
  }
`

export default StackItem
