import TodoItem from '../TodoItem/TodoItem';
import "./TodoListStyles.css"
import { Grid } from '@material-ui/core';
import AddTodoItem from '../AddTodoItem/AddTodoItem';

function TodoList(props) {
	console.log(props);

	const renderList = props.items.map((item) => {
		if(!item.isComplete) 
			return (
				<Grid className="item" item xs={12} sm={11} md={6}>
					<TodoItem 
						item={item} 
						deleteHandler={props.deleteHandler} 
						completionHandler={props.completionHandler}
						itemChangeHandler={props.itemChangeHandler}
					/>
				</Grid>
			)
	});

	return (
		<div className="todoList">
			<Grid 
				container
				spacing={2}
				direction="column-reverse"
				alignItems="center" 
				justifyContent="center" 
			>
				{renderList}
				<Grid className="item" item xs={12} sm={11} md={6}>
					<AddTodoItem addHandler={props.addHandler} />
				</Grid>
			</Grid>
		</div>
	);
}

export default TodoList;