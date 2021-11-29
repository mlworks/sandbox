import React from 'react'
import styled from 'styled-components'

export const Box = ({x, y, selection = {}, player, onClick}) => {
  const handleEdgeClick = (edge) => {
    onClick({
      x,
      y,
      edge,
      selection: Object.assign({}, selection, {
        [edge]: player,
      }),
    })
  }

  return (
    <BoxWrapperSC owner={selection.owner}>
      <TopEdgeSC
        edge="top"
        type="button"
        owner={selection.top}
        disabled={!!selection.top}
        onClick={() => handleEdgeClick('top')}
        aria-label="top edge"
      />
      <RightEdgeSC
        edge="right"
        type="button"
        owner={selection.right}
        disabled={!!selection.right}
        onClick={() => handleEdgeClick('right')}
        aria-label="right edge"
      />
      <BottomEdgeSC
        edge="bottom"
        type="button"
        owner={selection.bottom}
        disabled={!!selection.bottom}
        onClick={() => handleEdgeClick('bottom')}
        aria-label="bottom edge"
      />
      <LeftEdgeSC
        edge="left"
        type="button"
        owner={selection.left}
        disabled={!!selection.left}
        onClick={() => handleEdgeClick('left')}
        aria-label="left edge"
      />
    </BoxWrapperSC>
  )
}

const BaseEdgeSC = styled.button`
  position: absolute;
  appearance: none;
  padding: 0;
  margin: 0;
  border: 0;
  background: ${(props) => {
    switch (props.owner) {
      case 1: {
        return 'red'
      }
      case 2: {
        return 'blue'
      }
      default: {
        return '#ccc'
      }
    }
  }};
`

const LeftEdgeSC = styled(BaseEdgeSC)`
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 8px;
`
const TopEdgeSC = styled(BaseEdgeSC)`
  top: 0;
  left: 8px;
  right: 8px;
  width: calc(100% - 16px);
  height: 8px;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -10px;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 8px;
    background: #3c3c3c;
    z-index: 1;
    pointer-events: none;
  }
`

const RightEdgeSC = styled(BaseEdgeSC)`
  right: 0;
  top: 8px;
  bottom: 8px;
  width: 8px;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -2px;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 8px;
    background: #3c3c3c;
    z-index: 1;
    pointer-events: none;
  }
`

export const BottomEdgeSC = styled(BaseEdgeSC)`
  bottom: 0;
  left: 8px;
  right: 8px;
  width: calc(100% - 16px);
  height: 8px;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    right: -10px;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 8px;
    background: #3c3c3c;
    z-index: 1;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: -10px;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 8px;
    background: #3c3c3c;
    z-index: 1;
    pointer-events: none;
  }
`

const BoxWrapperSC = styled.div`
  position: relative;
  display: block;
  flex: 1 1 100%;
  aspect-ratio: 1;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    right: 8px;
    bottom: 8px;
    left: 8px;
    opacity: 0.5;
    background: ${(props) => {
      switch (props.owner) {
        case 1: {
          return 'red'
        }
        case 2: {
          return 'blue'
        }
        default: {
          return 'none'
        }
      }
    }};
  }

  &:not(:last-child) {
    margin-right: -8px;

    ${RightEdgeSC} {
      display: none;
    }
  }
`
