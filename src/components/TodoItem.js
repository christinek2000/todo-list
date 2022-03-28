
function TodoItem(props) {
	console.log(props);

	const { id, description } = props.item;

	return(
		<div className="TodoItem">
			<button className="ItemCompleted" onClick={() => props.completionHandler(id)}>.</button>
			{description}
			<button onClick={() => props.deleteHandler(id)}>x</button>
		</div>
	);
}

export default TodoItem;