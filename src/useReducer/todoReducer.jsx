export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    case "CLEAR_STORAGE":
      return [];
    default:
      return state;
  }
};
