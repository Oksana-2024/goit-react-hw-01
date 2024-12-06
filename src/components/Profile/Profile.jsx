import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.avatarContainer}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.text}>{name}</p>
        <p className={css.textDiscr}>@{tag}</p>
        <p className={css.textDiscr}>{location}</p>
      </div>

      <ul className={css.statsList}>
        {Object.entries(stats).map(([key, value]) => (
          <li className={css.statsItem} key={key}>
            <span className={css.statsKey}>{key}</span>
            <span className={css.statsValue}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


