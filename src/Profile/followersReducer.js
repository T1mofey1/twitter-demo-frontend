const followers = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_USER_FOLLOWERS':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default followers;
