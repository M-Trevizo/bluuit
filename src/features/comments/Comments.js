import './Comments.css';
import commentsImg from '../../media/comments.svg';

export const Comments = (numComments) => {
    const comments = numComments.numComments

    return (
        <div className='comments'>
            <img id='comments-logo' className='info-item' src={commentsImg} alt='' />
            <p className='info-item'>{comments}</p>
        </div>
    );
}