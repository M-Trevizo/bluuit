import './Comments.css';
import commentsImg from '../../media/commentsLight.svg';

export const Comments = (numComments) => {
    const comments = numComments.numComments

    return (
        <div className='comments'>
            <img id='comments-logo' className='info-item' src={commentsImg} alt='' />
            <p className='info-item'>{comments} comments</p>
        </div>
    );
}