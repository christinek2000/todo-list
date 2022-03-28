
function TodoItem(props) {
	console.log(props);

	const { id, description } = props.item;

	return(
		<div className="todoItem" >
			{description}
			<button onClick={() => props.deleteHandler(id)}>x</button>
		</div>
	);
}

export default TodoItem;