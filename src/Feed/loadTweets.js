import hostname, { secretCode } from '../api';

const loadTweets = id => dispatch => fetch(`${hostname}/api/v1/accounts/${id}/statuses?access_token=${secretCode}`)
  .then(response => response.json())
  .then(tweetsData => dispatch({
    type: 'LOAD_USER_TWEETS',
    payload: tweetsData,
  }))
  .catch(err => err);

export default loadTweets;
