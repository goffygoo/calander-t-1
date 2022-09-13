const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALL":
      state = [...state, ...action.payload];
      localStorage.setItem("appointMentData", JSON.stringify(state));
      return state;
    case "ADD_APPOINTMENT":
      state = [...state, action.payload];
      localStorage.setItem("appointMentData", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default reducer;
