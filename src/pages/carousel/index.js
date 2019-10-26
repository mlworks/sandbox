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
        <Carousel>
          <div>a</div>
          <div>
            <button>b</button>
          </div>
          <div>c</div>
          <div>d</div>
          <div>e</div>
        </Carousel>
      </Card>
    </StackItem>
  </React.Fragment>
)

export default CarouselPage
