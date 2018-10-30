import { combineReducers } from 'redux';
import user from './Profile/userReducer';
import tweets from './Feed/tweetsReducer';

export default combineReducers({
  user,
  tweets,
});
