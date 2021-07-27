import styled from 'styled-components'

const ProfileHeader = styled.header`
  width: 90%;
  max-width: 50rem;
  margin: 3rem auto;
`

const ProfileInfo = styled.article`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (min-width: 576px) {
    gap: 3rem;
  }

  div {
    color: white;
    h1 {
      font-family: 'Righteous', sans-serif;
      font-size: 2.1rem;
      font-weight: normal;
    }
    p {
      margin-top: 1.5rem;
      font-family: 'Rubik', sans-serif;
      font-size: 1.6rem;
    }

    @media (min-width: 576px) {
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 2rem;
      }
    }
  }
`

const Avatar = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  @media (min-width: 576px) {
    width: 15rem;
    height: 15rem;
  }
`

const SocialInfo = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: white;
    font-family: 'Righteous', sans-serif;
    transition: transform 200ms;
    &:hover {
      transform: scale(1.1);
    }

    @media (min-width: 576px) {
      font-size: 1.8rem;
    }
  }
`

const RepositoriesCards = styled.section`
  width: 90%;
  margin: 0 auto 2rem;
  max-width: 80rem;

  a {
    text-decoration: none;
    display: block;
    margin-bottom: 1.2rem;
  }
`

const RepositoryCard = styled.article`
  background-color: var(--gray);
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  width: 100%;
  margin: 0 auto;
  color: white;
  h1 {
    font-family: 'Righteous', sans-serif;
    font-size: 2.2rem;
    font-weight: normal;
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
  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.5rem;
    font-family: 'Rubik', sans-serif;
    img {
      height: 1.8rem;
    }
  }
`

export {
  ProfileHeader,
  Avatar,
  ProfileInfo,
  SocialInfo,
  RepositoriesCards,
  RepositoryCard,
  ForksAndStars
}
