import './Post.css';

export const Post = (post) => {
    return(
        <section>
            <h2>{post.title}</h2>
            <p>{post.postText}</p>
            <img src={post.thumbnail} alt='Post thumbnail'></img>
        </section>
    )
}