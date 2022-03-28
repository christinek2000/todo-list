import TodoItem from './TodoItem';
import "./TodoListStyles.css"
import { Grid } from '@material-ui/core';
import AddTodoItem from './AddTodoItem';

function TodoList(props) {
	console.log(props);

	const renderList = props.items.map((item) => {
		return (
			<TodoItem item={item} deleteHandler={props.deleteHandler} />
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
				<Grid item xs={8} sm={6}>
					Todo List
					<AddTodoItem addHandler={props.addHandler} />
					{renderList}
				</Grid>
			</Grid>
		</div>
	);
}

export default TodoList;