import hostname, { secretCode } from '../api';

const loadUser = id => dispatch => fetch(`${hostname}/api/v1/accounts/${id}?access_token=${secretCode}`)
  .then(response => response.json())
  .then(userData => dispatch({
    type: 'LOAD_USER_DATA',
    payload: userData,
  }))
  .catch(err => err);

export default loadUser;
