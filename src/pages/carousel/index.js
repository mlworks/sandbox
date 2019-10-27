import React from 'react'

// Components
import Card from 'components/card'
import Carousel from 'components/carousel'
import CarouselItem from 'components/carousel/carousel-item'
import StackItem from 'components/stack-item'

const CarouselPage = () => (
  <React.Fragment>
    <StackItem>
      <Card>
        <h2>Carousel Example</h2>
        <p>
          Keyboard accessible carousel component. Once tabbed to a carousel
          item, pressing left or right arrow keys will automatically cycle
          through the carousel.
        </p>
      </Card>
    </StackItem>
    <StackItem>
      <Card>
        <Carousel>
          <CarouselItem>
            <img
              src={`${process.env.PUBLIC_URL}/shiba-1.jpg`}
              alt="Shiba Inu"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src={`${process.env.PUBLIC_URL}/shiba-2.jpg`}
              alt="Shiba Inu"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src={`${process.env.PUBLIC_URL}/shiba-3.jpg`}
              alt="Shiba Inu"
            />
          </CarouselItem>
        </Carousel>
      </Card>
    </StackItem>
  </React.Fragment>
)

export default CarouselPage
