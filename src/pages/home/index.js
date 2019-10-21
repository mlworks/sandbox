import React from 'react'

// Component
import Card from 'components/card'

// SC
import BioSC from './bio-sc'

const Home = () => (
  <Card>
    <BioSC>
      <img src="/profile.jpg" alt="Photo of Michael" />
      <h2>Hi there, my name is Michael Lee.</h2>
      <p>
        I’m a front-end developer with over 5 years professional experience
        located in the beautiful city of Vancouver, BC. I've worked on a variety
        of projects from mobile-first e-commerce SPAs to a DIY authoring tool
        for market researchers to construct and deploy their surveys.
      </p>
      <p>
        I’m passionate about the latest front-end tech and tools, writing clean
        CSS and making sure the components meet the a11y (web accessible)
        standard. Here you'll find a collection of components that I've been
        creating and experimenting.
      </p>

      <a
        href="https://www.linkedin.com/in/michael-lee-a1585a2a"
        rel="noopener noreferrer"
        target="_blank"
      >
        https://www.linkedin.com/in/michael-lee-a1585a2a
      </a>
      <br />
      <a
        href="https://github.com/mlworks/sandbox"
        rel="noopener noreferrer"
        target="_blank"
      >
        https://github.com/mlworks/sandbox
      </a>
    </BioSC>
  </Card>
)

export default Home
