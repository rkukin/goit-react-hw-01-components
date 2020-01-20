import React from 'react';
import PropTypes from 'prop-types';

function ProfileCard({ user: { avatar, name, tag, location, stats: { followers, views, likes } } }) {

    return (
        <div>
            <div>
                <img src={avatar} alt='user avatar' />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                <li>
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{likes}</span>
                </li>
            </ul>
        </div>
    )
};

ProfileCard.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
    tag: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
}

ProfileCard.defaultProps = {
    name: 'name_goes_here',
    avatar: 'avatar_url_goes_here',
    location: 'location_goes_here',
    tag: 'tag_goes_here',
    followers: 0,
    views: 0,
    likes: 0
}

export default ProfileCard;
