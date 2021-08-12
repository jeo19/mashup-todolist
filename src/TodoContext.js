import React, { useReducer } from "react";

const initialTodos = [
  { id: 1, text: "Create the project", done: true },
  { id: 2, text: "Styling component", done: true },
  { id: 3, text: "Make the context", done: false },
  { id: 4, text: "Implement the feature", done: false },
];
function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "onToggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type:${action.type}`);
  }
}
export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return children;
}
