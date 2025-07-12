import React, { useEffect, useState } from 'react';
import Show from '../../components/shows/Show';
import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/Carousel';
import Channels from '../../components/channels/Channels';
import FeaturedShow from '../../components/featured-show/Featuredshow';
import Films from '../../components/films/Film';

const API_KEY = 'e917400b9fa9a74ac0e599e02750f39d';

export default function Home() {
  const [categories, setCategories] = useState({
    popular: [],
    upcoming: [],
    topRated: [],
    nowPlaying: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategory = async (type) => {
    const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${type}`);
    const data = await res.json();
    return data.results;
  };

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [popular, upcoming, topRated, nowPlaying] = await Promise.all([
          fetchCategory('popular'),
          fetchCategory('upcoming'),
          fetchCategory('top_rated'),
          fetchCategory('now_playing'),
        ]);
        setCategories({ popular, upcoming, topRated, nowPlaying });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Header />
      <Carousel />
      <Channels />
      <Films />
      <FeaturedShow />
      
      <h1>Movie Categories</h1>
      <Show data={categories.popular} title="Popular Movies" />
      <Show data={categories.nowPlaying} title="Now Playing" />
      <Show data={categories.upcoming} title="Upcoming Movies" />
      <Show data={categories.topRated} title="Top Rated Movies" />
    </div>
  );
}
