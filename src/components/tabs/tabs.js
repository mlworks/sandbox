import React from 'react'
import PropTypes from 'prop-types'

// Component
import TabButton from './tab-button'

const sanitizeLabel = label => label.replace(/ /g, '-').toLowerCase()

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 0,
    }
  }

  handleKeyPress = event => {
    const {activeTab} = this.state
    const count = React.Children.count(this.props.children)

    // Right Arrow
    if (event.keyCode === 39) {
      this.setState(state => ({
        activeTab: state.activeTab + 1 === count ? 0 : state.activeTab + 1,
      }))
    }

    // Left Arrow
    if (event.keyCode === 37) {
      this.setState(state => ({
        activeTab: state.activeTab === 0 ? count - 1 : state.activeTab - 1,
      }))
    }
  }

  render() {
    const {children} = this.props
    const {activeTab} = this.state

    return (
      <div onKeyDown={this.handleKeyPress}>
        <div role="tablist">
          {React.Children.map(children, (child, index) => (
            <TabButton
              id={`${sanitizeLabel(child.props.label)}`}
              isActive={index === activeTab}
              label={child.props.label}
              targetId={`${sanitizeLabel(child.props.label)}-tab`}
              onClick={() => this.setState({activeTab: index})}
            />
          ))}
        </div>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            isActive: index === activeTab,
            id: `${sanitizeLabel(child.props.label)}-tab`,
            labelledBy: `${sanitizeLabel(child.props.label)}`,
          })
        )}
      </div>
    )
  }
}

Tabs.propTypes = {
  children: PropTypes.node,
}

export default Tabs
