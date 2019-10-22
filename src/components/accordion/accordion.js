import React from 'react'

// Components
import Button from 'components/button'
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'
import MaterialIcon from 'components/material-icon'

// Utils
import {normalizeLabel} from 'utils/misc'

class Accordion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeItem: null,
    }

    this.itemRef = []
    this.count = 0
  }

  componentDidMount() {
    this.count = React.Children.count(this.props.children)
  }

  handleKeyPress = (event, index) => {
    // Down Arrow (Advancing forward)
    // Cycle focus back to first item if you've reached the end
    if (event.keyCode === 40) {
      const nextIndexToFocus = index + 1 === this.count ? 0 : index + 1
      this.itemRef[nextIndexToFocus].current.focus()
    }

    // Up Arrow (Moving backwards)
    // Cycle focus to last item if you've reached the first item
    if (event.keyCode === 38) {
      const prevIndexToFocus = index === 0 ? this.count - 1 : index - 1
      this.itemRef[prevIndexToFocus].current.focus()
    }
  }

  render() {
    const {children} = this.props
    const {activeItem} = this.state

    return (
      <div>
        {React.Children.map(children, (child, index) => {
          this.itemRef[index] = React.createRef()
          return (
            <div key={child.props.label}>
              <h3>
                <Button
                  aria-expanded="true"
                  aria-controls={`${normalizeLabel(child.props.label)}-content`}
                  id={`${normalizeLabel(child.props.label)}`}
                  ref={this.itemRef[index]}
                  onClick={() =>
                    this.setState(state => ({
                      activeItem: state.activeItem === index ? null : index,
                    }))
                  }
                  onKeyDown={event => this.handleKeyPress(event, index)}
                >
                  <FlexBox alignItems="center">
                    <FlexItem>{child.props.label}</FlexItem>

                    <FlexItem marginLeft="md" flex="0 0 auto">
                      <MaterialIcon
                        charCode={index === activeItem ? 'e5c7' : 'e5c5'}
                      />
                    </FlexItem>
                  </FlexBox>
                </Button>
              </h3>

              <div
                id={`${normalizeLabel(child.props.label)}-content`}
                role="region"
                aria-labelledby={`${normalizeLabel(child.props.label)}`}
                hidden={index !== activeItem}
              >
                {child.props.children}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Accordion
