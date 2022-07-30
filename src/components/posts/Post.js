import { getFrontPage, selectPosts } from './postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Post = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFrontPage());
    }, [dispatch]);
    const posts = useSelector(selectPosts);
    

    return (
        <section>
            <h2>{posts.status === 'fulfilled' ? posts.posts[0].title : 'Loading...'}</h2>
        </section>
    );
}