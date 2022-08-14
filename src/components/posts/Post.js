import './Post.css';

export const Post = (post) => {
    //Object destructering
    const { subreddit, title, postText, thumbnail, author, numComments, score, key } = post.post;

    return(
        <section className='post'>
            <h2>{title}</h2>
            <p className='subreddit'>r/{subreddit}</p>
            <p className='post-text'>{postText}</p>
            <img src={thumbnail} alt=''></img>
            <p className='post-info'>submitted by u/{author}</p>
            <p className='post-info'>{numComments}</p>
        </section>
    )
}