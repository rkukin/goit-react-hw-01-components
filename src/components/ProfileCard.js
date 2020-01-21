import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ProfileCard({ user: { avatar, name, tag, location, stats: { followers, views, likes } } }) {

  const ProfileCard = styled.div`
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
    max-width: 250px;

  `;

  const ProfileDescription = styled.div`
    padding: 30px 0;
    margin: auto 0`;

  const Avatar = styled.img`
    margin: auto 0;
    border-radius: 50%;
`;

  const StatsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

  `;


  return (
    <ProfileCard className = "profile">
      <ProfileDescription className = "description">
        <Avatar className = "avatar" src={avatar} alt='user avatar' />
        <p className = "name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className = "location">{location}</p>
      </ProfileDescription>
      <StatsList className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity" >{followers}</span>
        </li>
        <li>
          <span className="label" >Views</span>
          <span className="quantity" >{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </StatsList>
    </ProfileCard>
  )
}

ProfileCard.propTypes = {
  "name": PropTypes.string,
  "avatar": PropTypes.string,
  "location": PropTypes.string,
  "tag": PropTypes.string,
  "followers": PropTypes.number,
  "views": PropTypes.number,
  "likes": PropTypes.number
};

ProfileCard.defaultProps = {
  name: 'name_goes_here',
  avatar: 'avatar_url_goes_here',
  location: 'location_goes_here',
  tag: 'tag_goes_here',
  followers: 0,
  views: 0,
  likes: 0
};

export default ProfileCard;
