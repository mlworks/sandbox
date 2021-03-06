import styled from 'styled-components'

// Component
import FlexBox from 'components/flex-box'

// Constants
import {zIndex} from 'constants/styles'

const justifyMap = {
  'slide-top': 'center',
  'slide-left': 'flex-start',
  'slide-right': 'flex-end',
  'slide-bottom': 'center',
  dialog: 'center',
}

const buildPosition = (effect, coverage, direction) => {
  const positionMap = {
    [direction]: 100 - coverage,
    dialog: (100 - coverage) / 2,
  }
  return positionMap[effect] || 0
}

const ModalPaneSC = styled(FlexBox).attrs(({effect}) => ({
  alignItems: effect === 'dialog' ? 'center' : 'stretch',
  justifyContent: justifyMap[effect],
  'aria-modal': true,
  'aria-labelledby': 'modal-label',
  'aria-describedby': 'modal-desc',
  role: 'dialog',
}))`
  position: fixed;
  top: ${({coverage, effect}) =>
    `${buildPosition(effect, coverage, 'slide-bottom')}%`};
  right: ${({coverage, effect}) =>
    `${buildPosition(effect, coverage, 'slide-left')}%`};
  bottom: ${({coverage, effect}) =>
    `${buildPosition(effect, coverage, 'slide-top')}%`};
  left: ${({coverage, effect}) =>
    `${buildPosition(effect, coverage, 'slide-right')}%`};
  z-index: ${zIndex.z4};

  pointer-events: none;
`

export default ModalPaneSC
