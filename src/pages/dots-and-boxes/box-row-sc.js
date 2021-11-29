import styled from 'styled-components'

import {BottomEdgeSC} from './box'

export const BoxRowSC = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: -8px;

    ${BottomEdgeSC} {
      display: none;
    }
  }
`
