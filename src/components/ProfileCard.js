import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProfileCardWrapper = styled.div`
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

function ProfileCard({ user: { avatar, name, tag, location, stats: { followers, views, likes } } }) {

  return (
    <ProfileCardWrapper>
      <ProfileDescription>
        <Avatar src={avatar} alt='user avatar' />
        <Name>{name}</Name>
        <Label>@{tag}</Label>
        <Label>{location}</Label>
      </ProfileDescription>
      <StatsList>
        <StatsItem>
          <StatLabel>Followers</StatLabel>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <StatLabel>Views</StatLabel>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <StatLabel>Likes</StatLabel>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileCardWrapper>
  )
}

ProfileCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    location: PropTypes.string,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    })
  })
};

ProfileCard.defaultProps = {
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxGk66K54MOa-94TfkVmJ8A6YIy_an1tpmhzmFc-K0ZK322Su&s",
  location: "location not set",
};

export default ProfileCard;
