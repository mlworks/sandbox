import React from 'react'
import PropTypes from 'prop-types'

// Component
import Button from 'components/button'
import FlexItem from 'components/flex-item'
import MaterialIcon from 'components/material-icon'

// SC
import CarouselControlsSC from './carousel-controls-sc'
import CarouselIndicatorSC from './carousel-indicator-sc'

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
    <FlexItem flex="0 0 auto">
      <Button
        aria-controls={`slide-${prevIndex}`}
        aria-label="Show previous item"
        disabled={prevIndex === activeItem}
        onClick={onPrevItem}
      >
        <MaterialIcon icon="chevron_left" />
      </Button>
    </FlexItem>
    <FlexItem>
      <ol>
        {[...Array(numOfItems)].map((_, index) => (
          <li key={index}>
            <CarouselIndicatorSC
              id={`item-${index}`}
              aria-controls={`slide-${index}`}
              aria-label={`Item ${index + 1}`}
              aria-selected={activeItem === index}
              role="tab"
              onClick={() => onSetActiveItem(index)}
            />
          </li>
        ))}
      </ol>
    </FlexItem>
    <FlexItem flex="0 0 auto">
      <Button
        aria-controls={`slide-${nextIndex}`}
        aria-label="Show next item"
        disabled={nextIndex === activeItem}
        onClick={onNextItem}
      >
        <MaterialIcon icon="chevron_right" />
      </Button>
    </FlexItem>
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
