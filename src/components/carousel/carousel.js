import React, {useState} from 'react'
import PropTypes from 'prop-types'

// Components
import CarouselControls from './carousel-controls'
import CarouselScroller from './carousel-scroller'

// SC
import CarouselIndicatorSC from './carousel-indicator-sc'
import CarouselInnerSC from './carousel-inner-sc'
import CarouselPaginationSC from './carousel-pagination-sc'

const getNextIndex = (currentIndex, totalItems) =>
  currentIndex + 1 === totalItems ? currentIndex : currentIndex + 1
const getPrevIndex = currentIndex => (currentIndex <= 1 ? 0 : currentIndex - 1)

const Carousel = ({children}) => {
  const numOfItems = React.Children.count(children)
  const [activeItem, setActiveItem] = useState(0)

  const onSetActiveItem = index => setActiveItem(index)
  const onNextItem = () => onSetActiveItem(getNextIndex(activeItem, numOfItems))
  const onPrevItem = () => onSetActiveItem(getPrevIndex(activeItem))

  return (
    <div>
      <CarouselInnerSC>
        <CarouselControls
          activeItem={activeItem}
          nextIndex={getNextIndex(activeItem, numOfItems)}
          prevIndex={getPrevIndex(activeItem)}
          onNextItem={onNextItem}
          onPrevItem={onPrevItem}
        />
        <CarouselScroller
          activeItem={activeItem}
          onNextItem={onNextItem}
          onPrevItem={onPrevItem}
        >
          {children}
        </CarouselScroller>
      </CarouselInnerSC>

      <CarouselPaginationSC>
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
      </CarouselPaginationSC>
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.node,
}

export default Carousel
