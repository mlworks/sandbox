import React, {useEffect, useState} from 'react'

// Components
import Card from 'components/card'
import ProgressBar from 'components/progress-bar'

const getProgressValue = value => {
  const num = Math.max(0, Math.min(value + Math.random() * 30, 100))
  return Math.round(num)
}

const timer = update => setTimeout(update, Math.random() * 2500)

const ProgressBarPage = () => {
  const [currentValue, setCurrentValue] = useState(0)

  // Set timer to simulate progress updates
  const update = () => setCurrentValue(getProgressValue(currentValue))
  useEffect(() => {
    timer(update)
  }, [currentValue])

  return (
    <Card
      style={{background: 'linear-gradient(-45deg, #031d4a 0%, #0d26f1 100%)'}}
    >
      <ProgressBar currentValue={currentValue} />
    </Card>
  )
}

export default ProgressBarPage
