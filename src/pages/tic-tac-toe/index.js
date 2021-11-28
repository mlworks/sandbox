import React from 'react'

// Components
import Card from 'components/card'
import StackItem from 'components/stack-item'
import TicTacToe from 'components/tic-tac-toe'

const TicTacToePage = () => {
  return (
    <React.Fragment>
      <StackItem>
        <Card>
          <h2>Tic Tac Toe</h2>
          <p>hello world</p>
        </Card>
      </StackItem>
      <StackItem>
        <Card>
          <TicTacToe />
        </Card>
      </StackItem>
    </React.Fragment>
  )
}

export default TicTacToePage
