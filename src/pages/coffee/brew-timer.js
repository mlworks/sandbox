import React, {useState} from 'react'

// Components
import Card from 'components/card'
import ProgressBar from 'components/progress-bar'

const BrewTimer = ({pourList}) => {
  const totalPours = pourList.length
  const timePerPour = 3
  const [currentPour, setCurrentPour] = useState(0)
  const [currentPourTime, setPourTime] = useState(0)

  return (
    <div>
      Total Pours: {totalPours}
      <br />
      {currentPourTime}s
      <br />
      {currentPour + 1}
      <Card
        style={{
          background: '#2c2c2c',
        }}
      >
        Pour {currentPour + 1}: {pourList[currentPour].currentGram}g (Total:{' '}
        {pourList[currentPour].currentTotal}g)
        <ProgressBar currentValue={(currentPourTime / timePerPour) * 100} />
      </Card>
      {pourList.map((pour, index) => (
        <div key={index}>
          Pour {1 + index}: {pour.currentGram}g. (Total: {pour.currentTotal}
          g)
        </div>
      ))}
    </div>
  )
}

export default BrewTimer
