import React from 'react'

// Components
import Card from 'components/card'
import ProgressBar from 'components/progress-bar'

const ProgressBarPage = () => (
  <Card
    style={{background: 'linear-gradient(-45deg, #031d4a 0%, #0d26f1 100%)'}}
  >
    <ProgressBar currentValue={40} />
  </Card>
)

export default ProgressBarPage
