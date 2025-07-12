import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

// Async thunk to fetch user's liked movies by email
export const getUsersLikedMovies = createAsyncThunk(
  "movies/getUsersLikedMovies",
  async (email, thunkAPI) => {
    try {
      // Replace with your real API or Firebase fetch logic
      const response = await axios.get(`/api/likedMovies?email=${email}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // You can add other reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersLikedMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersLikedMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(getUsersLikedMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
