import { getFrontPage, selectPosts } from './postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Post.css';

export const Post = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFrontPage());
    }, [dispatch]);
    const posts = useSelector(selectPosts);
    
    const status = posts.status;
    if(status !== 'fulfilled') {
        return (
            <section>
                <h2>Loading...</h2>
            </section>
        )
    }
    else {
        return(
            <section>
                <h2>{posts.posts[0].title}</h2>
                <p>{posts.posts[0].postText}</p>
                <img src={posts.posts[0].thumbnail}></img>
            </section>
        )
    }
}