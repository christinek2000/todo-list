import './App.css';

import TodoList from './components/TodoList';
import CompletedItems from './components/CompletedItems';


function App() {
	return (
		<div className="App">
			<TodoList />
			<CompletedItems />
		</div>
	);
}

export default App;
