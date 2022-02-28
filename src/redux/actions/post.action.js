import { createAsyncThunk } from "@reduxjs/toolkit";

export const POST_SLICE_NAME = "POST";
export const RESET_CURRENT_POST = "RESET_CURRENT_POST";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const GET_CONFIG = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    },
    mode: "cors"
}

export const fetchAllPosts = createAsyncThunk(
    `${POST_SLICE_NAME}/fetchAllPosts`,
    async () => {
        const req = new Request(BASE_URL, GET_CONFIG);

        try {
            const data = await fetch(req).then(res => res.json());
            return data;
        } catch (err) {
            throw err.message;
        }
    }
);

export const fetchPostById = createAsyncThunk(
    `${POST_SLICE_NAME}/fetchPostById`,
    async (id) => {
        const req = new Request(`${BASE_URL}/${id}`, GET_CONFIG);
        
        try {
            const data = await fetch(req).then(res => res.json());
            return data;
        } catch (err) {
            throw err.message;
        }
    }
)

export const resetCurrentPost = () => ({
    type: RESET_CURRENT_POST
})
