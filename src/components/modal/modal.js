import React from 'react'
import {TransitionGroup} from 'react-transition-group'
import PropTypes from 'prop-types'

// Component
import Button from 'components/button'
import FlexItem from 'components/flex-item'
import MaterialIcon from 'components/material-icon'
import Portal from 'components/portal'

// SC
import ModalContentSC from './modal-content-sc'
import ModalHeaderSC from './modal-header-sc'
import ModalInnerSC from './modal-inner-sc'
import ModalOverlaySC from './modal-overlay-sc'
import ModalPaneSC from './modal-pane-sc'

// HOC
import withFocusTrap from './with-focus-trap'

// Transitions
import ModalPaneTransition from './modal-pane-transition'
import ModalOverlayTransition from './modal-overlay-transition'

// Enhance with focus trap
const FocusTrapModalInner = withFocusTrap(ModalInnerSC)

const Modal = ({
  children,
  coverage,
  effect,
  isOpen,
  maxWidth,
  title,
  onDismiss,
}) => (
  <Portal id="modal-root">
    <TransitionGroup component={null}>
      {isOpen && (
        <ModalOverlayTransition>
          <ModalOverlaySC
            aria-hidden
            role="presentation"
            title="Dismiss Modal"
            onClick={onDismiss}
          />
        </ModalOverlayTransition>
      )}
      {isOpen && (
        <ModalPaneTransition effect={effect}>
          <ModalPaneSC effect={effect} coverage={coverage}>
            <FocusTrapModalInner maxWidth={maxWidth} onDismiss={onDismiss}>
              <ModalHeaderSC>
                <FlexItem padding="md lg">
                  <h2 id="modal-label">{title}</h2>
                </FlexItem>
                <FlexItem flex="0 0 auto">
                  <Button
                    onClick={onDismiss}
                    title="Dismiss Modal"
                    aria-label="Dismiss Modal"
                  >
                    <MaterialIcon icon="close" />
                  </Button>
                </FlexItem>
              </ModalHeaderSC>
              <ModalContentSC id="modal-desc">{children}</ModalContentSC>
            </FocusTrapModalInner>
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
