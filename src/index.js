import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { TodoProvider } from './components/Store/Context';
import todoStore from './components/Store/TodoStore';

ReactDOM.render(
  <TodoProvider value={todoStore}>
    <App />
  </TodoProvider>,
  document.getElementById('root')
);
