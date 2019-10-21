import styled from 'styled-components'

const InputSC = styled.input`
  &:focus {
    border-bottom-color: #bc1515;
  }

  ${({maxLength}) =>
    !!maxLength &&
    `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}
`

export default InputSC
