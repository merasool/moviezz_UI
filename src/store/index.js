import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

// Async thunk to get all genres
export const getGenres = createAsyncThunk("movies/genres", async () => {
  const { data } = await axios.get(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  return data;
});

// Async thunk to get movies by genre
export const fetchDataByGenre = createAsyncThunk(
  "movies/fetchDataByGenre",
  async ({ genreId }) => {
    const { data } = await axios.get(
      `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    );
    return data.results;
  }
);

// ✅ Async thunk to get user's liked movies
export const getUsersLikedMovies = createAsyncThunk(
  "movies/getUsersLikedMovies",
  async (email) => {
    const response = await axios.get(
      `http://localhost:5000/api/user/liked/${email}` // Replace with your API endpoint
    );
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeMovieFromLiked: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload.genres;
        state.genresLoaded = true;
      })
      .addCase(fetchDataByGenre.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(getUsersLikedMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

export const { removeMovieFromLiked } = movieSlice.actions;

export const store = configureStore({
  reducer: {
    netflix: movieSlice.reducer, // ✅ change to "netflix" since you're using state.netflix in components
  },
});

// ✅ Export your thunks
