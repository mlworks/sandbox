import styled from 'styled-components'

// Utils
import {marginSpacing, paddingSpacing} from 'utils/spacing'

const withSpacing = Component => styled(Component)`
  margin: ${marginSpacing};
  padding: ${paddingSpacing};
`

export default withSpacing
