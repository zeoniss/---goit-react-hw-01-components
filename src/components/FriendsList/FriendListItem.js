import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendsList.module.scss';

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <li className={s.item}>
      {status ? (
        <span className={s.statusOnline}></span>
      ) : (
        <span className={s.statusOffline}></span>
      )}
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <span className={s.name}>{name}</span>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
export default FriendListItem;
// const FriendListItem = ({ id, isOnline, avatar, name }) => (
//   <>
//     <li key={id} className={s.item}>
//       <span className={isOnline ? s.online : s.offline}></span>
//       <img className={s.avatar} src={avatar} alt={name} width="48" />
//       <p className={s.name}>{name}</p>
//     </li>
//   </>
// );
// FriendListItem.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   status: PropTypes.bool.isRequired,
// };
// FriendListItem.defaultProps = {
//   avatar: Me,
// };
// export default FriendListItem;
