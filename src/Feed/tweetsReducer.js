const tweets = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USER_TWEETS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default tweets;
