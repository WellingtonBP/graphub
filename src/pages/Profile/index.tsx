import React from 'react'

import forkIcon from '../../assets/images/forkIcon.svg'
import starIcon from '../../assets/images/starIcon.svg'
import meAvatar from '../../assets/avatarme.jpeg'
import {
  ProfileHeader,
  Avatar,
  ProfileInfo,
  SocialInfo,
  RepositoriesCards,
  RepositoryCard,
  ForksAndStars
} from './styles'

const Profile: React.FC = () => {
  return (
    <>
      <ProfileHeader>
        <ProfileInfo>
          <Avatar src={meAvatar} alt="" />
          <div>
            <h1>Wellington Pacheco</h1>
            <p>Science Computer student | Trying to be a fullstack dev</p>
          </div>
        </ProfileInfo>
        <SocialInfo>
          <li>
            <button>3 followers</button>
          </li>
          <li>
            <button>0 following</button>
          </li>
          <li>
            <button>12 stars</button>
          </li>
        </SocialInfo>
      </ProfileHeader>
      <RepositoriesCards>
        <a href="#">
          <RepositoryCard>
            <div>
              <h1>react-chat</h1>
              <ForksAndStars>
                <button>
                  <img src={forkIcon} alt="Forks" /> 3
                </button>
                <button>
                  <img src={starIcon} alt="Stars" /> 0
                </button>
              </ForksAndStars>
            </div>
            <p>Realtime private chat</p>
            <div>
              <span>Typescript</span>
              <span>Updated 15 hours ago</span>
            </div>
          </RepositoryCard>
        </a>
      </RepositoriesCards>
    </>
  )
}

export default Profile
