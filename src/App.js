import './App.css';
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList';
import CompletedItems from './components/CompletedItems/CompletedItems';
import { v4 as uuid_v4 } from 'uuid';

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

	const [items, setItems] = useState([]);
	const [completedItems, setCompletedItems] = useState([]);

	const addHandler = (item) => {
		console.log(item);
		setItems([...items, {id: uuid_v4(), ...item}]);
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

	const itemChangeHandler = (e, id) => {
		e.preventDefault();
		console.log(items);
		console.log(e.target.value);
		const newItems = items.slice().map((item) => {
			if(item.id == id) {
				item.description = e.target.value;
			}
			return item
		}
		);
		console.log(newItems);
		setItems(newItems);
	}

	return (
		<div className="App">
			<div className="innerSection">
				<Router>
					<Header />
					<Routes>
						<Route 
							exact
							path="/"
							element={
								<TodoList
									items={items}
									addHandler={addHandler}
									deleteHandler={deleteHandler}
									completionHandler={completionHandler}
									itemChangeHandler={itemChangeHandler}
								/>
							} 
						/>
						<Route path="/completedList" element={<CompletedItems completedItems={completedItems} />} />
					</Routes>
				</Router>
			</div>	
		</div>
	);
}

export default App;
