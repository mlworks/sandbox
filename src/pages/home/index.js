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
      I’m a front end developer with over 7 years professional experience
      originally from Vancouver, BC and now located in Tokyo, Japan. I've worked
      on a variety of projects from mobile-first e-commerce SPAs to an authoring
      tool for market researchers to construct and deploy their surveys to a web
      app messenger.
    </p>
    <p>
      I’m passionate about the latest front end tech and tools, writing semantic
      HTML, clean CSS as well as making sure the components meet the a11y (web
      accessible) standards. Here you'll find a collection of components that
      I've been experimenting on an ongoing basis.
    </p>
    <p>
      Source code for the component demos can be found here:
      <br />
      <a
        href="https://github.com/mlworks"
        rel="noopener noreferrer"
        target="_blank"
      >
        https://github.com/mlworks/sandbox
      </a>
    </p>

    <Spacing marginTop="xlg">
      <a href="mailto:mlworks@gmail.com">
        <MaterialIcon icon="mail" marginRight="sm" /> mlworks@gmail.com
      </a>
      <br />
      <a
        href="https://www.linkedin.com/in/michael-lee-a1585a2a"
        rel="noopener noreferrer"
        target="_blank"
      >
        <MaterialIcon icon="external_link" marginRight="sm" /> LinkedIn Profile
      </a>
      <br />
      <a
        href="https://github.com/mlworks"
        rel="noopener noreferrer"
        target="_blank"
      >
        <MaterialIcon icon="external_link" marginRight="sm" /> GitHub Profile
      </a>
    </Spacing>
  </BioSC>
)

export default Home
