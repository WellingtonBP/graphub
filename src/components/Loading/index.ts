import styled from 'styled-components'

const Loading = styled.div`
  margin: 7rem auto 0;
  width: 5rem;
  height: 5rem;
  border: 0.5rem solid white;
  border-top-color: var(--dark);
  border-radius: 50%;
  animation: spinner linear 800ms infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
export default Loading
