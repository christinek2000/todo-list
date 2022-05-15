import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList';
import CompletedItems from './components/CompletedItems/CompletedItems';
import StartNow from './components/StartNow/StartNow'
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	document.body.style.backgroundColor = '#d1c6e4';
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
								<TodoList />
							</>
						} 
					/>
					<Route 
						path="/completedList" 
						element={
							<>
								<Header />
								<CompletedItems />
							</>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
