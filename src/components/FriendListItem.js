import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


function FriendListItem({ friend: { avatar, name, isOnline, id } }) {

    const ItemContainer = styled.li`
      display: flex;
      max-width: 300px;
      box-shadow: 0 2px 2px rgba(2, 2, 2, 0.2);
      padding: 10px;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 100px;
      }
    `;

    const Status = styled.span`
      background-color: ${isOnline ? 'green' : 'red'};
      border-radius: 50%;
      width: 20px;
      height: 20px;
`;
    const Avatar = styled.img`
      border-radius: 10px;
`;


  return (
    <ItemContainer key={id} className="item">
      <Status className="isOnline"/>
      <Avatar className="avatar" src={avatar} alt="avatar" />
      <p className="name">{name}</p>
    </ItemContainer >
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
};

export default FriendListItem;