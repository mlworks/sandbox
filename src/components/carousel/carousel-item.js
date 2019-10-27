import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

// SC
import CarouselItemSC from './carousel-item-sc'

const CarouselItem = React.forwardRef(
  ({children, onScrollToItem, ...props}, ref) => {
    const prevCountRef = useRef(0)
    useEffect(() => {
      if (prevCountRef.current === -1 && props.tabIndex === 0) {
        onScrollToItem()
      }
      prevCountRef.current = props.tabIndex
    })

    return (
      <CarouselItemSC {...props} ref={ref}>
        {children}
      </CarouselItemSC>
    )
  }
)

CarouselItem.propTypes = {
  children: PropTypes.node,
  onScrollToItem: PropTypes.func,
}

export default CarouselItem
