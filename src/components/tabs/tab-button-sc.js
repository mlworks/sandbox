import styled from 'styled-components'

// Component
import Button from 'components/button'

// Constants
import {colors} from 'constants/styles'

const TabButtonSC = styled(Button)`
  border-bottom: 2px solid
    ${props => (props['aria-selected'] ? colors.accentRed : 'transparent')};
  font-weight: ${props => (props['aria-selected'] ? 'bold' : 'normal')};
`

export default TabButtonSC
