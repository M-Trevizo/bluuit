//Reddit API 
const Reddit = {

    async getFrontPage() { //TODO Get the actual front page
        const url = 'http://www.reddit.com/.json';
        const init = {
            method: 'GET',
        }
        try {
            const response = await fetch(url, init);
            if(response.ok) {
                const json = await response.json();
                const frontPage = json.data.children; //Array containing posts
                return frontPage;
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