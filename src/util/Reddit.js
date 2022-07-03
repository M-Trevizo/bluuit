//Reddit API 
const Reddit = {

    async getFrontPage() {
        const url = 'https://www.reddit.com/.json';
        const init = {
            method: 'GET',
            mode: 'cors'
        }
        try {
            const response = await fetch(url, init);
            if(response.ok) {
                const json = await response.json();
                const subreddit = json.data.children[0].data.subreddit;
                console.log(subreddit);
                return subreddit;
            }
            else {
                console.log(response.status);
            }
        }
        catch(err) {
            console.log(err);
        }
        
    }

}

export { Reddit };