import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 90%;
  max-width: 65rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.5rem;
`

const Logo = styled.img`
  display: block;
  width: 16rem;
  animation-name: slideup;
  animation-duration: 400ms;
  animation-timing-function: ease-in-out;

  @keyframes slideup {
    from {
      transform: translate(-20rem, -12rem);
    }
    to {
      transform: translate(0);
    }
  }

  @media (min-width: 576px) {
    width: 20rem;
  }
`

const SearchForm = styled.form`
  width: 100%;
  animation-name: slidedown;
  animation-duration: 400ms;
  animation-timing-function: ease-in-out;

  @keyframes slidedown {
    from {
      transform: translate(20rem, 12rem);
    }
    to {
      transform: translate(0);
    }
  }
`

const Input = styled.input`
  width: 100%;
  background-color: var(--gray);
  border: none;
  border-radius: 0.5rem;
  padding: 1.3rem 1.5rem;
  outline: none;
  &,
  &::placeholder {
    font-family: 'Righteous', sans-serif;
    color: white;
    font-size: 1.5rem;
  }

  @media (min-width: 576px) {
    padding: 1.5rem 2rem;
  }

  @media (min-width: 768px) {
    padding: 1.6rem 2rem;
  }
`

export { Container, Logo, SearchForm, Input }
