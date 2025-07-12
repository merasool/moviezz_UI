import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/header/Header";
import CardSlider from "../components/CardSlider";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataByGenre, getGenres } from "../store";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";

function MoviePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.movies.movies);
  const genres = useSelector((state) => state.movies.genres);
  const genresLoaded = useSelector((state) => state.movies.genresLoaded);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch all genres on mount
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  // Fetch movies for the first genre once genres are loaded
  useEffect(() => {
    if (genresLoaded && genres.length > 0) {
      dispatch(fetchDataByGenre({ genreId: genres[0].id }));
    }
  }, [genresLoaded, genres, dispatch]);

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setUser(currentUser.uid);
      else navigate("/login");
    });
    return unsubscribe;
  }, [navigate]);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="movie" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;

export default MoviePage;
