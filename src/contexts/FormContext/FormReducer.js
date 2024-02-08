// Actions
export const formActions = {
  UPDATE: "update",
};

// Reducer
export function formReducer(state, action) {
  switch (action.type) {
    case formActions.UPDATE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
