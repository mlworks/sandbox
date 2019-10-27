import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'

// SC
import CarouselScrollerSC from './carousel-scroller-sc'

const CarouselScroller = ({activeItem, children, onNextItem, onPrevItem}) => {
  const scrollerEl = useRef(null)
  const refs = []

  const [translateX, setTranslateX] = useState(0)
  const [initialX, setInitialX] = useState(null)
  const [initialTranslateX, setInitialTranslateX] = useState(0)
  const [endX, setEndX] = useState(0)

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

  const getEventX = event =>
    /touch/.test(event.type) ? event.touches[0].clientX : event.clientX

  const resetScrollPosition = () => {
    setTranslateX(activeItem * scrollerEl.current.offsetWidth)
    setInitialX(null)
  }
  const handleDragStart = event => {
    setInitialX(getEventX(event))
    setInitialTranslateX(translateX)
  }
  const handleDragMove = event => {
    // Also handles the mouse interactions so it
    // mimics mobile's experience. Click and drag
    if (initialX) {
      setTranslateX(Math.round(initialTranslateX + initialX - getEventX(event)))
      setEndX(getEventX(event))
    }
  }
  const handleDragEnd = event => {
    const delta = initialX - endX
    const scrollerWidth = scrollerEl.current.offsetWidth
    const threshold = scrollerWidth / 4

    if (
      (activeItem + 1 >= React.Children.count(children) && delta > 0) ||
      (activeItem === 0 && delta < 0) ||
      Math.abs(delta) <= threshold
    ) {
      resetScrollPosition()
    } else if (delta > 0) {
      onNextItem()
    } else {
      onPrevItem()
    }

    setInitialX(null)
  }

  const recalcSlidePosition = event => resetScrollPosition()

  useEffect(() => {
    window.addEventListener('resize', recalcSlidePosition)
    return () => {
      window.removeEventListener('resize', recalcSlidePosition)
    }
  })

  return (
    <CarouselScrollerSC
      id="carousel-scroller"
      isDragActive={!!initialX}
      ref={scrollerEl}
      translateX={translateX}
      onKeyDown={handleKeyPress}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onTouchMove={handleDragMove}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDragMove}
      onMouseOut={resetScrollPosition}
      onTransitionEnd={() => refs[activeItem].current.focus()}
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
          onScrollToItem: () =>
            setTranslateX(index * scrollerEl.current.offsetWidth),
        })
      })}
    </CarouselScrollerSC>
  )
}

CarouselScroller.propTypes = {
  activeItem: PropTypes.number,
  children: PropTypes.node,
  onNextItem: PropTypes.func,
  onPrevItem: PropTypes.func,
}

export default CarouselScroller
