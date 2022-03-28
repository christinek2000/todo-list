import './App.css';
import TodoList from './components/TodoList';
import CompletedItems from './components/CompletedItems';
import { v4 as uuid_v4 } from 'uuid';

import { useState } from 'react'


function App() {

	const [items, setItems] = useState([]);

	const addHandler = (item) => {
		console.log(item);
		setItems([...items, {id: uuid_v4(), ...item}]);
		console.log(items);
	};

	const deleteHandler = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	return (
		<div className="App">
			<TodoList items={items} addHandler={addHandler} deleteHandler={deleteHandler} />
			<CompletedItems />
		</div>
	);
}

export default App;
