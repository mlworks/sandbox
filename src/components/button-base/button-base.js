import styled from 'styled-components'

const ButtonBaseSC = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  padding: 0;
  border: 0;
  background: none;

  color: inherit;
  cursor: pointer;
`
export default ButtonBaseSC
