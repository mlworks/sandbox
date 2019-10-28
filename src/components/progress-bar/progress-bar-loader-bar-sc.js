import styled from 'styled-components'

// Constants
import {neutrals} from 'constants/styles'

const ProgressBarLoaderBarSC = styled.div.attrs(props => ({
  style: {
    transform: `scaleX(${props.currentValue / 100 || 0})`,
  },
}))`
  position: relative;

  height: 100%;
  background: ${neutrals.neutral10};

  transform-origin: top left;
  transform: scaleX(0);
  transition: 0.3s cubic-bezier(0.25, 0.7, 0.01, 0.8) transform;
`

export default ProgressBarLoaderBarSC
