import styled from 'styled-components'

// HOC
import withSpacing from 'components/spacing/with-spacing'

const MaterialIconSC = styled.i.attrs({
  className: 'material-icons',
})`
  vertical-align: middle;
`

export default withSpacing(MaterialIconSC)
