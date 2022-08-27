import './Post.css';
import upVote from '../../media/UpVote.svg';
import downVote from '../../media/DownVote.svg';

export const Post = (post) => {
    //Object destructering
    const { subreddit, title, postText, thumbnail, author, numComments, score, key } = post.post;

    return(
        <section className='post'>
            <h2>{title}</h2>
            <p className='subreddit'>r/{subreddit}</p>
            <p className='post-text'>{postText}</p>
            <div className='voting'>
                <img id='up' src={upVote} alt='' />
                <p>{score}</p>
                <img id='down' src={downVote} alt='' />
            </div>
            <img src={thumbnail} alt=''></img>
            <div className='post-info'>
                <p className='info-item'>submitted by u/{author}</p>
                <p className='info-item'>{numComments}</p>
            </div>
        </section>
    )
}