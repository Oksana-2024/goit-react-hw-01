import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendCard}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(isOnline ? css.friendOnline : css.friendOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

