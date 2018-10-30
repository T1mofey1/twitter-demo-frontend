import { combineReducers } from 'redux';
import user from './Profile/userReducer';
import followers from './Profile/followersReducer';
import tweets from './Feed/tweetsReducer';

export default combineReducers({
  user,
  followers,
  tweets,
});
