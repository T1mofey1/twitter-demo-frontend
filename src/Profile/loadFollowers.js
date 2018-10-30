import hostname, { secretCode } from '../api';

const loadFollowers = id => dispatch => fetch(
  `${hostname}/api/v1/accounts/${id}/followers?access_token=${secretCode}`,
)
  .then(response => response.json())
  .then(followersData => dispatch({
    type: 'LOAD_USER_FOLLOWERS',
    payload: followersData,
  }))
  .catch(err => err);

export default loadFollowers;
