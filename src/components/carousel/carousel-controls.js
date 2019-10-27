import React from 'react'
import PropTypes from 'prop-types'

// Component
import ButtonRaised from 'components/button-raised'
import FlexItem from 'components/flex-item'
import MaterialIcon from 'components/material-icon'

// SC
import CarouselControlsSC from './carousel-controls-sc'

const CarouselControls = ({
  activeItem,
  nextIndex,
  prevIndex,
  onNextItem,
  onPrevItem,
}) => (
  <CarouselControlsSC>
    <FlexItem flex="0 0 auto">
      <ButtonRaised
        aria-controls={`slide-${prevIndex}`}
        aria-label="Show previous item"
        disabled={prevIndex === activeItem}
        onClick={onPrevItem}
      >
        <MaterialIcon icon="chevron_left" />
      </ButtonRaised>
    </FlexItem>

    <FlexItem flex="0 0 auto">
      <ButtonRaised
        aria-controls={`slide-${nextIndex}`}
        aria-label="Show next item"
        disabled={nextIndex === activeItem}
        onClick={onNextItem}
      >
        <MaterialIcon icon="chevron_right" />
      </ButtonRaised>
    </FlexItem>
  </CarouselControlsSC>
)

CarouselControls.propTypes = {
  activeItem: PropTypes.number,
  nextIndex: PropTypes.number,
  prevIndex: PropTypes.number,
  onNextItem: PropTypes.func,
  onPrevItem: PropTypes.func,
}

export default CarouselControls
