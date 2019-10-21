import styled from 'styled-components'

import FlexBox from 'components/flex-box'

const FieldRow = styled(FlexBox)`
  & + & {
    margin-top: 16px;
  }
`

export default FieldRow

