import styled, {keyframes} from 'styled-components'

const pulse = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(100% - 100px));
  }
`

const fade = keyframes`
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

const ProgressBarPulseSC = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  transform-origin: top left;

  animation: ${pulse} 1s cubic-bezier(0.25, 0.7, 0.01, 0.8) infinite;

  &::before {
    content: '';
    position: relative;
    display: block;
    width: 100px;
    height: 100%;
    border-radius: 50%;
    background: none;
    box-shadow: 0 0 8px 1px #fff;
    animation: ${fade} 1s ease-out infinite;
  }
`

export default ProgressBarPulseSC
