import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ProfileCard({ user: { avatar, name, tag, location, stats: { followers, views, likes } } }) {

  const ProfileCard = styled.div`
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
    max-width: 250px;
    margin-bottom: 100px;
  `;

  const ProfileDescription = styled.div`
    padding: 20px 0;
    margin: auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  `;

  const Avatar = styled.img`
    margin: auto 0;
    border-radius: 50%;
  `;

  const StatsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  `;

  const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    border: 1px solid #e4e9f0;
    background-color: #f3f6f9;
    min-height: 74px;
    justify-content: space-evenly;
    min-width: 33.3%;
    align-items: center;
  `;

  const Name = styled.p`
    color: #122236;
    font-family: Lato;
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
  `;

  const Label = styled.p`
    color: #768696;
    font-family: Lato;
    font-size: 14px;
    font-weight: 400;
    line-height: 32px;
  `;

  const StatLabel = styled.span`
    color: #768696;
    font-family: Lato;
    font-size: 12px;
    font-weight: 400;
    line-height: 32px;
  `;

  const Quantity = styled.span`
    color: #1f3349;
    font-family: Lato - Black;
    font-size: 14px;
    font-weight: 900;
    line-height: 32px;
  `;

  return (
    <ProfileCard className="profile">
      <ProfileDescription className="description">
        <Avatar className="avatar" src={avatar} alt='user avatar' />
        <Name className="name">{name}</Name>
        <Label className="tag">@{tag}</Label>
        <Label className="location">{location}</Label>
      </ProfileDescription>
      <StatsList className="stats">
        <StatsItem>
          <StatLabel className="label">Followers</StatLabel>
          <Quantity className="quantity" >{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <StatLabel className="label" >Views</StatLabel>
          <Quantity className="quantity" >{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <StatLabel className="label">Likes</StatLabel>
          <Quantity className="quantity">{likes}</Quantity>
        </StatsItem>
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
