import React from 'react';
import todoStore from "./TodoStore";

const TodoContext = React.createContext(todoStore);

export const TodoProvider = TodoContext.Provider;

export const useTodoStore = () => React.useContext(TodoContext);