import React from 'react';
import './user.css';
import PropTypes from 'prop-types';

const UserName = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
      <ul className="stats">
        <li>
          <span className="label" id="label_1">
            Followers
          </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label" id="label_2">
            Views
          </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label" id="label_3">
            Likes
          </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

UserName.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default UserName;
