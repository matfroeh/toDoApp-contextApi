const contextReducer = (state, action) => {
  let todos;
  
  switch (action.type) {
    case "ADD_TODO": 
      todos = [action.payload, ...state];
      return todos;
    case "DELETE_TODO":
      todos = state.filter((todo) => todo.id !== action.payload);
      return todos;
    case "TOGGLE_TODO":
      todos = state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      return todos;
    case "EDIT_TODO":
      todos = state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
      );
      return todos;
    default:
      return state;
  }
  
};

export default contextReducer;
