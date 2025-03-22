import css from "./FriendListItem.module.css";

export default function FriendListItem({
  avatar,
  name,
  isOnline,
  id,
}) {
  const classNames = [
    css.status,
    isOnline ? css.isOnlineClass : css.isOfflineClass,
  ].join(" ");

  return (
    <>
      <img
        className={css.img}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.name}>{name}</p>
      <p className={classNames}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}
