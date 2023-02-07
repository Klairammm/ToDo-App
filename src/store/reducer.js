//come struttura JS un reducer è una funzione

const mainReducer = (state, action) => {
  //riceve come valori state e action
  switch (action.type) {
    case "ADD_TODO_ITEM_TO_LIST":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "REMOVE_TODO_ITEM_COMPLETED_FROM_LIST":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
