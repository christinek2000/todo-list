import TodoItem from '../TodoItem/TodoItem';
import AddTodoItem from '../AddTodoItem/AddTodoItem';
import './TodoListStyles.css'

import { Grid } from '@material-ui/core';
import { useTodoStore } from '../Store/Context';
import { observer } from 'mobx-react';
import { v4 as uuid_v4 } from 'uuid';

function TodoList() {
	const todoStore = useTodoStore();
	const renderList = todoStore.todoItems.map((item) => {
		if(!item.isComplete) {
			return (
				<Grid 
					className='item' 
					item 
					xs={12} 
					sm={11} 
					md={6} 
					key={item.id}
				>
					<TodoItem item={item} key={item.id}/>
				</Grid>
			)
		}
	});

	return (
		<Grid 
			container
			spacing={2}
			direction='column'
			alignItems='center'
			justifyContent='center'
		>
			<Grid 
				className='item' 
				item 
				xs={12} 
				sm={11} 
				md={6}
			>
				<AddTodoItem key={uuid_v4()} />
			</Grid>
			{renderList}
		</Grid>
	);
}

export default observer(TodoList);