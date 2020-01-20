import React from 'react';
import PropTypes from 'prop-types';


function FriendListItem({ friend: { avatar, name, isOnline, id } }) {

    return (
        <li key={id} className="item">
            {/* //TODO: Add CSS depending on isOnline prop */}
            <span className='isOnline'></span>
            <img className="avatar" src={avatar} alt="avatar" />
            <p className="name">{name}</p>
        </li >
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;