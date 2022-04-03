import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList';
import CompletedItems from './components/CompletedItems/CompletedItems';
import StartNow from './components/StartNow/StartNow'
import './App.css';

import { v4 as uuid_v4 } from 'uuid';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'array.prototype.move';

function App() {
	document.body.style.backgroundColor = '#d1c6e4';

	const LOCAL_STORAGE_KEY = "todo";
	const [items, setItems] = useState([]);
	const [dragID, setDragID] = useState();

	useEffect(() => {
		const retrieveList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if(retrieveList) {
			setItems(retrieveList);
		}
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
			if(item.id === id) {
				item.isComplete = true;
			}
			return item;
		});
		setItems(newItems);
	}

	const itemChangeHandler = (e, id) => {
		e.preventDefault();
		const newItems = items.slice().map((item) => {
			if(item.id === id) {
				item.description = e.target.value;
			}
			return item
		});
		setItems(newItems);
	}

	const revertHandler = (id) => {
		const newItems = items.slice().map((item) => {
			if(item.id === id) {
				item.isComplete = false;
			}
			return item
		});
		setItems(newItems);
	}

	const dragHandler = (id) => {
		setDragID(id);
	}

	const dropHandler = (id) => {
		const dragItem = items.find((item) => item.id === dragID);
		const dropItem = items.find((item) => item.id === id);
		
		const newItems = items.slice();
		newItems.move(items.indexOf(dragItem), items.indexOf(dropItem));
		setItems(newItems);
	}

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<StartNow />} />
					<Route 
						path="/todoList"
						element={
							<>
								<Header />
								<TodoList
									items={items}
									addHandler={addHandler}
									deleteHandler={deleteHandler}
									completionHandler={completionHandler}
									itemChangeHandler={itemChangeHandler}
									revertHandler={revertHandler}
									dragHandler={dragHandler}
									dropHandler={dropHandler}
								/>
							</>
						} 
					/>
					<Route 
						path="/completedList" 
						element={
							<>
								<Header />
								<CompletedItems 
									items={items}
									revertHandler={revertHandler} 
								/>
							</>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
