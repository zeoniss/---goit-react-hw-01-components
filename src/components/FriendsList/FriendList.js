import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friendList">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          status={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
// const FriendList = ({ friends }) => (
//   <ul className={s.friendList}>
//     {friends.map(({ isOnline, avatar, name }) => (
//       <li key={name} className={s.item}>
//         <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
//       </li>
//     ))}
//   </ul>
// );
// export default FriendList;
