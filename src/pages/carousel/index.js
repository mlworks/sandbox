import React from 'react'

// Components
import Card from 'components/card'
import Carousel from 'components/carousel'
import StackItem from 'components/stack-item'

const CarouselPage = () => (
  <React.Fragment>
    <StackItem>
      <Card>
        <h2>Carousel Example</h2>
        <p>TBD</p>
      </Card>
    </StackItem>
    <StackItem>
      <Card>
        <Carousel />
      </Card>
    </StackItem>
  </React.Fragment>
)

export default CarouselPage
