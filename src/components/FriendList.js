import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {

  return (
    <ul className="friend-list">
      {
        friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))
      }
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.array
}

export default FriendList