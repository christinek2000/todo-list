import './App.css';
import TodoList from './components/TodoList';
import CompletedItems from './components/CompletedItems';

import { useState } from 'react'


function App() {

	const [items, setItems] = useState([]);

	const addHandler = (item) => {
		console.log(item);
		setItems([...items, item]);
		console.log(items);
	};

	return (
		<div className="App">
			<TodoList addHandler={addHandler} />
			<CompletedItems />
		</div>
	);
}

export default App;
