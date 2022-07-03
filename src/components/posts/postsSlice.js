import { createSlice } from '@reduxjs/toolkit';

const postslice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        getPosts(state, action) {
            const title = action.payload;
            state.push({
                title: title
            });
        }
    }
});