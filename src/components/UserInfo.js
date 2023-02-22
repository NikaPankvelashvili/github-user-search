import React from 'react'
import './UserInfo.css'
import dayjs from 'dayjs'
import UserStats from './UserStats'
import Location_Icon from '../images/icon-location.svg'
import Website_Icon from '../images/icon-website.svg'
import Twitter_Icon from '../images/icon-twitter.svg'
import Company_Icon from '../images/icon-company.svg'
import AdditionalInfo from './AdditionalInfo'

function UserInfo({ userData }) {

  const joinDate = (unformatedDate) => {
    return `Joined ${dayjs(unformatedDate).format("DD MMM YYYY")}`
  }

  return (
    userData == null ? <></> :
      (
        <div className='user-info-container'>
          <img className='user-logo-desktop' src={userData.avatar_url} alt="user logo" />
          <div className='user-desktop'>
            <div className='user-avatar-container'>
              <img className='user-logo' src={userData.avatar_url} alt="user logo" />
              <div className='user-info-short'>
                <h1>{userData.name}</h1>
                <h3>{`@${userData.login}`}</h3>
                <h2>{joinDate(userData.created_at)}</h2>
              </div>
            </div>
            <p className='about-user'>{
              // eslint-disable-next-line
              userData.bio == null ? "This profile has no bio" : userData.bio
            }</p>
            <UserStats
              repos={userData.public_repos}
              followers={userData.followers}
              following={userData.following}
            />
            <div className='additional-info-container'>
              <div className='additional-info-container-left'>
                {
                  // eslint-disable-next-line
                  userData.location == null ? <AdditionalInfo logo={Location_Icon} info={"Not Available"} visibility={"unavaliable"} /> :
                    <AdditionalInfo logo={Location_Icon} info={userData.location} />
                }
                {
                  // eslint-disable-next-line
                  userData.blog == "" ? <AdditionalInfo logo={Website_Icon} info={"Not Available"} visibility={"unavaliable"} /> :
                    <AdditionalInfo logo={Website_Icon} info={<a className='website-link' target={"_blank"} rel="noreferrer" href={userData.blog}>{userData.blog}</a>} />
                }
              </div>
              <div className='additional-info-container-right'>
                {
                  // eslint-disable-next-line
                  userData.twitter_username == null ? <AdditionalInfo logo={Twitter_Icon} info={"Not Available"} visibility={"unavaliable"} /> :
                    <AdditionalInfo logo={Twitter_Icon} info={userData.twitter_username} />
                }
                {
                  // eslint-disable-next-line
                  userData.company == null ? <AdditionalInfo logo={Company_Icon} info={"Not Available"} visibility={"unavaliable"} /> :
                    <AdditionalInfo logo={Company_Icon} info={userData.company} />
                }
              </div>
            </div>
          </div>
        </div>
      )
  )
}

export default UserInfo