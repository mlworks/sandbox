import styled from 'styled-components'

// Component
import FlexBox from 'components/flex-box'

// Constants
import {border, layout, neutrals, spacing} from 'constants/styles'

const SelectFauxSC = styled(FlexBox).attrs({
  alignItems: 'center',
  padding: '0 md',
})`
  min-height: ${layout.tapSize};
  border-radius: ${border.radius};
  border-bottom: 2px solid ${border.color};
  background: ${neutrals.neutral10};

  > div:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export default SelectFauxSC
