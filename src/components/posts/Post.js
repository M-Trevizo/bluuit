import './Post.css';
import { Comments } from '../../features/comments/Comments';
import { Voting } from '../../features/voting/Voting';
import { marked } from 'marked';

export const Post = (post) => {
    //Object destructering
    const { 
        subreddit, 
        title, 
        postText,
        thumbnail,
        url,
        author,
        numComments,
        score,
        postHint,
        postMedia,
        key
        } = post.post;

    let mediaToDisplay;
    switch(postHint) {
        case 'image': 
            mediaToDisplay = <img src={url} id='url' alt='' />;
        break;
        case 'hosted:video': 
            mediaToDisplay = 
                <video id='video' controls width={postMedia.reddit_video.width} height={postMedia.reddit_video.height}>
                    <source src={postMedia.reddit_video.fallback_url} type='video/mp4' />
                </video>
        break;
        default:
            mediaToDisplay = <img src={thumbnail} id='thumbnail' alt='' />;
    }
    const parsedText = marked.parse(postText);

    const createMarkup = () => {
        return {__html: parsedText};
    }

    return(
        <section className='post'>
            <h2>{title}</h2>
            <p className='subreddit'>r/{subreddit}</p>
            <p className='post-text' dangerouslySetInnerHTML={createMarkup()}></p>
            <Voting id='voting' score={score} />
            {mediaToDisplay}
            <div className='post-info'>
                <p className='info-item'>submitted by u/{author}</p>
                <Comments numComments={numComments} />
            </div>
        </section>
    )
}