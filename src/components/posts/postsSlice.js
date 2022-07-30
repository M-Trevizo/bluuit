import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Reddit } from '../../util/Reddit';

export const getFrontPage = createAsyncThunk(
    'posts/getFrontPage',
    async(thunkAPI) => {
        const response = await Reddit.getFrontPage();
        console.log('twice?');
        return response;
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle'
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFrontPage.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(getFrontPage.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const title = action.payload;
                state.posts.push({
                    title: title
                });
            })
            .addCase(getFrontPage.rejected, (state, action) => {
                state.status = 'rejected';
                console.log(action.error);
            })
    }
});

export const selectPosts = state => state.posts;
export const { getPosts } = postsSlice.actions;
export default postsSlice.reducer;