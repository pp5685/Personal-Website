export default (state = [], action) => {
  switch (action.type) {
    case "GET_JOBS":
      return action.payload;
    default:
      return state;
  }
};
