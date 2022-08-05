import { getFrontPage, selectPosts } from './postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Post } from './Post';

export const Posts = () => { //Use Map to li tag to list post components
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFrontPage());
    }, [dispatch]);
    const posts = useSelector(selectPosts);
    
    const isFulfilled = posts.isFulfilled;
    const isRejected = posts.isRejected;
    if(isFulfilled === false && isRejected === false) {
        return (
            <section>
                <h2>Loading...</h2>
            </section>
        )
    }
    else if(isRejected === true) {
        return(
            <section>
                <p>There was an error with the request.</p>
            </section>
        )
    }
    else {
        return(
            <section>
                <ul>
                    {posts.posts.map(post => <Post post={post} key={posts.posts.key} />)}
                </ul>
            </section>
        )
    }
}