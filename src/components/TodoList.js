import TodoItem from './TodoItem';
import "./TodoListStyles.css"
import { Grid } from '@material-ui/core';
import AddTodoItem from './AddTodoItem';

function TodoList(props) {
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
					<TodoItem />
				</Grid>
			</Grid>
		</div>
	);
}

export default TodoList;