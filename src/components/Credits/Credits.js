import { searchCredits } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Credits() {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    searchCredits(movieId).then(credit => setCredits(credit));
  }, [movieId]);
  const poster = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <ul>
        {credits.map(item => (
          <li key={item.id}>
            <img
              src={
                item.img
                  ? `${poster}${item.img}`
                  : `https://placehold.jp/d4d4d4/4f4f4f/100x150.png?text=no%20pic%20%3A(`
              }
              alt="poster"
              height={'150px'}
              width={'100px'}
            ></img>

            <p>Actor: {item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
