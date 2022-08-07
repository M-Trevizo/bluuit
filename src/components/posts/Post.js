import './Post.css';

export const Post = (post) => {
    //Object destructering
    const { subreddit, title, postText, thumbnail, author, numComments, score, key } = post.post;

    return(
        <section>
            <h2>{title}</h2>
            <p>{postText}</p>
            <img src={thumbnail} alt=''></img>
        </section>
    )
}