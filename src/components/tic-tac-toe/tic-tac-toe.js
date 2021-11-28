import React, {useState} from 'react'
import styled from 'styled-components'

// Component
import ButtonPrimary from 'components/button-primary'

// Constants
import {border} from 'constants/styles'

const TableSC = styled.table`
  min-width: 50vw;
  margin: 0 auto;
  border-spacing: 0;
`

const TableItemSC = styled.td`
  width: ${(props) => `${100 / props.gridSize}%`};
  padding: 0;
  border: 2px solid ${border.color};

  ${(props) => props.isFirstRow && 'border-top: 0;'};
  ${(props) => props.isLastRow && 'border-bottom: 0;'};
  ${(props) => props.isFirstItem && 'border-left: 0;'};
  ${(props) => props.isLastItem && 'border-right: 0;'};
`

const TicTacToeItemSC = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;

  input {
    display: block;
    flex: 1 1 auto;
    align-self: stretch;
    appearance: none;
  }
`

const directions = {
  vertical: [{x: 0, y: 1}, {x: 0, y: -1}],
  horizontal: [{x: 1, y: 0}, {x: -1, y: 0}],
  diagonalLeft: [{x: -1, y: 1}, {x: 1, y: -1}],
  diagonalRight: [{x: 1, y: 1}, {x: -1, y: -1}],
}

const GRID_SIZE = 3
const WIN_CONDITION = 3

const checkForWin = ({x, y, currentPlayer}, selections) => {
  let matched = 1

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
    if (matched === WIN_CONDITION) break
    matched = 1
    for (let directionPath of direction) {
      if (matched === WIN_CONDITION) break
      adjacentIsMatched(directionPath, {x, y}, selections, currentPlayer)
    }
  }

  if (matched === WIN_CONDITION) return currentPlayer
  return ''
}

const TicTacToe = (props) => {
  const [currentPlayer, setPlayerTurn] = useState('X')
  const [selections, setSelection] = useState({})
  const [winner, setWinner] = useState('')
  const isGameDraw =
    Object.values(selections).length === GRID_SIZE * GRID_SIZE && !winner

  return (
    <TableSC>
      <thead>
        <tr>
          <th colSpan={GRID_SIZE}>
            {isGameDraw && 'Tied game!'}
            {winner && `Winner is ${winner}`}
            <div>
              {isGameDraw || winner ? (
                <ButtonPrimary
                  onClick={() => {
                    setPlayerTurn('X')
                    setSelection({})
                    setWinner('')
                  }}
                >
                  Play again
                </ButtonPrimary>
              ) : (
                <div>
                  Connect {WIN_CONDITION} to win.
                  <br />
                  Player Turn: {currentPlayer}
                </div>
              )}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {[...Array(GRID_SIZE)].map((_, rowIndex) => (
          <tr key={`row-${rowIndex}`}>
            {[...Array(GRID_SIZE)].map((_, columnIndex) => (
              <TableItemSC
                key={`column-${columnIndex}`}
                gridSize={GRID_SIZE}
                isFirstRow={rowIndex === 0}
                isLastRow={rowIndex + 1 === GRID_SIZE}
                isFirstItem={columnIndex === 0}
                isLastItem={columnIndex + 1 === GRID_SIZE}
              >
                <TicTacToeItem
                  isDisabled={!!winner}
                  player={selections[`x${columnIndex}y${rowIndex}`]}
                  onClick={() => {
                    setSelection((map) =>
                      Object.assign(map, {
                        [`x${columnIndex}y${rowIndex}`]: currentPlayer,
                      })
                    )
                    setWinner(
                      checkForWin(
                        {currentPlayer, x: columnIndex, y: rowIndex},
                        selections
                      )
                    )
                    setPlayerTurn(currentPlayer === 'X' ? 'O' : 'X')
                  }}
                />
              </TableItemSC>
            ))}
          </tr>
        ))}
      </tbody>
    </TableSC>
  )
}

const TicTacToeItem = (props) => {
  return (
    <TicTacToeItemSC>
      {props.player || (
        <input
          disabled={props.isDisabled}
          onClick={props.onClick}
          type="checkbox"
        />
      )}
    </TicTacToeItemSC>
  )
}

export default TicTacToe
