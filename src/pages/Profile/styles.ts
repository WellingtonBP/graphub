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

  a {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    font-family: 'Righteous', sans-serif;
    transition: transform 200ms;
    display: block;
    &:hover {
      transform: scale(1.1);
    }
    @media (min-width: 576px) {
      font-size: 1.8rem;
    }
  }
`

const ErrorMessage = styled.h1`
  text-align: center;
  margin: 5rem 0;
  font-size: 2.5rem;
  font-family: 'Righteous', sans-serif;
  color: white;
`

export { ProfileHeader, Avatar, ProfileInfo, SocialInfo, ErrorMessage }
