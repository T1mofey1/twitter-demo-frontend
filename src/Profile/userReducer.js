const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_USER_DATA':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default user;
