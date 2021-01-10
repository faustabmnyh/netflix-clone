export const initialState = {
  user: null,
  value: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      // ini masih pembangunan
    case "CHANGE_VALUE":
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
