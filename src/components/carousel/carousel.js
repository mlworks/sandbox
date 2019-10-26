import React from 'react'

const Carousel = () => (
  <div>
    <div>
      <button aria-controls="id">Prev</button>
      <ol>
        <li>
          <button
            id="item-1"
            aria-controls="slide-1"
            aria-selected="true"
            role="tab"
          >
            Item 1
          </button>
        </li>
        <li>
          <button
            id="item-2"
            aria-controls="slide-2"
            aria-selected="false"
            role="tab"
          >
            Item 2
          </button>
        </li>
      </ol>
      <button aria-controls="id">Next</button>
    </div>
    <div id="id">
      <div
        role="tabpanel"
        tabIndex="0"
        id="slide-1"
        aria-labelledby="item-1"
        aria-hidden="false"
      >
        slide 1
      </div>
      <div
        role="tabpanel"
        tabIndex="0"
        id="slide-2"
        aria-labelledby="item-2"
        aria-hidden
      >
        slide 2
      </div>
    </div>
  </div>
)

export default Carousel
