import React from 'react';
import PropTypes from 'prop-types';

function ProfileCard({ user: { avatar, name, tag, location, stats: { followers, views, likes } } }) {

  return (
    <div className = "profile">
      <div className = "description">
        <img className = "avatar" src={avatar} alt='user avatar' />
        <p className = "name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className = "location">{location}</p>
      </div>
      <ul className="stats">
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
      </ul>
    </div>
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
