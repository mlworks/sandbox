import React from 'react'
import {TransitionGroup} from 'react-transition-group'
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

// Transitions
import ModalPaneTransition from './modal-pane-transition'
import ModalOverlayTransition from './modal-overlay-transition'

const Modal = ({children, coverage, effect, isOpen, title, onDismiss}) => (
  <Portal id="modal-root">
    <TransitionGroup component={null}>
      {isOpen && (
        <ModalOverlayTransition>
          <ModalOverlaySC aria-hidden role="presentation" onClick={onDismiss} />
        </ModalOverlayTransition>
      )}
      {isOpen && (
        <ModalPaneTransition effect={effect}>
          <ModalPaneSC effect={effect} coverage={coverage}>
            <ModalInnerSC>
              <ModalHeaderSC>
                <FlexItem padding="lg">
                  <h2 id="modal-label">{title}</h2>
                </FlexItem>
                <FlexItem flex="0 0 auto">
                  <button type="button" onClick={onDismiss}>
                    Close
                  </button>
                </FlexItem>
              </ModalHeaderSC>
              <ModalContentSC id="modal-desc">{children}</ModalContentSC>
            </ModalInnerSC>
          </ModalPaneSC>
        </ModalPaneTransition>
      )}
    </TransitionGroup>
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
