import React, {useEffect, useState} from 'react'

const TicTacToeItem = (props) => {
  const [player, setPlayer] = useState('')
  useEffect(() => {
    if (props.isDisabled === false) {
      setPlayer('')
    }
  }, [props.isDisabled])

  return (
    player || (
      <input
        disabled={props.isDisabled}
        onClick={() => {
          props.onClick()
          setPlayer(props.currentPlayer)
        }}
        type="checkbox"
      />
    )
  )
}

const directions = {
  vertical: [{x: 0, y: 1}, {x: 0, y: -1}],
  horizontal: [{x: 1, y: 0}, {x: -1, y: 0}],
  diagonalLeft: [{x: -1, y: 1}, {x: 1, y: -1}],
  diagonalRight: [{x: 1, y: 1}, {x: -1, y: -1}],
}

const checkForWin = ({x, y, currentPlayer}, selections) => {
  let matched = 0

  const adjacentIsMatched = (direction, target, selections, currentPlayer) => {
    const next = `x${target.x + direction.x}y${target.y + direction.y}`
    if (selections[next] === currentPlayer) {
      matched++
      adjacentIsMatched(
        direction,
        {
          x: target.x + direction.x,
          y: target.y + direction.y,
        },
        selections,
        currentPlayer
      )
    }
  }

  for (let direction of Object.values(directions)) {
    if (matched === 2) break
    matched = 0
    for (let directionPath of direction) {
      if (matched === 2) break
      adjacentIsMatched(directionPath, {x, y}, selections, currentPlayer)
    }
  }

  if (matched === 2) return currentPlayer
  return ''
}

const TicTacToe = () => {
  const [currentPlayer, setPlayerTurn] = useState('X')
  const [selections, setSelection] = useState({})
  const [winner, setWinner] = useState('')

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      {winner ? (
        <div>
          Winner is {winner}!
          <br />
          <button
            type="button"
            onClick={() => {
              setPlayerTurn('X')
              setSelection({})
              setWinner('')
            }}
          >
            Play again
          </button>
        </div>
      ) : (
        `Player Turn: ${currentPlayer}`
      )}

      {[...Array(3)].map((_, rowCount) => {
        return (
          <div key={`row-${rowCount}`}>
            {[...Array(3)].map((_, columnCount) => {
              return (
                <TicTacToeItem
                  key={`column-${columnCount}`}
                  isDisabled={!!winner}
                  currentPlayer={currentPlayer}
                  onClick={() => {
                    setSelection((map) =>
                      Object.assign(map, {
                        [`x${columnCount}y${rowCount}`]: currentPlayer,
                      })
                    )
                    setWinner(
                      checkForWin(
                        {currentPlayer, x: columnCount, y: rowCount},
                        selections
                      )
                    )
                    setPlayerTurn(currentPlayer === 'X' ? 'O' : 'X')
                  }}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default TicTacToe
