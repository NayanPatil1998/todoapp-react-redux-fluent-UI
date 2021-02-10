export const ADD_TODO = "ADD_TODO";
export const SET_ONGOING = "SET_ONGOING";
export const SET_STALLED = "SET_STALLED";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DARK_MODE = "DARK_MODE";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";


export function addTodo(todo) {
  return { type: ADD_TODO, payload: todo };
}
export function darkMode() {
  return { type: DARK_MODE };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}
export function SetOngoingTodo(index) {
  return { type: SET_ONGOING, index };
}
export function setStalledTodo(index) {
  return { type: SET_STALLED, index };
}
