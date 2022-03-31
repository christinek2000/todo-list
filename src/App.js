import './App.css';
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList';
import CompletedItems from './components/CompletedItems/CompletedItems';
import { v4 as uuid_v4 } from 'uuid';

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
	document.body.style.backgroundColor = "#d1c6e4";
	const LOCAL_STORAGE_KEY = "todo";

	const [items, setItems] = useState([]);

	useEffect(() => {
		const retrieveList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if(retrieveList) setItems(retrieveList);
	}, [])

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
	}, [items])

	const addHandler = (item) => {
		setItems([...items, {id: uuid_v4(), isComplete: false, ...item}]);
	};

	const deleteHandler = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	const completionHandler = (id) => {
		const newItems = items.slice().map((item) => {
			if(item.id == id) {
				item.isComplete = true;
			}
			return item;
		});
		setItems(newItems);
	}

	const itemChangeHandler = (e, id) => {
		e.preventDefault();
		const newItems = items.slice().map((item) => {
			if(item.id == id) {
				item.description = e.target.value;
			}
			return item
		});
		setItems(newItems);
	}

	const revertHandler = (id) => {
		const newItems = items.slice().map((item) => {
			if(item.id == id) {
				item.isComplete = false;
			}
			return item
		});
		setItems(newItems);
		console.log(newItems);
	}

	return (
		<div className="App">
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
								revertHandler={revertHandler}
							/>
						} 
					/>
					<Route path="/completedList" element={<CompletedItems items={items} revertHandler={revertHandler} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
