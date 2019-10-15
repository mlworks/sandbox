import styled from 'styled-components'

// Component
import Spacing from 'components/spacing'

const FlexBox = styled(Spacing)`
  display: ${({inline}) => (inline ? 'inline-flex' : 'flex')};
  align-items: ${({alignItems}) => alignItems || 'initial'};
  flex-direction: ${({flexDirection}) => flexDirection || 'initial'};
  justify-content: ${({justifyContent}) => justifyContent || 'initial'};
`

export default FlexBox
