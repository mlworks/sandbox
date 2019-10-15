import React from 'react'
import styled from 'styled-components'

// Component
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'
import Portal from 'components/portal'

const ModalOverlaySC = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  background-color: rgba(0, 0, 0, 0.7);
`

const ModalPaneSC = styled(FlexBox).attrs(props => ({
  alignItems: props.effect === 'dialog' ? 'center' : 'stretch',
  justifyContent: 'center',
}))`
  position: fixed;
  top: 10%;
  right: 10%;
  bottom: 10%;
  left: 10%;
  z-index: 1000;
`

const ModalInnerSC = styled(FlexBox).attrs(props => ({
  flexDirection: 'column',
}))`
  flex: 1 1 auto;
  background: white;
`

const Modal = props => (
  <Portal id="modal-root">
    <ModalOverlaySC aria-hidden role="presentation" onClick={props.onDismiss} />
    <ModalPaneSC effect={props.effect}>
      <ModalInnerSC>
        <FlexItem flex="0 0 auto">
          <FlexBox>
            <FlexItem>header</FlexItem>
            <FlexItem flex="0 0 auto">
              <button type="button" onClick={props.onDismiss}>
                Close
              </button>
            </FlexItem>
          </FlexBox>
        </FlexItem>
        <div>{props.children}</div>
      </ModalInnerSC>
    </ModalPaneSC>
  </Portal>
)

export default Modal
