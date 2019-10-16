import styled from 'styled-components'
import {CSSTransition} from 'react-transition-group'

const animationClassName = 'modal-pane'
const enter = `${animationClassName}-enter`
const enterActive = `${animationClassName}-enter-active`
const exit = `${animationClassName}-exit`
const exitActive = `${animationClassName}-exit-active`
const transformMap = {
  'slide-top': 'translate3d(0, -100%, 0)',
  'slide-bottom': 'translate3d(0, 100%, 0)',
  'slide-right': 'translate3d(100%, 0, 0)',
  'slide-left': 'translate3d(-100%, 0, 0)',
  dialog: 'translate3d(0, -10%, 0) scale(0.8)',
}

const ModalPaneTransition = styled(CSSTransition).attrs({
  classNames: animationClassName,
  timeout: 100,
})`
  &.${enter} {
    transform: ${({effect}) => transformMap[effect]};
  }

  &.${enterActive} {
    transform: translate3d(0, 0, 0);
    transition: transform 10000ms ease-out;
  }

  &.${exit} {
    transform: translate3d(0, 0, 0);
    transition: transform 150ms ease-out, opacity ${150 / 2}ms ease-out;
  }

  &.${exitActive} {
    transform: ${({effect}) => transformMap[effect]};
  }
`

export default ModalPaneTransition
