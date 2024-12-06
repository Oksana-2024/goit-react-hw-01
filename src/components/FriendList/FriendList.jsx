import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      <li className={css.friendItem}>
        {friends.map(({ id, ...friend }) => (
          <FriendListItem key={id} {...friend} />
        ))}
      </li>
    </ul>
  );
}

