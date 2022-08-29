import './Post.css';
import { Comments } from '../../features/comments/Comments';
import { Voting } from '../../features/voting/Voting';

export const Post = (post) => {
    //Object destructering
    const { subreddit, title, postText, thumbnail, author, numComments, score, key } = post.post;

    return(
        <section className='post'>
            <h2>{title}</h2>
            <p className='subreddit'>r/{subreddit}</p>
            <p className='post-text'>{postText}</p>
            <Voting score={score} />
            <img src={thumbnail} alt=''></img>
            <div className='post-info'>
                <p className='info-item'>submitted by u/{author}</p>
                <Comments numComments={numComments} />
            </div>
        </section>
    )
}