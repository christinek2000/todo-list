import './TodoItemStyles.css'
import deleteButton from '../../img/deleteButton.png'
import todoStore from '../Store/TodoStore';
import { observer } from 'mobx-react'

function TodoItem(props) {
	const { id, description } = props.item;

	const itemChangeHandler = (e, id) => {
		e.preventDefault();
		todoStore.setItem(id, e.target.value);
	}

	return(
		<div
			className='TodoItem'
			draggable={true}
			onDragOver={(e) => e.preventDefault()}
			onDragStart={() => todoStore.dragHandler(id)}
			onDrop={() => todoStore.dropHandler(id)}
		>
			<button 
				className='completeButton' 
				onClick={() => todoStore.setCompletionStatus(id, true)}
			></button>
			<div className='itemDescription'>
				<input 
					className='itemInput'
					type='text'
					value={description}
					onChange={(e) => itemChangeHandler(e, id)}
				/>
			</div>
			<button className='deleteButton' onClick={() => todoStore.deleteItem(id)}>
				<img className='deleteImg' src={deleteButton} alt='deleteButton' />
			</button>
		</div>
	);
}

export default observer(TodoItem);