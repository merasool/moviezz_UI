import React, { useState } from 'react';
import styles from '../shows/Show.module.css';

const API_KEY = 'e917400b9fa9a74ac0e599e02750f39d';

export default function Show({ data, title }) {
  const [trailerKey, setTrailerKey] = useState(null);
  const [selectedMovieTitle, setSelectedMovieTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Store providers URLs keyed by movieId
  const [providers, setProviders] = useState({});

  const handlePlay = async (movieId, movieTitle) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
      );
      const json = await res.json();
      const trailer = json.results.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      );
      if (trailer) {
        setTrailerKey(trailer.key);
        setSelectedMovieTitle(movieTitle);
        setIsModalOpen(true);
      } else {
        alert('Trailer not available');
      }
    } catch (err) {
      console.error('Failed to fetch trailer:', err);
    }
  };

  const fetchProviders = async (movieId) => {
    if (providers[movieId]) return; // already fetched
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY}`
      );
      const json = await res.json();
      // Use US region as example, adjust as needed
      const providerInfo = json.results?.US || null;
      setProviders((prev) => ({ ...prev, [movieId]: providerInfo }));
    } catch (err) {
      console.error('Failed to fetch providers:', err);
    }
  };

  const openWatchLink = (movieId) => {
    const providerInfo = providers[movieId];
    if (!providerInfo) {
      alert('Watch providers info not available');
      return;
    }

    // Try to get the most common provider links
    // providerInfo has keys like "flatrate", "buy", "rent" arrays
    // We'll prioritize flatrate (subscription) first, then buy, then rent
    const getUrlFromProvider = (arr) => (arr && arr.length ? arr[0].link : null);

    const url =
      getUrlFromProvider(providerInfo.flatrate) ||
      getUrlFromProvider(providerInfo.buy) ||
      getUrlFromProvider(providerInfo.rent);

    if (url) {
      window.open(url, '_blank');
    } else {
      alert('No direct watch link available');
    }
  };

  return (
    <>
      <h2 className={styles.container}>{title}</h2>
      <div className={styles.moviesGrid}>
        {data.map((movie) => (
          <div
            key={movie.id}
            className={styles.movieCard}
            onMouseEnter={() => fetchProviders(movie.id)} // fetch providers on hover
          >
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className={styles.poster}
              />
            ) : (
              <div className={styles.noImage}>No Image Available</div>
            )}
            <h4 className={styles.movieTitle}>{movie.title}</h4>
            <button
              className={`${styles.button} ${styles.playButton}`}
              onClick={() => handlePlay(movie.id, movie.title)}
            >
              ▶ Play Trailer
            </button>
            <button
              className={`${styles.button} ${styles.watchButton}`}
              onClick={() => openWatchLink(movie.id)}
            >
              ▶ Watch
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close trailer modal"
            >
              ❌
            </button>
            <h2 className={styles.modalTitle}>
              {selectedMovieTitle} - Trailer
            </h2>
            <iframe
              className={styles.iframe}
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube Trailer"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
