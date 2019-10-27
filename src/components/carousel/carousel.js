import React, {useEffect, useRef, useState} from 'react'

// Components
import CarouselControls from './carousel-controls'

// SC
import CarouselIndicatorSC from './carousel-indicator-sc'
import CarouselInnerSC from './carousel-inner-sc'
import CarouselPaginationSC from './carousel-pagination-sc'
import CarouselScrollerSC from './carousel-scroller-sc'

const getNextIndex = (currentIndex, totalItems) =>
  currentIndex + 1 === totalItems ? currentIndex : currentIndex + 1
const getPrevIndex = currentIndex => (currentIndex <= 1 ? 0 : currentIndex - 1)

const Carousel = ({children}) => {
  const scrollerEl = useRef(null)
  const refs = []
  const numOfItems = React.Children.count(children)
  const [activeItem, setActiveItem] = useState(0)
  const [translateX, setTranslateX] = useState(0)

  const onSetActiveItem = index => {
    setActiveItem(index)
    setTranslateX(index * scrollerEl.current.offsetWidth)
    // refs[index].current.focus()
  }
  const onNextItem = () => onSetActiveItem(getNextIndex(activeItem, numOfItems))
  const onPrevItem = () => onSetActiveItem(getPrevIndex(activeItem))
  const handleKeyPress = event => {
    // Right Arrow (Advancing forward)
    if (event.keyCode === 39) {
      onNextItem()
    }

    // Left Arrow (Moving backwards)
    if (event.keyCode === 37) {
      onPrevItem()
    }
  }

  const [initialX, setInitialX] = useState(null)
  const [initialTranslateX, setInitialTranslateX] = useState(0)
  const [endX, setEndX] = useState(0)

  const handleTouchStart = event => {
    setInitialX(event.touches[0].clientX)
    setInitialTranslateX(translateX)
  }
  const handleTouchEnd = event => {
    const delta = initialX - endX
    const scrollerWidth = scrollerEl.current.offsetWidth
    const threshold = scrollerWidth / 4
    if (Math.abs(delta) > threshold) {
      if (delta > 0) {
        onNextItem()
      } else {
        onPrevItem()
      }
    } else {
      setTranslateX(activeItem * scrollerWidth)
    }
    setInitialX(null)
  }
  const handleTouchMove = event => {
    setTranslateX(
      Math.round(initialTranslateX + initialX - event.touches[0].clientX)
    )
    setEndX(event.touches[0].clientX)
  }

  const recalcSlidePosition = event =>
    setTranslateX(activeItem * scrollerEl.current.offsetWidth)

  useEffect(() => {
    window.addEventListener('resize', recalcSlidePosition)
    return () => {
      window.removeEventListener('resize', recalcSlidePosition)
    }
  })

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
        <CarouselScrollerSC
          id="carousel-scroller"
          isDragActive={!!initialX}
          ref={scrollerEl}
          translateX={translateX}
          onKeyDown={handleKeyPress}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {React.Children.map(children, (child, index) => {
            refs[index] = React.createRef()
            return React.cloneElement(child, {
              'aria-hidden': index === activeItem ? false : true,
              'aria-labelledby': `item-${index}`,
              id: `slide-${index}`,
              role: 'tabpanel',
              tabIndex: index === activeItem ? 0 : -1,
              ref: refs[index],
            })
          })}
        </CarouselScrollerSC>
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

export default Carousel
