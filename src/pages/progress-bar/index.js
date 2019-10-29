import React, {useEffect, useState} from 'react'

// Components
import Card from 'components/card'
import ProgressBar from 'components/progress-bar'
import StackItem from 'components/stack-item'

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
  })

  return (
    <React.Fragment>
      <StackItem>
        <Card>
          <h2>Progress Bar</h2>
          <p>
            This progress bar is a recreation of the progress bar design found
            in Playstation 4's UI mimicing the design and animations.
          </p>
        </Card>
      </StackItem>
      <StackItem>
        <Card
          style={{
            background: '#2c2c2c',
          }}
        >
          <ProgressBar currentValue={currentValue} />
        </Card>
      </StackItem>
    </React.Fragment>
  )
}

export default ProgressBarPage
