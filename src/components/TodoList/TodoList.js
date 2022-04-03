import TodoItem from '../TodoItem/TodoItem';
import AddTodoItem from '../AddTodoItem/AddTodoItem';
import './TodoListStyles.css'

import { Grid } from '@material-ui/core';

function TodoList(props) {
	const renderList = props.items.map((item) => {
		if(!item.isComplete) 
			return (
				<Grid className='item' item xs={12} sm={11} md={6} key={item.id}>
					<TodoItem 
						item={item} 
						deleteHandler={props.deleteHandler} 
						completionHandler={props.completionHandler}
						itemChangeHandler={props.itemChangeHandler}
						dragHandler={props.dragHandler}
						dropHandler={props.dropHandler}
					/>
				</Grid>
			)
		return <></>
	});

	return (
		<Grid 
			container
			spacing={2}
			direction='column'
			alignItems='center'
			justifyContent='center'
		>
			<Grid className='item' item xs={12} sm={11} md={6}>
				<AddTodoItem addHandler={props.addHandler} />
			</Grid>
			{renderList}
		</Grid>
	);
}

export default TodoList;