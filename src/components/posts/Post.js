import './Post.css';
import { Comments } from '../../features/comments/Comments';
import { Voting } from '../../features/voting/Voting';
import { marked } from 'marked';

export const Post = (post) => {
    //Object destructering
    const { subreddit, title, postText, url, thumbnail, author, numComments, score, key } = post.post;

    const imgToDisplay = url.endsWith('.jpg') ? 
        <img src={url} id='url' alt='' /> : 
        <img src={thumbnail} id='thumbnail' alt='' /> ;

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
            {imgToDisplay}
            <div className='post-info'>
                <p className='info-item'>submitted by u/{author}</p>
                <Comments numComments={numComments} />
            </div>
        </section>
    )
}