import React from 'react'
import PropTypes from 'prop-types'

// Component
import Button from 'components/button'
import MaterialIcon from 'components/material-icon'

// SC
import CarouselControlsSC from './carousel-controls-sc'

const CarouselControls = ({
  activeItem,
  nextIndex,
  numOfItems,
  prevIndex,
  onNextItem,
  onPrevItem,
  onSetActiveItem,
}) => (
  <CarouselControlsSC>
    <Button
      aria-controls={`slide-${prevIndex}`}
      disabled={prevIndex === activeItem}
      onClick={onPrevItem}
    >
      <MaterialIcon icon="chevron_left" />
    </Button>
    <ol>
      {[...Array(numOfItems)].map((_, index) => (
        <li key={index}>
          <Button
            id={`item-${index}`}
            aria-controls={`slide-${index}`}
            aria-selected={activeItem === index}
            role="tab"
            onClick={() => onSetActiveItem(index)}
          >
            Item {index + 1}
          </Button>
        </li>
      ))}
    </ol>
    <Button
      aria-controls={`slide-${nextIndex}`}
      disabled={nextIndex === activeItem}
      onClick={onNextItem}
    >
      <MaterialIcon icon="chevron_right" />
    </Button>
  </CarouselControlsSC>
)

CarouselControls.propTypes = {
  activeItem: PropTypes.number,
  nextIndex: PropTypes.number,
  numOfItems: PropTypes.number,
  prevIndex: PropTypes.number,
  onNextItem: PropTypes.func,
  onPrevItem: PropTypes.func,
  onSetActiveItem: PropTypes.func,
}

export default CarouselControls
