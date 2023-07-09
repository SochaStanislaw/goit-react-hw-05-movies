import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrendMovies } from 'API';

import css from './Home.module.css';

import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies()
      .then(movies => {
        setMovies([...movies]);
      })
      .catch(error => console.log({ error }));
  }, []);

  return (
    <section className={css.wrapper}>
      <p className={css.header}>trending today movies</p>
      <MoviesGallery movies={movies}></MoviesGallery>
    </section>
  );
}
