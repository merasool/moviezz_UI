import { useState, useRef } from 'react';
import styles from './Carousel.module.css';

const Carousel = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      poster: "https://th.bing.com/th/id/OIP._5a041kOs06rEaWLTA-GOQHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      year: "2010",
      videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "Joker",
      poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      description: "A mentally troubled stand-up comedian descends into madness.",
      year: "2019",
      videoUrl: "https://www.youtube.com/embed/zAGVQLHvwOY"
    },
    // Add more movies as needed
  ]);

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -620, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 620, behavior: 'smooth' });
  };

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.arrowLeft} onClick={scrollLeft}>&#10094;</button>
      <div className={styles.carousel} ref={carouselRef}>
        {movies.map(movie => (
          <div key={movie.id} className={styles.card}>
            <img src={movie.poster} alt={movie.title} />
            <div className={styles.details}>
              <h3>{movie.title} ({movie.year})</h3>
              <p>{movie.description}</p>
              {movie.videoUrl && (
                <div className={styles.videoWrapper}>
                  <iframe
                    src={movie.videoUrl}
                    title={movie.title}
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className={styles.arrowRight} onClick={scrollRight}>&#10095;</button>
    </div>
  );
};

export default Carousel;
