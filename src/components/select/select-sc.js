import styled from 'styled-components'

// SC
import SelectFauxSC from './select-faux-sc'

// Constants
import {colors} from 'constants/styles'

const SelectSC = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  opacity: 0;
  appearance: none;

  &:active + ${SelectFauxSC}, &:focus + ${SelectFauxSC} {
    border-bottom-color: ${colors.accentRed};
  }
`

export default SelectSC
