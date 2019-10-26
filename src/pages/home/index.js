import React from 'react'

// Component
import MaterialIcon from 'components/material-icon'
import Spacing from 'components/spacing'

// SC
import BioSC from './bio-sc'

const Home = () => (
  <BioSC>
    <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Michael Lee" />
    <h2>Hi there, my name is Michael Lee.</h2>
    <p>
      I’m a front-end developer with over 5 years professional experience
      located in the beautiful city of Vancouver, BC. I've worked on a variety
      of projects from mobile-first e-commerce SPAs to an authoring tool for
      market researchers to construct and deploy their surveys to a web app
      messenger.
    </p>
    <p>
      I’m passionate about the latest front-end tech and tools, writing semantic
      HTML, clean CSS as well as making sure the components meet the a11y (web
      accessible) standards. Here you'll find a collection of components that
      I've been experimenting on an ongoing basis.
    </p>

    <Spacing marginTop="xlg">
      <a href="mailto:mlworks@gmail.com">
        <MaterialIcon icon="mail" /> mlworks@gmail.com
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/michael-lee-a1585a2a"
        rel="noopener noreferrer"
        target="_blank"
      >
        <MaterialIcon icon="external_link" />{' '}
        https://www.linkedin.com/in/michael-lee-a1585a2a
      </a>
      <br />
      <a
        href="https://github.com/mlworks/sandbox"
        rel="noopener noreferrer"
        target="_blank"
      >
        <MaterialIcon icon="external_link" /> https://github.com/mlworks/sandbox
      </a>
    </Spacing>
  </BioSC>
)

export default Home
