import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {

  return (
    <ul>
      {
        friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))
      }
    </ul>
  )
}

FriendList.propTypes = {
  friends:  PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }))
};

export default FriendList