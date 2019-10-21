import styled from 'styled-components'

// Component
import FlexItem from 'components/flex-item'

const FieldSC = styled(FlexItem)`
  & + & {
    margin-left: 16px;
  }
`

export default FieldSC
