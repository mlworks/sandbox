import React, {useRef, useState} from 'react'

// Components
import CarouselControls from './carousel-controls'
import CarouselInner from './carousel-inner'
import CarouselScroller from './carousel-scroller'

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

  // useEffect(() => {
  //   setCount(value.length)
  // }, [maxLength, value])

  return (
    <div>
      <CarouselControls
        activeItem={activeItem}
        nextIndex={getNextIndex(activeItem, numOfItems)}
        numOfItems={numOfItems}
        prevIndex={getPrevIndex(activeItem)}
        onNextItem={onNextItem}
        onPrevItem={onPrevItem}
        onSetActiveItem={onSetActiveItem}
      />

      <CarouselInner>
        <CarouselScroller
          ref={scrollerEl}
          translateX={translateX}
          onKeyDown={handleKeyPress}
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
        </CarouselScroller>
      </CarouselInner>
    </div>
  )
}

export default Carousel
