import TodoItem from './TodoItem';
import "./TodoListStyles.css"
import { Grid } from '@material-ui/core';

function TodoList() {
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
					<TodoItem />
				</Grid>
			</Grid>
		</div>
	);
}

export default TodoList;