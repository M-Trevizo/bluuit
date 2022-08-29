import upVote from '../../media/UpVote.svg';
import downVote from '../../media/DownVote.svg';

export const Voting = (score) => {
    return (
        <div className='voting'>
            <img id='up' src={upVote} alt='' />
            <p>{score.score}</p>
            <img id='down' src={downVote} alt='' />
        </div>
    );
}