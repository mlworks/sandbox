import React from 'react'
import PropTypes from 'prop-types'

// Component
import TabButton from './tab-button'

const normalizeLabel = label => label.replace(/ /g, '-').toLowerCase()

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 0,
    }

    this.count = 0
  }

  componentDidMount() {
    this.count = React.Children.count(this.props.children)
  }

  handleKeyPress = event => {
    // Right Arrow
    // Cycle focus back to first tab if you've reached the end
    if (event.keyCode === 39) {
      this.setState(state => ({
        activeTab: state.activeTab + 1 === this.count ? 0 : state.activeTab + 1,
      }))
    }

    // Left Arrow
    // Cycle focus to last tab if you've reached the first tab
    if (event.keyCode === 37) {
      this.setState(state => ({
        activeTab: state.activeTab === 0 ? this.count - 1 : state.activeTab - 1,
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
              id={`${normalizeLabel(child.props.label)}`}
              isActive={index === activeTab}
              label={child.props.label}
              targetId={`${normalizeLabel(child.props.label)}-tab`}
              onClick={() => this.setState({activeTab: index})}
            />
          ))}
        </div>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            isActive: index === activeTab,
            id: `${normalizeLabel(child.props.label)}-tab`,
            labelledBy: `${normalizeLabel(child.props.label)}`,
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
