import React from 'react';
import PropTypes from 'prop-types';


function FriendListItem({ friend: { avatar, name, isOnline, id } }) {

    let onlineStatus = ["isOnline"];
    if (isOnline){
        onlineStatus.push("online")
    } else {
        onlineStatus.push("offline")
    }
  return (
    <li key={id} className="item">
      <span className={onlineStatus.join(" ")}/>
      <img className="avatar" src={avatar} alt="avatar" />
      <p className="name">{name}</p>
    </li >
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}

export default FriendListItem;