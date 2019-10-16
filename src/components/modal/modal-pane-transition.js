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
  timeout: 200,
})`
  &.${enter} {
    opacity: 0;
    transform: ${({effect}) => transformMap[effect]};
  }

  &.${enterActive} {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform 200ms ease-out, opacity 200ms ease-out;
  }

  &.${exit} {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform 200ms ease-out, opacity 100ms ease-out;
  }

  &.${exitActive} {
    opacity: 0;
    transform: ${({effect}) => transformMap[effect]};
  }
`

export default ModalPaneTransition
