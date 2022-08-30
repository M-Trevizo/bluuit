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
        isFulfilled: false,
        isRejected: false
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFrontPage.pending, (state, action) => {
                state.isFulfilled = false;
                state.isRejected = false;
            })
            .addCase(getFrontPage.fulfilled, (state, action) => {
                state.isFulfilled = true;
                const frontPage = action.payload;
                let key = 0;
                for(const post of frontPage) {
                    const toPush = {
                        subreddit: post.data.subreddit,
                        title: post.data.title,
                        postText: post.data.selftext,
                        thumbnail: post.data.thumbnail,
                        url: post.data.url,
                        author: post.data.author,
                        numComments: post.data.num_comments,
                        score: post.data.score,
                        key: key
                    }
                    state.posts.push(toPush);
                    key++;
                }
            })
            .addCase(getFrontPage.rejected, (state, action) => {
                state.isRejected = true;
                console.log(action.error);
            })
    }
});

export const selectPosts = state => state.posts;
export const { getPosts } = postsSlice.actions;
export default postsSlice.reducer;