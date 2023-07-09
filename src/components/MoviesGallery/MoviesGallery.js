import { NavLink, useLocation } from 'react-router-dom';

export const MoviesGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title} {movie.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
