import { ADD_TODO, COMPLETE_TODO, DARK_MODE, SET_ONGOING, SET_STALLED } from "../actions";

const initialState = {
  darkMode: true,
  Todos: [
    {
      title: "Buy Coffee",
      description: "To drink coffe",
      date: "Thu Feb 11 2021",
      status: "ONGOING"
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        Todos: [...state.Todos, action.payload],
      };
    case COMPLETE_TODO:
      return {
          ...state,
          Todos: [
            ...state.Todos.slice(0, action.index),
            Object.assign({}, state.Todos[action.index], {
              status: "COMPLETED"
            }),
            ...state.Todos.slice(action.index + 1),
          ]
      }
      case SET_ONGOING:
      return {
          ...state,
          Todos: [
            ...state.Todos.slice(0, action.index),
            Object.assign({}, state.Todos[action.index], {
              status: "ONGOING"
            }),
            ...state.Todos.slice(action.index + 1),
          ]
      }
      case SET_STALLED:
      return {
          ...state,
          Todos: [
            ...state.Todos.slice(0, action.index),
            Object.assign({}, state.Todos[action.index], {
              status: "STALLED"
            }),
            ...state.Todos.slice(action.index + 1),
          ]
      }
      case DARK_MODE: 
      console.log(state.darkMode)
        var mode = !state.darkMode        
        return {
            ...state,
            darkMode: mode
        }

    default:
      return state;
  }
};

export default reducer;
