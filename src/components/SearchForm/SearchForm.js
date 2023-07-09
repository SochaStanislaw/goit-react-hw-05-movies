import { useSearchParams } from 'react-router-dom';

import css from './SearchForms.module.css';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('querry') || 'enter movie name');
  let search = '';
  const handleChange = ev => {
    search = ev.target.value.toLowerCase();
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    if (search === '') {
      alert('u need type title of movie u looking for');
    }

    setSearchParams({ querry: search });
    ev.target.reset();
  };

  return (
    <form className={css.wrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="type the title of movie"
        onChange={handleChange}
        className={css.form}
      />
      <button className={css.btn} type="submit">
        start searching
      </button>
    </form>
  );
};
