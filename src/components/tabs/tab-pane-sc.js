import styled from 'styled-components'

// Component
import Spacing from 'components/spacing'

const TabPaneSC = styled(Spacing).attrs(({isActive, labelledBy}) => ({
  role: 'tabpanel',
  tabIndex: 0,
  'aria-labelledby': labelledBy,
  hidden: !isActive,
}))``

export default TabPaneSC
