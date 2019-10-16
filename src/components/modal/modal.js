import React from 'react'
import PropTypes from 'prop-types'

// Component
import FlexItem from 'components/flex-item'
import Portal from 'components/portal'

// SC
import ModalContentSC from './modal-content-sc'
import ModalHeaderSC from './modal-header-sc'
import ModalInnerSC from './modal-inner-sc'
import ModalOverlaySC from './modal-overlay-sc'
import ModalPaneSC from './modal-pane-sc'

const Modal = ({children, coverage, effect, isOpen, title, onDismiss}) => (
  <Portal id="modal-root">
    {isOpen && (
      <ModalOverlaySC aria-hidden role="presentation" onClick={onDismiss} />
    )}
    {isOpen && (
      <ModalPaneSC effect={effect} coverage={coverage}>
        <ModalInnerSC>
          <ModalHeaderSC>
            <FlexItem>
              <h1>{title}</h1>
            </FlexItem>
            <FlexItem flex="0 0 auto">
              <button type="button" onClick={onDismiss}>
                Close
              </button>
            </FlexItem>
          </ModalHeaderSC>
          <ModalContentSC>{children}</ModalContentSC>
        </ModalInnerSC>
      </ModalPaneSC>
    )}
  </Portal>
)

Modal.propTypes = {
  children: PropTypes.node,
  coverage: PropTypes.number,
  effect: PropTypes.string,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  onDismiss: PropTypes.func,
}

Modal.defaultProps = {
  coverage: 80,
  effect: 'dialog',
  onDismiss: () => {},
}

export default Modal
