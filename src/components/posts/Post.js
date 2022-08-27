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
            <div className='post-info'>
                <p className='info-item'>submitted by u/{author}</p>
                <p className='info-item'>{numComments}</p>
            </div>
        </section>
    )
}