import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, ...friend }) => (
        <li key={id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
}
