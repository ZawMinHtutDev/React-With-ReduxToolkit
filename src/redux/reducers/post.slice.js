import { createSlice } from "@reduxjs/toolkit";
import { POST_SLICE_NAME, fetchAllPosts, fetchPostById, RESET_CURRENT_POST } from "../actions";

const initialState = {
    loading: false,
    error: null,
    data: null,
    current: null,
};

const PostSlice = createSlice({
    name: POST_SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllPosts.fulfilled, (state, { payload, meta }) => {
                state.loading = false;
                state.data = payload;
            })
            .addCase(fetchAllPosts.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error;
            })
            .addCase(fetchPostById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPostById.fulfilled, (state, { payload, meta }) => {
                state.loading = false;
                state.current = payload;
            })
            .addCase(fetchPostById.rejected, (state, { error }) => {
                state.loading = false;
                state.error = error;
            })
            .addCase(RESET_CURRENT_POST, (state) => {
                state.current = null;
            });
    },
});

export default PostSlice.reducer;