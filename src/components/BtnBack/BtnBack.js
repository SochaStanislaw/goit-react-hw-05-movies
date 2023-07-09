import { Link } from 'react-router-dom';
import css from './BtnBack.module.css';

export const BtnBack = location => {
  const backLink = location.location;

  return (
    <button className={css.btn} type="button">
      <Link to={backLink}>Go back</Link>
    </button>
  );
};
