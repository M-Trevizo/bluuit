import { Reddit } from '../../util/Reddit';

const subreddit = Reddit.getFrontPage();
const type = typeof subreddit;

export const Post = () => {
    return (
        <section>
            <h2>{type === 'string' ? subreddit : 'Post Title'}</h2>
        </section>
    );
}