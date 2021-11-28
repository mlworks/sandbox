import React, {useState, useEffect} from 'react'

// Components
import Card from 'components/card'
import StackItem from 'components/stack-item'

const DotsAndBoxesPage = () => (
  <React.Fragment>
    <StackItem>
      <Card>
        <h2>Dots and Boxes</h2>
      </Card>
    </StackItem>
    <StackItem>
      <DotsAndBoxes />
    </StackItem>
  </React.Fragment>
)

const map = {
  x0y0: {},
  x1y0: {},
  x0y1: {},
  x1y1: {},
}

const DotsAndBoxes = () => {
  const [edgeSelections, setEdgeSelection] = useState(map)
  const [currentPlayer, setPlayerTurn] = useState(1)

  const handleClick = ({x, y, selection, edge}) => {
    setEdgeSelection((stateSelection) =>
      Object.assign({}, stateSelection, {[`x${x}y${y}`]: selection})
    )
    if (edge === 'right' && !!edgeSelections[`x${x + 1}y${y}`]) {
      setEdgeSelection((stateSelection) => {
        const newSelection = Object.assign(
          {},
          stateSelection[`x${x + 1}y${y}`],
          {left: currentPlayer}
        )
        return Object.assign({}, stateSelection, {
          [`x${x + 1}y${y}`]: newSelection,
        })
      })
    }
    setPlayerTurn(currentPlayer === 1 ? 2 : 1)
  }

  const handleOwnerFulfilled = ({x, y, player}) => {
    setPlayerTurn(player)
    setEdgeSelection((stateSelection) => {
      const newSelection = Object.assign({}, stateSelection[`x${x}y${y}`], {
        owner: player,
      })
      return Object.assign({}, stateSelection, {
        [`x${x}y${y}`]: newSelection,
      })
    })
  }

  return (
    <div>
      <div>
        <Box
          x={0}
          y={0}
          selection={edgeSelections['x0y0']}
          player={currentPlayer}
          onClick={handleClick}
          onOwnerFulfilled={handleOwnerFulfilled}
        />
        <Box
          x={1}
          y={0}
          selection={edgeSelections['x1y0']}
          player={currentPlayer}
          onClick={handleClick}
          onOwnerFulfilled={handleOwnerFulfilled}
        />
      </div>
      <div>
        <Box
          x={0}
          y={1}
          selection={edgeSelections['x0y1']}
          player={currentPlayer}
          onClick={handleClick}
          onOwnerFulfilled={handleOwnerFulfilled}
        />
        <Box
          x={1}
          y={1}
          selection={edgeSelections['x1y1']}
          player={currentPlayer}
          onClick={handleClick}
          onOwnerFulfilled={handleOwnerFulfilled}
        />
      </div>
    </div>
  )
}

const Box = (props) => {
  // const [edge, setEdge] = useState({})
  const handleEdgeClick = (edge) => {
    // setEdge((stateEdge) =>
    //   Object.assign({}, stateEdge, {[edgeClick]: props.player})
    // )
    props.onClick({
      x: props.x,
      y: props.y,
      edge,
      selection: Object.assign({}, props.selection, {
        [edge]: props.player,
      }),
    })

    if (Object.values(props.selection).length >= 3) {
      props.onOwnerFulfilled({
        x: props.x,
        y: props.y,
        player: props.player,
      })
    }
  }

  // useEffect(() => {
  //   if (
  //     props.selection.top &&
  //     props.selection.right &&
  //     props.selection.bottom &&
  //     props.selection.left
  //   ) {
  //     props.onOwnerFulfilled({
  //       x: props.x,
  //       y: props.y,
  //       player: props.player,
  //     })
  //   }
  // }, [props.selection])

  return (
    <div style={{display: 'inline-block'}}>
      <div>{props.selection.owner}</div>
      <button
        type="button"
        disabled={!!props.selection.top}
        onClick={() => handleEdgeClick('top')}
      >
        top edge {props.selection.top}
      </button>
      <button
        type="button"
        disabled={!!props.selection.right}
        onClick={() => handleEdgeClick('right')}
      >
        right edge {props.selection.right}
      </button>
      <button
        type="button"
        disabled={!!props.selection.bottom}
        onClick={() => handleEdgeClick('bottom')}
      >
        bottom edge {props.selection.bottom}
      </button>
      <button
        type="button"
        disabled={!!props.selection.left}
        onClick={() => handleEdgeClick('left')}
      >
        left edge {props.selection.left}
      </button>
    </div>
  )
}

export default DotsAndBoxesPage
