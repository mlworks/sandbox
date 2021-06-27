import styled from 'styled-components'

const RatioSC = styled.div`
  height: 48px;
  background: rgba(
    121,
    85,
    72,
    ${({index}) => (0.9 / `1.${index}`).toFixed(2)}
  );
`

export default RatioSC
