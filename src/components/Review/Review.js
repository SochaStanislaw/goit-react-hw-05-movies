import { getReviews } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(reviews => {
      setReviews(reviews);
    });
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>no reviews here</p>;
  }

  if (reviews.length > 0) {
    return (
      <div>
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <div>
                <p>Author: {item.author}</p>
                <p>Review: {item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
