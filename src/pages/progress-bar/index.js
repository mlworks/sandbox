import React from 'react'

// Components
import Card from 'components/card'
import ProgressBar from 'components/progress-bar'

const ProgressBarPage = () => (
  <Card
    style={{background: 'linear-gradient(315deg, #0511ab 0%, #0d26f1 100%)'}}
  >
    <ProgressBar currentValue={40} />
  </Card>
)

export default ProgressBarPage
