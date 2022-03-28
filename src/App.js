import './App.css';
import TodoList from './components/TodoList';
import CompletedItems from './components/CompletedItems';
import { v4 as uuid_v4 } from 'uuid';

import { useState } from 'react'


function App() {

	const [items, setItems] = useState([]);
	const [completedItems, setCompletedItems] = useState([]);

	const addHandler = (item) => {
		console.log(item);
		setItems([...items, {id: uuid_v4(), ...item}]);
		console.log(items);
	};

	const deleteHandler = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	const completionHandler = (id) => {
		const completedItem = items.find((item) => item.id == id);
		setCompletedItems([...completedItems, completedItem]);
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
		console.log(completedItem);
	}

	return (
		<div className="App">
			<TodoList items={items} addHandler={addHandler} deleteHandler={deleteHandler} completionHandler={completionHandler} />
			<CompletedItems completedItems={completedItems} />
		</div>
	);
}

export default App;
