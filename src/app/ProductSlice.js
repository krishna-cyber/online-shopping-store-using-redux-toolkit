import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const status = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
});

const initialState = {
  posts: [],
  status: status.IDLE,
  error: null,
};

const ProductSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = status.LOADING;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = status.SUCCEEDED;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.error.message;
      });
  },
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const data = await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data)
    .catch((err) => err.message);
});

export default ProductSlice.reducer;
