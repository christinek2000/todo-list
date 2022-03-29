import "./TodoItemStyles.css"
import deleteButton from "../../img/deleteButton.png"


function TodoItem(props) {
	console.log(props);

	const { id, description } = props.item;

	return(
		<div className="TodoItem">
			<button className="completeButton" onClick={() => props.completionHandler(id)}></button>
			<div className="itemDescription">
				{description}
			</div>
			<button className="deleteButton" onClick={() => props.deleteHandler(id)}>
				<img className="deleteImg" src={deleteButton} alt="deleteButton" />
			</button>
		</div>
	);
}

export default TodoItem;