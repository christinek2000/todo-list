import './TodoItemStyles.css'
import deleteButton from '../../img/deleteButton.png'

function TodoItem(props) {
	const { id, description } = props.item;

	return(
		<div
			className='TodoItem'
			draggable={true}
			onDragOver={(e) => e.preventDefault()}
			onDragStart={() => props.dragHandler(id)}
			onDrop={() => props.dropHandler(id)}
		>
			<button className='completeButton' onClick={() => props.completionHandler(id)}></button>
			<div className='itemDescription'>
				<input 
					className='itemInput'
					type='text'
					value={description}
					onChange={(e) => props.itemChangeHandler(e, id)}
				/>
			</div>
			<button className='deleteButton' onClick={() => props.deleteHandler(id)}>
				<img className='deleteImg' src={deleteButton} alt='deleteButton' />
			</button>
		</div>
	);
}

export default TodoItem;