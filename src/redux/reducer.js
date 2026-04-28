const INITIAL_STATE = {
  searchCount: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_SEARCH":
      return { searchCount: state.searchCount + 1 };
    default:
      return state;
  }
};

export default reducer;