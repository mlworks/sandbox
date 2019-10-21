import React from 'react'

const withFocusTrap = Component => {
  class WrappedComponent extends React.Component {
    constructor(props) {
      super(props)
      this.focusTrapContainer = React.createRef()
      this.firstFocusNode = React.createRef()
      this.lastFocusNode = React.createRef()
    }

    componentDidMount() {
      this.focusableElements = this.focusTrapContainer.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      this.focusableElements[0].focus()

      document.addEventListener('focus', this.trapFocus, true)
    }

    componentWillUnmount() {
      document.removeEventListener('focus', this.trapFocus)
    }

    trapFocus = event => {
      if (!this.focusTrapContainer.current) {
        return
      }

      if (event.target === this.firstFocusNode.current) {
        // Focus is now attempting to leave modal while shift-tabbing backwards,
        // send focus to last focusable element
        this.focusableElements[this.focusableElements.length - 1].focus()
      } else if (event.target === this.lastFocusNode.current) {
        // Focus is now attempting to leave modal while tabbing forward,
        // send focus back to first focusable element
        this.focusableElements[0].focus()
      }
    }

    handleKeyPress = event => {
      // ESC
      if (event.keyCode === 27) {
        this.props.onDismiss()
      }
    }

    render() {
      const {onDismiss, ...restOfProps} = this.props

      return (
        <React.Fragment>
          <div tabIndex="0" ref={this.firstFocusNode} />
          <Component
            ref={this.focusTrapContainer}
            onKeyDown={this.handleKeyPress}
            {...restOfProps}
          />
          <div tabIndex="0" ref={this.lastFocusNode} />
        </React.Fragment>
      )
    }
  }

  return WrappedComponent
}

export default withFocusTrap
