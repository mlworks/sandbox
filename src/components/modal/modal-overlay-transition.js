import styled from 'styled-components'
import {CSSTransition} from 'react-transition-group'

const animationClassName = 'modal-overlay'
const enter = `${animationClassName}-enter`
const enterActive = `${animationClassName}-enter-active`
const exit = `${animationClassName}-exit`
const exitActive = `${animationClassName}-exit-active`

const ModalOverlayTransition = styled(CSSTransition).attrs({
  classNames: animationClassName,
  timeout: 250,
})`
  &.${enter} {
    opacity: 0;
  }

  &.${enterActive} {
    opacity: 1;
    transition: opacity 150ms ease-out;
  }

  &.${exit} {
    opacity: 1;
  }

  &.${exitActive} {
    opacity: 0;
    transition: opacity 150ms ease-out;
  }
`

export default ModalOverlayTransition
