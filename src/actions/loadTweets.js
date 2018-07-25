const hostname = 'https://twitter-demo.erodionov.ru';
const secretCode = process.env.REACT_APP_SECRET_CODE || '';

const loadTweets = () => dispatch => fetch(`${hostname}/api/v1/timelines/home/?access_token=${secretCode}`)
  .then(response => response.json())
  .then(tweetsData => dispatch({
    type: 'LOAD_USER_TWEETS',
    payload: tweetsData,
  }))
  .catch(err => err);

export default loadTweets;
