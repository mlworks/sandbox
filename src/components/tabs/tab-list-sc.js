import styled from 'styled-components'

// Constants
import {border} from 'constants/styles'

const TabListSC = styled.div.attrs({
  role: 'tablist',
})`
  border-bottom: ${border.shorthand};
`

export default TabListSC
