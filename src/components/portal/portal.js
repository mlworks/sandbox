import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

/**
 * Renders a customizable `Portal` component
 * @see https://reactjs.org/docs/portals.html
 */
class Portal extends React.Component {
  constructor(props) {
    super(props)
    this.domNode = document.createElement('div')
    this.portalRoot = document.getElementById(this.props.id)

    this.state = {}
  }

  componentDidMount() {
    // Only append if portal root exists
    this.portalRoot && this.portalRoot.appendChild(this.domNode)
  }

  componentWillUnmount() {
    // Only remove if portal root exists
    this.portalRoot && this.portalRoot.removeChild(this.domNode)
  }

  render() {
    // Renders content to portal root
    if (this.portalRoot) {
      // React does *not* create a new div. It renders the children into `domNode`.
      // `domNode` is any valid DOM node, regardless of its location in the DOM.
      return ReactDOM.createPortal(this.props.children, this.domNode)
    }

    // Renders content inline
    return this.props.children
  }
}

Portal.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Portal
