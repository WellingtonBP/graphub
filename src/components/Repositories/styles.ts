import styled from 'styled-components'

const RepositoriesCards = styled.section`
  width: 90%;
  margin: 0 auto 2rem;
  max-width: 80rem;
`

const RepositoryCard = styled.article`
  background-color: var(--gray);
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  width: 100%;
  margin: 0 auto 1.2rem;
  color: white;
  a {
    text-decoration: none;
    font-family: 'Righteous', sans-serif;
    font-size: 2.2rem;
    font-weight: normal;
    color: white;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  p {
    margin: 1.5rem 0 3rem;
  }
  p,
  span {
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
  }
`

const ForksAndStars = styled.div`
  display: flex;
  gap: 2rem;
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-family: 'Rubik', sans-serif;
    img {
      height: 1.8rem;
    }
  }
`

export { RepositoriesCards, RepositoryCard, ForksAndStars }
