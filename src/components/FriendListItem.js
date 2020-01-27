import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const ItemContainer = styled.li`
    display: flex;
    justify-content: space-around;
    max-width: 350px;
    box-shadow: 0 2px 2px rgba(2, 2, 2, 0.2);
    padding: 10px;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 100px;
      }
    `;

const Status = styled.span`
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: auto 20px;
  `;

const Avatar = styled.img`
    border-radius: 10px;
  `;

const Name = styled.p`
    margin auto;
    font-size: 40px;
  `;

function FriendListItem({ avatar, name, isOnline }) {

  return (
    <ItemContainer>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="avatar" />
      <Name>{name}</Name>
    </ItemContainer >
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;