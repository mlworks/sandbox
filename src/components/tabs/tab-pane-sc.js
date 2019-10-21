import styled from 'styled-components'

// Component
import Spacing from 'components/spacing'

// Constants
import {colors} from 'constants/styles'

const TabPaneSC = styled(Spacing).attrs(props => ({
  role: 'tabpanel',
  tabIndex: 0,
  'aria-labelledby': props.labelledBy,
  hidden: !props.isActive,
}))``

export default TabPaneSC
