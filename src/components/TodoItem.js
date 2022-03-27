
function TodoItem(props) {
	console.log(props);

	const { description } = props.item;

	return(
		<div className="todoItem" >
			{description}
		</div>
	);
}

export default TodoItem;