import style from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img src={image} alt={name} className={style.img} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.loc}>{location}</p>
      </div>

      <ul className={style.list}>
        <li className={style.item}>
          <span className={style.stats}>Followers</span>
          <span className={style.value}>
            {stats.followers}
          </span>
        </li>
        <li className={style.item}>
          <span className={style.stats}>Views</span>
          <span className={style.value}>{stats.views}</span>
        </li>
        <li className={style.item}>
          <span className={style.stats}>Likes</span>
          <span className={style.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
