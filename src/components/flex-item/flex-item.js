import styled from 'styled-components'

// Component
import Spacing from 'components/spacing'

const FlexItem = styled(Spacing)`
  flex: ${({flex}) => flex || '1 1 auto'};
  min-width: 0;
`

export default FlexItem
