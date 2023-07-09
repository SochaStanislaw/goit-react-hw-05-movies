import { searchMovieInfo } from 'API';
import { BtnBack } from 'components/BtnBack/BtnBack';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    searchMovieInfo(movieId).then(movie => {
      setMovieInfo(movie);
    });
  }, [movieId]);

  const { overview, poster_path, title, genres, vote_average, original_title } =
    movieInfo;
  const genre = genres && genres.map(genr => genr.name).join(', ');

  return (
    <section>
      <div>
        <BtnBack location={backLinkHref}></BtnBack>
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            ></img>
          </div>

          <div>
            <h2>{original_title}</h2>
            <p>UserScore: {vote_average}</p>
            <p>Overviews: {overview}</p>
            <p>Genres: {genre}</p>
          </div>
        </div>
      </div>
      <div>
        <p>More info:</p>
        <ul>
          <li>
            <NavLink
              to={`/movies/${movieId}/credits`}
              state={{ from: backLinkHref }}
            >
              Cast:
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/movies/${movieId}/review`}
              state={{ from: backLinkHref }}
            >
              Reviews:
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
}
