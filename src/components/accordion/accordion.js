import React from 'react'

// Components
import AccordionItem from 'components/accordion/accordion-item'

class Accordion extends React.Component {
  constructor(props) {
    super(props)

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

    return (
      <div>
        {React.Children.map(children, (child, index) => {
          this.itemRef[index] = React.createRef()
          return (
            <AccordionItem
              key={child.props.label}
              label={child.props.label}
              ref={this.itemRef[index]}
              onKeyDown={event => this.handleKeyPress(event, index)}
            >
              {child.props.children}
            </AccordionItem>
          )
        })}
      </div>
    )
  }
}

export default Accordion
