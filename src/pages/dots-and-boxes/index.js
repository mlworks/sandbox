import React, {useState, useEffect} from 'react'

// Components
import Card from 'components/card'
import FlexBox from 'components/flex-box'
import FlexItem from 'components/flex-item'
import StackItem from 'components/stack-item'

import {Box} from './box'
import {BoxRowSC} from './box-row-sc'

const DotsAndBoxesPage = () => (
  <React.Fragment>
    <StackItem>
      <Card>
        <h2>Dots and Boxes</h2>
      </Card>
    </StackItem>
    <StackItem>
      <Card>
        <DotsAndBoxes />
      </Card>
    </StackItem>
  </React.Fragment>
)

const map = {
  x0y0: {},
  x1y0: {},
  x0y1: {},
  x1y1: {},
}

const GRID_SIZE = 6

const EDGE_MAP = {
  right: {
    x: 1,
    y: 0,
    adjacentEdge: 'left',
  },
  left: {
    x: -1,
    y: 0,
    adjacentEdge: 'right',
  },
  top: {
    x: 0,
    y: -1,
    adjacentEdge: 'bottom',
  },
  bottom: {
    x: 0,
    y: 1,
    adjacentEdge: 'top',
  },
}

const checkBoxFulfilled = (selections = {}) =>
  Object.values(selections).length >= 3
const getSelection = (edge, x, y) =>
  `x${x + EDGE_MAP[edge].x}y${y + EDGE_MAP[edge].y}`

const DotsAndBoxes = () => {
  const [edgeSelections, setEdgeSelection] = useState(map)
  const [currentPlayer, setPlayerTurn] = useState(1)
  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)

  const handleClick = ({x, y, selection, edge}) => {
    const isTarget3sided = checkBoxFulfilled(edgeSelections[`x${x}y${y}`])
    const targetSelection = {
      [`x${x}y${y}`]: {
        ...selection,
        ...(isTarget3sided && {owner: currentPlayer}),
      },
    }
    const adjacentBox = edgeSelections[getSelection(edge, x, y)]
    const isAdjacent3sided = checkBoxFulfilled(adjacentBox)
    const adjacentSelection = {
      [getSelection(edge, x, y)]: {
        ...adjacentBox,
        [EDGE_MAP[edge].adjacentEdge]: currentPlayer,
        ...(isAdjacent3sided && {owner: currentPlayer}),
      },
    }

    setEdgeSelection((stateSelection) =>
      Object.assign({}, stateSelection, {
        ...targetSelection,
        ...adjacentSelection,
      })
    )

    // Change turn if no boxes filled in
    if (!isTarget3sided && !isAdjacent3sided) {
      setPlayerTurn(currentPlayer === 1 ? 2 : 1)
    } else {
      const points = [isTarget3sided, isAdjacent3sided].filter(Boolean).length
      currentPlayer === 1
        ? setPlayer1Score((score) => score + points)
        : setPlayer2Score((score) => score + points)
    }
  }

  return (
    <div>
      <FlexBox marginBottom="16px">
        <FlexItem>Player Red Score: {player1Score}</FlexItem>
        <FlexItem flex="0 0 auto">Player Blue Score: {player2Score}</FlexItem>
      </FlexBox>

      {[...Array(GRID_SIZE)].map((_, rowIndex) => {
        return (
          <BoxRowSC key={`row-${rowIndex}`}>
            {[...Array(GRID_SIZE)].map((_, columnIndex) => (
              <Box
                key={`x${columnIndex}y${rowIndex}`}
                x={columnIndex}
                y={rowIndex}
                selection={edgeSelections[`x${columnIndex}y${rowIndex}`]}
                player={currentPlayer}
                onClick={handleClick}
              />
            ))}
          </BoxRowSC>
        )
      })}
    </div>
  )
}

export default DotsAndBoxesPage
