import styled from 'styled-components'

// Constants
import {zIndex} from 'constants/styles'

const ModalOverlaySC = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndex.z4};

  background-color: rgba(0, 0, 0, 0.7);

  cursor: pointer;
`

export default ModalOverlaySC
