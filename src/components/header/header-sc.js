import styled from 'styled-components'

// Components
import FlexBox from 'components/flex-box'

const HeaderSC = styled(FlexBox).attrs({
  alignItems: 'center',
})`
  min-height: 64px;
  border-top: 4px solid #bc1515;
  border-bottom: 1px solid #dfdfdf;
  background: #fafafa;

  h1 {
    font-size: 20px;
  }
`

export default HeaderSC
